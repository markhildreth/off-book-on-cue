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

<div class="w-full h-full flex flex-col">
	<div on:click={shrink} class="relative w-full flex justify-center items-center h-16 cursor-pointer border-b" style="min-height: 4rem;">
		<h2>{$playlist.scene.name}</h2>
		<svg class="pb-1 absolute w-4 bottom-0 text-gray-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
			<path d="M1.5 1L0 2.5l4 4 4-4L6.5 1 4 3.5 1.5 1z"/>
		</svg>
	</div>
	<div class="flex-grow overflow-scroll">
		<div class="flex flex-col container m-auto px-4 h-full">
			<OptionSliders />
			<div class="flex-grow">
				<Speech isPlaying={$playback.isPlaying} isMyLine={$playback.isMyLine} />
			</div>
			<Progress elapsedMs={$playback.elapsedMs} durationMs={$playback.durationMs}/>
			<Controls playId={$playlist.playId} isPlaying={$playback.isPlaying} prevSceneId={$playlist.prevSceneId} nextSceneId={$playlist.nextSceneId} />
		</div>
	</div>
</div>
