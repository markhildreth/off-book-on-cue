<script>
	import { playlist, scenes } from "../stores";
	import { back } from "../stores/history";
	const DOWN_ARROW = "&#x25BC";

	const PERSON = "&#x1F464";
	const SPEECH_BALLOON = "&#x1F4AC";
	const PEOPLE = "&#x1F465";

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

<style>
	.speech {
		display: grid;
		grid-template-areas:
			".      balloon   .   "
			"person balloon people"
			"person    .    people";
	}

	.speech > :nth-child(1) {
		grid-area: person;
	}

	.speech > :nth-child(2) {
		grid-area: balloon;
	}

	.speech > :nth-child(3) {
		grid-area: people;
	}
</style>

<div class="flex flex-col items-center h-full">
	<div on:click={shrink} class="h-16 w-full flex justify-center items-center cursor-pointer px-4 border-b">
		<h2 class="text-center">{$playlist.scene.name}</h2>
		<div/>
	</div>
	<div class="flex-grow speech">
		<span class="text-6xl">{@html PERSON}</span>
		<span class="text-6xl flip-v-axis">{@html SPEECH_BALLOON}</span>
		<span class="text-6xl">{@html PEOPLE}</span>
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
	<div class="flex items-center py-4">
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
