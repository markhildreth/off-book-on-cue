<script>
	import SpeechBubble from "../icons/SpeechBubble.svelte";
	import User from "../icons/User.svelte";
	import Group from "../icons/Group.svelte";
	export let isMyLine;
	export let isPlaying;

</script>

<div class="flex flex-grow">
</div>
<div class="speech flex h-full">
	<div class="w-full self-end">
		<User class="" />
	</div>
	<div class="w-2/3 md:w-full self-start" class:invisible={!isPlaying}>
		<SpeechBubble class="{isMyLine ? "pulse" : "flip-y-axis"}"/>
	</div>
	<div class="w-full self-end">
		<Group class=""/>
	</div>
</div>
