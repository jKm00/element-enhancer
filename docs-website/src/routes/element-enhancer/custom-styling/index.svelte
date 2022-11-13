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

  The concept of global styles is that it can be configured once in a 
  global css file which is imported somewhere in the root of the application 
  and the styles will be applied to all element-enhancer elements.

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
  first layer (the color theme layer).

  You can combine both layers to get a unique style just for your application
  and still have the same functionallity of all elements.

  ## Color theme

  - Show exmaple of an .el block with color theme configuration
  - Show list off all availble color theme variables

  ## More specific styles

  - Show example of an .el block with more specific styles configuration
  - Show list of all available style attributes

  ## Combining both layers

  There are multiple ways to combine both layers. The most common way is to only 
  create one css file and configure both layers in that. With this way of doing it, 
  you need to make sure the color theme variables are configured before the more 
  specific styles variables.

  - Show example

  Another way is to create one css file for color theme and one css file for more 
  specific styles. Then you import both of them in the root of your application.
  With this way of doing it, you need to make sure the color theme css file is 
  imported before the more specific styles css file.

  - Show example

	## Multiple themes for one application

	Because the elements get their styles from the stylesheet you import, you 
	could essentially generate multiple different stylesheets with different 
	themes and import them in different parts of you application. Let's say you have 
	an application with multiple pages and you want to separate them from one another 
	by having different color themes for each page. You can generate one color 
	configuration for each page and import them in the root of each page. This way 
	you can have multiple themes in one application.

  # Element specific styles

  Element-enhancer also allows you to specify styles for each individual component.
  This is done by adding an inline style tag to the component and then adding the 
  styles you want to override. Element specific styles will always override the 
  global styles.
  
  ... show examples and whatnot

  This can be extremly useful if you want to change the style of just one component whilst
  having a general theme for the rest of the application.

  For more details on what element specific styles each element has, navigate to 
  the element you want to configure. There you will find a complete list of all it's
  style attributes and what they do as well as examples of how to use them.
-->

<section class="section" id="custom-styling">
	<h1 class="title title--main">Custom styling</h1>
	<p class="text">
		By default, element enhancer comes with a pre-defined theme that are
		represented throughout all of the elements. Normally this does not fit the
		theme of your application, so you can customize it however you want. There
		are two ways to customize:
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
<!-- Global styles -->
<section class="section" id="global-styles">
	<h2 class="title title--secondary">Global styles</h2>
	<!-- General concept -->
	<p class="text">
		The concept of global styles is that it can be configured once in a global
		css file which is imported somewhere in the root of the applcaiton and the
		styles will be applied to all element-enhancer elements.
	</p>
	<p class="test">
		When configuring the global styles, it need to be done inside an <InlineCodeBlock
			>.el</InlineCodeBlock
		> block to make sure the styles are only applied to element-enhancer elements.
	</p>

	<!-- Configuration layers -->
	<h3 class="title title--third">Two configuration layers</h3>
	<p class="text">
		In most cases it's enough to just change the color theme. That's why with
		element-enhancer there are two layers of global styles. The first layers
		defines the general <a href="#color-theme">color theme</a> which are the inherited
		to the second layer.
	</p>
	<p class="text">
		However, in some cases, you need to be more specific with the styles such as
		spacing, border styles, etc... In that case there is a second layer where
		you can configure each <a href="#specific-styles"
			>individual style attribute</a
		>. In this layer you can also set different styles for different states such
		as hover, focus and selected if you are not pleased with the way it is
		inherited from the first layer <em>(the color theme layer).</em>
	</p>
	<p class="text">
		You can combine both layers to get a unique style just for your applicaiton
		and still have the same functionallity of all elements.
	</p>
	<p class="text">First let's look at how you can configure the color theme:</p>

	<!-- Color theme -->
	<h3 class="title title--third" id="color-theme">Color theme</h3>
	<p class="text">
		To configure the color theme we have to specify all the css variables used
		to define the color theme. Create a css file with an <InlineCodeBlock
			>.el</InlineCodeBlock
		> block and define all the css variables that you want to change to get the color
		theme you want
		<em
			><a href="#color-theme-variables">(list over all css varialbe belove)</a
			></em
		>. Then import this file in the root of your application and tada... all
		elements should now have your custome style.
	</p>
	<CodeFile alt={'Example css config file:'} path="./element-styles.css">
		{`
  .el {
    --theme-color: #5f3dc5;
    --theme-color-secondary: #e5dbff;
    /* Continue configuring variables ... */
  }`}
	</CodeFile>

	<!-- Color theme variable list -->
	<h4 class="title title-fourth">List of all color theme variables:</h4>
	<p class="text--small">
		<em
			>Because everything is customized using css variables, you can use the
			same values when defining the variables as you would when writing pure
			css. E.g. when setting the <InlineCodeBlock>--font-size</InlineCodeBlock> you
			can use all the valus you can use when defining font size with pure css: <InlineCodeBlock
				>px</InlineCodeBlock
			>, <InlineCodeBlock>%</InlineCodeBlock>, <InlineCodeBlock
				>em</InlineCodeBlock
			>, <InlineCodeBlock>rem</InlineCodeBlock>, etc... Even other custom
			variables can be used! E.g. <InlineCodeBlock
				>--theme-color: var(--color-primary);</InlineCodeBlock
			></em
		>
	</p>
	<table class="table">
		<tr class="table-row table-row--heading">
			<th>Variable</th>
			<th>Description</th>
			<th>Default value</th>
			<th>Example</th>
		</tr>
		<tr class="table-row">
			<td>--theme-color</td>
			<td class="text--small">Defines the main theme of the elements.</td>
			<td
				><p class="flex center gap-0-5">
					#5f3dc5 <ColorShowcase color={'#5f3dc5'} />
				</p></td
			>
			<td><InlineCodeBlock>--theme-color: red</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--theme-bg-color</td>
			<td class="text--small"
				>The background color of elements. E.g. the background color of button,
				input fields etc...</td
			>
			<td
				><p class="flex center gap-0-5">
					#ede6ff <ColorShowcase color={'#ede6ff'} />
				</p></td
			>
			<td><InlineCodeBlock>--theme-color-secondary: red</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--theme-text-color</td>
			<td class="text--small"
				>Defines the text color used for all text in every element</td
			>
			<td
				><p class="flex center gap-0-5">
					#5f3dc5 <ColorShowcase color={'#5f3dc5'} />
				</p></td
			>
			<td><InlineCodeBlock>--theme-text-color: red</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--theme-text-color-active</td>
			<td class="text--small"
				>Defines the text color used when an item is in an active state (hover,
				focus and selected).
			</td>
			<td
				><p class="flex center gap-0-5">
					#ffffff <ColorShowcase color={'#fff'} />
				</p></td
			>
			<td><InlineCodeBlock>--theme-text-color-active: red</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--theme-pop-up-bg</td>
			<td class="text--small"
				>The background color is used as a background on "pop-up" containers.
				E.g. the container that pops up when a time picker is active.
			</td>
			<td
				><p class="flex center gap-0-5">
					#ffffff <ColorShowcase color={'#fff'} />
				</p></td
			>
			<td
				><InlineCodeBlock>--theme-text-color-inactive: red</InlineCodeBlock></td
			>
		</tr>
		<tr class="table-row">
			<td>--theme-font-family</td>
			<td class="text--small"
				>Used for setting the font family of all elements. If not specified,
				each element will inherit the font family of its parent.
			</td>
			<td><p class="flex center gap-0-5">Segoe UI</p></td>
			<td
				><InlineCodeBlock
					>--theme-font-family: 'Arial', Tahoma, sans-serif</InlineCodeBlock
				></td
			>
		</tr>
		<tr class="table-row">
			<td>--theme-font-size</td>
			<td class="text--small"
				>Used for setting the font size of all elements. If not specified, each
				element will inherit the font size of its parent.
			</td>
			<td><p class="flex center gap-0-5">1rem</p></td>
			<td><InlineCodeBlock>--theme-font-size: 20px</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--theme-font-weight</td>
			<td class="text--small"
				>Used for setting the font weight of all elements. If not specified,
				each element will inherit the font weight of its parent.
			</td>
			<td><p class="flex center gap-0-5">400</p></td>
			<td><InlineCodeBlock>--theme-font-weight: 700</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--theme-border-rounding</td>
			<td class="text--small">Sets the border radius for each element. </td>
			<td><p class="flex center gap-0-5">5px</p></td>
			<td><InlineCodeBlock>--theme-border-radius: 1rem</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--theme-border-thickness</td>
			<td class="text--small"
				>Sets the thickness of the border for each element.
			</td>
			<td><p class="flex center gap-0-5">1px</p></td>
			<td><InlineCodeBlock>--theme-border-width: 5px</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--theme-border-style</td>
			<td class="text--small"
				>Sets the style of the border for each element. Use the same styles as
				you would with css, e.g. solid, dotted, etc...
			</td>
			<td><p class="flex center gap-0-5">solid</p></td>
			<td><InlineCodeBlock>--theme-border-style: dotted</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--theme-spacing-x</td>
			<td class="text--small"
				>Sets the default horizontal padding of each elements.
			</td>
			<td><p class="flex center gap-0-5">1.5rem</p></td>
			<td><InlineCodeBlock>--theme-border-color: 10px</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--theme-spacing-y</td>
			<td class="text--small"
				>Sets the default vertical padding of each elements.
			</td>
			<td><p class="flex center gap-0-5">1rem</p></td>
			<td><InlineCodeBlock>--theme-border-color: 10px</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--theme-animation-function</td>
			<td class="text--small"
				>Defines the animation function used when transitioning between
				different states which changes the style of the elements. E.g. when
				hovering.
			</td>
			<td><p class="flex center gap-0-5">ease-in-out</p></td>
			<td
				><InlineCodeBlock>--theme-animation-function: ease-in</InlineCodeBlock
				></td
			>
		</tr>
		<tr class="table-row">
			<td>--theme-animation-duration</td>
			<td class="text--small"
				>Defines the animation duration used when transitioning between
				different states which changes the style of the elements. E.g. when
				hovering.
			</td>
			<td><p class="flex center gap-0-5">150ms</p></td>
			<td
				><InlineCodeBlock>--theme-animation-duration: 0.2s</InlineCodeBlock></td
			>
		</tr>
	</table>

	<!-- Specific styles -->
	<h3 class="title title-third" id="specific-styles">Specific styles</h3>
	<p class="text">
		To configure specific styles you would use the same method as with color
		theme. Create a new css file and import it in the root of the application
		(or you can use the same file as you used for color theme configuration).
		Make sure every variable is defined inside an <InlineCodeBlock
			>.el</InlineCodeBlock
		> block so they only affect the element-enhancer elements.
	</p>
	<CodeFile alt={'Example css config file:'} path="./element-styles.css">
		{`
  .el {
    /* ... color theme configuration */

    --text-color: #5f3dc5;
    --text-color-focus: #e5dbff;
    /* Continue configuring variables ... */
  }`}
	</CodeFile>
	<!-- Specific styles variables list -->
	<h4>List of all specific styles variables:</h4>
	<p class="text--small">
		<em
			>The list of all specific style variables is quit a lot longer than the
			one for color theme only. That's intentional, making it quick and easy to
			set up a color theme as well as making sure you can customize everything
			beyond colors if that is wanted. That being said, you do not have to
			define all variables listed belove. Just the once you want to get the
			style you are after!</em
		>
	</p>
	<table class="table">
		<tr class="table-row table-row--heading">
			<th>Variable</th>
			<th>Description</th>
			<th>Default value</th>
			<th>Example</th>
		</tr>
		<tr class="table-row">
			<td>--text-color</td>
			<td class="text--small">Sets the color of all text elements.</td>
			<td
				><p class="flex center gap-0-5">
					#5f3dc6 <ColorShowcase color={'#5f3dc6'} />
				</p></td
			>
			<td><InlineCodeBlock>--text-color: #5f3dc5</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--text-color-hover</td>
			<td class="text--small"
				>Sets the color of all text elements when in hover state.
			</td>
			<td
				><p class="flex center gap-0-5">
					#ffffff <ColorShowcase color={'#fff'} />
				</p></td
			>
			<td><InlineCodeBlock>--text-color-focus: #e5dbff</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--text-color-focus</td>
			<td class="text--small"
				>Sets the color of all text elements when in focus state.
			</td>
			<td
				><p class="flex center gap-0-5">
					#ffffff <ColorShowcase color={'#fff'} />
				</p></td
			>
			<td><InlineCodeBlock>--text-color-focus: #e5dbff</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--text-color-selected</td>
			<td class="text--small"
				>Sets the color of all text elements when they are selected state. This
				is only used for elements where you can select items in the element
				itself, e.g. a multiselect dropdown.
			</td>
			<td
				><p class="flex center gap-0-5">
					#ffffff <ColorShowcase color={'#fff'} />
				</p></td
			>
			<td><InlineCodeBlock>--text-color-active: #e5dbff</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--bg-color</td>
			<td class="text--small">Sets the background color for all elements. </td>
			<td
				><p class="flex center gap-0-5">
					#ede6ff <ColorShowcase color={'#ede6ff'} />
				</p></td
			>
			<td><InlineCodeBlock>--bg-color: #e5dbff</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--bg-color-hover</td>
			<td class="text--small"
				>Sets the background color for all elements when in hover state.
			</td>
			<td
				><p class="flex center gap-0-5">
					#5f3dc5 <ColorShowcase color={'#5f3dc5'} />
				</p></td
			>
			<td><InlineCodeBlock>--bg-color-hover: #5f3dc5</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--bg-color-focus</td>
			<td class="text--small"
				>Sets the background color for all elements when in focus state.
			</td>
			<td
				><p class="flex center gap-0-5">
					#5f3dc5 <ColorShowcase color={'#5f3dc5'} />
				</p></td
			>
			<td><InlineCodeBlock>--bg-color-focus: #5f3dc5</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--bg-color-selected</td>
			<td class="text--small"
				>Sets the background color for all elements when in selected state.
			</td>
			<td
				><p class="flex center gap-0-5">
					#5f3dc5 <ColorShowcase color={'#5f3dc5'} />
				</p></td
			>
			<td><InlineCodeBlock>--bg-color-selected: #5f3dc5</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--border-color</td>
			<td class="text--small"
				>Sets the color of the border used around elements.
			</td>
			<td
				><p class="flex center gap-0-5">
					#5f3dc5 <ColorShowcase color={'#5f3dc5'} />
				</p></td
			>
			<td><InlineCodeBlock>--border-color: #5f3dc5</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--border-color-hover</td>
			<td class="text--small"
				>Sets the color of the border used around elements when in hover state.
			</td>
			<td
				><p class="flex center gap-0-5">
					#5f3dc5 <ColorShowcase color={'#5f3dc5'} />
				</p></td
			>
			<td><InlineCodeBlock>--border-color-hover: #5f3dc5</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--border-color-focus</td>
			<td class="text--small"
				>Sets the color of the border used around elements when in focus state.
			</td>
			<td
				><p class="flex center gap-0-5">
					#5f3dc5 <ColorShowcase color={'#5f3dc5'} />
				</p></td
			>
			<td><InlineCodeBlock>--border-color-focus: #5f3dc5</InlineCodeBlock></td>
		</tr>
		<tr class="table-row">
			<td>--border-color-selected</td>
			<td class="text--small"
				>Sets the color of the border used around elements when in selected
				state.
			</td>
			<td
				><p class="flex center gap-0-5">
					#5f3dc5 <ColorShowcase color={'#5f3dc5'} />
				</p></td
			>
			<td
				><InlineCodeBlock>--border-color-selected: #5f3dc5</InlineCodeBlock></td
			>
		</tr>
	</table>

	<!-- Combining both layers -->
	<h3 class="title title--third" id="combining-both-layers">
		Combining both layers
	</h3>
	<p class="text">
		There are multiple ways to combine both layers. The most common way is to
		only create one css file and configure both layers in that. With this way of
		doing it, you need to make sure the color theme variables are configured
		before the more specific styles variables.
	</p>
	<CodeFile
		alt={'Example: Combined css config file:'}
		path="./element-styles.css"
	>
		{`
  .el {
    /* Color theme configuration */
    --theme-color: #5f3dc5;
    --theme-bg-color: #ede6ff;
    /* Continue confivuring theme color variables... */
		

    /* Specific style configuration */
    --spacing-x: 0.5rem;
    --spacing-y: 1rem;
    /* Continue configuring specific style variables ... */
  }`}
	</CodeFile>
	<p class="text">
		Another way is to create one css file for color theme and one css file for
		more specific styles. Then you import both of them in the root of your
		application. With this way of doing it, you need to make sure the color
		theme css file is imported before the more specific styles css file.
	</p>
	<CodeFile
		alt={'Example: Color theme css config file:'}
		path="./color-theme.css"
	>
		{`
  .el {
    /* Color theme configuration */
    --theme-color: #5f3dc5;
    --theme-bg-color: #ede6ff;
    /* Continue confivuring theme color variables... */
  }`}
	</CodeFile>
	<CodeFile
		alt={'Example: Specific style css config file:'}
		path="./style-theme.css"
	>
		{`
  .el {
    /* Specific style configuration */
    --spacing-x: 0.5rem;
    --spacing-y: 1rem;
    /* Continue configuring specific style variables ... */
  }`}
	</CodeFile>

	<!-- Using the variables -->
	<h3 class="title title-thrid" id="mutliple-themes">
		Multiple themes for one application
	</h3>
	<p class="text">
		Because the elements get their styles from the stylesheet you import, you
		could essentially generate multiple different stylesheets with different
		themes and import them in different parts of you application. Let's say you
		have an application with multiple pages and you want to separate them from
		one another by having different color themes for each page. You can generate
		one color configuration for each page and import them in the root of each
		page. This way you can have multiple themes in one application.
	</p>
</section>
<section class="section" id="component-styles">
	<h2 class="title title--secondary">Component specific style</h2>
</section>

<style>
</style>
