const NO_SUBSCRIPTIONS = [];

export class EventSubscription {
	constructor() {
		this.events = {};
	}

	on(eventName, callback) {
		this.events[eventName] = (this.events[eventName] || []);
		this.events[eventName].push(callback);
	}

	trigger(eventName, args) {
		const subscriptions = this.events[eventName] || NO_SUBSCRIPTIONS;
		for (const subscription of subscriptions) {
			subscription(args);
		}
	}
}
