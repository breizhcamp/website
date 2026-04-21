import type { ParamMatcher } from '@sveltejs/kit';
import { dayPeriods } from '../routes/programme/data/constants';

export const match = ((param: string): param is 'mercredi' | 'jeudi' | 'vendredi' => {
	return dayPeriods
		.map((dayPeriod) => dayPeriod.label)
		.map((day) => day.toLocaleLowerCase())
		.includes(param);
}) satisfies ParamMatcher;
