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

{{< highlight html >}}

<link rel="stylesheet" href="{{< param "cdn.url" >}}/{{< param "version" >}}/{{< param "cdn.baseURL" >}}/{{< param "cdn.core.css.path" >}}"  crossorigin="anonymous">
{{< /highlight >}}
