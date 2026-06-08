export const editionYear = 2026;

export const editionDatesShort = '24-26 juin ' + editionYear;
export const editionDatesLong = '24 au 26 juin ' + editionYear;

export const editionDateWednesday = `${editionYear}-06-24`;
export const editionDateThursday = `${editionYear}-06-25`;
export const editionDateFriday = `${editionYear}-06-26`;

// 0 = January, 5 = June in javascript...
export const firstWednesdayOfEvent = new Date(editionYear, 5, 24);
