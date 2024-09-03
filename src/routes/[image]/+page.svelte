<script lang="ts">
	import Preview from '../Preview.svelte'

	export let data

	$: ({ image } = data)
</script>

<svelte:head>
	<title>{image.title}</title>
	<meta name="description" content={image.description} />
	<meta property="og:title" content={image.title} />
	<meta property="og:description" content={image.description} />
	<meta property="og:image" content={image.url} />
</svelte:head>

<Preview {image} />
