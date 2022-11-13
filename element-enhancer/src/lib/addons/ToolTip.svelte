<script lang="ts">
  type StyleObject = {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform: string;
  };

  // Positions of the tooltip
  const top = {
    top: '0',
    left: '50%',
    transform: 'translate(-50%, -100%)',
  };
  const bottom = {
    bottom: '0',
    left: '50%',
    transform: 'translate(-50%, 100%)',
  };
  const left = {
    top: '50%',
    left: '0',
    transform: 'translate(-100%, -50%)',
  };
  const right = {
    top: '50%',
    right: '0',
    transform: 'translate(100%, -50%)',
  };

  // Props
  export let position: 'top' | 'bottom' | 'left' | 'right' = 'top';

  // State
  let positionStyles: String;

  const mapPositionStyles = (object: StyleObject) => {
    return Object.entries(object)
      .map(([key, value]) => `${key}:${value}`)
      .join(';');
  };

  // Set position styles based on position prop
  if (position === 'top') {
    positionStyles = mapPositionStyles(top);
  } else if (position === 'bottom') {
    positionStyles = mapPositionStyles(bottom);
  } else if (position === 'left') {
    positionStyles = mapPositionStyles(left);
  } else if (position === 'right') {
    positionStyles = mapPositionStyles(right);
  }

  console.log(positionStyles);
</script>

<div class="wrapper">
  <!-- Tooltip -->
  <slot name="tooltip" style={positionStyles}>No tips provided</slot>
  <!-- Content -->
  <slot name="content" />
</div>
