<script lang="ts">
	import InlineCodeBlock from '@/components/code/InlineCodeBlock.svelte';
	import CodeFile from '@/components/code/CodeFile.svelte';
	import ColorShowcase from '@/components/code/ColorShowcase.svelte';
	import PageNavigation from '@/components/navigation/PageNavigation.svelte';
	import MainContent from '@/components/content/MainContent.svelte';
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
<MainContent>
	<section slot="content" class="section" id="custom-styling">
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
	<PageNavigation
		slot="navigation"
		previous={{
			title: 'Getting started',
			path: '/element-enhancer/getting-started',
		}}
		next={{
			title: 'Global styles',
			path: '/element-enhancer/styling/global-styles',
		}}
	/>
</MainContent>

<style>
</style>
