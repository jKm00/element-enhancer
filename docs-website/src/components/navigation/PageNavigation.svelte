<!-- Component for navigation to next / previous page -->
<script lang="ts">
	import PageNavigationButton from '@/components/navigation/PageNavigationButton.svelte';

	interface Page {
		title: string;
		path: string;
	}

	export let next: Page | undefined = undefined;
	export let previous: Page | undefined = undefined;
</script>

<section class="page-navigation">
	{#if previous !== undefined}
		<PageNavigationButton
			next={false}
			label={previous.title}
			redirectPath={previous.path}
		/>
	{/if}
	{#if next !== undefined}
		<PageNavigationButton
			next={true}
			label={next.title}
			redirectPath={next.path}
		/>
	{/if}
</section>

<style>
	.page-navigation {
		display: grid;
		grid-template-columns: max-content 1fr max-content;
		justify-content: space-between;

		margin-top: 5rem;
	}
</style>
