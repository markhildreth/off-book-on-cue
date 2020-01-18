<script>
	export let id;

	import { plays } from "../stores";

	$: play = $plays.plays[id];
</script>

<div class="relative w-full h-full">
	<div class="absolute top-0 right-0 p-4 m-8 h-16 w-16 bg-red-400 rounded-full flex items-center justify-center">
		REC
	</div>
	<ul class="text-md w-full h-full overflow-y-scroll">
		<li class="p-4 border-b-2">Scene 1</li>
		<li class="p-4 border-b-2">Scene 2</li>
		<li class="p-4 border-b-2">Scene 3</li>
		<li class="p-4 border-b-2">Scene 4</li>
		<li class="p-4 border-b-2">Scene 5</li>
		<li class="p-4 border-b-2">Scene 6</li>
		<li class="p-4 border-b-2">Scene 7</li>
		<li class="p-4 border-b-2">Scene 8</li>
		<li class="p-4 border-b-2">Scene 9</li>
		<li class="p-4 border-b-2">Scene 10</li>
		<li class="p-4 border-b-2">Scene 11</li>
		<li class="p-4 border-b-2">Scene 12</li>
		<li class="p-4 border-b-2">Scene 13</li>
	</ul>
</div>
