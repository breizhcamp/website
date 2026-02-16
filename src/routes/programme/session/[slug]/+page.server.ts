import { error } from '@sveltejs/kit';
import { schedule } from '../../data/constants';

export const load = async ({ params }) => {
	const event = schedule.find((event) => event.id === params.slug);

	if (event) {
		return event;
	}

	error(404, 'Not found');
};
