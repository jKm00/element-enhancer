<script lang="ts">
  import { KeyCodes } from "@/util/KeyCodes";
  import { createEventDispatcher } from "svelte";
  import type { StyleOptions } from '@/util/types/StyleOptions'

  type Item = {
    name: string;
    value: string;
  };

  const dispatch = createEventDispatcher();

  // Props
  export let label: string;
  export let items: Item[];
  // Custom styles
  export let styleOptions: StyleOptions = undefined

  $: cssVariables = styleOptions ? 
  Object.entries(styleOptions)
    .map(([key, value]) => `--${key}:${value}`)
    .join(';') 
  : null;

  // State
  let selected: Item;
  let isOpen = false;

  /**
   * Dispatches the selected item whenever it changes
  */
  $: dispatch('change', selected?.value)

  /**
   * Checks if an item is selected.
   * Returns true if it is and false if not
   * @param item, the item to check wether or not is selected
   */
  $: isChecked = (item: Item) => {
    if (selected) {
      return selected.value === item.value
    }
  }

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
  }

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
    <!-- TODO: Make a visual representation of the selected item
    also in the list (not just label) -->
    {#each items as item, index (index)}
      <li
        on:click={() => handleSelect(item)}
        on:keyup={(e) => handleKeyEvent(e, item)}
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
    color: var(--textColor);
    min-width: var(--minWidth);
    max-width: var(--maxWidth);

    position: relative;
  }

  .el-label {
    border: var(--borderThickness) var(--borderStyle) var(--borderColor);
    border-radius: var(--borderRadius);
    padding-block: var(--spacingY);
    padding-inline: var(--spacingX);
    background-color: var(--bgColor);
    
    transition: background-color var(--animationDuration)
        var(--animationFunction),
      color var(--animationDuration) var(--animationFunction);

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    position: relative;
  }

  .el-label:hover {
    background-color: var(--bgColorHover);
    color: var(--textColorHover);
    border-color: var(--borderColorHover);
  }

  .el-label:focus-visible {
    background-color: var(--bgColorFocus);
    color: var(--textColorFocus);
    border-color: var(--borderColorFocus);
  }

  .el-label svg {
    fill: var(--textColor);
    transition: transform var(--animationDuration) var(--animationFunction),
    fill var(--animationDuration) var(--animationFunction);
  }

  .el-label svg[data-open="true"] {
    transform: rotate(90deg);
  }

  .el-label:hover svg {
    fill: var(--textColorHover);
  }

  .el-label:focus-visible svg {
    fill: var(--textColorFocus);
  }

  .el-list {
    box-shadow: 
      var(--shadowX) 
      var(--shadowY) 
      var(--shadowBlur)
      var(--shadowOffset) 
      var(--shadowColor);
    background-color: var(--neutralColor);
    padding-block: var(--spacingY);
    
    display: none;
    position: absolute;
    left:0;
    right: 0;
    z-index: 99999;
    min-width: fit-content;
  }

  .el-list[data-open="true"] {
    display: block;
  }

  .el-item {
    padding-inline: var(--spacingX);
    padding-block: var(--spacingY);

    transition:
      background-color var(--animationDuration) var(--animationFunction),
      color var(--animationDuration) var(--animationFunction);
  }

  .el-item:hover {
    background-color: var(--bgColorHover);
    color: var(--textColorHover);
  }

  .el-item:focus {
    background-color: var(--bgColorFocus);
    color: var(--textColorFocus)
  }

  .el-item[data-checked="true"] {
    background-color: var(--bgColorSelected);
    color: var(--textColorSelected);
  }
</style>
