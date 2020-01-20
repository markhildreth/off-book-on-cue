<script>
	export let id;

	import { plays, scenes } from "../stores";
	import { push } from "../stores/history";
	import { selectScene } from "../stores/currentScene";

	$: play = $plays.plays[id];
	$: sceneInfos = play.scenes.map(sceneId => {
		const scene = $scenes.scenes[sceneId];
		return { id: sceneId, name: scene.name };
	});

	function sceneSelected(sceneId) {
		selectScene({ playId: id, sceneId });
	}
</script>

<div class="relative w-full h-full">
	<div on:click={push("/play/record", { id })} class="absolute top-0 right-0 p-4 m-8 h-16 w-16 bg-red-400 rounded-full flex items-center justify-center cursor-pointer">
		REC
	</div>
	{#if sceneInfos.length === 0}
	<p class="text-center mt-4 text-xl">No Scenes recorded.</p>
	{:else}
	<ul class="text-md w-full h-full overflow-y-scroll">
		{#each sceneInfos as scene (scene.id)}
		<li on:click={() => sceneSelected(scene.id)} class="p-4 border-b-2 cursor-pointer">{scene.name}</li>
		{/each}
	</ul>
	{/if}
</div>
