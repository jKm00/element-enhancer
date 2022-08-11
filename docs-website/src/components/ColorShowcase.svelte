<!-- Used to display a color as a square -->
<script lang="ts">
  export let color: string;
</script>

<div class="color-showcase" style={`--bgColor: ${color}`}>
</div>

<style>
  .color-showcase {
    display: inline-block;
    height: 100%;
    aspect-ratio: 1 / 1;
    background-color: var(--bgColor);
  }
</style>