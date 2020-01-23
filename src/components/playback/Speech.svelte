<script>
	import SpeechBubble from "../icons/SpeechBubble.svelte";
	import User from "../icons/User.svelte";
	import Group from "../icons/Group.svelte";
	export let isMyLine;
	export let isPlaying;

</script>

<style>
	.speech {
		height: 100%;
		display: grid;
		justify-items: center;
		align-items: center;
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

<div class="speech">
	<div>
		<User class="w-16 sm:w-24 md:w-32 lg:w-40" />
	</div>
	<div class:invisible={!isPlaying}>
		<SpeechBubble class="w-16 sm:w-24 md:w-32 lg:w-40 {isMyLine ? "pulse" : "flip-y-axis"}"/>
	</div>
	<div>
		<Group class="w-16 sm:w-24 md:w-32 lg:w-40"/>
	</div>
</div>
