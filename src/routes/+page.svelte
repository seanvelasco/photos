<script lang="ts">
	import Modal from './Modal.svelte'
	import Preview from './Preview.svelte'
	import { page } from '$app/stores'
	import { goto, preloadData, pushState } from '$app/navigation'
	import type { Image } from '$lib/types'

	export let data: { images: Image[] }

	let open: boolean

	const preview = async (event: MouseEvent) => {
		if (event.metaKey) return

		event.preventDefault()

		const { href } = event.currentTarget as HTMLAnchorElement

		const result = await preloadData(href)

		if (result.type === 'loaded' && result.status === 200) {
			const preview = result.data as { image: Image }
			pushState(href, { preview })
			open = true
		} else {
			goto(href)
		}
	}

	const title = 'Gallery | gallery.sean.app'
	const description = 'Personal photo gallery'
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={title} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={data.images[0].url} />
</svelte:head>

<div>
	{#each data.images as { id, title, url }}
		<a on:click={preview} href={id}>
			<img src={url} alt={title} loading="lazy" />
		</a>
	{/each}
</div>

<Modal
	bind:open
	on:close={() => {
		open = false
		history.back()
	}}
>
	{#if $page.state.preview}
		<Preview image={$page.state.preview.image} />
	{/if}
</Modal>

<style>
	div {
		display: grid;
		gap: 0.25rem;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: masonry;
	}
	a {
		display: flex;
	}
	img {
		width: 100%;
		height: 100%;
		max-width: 18.75rem;
		max-height: 18.75rem;
		object-fit: cover;
		aspect-ratio: 1 / 1;
		user-select: none;
	}
</style>
