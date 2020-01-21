<script>
	import OptionSliders from "./playback/OptionSliders";
	import Speech from "./playback/Speech";
	import Progress from "./playback/Progress";
	import Controls from "./playback/Controls";

	import { playlist, scenes, playback } from "../stores";
	import { back } from "../stores/history";

	function shrink() {
		back();
	}
</script>

<style>
</style>

<div class="flex flex-col items-center h-full">
	<div on:click={shrink} class="h-16 w-full flex justify-center items-center cursor-pointer px-4 border-b">
		<h2 class="text-center">{$playlist.scene.name}</h2>
	</div>
	<OptionSliders />
	<div class="flex-grow">
		<Speech isPlaying={$playback.isPlaying} isUserLine={$playback.isUserLine} />
	</div>
	<Progress elapsedMs={$playback.elapsedMs} durationMs={$playback.durationMs}/>
	<Controls />
</div>
