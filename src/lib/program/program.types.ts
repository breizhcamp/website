import { categories, rooms, sessions, speakers } from '../../../static/conferences.json';

export type Session = (typeof sessions)[number];
export type Speaker = (typeof speakers)[number];
export type Category = (typeof categories)[number];
export type Room = (typeof rooms)[number];
