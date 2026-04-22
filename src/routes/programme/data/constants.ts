import { sortEventsDate } from '../utils';
import _keynotesAndLunch from './keynotesAndLunch.json';
import _schedule from './schedule.json';
import _scheduleNotConfirmed from './scheduleNotConfirmed.json';
import _speakers from './speakers.json';

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
		date: '2026-06-24',
		times: [
			{
				startAt: new Date('2026-06-24T09:00:00.000Z'),
				endAt: new Date('2026-06-24T10:00:00.000Z'),
				label: 'Accueil'
			},
			{
				startAt: new Date('2026-06-24T10:00:00.000Z'),
				endAt: new Date('2026-06-24T12:00:00.000Z'),
				label: 'Universités & conférences'
			},
			{
				startAt: new Date('2026-06-24T12:00:00.000Z'),
				endAt: new Date('2026-06-24T13:30:00.000Z'),
				label: 'Déjeuner'
			},
			{
				startAt: new Date('2026-06-24T13:30:00.000Z'),
				endAt: new Date('2026-06-24T15:30:00.000Z'),
				label: 'Universités & conférences'
			},
			{
				startAt: new Date('2026-06-24T15:30:00.000Z'),
				endAt: new Date('2026-06-24T16:00:00.000Z'),
				label: 'Pause'
			},
			{
				startAt: new Date('2026-06-24T16:00:00.000Z'),
				endAt: new Date('2026-06-24T18:00:00.000Z'),
				label: 'Universités & conférences'
			}
		]
	},
	{
		day: 4,
		label: 'Jeudi',
		date: '2026-06-25',
		times: [
			{
				startAt: new Date('2026-06-25T08:00:00.000Z'),
				endAt: new Date('2026-06-25T10:00:00.000Z'),
				label: 'Accueil & keynote'
			},
			{
				startAt: new Date('2026-06-25T10:00:00.000Z'),
				endAt: new Date('2026-06-25T10:30:00.000Z'),
				label: 'Pause'
			},
			{
				startAt: new Date('2026-06-25T10:30:00.000Z'),
				endAt: new Date('2026-06-25T11:30:00.000Z'),
				label: 'Conférences'
			},
			{
				startAt: new Date('2026-06-25T11:30:00.000Z'),
				endAt: new Date('2026-06-25T12:30:00.000Z'),
				label: 'Conférences'
			},
			{
				startAt: new Date('2026-06-25T12:30:00.000Z'),
				endAt: new Date('2026-06-25T13:30:00.000Z'),
				label: 'Déjeuner & capsules'
			},
			{
				startAt: new Date('2026-06-25T13:30:00.000Z'),
				endAt: new Date('2026-06-25T14:30:00.000Z'),
				label: 'Conférences'
			},
			{
				startAt: new Date('2026-06-25T14:30:00.000Z'),
				endAt: new Date('2026-06-25T15:30:00.000Z'),
				label: 'Conférences'
			},
			{
				startAt: new Date('2026-06-25T15:30:00.000Z'),
				endAt: new Date('2026-06-25T16:00:00.000Z'),
				label: 'Pause'
			},
			{
				startAt: new Date('2026-06-25T16:00:00.000Z'),
				endAt: new Date('2026-06-25T17:00:00.000Z'),
				label: 'Conférences'
			},
			{
				startAt: new Date('2026-06-25T17:00:00.000Z'),
				endAt: new Date('2026-06-25T17:30:00.000Z'),
				label: 'Tools in action'
			},
			{
				startAt: new Date('2026-06-25T17:30:00.000Z'),
				endAt: new Date('2026-06-25T18:00:00.000Z'),
				label: 'Tools in action'
			},
			{
				startAt: new Date('2026-06-25T18:00:00.000Z'),
				endAt: new Date('2026-06-25T19:00:00.000Z'),
				label: 'Keynote'
			},
			{
				startAt: new Date('2026-06-25T19:00:00.000Z'),
				endAt: new Date('2026-06-25T23:00:00.000Z'),
				label: 'Soirée'
			}
		]
	},
	{
		day: 5,
		label: 'Vendredi',
		date: '2026-06-26',
		times: [
			{
				startAt: new Date('2026-06-26T08:00:00.000Z'),
				endAt: new Date('2026-06-26T10:00:00.000Z'),
				label: 'Accueil & keynote'
			},
			{
				startAt: new Date('2026-06-26T10:00:00.000Z'),
				endAt: new Date('2026-06-26T10:30:00.000Z'),
				label: 'Pause'
			},
			{
				startAt: new Date('2026-06-26T10:30:00.000Z'),
				endAt: new Date('2026-06-26T11:30:00.000Z'),
				label: 'Conférences'
			},
			{
				startAt: new Date('2026-06-26T11:30:00.000Z'),
				endAt: new Date('2026-06-26T12:30:00.000Z'),
				label: 'Conférences'
			},
			{
				startAt: new Date('2026-06-26T12:30:00.000Z'),
				endAt: new Date('2026-06-26T13:30:00.000Z'),
				label: 'Déjeuner & capsules'
			},
			{
				startAt: new Date('2026-06-26T13:30:00.000Z'),
				endAt: new Date('2026-06-26T14:30:00.000Z'),
				label: 'Conférences'
			},
			{
				startAt: new Date('2026-06-26T14:30:00.000Z'),
				endAt: new Date('2026-06-26T15:30:00.000Z'),
				label: 'Conférences'
			},
			{
				startAt: new Date('2026-06-26T15:30:00.000Z'),
				endAt: new Date('2026-06-26T16:00:00.000Z'),
				label: 'Pause'
			},
			{
				startAt: new Date('2026-06-26T16:00:00.000Z'),
				endAt: new Date('2026-06-26T16:30:00.000Z'),
				label: 'Conférences'
			},
			{
				startAt: new Date('2026-06-26T16:30:00.000Z'),
				endAt: new Date('2026-06-26T17:00:00.000Z'),
				label: 'Keynote'
			}
		]
	}
];

const speakers = _speakers as Array<Speaker>;

const schedule = [
	_schedule.map((event) => {
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
			search: `${event.name} ${event.speakers.replace('/,/', '')}`,
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
	_scheduleNotConfirmed.map((event) => {
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
