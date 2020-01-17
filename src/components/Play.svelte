<script>
	export let id;

	import { plays } from "../plays.js";

	$: play = $plays.plays[id];
</script>

{play.name}
