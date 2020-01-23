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
	<div on:click={shrink} class="w-full flex justify-center items-center h-16 cursor-pointer border-b" style="min-height: 4rem;">
		<h2 class="text-center">{$playlist.scene.name}</h2>
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
