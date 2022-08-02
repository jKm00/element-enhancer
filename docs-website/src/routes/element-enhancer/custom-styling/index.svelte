<script lang="ts"></script>

<section class="section">
  <h1 class="title title--main">Custom styling</h1>
  <p class="text">
    By default, element enhancer comes with a pre-defined theme that are represented throughout all of the elements. 
    Normally this does not fit the theme of your website, so you can customize it howere you want. 
    There are two ways to customize:
  </p>
  <ul class="inline-list">
    <li>Globally</li>
    <li>Individually for each component</li>
  </ul>
  <p class="text">
    Lets talk about the global styles first as this is the most common way of customizing your elements.
  </p>
</section>
<section class="section" id="global-styles">
  <h2 class="title title--secondary">Global styles</h2>
  <p class="text">
    CSS variables are used to for all the theme specific values, so 
    overwriting these values will change the default theme of all components. 
    That's how you can change the theme globally for every component as once.
    Just create your own stylesheet and overwrite the custom variables, and 
    make sure your stylesheet is imported last.
  </p>
  <p class="text">
    Here is the list of all custom theme variables. These are the variables 
    that can be overwritten in a custom stylesheet:
  </p>
</section>
<section class="section" id="component-styles"></section>