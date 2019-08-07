---
layout: docs
title: Couleurs
description: Les couleurs de référence utilisées dans @socialgouv/bootstrap
---

## Bootstrap theme

Couleurs utilisées

<ul class="list-unstyled row">
  {{< themecolors.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <li class="col-12 col-sm-6 col-xl-4 media my-4">
    <svg class="mr-3" width="64" height="64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Square color {{ .hex }}"><title>Square color {{ .name }}</title><rect fill="{{ .hex }}" width="100%" height="100%"></rect></svg>
    <div class="media-body">
      <h5 class="mt-0 mb-1">{{ .name | humanize }}</h5>
      {{ .hex }}<br/>
      <code>${{ .name }}</code>
    </div> 
  </li>{{- end -}}
  {{</ themecolors.inline >}}
</ul>

## Grays theme

Niveaux de gris utilisés

<ul class="list-unstyled row">
  {{< grays.inline >}}
  {{- range (index $.Site.Data "grays") }}
  <li class="col-12 col-sm-6 col-xl-4 media my-4">
    <svg class="mr-3" width="64" height="64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Square color {{ .hex }}"><title>Square color {{ .name }}</title><rect fill="{{ .hex }}" width="100%" height="100%"></rect></svg>
    <div class="media-body">
      <h5 class="mt-0 mb-1">{{ .name | humanize }}</h5>
      {{ .hex }}<br/>
      <code>${{ .name }}</code>
    </div> 
  </li>{{- end -}}
  {{</ grays.inline >}}
</ul>
