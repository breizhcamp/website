import {
	DISPLAY_FAKE_ONES,
	DISPLAY_ONLY_FAKE_ONES,
	partners,
	sponsorLevels,
	sponsors,
	type Sponsor,
	type SponsorId
} from './constants';

export function getSponsors(level: SponsorId) {
	let result: Array<Sponsor> = [];

	if (!DISPLAY_ONLY_FAKE_ONES) {
		result = [...sponsors, ...partners]
			.sort((a, b) => a.name.localeCompare(b.name))
			.filter((sponsor) => !sponsor.hidden)
			.filter((sponsor) => sponsor.level === level);
	}

	if (DISPLAY_ONLY_FAKE_ONES || DISPLAY_FAKE_ONES) {
		const defaultSponsorCount =
			sponsorLevels.find((sponsorLevel) => sponsorLevel.id === level)?.defaultSponsorCount ??
			0;

		while (result.length < defaultSponsorCount) {
			result.push({ name: 'Bientôt annoncé', logo: null, url: null, level });
		}
	}

	return result;
}
