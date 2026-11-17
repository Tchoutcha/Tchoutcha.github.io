---
page_id: pi_cluster
layout: page
title: 15-node Raspberry Pi 5 edge cluster
description: The K3s/Knative testbed I built and operate for my research, with energy measurement.
importance: 3
img: assets/img/cluster.jpg
category: engineering
---

<div class="row justify-content-center mb-4">
  <div class="col-md-10">
    {% include figure.liquid loading="eager" path="assets/img/cluster.jpg" class="img-fluid rounded z-depth-1" alt="15-node Raspberry Pi 5 cluster" %}
  </div>
</div>

I built and operate the edge cluster used for all my experiments:

- **15 × Raspberry Pi 5** running **K3s** and **Knative** (Kourier ingress);
- moved from a PC master + Pi workers setup to a fully edge setup (control plane on a Pi);
- control plane / data plane isolation with taints and tolerations, custom scheduler configuration;
- whole-cluster power measurement with a power meter, plus a separate x86 machine used only as a load generator;
- reinstall runbooks, so the cluster can be rebuilt in a known state between measurement campaigns.

**Stack:** Linux · K3s · Knative · Kourier · Bash · Python
