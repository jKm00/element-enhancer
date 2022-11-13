<script lang="ts">
	import ElementExample from '@/components/code/ElementExample.svelte';
	import MainContent from '@/components/content/MainContent.svelte';
	import PageContent from '@/components/content/PageContent.svelte';

	const pageContent = [
		{
			title: 'Dropdown',
			path: '#dropdown',
		},
		{
			title: 'Multiselect dropdown',
			path: '#multiselect-dropdown',
		},
	];
</script>

<svelte:head>
	<title>Element Enhancer - Dropdowns</title>
</svelte:head>

<MainContent>
	<PageContent slot="content-list" content={pageContent} />
	<section slot="content" class="section">
		<h1 class="title title-main">Dropdowns</h1>
		<ElementExample>
			<button
				slot="element"
				style="color: var(--clr-text)"
				on:click={(e) => console.log(e.target)}
				value="Greetings">Click me!</button
			>
			<div slot="code">
				{`
  <html>
    <button
      on:click={(e) => console.log(e.target)}
      value="Greetings">Click me!</button
    >
  </html>`}
			</div>
		</ElementExample>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic alias minus
			aspernatur voluptatum iure laboriosam consequuntur. Accusamus quos in
			doloremque maxime eos quis dolore assumenda consequatur, illum, nihil,
			voluptas iure. Adipisci excepturi fuga quod voluptatem, vel nihil quae
			quidem hic libero blanditiis in! Vero aperiam omnis amet perspiciatis a,
			repellendus eveniet neque ab necessitatibus distinctio minus doloremque,
			doloribus fuga consequatur!
		</p>
	</section>
</MainContent>
