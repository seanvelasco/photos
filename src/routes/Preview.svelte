<script lang="ts">
	import type { Image } from '$lib/types'
	export let image: Image
</script>

<div>
	<img src={image.image} alt={image.title} />
</div>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background-color: inherit;
	}
	img {
		width: auto;
		min-width: 28rem;
		max-height: 37.5rem;
		object-fit: cover;
	}
</style>
