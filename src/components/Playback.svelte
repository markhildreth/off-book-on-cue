<script>
	import { playlist, scenes } from "../stores";
	import { back } from "../stores/history";
	const DOWN_ARROW = "&#x25BC";

	const LOW_VOLUME = "&#x1F507;";
	const HIGH_VOLUME = "&#x1F4E2;";

	const TURTLE = "&#x1F422;";
	const RABBIT = "&#x1F407;";

	const PREV = "&#x23ee;";
	const BACK = "&#x23ea;";
	const PLAY = "&#x23e9;";
	const FORWARD = "&#x23e9;";
	const NEXT = "&#x23ed;";
	const REPEAT = "&#x1F501;"

	function shrink() {
		back();
	}
</script>

<div class="flex flex-col items-center h-full">
	<div on:click={shrink} class="h-16 w-full flex justify-center items-center cursor-pointer px-4 border-b">
		<h2 class="text-center">{$playlist.scene.name}</h2>
		<div/>
	</div>
	<div class="flex-grow">
	</div>
	<div class="flex items-center">
		<span class="px-2 ">{@html LOW_VOLUME}</span>
		<input class="hot-thumb" type="range" min="0" max="10" value="5" />
		<span class="px-2">{@html HIGH_VOLUME}</span>
	</div>
	<div class="text-tiny">
		|
	</div>
	<div class="flex items-center">
		<span class="px-2">{@html TURTLE}</span>
		<input type="range" min="0" max="10" value="5" />
		<span class="px-2">{@html RABBIT}</span>
	</div>
	<div class="flex items-center">
		<span class="px-2">0:30</span>
		<progress class="flex-grow h-2" value="30" max="120">25%</progress>
		<span class="px-2">2:00</span>
	</div>
	<div class="text-4xl">
		{@html PREV}
		{@html BACK}
		{@html PLAY}
		{@html FORWARD}
		{@html NEXT}
		{@html REPEAT}
	</div>
</div>
