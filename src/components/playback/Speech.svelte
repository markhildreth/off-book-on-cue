<script>
	import SpeechBubble from "../icons/SpeechBubble.svelte";
	import User from "../icons/User.svelte";
	import Group from "../icons/Group.svelte";
	export let isMyLine;
	export let isPlaying;

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

<div class="speech mx-4">
	<div>
		<User class="w-full h-full"/>
	</div>
	<div class:invisible={!isPlaying}>
		<SpeechBubble class="w-full h-full {isMyLine ? "pulse" : "flip-y-axis"}"/>
	</div>
	<div>
		<Group class="w-full h-full" />
	</div>
</div>
