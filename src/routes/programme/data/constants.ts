import { sortEventsDate } from '../utils';
import _keynotesAndLunch from './keynotesAndLunch.json';
import _schedule from './schedule.json';
import _scheduleNotConfirmed from './scheduleNotConfirmed.json' assert { type: 'json' };
import _speakers from './speakers.json';
import { editionDateWednesday, editionDateThursday, editionDateFriday } from '$lib/constants';

type ScheduleEvent = {
	id: string;
	name: string;
	event_start: string;
	event_end: string;
	event_type: string;
	format: string;
	venue: string;
	venue_id: string;
	speakers?: string | null;
	description?: string;
	video_url?: string | null;
	files_url?: string | null;
	slides_url?: string | null;
	level?: 'Introduction' | 'Standard' | 'Avancé';
};

type AsideSession = {
	id: string;
	name: string;
	format: string;
	venue: string;
	event_start: Date;
	event_end: Date;
	day_of_week: 3 | 4 | 5;
	event_type: string;
	venue_id: string;
	filter: 'visible' | 'hidden';
};

type Talk = {
	id: string;
	name: string;
	description: string;
	speakers: Array<Speaker | string>;
	// language: string;
	format: string;
	venue: string;
	search: string;
	event_start: Date;
	event_end: Date;
	day_of_week: 3 | 4 | 5;
	event_type: string;
	venue_id: string;
	video_url: string | null;
	files_url: string | null;
	slides_url: string | null;
	level: 'Introduction' | 'Standard' | 'Avancé';
	filter: 'visible' | 'hidden';
};

export type Session = AsideSession | Talk;

export type Speaker = {
	id: string;
	lastname: string;
	firstname: string;
	imageProfilURL: string | null;
	bio: string;
	github: null;
	googleplus: null;
	twitter: null;
	social: null;
};

export type PeriodTime = (typeof dayPeriods)[number]['times'][number];

// writeFileSync(
// 	'./schedule-not-confirmed.json',
// 	JSON.stringify(
// 		_schedule
// 			.filter((s1) => !_schedule2.some((s2) => s1.id === s2.id))
// 			.map((s) => ({
// 				...s,
// 				name: 'Bientôt annoncé',
// 				event_type: 'A venir',
// 				speakers: undefined,
// 				video_url: undefined,
// 				files_url: undefined,
// 				slides_url: undefined,
// 				description: undefined
// 			})),
// 		null,
// 		2
// 	)
// );

export const dayPeriods = [
	{
		day: 3,
		label: 'Mercredi',
		date: editionDateWednesday,
		times: [
			{
				startAt: new Date(editionDateWednesday + 'T09:00:00.000Z'),
				endAt: new Date(editionDateWednesday + 'T10:00:00.000Z'),
				label: 'Accueil'
			},
			{
				startAt: new Date(editionDateWednesday + 'T10:00:00.000Z'),
				endAt: new Date(editionDateWednesday + 'T12:00:00.000Z'),
				label: 'Universités & conférences'
			},
			{
				startAt: new Date(editionDateWednesday + 'T12:00:00.000Z'),
				endAt: new Date(editionDateWednesday + 'T13:30:00.000Z'),
				label: 'Déjeuner'
			},
			{
				startAt: new Date(editionDateWednesday + 'T13:30:00.000Z'),
				endAt: new Date(editionDateWednesday + 'T15:30:00.000Z'),
				label: 'Universités & conférences'
			},
			{
				startAt: new Date(editionDateWednesday + 'T15:30:00.000Z'),
				endAt: new Date(editionDateWednesday + 'T16:00:00.000Z'),
				label: 'Pause'
			},
			{
				startAt: new Date(editionDateWednesday + 'T16:00:00.000Z'),
				endAt: new Date(editionDateWednesday + 'T18:00:00.000Z'),
				label: 'Universités & conférences'
			}
		]
	},
	{
		day: 4,
		label: 'Jeudi',
		date: editionDateThursday,
		times: [
			{
				startAt: new Date(editionDateThursday + 'T08:00:00.000Z'),
				endAt: new Date(editionDateThursday + 'T10:00:00.000Z'),
				label: 'Accueil & keynote'
			},
			{
				startAt: new Date(editionDateThursday + 'T10:00:00.000Z'),
				endAt: new Date(editionDateThursday + 'T10:30:00.000Z'),
				label: 'Pause'
			},
			{
				startAt: new Date(editionDateThursday + 'T10:30:00.000Z'),
				endAt: new Date(editionDateThursday + 'T11:30:00.000Z'),
				label: 'Conférences'
			},
			{
				startAt: new Date(editionDateThursday + 'T11:30:00.000Z'),
				endAt: new Date(editionDateThursday + 'T12:30:00.000Z'),
				label: 'Conférences'
			},
			{
				startAt: new Date(editionDateThursday + 'T12:30:00.000Z'),
				endAt: new Date(editionDateThursday + 'T13:30:00.000Z'),
				label: 'Déjeuner & capsules'
			},
			{
				startAt: new Date(editionDateThursday + 'T13:30:00.000Z'),
				endAt: new Date(editionDateThursday + 'T14:30:00.000Z'),
				label: 'Conférences'
			},
			{
				startAt: new Date(editionDateThursday + 'T14:30:00.000Z'),
				endAt: new Date(editionDateThursday + 'T15:30:00.000Z'),
				label: 'Conférences'
			},
			{
				startAt: new Date(editionDateThursday + 'T15:30:00.000Z'),
				endAt: new Date(editionDateThursday + 'T16:00:00.000Z'),
				label: 'Pause'
			},
			{
				startAt: new Date(editionDateThursday + 'T16:00:00.000Z'),
				endAt: new Date(editionDateThursday + 'T17:00:00.000Z'),
				label: 'Conférences'
			},
			{
				startAt: new Date(editionDateThursday + 'T17:00:00.000Z'),
				endAt: new Date(editionDateThursday + 'T17:30:00.000Z'),
				label: 'Tools in action'
			},
			{
				startAt: new Date(editionDateThursday + 'T17:30:00.000Z'),
				endAt: new Date(editionDateThursday + 'T18:00:00.000Z'),
				label: 'Tools in action'
			},
			{
				startAt: new Date(editionDateThursday + 'T18:00:00.000Z'),
				endAt: new Date(editionDateThursday + 'T19:00:00.000Z'),
				label: 'Keynote'
			}
		]
	},
	{
		day: 5,
		label: 'Vendredi',
		date: editionDateFriday,
		times: [
			{
				startAt: new Date(editionDateFriday + 'T08:00:00.000Z'),
				endAt: new Date(editionDateFriday + 'T10:00:00.000Z'),
				label: 'Accueil & keynote'
			},
			{
				startAt: new Date(editionDateFriday + 'T10:00:00.000Z'),
				endAt: new Date(editionDateFriday + 'T10:30:00.000Z'),
				label: 'Pause'
			},
			{
				startAt: new Date(editionDateFriday + 'T10:30:00.000Z'),
				endAt: new Date(editionDateFriday + 'T11:30:00.000Z'),
				label: 'Conférences'
			},
			{
				startAt: new Date(editionDateFriday + 'T11:30:00.000Z'),
				endAt: new Date(editionDateFriday + 'T12:30:00.000Z'),
				label: 'Conférences'
			},
			{
				startAt: new Date(editionDateFriday + 'T12:30:00.000Z'),
				endAt: new Date(editionDateFriday + 'T13:30:00.000Z'),
				label: 'Déjeuner & capsules'
			},
			{
				startAt: new Date(editionDateFriday + 'T13:30:00.000Z'),
				endAt: new Date(editionDateFriday + 'T14:30:00.000Z'),
				label: 'Conférences'
			},
			{
				startAt: new Date(editionDateFriday + 'T14:30:00.000Z'),
				endAt: new Date(editionDateFriday + 'T15:30:00.000Z'),
				label: 'Conférences'
			},
			{
				startAt: new Date(editionDateFriday + 'T15:30:00.000Z'),
				endAt: new Date(editionDateFriday + 'T16:00:00.000Z'),
				label: 'Pause'
			},
			{
				startAt: new Date(editionDateFriday + 'T16:00:00.000Z'),
				endAt: new Date(editionDateFriday + 'T16:30:00.000Z'),
				label: 'Conférences'
			},
			{
				startAt: new Date(editionDateFriday + 'T16:30:00.000Z'),
				endAt: new Date(editionDateFriday + 'T17:00:00.000Z'),
				label: 'Keynote'
			}
		]
	}
];

const speakers = _speakers as Array<Speaker>;

const scheduleNotConfirmed = _scheduleNotConfirmed as Array<ScheduleEvent>;

const schedule = [
	(_schedule as Array<ScheduleEvent>).map((event) => {
		const eventStart = new Date(`${event.event_start}Z`);
		const _speakers = event.speakers
			? event.speakers.split(', ').map((fullName) => {
					// FIXME this is not serious
					const s = speakers.find(
						(speaker) => fullName === `${speaker.firstname} ${speaker.lastname}`
					);
					return s ?? fullName;
				})
			: null;
		return {
			...event,
			event_start: eventStart,
			event_end: new Date(`${event.event_end}Z`),
			day_of_week: eventStart.getDay(),
			search: `${event.name} ${event.speakers ? event.speakers.replace('/,/', '') : ''}`,
			speakers: _speakers,
			filter: 'visible'
		} as Session;
	}),
	_keynotesAndLunch.map((kAndL) => {
		const date = dayPeriods.find((dayPeriod) => dayPeriod.day === kAndL.day_of_week)?.date;

		if (!date) {
			throw '!!! keynote and lunch day_of_week are not 3 (Wednesday), 4 (Thursday) or 5 (Friday).';
		}

		return {
			...kAndL,
			event_start: new Date(`${kAndL.event_start.replace('<DAY>', date)}Z`),
			event_end: new Date(`${kAndL.event_end.replace('<DAY>', date)}Z`),
			filter: 'visible'
		} as AsideSession;
	}),
	scheduleNotConfirmed.map((event) => {
		const eventStart = new Date(`${event.event_start}Z`);
		return {
			...event,
			event_start: eventStart,
			event_end: new Date(`${event.event_end}Z`),
			day_of_week: eventStart.getDay(),
			filter: 'visible'
		} as AsideSession;
	})
]
	.flat()
	.sort(sortEventsDate);

export { schedule, speakers };
