<script lang="ts">
	import type { Image } from '$lib/types'
	export let image: Image
</script>

<div>
	<img src={image.url} alt={image.title} />
</div>

<style>
	div {
		display: block;
		width: 100%;
		height: auto;
		align-items: center;
		justify-content: center;
		background-color: inherit;
	}
	img {
		object-fit: contain;
		display: block;
		width: 100%;
		height: 100%;
		max-height: 37.5rem;
		user-select: none;
	}
</style>
