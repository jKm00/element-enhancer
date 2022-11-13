<script lang="ts"></script>

<main class="main">
	<div class="content-list">
		<slot name="content-list" />
	</div>
	<div class="content">
		<slot name="content" />
	</div>
	<div class="navigation">
		<slot name="navigation" />
	</div>
</main>

<style>
	.main {
		display: grid;
		grid-template-columns: 1fr 15rem;
		gap: 4rem;
		min-height: 80vh;
		margin: 0 auto 5rem auto;
		padding: 0 2rem;
	}

	.content {
		grid-column: 1 / span 1;
		grid-row: 1 / span 1;
	}

	.content-list {
		grid-column: 2 / span 1;
		position: sticky;
		top: 10rem;
		height: fit-content;
	}

	.navigation {
		grid-column: 1 / span 1;
	}
</style>
