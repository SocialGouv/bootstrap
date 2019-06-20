---
layout: docs
title: Introduction
description: Get started with Social Gouv Bootstrap, the world's most popular framework for building responsive, mobile-first sites, with BootstrapCDN and a template starter page.
group: getting-started
aliases:
  - "/developer/getting-started/"
  - "/developer/"
toc: true
---

## Quick start

Looking to quickly add Social Gouv Bootstrap to your project ? Use SocialGouv Bootstrap CDN, use our Github pages as CDN. Using a package manager or need to download the source files? [Head to the downloads page]({{< ref "/developer/getting-started/download.md" >}}).

### CSS

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.

### JS

Many of our components require the use of JavaScript to function. Specifically, they require our own JavaScript plugins and [Popper.js](https://popper.js.org/). Place the following `<script>`s near the end of your pages, right before the closing `</body>` tag, to enable them. Popper.js must come first, and then our JavaScript plugins.

{{< highlight html >}}

<script
  src="{{< param "cdn.popper.url" >}}"
  integrity="{{< param "cdn.popper.hash" >}}"
  crossorigin="anonymous"></script>
<script
  src="{{< param "cdn.core.js.url" >}}"
  integrity="{{< param "cdn.core.js.hash" >}}"
  crossorigin="anonymous"></script>

{{< /highlight >}}

If you use `<script type="module">`, please refer to our [using Bootstrap as a module]({{< ref "/developer/getting-started/javascript.md#using-bootstrap-as-a-module" >}}) section.

Curious which components explicitly require our JavaScript and Popper.js? Click the show components link below. If you're at all unsure about the general page structure, keep reading for an example page template.

Our `bootstrap.bundle.js` and `bootstrap.bundle.min.js` include [Popper](https://popper.js.org/). For more information about what's included in Bootstrap, please see our [contents]({{< ref "/developer/getting-started/contents.md#precompiled-bootstrap" >}}) section.

<details>
  <summary class="text-primary mb-3">Show components requiring JavaScript</summary>
  <ul>
    <li>Alerts for dismissing</li>
    <li>Buttons for toggling states and checkbox/radio functionality</li>
    <li>Carousel for all slide behaviors, controls, and indicators</li>
    <li>Collapse for toggling visibility of content</li>
    <li>Dropdowns for displaying and positioning (also requires <a href="https://popper.js.org/">Popper.js</a>)</li>
    <li>Modals for displaying, positioning, and scroll behavior</li>
    <li>Navbar for extending our Collapse plugin to implement responsive behavior</li>
    <li>Tooltips and popovers for displaying and positioning (also requires <a href="https://popper.js.org/">Popper.js</a>)</li>
    <li>Scrollspy for scroll behavior and navigation updates</li>
  </ul>
</details>

## Starter template

Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:

{{< highlight html >}}

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="{{< param "cdn.url" >}}/{{< param "version" >}}/{{< param "cdn.baseURL" >}}/{{< param "cdn.core.css.path" >}}"

      crossorigin="anonymous"/>

    <title>Hello, world!</title>

  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- Popper.js first, then Bootstrap JS -->
    <script
      src="{{< param "cdn.popper.url" >}}"
      integrity="{{< param "cdn.popper.hash" >}}"
      crossorigin="anonymous"></script>
    <script
      src="{{< param "cdn.core.js.url" >}}"
      integrity="{{< param "cdn.core.js.hash" >}}"
      crossorigin="anonymous"></script>

  </body>
</html>
{{< /highlight >}}

That's all you need for overall page requirements. Visit the [Layout docs]({{< param "bootstrapDocBaseurl" >}}/layout/overview/) or [our official examples]({{< param "bootstrapDocBaseurl" >}}/examples/) to start laying out your site's content and components.

## Important globals

Bootstrap employs a handful of important global styles and settings that you'll need to be aware of when using it, all of which are almost exclusively geared towards the _normalization_ of cross browser styles. Let's dive in.

### HTML5 doctype

Bootstrap requires the use of the HTML5 doctype. Without it, you'll see some funky incomplete styling, but including it shouldn't cause any considerable hiccups.

{{< highlight html >}}

<!doctype html>
<html lang="en">
  ...
</html>
{{< /highlight >}}

### Responsive meta tag

Bootstrap is developed _mobile first_, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to your `<head>`.

{{< highlight html >}}

<meta name="viewport" content="width=device-width, initial-scale=1">
{{< /highlight >}}

You can see an example of this in action in the [starter template](#starter-template).

### Box-sizing

For more straightforward sizing in CSS, we switch the global `box-sizing` value from `content-box` to `border-box`. This ensures `padding` does not affect the final computed width of an element, but it can cause problems with some third party software like Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:

{{< highlight css >}}
.selector-for-some-widget {
box-sizing: content-box;
}
{{< /highlight >}}

With the above snippet, nested elements—including generated content via `::before` and `::after`—will all inherit the specified `box-sizing` for that `.selector-for-some-widget`.

Learn more about [box model and sizing at CSS Tricks](https://css-tricks.com/box-sizing/).

### Reboot

For improved cross-browser rendering, we use [Reboot]({{< param "bootstrapDocBaseurl" >}}/content/reboot/) to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.
