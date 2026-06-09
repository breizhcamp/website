/**
 * Dedupe all space like characters (\s) and trims the string
 * @param str
 */
export const dedupeSpaces = (str: string) => {
	return str.trim().replace(/\s+/g, ' ');
};

export const escapeString = (str: string, escapes: Array<[string, string]>) => {
	return escapes.reduce(
		(acc, [regexp, replacement]) => acc.replace(new RegExp(regexp, 'g'), replacement),
		str
	);
};

/**
 * Escape a string to be used in xml
 * @param str
 */
export const escapeXmlString = (str: string) => {
	return escapeString(str, [
		['&', '&#38;'],
		['<', '&#60;'],
		['>', '&#62;'],
		["'", '&#39;'],
		['"', '&#34;']
	]);
};

/**
 * Check wether the date is a valid date
 * @param date
 */
export function isValid(date: undefined | Date): date is Date {
	return !!date && !isNaN(date.getTime());
}

/**
 * Set a default date if the date is not valid or undefined
 * @param date
 * @param defaultDateType
 */
export function getDefaultDate(
	date: undefined | Date,
	defaultDateType: 'undefined' | 'today' = 'undefined'
) {
	return isValid(date) ? date : defaultDateType === 'undefined' ? undefined : new Date();
}

/**
 * Convert a primitive/date to a Date object
 * @param dateAny
 * @param defaultDateType
 */
export function toDate(
	dateAny: undefined | string | number | Date,
	defaultDateType: 'undefined' | 'today' = 'undefined'
) {
	let date: Date | undefined;
	if (dateAny) {
		date = new Date(dateAny);
	}
	return getDefaultDate(date, defaultDateType);
}

type Post = {
	title: string;
	description: string;
	date: string | number | Date;
	link: string;
	image?: {
		length?: number;
		type: string;
		url: string;
	};
};

type Rss = {
	title: string;
	description: string;
	link: string;
	ttlInMin: number;
	posts: Array<Post>;
};

export function getRss({ title, description, link, ttlInMin, posts }: Rss) {
	const pubDate = toDate((posts?.[0] as Post)?.date, 'today')?.toUTCString();

	const rssPosts = posts
		.map((entry) => {
			const enclosure = entry.image
				? `<enclosure ${entry.image.length ? `length="${entry.image.length}" ` : ''} type="${entry.image.type}" url="${entry.image.url}" />`
				: '';
			return ` <item>
                <title>${escapeXmlString(entry.title)}</title>
                <link>${entry.link}</link>
                <guid>${entry.link}</guid>
                <pubDate>${toDate(entry.date, 'today')?.toUTCString()}</pubDate>
                <description>${escapeXmlString(entry.description)}</description>
                ${enclosure}
            </item> `;
		})
		.join('');

	const rss = `<?xml version="1.0" encoding="UTF-8" ?>
        <rss version="2.0">
            <channel>
                <title>${escapeXmlString(title)}</title>
                <description>${escapeXmlString(description)}</description>
                <link>${link}</link>
                <lastBuildDate>${pubDate}</lastBuildDate>
                <pubDate>${pubDate}</pubDate>
                <ttl>${ttlInMin}</ttl>
                ${rssPosts}
            </channel>
        </rss>
`;

	return dedupeSpaces(rss);
}
