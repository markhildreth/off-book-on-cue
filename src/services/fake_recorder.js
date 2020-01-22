import { EventSubscription } from "./event_subscription";

export class FakeRecorder {
	constructor() {
		this.recording = null;

		this.events = new EventSubscription();
		this.on = this.events.on.bind(this.events);
		this._trigger = this.events.trigger.bind(this.events);
	}

	tick() {
		if (this.recording == null) return;
		this._update();
	}

	start() {
		this.recording = {
			startTime: new Date(),
			isMyLine: false,
			breaks: []
		};
		this._trigger("started", {
			elapsedMs: 0,
			isMyLine: false
		});
	}

	setMyLine(isMyLine) {
		if (this.recording.isMyLine !== isMyLine) {
			this.recording.breaks.push(new Date() - this.recording.startTime);
		}
		this.recording.isMyLine = isMyLine;
		this._update();
	}

	finish({ trackId }) {
		const timeMs = new Date() - this.recording.startTime;
		const breaks = this.recording.breaks;
		this.recording = null;
		this._trigger("finished", {
			trackId,
			data: {
				breaks,
				timeMs
			}
		});
	}

	cancel() {
		this.recording = null;
	}

	_update() {
		this._trigger("update", {
			elapsedMs: new Date() - this.recording.startTime,
			isMyLine: this.recording.isMyLine
		});
	}
}
