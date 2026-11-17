---
page_id: interests
layout: page
permalink: /interests/
title: passions
description: Les sujets que j'aime lire, tester et apprendre.
nav: true
nav_order: 1
---

<div class="row justify-content-center mb-4">
  <div class="col-md-8">
    {% include figure.liquid loading="eager" path="assets/img/interests.jpg" class="img-fluid rounded z-depth-1" alt="Stella with her Raspberry Pi cluster" %}
  </div>
</div>

### Kubernetes

Ce qui me plaît dans Kubernetes, c'est son modèle déclaratif : on décrit l'état voulu, et des contrôleurs travaillent sans arrêt pour que le cluster y ressemble.
Un conteneur qui plante est relancé, un nœud perdu est remplacé, sans que personne n'intervienne.

### Conteneurs : Docker et Podman

Un conteneur n'est pas une petite machine virtuelle : c'est un processus Linux normal, isolé grâce à des fonctions du noyau comme les namespaces et les cgroups.
J'aime Podman pour son fonctionnement sans démon et sans root, et j'aime comparer comment chaque outil fait le même travail différemment.

### Cloud et serverless

Le serverless permet de lancer du code sans gérer de serveur : la plateforme le démarre à la demande, l'adapte à la charge et l'arrête quand personne ne s'en sert.
Je suis curieuse de tout ce qui se cache derrière cette simplicité.

### Edge computing

Faire tourner les services près de l'endroit où les données sont produites, sur de petits équipements peu chers, au lieu de tout envoyer vers un data center lointain.

### Énergie

Les data centers consomment de plus en plus d'électricité. Je tiens à ce que l'infrastructure fasse le même travail avec moins d'énergie.

### Ce que j'apprends en ce moment

- Certifications Kubernetes : **CKA** et **CKAD**
- Observabilité : **Prometheus, Grafana, Loki, OpenTelemetry**
