# atctheme

This is a Bootstrap-based Jekyll theme that I designed for use with [my website](https://atctwo.net).  I've published it on GitHub in case anyone else wants to use it, or is curious how it works.  The [source for my website](https://github.com/atctwo/atctwo.github.io) is also available on GitHub.

More details on how the theme was made can be found on [this post](https://atctwo.net/posts/2023/05/18/new-site.html) on my website.

# Features

## Light and Dark mode
This theme supports both a light and dark mode (implemented using Bootstrap 5's [colour modes](https://getbootstrap.com/docs/5.3/customize/color-modes/)).  There's a little theme selector at the right of the navigation bar, and you can choose between light, dark, and auto.  Auto is the default, and chooses based on the system's settings (using the [`prefers-colour-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) CSS media feature).

![Screenshot of the theme selector](extras/theme_selector.png)

When the user changes the theme, the `colour_update` event is raised on the document (with `event.detail` set to the current theme).  So you can respond to changes in theme using this snippet:
```js
document.addEventListener("colour_update", event => {
    do_something(event.detail);
});
```

## Pagination

This theme is designed to be used with a paginator (either [jekyll-paginate](https://github.com/jekyll/jekyll-paginate) or [jekyll-paginate-v2](https://github.com/sverrirs/jekyll-paginate-v2)).

To use v1, just add `paginate: <posts per page>` to your `_config.yml`.  The paginator options are detailed on [Jekyll's website](https://jekyllrb.com/docs/pagination/).

If you're using v2, there are [a lot more options](https://github.com/sverrirs/jekyll-paginate-v2/blob/master/README-GENERATOR.md) you can set.  Check out [atctwo.net's _config.yml](https://github.com/atctwo/atctwo.github.io/blob/web4/_config.yml#L73) to get an idea of what I used.

## Client-side Search
This theme includes a client-side site search!  Liquid templates are used to generate a JSON object containing all the text in the website, and this is fed to [Lunr.js](https://lunrjs.com/), which searches each page and returns a list of pages with matches.  The search page is implemented as a layout called `search`, and there is a search bar built into the navbar at the top of every page, behind a toggle button (for now this form navigates to `/search/`).

![Screenshot of the results of the search "jekyll"](extras/search_results.png)

## Comments include
There's an include file called `comments.html` where you can put a commenting engine of your choice.  It only appears at the bottom of pages which have the `enable_comments: true` front matter option.

## Front Matter options
This theme implements a number of optional custom front matter options to facilitate some interesting features.

### `edit_date`
This can be added to posts to show when the post was last edited.  It takes in a date, and results in the top of a post showing the edit date.

![Screenshot of a post showing an edit date](extras/edit_date.png)

### `custom_excerpt`
If this is set to true, it will be up to the page author to determine what gets included in `{{post.excerpt}}`.  By default the first paragraph gets included in the excerpt, but this isn't always ideal.

To use this, add `custom_excerpt: true` and the built-in `excerpt_separator: <!-- excerpt-end -->`.  Wrap whatever you want included in the excerpt with `<!-- excerpt-start -->` and `<!-- excerpt-end -->`.  For example:

```markdown
This won't be in the excerpt

<!-- excerpt-start -->
This will be included in the excerpt
<!-- excerpt-end -->

This won't be in the excerpt either
```

This is [implemented](https://github.com/atctwo/atctheme/blob/main/_includes/posts.html#L28-L33) using a Liquid snippet adapted from [an article by Chris Shelton](https://cjshelton.github.io/blog/2019/05/27/customising-jekyll-excerpt-start.html).

### `enable_related`
If this is set to true, up to three related posts will be shown at the bottom of the post.  If no related posts are found, then nothing will be shown.  This is implemented using Jekyll's `{{site.related_posts}}` variable (documentation is available [here](https://jekyllrb.com/docs/variables/#site-variables)).

![Screenshot of related posts being shown on a post](extras/related_posts.png)

## Rainbow Backgrounds
If you add the `rainbow-background` class to any element, it will be set a random pastel background colour when the page loads.  This can be used to give a pretty rainbow vibe to a page.  Internally it randomly generates an HSV colour expression, and you can specify the hue component by giving the element the `data-hue` attribute, if you want to have some control on the colour of an element.

For example, on the posts page, the Tags and Archive buttons are always random, but the Atom Feed button will always be some shade of orange (where hue=27).

![Screenshot of the Posts page, showing the coloured buttons](extras/rainbow-buttons.png)

# Credits
This theme uses a few assets provided by other people:
- Icons were provided by [Bootstrap Icons](https://icons.getbootstrap.com/)
- The header font is [Varela Round](https://fonts.google.com/specimen/Varela+Round), the body font is [Nunito](https://fonts.google.com/specimen/Nunito?query=nunito), and the monospace font is [Space Mono](https://fonts.google.com/specimen/Space+Mono)
- The search feature is implemented using [Lunr.js](https://lunrjs.com/)
- The reading time indicator was provided by [Jekyll Codex](https://jekyllcodex.org/without-plugin/reading-time-indicator/#)