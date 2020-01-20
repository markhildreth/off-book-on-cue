<script>
	const LOW_VOLUME = "&#x1F507;";
	const HIGH_VOLUME = "&#x1F4E2;";
	const TURTLE = "&#x1F422;";
	const RABBIT = "&#x1F407;";
</script>

<div class="py-4">
	<div class="flex items-center">
		<span class="px-2 ">{@html LOW_VOLUME}</span>
		<input type="range" min="0" max="10" value="5" />
		<span class="px-2">{@html HIGH_VOLUME}</span>
	</div>
	<div class="text-tiny">
		|
	</div>
	<div class="flex items-center">
		<span class="px-2">{@html TURTLE}</span>
		<input type="range" min="-5" max="5" value="0" />
		<span class="px-2">{@html RABBIT}</span>
	</div>
</div>
