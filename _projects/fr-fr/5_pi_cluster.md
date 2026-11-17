---
page_id: pi_cluster
layout: page
title: Cluster edge de 15 Raspberry Pi 5
description: Le banc K3s/Knative que j'ai monté et que j'exploite pour ma recherche, avec mesure d'énergie.
importance: 3
img: assets/img/cluster.jpg
category: engineering
---

<div class="row justify-content-center mb-4">
  <div class="col-md-10">
    {% include figure.liquid loading="eager" path="assets/img/cluster.jpg" class="img-fluid rounded z-depth-1" alt="15-node Raspberry Pi 5 cluster" %}
  </div>
</div>

J'ai monté et j'exploite le cluster edge utilisé pour toutes mes expériences :

- **15 Raspberry Pi 5** sous **K3s** et **Knative** (ingress Kourier) ;
- passage d'une architecture PC maître + Pi workers à une architecture 100 % edge (plan de contrôle sur un Pi) ;
- isolation plan de contrôle / plan de données avec taints et tolérances, configuration d'un ordonnanceur personnalisé ;
- mesure de la consommation du cluster au wattmètre, et une machine x86 séparée utilisée seulement comme générateur de charge ;
- procédures de réinstallation, pour remettre le cluster dans un état connu entre deux campagnes de mesure.

**Technologies :** Linux · K3s · Knative · Kourier · Bash · Python
