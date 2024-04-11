<div>
	<header></header>
	<main>
		<slot />
	</main>
	<footer>
		<p>&copy; 2024 sean.app</p>
	</footer>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		height: 100%;
		max-width: 56.75rem;
		width: 100%;
	}
	header {
		height: 3.5rem;
	}
	footer {
		height: 3.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.875rem;
		width: 100%;
		margin-top: auto;
	}
</style>
