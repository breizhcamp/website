import type { Category, Room, Session, Speaker } from './program.types';

export function verifyCategories(sessions: Array<Session>, categories: Array<Category>) {
	const sessionsWithUnknownCategories = sessions
		.map((session) => ({
			...session,
			unknownCategories: session.categoryItems.filter(
				(categoryItemId) => !getCategory(categoryItemId, categories)
			)
		}))
		.filter((session) => session.unknownCategories.length);

	if (sessionsWithUnknownCategories.length) {
		throw `The following sessions have unknown categories: ${sessionsWithUnknownCategories.map((session) => `"${session.title}" (${session.unknownCategories.join(', ')})`).join(', ')}. Please review the sessionize export configuration.`;
	}

	return true;
}

export function verifySpeakers(sessions: Array<Session>, speakers: Array<Speaker>) {
	const sessionsWithUnknownSpeakers = sessions
		.map((session) => ({
			...session,
			unknownSpeakers: session.speakers.filter(
				(speakerId) => !speakers.find((speaker) => speaker.id === speakerId)
			)
		}))
		.filter((session) => session.unknownSpeakers.length);

	if (sessionsWithUnknownSpeakers.length) {
		throw `The following sessions have unknown speakers: ${sessionsWithUnknownSpeakers.map((session) => `"${session.title}" (${session.unknownSpeakers.join(', ')})`).join(', ')}. Please review the sessionize export configuration.`;
	}

	return true;
}

export function verifyRooms(sessions: Array<Session>, rooms: Array<Room>) {
	const sessionsWithUnknownRooms = sessions.filter(
		(session) => !rooms.find((room) => room.id == session.roomId)
	);

	if (sessionsWithUnknownRooms.length) {
		throw `The following sessions have an unknown room: ${sessionsWithUnknownRooms.map((session) => `"${session.title}" (${session.roomId})`).join(', ')}. Please review the sessionize export configuration.`;
	}

	return true;
}

export function getSpeaker(speakerId: string, speakers: Array<Speaker>) {
	return speakers.find((speaker) => speaker.id === speakerId);
}

export function formatSpeaker(speaker: Speaker) {
	return {
		name: speaker.fullName,
		tagline: speaker.tagLine,
		profilePicture: speaker.profilePicture
	};
}

export function getCategory(categoryItemId: number, categories: Array<Category>) {
	return categories
		.map((category) => ({
			...category,
			foundItem: category.items.find((item) => item.id === categoryItemId)
		}))
		.filter((category) => !!category.foundItem)[0]!;
}

export function formatCategory(category: ReturnType<typeof getCategory>) {
	return {
		id: category.foundItem?.id,
		name: category.title,
		value: category.foundItem?.name
	};
}

export function formatSession(
	session: Session,
	rooms: Array<Room>,
	categories: Array<Category>,
	speakers: Array<Speaker>
) {
	return {
		title: session.title,
		description: session.description,
		startAt: new Date(session.startsAt),
		endAt: new Date(session.endsAt),
		dayOfWeek: new Date(session.startsAt).getDay(),
		room: rooms.find((room) => room.id === session.roomId)!.name,
		categories: session.categoryItems
			.map((categoryItemId) => getCategory(categoryItemId, categories))
			.map(formatCategory),
		speakers: session.speakers
			.map((speakerId) => getSpeaker(speakerId, speakers)!)
			.map(formatSpeaker)
	};
}
