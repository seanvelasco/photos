<script lang="ts">
	import Preview from '../Preview.svelte'
	import type { Image } from '$lib/types'

	export let data: { image: Image }

	$: ({ image } = data)

	const title = `${image.title} - gallery.sean.app`
	const description = image.title
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image.url} />
</svelte:head>

<Preview {image} />
