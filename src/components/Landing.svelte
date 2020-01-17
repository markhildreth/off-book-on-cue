<script>
	import { push } from '../history.js';
</script>

<div class="flex flex-col justify-evenly items-center h-full">
	<div class="flex flex-col items-center justify-evenly h-full">
		<div class="w-32 h-32 border text-center">
			<!-- TODO: Image -->
		</div>
		<p class="text-2xl text-center">
		"Learn You Some Lines" helps you memorize your lines.
		</p>
		<div class="flex flex-col">
			<button class="button mb-8" on:click={push('/how')}>
				How It Works
			</button>
			<button class="button">
				Get Started
			</button>
		</div>
	</div>
</div>
