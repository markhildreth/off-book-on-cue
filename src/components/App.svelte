<script>
	import { appState, currentScene } from "../stores";
	import Loading from "./Loading.svelte";
	import Header from "./Header.svelte";
	import Landing from "./Landing.svelte";
	import How from "./How.svelte";
	import Info from "./Info.svelte";
	import Play from "./Play.svelte";
	import Plays from "./Plays.svelte";
	import DeletePlays from "./DeletePlays.svelte";
	import Error from "./Error.svelte";
	import NewPlay from "./NewPlay.svelte";
	import Record from "./Record.svelte";
	import PlaybackBar from "./PlaybackBar.svelte";
	import Playback from "./Playback.svelte";
	import EditScene from "./EditScene.svelte";

	$: screen = $appState.screen;
	$: showPlaybackFooter = $currentScene != null && screen !== "playback";
</script>

<div class="flex flex-col h-full max-w-lg">
	{#if screen !== "loading"}
	<header class="h-16">
		<Header />
	</header>
	{/if}

	<div class="flex-1 overflow-scroll">
		{#if screen === "loading"}
		<Loading />
		{:else if screen === "landing"}
		<Landing />
		{:else if screen === "delete_plays"}
		<DeletePlays deletePlayId={$appState.deletePlayId} />
		{:else if screen === "how"}
		<How />
		{:else if screen === "info"}
		<Info />
		{:else if screen === "new_play"}
		<NewPlay />
		{:else if screen === "plays"}
		<Plays />
		{:else if screen === "play"}
		<Play playId={$appState.playId} deleteSceneId={$appState.deleteSceneId} />
		{:else if screen === "record"}
		<Record playId={$appState.playId} />
		{:else if screen === "playback" }
		<Playback />
		{:else if screen === "edit_scene" }
		<EditScene sceneId={$appState.sceneId} />
		{:else if screen === "error" }
		<Error message={$appState.message} />
		{:else}
		<Error message={`Unknown screen "${screen}"`} />
		{/if}
	</div>

	{#if showPlaybackFooter}
	<footer class="top-shadow h-16">
		<PlaybackBar />
	</footer>
	{/if}
</div>
