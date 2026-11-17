
const currentUrl = window.location.href;
const siteUrl = "https://tchoutcha.github.io";
let updatedUrl = currentUrl.replace("https://tchoutcha.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-interests",
          title: "interests",
          description: "The topics I love reading about, playing with and learning.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/interests/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research and engineering projects.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "My open-source work on GitHub.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Download the PDF version with the button on the right.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-opened-issue-2743-on-cncf-kepler-to-add-a-raspberry-pi-5-power-source-based-on-its-pmic",
          title: 'Opened issue #2743 on CNCF Kepler to add a Raspberry Pi 5 power...',
          description: "",
          section: "News",},{id: "news-released-pi-thermal-operator-v0-2-0-a-kubernetes-operator-that-protects-overheating-raspberry-pi-5-nodes",
          title: 'Released pi-thermal-operator v0.2.0, a Kubernetes operator that protects overheating Raspberry Pi 5 nodes....',
          description: "",
          section: "News",},{id: "projects-pi-thermal-operator",
          title: 'pi-thermal-operator',
          description: "A Kubernetes operator in Go that taints overheating Raspberry Pi 5 nodes, running on a real ARM cluster.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_thermal_operator/";
            },},{id: "projects-kepler-cncf-raspberry-pi-5-power-source",
          title: 'Kepler (CNCF) – Raspberry Pi 5 power source',
          description: "Open-source contribution to CNCF Kepler, the Kubernetes energy exporter, to support power measurement on Raspberry Pi 5.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_kepler/";
            },},{id: "projects-15-node-raspberry-pi-5-edge-cluster",
          title: '15-node Raspberry Pi 5 edge cluster',
          description: "The K3s/Knative testbed I built and operate for my research, with energy measurement.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_pi_cluster/";
            },},{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%74%65%6C%6C%61.%74%63%68%6F%75%74%63%68%61@%69%6E%72%69%61.%66%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Tchoutcha", "_blank");
        },
      },{
          id: 'lang-fr-fr',
          title: 'fr-fr',
          section: 'Languages',
          handler: () => {
            window.location.href = "/fr-fr" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
