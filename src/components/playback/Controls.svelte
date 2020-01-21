<script>
	export let playId;
	export let isPlaying;
	export let prevSceneId;
	export let nextSceneId;

	import Prev from "../icons/Prev";
	import Play from "../icons/Play";
	import Pause from "../icons/Pause";
	import Next from "../icons/Next";

	import { changeScene, pause, resume } from "../../stores/playback";
	import { selectScene } from "../../stores/currentScene";

	function onPrev() {
		if (prevSceneId) {
			selectScene({ playId, sceneId: prevSceneId });
			changeScene({ sceneId: prevSceneId });
		}
	}
	function onPause() {
		pause();
	}

	function onPlay() {
		resume();
	}

	function onNext() {
		if (nextSceneId) {
			selectScene({ playId, sceneId: nextSceneId });
			changeScene({ sceneId: nextSceneId });
		}
	}
</script>

<div class="flex justify-center items-center mb-4">
	<div on:click={onPrev} class:text-gray-300={prevSceneId == null}>
		<Prev class="h-12 cursor-pointer fill-current"/>
	</div>
	{#if isPlaying}
		<div on:click={onPause}>
			<Pause class="h-20 cursor-pointer" />
		</div>
	{:else}
		<div on:click={onPlay}>
			<Play class="h-20 cursor-pointer" />
		</div>
	{/if}
	<div on:click={onNext} class:text-gray-300={nextSceneId == null}>
		<Next class="h-12 cursor-pointer fill-current" />
	</div>
</div>
