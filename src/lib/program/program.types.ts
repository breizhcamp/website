import { categories, rooms, sessions, speakers } from '../../../static/conferences.json';

export namespace Json {
	export type Session = (typeof sessions)[number];
	export type Speaker = (typeof speakers)[number];
	export type Category = (typeof categories)[number];
	export type Room = (typeof rooms)[number];
}

export namespace Formatted {
	export type Session = {
		title: string;
		description: string;
		startAt: Date;
		endAt: Date;
		dayOfWeek: number;
		room: string;
		categories: Formatted.Category[];
		speakers: Formatted.Speaker[];
	};
	export type Speaker = {
		name: string;
		tagline: string;
		profilePicture: string | null;
	};
	export type Category = {
		id: number | undefined;
		name: string;
		value: string | undefined;
	};
	export type Room = string;
}
