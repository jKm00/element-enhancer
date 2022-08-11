<script lang="ts">
	import ThemeToggle from "@/components/ThemeToggle.svelte";
	import { scale, fade, fly } from 'svelte/transition'
</script>

<div class="wrapper">
	<div class="content" in:fly="{{ y: 25, duration: 1000 }}">
		<nav class="card">
			<ul class="list">
				<li><a class="list__link" href="/element-enhancer/getting-started">Docs</a></li>
				<li><a class="list__link" href="">Resources</a></li>
				<li><a class="list__link" href="">Package</a></li>
				<li><a class="list__link" href="/license">License</a></li>
			</ul>
		</nav>
		<div class="title--wrapper">
			<h1 class="title">Element enhancer</h1>
		</div>
		<a href="/element-enhancer/getting-started" class="cta">
			Getting started 
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
				><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
					d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
				/></svg>
		</a>
		<a
			class="github-link"
			href="https://github.com/jKm00/element-enhancer"
			target="_blank">
			GitHub 
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"
				><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
					d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
				/></svg>
		</a>
	</div>
	<p class="creds">
		Creds for animated gradient: 
		<a
			href="https://codepen.io/SimonEvans/pen/bgVxMO?editors=1100"
			target="_blank">Simon Evans</a>
	</p>
	<div class="theme-toggle-wrapper">
		<ThemeToggle />
	</div>
</div>

<style>
	.wrapper {
		display: grid;
		place-items: center;
		padding: 1rem;
		min-height: 100vh;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	.list {
		display: flex;
		gap: 3rem;
		padding: 0 1em;
	}

	.list__link {
		color: var(--clr-text);
		text-decoration: none;
	}

	.list__link:hover,
	.list__link:focus-visible {
		text-decoration: underline;
	}

	.title--wrapper {
		position: relative;
		padding: 2rem;
		background-color: var(--clr-gradient-bg);
		box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.2);
		border-radius: var(--border-radius);
	}

	.title--wrapper::after {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		right: 0;
		z-index: -1;
		height: 100%;
		width: 100%;
		margin: 0 auto;
		filter: blur(40px);
		transform: scale(1.5);
		background: linear-gradient(
			90deg,
			var(--clr-gradient-start),
			var(--clr-gradient-end)
		);
		background-size: 200% 200%;
		animation: animateGlow 10s ease infinite;
	}

	.title {
		text-transform: uppercase;
		color: var(--clr-text);
	}

	.github-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--clr-text);
		text-decoration: none;
	}

	.github-link:hover,
	.github-link:focus-visible {
		color: var(--clr-theme);
	}

	.github-link:hover svg,
	.github-link:focus-visible svg {
		fill: var(--clr-theme);
	}

	.creds {
		position: absolute;
		top: 1rem;
		left: 0rem;
		opacity: 0.7;
		transform: scale(0.8);
	}

	.theme-toggle-wrapper {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	@keyframes animateGlow {
		0% {
			background-position: 0% 50%;
		}

		50% {
			background-position: 100% 50%;
		}

		100% {
			background-position: 0% 50%;
		}
	}
</style>
