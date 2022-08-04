<script lang="ts">
  import InlineCodeBlock from "@/components/InlineCodeBlock.svelte";
  import CodeFile from "@/components/CodeFile.svelte";
</script>

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
    Global styles are meant to be defined once and will then be applied to all the 
    elements throughout your application. By default, there is a purple theme, 
    however you can easely overwrite this and make it fit your application theme.
  </p>
  <p class="text">
    To get started, create a new css stylesheet. Call it whatever you want and 
    redefine the css variable with your prefered values <em class="">(list of all css variables 
    belove)</em>. When you redefine them you have to make sure you do so inside an 
    <InlineCodeBlock>.el</InlineCodeBlock> block. That's because the css variables 
    are scoped to only affect elements with this class. Let's take a look at an example 
    stylesheet:
  </p>
  <CodeFile path="./myStyle.css">
  {`
  .el {
    --textColor: red;
    --bgColor: lightred;
    /* Continue overwriting variables ... */
  }`}
  </CodeFile>
  <p class="text">
    Now, just import this file somewhere in the root of your application. Often 
    this can be in your <InlineCodeBlock>__layout.svelte</InlineCodeBlock> component. 
    Just make sure its imported after the default element-enhancer stylesheet!
  </p>
  <p class="text">
    Here is the list of all custom theme variables. These are the variables 
    that can be overwritten in a custom stylesheet:
  </p>
  <table>
    <tr>
      <th>
        Variable
      </th>
      <th>
        Description
      </th>
      <th>
        Default value
      </th>
      <th>
        Example
      </th>
    </tr>
    <tr>
      <td>
        --textColor
      </td>
      <td>
        Defines the color of all text elements
      </td>
      <td>
        #5f3dc5 <span class="color-showcase" style="--bgColor: #5f3dc5"></span>
      </td>
      <td>
        <InlineCodeBlock>
          textColor: 'red'
        </InlineCodeBlock>
      </td>
    </tr>
  </table>
</section>
<section class="section" id="component-styles"></section>

<style>
  .color-showcase {
    display: inline-block;
    height: 1rem;
    aspect-ratio: 1 / 1;
    background-color: var(--bgColor);
  }
</style>