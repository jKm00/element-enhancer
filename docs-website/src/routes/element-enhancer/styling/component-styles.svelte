<script lang="ts">
	import InlineCodeBlock from '@/components/code/InlineCodeBlock.svelte';
	import CodeFile from '@/components/code/CodeFile.svelte';
	import ColorShowcase from '@/components/code/ColorShowcase.svelte';
	import PageNavigation from '@/components/navigation/PageNavigation.svelte';
	import MainContent from '@/components/content/MainContent.svelte';
</script>

<MainContent>
	<section slot="content" class="section" id="component-styles">
		<h1 class="title title--main">Component specific style</h1>
	</section>
	<PageNavigation
		slot="navigation"
		previous={{
			title: 'Global styles',
			path: '/element-enhancer/styling/global-styles',
		}}
		next={{
			title: 'Elements',
			path: '/element-enhancer/elements',
		}}
	/>
</MainContent>
