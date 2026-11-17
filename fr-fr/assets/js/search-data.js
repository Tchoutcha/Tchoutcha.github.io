
const currentUrl = window.location.href;
const siteUrl = "https://tchoutcha.github.io";
let updatedUrl = currentUrl.replace("https://tchoutcha.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("fr-fr".length > 0) {
  updatedUrl = updatedUrl.replace("/fr-fr", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-à-propos",
    title: "À propos",
    section: "menu de navigation",
    handler: () => {
      window.location.href = "/fr-fr/";
    },
  },{id: "nav-projets",
          title: "Projets",
          description: "Projets de recherche et d’ingénierie.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr-fr/projects/";
          },
        },{id: "nav-dépôts",
          title: "Dépôts",
          description: "Mes travaux open source sur GitHub.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr-fr/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Version PDF téléchargeable avec le bouton à droite.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr-fr/cv/";
          },
        },{id: "news-ouverture-de-l-issue-2743-sur-cncf-kepler-pour-ajouter-une-source-d-énergie-raspberry-pi-5-basée-sur-son-pmic",
          title: 'Ouverture de l’issue #2743 sur CNCF Kepler pour ajouter une source d’énergie Raspberry...',
          description: "",
          section: "actualités",},{id: "news-publication-de-pi-thermal-operator-v0-2-0-un-opérateur-kubernetes-qui-protège-les-raspberry-pi-5-en-surchauffe",
          title: 'Publication de pi-thermal-operator v0.2.0, un opérateur Kubernetes qui protège les Raspberry Pi 5...',
          description: "",
          section: "actualités",},{id: "projects-pi-thermal-operator",
          title: 'pi-thermal-operator',
          description: "Un opérateur Kubernetes en Go qui marque les Raspberry Pi 5 en surchauffe, sur un vrai cluster ARM.",
          section: "projets",handler: () => {
              window.location.href = "/fr-fr/projects/3_thermal_operator/";
            },},{id: "projects-kepler-cncf-source-d-39-énergie-raspberry-pi-5",
          title: 'Kepler (CNCF) – source d&amp;#39;énergie Raspberry Pi 5',
          description: "Contribution open source au projet CNCF Kepler, l&#39;exporteur d&#39;énergie pour Kubernetes, pour mesurer la consommation des Raspberry Pi 5.",
          section: "projets",handler: () => {
              window.location.href = "/fr-fr/projects/4_kepler/";
            },},{id: "projects-cluster-edge-de-15-raspberry-pi-5",
          title: 'Cluster edge de 15 Raspberry Pi 5',
          description: "Le banc K3s/Knative que j&#39;ai monté et que j&#39;exploite pour ma recherche, avec mesure d&#39;énergie.",
          section: "projets",handler: () => {
              window.location.href = "/fr-fr/projects/5_pi_cluster/";
            },},{
        id: 'social-email',
        title: 'envoyer un courriel',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("mailto:%73%74%65%6C%6C%61.%74%63%68%6F%75%74%63%68%61@%69%6E%72%69%61.%66%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://github.com/Tchoutcha", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'langues',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'changer le thème en clair',
      description: 'changer le thème du site en clair',
      section: 'thème',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'changer le thème en sombre',
      description: 'changer le thème du site en sombre',
      section: 'thème',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'utiliser le thème par défaut du système',
      description: 'changer le thème du site selon le système par défaut',
      section: 'thème',
      handler: () => {
        setThemeSetting("system");
      },
    },];
