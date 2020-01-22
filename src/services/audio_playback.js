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
			this._pushUpdate();
		}
		this.track.lastUpdate = newUpdate;
	}

	async load({ trackId }) {
		const track = await localForage.getItem(`track_${trackId}`);
		this.track = {
			id: trackId,
			isPlaying: false,
			elapsedMs: 0,
			breaks: track.breaks,
			durationMs: track.timeMs,
			lastUpdate: new Date()
		}

		this.track.breaks = track.breaks;
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
			elapsedMs: this.track.elapsedMs,
			durationMs: this.track.durationMs,
			isMyLine: this.track.breaks.findIndex(ms => ms > this.track.elapsedMs) % 2 == 1
		});
	}
}

