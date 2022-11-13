<!-- Button used in the page naviation component -->
<script lang="ts">
	export let next: boolean;
	export let label: string;
	export let redirectPath: string;
</script>

<a
	class={`page-nav-btn ${next ? 'page-nav-btn--next' : 'page-nav-btn--prev'}`}
	href={redirectPath}
>
	{#if next}
		<span class="direction"
			>Next<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
				><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
					d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"
				/></svg
			></span
		>
	{:else}
		<span class="direction"
			><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
				><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
					d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"
				/></svg
			>Previous</span
		>
	{/if}
	{label}
</a>

<style>
	.page-nav-btn {
		display: flex;
		flex-direction: column;
		gap: 0.25em;

		font-weight: bold;
		text-decoration: none;

		border: 1px solid var(--clr-theme);
		border-radius: var(--border-radius);
		padding: 1em 2em;

		transition: background-color var(--animation-duration)
			var(--animation-function);
	}

	.page-nav-btn:hover,
	.page-nav-btn:focus {
		background-color: var(--clr-theme);
		color: #fff;
	}

	.page-nav-btn:hover .direction,
	.page-nav-btn:focus .direction {
		color: #fff;
	}

	.page-nav-btn:hover svg,
	.page-nav-btn:focus svg {
		fill: #fff;
	}

	.page-nav-btn--prev {
		grid-column: 1 / span 1;
	}

	.page-nav-btn--prev svg {
		transform: rotate(90deg);
	}

	.page-nav-btn--next {
		grid-column: 3 / span 1;
	}

	.page-nav-btn--next svg {
		transform: rotate(-90deg);
	}

	.direction {
		display: flex;
		gap: 0.5em;
		align-items: center;
		font-size: 0.75em;
		color: var(--clr-text);
	}

	.page-nav-btn--next .direction {
		justify-content: end;
	}
</style>
