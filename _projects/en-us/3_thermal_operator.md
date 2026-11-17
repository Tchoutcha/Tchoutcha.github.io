---
page_id: thermal_operator
layout: page
title: pi-thermal-operator
description: A Kubernetes operator in Go that taints overheating Raspberry Pi 5 nodes, running on a real ARM cluster.
importance: 1
category: engineering
github: https://github.com/Tchoutcha/pi-thermal-operator
---

**Code:** [github.com/Tchoutcha/pi-thermal-operator](https://github.com/Tchoutcha/pi-thermal-operator) · latest release v0.2.0

**Problem.** Raspberry Pi 5 nodes throttle their CPU when they get too hot, which silently hurts the latency of the pods running on them.

**Solution.** A Kubernetes operator that keeps hot nodes out of scheduling:

- a **DaemonSet agent** reads the SoC temperature (sysfs) and the firmware throttling flags on every node;
- a **controller** taints a node above 75 °C and removes the taint below 68 °C (hysteresis, to avoid flapping);
- thresholds are set through a validated **`ThermalPolicy` CRD**;
- emits **Kubernetes events** and **Prometheus metrics**;
- leader election, multi-arch images, unit + e2e tests and CI (GitHub Actions).

Deployed on my 15-node Raspberry Pi 5 K3s cluster.

**Stack:** Go · kubebuilder / controller-runtime · Kubernetes · Prometheus · GitHub Actions
