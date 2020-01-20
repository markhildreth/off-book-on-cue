<script>
	export let isUserLine;

	const PERSON = "&#x1F464";
	const SPEECH_BALLOON = "&#x1F4AC";
	const PEOPLE = "&#x1F465";
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

<div class="speech">
	<span class="text-6xl">{@html PERSON}</span>
	<span class="text-6xl" class:flip-v-axis={!isUserLine}>{@html SPEECH_BALLOON}</span>
	<span class="text-6xl">{@html PEOPLE}</span>
</div>
