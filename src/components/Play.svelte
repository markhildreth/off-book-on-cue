<script>
	export let playId;
	export let deleteSceneId = null;

	import Modal from "./Modal.svelte";
	import { plays, scenes, currentScene } from "../stores";
	import { push, back } from "../stores/history";
	import { selectScene, clearSelectedScene } from "../stores/currentScene";
	import { changeScene } from "../stores/playback";
	import { deleteScene } from "../stores/scenes";
	import { deleteSceneFromPlay } from "../stores/plays";
	import Microphone from "./icons/Microphone";

	$: play = $plays.plays[playId];
	$: sceneInfos = play.scenes.map(sceneId => {
		const scene = $scenes.scenes[sceneId];
		return {
			id: sceneId,
			name: scene.name,
			isCurrent: $currentScene && $currentScene.sceneId === sceneId
		};
	});

	$: sceneToDelete = $scenes.scenes[deleteSceneId];

	function sceneSelected(sceneId) {
		selectScene({ playId, sceneId });
		changeScene({ sceneId });
	}

	function onRecordClicked() {
		push("/play/record", { playId });
	}

	function onEditSceneClicked(sceneId) {
		push("/play/scene/edit", { playId, sceneId });
	}

	function onDeleteSceneClicked(sceneId) {
		push("/play", { playId, deleteSceneId: sceneId });
	}

	function onDeleteSceneConfirm() {
		back();
		clearSelectedScene();
		deleteSceneFromPlay({ playId, sceneId: deleteSceneId });
		deleteScene({ sceneId: deleteSceneId });
		localForage.removeItem(`track_${deleteSceneId}`);
	}
</script>

<ul class="text-md w-full h-full overflow-y-scroll">
	{#each sceneInfos as scene (scene.id)}
		<li class="p-4 border-b-2 cursor-pointer flex items-center justify-between" class:bg-blue-200={scene.isCurrent} on:click={() => sceneSelected(scene.id)}>
			<span class="mx-4">{scene.name}</span>
			<div class:invisible={!scene.isCurrent}>
				<button on:click|stopPropagation={onEditSceneClicked(scene.id)} class="button px-1 py-1">
					<svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M8.707 19.707L18 10.414 13.586 6l-9.293 9.293a1.003 1.003 0 00-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 000-2.828L19.414 3a2 2 0 00-2.828 0L15 4.586 19.414 9 21 7.414z"/>
					</svg>
				</button>
				<button on:click|stopPropagation={onDeleteSceneClicked(scene.id)} class="button px-1 py-1">
					<svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M6 7H5v13a2 2 0 002 2h10a2 2 0 002-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"/>
					</svg>
				</button>
			</div>
		</li>
	{/each}
	<li on:click={onRecordClicked} class="p-4 border-b-2 cursor-pointer flex justify-between items-center">
		Record New Scene
		<Microphone class="h-8 text-red-600 fill-current" />
	</li>
</ul>

{#if sceneToDelete}
	<Modal onClose={back}>
		<p class="text-md">Are you sure you wish to delete scene '{sceneToDelete.name}'?</p>
		<div class="flex justify-end items-center mt-4">
			<button on:click={onDeleteSceneConfirm} class="button button-red">Delete</button>
			<button on:click={back} class="ml-4 button">Cancel</button>
		</div>
	</Modal>
{/if}
