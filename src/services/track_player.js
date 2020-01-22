import { EventSubscription } from "./event_subscription";

export class TrackPlayer {
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
			this._pushUpdate();
		}
		this.track.lastUpdate = newUpdate;
	}

	load({ track }) {
		const url = URL.createObjectURL(track.blob);
		const node = new Audio(url);

		this.track = {
			node,
			isPlaying: false,
			breaks: track.breaks,
			durationMs: track.durationMs,
			lastUpdate: new Date()
		}

		this.track.breaks = track.breaks;
		this._pushUpdate();
	}

	pause() {
		if (this.track == null) return;
		this.track.isPlaying = false;
		this.track.node.pause();
		this._pushUpdate();
	}

	resume() {
		if (this.track == null) return;
		this.track.isPlaying = true;
		this.track.node.play();
		this._pushUpdate();
	}

	_pushUpdate() {
		const elapsedMs = this.track.node.currentTime * 1000;
		this._trigger("update", {
			isPlaying: this.track.isPlaying,
			elapsedMs,
			durationMs: this.track.durationMs,
			isMyLine: this.track.breaks.findIndex(ms => ms > elapsedMs) % 2 == 1
		});
	}
}

