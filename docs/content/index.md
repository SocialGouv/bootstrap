---
layout: docs
title: SocialGouv bootstrap introduction
description: Démarres rapidement une interface web avec le kit @socialgouv/bootstrap - responsive, mobile-first et cross-frameworks, il contient tout le bootstrap original + des ajouts de notre communauté.
---

## Démarrage

Le kit fournit un fichier CSS que tu peux intégrer à tes projets de différentes manières.

La <a href="https://getbootstrap.com/docs/">documentation générale est fournie par bootstrap</a>, nous documentons uniquement nos composants additionnels.

#### CSS

Copies/colles la balise `<link>` suivante dans la balise `<head>` de ta page avant toute autre feuille CSS.

{{< highlight html >}}

<link
  rel="stylesheet"
  href="{{< param "cdn.url" >}}/{{< param "version" >}}/{{< param "cdn.baseURL" >}}/{{< param "cdn.core.css.path" >}}"
  integrity="{{< param "cdn.core.css.integrity" >}}"
  crossorigin="anonymous"/>
{{< /highlight >}}

ou avec ton bundler JavaScript favori :

{{< highlight js >}}
import "@socialgouv/bootstrap"
{{< /highlight >}}

#### JS

Le Javascript <a href="{{- $.Site.Params.bootstrapDocBaseurl -}}/getting-started/javascript">de bootstrap</a> peut être intégré mais nous conseillons d'utliser les librairies de référence pour chaque environnement :

- react : <a href="https://reactstrap.github.io">reactstrap</a>
- angular <a href="https://ng-bootstrap.github.io">ng-bootstrap</a>
- vue : <a href="https://bootstrap-vue.js.org">bootstrap-vue</a>

#### Que contient le KIT ?

- une version de boostrap customisée avec des couleurs, fontes standardisées
- des exemples de composants standards (ex: header, footer, layouts)
