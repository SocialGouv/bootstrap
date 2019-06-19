---
layout: docs
title: Badge
description: Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
group: components
toc: true
---

{{< partial "callout-info-bootstrap-component.html" >}}

<hr class="my-5">

## Overview

{{< example >}}
{{< overview.inline >}}
{{- range $level :=  (seq 6) }}
<h{{ $level }}>Example heading <span class="badge bg-secondary">New</span></h{{ $level }}>{{- end -}}
{{< /overview.inline >}}
{{< /example >}}

<br>  

{{< example >}}
<button type="button" class="btn btn-primary">
  Notifications <span class="badge bg-secondary">4</span>
</button>
{{< /example >}}

<br>

{{< example >}}
<button type="button" class="btn btn-primary">
  Profile <span class="badge bg-secondary">9</span>
  <span class="sr-only">unread messages</span>
</button>
{{< /example >}}

## Background colors

{{< example >}}
{{< badge.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="badge bg-{{ .name }}{{ if eq .name "light" }} text-dark{{ end }}">{{ .name | title }}</span>{{- end -}}
{{< /badge.inline >}}
{{< /example >}}


## Pill badges

{{< example >}}
{{< badge.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="badge rounded-pill bg-{{ .name }}{{ if eq .name "light" }} text-dark{{ end }}">{{ .name | title }}</span>{{- end -}}
{{< /badge.inline >}}
{{< /example >}}
