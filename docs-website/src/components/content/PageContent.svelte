<script lang="ts">
	interface Content {
		title: string;
		path: string;
	}

	export let content: Content[];
</script>

<div class="page-content">
	<h class="page-content__title">Page content</h>
	<ul class="page-content__list">
		{#each content as item}
			<li class="page-content__item">
				<a class="page-content__item__link" href={item.path}>{item.title}</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.page-content {
		font-size: 0.85rem;
	}

	.page-content__title {
		display: block;
		font-weight: bold;
		text-transform: uppercase;
		margin-bottom: 0.75em;
	}

	.page-content__item {
		margin-bottom: 0.5em;
	}

	.page-content__item__link {
		text-decoration: none;
	}
</style>
