import type { Json } from '$lib/program/program.types';
import {
	formatSession,
	verifyCategories,
	verifyRooms,
	verifySpeakers
} from '$lib/program/program.utils';
import { categories, rooms, sessions, speakers } from '../../static/conferences.json';

export function load() {
	verifyCategories(sessions, categories);
	verifySpeakers(sessions, speakers);
	verifyRooms(sessions, rooms);

	return {
		sessions: sessions.map((session) => formatSession(session, rooms, categories, speakers)),
		categories: categories as Array<Json.Category>,
		rooms: rooms as Array<Json.Room>
	};
}
