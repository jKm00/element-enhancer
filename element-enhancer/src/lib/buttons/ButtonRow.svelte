<script lang="ts"></script>

<div class="el el-button-row">
  <slot></slot>
</div>

<style>
  .el-button-row {
    display: flex;
  }

  .el-button-row > :global(*) {
    border-radius: 0;
  }

  .el-button-row > :global(*):first-child {
    border-radius: var(--borderRadius) 0 0 var(--borderRadius);
  }

  .el-button-row > :global(*):last-child {
    border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
  }
</style>