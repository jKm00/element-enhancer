<script lang="ts">
  import { convertToKebabCase } from '@/util/stringUtil';
  import type { StyleOptions } from '@/util/types/StyleOptions';

  // Props
  export let value: string | number;
  // Custom styles
  export let styleOptions: StyleOptions = undefined;

  $: cssVariables = styleOptions
    ? Object.entries(styleOptions)
        .map(([key, value]) => `--${convertToKebabCase(key)}:${value}`)
        .join(';')
    : null;
</script>

<button class="el el-button" style={cssVariables} on:click {value}
  ><slot /></button
>

<style>
  .el-button {
    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-weight);

    color: var(--text-color);
    background-color: var(--bg-color);
    border: var(--border-thickness) var(--border-style) var(--border-color);
    border-radius: var(--border-rounding);
    box-shadow: var(--shadow-x) var(--shadow-y) var(--shadow-blur)
      var(--shadow-offset) var(--shadow-color);
    padding-inline: var(--spacing-x);
    padding-block: var(--spacing-y);

    transition: background-color var(--animation-duration)
      var(--animation-function) color var(--animation-duration)
      var(--animation-function) bprder-color var(--animation-duration)
      var(--animation-function);
  }

  .el-button:hover {
    background-color: var(--bg-color-hover);
    color: var(--text-color-hover);
  }

  .el-button:focus-visible {
    background-color: var(--bg-color-focus);
    color: var(--text-color-focus);
  }
</style>
