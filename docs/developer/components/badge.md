---
layout: docs
title: Badge
description: Documentation and examples for badges, our small count and labeling component.
group: components
toc: true
---

{% include callout.html %}

<hr class="my-5">

## Overview

{% capture example %}
{%- for level in (1..6) -%}
<h{{ level }}>Example heading <span class="badge badge-secondary">New</span></h{{ level }}>
{% endfor %}
{% endcapture %}
{% include example.html content=example %}

## In buttons 

{% capture example %}
<button type="button" class="btn btn-primary">
  Profile <span class="badge badge-light">9</span>
  <span class="sr-only">unread messages</span>
</button>
{% endcapture %}
{% include example.html content=example %}


## Contextual variations

{% capture example %}
{% for color in site.data.theme-colors %}
<span class="badge badge-{{ color.name }}">{{ color.name | capitalize }}</span>{% endfor %}
{% endcapture %}
{% include example.html content=example %}


## Pill badges

{% capture example %}
{% for color in site.data.theme-colors %}
<span class="badge badge-pill badge-{{ color.name }}">{{ color.name | capitalize }}</span>{% endfor %}
{% endcapture %}
{% include example.html content=example %}

## Links

{% capture example %}
{% for color in site.data.theme-colors %}
<a href="#" class="badge badge-{{ color.name }}">{{ color.name | capitalize }}</a>{% endfor %}
{% endcapture %}
{% include example.html content=example %}
