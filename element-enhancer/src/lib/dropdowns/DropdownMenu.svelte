<script lang="ts">
  import { KeyCodes } from "@/util/KeyCodes";
  import { onMount, createEventDispatcher } from "svelte";

  type Item = {
    name: string;
    value: string | number;
  };

  const dispatch = createEventDispatcher();

  // Props
  export let label: string;
  export let items: Item[];

  // Stat
  let selected: Item;
  let isOpen = false;
  let width: number;
  let initWidth: number;

  // Update css variables on mount
  let cssVariables: string;
  onMount(() => {
    initWidth = width;

    // Styles
    let styles = {
      "init-width": `${initWidth}px`,
    };

    cssVariables = Object.entries(styles)
      .map(([key, value]) => `--${key}:${value}`)
      .join(";");
  });

  /**
   * Toggles the dropdown list
   */
  const toggleDropdown = () => {
    isOpen = !isOpen;
  };

  /**
   * Handles key event.
   * If enter is pressed on label: toggle dropdown list.
   * If enter is pressed on item in dropdown: handle the selection of that item
   * @param e, the event triggered by a key press
   * @param item, the item selected, or empty if label is selected.
   */
  const handleKeyEvent = (e: KeyboardEvent, item?: Item) => {
    if (e.key === KeyCodes.ENTER) {
      item ? handleSelect(item) : toggleDropdown();
    }
  };

  /**
   * Handles the selection of an item
   * @param item the item selected
   */
  const handleSelect = (item: Item) => {
    selected = item;
    dispatch("change", selected.value);
    toggleDropdown();
  };
</script>

<div class="el el-dropdown" bind:clientWidth={width} style={cssVariables}>
  <div
    on:click={toggleDropdown}
    on:keyup={(e) => handleKeyEvent(e)}
    class="el-label"
    tabindex="0"
  >
    {#if selected}
      {selected.name}
    {:else}
      {label}
    {/if}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      data-open={isOpen}
      ><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
        d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"
      /></svg
    >
  </div>
  <ul class="el-list" data-open={isOpen}>
    {#each items as item, index}
      <li
        on:click={() => handleSelect(item)}
        on:keyup={(e) => handleKeyEvent(e, item)}
        class="el-item"
        tabindex="0"
      >
        {item.name}
      </li>
    {/each}
  </ul>
</div>

<style>
  .el-dropdown {
    position: relative;
    color: var(--theme-color);
    min-width: var(--init-width);
  }

  .el-label {
    --lightness: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    border: var(--border);
    border-radius: var(--border-radius);
    padding-block: var(--spacing-y);
    padding-inline: var(--spacing-x);
    background-color: var(--theme-bg);

    position: relative;

    transition: background-color var(--animation-duration)
        var(--animation-function),
      color var(--animation-duration) var(--animation-function);
  }

  .el-label:hover,
  .el-label:focus-visible {
    background-color: var(--theme-color);
    color: var(--theme-bg);
  }

  .el-label svg {
    width: 0.5rem;
    fill: var(--theme-color);
    transition: transform var(--animation-duration) var(--animation-function),
      fill var(--animation-duration) var(--animation-function);
  }

  .el-label svg[data-open="true"] {
    transform: rotate(90deg);
  }

  .el-label:hover svg,
  .el-label:focus-visible svg {
    fill: var(--theme-bg);
  }

  .el-list {
    display: none;
    /* TODO: Maybe have one more look at this */
    box-shadow: var(--shadow-x) var(--shadow-y) var(--shadow-blur)
      var(--shadow-offset) var(--shadow-color);
    position: absolute;
    padding-block: var(--spacing-2);
    min-width: fit-content;
  }

  .el-list[data-open="true"] {
    display: block;
  }

  .el-item {
    padding-inline: var(--spacing-x);
    padding-block: var(--spacing-y);
  }

  .el-item:hover,
  .el-item:focus {
    background-color: var(--theme-bg);
  }
</style>
