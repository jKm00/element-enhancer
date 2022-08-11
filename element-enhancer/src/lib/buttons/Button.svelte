<script lang="ts">
  export let value: string | number
</script>

<button class="el el-button" on:click value={value}><slot></slot></button>

<style>
  .el-button {
    color: var(--textColor);
    background-color: var(--bgColor);
    border: var(--borderThickness) var(--borderStyle) var(--borderColor);
    border-radius: var(--borderRadius);
    box-shadow: 
      var(--shadowX)
      var(--shadowY)
      var(--shadowBlur)
      var(--shadowOffset)
      var(--shadowColor);
    padding-inline: var(--spacingX);
    padding-block: var(--spacingY);

    transition: 
      background-color var(--animationDuration) var(--animationFunction)
      color var(--animationDuration) var(--animationFunction)
      bprder-color var(--animationDuration) var(--animationFunction);
  }

  .el-button:hover {
    background-color: var(--bgColorHover);
    color: var(--textColorHover);
    border-color: var(--borderColorHover)
  }

  .el-button:focus-visible {
    background-color: var(--bgColorFocus);
    color: var(--textColorFocus);
    border-color: var(--borderColorFocus)
  }
</style>