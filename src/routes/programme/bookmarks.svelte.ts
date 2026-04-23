import { browser } from '$app/environment';

class Bookmarks {
	private ids: Array<string>;

	constructor() {
		this.ids = $state([]);

		if (browser) {
			this.ids = JSON.parse(localStorage.getItem('bookmarks') ?? '[]');
		}
	}

	toggle(id: string) {
		const index = this.ids.findIndex((savedId) => savedId === id);
		if (index >= 0) {
			this.ids.splice(index, 1);
		} else {
			this.ids.push(id);
		}
		this.updateLocalStorage();
	}

	updateLocalStorage() {
		if (!browser) return;
		localStorage.setItem('bookmarks', JSON.stringify(this.ids));
	}

	isKnown(id: string) {
		return !!this.ids.find((savedId) => savedId === id);
	}
}

export const bookmarks = new Bookmarks();
