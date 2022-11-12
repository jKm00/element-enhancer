<script lang="ts"></script>

<div class="el el-button-row">
  <slot />
</div>

<style>
  .el-button-row {
    display: flex;
  }

  .el-button-row > :global(*) {
    border-radius: 0;
  }

  .el-button-row > :global(*):first-child {
    border-radius: var(--border-rounding) 0 0 var(--border-rounding);
  }

  .el-button-row > :global(*):last-child {
    border-radius: 0 var(--border-rounding) var(--border-rounding) 0;
  }
</style>
