import { EventSubscription } from "./event_subscription";

export class FakeAudioPlayer {
	constructor() {
		this.lastUpdate = new Date();
		this.track = null;
		this.events = new EventSubscription();
		this.on = this.events.on.bind(this.events);
		this._trigger = this.events.trigger.bind(this.events);
	}

	tick() {
		if (this.track == null || !this.track.isPlaying) return;

		const newUpdate = new Date();
		this.track.elapsedMs += newUpdate - this.lastUpdate;
		this.track.isUserLine = Math.floor(this.track.elapsedMs / 5000) % 2 === 1;
		this.lastUpdate = newUpdate;
		this._pushUpdate();
	}

	load({ trackId }) {
		this.track = {
			id: trackId,
			isPlaying: false,
			isUserLine: false,
			elapsedMs: 0,
			durationMs: 120000
		}
		this._pushUpdate();
	}

	pause() {
		if (this.track == null) return;
		this.track.isPlaying = false;
		this._pushUpdate();
	}

	resume() {
		if (this.track == null) return;
		this.track.isPlaying = true;
		this._pushUpdate();
	}

	_pushUpdate() {
		this._trigger("update", {
			isPlaying: this.track.isPlaying,
			isUserLine: this.track.isUserLine,
			elapsedMs: this.track.elapsedMs,
			durationMs: this.track.durationMs
		});
	}
}

