import { EventSubscription } from "./event_subscription";

const FULL_VOLUME = 1.0;
const NORMAL_SPEED = 1.0;

export class TrackPlayer {
	constructor() {
		this.playbackOptions = {
			userLineVolume: FULL_VOLUME,
			speed: NORMAL_SPEED,
		};
		this.track = null;
		this.events = new EventSubscription();
		this.on = this.events.on.bind(this.events);
		this._trigger = this.events.trigger.bind(this.events);
	}

	tick() {
		if (this.track == null) return;

		const newUpdate = new Date();
		if (this.track.isPlaying) {
			const elapsedMs = this.track.node.currentTime * 1000;
			const isMyLine = this.track.breaks.findIndex(ms => ms > elapsedMs) % 2 == 1
			this.track.node.volume = isMyLine ? this.playbackOptions.userLineVolume : FULL_VOLUME;
			this.track.isMyLine = isMyLine;
			this.track.elapsedMs = elapsedMs;
			this._pushUpdate();
		}
		this.track.lastUpdate = newUpdate;
	}

	load({ track }) {
		const url = URL.createObjectURL(track.blob);
		const node = new Audio(url);
		node.playbackRate = this.playbackOptions.speed;

		this.track = {
			node,
			breaks: track.breaks,
			isPlaying: false,
			isMyLine: false,
			elapsedMs: 0,
			durationMs: track.durationMs,
			lastUpdate: new Date()
		}

		this.track.breaks = track.breaks;
		this._pushUpdate();
		this._pushOptionsUpdate();
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

	changeUserLineVolume(newVolume) {
		this.playbackOptions.userLineVolume = newVolume;
		this._pushOptionsUpdate();
	}

	changeSpeed(newSpeed) {
		if (this.track != null) {
			this.track.node.playbackRate = newSpeed;
		}

		this.playbackOptions.speed = newSpeed;
		this._pushOptionsUpdate();
	}

	_pushUpdate() {
		this._trigger("update", {
			isPlaying: this.track.isPlaying,
			elapsedMs: this.track.elapsedMs,
			durationMs: this.track.durationMs,
			isMyLine: this.track.isMyLine,
		});
	}

	_pushOptionsUpdate() {
		this._trigger("options_update", { ...this.playbackOptions });
	}
}

