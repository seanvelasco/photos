<script lang="ts">
	import Preview from '../Preview.svelte'
	import type { Image } from '$lib/types'

	export let data: { image: Image }

	$: ({ image } = data)
</script>

<svelte:head>
	<title>{image.title}</title>
	<meta name="description" content={image.title} />
	<meta property="og:title" content={image.title} />
	<meta property="og:description" content={image.title} />
	<meta property="og:image" content={image.url} />
</svelte:head>

<Preview {image} />
