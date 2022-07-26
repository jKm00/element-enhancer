<script lang="ts">
  type Item = {
    name: string;
    value: string | number;
  };

  export let label: string;
  export let items: Item[];

  let isOpen = false;

  const toggleDropdown = () => {
    isOpen = !isOpen;
  };
</script>

<div class="el el-dropdown">
  <div on:click={toggleDropdown} class="el-label">
    {label}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      data-open={isOpen}
      ><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
        d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"
      /></svg
    >
  </div>
  <ul class="el-list">
    {#each items as item, index}
      <li class="el-item">{item.name}</li>
    {/each}
  </ul>
</div>

<style>
  .el-dropdown {
    --animation-duration: 150ms;
    position: relative;
  }

  .el-label {
    --lightness: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: var(--border);
    border-radius: var(--border-radius);
    padding-block: var(--spacing-y);
    padding-inline: var(--spacing-x);
    background-color: var(--theme-color);
  }

  .el-label svg {
    width: 0.5rem;
    transition: transform var(--animation-duration) ease-in-out;
  }

  .el-label svg[data-open="true"] {
    transform: rotate(90deg);
  }

  .el-list {
    /* TODO: Maybe have one more look at this */
    box-shadow: var(--shadow-x) var(--shadow-y) var(--shadow-blur)
      var(--shadow-offset) var(--shadow-color);
    position: absolute;
    left: 0.5rem;
    right: 0.5rem;
    padding-block: var(--spacing-2);
  }

  .el-item {
    padding-inline: var(--spacing-x);
    padding-block: var(--spacing-y);
  }
</style>
