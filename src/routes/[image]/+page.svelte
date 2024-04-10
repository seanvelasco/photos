<script lang="ts">
	import Preview from '../Preview.svelte'

	export let data: {
		image: {
			id: string
			title: string
			image: string
		}
	}

	$: ({ image } = data)
</script>

<svelte:head>
	<title>{image.title}</title>
	<meta name="description" content={image.title} />
	<meta property="og:title" content={image.title} />
	<meta property="og:description" content={image.title} />
	<meta property="og:image" content={image.image} />
</svelte:head>

<Preview {image} />
