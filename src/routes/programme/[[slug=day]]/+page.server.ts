import { dayPeriods } from '../data/constants';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return {
		day:
			dayPeriods.find((dayPeriod) => dayPeriod.label.toLocaleLowerCase() === params.slug)
				?.day ?? 3
	};
};
