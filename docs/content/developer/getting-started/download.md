---
layout: docs
title: Download
description: Download Bootstrap to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, RubyGems, and more.
group: getting-started
toc: true
---

## Compiled CSS and JS

Download ready-to-use compiled code for **Bootstrap v{{< param version >}}** to easily drop into your project, which includes:

- Compiled and minified CSS bundles (see [CSS files comparison]({{< ref "/developer/getting-started/contents#css-files" >}}))
- Compiled and minified JavaScript plugins

This doesn't include documentation, source files, or any optional JavaScript dependencies like Popper.js.

<a href="{{< param repo >}}/archive/gh-pages.zip class="btn btn-primary">Download</a>

## Source files

Compile Bootstrap with your own asset pipeline by downloading our source Sass, JavaScript, and documentation files. This option requires some additional tooling:

- Sass compiler (Libsass or Ruby Sass is supported) for compiling your CSS.
- [Autoprefixer](https://github.com/postcss/autoprefixer) for CSS vendor prefixing

Should you require [build tools]({{< ref "/developer/getting-started/build-tools#tooling-setup" >}}), they are included for developing Bootstrap and its docs, but they're likely unsuitable for your own purposes.

<a href="{{< param repo >}}/archive/{{< param "version" >}}.zip" class="btn btn-primary">Download source</a>

## SocialGouvBootstrapCDN

{{< highlight html >}}
<link
  rel="stylesheet"
  href="{{< param "cdn.url" >}}/{{< param "version" >}}/{{< param "cdn.baseURL" >}}/{{< param "cdn.core.css.path" >}}"
  integrity="{{< param "cdn.core.css.integrity" >}}"
  crossorigin="anonymous"/>
<script
  src="{{< param "cdn.core.js.url" >}}"
  integrity="{{< param "cdn.core.js.hash" >}}"
  crossorigin="anonymous"></script>
{{< /highlight >}}

If you're using our compiled JavaScript, don't forget to include Popper.js, via a CDN preferably, before our JS.

{{< highlight html >}}
<script
  src="{{< param "cdn.popper.url" >}}"
  integrity="{{< param "cdn.popper.hash" >}}"
  crossorigin="anonymous"></script>
{{< /highlight >}}

## Package managers

Pull in Bootstrap's **source files** into nearly any project with some of the most popular package managers. No matter the package manager, Bootstrap will **require a Sass compiler and [Autoprefixer](https://github.com/postcss/autoprefixer)** for a setup that matches our official compiled versions.

### npm

Install Bootstrap in your Node.js powered apps with [the npm package](https://www.npmjs.com/package/bootstrap):

{{< highlight sh >}}
npm install @socialgouv/bootstrap.core
{{< /highlight >}}

`const bootstrap = require('bootstrap')` or `import bootstrap from 'bootstrap'` will load all of Bootstrap's plugins onto a `bootstrap` object.
The `bootstrap` module itself exports all of our plugins. You can manually load Bootstrap's plugins individually by loading the `/js/dist/*.js` files under the package's top-level directory.

Bootstrap's `package.json` contains some additional metadata under the following keys:

- `sass` - path to Bootstrap's main [Sass](https://sass-lang.com/) source file
- `style` - path to Bootstrap's non-minified CSS that's been precompiled using the default settings (no customization)

### yarn

Install Bootstrap in your Node.js powered apps with [the yarn package](https://yarnpkg.com/en/package/bootstrap):

{{< highlight sh >}}
yarn add @socialgouv/bootstrap.core
{{< /highlight >}}

