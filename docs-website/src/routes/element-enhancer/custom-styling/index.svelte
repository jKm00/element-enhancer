<script lang="ts">
	import InlineCodeBlock from '@/components/InlineCodeBlock.svelte';
	import CodeFile from '@/components/CodeFile.svelte';
	import ColorShowcase from '@/components/ColorShowcase.svelte';
</script>

<!-- 
TODO: Rewrite global styles configuration

- Configure once, applied to all elements
- Color theme
  - For just changing the color theme of the default theme
- More specific theme
  - Sometimes needs to change more like spacing, border styles, etc.default
  - All css style attributes is assosiated with a css variable as well 
  as colors has css variable for different states like hover, 
  focus and selected
- Combine
  - Can combine both the color theme and more specific theme
  - Make sure specific theme has greate specificity than the color theme,
  e.gc. by defining it belove color theme in the css file


  # Global styles

  The concept of global styles is that is can be configured once in a 
  global css file imported somewhere in the root of the application and
  the styles will be applied to all element-enhancer elements.default

  When configuring the global styles, it needs to be done inside an .el block
  to make sure the styles are only applied to element-enhancer elements.

  ## Two configuration layers

  In most cases it's enough to just change the color theme. That's why
  with element-enhancer there are two layers of global styles. The first
  layers defines the general color themes which are then inherited to the
  second layer.

  However in some cases, you need to be more specific with the styles such
  as spacing, border styles, etc. In that case there is a second layer where
  you can configure each individual style attribute. In this layer you can
  also set different styles for different states such as hover, focus and
  selected if you are not pleased with the way it is inherited from the
  first layer.

  You can combine both layers to get a unique style just for your application
  and still have the same functionallity of all elements.

  First let's look at how you can configure the color theme.

  ## Color theme

  - Show exmaple of an .el block with color theme configuration
  - Show list off all availble color theme variables

  ## More specific styles

  - Show example of an .el block with more specific styles configuration
  - Show list of all available style attributes

  ## Combining both layers

  There are multiple waus to combine both layers. The most common way is to only 
  create one css file and configure both layers in that. With this way of doing it, 
  you need to make sure the color theme variables are configured before the more 
  specific styles variables.

  - Show example

  Another way is to create one css file for color theme and one css file for more 
  specific styles. Then you import both of them in the root of your application.
  With this way of doing it, you need to make sure the color theme css file is 
  imported before the more specific styles css file.

  - Show example

  # Element specific styles

  Element-enhancer also allows you to specify styles for each individual component.
  This is done by adding a style tag inside the component and then adding the styles
  you want to override. Element specific styles will always override the global styles.
  
  ... show examples and whatnot

  This can be extremly useful if you want to change the style of just one component whilst
  having a general theme for the rest of the application.

  For more details on what element specific styles each element has, and navigate to 
  the element you want to configure. There you will find a complete list of all it's
  style attributes and what they do as well as examples of how to use them.
-->

<section class="section">
	<h1 class="title title--main">Custom styling</h1>
	<p class="text">
		By default, element enhancer comes with a pre-defined theme that are
		represented throughout all of the elements. Normally this does not fit the
		theme of your website, so you can customize it however you want. There are
		two ways to customize:
	</p>
	<ul class="inline-list">
		<li>Globally</li>
		<li>Individually for each component</li>
	</ul>
	<p class="text">
		Lets talk about the global styles first as this is the most common way of
		customizing your elements.
	</p>
</section>
<section class="section" id="global-styles">
	<h2 class="title title--secondary">Global styles</h2>
	<p class="text">
		Global styles are meant to be defined once and will then be applied to all
		the elements throughout your application. By default, there is a purple
		theme, however you can easely overwrite this and make it fit your
		application theme.
	</p>
	<p class="text">
		When defining your global styles, you need to think of how specific you want
		to be. For some application it might be enough to just change the color and
		keep the same "style". Other times you might want to be more specific and
		change things like spacing and border style etc. Thats why with element
		enhancer there is a top level of css variables for just changing the colors.
		And then there is a second level of css variables for changing the more
		specific styles which uses the colors from the top level. You can also
		combine these two levels, to get the maximum customization.
	</p>
	<p class="text">
		Enough talking, let's get started, by create a new css stylesheet. Call it
		whatever you want and redefine the css variable with your prefered values <em
			class=""><a href="">(list of all css variables belove)</a></em
		>. When you redefine them you have to make sure you do so inside an
		<InlineCodeBlock>.el</InlineCodeBlock> block. That's because the css variables
		are scoped to only affect elements with this class. Let's take a look at an example
		stylesheet:
	</p>
	<CodeFile path="./myStyle.css">
		{`
  .el {
    --theme-color: red;
    --theme-color-secondary: white;
    /* Continue overwriting variables ... */
  }`}
	</CodeFile>
	<p class="text">
		Now, just import this file somewhere in the root of your application. Often
		this can be in your <InlineCodeBlock>__layout.svelte</InlineCodeBlock> component.
		Just make sure its imported after the default element-enhancer stylesheet!
	</p>
	<p class="text">
		All you need to do now is to fill your stylesheet with all the variables you
		want to change. First let's look at all the css variables for changing the
		color theme:
	</p>
	<table class="table">
		<tr class="table-row table-row--heading">
			<th> Variable </th>
			<th> Description </th>
			<th> Default value </th>
			<th> Example </th>
		</tr>
		<tr class="table-row">
			<td> --theme-color </td>
			<td class="text--small">
				Defines the theme color.<br /> By default this color is used for:
				<ul class="text-list">
					<li class="text-list__item">text color</li>
					<li>border color</li>
					<li>hover/focus color</li>
				</ul>
			</td>
			<td>
				<p class="flex center gap-0-5">
					#5f3dc5 <ColorShowcase color={'#5f3dc5'} />
				</p>
			</td>
			<td>
				<InlineCodeBlock>--theme-color: #5f3dc5</InlineCodeBlock>
			</td>
		</tr>
		<tr class="table-row">
			<td> --theme-color-secondary </td>
			<td class="text--small"
				>Defines a secondary theme color. <br />
				By default this color is used for things like the background of buttons and
				input fields.</td
			>
			<td
				><p class="flex center gap-0-5">
					#e5dbff <ColorShowcase color={'#e5dbff'} />
				</p></td
			>
			<td>
				<InlineCodeBlock>--theme-color-secondary: #e5dbff</InlineCodeBlock>
			</td>
		</tr>
		<tr>
			<td>--theme-text-color</td>
			<td class="text--small">Defines the default text color of all elements</td
			>
			<td
				><p class="flex center gap-0-5">
					#5f3dc5 <ColorShowcase color={'#5f3dc5'} />
				</p></td
			>
			<td><InlineCodeBlock>--theme-text-color: #5f3dc5</InlineCodeBlock></td>
		</tr>
	</table>
	<p class="text">
		For when you want to change more than just the color theme you can overwrite
		the css variables that defines the more specific styles. In general each css
		attribute has it's own css variable assosiated with it <em
			><a href="#">(list of all these variables belove)</a></em
		> that can be overwritten. By default these variables inheirt the styles from
		the top level described above. So when overwriting these, it's important that
		it's done belove the color specification to make sure these are the one used.
	</p>
	<p class="text">
		As mentioned, in general all css attribute used for styling has it's own css
		variable assosiated with it. Also for color specific variables there are
		custom css variables for setting different color depending on hover, focus
		and selected states.
	</p>
	<table class="table">
		<tr class="table-row table-row--heading">
			<th> Variable </th>
			<th> Description </th>
			<th> Default value </th>
			<th> Example </th>
		</tr>
		<tr class="table-row">
			<td>--text-color</td>
			<td>Variable for setting text color</td>
			<td
				><p class="flex center gap-0-5">
					#5f3dc5 <ColorShowcase color={'#5f3dc5'} />
				</p></td
			>
			<td><InlineCodeBlock>--text-color: #5f3dc5</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--text-color-hover</td>
			<td>Variable for setting the color of text when in hover state</td>
			<td
				><p class="flex center gap-0-5">
					#ffffff <ColorShowcase color={'#fff'} />
				</p></td
			>
			<td><InlineCodeBlock>--text-color-hover: #fff</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--text-color-focus</td>
			<td>Variable for setting the color of text when in focus state</td>
			<td
				><p class="flex center gap-0-5">
					#ffffff <ColorShowcase color={'#fff'} />
				</p></td
			>
			<td><InlineCodeBlock>--text-color-focus: #fff</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--text-color-selected</td>
			<td>Variable for setting the color of text when in selected state</td>
			<td
				><p class="flex center gap-0-5">
					#ffffff <ColorShowcase color={'#fff'} />
				</p></td
			>
			<td><InlineCodeBlock>--text-color-selected: #fff</InlineCodeBlock></td>
		</tr>
	</table>
</section>
<section class="section" id="component-styles" />
<h2 class="title title--secondary">Component specific style</h2>

<style>
</style>
