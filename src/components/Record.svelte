<script>
	import { recording } from "../stores";
	import Name from "./record/Name.svelte";
	import Awaiting from "./record/Awaiting.svelte";
	import Studio from "./record/Studio.svelte";

	$: state = $recording ? $recording.state : "name";
</script>

{#if state === "name"}
	<Name />
{:else if state === "initializing"}
	<Awaiting />
{:else}
	<Studio />
{/if}

