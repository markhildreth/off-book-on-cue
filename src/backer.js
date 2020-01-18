import localForage from "localforage";

export class Backer {
	constructor(config) {
		this.configs = Object.entries(config).map(([key, store]) => ({
			key,
			store
		}));
	}

	async initialize() {
		// Start loading the data for the stores.
		const loadPromises = this.configs.map(async config => {
			const data = await localForage.getItem(config.key);
			if (data) {
				config.store.set(data);
			}
		});

		await Promise.all(loadPromises);

		// subscribe to each store to store data on update.
		// Note that this must be done AFTER the promises have
		// set the store. Otherwise, it's possible that we will
		// overwrite the stores with default store data.
		this.configs.map(config => {
			config.store.subscribe(async d => {
				localForage.setItem(config.key, d);
			});
		});
	}
}
