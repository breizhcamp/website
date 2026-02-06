export const prerender = false;

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const allPostFiles = import.meta.glob('/src/content/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const resolved = (await resolver()) as {
				metadata: { title: string; date: string; excerpt: string };
			};
			const { metadata } = resolved;
			const slug = path.split('/').pop()?.replace('.md', '') || '';

			return {
				slug,
				...metadata
			};
		})
	);

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	return json(sortedPosts);
};
