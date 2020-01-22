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
			isMyLine: false
		};
		this._trigger("started", {
			elapsedMs: 0,
			isMyLine: false
		});
	}

	setMyLine(isMyLine) {
		this.recording.isMyLine = isMyLine;
		this._update();
	}

	finish({ trackId }) {
		this.recording = null;
		this._trigger("finished", {
			trackId
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
