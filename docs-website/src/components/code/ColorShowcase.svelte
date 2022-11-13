<!-- Used to display a color as a square -->
<script lang="ts">
	export let color: string;
</script>

<div class="color-showcase" style={`--bg-color: ${color}`} />

<style>
	.color-showcase {
		display: inline-block;
		height: 20px;
		aspect-ratio: 1 / 1;
		background-color: var(--bg-color);
	}
</style>
