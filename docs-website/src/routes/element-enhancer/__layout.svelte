<script lang="ts">
  import NavItem from '@/components/NavItem.svelte'

  const navItems = [
    {
    label: 'Getting Started',
    link: '/element-enhancer/getting-started',
    subItems: [
      {
        label: 'Windowns',
        link: '/element-enhancer/getting-started/windows'
      },
      {
        label: 'Mac',
        link: '/element-enhancer/getting-started/mac',
        subItems: [
          {
            label: 'MacBook Air',
            link: '/elemet-enhancer/getting-started/mac/air'
          },
          {
            label: 'MacBook Pro',
            link: '/element-enhancer/getting-started/mac/pro'
          }
        ]
      },
      {
        label: 'Linux',
        link: '/element-enhancer/getting-started/linux'
      }
    ]
  },
  {
    label: 'Elements',
    link: '/element-enhancer/elements',
    subItems: [
      {
        label: 'Dropdown',
        link: '/element-enhancer/elements/dropdown'
      }
    ]
  }
]
</script>

<nav class="nav">
  <a href="/" class="logo">Element Enhancer</a>
  <ul class="list">
    {#each navItems as navItem}
      <NavItem item={navItem} />
    {/each}
  </ul>
</nav>

<style>
  .nav {
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    overflow-y: auto;
    background-color: var(--clr-card-bg);
    padding: 1rem;
    box-shadow: 1px 0 10px rgba(0, 0, 0, 0.1);
  }

  .logo {
    display: block;
    padding: 1rem;
  }
</style>