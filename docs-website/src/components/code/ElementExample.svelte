<script lang="ts">
	let showCode = false;
</script>

<div class="element-example card">
	<div class="element">
		<slot name="element" />
	</div>
	<div class="tool-bar">
		<button
			on:click={() => (showCode = !showCode)}
			class="tool-bar__item"
			aria-label="Toggle code"
			><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
				><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
					d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
				/></svg
			></button
		>
	</div>
</div>
{#if showCode}
	<div
		class="code card"
		style={`${showCode ? 'transform: scaleY(1)' : 'transform: scaleY(0)'}`}
	>
		<code>
			<pre>
          <slot name="code" />
        </pre>
		</code>
		<button
			on:click={() => (showCode = false)}
			class="code-close"
			aria-label="Hide code"
			><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
				><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
					d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"
				/></svg
			>Hide code</button
		>
	</div>
{/if}

<style>
	.element-example {
		margin-bottom: 1.5rem;
	}

	.element {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2rem;
	}

	.code {
		position: relative;
	}

	.code::before {
		content: '';
		display: block;
		width: 20px;
		aspect-ratio: 1 / 1;
		background-color: var(--clr-card-bg);

		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%) rotate(45deg);

		transition: background vaR(--animation-duration) var(--animation-function);
	}

	.code::after {
		content: '.svelte';
		position: absolute;
		top: 1rem;
		right: 1rem;
		font-size: 0.8rem;
	}

	.code-close {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;

		color: var(--clr-text);
		cursor: pointer;

		width: 100%;
		border-top: 1px solid var(--clr-text);
		padding-top: 1rem;
	}

	.code-close svg {
		transform: rotate(180deg);
	}

	.tool-bar {
		display: flex;
		justify-content: flex-end;
		border-top: 1px solid var(--clr-text);
		padding-top: 1rem;
	}

	.tool-bar__item {
		cursor: pointer;
	}

	.tool-bar__item svg {
		width: 1.1rem;
	}
</style>
