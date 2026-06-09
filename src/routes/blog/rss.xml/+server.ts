import { PUBLIC_BASE_URL } from '$env/static/public';
import { getRss } from '$lib/rss.utils';

type Post = {
	title: string;
	date: string;
	excerpt?: string;
	banner?: string;
};

export const prerender = true;

function getImage(banner: string | undefined) {
	return banner
		? {
				type: mimeTypeFromFilename(banner),
				url: `${PUBLIC_BASE_URL}${banner}`
			}
		: {
				type: 'image/jpeg',
				url: `${PUBLIC_BASE_URL}/home/conference-atelier.jpeg`
			};
}

async function getBlogPosts() {
	const glob: Record<string, { metadata: Post }> = import.meta.glob(
		'/src/routes/blog/**/+page.md',
		{
			eager: true
		}
	);

	const posts = await Object.entries(glob)
		.map(([path, post]) => ({ ...post.metadata, path }))
		.map(({ path, excerpt, ...metadata }) => ({
			...metadata,
			description: excerpt ?? 'Lisez cet excellent article de blog du BreizhCamp !',
			link: `${PUBLIC_BASE_URL}${path.replace('/src/routes', '').replace('/+page.md', '')}`,
			image: getImage(metadata.banner)
		}))
		.sort((a, b) => (a.date < b.date ? 1 : -1));

	return posts;
}

export async function GET() {
	const posts = await getBlogPosts();

	const rss = getRss({
		title: 'BreizhCamp Blog',
		description: 'Latest news from BreizhCamp',
		link: `${PUBLIC_BASE_URL}/blog`,
		ttlInMin: 60,
		posts
	});

	return new Response(rss, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8'
		}
	});
}

function mimeTypeFromFilename(filename: string): string {
	const ext = filename.split('.').pop()?.toLowerCase();

	switch (ext) {
		case 'png':
			return 'image/png';
		case 'jpg':
		case 'jpeg':
			return 'image/jpeg';
		case 'webp':
			return 'image/webp';
		case 'gif':
			return 'image/gif';
		case 'svg':
			return 'image/svg+xml';
		default:
			return 'application/octet-stream';
	}
}
