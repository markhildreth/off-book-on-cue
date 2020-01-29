<script>
	import { playbackOptions } from "../../stores";
	import { changeUserLineVolume, changeSpeed, changeRepeat } from "../../stores/playback_options";
	import LowVolume from "../icons/LowVolume";
	import HighVolume from "../icons/HighVolume";
	import Walk from "../icons/Walk";
	import Run from "../icons/Run";

	function onUserLineVolumeChanged(ev) {
		changeUserLineVolume(ev.target.valueAsNumber);
	}

	function onSpeedChanged(ev) {
		changeSpeed(ev.target.valueAsNumber);
	}
</script>

<style>
	.button-switch > button {
		@apply border-gray-500 text-gray-500 border border-gray-500;
		padding: 0.5rem 1rem 0.5rem 1rem;
	}

	.button-switch > button:first-child {
		border-radius: 15px 0 0 15px;
	}

	.button-switch > button:first-child:not(.selected) {
		border-right: none;
	}

	.button-switch > button:last-child {
		border-radius: 0 15px 15px 0;
	}

	.button-switch > button:last-child:not(.selected) {
		border-left: none;
	}

	.button-switch > button.selected {
		@apply bg-blue-200 border-blue-400 border-2 font-semibold text-blue-600;
	}
</style>

<div class="py-4 flex flex-col items-center">
	<div class="flex items-center">
		<LowVolume class="w-6 h-6" />
		<input type="range" on:change={onUserLineVolumeChanged} class="m-2" min="0" max="1.0" step="0.1" value={$playbackOptions.userLineVolume} />
		<HighVolume class="w-6 h-6" />
	</div>
	<div class="flex items-center pt-4">
		<Walk class="w-6 h-6" />
		<input type="range" on:change={onSpeedChanged} class="m-2" min="1.0" max="2.0" step="0.1" value={$playbackOptions.speed} />
		<Run class="w-6 h-6" />
	</div>
	<div class="text-tiny">
		|
	</div>
	<div class="button-switch flex justify-center items-center">
		<button on:click={() => changeRepeat(false)} class:selected={!$playbackOptions.sceneRepeat}>Play All</button>
		<button on:click={() => changeRepeat(true)} class:selected={$playbackOptions.sceneRepeat}>Repeat Scene</button>
	</div>
</div>
