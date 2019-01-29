---
layout: docs
title: Alerts
description: Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
group: components
toc: true
---

{% include callout.html %}

<hr class="my-5">

## Overview


{% capture example %}
{% for color in site.data.theme-colors %}
<div class="alert alert-{{ color.name }}" role="alert">
  A simple {{ color.name }} alert—check it out!
</div>{% endfor %}
{% endcapture %}
{% include example.html content=example %}


## Link color

{% capture example %}
{% for color in site.data.theme-colors %}
<div class="alert alert-{{ color.name }}" role="alert">
  A simple {{ color.name }} alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>{% endfor %}
{% endcapture %}
{% include example.html content=example %}

## Additional content

{% capture example %}
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
{% endcapture %}
{% include example.html content=example %}


## Dismissing


{% capture example %}
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
{% endcapture %}
{% include example.html content=example %}
