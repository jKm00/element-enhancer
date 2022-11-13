<script lang="ts">
  import { KeyCodes } from '@/util/KeyCodes';
  import { convertToKebabCase } from '@/util/stringUtil';
  import { createEventDispatcher } from 'svelte';
  import type { StyleOptions } from '@/util/types/StyleOptions';

  type Item = {
    name: string;
    value: string;
  };

  const dispatch = createEventDispatcher();

  // Props
  export let label: string;
  export let items: Item[];
  // Custom styles
  export let styleOptions: StyleOptions = undefined;

  $: cssVariables = styleOptions
    ? Object.entries(styleOptions)
        .map(([key, value]) => `--${convertToKebabCase(key)}:${value}`)
        .join(';')
    : null;

  // State
  let selected: Item;
  let isOpen = false;

  /**
   * Dispatches the selected item whenever it changes
   */
  $: dispatch('change', selected?.value);

  /**
   * Checks if an item is selected.
   * Returns true if it is and false if not
   * @param item, the item to check wether or not is selected
   */
  $: isChecked = (item: Item) => {
    if (selected) {
      return selected.value === item.value;
    }
  };

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
   * If escape is pressed: dropdown is closed
   * @param e, the event triggered by a key press
   * @param item, the item selected, or empty if label is selected.
   */
  const handleKeyEvent = (e: KeyboardEvent, item?: Item) => {
    if (e.key === KeyCodes.ENTER) {
      item ? handleSelect(item) : toggleDropdown();
    } else if (e.key === KeyCodes.ESC) {
      closeDropdown();
    }
  };

  /**
   * Closes the dropdown menu
   */
  const closeDropdown = () => {
    isOpen = false;
  };

  /**
   * Handles the selection of an item
   * @param item the item selected
   */
  const handleSelect = (item: Item) => {
    selected = item;
    toggleDropdown();
  };
</script>

<div class="el el-dropdown" style={cssVariables}>
  <div
    on:click={toggleDropdown}
    on:keyup={e => handleKeyEvent(e)}
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
    <!-- TODO: Make a visual representation of the selected item
    also in the list (not just label) -->
    {#each items as item, index (index)}
      <li
        on:click={() => handleSelect(item)}
        on:keyup={e => handleKeyEvent(e, item)}
        class="el-item"
        tabindex="0"
        data-checked={isChecked(item)}
      >
        {item.name}
      </li>
    {/each}
  </ul>
</div>

<style>
  .el-dropdown {
    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-weight);

    color: var(--text-color);
    min-width: var(--min-width);
    max-width: var(--max-width);

    position: relative;
  }

  .el-label {
    border: var(--border-thickness) var(--border-style) var(--border-color);
    border-radius: var(--border-rounding);
    padding-block: var(--spacing-y);
    padding-inline: var(--spacing-y);
    background-color: var(--bg-color);

    transition: background-color var(--animation-duration)
        var(--animation-function),
      color var(--animation-duration) var(--animation-function);

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    position: relative;
  }

  .el-label:hover {
    background-color: var(--bg-color-hover);
    color: var(--text-color-hover);
    border-color: var(--border-color-hover);
  }

  .el-label:focus-visible {
    background-color: var(--bg-color-focus);
    color: var(--text-color-focus);
    border-color: var(--border-color-focus);
  }

  .el-label svg {
    fill: var(--text-color);
    transition: transform var(--animation-duration) var(--animation-function),
      fill var(--animation-duration) var(--animation-function);
  }

  .el-label svg[data-open='true'] {
    transform: rotate(90deg);
  }

  .el-label:hover svg {
    fill: var(--text-color-hover);
  }

  .el-label:focus-visible svg {
    fill: var(--text-color-focus);
  }

  .el-list {
    box-shadow: var(--shadow-x) var(--shadow-y) var(--shadow-blur)
      var(--shadow-offset) var(--shadow-color);
    background-color: var(--pop-up-bg);
    padding-block: var(--spacing-y);

    display: none;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 99999;
    min-width: fit-content;
  }

  .el-list[data-open='true'] {
    display: block;
  }

  .el-item {
    padding-inline: var(--spacing-x);
    padding-block: var(--spacing-y);

    transition: background-color var(--animation-duration)
        var(--animation-function),
      color var(--animation-duration) var(--animation-function);
  }

  .el-item:hover {
    background-color: var(--bg-color-hover);
    color: var(--text-color-hover);
  }

  .el-item:focus {
    background-color: var(--bg-color-focus);
    color: var(--text-color-focus);
  }

  .el-item[data-checked='true'] {
    background-color: var(--bg-color-selected);
    color: var(--text-color-selected);
  }
</style>
