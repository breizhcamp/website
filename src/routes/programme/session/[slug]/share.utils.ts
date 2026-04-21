import { PUBLIC_BASE_URL } from '$env/static/public';
import type { Session } from '../../data/constants';

function formatTitle(data: Session) {
	return `BreizhCamp - ${data.name}`;
}

function formatDetails(data: Session) {
	return `- format : ${data.format}
- thème : ${data.event_type}${
		'description' in data &&
		`

Description : ${data.description?.substring(0, 250)}...`
	}`;
}

export function addToGoogleCalendar(data: Session) {
	function formatDate(date: Date): string {
		return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'T+2';
	}

	const params: Record<string, string> = {
		action: 'TEMPLATE',
		text: formatTitle(data),
		dates: `${formatDate(data.event_start)}/${formatDate(data.event_end)}`,
		details: formatDetails(data),
		location: data.venue
	};

	const url = new URL('https://calendar.google.com/calendar/render');

	url.search = new URLSearchParams(params).toString();

	window.open(url.toString(), '_blank');
}

export function downloadIcsFile(data: Session) {
	function formatDate(date: Date): string {
		return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'T+2';
	}

	const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
UID:${Date.now()}
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(data.event_start)}
DTEND:${formatDate(data.event_end)}
SUMMARY:${formatTitle(data)}
DESCRIPTION:${formatDetails(data)
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/,/g, '\\,')
		.replace(/;/g, '\\;')}
LOCATION:${location}
END:VEVENT
END:VCALENDAR
  `.trim();

	const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
	const url = URL.createObjectURL(blob);

	const link = document.createElement('a');
	link.href = url;
	link.download = `breizhcamp-${data.name.toLocaleLowerCase().replace(/ /g, '-')}.ics`;
	link.click();

	URL.revokeObjectURL(url);
}

export function share(data: Session) {
	if (!navigator.share) {
		return;
	}

	try {
		navigator.share({
			title: formatTitle(data),
			text:
				('description' in data && data.description?.substring(0, 120)) ||
				'Rejoins la session du BreizhCamp !',
			url: `${PUBLIC_BASE_URL}/programme/session/${data.id}`
		});
	} catch (_err) {
		/** */
	}
}
