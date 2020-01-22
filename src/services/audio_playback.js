import { EventSubscription } from "./event_subscription";

export class FakeAudioPlayer {
	constructor() {
		this.track = null;
		this.events = new EventSubscription();
		this.on = this.events.on.bind(this.events);
		this._trigger = this.events.trigger.bind(this.events);
	}

	tick() {
		if (this.track == null) return;

		const newUpdate = new Date();
		if (this.track.isPlaying) {
			this.track.elapsedMs += newUpdate - this.track.lastUpdate;
			this.track.isMyLine = Math.floor(this.track.elapsedMs / 5000) % 2 === 1;
			this._pushUpdate();
		}
		this.track.lastUpdate = newUpdate;
	}

	load({ trackId }) {
		this.track = {
			id: trackId,
			isPlaying: false,
			isMyLine: false,
			elapsedMs: 0,
			durationMs: 120000,
			lastUpdate: new Date()
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
			isMyLine: this.track.isMyLine,
			elapsedMs: this.track.elapsedMs,
			durationMs: this.track.durationMs
		});
	}
}

