---
page_id: kepler
layout: page
title: Kepler (CNCF) – source d'énergie Raspberry Pi 5
description: Contribution open source au projet CNCF Kepler, l'exporteur d'énergie pour Kubernetes, pour mesurer la consommation des Raspberry Pi 5.
importance: 2
category: engineering
---

**Projet :** [Kepler](https://github.com/sustainable-computing-io/kepler) (Kubernetes-based Efficient Power Level Exporter), projet CNCF qui estime l'énergie consommée par les pods.

**Contribution.** J'ai ouvert l'[issue #2743](https://github.com/sustainable-computing-io/kepler/issues/2743), qui propose une source de mesure d'énergie pour le Raspberry Pi 5 basée sur son PMIC (puce de gestion d'alimentation), et je me suis proposée pour l'implémenter et la tester sur mon cluster de 15 Pi 5.

**Technologies :** Go · Kubernetes · Prometheus · Raspberry Pi 5
