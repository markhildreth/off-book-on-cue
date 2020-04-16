<script>
	export let deletePlayId = null;

	import Modal from "./Modal.svelte";
	import { plays, currentScene } from "../stores";
	import { clearSelectedScene } from "../stores/currentScene";
	import { deleteScene } from "../stores/scenes";
	import { deletePlay } from "../stores/plays";
	import { push, replace, back } from "../stores/history";

	$: ids = Object.keys($plays.plays);
	$: playToDelete = $plays.plays[deletePlayId];

	function onPlayClicked(deletePlayId) {
		push("/delete_plays", { deletePlayId });
	}

	function onDeletePlayConfirm() {
		const playId = deletePlayId;
		if ($currentScene && $currentScene.playId === playId) {
			clearSelectedScene();
		}

		playToDelete.scenes.forEach(sceneId => {
			deleteScene({ sceneId });
			localForage.removeItem(`track_${sceneId}`);
		});
		deletePlay({ playId });
		replace("/");
	}
</script>

<div class="flex flex-col justify-start items-center">
	<h1 class="text-2xl my-4 text-center">Choose Play to Delete</h1>
	{#each ids as id (id)}
	<button on:click={() => { onPlayClicked(id) }} class="button button-red w-1/2 button-lg mb-4">{$plays.plays[id].name}</button>
	{/each}
</div>

{#if playToDelete}
	<Modal onClose={back}>
		<p class="text-md">Are you sure you wish to delete play '{playToDelete.name}'? This will also delete ALL recordings for this play.</p>
		<div class="flex justify-end items-center mt-4">
			<button on:click={onDeletePlayConfirm} class="button button-red">Delete</button>
			<button on:click={back} class="ml-4 button">Cancel</button>
		</div>
	</Modal>
{/if}
