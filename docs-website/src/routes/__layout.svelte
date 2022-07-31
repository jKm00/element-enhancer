<script lang="ts">
	import '@/global.css';
	import ThemeToggle from '@/components/ThemeToggle.svelte';
</script>

<div class="theme-toggle-wrapper">
	<ThemeToggle />
</div>
<slot />

<style>
	.theme-toggle-wrapper {
		position: absolute;
		top:1rem;
		right:1rem
	}
</style>
