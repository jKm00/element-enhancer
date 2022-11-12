<script lang="ts">
  import { KeyCodes } from '@/util/KeyCodes';
  import type { StyleOptions } from '@/util/types/StyleOptions';
  import { createEventDispatcher } from 'svelte';
  import { convertToKebabCase, truncateString } from '@/util/stringUtil';

  const TRUNC_LENGTH = 15;

  const dispatch = createEventDispatcher();

  type Item = {
    name: string;
    value: string;
  };

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
  let checked = [] as Item[];
  let isOpen = false;

  /**
   * Dispatches the checked array whenever it changes
   */
  $: dispatch(
    'change',
    checked.map(i => i.value)
  );

  /**
   * Checks if there are any checked itmes.
   * Is true when there are, and false if not
   */
  $: anyCheckedItems = checked.length > 0;

  $: checkedItemsDisplay = truncateString(
    checked.map(i => i.name).join(', '),
    TRUNC_LENGTH
  );

  /**
   * Checks if an item is checked. Return true
   * if it is, and false if not
   * @param item, the item to check whether or not its checked
   */
  $: isChecked = (item: Item) => {
    return checked.find(i => i.value === item.value) ? true : false;
  };

  /**
   * Toggles the dropdown menu
   */
  const toggleMenu = () => {
    isOpen = !isOpen;
  };

  /**
   * Handles key event.
   * If enter is pressed on label: dropdown menu is toggled
   * If enter is pressed on item in dropdown: handle the selection
   * of that item
   * If escape is pressed: dropdown is closed
   * @param e, the event triggered when a key is pressed
   */
  const handleKeyEvent = (e: KeyboardEvent, item?: Item) => {
    if (e.key === KeyCodes.ENTER) {
      item ? handleItemPressed(item) : toggleMenu();
    } else if (e.key === KeyCodes.ESC) {
      closeMenu();
    }
  };

  /**
   * Closes the menu
   */
  const closeMenu = () => {
    isOpen = false;
  };

  /**
   * Toggles the state of the pressed item
   * @param item the item presses
   */
  const handleItemPressed = (item: Item) => {
    if (isChecked(item)) {
      checked = checked.filter(i => i.value !== item.value);
    } else {
      checked = [...checked, item];
    }
  };
</script>

<div class="el el-dropdown" style={cssVariables}>
  <div
    class="el-label"
    tabindex="0"
    on:click={toggleMenu}
    on:keyup={e => handleKeyEvent(e)}
  >
    {#if anyCheckedItems}
      {checkedItemsDisplay}
    {:else}
      {label}
    {/if}
    <svg
      data-open={isOpen}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      ><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
        d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"
      /></svg
    >
  </div>
  <ul class="el-list" data-open={isOpen}>
    {#each items as item, index (index)}
      <li class="el-item" data-checked={isChecked(item)}>
        <label on:keyup={e => handleKeyEvent(e, item)}>
          <input
            type="checkbox"
            bind:group={checked}
            name={label}
            value={item}
          />
          {item.name}
        </label>
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
  }

  .el-label:hover {
    background-color: var(--bg-color-hover);
    color: var(--text-color-hover);
  }

  .el-label:focus-visible {
    background-color: var(--bg-color-focus);
    color: var(--text-color-focus);
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
    fill: var(--text-color-gover);
  }

  .el-label:focus-visible svg {
    fill: var(--text-color-focus);
  }

  .el-list {
    box-shadow: var(--shadow-x) var(--shadow-y) var(--shadow-blur)
      var(--shadow-offset) var(--shadow-color);
    background-color: var(--neutral-color);
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

  .el-item label {
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

  .el-item label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>
