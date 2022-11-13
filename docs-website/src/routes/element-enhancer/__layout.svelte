<script lang="ts">
	import NavItem from '@/components/navigation/NavItem.svelte';
	import ThemeToggle from '@/components/ThemeToggle.svelte';

	const navItems = [
		{
			label: 'Introduction',
			link: '/element-enhancer/introduction',
		},
		{
			label: 'Getting started',
			link: '/element-enhancer/getting-started',
		},
		{
			label: 'Styling',
			link: '/element-enhancer/custom-styling',
			subItems: [
				{
					label: 'Custom styles',
					link: '/element-enhancer/styling',
				},
				{
					label: 'Global styles',
					link: '/element-enhancer/styling/global-styles',
				},
				{
					label: 'Component styles',
					link: '/element-enhancer/styling/component-styles',
				},
			],
		},
		{
			label: 'Elements',
			link: '/element-enhancer/elements',
			subItems: [
				{
					label: 'About elements',
					link: '/element-enhancer/elements',
				},
				{
					label: 'Dropdowns',
					link: '/element-enhancer/elements/dropdowns',
				},
			],
		},
	];

	let search: string;

	const handleSearch = () => {
		console.log(`Tried to search for: ${search}`);
	};
</script>

<!-- Header -->
<header class="header">
	<a href="/" class="logo">Element Enhancer</a>
	<form class="search" on:submit|preventDefault={handleSearch}>
		<input
			class="search__input "
			type="text"
			bind:value={search}
			placeholder="Search..."
		/>
		<button class="search__button" aria-label="Seacrh button"
			><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
				><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
					d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
				/></svg
			></button
		>
	</form>
	<ThemeToggle />
</header>
<!-- Main coomponentes -->
<div class="page">
	<!-- Nav side bar -->
	<nav class="nav">
		<ul class="list">
			{#each navItems as navItem}
				<NavItem item={navItem} />
			{/each}
		</ul>
	</nav>
	<!-- Main docs -->
	<slot />
</div>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 1rem;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
		background-color: var(--clr-card-bg);
		box-shadow: var(--box-shadow);
	}

	.logo {
		display: block;
		padding: 1rem 0;
	}

	.search {
		--border-radius: 100vh;
		display: flex;
		align-items: stretch;
	}

	.search__input {
		padding: 0.5rem 1rem;
		border-radius: var(--border-radius) 0 0 var(--border-radius);
		border: 1px solid var(--clr-theme);
	}

	.search__button {
		background-color: var(--clr-theme);
		padding-left: 0.75rem;
		padding-right: 1rem;
		border: 1px solid var(--clr-theme);
		border-left: none;
		border-radius: 0 var(--border-radius) var(--border-radius) 0;

		transition: background-color var(--animation-duration)
			var(--animation-function);
	}

	.search__button svg {
		fill: #fff;

		transition: fill var(--animation-duration) var(--animation-function);
	}

	.search__button:hover {
		background-color: var(--clr-text);
	}

	.search__button:active {
		opacity: 0.9;
	}

	.search__button:hover svg {
		fill: var(--clr-bg);
	}

	/* Page wrapper */
	.page {
		margin-top: 67px;
		display: grid;
		grid-template-columns: 15rem 1fr;
	}

	/* Side bar */
	.nav {
		display: block;
		position: sticky;
		z-index: 20;
		top: 67px; /* TODO: Calculate this on load */
		height: calc(100vh - 67px);
		overflow-y: auto;
		background-color: var(--clr-card-bg);
		padding: 1rem;
		box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.1);
	}
</style>
