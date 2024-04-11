<script lang="ts">
	export let open: boolean

	let dialog: HTMLDialogElement
	let body: HTMLBodyElement

	$: if (dialog && open) dialog.showModal()
	$: body && (body.style.overflow = open ? 'hidden' : 'auto')
</script>

<svelte:body bind:this={body} />

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialog} on:close on:click|self={() => dialog.close()}>
	<div on:click|stopPropagation role="dialog">
		<slot />
		<!-- <button autofocus on:click={() => dialog.close()}>close modal</button> -->
	</div>
</dialog>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background-color: inherit;
		overflow: scroll;
	}
	dialog {
		overflow: hidden;
		border-radius: 0.2em;
		border: none;
		padding: 0;
		background: transparent;
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
