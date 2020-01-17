<script>
	export let id;

	import { plays } from "../stores";

	$: play = $plays.plays[id];
</script>

{play.name}
