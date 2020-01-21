<script>
	import LowVolume from "../icons/LowVolume";
	import HighVolume from "../icons/HighVolume";
	import Walk from "../icons/Walk";
	import Run from "../icons/Run";
</script>

<div class="py-4 flex flex-col items-center">
	<div class="flex items-center">
		<LowVolume class="w-6 h-6" />
		<input type="range" class="m-2" min="0" max="10" value="5" />
		<HighVolume class="w-6 h-6" />
	</div>
	<div class="flex items-center pt-4">
		<Walk class="w-6 h-6" />
		<input type="range" class="m-2" min="-5" max="5" value="0" />
		<Run class="w-6 h-6" />
	</div>
	<div class="text-tiny">
		|
	</div>
</div>
