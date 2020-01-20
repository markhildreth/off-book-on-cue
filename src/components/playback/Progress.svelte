<script>
	export let elapsedMs;
	export let durationMs;

	function displayTime(ms) {
		const totalSecs = Math.floor(ms/ 1000);
		const secs = totalSecs % 60;
		const minutes = Math.floor(totalSecs / 60);
		return minutes + ":" + (secs < 10 ? "0" + secs : secs);
	}
</script>

<div class="flex items-center py-4">
	<span class="px-2">{displayTime(elapsedMs)}</span>
	<progress class="flex-grow h-2" value={elapsedMs} max={durationMs}>{displayTime(elapsedMs)}</progress>
	<span class="px-2">{displayTime(durationMs)}</span>
</div>
