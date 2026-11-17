---
page_id: thermal_operator
layout: page
title: pi-thermal-operator
description: Un opérateur Kubernetes en Go qui marque les Raspberry Pi 5 en surchauffe, sur un vrai cluster ARM.
importance: 1
category: engineering
github: https://github.com/Tchoutcha/pi-thermal-operator
---

**Code :** [github.com/Tchoutcha/pi-thermal-operator](https://github.com/Tchoutcha/pi-thermal-operator) · dernière version v0.2.0

**Problème.** Les Raspberry Pi 5 brident leur CPU quand ils chauffent trop, ce qui dégrade sans bruit la latence des pods qui tournent dessus.

**Solution.** Un opérateur Kubernetes qui écarte les nœuds trop chauds de l'ordonnancement :

- un **agent DaemonSet** lit la température du SoC (sysfs) et les indicateurs de bridage du firmware sur chaque nœud ;
- un **contrôleur** pose un taint au-dessus de 75 °C et le retire sous 68 °C (hystérésis, pour éviter les va-et-vient) ;
- les seuils se règlent via une **CRD `ThermalPolicy`** validée ;
- émission d'**événements Kubernetes** et de **métriques Prometheus** ;
- élection de leader, images multi-architecture, tests unitaires + e2e et CI (GitHub Actions).

Déployé sur mon cluster K3s de 15 Raspberry Pi 5.

**Technologies :** Go · kubebuilder / controller-runtime · Kubernetes · Prometheus · GitHub Actions
