<script lang="ts">
	import MainContent from '@/components/content/MainContent.svelte';
	import PageNavigation from '@/components/navigation/PageNavigation.svelte';
</script>

<svelte:head>
	<title>Element Enhancer - Introduction</title>
</svelte:head>

<MainContent>
	<section slot="content" class="section">
		<h1 class="title title--main">Introduction</h1>
		<p class="text">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit quidem
			at officiis id assumenda pariatur adipisci ullam doloribus quos, quibusdam
			nobis culpa laboriosam modi minus ducimus, debitis, eum molestias rerum!
			Velit voluptas ipsam itaque porro et nihil, praesentium iure aut enim
			dolores facilis voluptate culpa, iste maiores blanditiis? Perspiciatis
			excepturi reprehenderit commodi optio, adipisci dolore dolor cum error
			libero eligendi? Nulla rerum culpa soluta ad quia. Voluptatem ab ipsam
			perferendis, quae a iste nesciunt est expedita numquam corporis eaque
			eveniet molestias sequi, fugit dicta quia laborum quos cupiditate sint
			rem? Maiores, minima. Reprehenderit molestiae dolores atque nam! Sed
			temporibus voluptatum quidem, odio excepturi at vero fugiat tempora
			quibusdam ut esse repellat earum consequatur recusandae cum corporis
			cupiditate repellendus quo! Quae. Explicabo, odio corporis ullam minima at
			autem aut eos nostrum facere nulla unde eum qui sed, rerum eaque vel
			quaerat inventore nemo aspernatur voluptas blanditiis reprehenderit
			maiores laboriosam? Adipisci, possimus!
		</p>
	</section>
	<PageNavigation
		slot="navigation"
		next={{
			title: 'Getting started',
			path: '/element-enhancer/getting-started',
		}}
	/>
</MainContent>
