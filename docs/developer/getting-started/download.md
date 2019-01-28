---
layout: docs
title: Download
description: Download Design Beta Gouv to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, yarn.
group: getting-started
redirect_from: 
  - /developer/getting-started/download/
toc: true
--- 

## Compiled CSS and JS

Download ready-to-use compiled code for **{{ site.title }} v{{ site.version }}** to easily drop into your project, which includes: 

- Compiled and minified CSS bundles (see [CSS files comparison](#))
- Compiled and minified JavaScript plugins

This doesn't include documentation, source files, or any optional JavaScript dependencies (jQuery and Popper.js).

<a href="{{ site.download.dist }}" class="btn btn-primary">Download</a>

## Source files

Compile {{ site.title }} with your own asset pipeline by downloading our source Sass, JavaScript, and documentation files. This option requires some additional tooling:

- Sass compiler (Libsass or Ruby Sass is supported) for compiling your CSS.
- [Autoprefixer](https://github.com/postcss/autoprefixer) for CSS vendor prefixing

Should you require [build tools](#), they are included for developing {{ site.title }} and its docs, but they're likely unsuitable for your own purposes.

<a href="{{ site.download.source }}" class="btn btn-primary">Download source</a>

## {{ site.title }} CDN

Skip the download with [{{ site.title }} CDN]({{ site.data.cdn.url }}) to deliver cached version of {{ site.title }}'s compiled CSS and JS to your project.

{% highlight html %}
<link
  rel="stylesheet"
  href="{{ site.data.cdn.url }}/{{ site.version }}/{{ site.data.cdn.core.css.name }}/{{ site.data.cdn.core.css.path }}"
  integrity="{{ site.data.cdn.core.css.hash }}"
  crossorigin="anonymous" />
<script
  src="{{ site.data.cdn.core.js.url }}"
  integrity="{{ site.data.cdn.core.js.hash }}"
  crossorigin="anonymous"></script>
{% endhighlight %}

If you're using our compiled JavaScript, don't forget to include CDN versions of jQuery and Popper.js before it.

{% highlight html %}
<script
  src="{{ site.data.cdn.jquery.url }}"
  integrity="{{ site.data.cdn.jquery.hash }}"
  crossorigin="anonymous"></script>
<script
  src="{{ site.data.cdn.popper.url }}"
  integrity="{{ site.data.cdn.popper.hash }}"
  crossorigin="anonymous"></script>
{% endhighlight %}

## Package managers

Pull in {{ site.title }}'s **source files** into nearly any project with some of the most popular package managers. No matter the package manager, {{ site.title }} will **require a Sass compiler and [Autoprefixer] (https://github.com/postcss/autoprefixer)** for a setup that matches our official compiled versions.

### npm

Install {{ site.title }} in your Node.js powered apps with [the npm package](https://www.npmjs.com/package/{{ site.title }}):

{%- highlight sh -%}
npm install {{ site.data.cdn.core.css.name }}
{%- endhighlight -%}

`require('{{ site.data.cdn.core.css.name }}')` will load all of {{ site.title }}'s jQuery plugins onto the jQuery object. The `{{ site.data.cdn.core.css.name }}` module itself does not export anything. You can manually load {{ site.title }}'s jQuery plugins individually by loading the `/js/*.js` files under the package's top-level directory.

{{ site.title }}'s `package.json` contains some additional metadata under the following keys:

- `sass` - path to {{ site.title }}'s main [Sass](https://sass-lang.com/) source file
- `style` - path to {{ site.title }}'s non-minified CSS that's been precompiled using the default settings (no customization)

### yarn

Install {{ site.title }} in your Node.js powered apps with [the yarn package](https://yarnpkg.com/en/package/yarn):

{%- highlight sh -%}
yarn add {{ site.data.cdn.core.css.name }}
{%- endhighlight -%}
