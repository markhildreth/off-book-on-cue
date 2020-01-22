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
		const events = this.events[eventName] || NO_EVENTS;
		for (const subscription of events) {
			subscription(args);
		}
	}
}
