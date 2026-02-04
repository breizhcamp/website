import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

// Fonction pour lire tous les articles Markdown
function getAllPosts(): BlogPost[] {
	const postsDirectory = path.join(process.cwd(), 'src/content/blog');

	try {
		const filenames = fs.readdirSync(postsDirectory);
		const posts = filenames
			.filter((name: string) => name.endsWith('.md'))
			.map((name: string) => {
				const fullPath = path.join(postsDirectory, name);
				const fileContents = fs.readFileSync(fullPath, 'utf8');
				const { data } = matter(fileContents);

				return {
					slug: data['slug'] || name.replace('.md', ''),
					title: data['title'],
					excerpt: data['excerpt'],
					date: data['date'],
					category: data['category'],
					image: data['image']
				} as BlogPost;
			});

		return posts;
	} catch (error) {
		console.error('Erreur lors de la lecture des articles:', error);
		return [];
	}
}

export const GET: RequestHandler = async () => {
	const posts = getAllPosts();

	// Trier les articles par date (plus récent en premier)
	const sortedPosts = posts.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	return json(sortedPosts);
};
