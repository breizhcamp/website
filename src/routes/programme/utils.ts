import { dayPeriods, type Event } from './constants';

export function getDaysFromSchedule(schedule: Array<Event>) {
	const days = schedule
		.map((event) => event.event_start)
		.map((event) => new Date(Date.UTC(event.getFullYear(), event.getMonth(), event.getDate())));
	return Array.from(new Set(days.map((day) => day.getTime())))
		.sort((timeA, timeB) => timeA - timeB)
		.map((time) => new Date(time));
}

export function getRoomsFromSchedule(schedule: Array<Event>) {
	const venues = schedule.map((event) => event.venue);
	return Array.from(new Set(venues)).sort((roomA, roomB) => roomA.localeCompare(roomB));
}

export function getEventTypesFromSchedule(schedule: Array<Event>) {
	const eventTypes = schedule.map((event) => event.event_type);
	return Array.from(new Set(eventTypes)).sort((eventTypeA, eventTypeB) =>
		eventTypeA.localeCompare(eventTypeB)
	);
}

export function pairTimes<T>(times: T[]): { startAt: T; endAt: T }[] {
	return times.slice(0, -1).map((t, i) => ({ startAt: t, endAt: times[i + 1]! }));
}

export function groupSessionsByRoom(
	sessions: Array<Event>,
	rooms: Array<string>
): Record<string, Array<Event>> {
	const res = rooms.reduce(
		(acc, room) => {
			acc.push([room, sessions.filter((session) => session.venue === room)]);
			return acc;
		},
		[] as Array<[room: string, sessions: Array<Event>]>
	);
	return Object.fromEntries(res);
}

export function groupSessionsBySlots(
	sessions: Array<Event>,
	slots: Array<{ startAt: Date; endAt: Date; format: string }>
): Array<{ startAt: Date; endAt: Date; format: string; sessions: Array<Event> }> {
	return slots.reduce(
		(acc, slot) => {
			acc.push({
				...slot,
				sessions: sessions.filter(
					(session) =>
						session.event_start.getTime() >= slot.startAt.getTime() &&
						session.event_end.getTime() <= slot.endAt.getTime()
				)
			});
			return acc;
		},
		[] as Array<{ startAt: Date; endAt: Date; format: string; sessions: Array<Event> }>
	);
}

type Filter = {
	search: string;
	dayOfWeek: number;
	eventTypes: Array<string>;
};

export function filterSessions(schedule: Array<Event>, filter: Filter) {
	const regex = new RegExp(filter.search.split(' ').join('|'), 'i');

	return schedule
		.filter((event) => event.day_of_week === filter.dayOfWeek)
		.map((event) => {
			const isEventTypeSelected =
				!filter.eventTypes.length || filter.eventTypes.includes(event.event_type);

			const isEventSearched = !filter.search || regex.test(event.search);

			return {
				...event,
				filter: (isEventTypeSelected && isEventSearched
					? 'visible'
					: 'hidden') as Event['filter']
			};
		});
}

export function groupSessionsBySlotsAndRooms(
	daySessions: Array<Event>,
	eventRooms: Array<string>,
	selectedDayOfWeek: number
) {
	return groupSessionsBySlots(
		daySessions,
		dayPeriods.find((period) => period.day === selectedDayOfWeek)!.times!
	).map(({ sessions, ...rest }) => ({
		...rest,
		sessions: groupSessionsByRoom(sessions, eventRooms)
	}));
}

export type DaySessionsBySlot = ReturnType<typeof groupSessionsBySlotsAndRooms>[number];

export function formatDate(date: Date) {
	return `${(date.getHours() - 2).toFixed().padStart(2, '0')}h${date.getMinutes().toFixed().padStart(2, '0')}`;
}

export function sortEvents(eventA: Event, eventB: Event) {
	return eventA.event_start.getTime() - eventB.event_start.getTime();
}

export function getThemeIndex(eventTypes: Array<string>, event: Event) {
	return eventTypes.findIndex((eventType) => eventType === event.event_type);
}

export function getDuration(event: Event) {
	return (event.event_end.getTime() - event.event_start.getTime()) / 1000 / 60;
}
