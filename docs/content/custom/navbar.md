---
layout: docs
title: Navbar
description: La navbar @socialgouv/bootstrap
aliases:
  - "/navbar"
---

## navbar

Le header traditionnel avec la Marianne en SVG (⚠️ 52Ko)

{{< example >}}

<nav class="navbar sgb-navbar-marianne navbar-expand-lg navbar-light bg-light">
  <div class="sgb-marianne"></div>
  <div  class="navbar-brand">
    <a href="#">Nom du produit</a>
    <div class="navbar-baseline" href="#">Un produit au service de l'usager</div>
  </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div id="navbarSupportedContent" class="navbar-collapse collapse">
    <ul class="navbar-nav mr-auto"></ul>
    <ul class="navbar-nav">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Menu
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Connexion</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Aide</a>
        </li>
    </ul>
  </div>
</nav>
{{< /example >}}
