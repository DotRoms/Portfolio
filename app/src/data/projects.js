import Blogart from "../../../public/project/blogart.png";
import Gestinvest from "../../../public/project/gestinvest.png";
import Meteodou from "../../../public/project/meteodou.png";
import Portfolio from "../../../public/project/portfolio.png";
import TTFarguais from "../../../public/project/ttfarguais.png";
import Xpress from "../../../public/project/xpress.png";

const projects = [
  {
    name: "Gestinvest",
    role: "Product Owner, Développeur fullstack",
    picture: Gestinvest,
    alt: "Capture d'écran de l'application Gestinvest",
    technos:
      "React, Node JS, TypeScript, Express, Sqitch, Tailwildcss, Jest, PostgreSQL, Heroku",
    text: "Gestinvest est une application de gestion de portefeuille d'actifs. Elle permet de suivre l'évolution de ses investissements en temps réel. J'ai travaillé sur ce projet en tant que Product Owner. Créé pour un projet d'étude, nous étions 5 développeurs (2 front, 3 back) et avions un mois composé de 4 sprints, en comptant le sprint 0, pour le réaliser. J'ai essentiellement développé la partie back-end de l'application en Node.js et Express (API REST) qui permet de communiquer entre le front et le back.",
    text2:
      "La sécurité est un point important de notre application, c'est pourquoi nous avons choisi de mettre l'accent sur celle-ci. Nous avons développé des algorithmes de calcul de performance pour les actifs financiers détenus par les utilisateurs. Les données des actifs sont mises à jour automatiquement via un CRON que nous avons mis en place, lequel fait appel à différentes API externes pour insérer le prix des actifs à certains moments de la journée. Aujourd'hui, nous continuons d'améliorer le contenu de Gestinvest et de le maintenir en ligne par passion pour ce projet.",
    bio: "Application de gestion de portefeuille d'actifs financiers (SaaS). j'ai occupé le poste de Product Owner et de développeur fullstack sur ce projet.",
    github: "https://github.com/DotRoms/Gestinvest-back",
  },
  {
    name: "Roms - Portfolio",
    role: "Développeur fullstack",
    picture: Portfolio,
    alt: "Capture d'écran de mon portfolio",
    technos: "React, Next.JS, Tailwild CSS, HTML, Vercel",
    text: "Ce portfolio, créé par mes soins, retrace mon parcours de développeur, présente mes projets et inclut quelques éléments de ma vie professionnelle avant ma reconversion.",
    text2:
      "Ce site vitrine est d'abord réalisé avec Vue.js et TailwindCSS, puis recodé avec une technologie plus avancée : Next.js, basé sur React. Il est hébergé sur Vercel. Pour rendre le site adaptable à l'ajout éventuel d'une base de données, j'ai opté pour un traitement de données entièrement dynamique. Grâce à Next.js, le site est optimisé pour le SEO grâce à son rendu SSR.",
    bio: "Portfolio personnel, mise en avant de mes compétences et de mes projets professionels.",
    link: "https://romain-hernandez.com/",
    github: "https://github.com/DotRoms/Portfolio",

  },
  {
    name: "Tennis de Table Farguais",
    role: "Développeur fullstack",
    picture: TTFarguais,
    alt: "Capture d'écran du site web du club de tennis de table T.T. Farguais",
    technos: "Node JS, React, Next.js, Tailwind CSS, Vercel",
    text: "Après la refonte graphique du club de tennis de table T.T. Farguais que j'ai effectuée en 2024, j'ai proposé mes services de développeur web pour la mise à jour de leur site web. Le site initial fut créé dans les années 2000 et n'a pas évolué au fil du temps. J'ai donc travaillé en collaboration avec les membres du bureau sur la refonte complète du site web en me focalisant sur une meilleure performance, une meilleure expérience utilisateur et un meilleur référencement.",
    text2:
      "Le site est réalisé sous Node.js avec le framework React et la surcouche Next.js. De cette manière, le traitement des données SSR (Server-Side Rendering) permet un référencement optimal et un temps de chargement inital plus rapide. Le site est hébergé sur Vercel. J'ai pris la décision d'utiliser TailwindCSS pour la rapidité de développement et la facilité de maintenance. Le site web ne contient aucune base de données, mais j'ai réalisé le code source de manière à ce que les futures données extraites de la BDD puissent être intégrées facilement.",
    bio: "Site web du club de tennis de table T.T. Farguais. J'ai occupé le poste de développeur fullstack sur ce projet.",
    link: "https://ttfarguais.fr/",
    github: "https://github.com/DotRoms/TTFarguais",

  },
  {
    name: "Météodou",
    role: "Développeur fullstack",
    picture: Meteodou,
    alt: "Capture d'écran de l'application Météodou",
    technos: "Node JS, React, Next.js, Tailwind CSS, Vercel, WeatherAPI, Google Enable API",
    text: "Météodou est une application météo qui permet de connaître la météo de la journée. J'ai travaillé sur ce projet en tant que développeur. C'est un simple projet qui a pour but de renforcer mes compétences en développement web.",
    text2:"L'application est réalisée avec Node.js, le framework React et la surcouche Next.js. Le site est hébergé sur Vercel. J'ai pris la décision d'utiliser TailwindCSS pour la rapidité de développement et la facilité de maintenance. Les données utilisées sont extraites de Weather API, une API dédiée à la météo. De ce fait, l'application web ne contient aucune base de données.",
    bio: "Application météo. Projet a but pédagogique pour renforcer mes compétences en développement web.",
    link: "https://weather-beryl-one.vercel.app/",
    github: "https://github.com/DotRoms/Weather",

  },
  {
    name: "Blogart",
    role: "Développeur fullstack",
    picture: Blogart,
    alt: "Capture d'écran de l'application Blogart",
    technos: "Node JS, React, Next.js, Tailwind CSS, Vercel",
    text: "Blogart est un blog personnel qui me permetra de partager des articles sur des sujets touchant a l'art. Ce projet est en cours de développement.",
    text2:"L'application est réalisée avec Node.js, le framework React et la surcouche Next.js. J'ai pris la décision d'utiliser TailwindCSS pour la rapidité de développement et la facilité de maintenance. Le site web contiendra une base de données complète qui me permettra de stocker les informations relatives à chaque blog, notamment les commentaires des futurs utilisateurs.",
    bio: "Blog personnel. Projet en cours de développement.",
    github: "https://github.com/DotRoms/Gestinvest-back",

    // link: "https://meteodou.vercel.app/",
    onDeveloppement: true,
  },
  {
    name: "Xpress Convert",
    role: "Développeur fullstack",
    picture: Xpress,
    alt: "Capture d'écran de l'application Xpress Convert",
    technos: "Node JS, React, Next.js, Tailwind CSS, Vercel",
    text: "Xpress Convert est une application de conversion d'unités de mesure. Elle permet de convertir des unités de mesure de longueur, de masse, de volume, de vitesse, de temps.",
    text2:"L'application est réalisée avec Node.js, le framework React et la surcouche Next.js. C'est un projet open source qui évolura au fil du temps. Des test techniques sont en cours de développement pour garantir la qualité du code.",
    bio: "Application de conversion d'unités de mesure. Projet open source en production.",
    link: "https://xpress-convert.vercel.app/",
    github: "https://github.com/DotRoms/xpress-convert",

    onDeveloppement: true,
  },
];

export default projects;