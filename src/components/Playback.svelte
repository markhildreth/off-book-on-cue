<script>
	import OptionSliders from "./playback/OptionSliders";
	import Speech from "./playback/Speech";
	import Progress from "./playback/Progress";
	import Controls from "./playback/Controls";

	import { playlist, scenes } from "../stores";
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
		<Speech />
	</div>
	<Progress />
	<Controls />
</div>
