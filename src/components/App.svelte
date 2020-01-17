<script>
	import { appState } from "../app_state.js";
	import Header from "./Header.svelte";
	import Landing from "./Landing.svelte";
	import How from "./How.svelte";
	import Play from "./Play.svelte";
	import Error from "./Error.svelte";
	import NewPlay from "./NewPlay.svelte";

	$: screen = $appState.screen;
</script>

<header class="fixed h-16 w-full top-0">
	<Header />
</header>

<div class="h-full w-full pt-16">
	{#if screen === "landing"}
	<Landing />
	{:else if screen === "how"}
	<How />
	{:else if screen === "new_play"}
	<NewPlay />
	{:else if screen === "play"}
	<Play id={$appState.id} />
	{:else if screen === "error" }
	<Error message={$appState.message} />
	{:else}
	<Error />
	{/if}
</div>
