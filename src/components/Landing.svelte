<script>
	import { push } from '../history.js';
</script>

<div class="flex flex-col justify-evenly items-center h-full">
	<div class="w-32 h-32 border">
		<!-- TODO: Image -->
	</div>
	<p class="text-2xl text-center">
	"Learn You Some Lines" helps you memorize your lines.
	</p>
	<button class="button m-4" on:click={push('/how')}>
		How It Works
	</button>
	<button class="button">
		Get Started
	</button>
</div>
