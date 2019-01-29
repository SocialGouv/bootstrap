---
layout: docs
title: Typography
description: Documentation and examples for Design Beta Gouv typography, including global settings, headings, body text, lists, and more.
group: content
toc: true
---

{% include callout.html %}

<hr class="my-5">

## Overview

We use [Source Sans Pro](https://github.com/adobe-fonts/source-sans-pro) for body text and [Evolventa](https://github.com/evolventa/evolventa) for heading.

{% capture example %}
<h3>
  Titre chili sin carne<br>
  <small class="text-muted">Tagline libérer les données sans effort et sur data.gouv.fr</small>
</h3>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
{% endcapture %}
{% include example.html content=example %}

## Headings

{% capture example %}
{%- for level in (1..6) -%}
<h{{ level }}><code>&lt;h{{ level }}&gt;</code> Design Beta Gouv heading</h{{ level }}>
{% endfor %}
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
{%- for level in (1..6) -%}

<p class="h{{ level }}"><code>.h{{ level }}</code> Design Beta Gouv heading</p>
{% endfor %}
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<h3>
  Fancy display heading<br>
  <small class="text-muted">With faded secondary text</small>
</h3>
{% endcapture %}
{% include example.html content=example %}

## Display headings

{% capture example %}
{%- for level in (1..4) -%}
<h1 class="display-{{ level }}">Display {{ level }}</h1>
{% endfor %}
{% endcapture %}
{% include example.html content=example %}

## Lead

{% capture example %}
<p class="lead">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>
{% endcapture %}
{% include example.html content=example %}

## Inline text elements

{% capture example %}
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p>You can use the mark tag to <span class="mark">highlight</span> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the doc.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p class="small">his line of text is meant to be treated as fine print.</p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
{% endcapture %}
{% include example.html content=example %}

## Text utilities

Change text alignment, transform, style, weight, and color with our [text utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/text/) and [color utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/colors/).

## Abbreviations

{% capture example %}
<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
{% endcapture %}
{% include example.html content=example %}

## Blockquotes

{% capture example %}
<blockquote class="blockquote">
  <p class="mb-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Integer posuere erat a ante.
  </p>
</blockquote>
{% endcapture %}
{% include example.html content=example %}

#### Naming a source

{% capture example %}
<blockquote class="blockquote">
  <p class="mb-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Integer posuere erat a ante.
  </p>
  <footer class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </footer>
</blockquote>
{% endcapture %}
{% include example.html content=example %}

#### Alignment

{% capture example %}
<blockquote class="blockquote text-center">
  <p class="mb-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Integer posuere erat a ante.
  </p>
  <footer class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </footer>
</blockquote>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<blockquote class="blockquote text-right">
  <p class="mb-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Integer posuere erat a ante.
  </p>
  <footer class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </footer>
</blockquote>
{% endcapture %}
{% include example.html content=example %}

## Lists

#### Unstyled

{% capture example %}
<ul class="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

#### Inline

{% capture example %}
<ul class="list-inline">
  <li class="list-inline-item">Lorem ipsum</li>
  <li class="list-inline-item">Phasellus iaculis</li>
  <li class="list-inline-item">Nulla volutpat</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

#### Description list alignment

{% capture example %}
<dl class="row">
  <dt class="col-sm-3">Description lists</dt>
  <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

  <dt class="col-sm-3">Euismod</dt>
  <dd class="col-sm-9">
    <p>Etiam porta sem malesuada magna mollis euismod.</p>
    <p>Donec id elit non mi porta gravida at eget metus.</p>
  </dd>

  <dt class="col-sm-3">Malesuada porta</dt>
  <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

  <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
  <dd class="col-sm-9">
    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, 
    ut fermentum massa justo sit amet risus.
  </dd>

  <dt class="col-sm-3">Nesting</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Nested definition list</dt>
      <dd class="col-sm-8">
        Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.
      </dd>
      <dt class="col-sm-4">Nested definition list</dt>
      <dd class="col-sm-8">
        Etiam porta sem malesuada magna mollis euismod.
      </dd>
    </dl>
  </dd>
</dl>
{% endcapture %}
{% include example.html content=example %}
