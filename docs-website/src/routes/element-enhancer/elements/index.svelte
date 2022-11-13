<script lang="ts">
	import MainContent from '@/components/content/MainContent.svelte';
	import PageNavigation from '@/components/navigation/PageNavigation.svelte';
</script>

<svelte:head>
	<title>Element Enhancer - Elements</title>
</svelte:head>

<MainContent>
	<section slot="content" class="section">
		<h1 class="title title--main">Elements - Generally usage</h1>
	</section>
	<PageNavigation
		slot="navigation"
		previous={{
			title: 'Component styles',
			path: '/element-enhancer/styling/component-styles',
		}}
		next={{
			title: 'Dropdowns',
			path: '/element-enhancer/elements/dropdowns',
		}}
	/>
</MainContent>
