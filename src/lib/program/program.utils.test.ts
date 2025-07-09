import { describe, expect, it } from 'vitest';
import { verifyCategories, verifySpeakers } from './program.utils';

const session = {
	id: '892551',
	title: "🔓 RFID, MIFARE, chambre d'hôtel et flipper0 : décryptage sans contact",
	description:
		'Pas besoin d’être un génie du hacking ou de porter un sweat à capuche pour comprendre comment fonctionnent les badges MIFARE et autres périphériques RFID. Avec un peu de matériel – voire juste un smartphone – on peut en apprendre beaucoup… et faire bien plus que vous ne l’imaginez.  \r\n\r\nAlors, comment ça marche ? Quels sont les risques ? Et surtout, comment se protéger efficacement ? Si vous développez des produits utilisant ces technologies, quelques bonnes pratiques peuvent faire toute la différence.  \r\n\r\nPrêt à plonger dans les coulisses du RFID ? C’est parti. 🚀',
	startsAt: '2025-06-26T13:05:00',
	endsAt: '2025-06-26T13:20:00',
	isServiceSession: false,
	isPlenumSession: false,
	speakers: ['a93932b4-8308-4fba-b918-04467f3ca1b5'],
	categoryItems: [325282],
	questionAnswers: [],
	roomId: 57579,
	liveUrl: null,
	recordingUrl: null,
	status: 'Accepted',
	isInformed: true,
	isConfirmed: true
};

const speaker = {
	id: 'a93932b4-8308-4fba-b918-04467f3ca1b5',
	firstName: 'Nicolas',
	lastName: 'Ledez',
	bio: null,
	tagLine: 'Devops guru @ CGWire',
	profilePicture: 'https://sessionize.com/image/676e-400o400o1-DuqeMkm76i3NqTf2r4n7aD.jpg',
	isTopSpeaker: false,
	links: [],
	sessions: [892551, 892554],
	fullName: 'Nicolas Ledez',
	categoryItems: [],
	questionAnswers: []
};

const category = {
	id: 90809,
	title: 'Format',
	items: [
		{
			id: 325282,
			name: 'Conférence (55 min)',
			sort: 1
		}
	],
	sort: 0,
	type: 'session'
};

describe('verifyCategories', () => {
	it('should not throw if arrays are empty', () => {
		expect(verifyCategories([], [])).toBeTruthy();
	});

	it('should throw if categories only are present', () => {
		const expectedError = `The following sessions have unknown categories: "🔓 RFID, MIFARE, chambre d'hôtel et flipper0 : décryptage sans contact" (325282). Please review the sessionize export configuration.`;
		expect(() => verifyCategories([session], [])).toThrowError(expectedError);
	});

	it('should not throw if categories only are present', () => {
		expect(verifyCategories([], [category])).toBeTruthy();
	});

	it('should not throw if all categories are known and there is no category label superfluous', () => {
		expect(verifyCategories([session], [category])).toBeTruthy();
	});
});

describe('verifySpeakers', () => {
	it('should not throw if arrays are empty', () => {
		expect(verifySpeakers([], [])).toBeTruthy();
	});

	it('should throw if sessions only are present', () => {
		const expectedError =
			'The following sessions have unknown speakers: "🔓 RFID, MIFARE, chambre d\'hôtel et flipper0 : décryptage sans contact" (a93932b4-8308-4fba-b918-04467f3ca1b5). Please review the sessionize export configuration.';
		expect(() => verifySpeakers([session], [])).toThrowError(expectedError);
	});

	it('should not throw if speakers only are present', () => {
		expect(verifySpeakers([], [speaker])).toBeTruthy();
	});

	it('should not throw if all speakers of the sessions are present in the speakers object', () => {
		expect(verifySpeakers([session], [speaker])).toBeTruthy();
	});
});
