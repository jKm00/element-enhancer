<script lang="ts">
  import { convertToKebabCase } from '@/util/stringUtil';

  interface StyleOptions {
    maxWidth?: string;
    animationDuration?: string;
    animationFunction?: string;
    animationDelay?: string;
    popUpBg?: string;
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string;
    color?: string;
    spacingY?: string;
    spacingX?: string;
    borderRounding?: string;
    shadowX?: string;
    shadowY?: string;
    shadowBlur?: string;
    shadowOffset?: string;
    shadowColor?: string;
  }

  // Props
  export let position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  export let styleOptions: StyleOptions = undefined;

  $: cssVariables = styleOptions
    ? Object.entries(styleOptions)
        .map(([key, value]) => `--${convertToKebabCase(key)}:${value}`)
        .join(';')
    : null;

  $: console.log(cssVariables);

  // State
  let positionStyles: string;
  let triangleStyles: string;

  // Set position styles based on position prop
  if (position === 'top') {
    positionStyles =
      '--top: -1rem; --left: 50%; --translate: translate(-50%, -100%); --scale: scale(0);';
    triangleStyles =
      'bottom: 0; left: 50%; transform: translate(-50%, 50%) rotate(45deg);';
  } else if (position === 'right') {
    positionStyles =
      '--top: 50%; --right: -1rem; --translate: translate(100%, -50%); --scale: scale(0);';
    triangleStyles =
      'left: 0; top: 50%; transform: translate(-50%, -50%) rotate(45deg);';
  } else if (position === 'bottom') {
    positionStyles =
      '--bottom: -1rem; --left:50%; --translate: translate(-50%, 100%); --scale: scale(0);';
    triangleStyles =
      'top: 0; left: 50%; transform: translate(-50%, -50%) rotate(45deg);';
  } else if (position === 'left') {
    positionStyles =
      '--left: -1rem; --top: 50%; --translate: translate(-100%, -50%); --scale: scale(0);';
    triangleStyles =
      'right: 0; top: 50%; transform: translate(50%, -50%) rotate(45deg);';
  }
</script>

<div class="el el-tooltip">
  <!-- Tooltip -->
  <div class="el el-tip" style={`${positionStyles} ${cssVariables}`}>
    <slot name="tooltip" style={positionStyles}>No tips provided</slot>
    <span class="el el-triangle" style={`${triangleStyles} ${cssVariables}`} />
  </div>
  <!-- Content -->
  <div class="el el-content">
    <slot name="content" />
  </div>
</div>

<style>
  .el-tooltip {
    position: relative;
    width: fit-content;
  }

  .el-tip {
    --max-width: max-content;
    --animation-delay: 0.2s;

    position: absolute;

    background-color: var(--pop-up-bg);

    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    color: var(--text-color);

    width: max-content;
    max-width: var(--max-width);
    padding-block: var(--spacing-y);
    padding-inline: var(--spacing-x);
    border-radius: var(--border-rounding);

    box-shadow: var(--shadow-x) var(--shadow-y) var(--shadow-blur)
      var(--shadow-offset) var(--shadow-color);

    opacity: 0;
    top: var(--top);
    right: var(--right);
    bottom: var(--bottom);
    left: var(--left);
    transform: var(--translate) var(--scale);

    transition: opacity var(--animation-duration) var(--animation-function)
        var(--animation-delay),
      transform 1ms var(--animation-function) var(--animation-delay);
  }

  .el-triangle {
    position: absolute;
    display: block;
    width: 1rem;
    aspect-ratio: 1 / 1;
    background-color: var(--pop-up-bg);
  }

  .el-tooltip:hover .el-tip,
  .el-tooltip:focus .el-tip {
    --scale: scale(1) !important;
    opacity: 1;
  }
</style>
