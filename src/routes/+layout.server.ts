import {
	formatSession,
	verifyCategories,
	verifyRooms,
	verifySpeakers
} from '$lib/program/program.utils';
import { categories, rooms, sessions, speakers } from '../../static/conferences.json';

export function load() {
	if (!verifyCategories(sessions, categories)) {
		throw '';
	}

	if (!verifySpeakers(sessions, speakers)) {
		throw '';
	}

	if (!verifyRooms(sessions, rooms)) {
		throw '';
	}

	return {
		sessions: sessions.map((session) => formatSession(session, rooms, categories, speakers)),
		categories,
		rooms
	};
}
