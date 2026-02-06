export const prerender = false;

import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

// Interface pour les articles
interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	category?: string;
	image?: string;
	content?: string;
}

// Fonction pour lire un article spécifique
function getPostBySlug(slug: string): BlogPost | null {
	const postsDirectory = path.join(process.cwd(), 'src/content/blog');

	try {
		const filenames = fs.readdirSync(postsDirectory);
		const filename = filenames.find(
			(name: string) =>
				name.endsWith('.md') && (name.replace('.md', '') === slug || name.includes(slug))
		);

		if (!filename) {
			return null;
		}

		const fullPath = path.join(postsDirectory, filename);
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		const { data, content } = matter(fileContents);

		// Convertir le Markdown en HTML
		const htmlContent = marked(content);

		return {
			slug: data['slug'] || filename.replace('.md', ''),
			title: data['title'],
			excerpt: data['excerpt'],
			date: data['date'],
			category: data['category'],
			image: data['image'],
			content: htmlContent
		} as BlogPost;
	} catch (err) {
		console.error("Erreur lors de la lecture de l'article:", err);
		return null;
	}
}

export const GET: RequestHandler = async ({ params }) => {
	const post = getPostBySlug(params.slug);

	if (!post) {
		throw error(404, 'Article non trouvé');
	}

	return json(post);
};
