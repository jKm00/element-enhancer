<script lang="ts">
	import MainContent from '@/components/content/MainContent.svelte';
	import PageNavigation from '@/components/navigation/PageNavigation.svelte';
</script>

<MainContent>
	<section slot="content" class="section">
		<h1 class="title title--main">Getting Started</h1>
		<p class="text">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim itaque illo
			nostrum molestiae laborum amet voluptates, eaque distinctio! Harum eius
			repellendus exercitationem excepturi quaerat animi reiciendis illum
			quibusdam ipsam nemo! Maiores sit quasi molestiae labore. Commodi
			laboriosam quaerat simeum iure ipsa quod, quas placeat. Nulla quisquam
			perferendis quasi eum esse repellendus vel.
		</p>
	</section>
	<PageNavigation
		slot="navigation"
		previous={{ title: 'Introduction', path: '/element-enhancer/introduction' }}
		next={{
			title: 'Custom styles',
			path: '/element-enhancer/styling',
		}}
	/>
</MainContent>

<style>
	*:not(:last-child) {
		margin-bottom: 1rem;
	}
</style>
