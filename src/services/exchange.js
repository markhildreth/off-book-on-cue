export class Exchange {
	constructor() {
		this.subscriptions = {}
	}

	push(queueName, args={}) {
		// console.info("[" + queueName + "]", args);
		Object.freeze(args);
		const subscriptions = this.subscriptions[queueName];

		if (subscriptions == null) {
			console.warn(`Event "${queueName}" has no subscribers`);
			return;
		}

		subscriptions.map(subscription => {
			const promise = new Promise((resolve, reject) => {
				subscription(args);
			});
			promise.catch(e => {
				// TODO: Something better
				console.error(e);
			});
		});
	}

	subscribe(queueName, callback) {
		if (this.subscriptions[queueName] == null) {
			this.subscriptions[queueName] = [];
		}
		this.subscriptions[queueName].push(callback);
	}
}
