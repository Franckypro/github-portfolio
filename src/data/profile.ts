// All visible content lives here so the site can be updated without touching components.
// One photo per project, chosen for its subject; portrait crops because the panels are taller than wide
import planningWall from "../assets/img/project-planning-wall.webp";
import shipPort from "../assets/img/project-ship-port.webp";
import geeseMigration from "../assets/img/project-geese-migration.webp";
import robotArms from "../assets/img/project-robot-arms.webp";
import conveyor from "../assets/img/project-conveyor.webp";
import calendar from "../assets/img/project-calendar.webp";
import goldMedals from "../assets/img/project-gold-medals.webp";
import padlock from "../assets/img/project-padlock.webp";
import jobTypewriter from "../assets/img/project-job-typewriter.webp";

const GITHUB = "https://github.com/Franckypro";

export const profile = {
  firstName: "Francky",
  lastName: "Fouejio",
  role: "Data Engineer et Chef de projet Data & IA",
  shortRole: "Data Engineer, Chef de projet Data & IA",
  tagline: "Je construis les flux de données et je pilote les projets IA.",
  availability: "Disponible en CDI",
  mobility: "Mobile partout en France",
  email: "ffouejio@gmail.com",
  linkedin: "https://www.linkedin.com/in/francky-joel-fouejio",
  github: "https://github.com/Franckypro",
  // CV download is switched off for now: re-add the PDF under public/cv/ and the buttons to bring it back
  cv: "cv/Francky-Fouejio-CV-Data-Engineer.pdf",
};

export const navItems = [
  { id: "accueil", label: "Accueil" },
  { id: "methode", label: "Méthode" },
  { id: "projets", label: "Projets" },
  { id: "github", label: "GitHub" },
  { id: "parcours", label: "Parcours" },
  { id: "competences", label: "Compétences" },
  { id: "formation", label: "Formation" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof navItems)[number]["id"];

// Two figures per role, all taken from real missions
export const impact = [
  { prefix: "", value: 8, suffix: "", label: "projets IA menés jusqu'en production", source: "MyAIFactory, chef de projet" },
  { prefix: "-", value: 15, suffix: " %", label: "sur les délais de livraison des projets IA", source: "MyAIFactory, chef de projet" },
  { prefix: "-", value: 97, suffix: " %", label: "d'erreurs et de doublons sur 7 projets clients", source: "MyAIFactory, data engineer" },
  { prefix: "", value: 67, suffix: "", label: "workflows d'automatisation livrés en 3 mois", source: "Mission freelance ITIA" },
];

export type Stage = {
  key: string;
  name: string;
  text: string;
  tools: string[];
};

export type Track = {
  key: "data" | "projet";
  label: string;
  stages: Stage[];
  note: string;
};

// The "Méthode" section shows one chain per role
export const tracks: Track[] = [
  {
    key: "data",
    label: "Construire les flux",
    stages: [
      {
        key: "sources",
        name: "Sources",
        text: "Je pars des applications métier, des bases relationnelles et des API.",
        tools: ["Salesforce", "Cardex", "SQL Server", "Oracle", "PostgreSQL"],
      },
      {
        key: "ingestion",
        name: "Ingestion",
        text: "Je publie et je consomme les messages Kafka, et je développe les jobs Talend Cloud.",
        tools: ["Apache Kafka", "Talend Cloud", "Java"],
      },
      {
        key: "transformation",
        name: "Transformation",
        text: "Je route, je nettoie et je contrôle les données avant de les transmettre.",
        tools: ["Kafka Streams", "Schema Registry", "Python", "SQL"],
      },
      {
        key: "orchestration",
        name: "Orchestration",
        text: "Je planifie les traitements et j'automatise les reprises sur erreur.",
        tools: ["TMC", "n8n", "Apache Airflow"],
      },
      {
        key: "exposition",
        name: "Livraison",
        text: "Je livre la donnée aux systèmes cibles et aux équipes métier.",
        tools: ["API REST", "JSON", "Power BI"],
      },
    ],
    note: "Chaque échange est sécurisé : OAuth2 pour les API, secrets récupérés dans Vault, connexions TLS et certificats vérifiés dans les truststores Java.",
  },
  {
    key: "projet",
    label: "Piloter les projets",
    stages: [
      {
        key: "cadrage",
        name: "Cadrage",
        text: "Je recueille les besoins avec les équipes métier et les dirigeants, puis je fixe le périmètre.",
        tools: ["Recueil des besoins", "Notion"],
      },
      {
        key: "specifications",
        name: "Spécifications",
        text: "Je traduis le besoin en spécifications fonctionnelles et en user stories priorisées.",
        tools: ["Spécifications", "User stories", "Jira"],
      },
      {
        key: "sprints",
        name: "Sprints",
        text: "Je pilote la livraison en Scrum, avec l'équipe technique et le client.",
        tools: ["Scrum", "Backlog", "Jira"],
      },
      {
        key: "recette",
        name: "Recette",
        text: "Je prépare les jeux de test et je valide chaque livraison avec les utilisateurs.",
        tools: ["Jeux de test", "Recette"],
      },
      {
        key: "production",
        name: "Mise en production",
        text: "Je suis le déploiement et je documente pour l'équipe qui prendra le relais.",
        tools: ["Documentation", "Suivi"],
      },
    ],
    note: "Chez MyAIFactory : 8 projets IA menés jusqu'en production avec une équipe de 3, et des délais de livraison réduits de 15 %.",
  },
];

export const projectCategories = ["Data Engineering", "Pilotage de projet", "IA et automatisation"] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  id: string;
  context: string;
  categories: ProjectCategory[];
  title: string;
  summary: string;
  points: string[];
  result?: string;
  tags: string[];
  image: string;
  imageAlt: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "pilotage-pme",
    context: "MyAIFactory, 2025 - 2026",
    categories: ["Pilotage de projet", "IA et automatisation"],
    title: "Pilotage de projets IA pour des TPE et PME",
    summary: "Cadrer, spécifier et livrer des projets IA pour des dirigeants de TPE et PME, du besoin à la mise en production.",
    points: [
      "8 projets IA menés jusqu'en production, avec une équipe technique de 3 personnes.",
      "Délais de livraison réduits de 15 % en cadrant les besoins, en rédigeant les spécifications et en pilotant les sprints.",
      "Backlog planifié et priorisé avec les clients, livrables suivis jusqu'à la mise en production.",
    ],
    tags: ["Scrum", "Jira", "Notion", "Spécifications fonctionnelles", "User stories"],
    image: planningWall,
    imageAlt: "Mur de planification couvert de post-it et de plans de projet",
  },
  {
    id: "cardex-salesforce",
    context: "MyAIFactory, 2026",
    categories: ["Data Engineering"],
    title: "Flux Cardex et Salesforce routés par navire",
    summary:
      "Acheminer les données métier des systèmes sources vers Cardex et Salesforce, avec un routage propre à chaque navire.",
    points: [
      "Routines Java Kafka dans Talend Cloud et routeur Kafka Streams basé sur le code navire.",
      "Workflows n8n qui consomment les événements et appellent les API Cardex et Salesforce (OAuth2).",
      "Schémas JSON validés par Schema Registry, files de rejet (DLQ) pour analyser chaque erreur.",
    ],
    result: "Un flux par navire, des formats contrôlés et des erreurs traçables.",
    tags: ["Talend Cloud", "Java", "Kafka Streams", "n8n", "Schema Registry", "OAuth2"],
    image: shipPort,
    imageAlt: "Porte-conteneurs à quai de nuit, sous les grues illuminées d'un port",
  },
  {
    id: "migration-crm",
    context: "Projet de fin d'études IEF2I, en cours",
    categories: ["Data Engineering", "Pilotage de projet"],
    title: "Migration des données d'un CRM",
    summary: "Un double rôle sur un cas d'entreprise : concevoir l'architecture data et piloter la migration.",
    points: [
      "Modèle de données cible et mapping de plus de 60 objets.",
      "Alimentation et synchronisation automatisées (Make, API REST, Airflow), avec contrôles qualité.",
      "Plan de migration, jeux de test et recette avec les utilisateurs : 98 % de tests réussis.",
    ],
    tags: ["Python", "Apache Airflow", "Make", "API REST", "Plan de migration", "Recette"],
    image: geeseMigration,
    imageAlt: "Vol d'oies sauvages en formation dans le ciel",
  },
  {
    id: "automatisation",
    context: "MyAIFactory et mission ITIA, 2025 - 2026",
    categories: ["IA et automatisation"],
    title: "Automatisation des processus métier",
    summary: "Des workflows qui suppriment la ressaisie et synchronisent les outils SaaS, avec des modèles d'IA générative.",
    points: [
      "67 workflows livrés en 3 mois chez ITIA, après un comparatif de plus de 30 outils.",
      "5 à 10 h de ressaisie supprimées par semaine et par processus chez les clients de MyAIFactory.",
      "Erreurs et doublons réduits de 97 % sur 7 projets grâce aux contrôles qualité des flux.",
    ],
    tags: ["n8n", "Make", "Zapier", "API REST", "IA générative", "Webhooks"],
    image: robotArms,
    imageAlt: "Bras robotisés orange sur une ligne de production automatisée",
  },
  {
    id: "pipeline-ecommerce",
    context: "Projet IEF2I, 2026",
    categories: ["Data Engineering"],
    title: "Pipeline e-commerce industrialisé",
    summary: "De la collecte au calcul des KPI, un pipeline orchestré, testé et conteneurisé.",
    points: [
      "DAG Airflow de 12 tâches : collecte, contrôles qualité, KPI et stockage dans MongoDB.",
      "3 551 lignes invalides isolées sur 166 061 par les contrôles qualité.",
      "Chaîne CI/CD Jenkins couverte par 18 tests pytest, stack Docker Compose.",
    ],
    tags: ["Python", "Apache Airflow", "Jenkins", "Docker", "MongoDB", "pytest"],
    image: conveyor,
    imageAlt: "Convoyeurs d'un entrepôt logistique de commandes en ligne",
    links: [{ label: "Voir le code", href: `${GITHUB}/airflow-ecommerce-project` }],
  },
  {
    id: "job-reco",
    context: "Projet personnel, 2025 - 2026",
    categories: ["Data Engineering", "IA et automatisation"],
    title: "Moteur de recommandation d'offres d'emploi",
    summary: "Collecter chaque jour des offres d'emploi sur plusieurs sites et les recommander selon le profil du candidat.",
    points: [
      "Pipeline d'ingestion quotidienne (Selenium, BeautifulSoup, MySQL) sur Indeed, Welcome to the Jungle et France Travail.",
      "Trois moteurs NLP en cascade (lemmatisation, bigrammes, TF-IDF) : pertinence des recommandations améliorée de 30 %.",
      "Index TF-IDF persistés et cache TTL : temps de calcul divisé par deux, 80 % de recalculs en moins.",
    ],
    result: "Le moteur est exposé par une API Flask testée avec pytest.",
    tags: ["Python", "Selenium", "MySQL", "scikit-learn", "Flask", "pytest"],
    image: jobTypewriter,
    imageAlt: "Machine à écrire avec une feuille intitulée Job application",
    links: [{ label: "Voir le code", href: `${GITHUB}/PROJET-JOB` }],
  },
  {
    id: "doctolib",
    context: "Projet de fin d'études Ascencia, 2025",
    categories: ["IA et automatisation", "Pilotage de projet"],
    title: "Prédire les annulations de rendez-vous",
    summary: "Sur un cas Doctolib, anticiper les rendez-vous non honorés et organiser l'équipe projet.",
    points: [
      "Modèle XGBoost à 0,81 d'AUC, servi par une API FastAPI.",
      "Backlog Jira d'une équipe de 3, sur 5 sprints de 2 semaines.",
      "Architectures AWS et Azure chiffrées pour 30 M d'appels par mois.",
    ],
    tags: ["Python", "XGBoost", "FastAPI", "Scrum", "Jira"],
    image: calendar,
    imageAlt: "Calendrier de rendez-vous avec des dates épinglées",
    links: [
      { label: "Voir l'étude", href: `${GITHUB}/Doctolib_NoShow` },
      { label: "Voir l'API", href: `${GITHUB}/Predict-No_show-doctolib` },
    ],
  },
  {
    id: "data-lake",
    context: "Projet IEF2I, 2025",
    categories: ["Data Engineering"],
    title: "Data Lake en architecture Medallion",
    summary: "Un socle Bronze, Silver et Gold pour passer de la donnée brute à la donnée prête pour l'analyse.",
    points: [
      "Plus de 50 millions de lignes issues de plus de 10 sources.",
      "Traitements ETL/ELT PySpark entre les couches Bronze, Silver et Gold.",
      "Données Gold agrégées, prêtes pour les tableaux de bord.",
    ],
    tags: ["PySpark", "Apache Spark", "Python", "ETL/ELT"],
    image: goldMedals,
    imageAlt: "Rangée de médailles d'or, clin d'œil aux couches Bronze, Silver et Gold",
  },
  {
    id: "talend-recovery",
    context: "MyAIFactory, 2026",
    categories: ["Data Engineering"],
    title: "Remise en service de flux Talend",
    summary: "Comprendre pourquoi des traitements échouaient, puis rétablir les échanges avec leurs dépendances.",
    points: [
      "Diagnostic : Schema Registry inaccessible après un changement d'IP, token Vault expiré, certificat manquant.",
      "Analyse des tokens et des certificats dans les truststores Java, avec l'équipe infrastructure.",
      "Relance des plans d'exécution TMC une fois les causes corrigées.",
    ],
    result: "Traitements rétablis, causes réseau, authentification et TLS mieux identifiées.",
    tags: ["Talend Cloud", "TMC", "Vault", "Schema Registry", "TLS", "Java"],
    image: padlock,
    imageAlt: "Cadenas ouvert relié à une chaîne métallique",
  },
];

export const experiences = [
  {
    company: "MyAIFactory",
    role: "Data Engineer et Chef de projet Data & IA",
    meta: "CDD, à distance",
    period: "Oct. 2025 - aujourd'hui",
    text: "Pilotage de projets IA pour des TPE et PME, intégration de flux avec Talend Cloud, Kafka et n8n, et automatisation.",
    highlight: "8 projets IA menés jusqu'en production",
  },
  {
    company: "ITIA",
    role: "Data Engineer et Chef de projet automatisation",
    meta: "Mission freelance, à distance",
    period: "Mars - mai 2025",
    text: "Choix techniques et architecture d'automatisation, centralisation de sources hétérogènes dans des pipelines testés.",
    highlight: "67 workflows livrés",
  },
  {
    company: "Crédit Foncier du Cameroun",
    role: "Data Engineer et Data Scientist",
    meta: "Stage, Yaoundé",
    period: "Févr. - juil. 2024",
    text: "Industrialisation de l'ETL de l'entrepôt du risque crédit (Python, Talend, SQL Server) et modèle de scoring.",
    highlight: "-30 % d'incohérences dans l'entrepôt",
    link: { label: "Voir l'application de scoring", href: `${GITHUB}/Credit_Risk` },
  },
  {
    company: "SAFACAM",
    role: "Data Engineer et Data Scientist",
    meta: "Stage, Douala",
    period: "Févr. - juil. 2023",
    text: "Organisation des sprints Scrum de l'équipe projet et modèle CNN de détection des maladies des plantes.",
    highlight: "-22 % de temps de développement",
  },
  {
    company: "ICCSOFT SA",
    role: "Développeur back‑end et data",
    meta: "CDD, Yaoundé",
    period: "Mai 2021 - janv. 2022",
    text: "Plateforme de réservation livrée par itérations : API Laravel et base MongoDB remodélisée.",
    highlight: "Requêtes 30 % plus rapides",
  },
];

export const skillGroups = [
  {
    key: "integration",
    title: "Intégration et streaming",
    text: "Faire circuler la donnée entre les applications, sans perte de format.",
    tools: ["Talend Cloud", "TMC", "Apache Kafka", "Kafka Streams", "Schema Registry", "API REST", "JSON"],
  },
  {
    key: "pilotage",
    title: "Gestion de projet",
    text: "Cadrer, prioriser et livrer avec les équipes métier et techniques.",
    tools: ["Scrum", "Jira", "Notion", "Cadrage", "Recueil des besoins", "Spécifications fonctionnelles", "User stories", "Recette"],
  },
  { key: "langages", title: "Langages", tools: ["Python", "Java", "SQL", "PowerShell", "Bash"] },
  { key: "bdd", title: "Bases de données", tools: ["SQL Server", "Oracle", "PostgreSQL", "MySQL", "MongoDB"] },
  { key: "orchestration", title: "Orchestration et DevOps", tools: ["Apache Airflow", "Docker", "Jenkins", "Git", "CI/CD"] },
  { key: "automatisation", title: "Automatisation", tools: ["n8n", "Make", "Zapier", "Power Automate"] },
  {
    key: "cloud",
    title: "Cloud et Big Data",
    text: "Pour les volumes qui dépassent une seule base.",
    tools: ["Apache Spark", "Databricks", "Snowflake", "Azure Data Factory", "AWS"],
  },
  { key: "securite", title: "Sécurité des échanges", tools: ["OAuth2", "Vault", "TLS", "Certificats Java"] },
  { key: "ia", title: "IA et BI", tools: ["scikit-learn", "XGBoost", "LLM", "FastAPI", "Streamlit", "Power BI"] },
];

export const degrees = [
  { period: "2025 - 2026", title: "Mastère 2 Data Engineering, IA et Big Data", school: "IEF2I, titre RNCP niveau 7" },
  { period: "2024 - 2025", title: "Mastère 2 Chef de projet Intelligence Artificielle", school: "Ascencia Business School, titre RNCP niveau 7" },
  { period: "2022 - 2023", title: "Bachelor Intelligence Artificielle et Big Data", school: "Collège de Paris" },
];

// Same list and order as LinkedIn, each linked to its public verification page
export const certifications = [
  { name: "Make Foundation", issuer: "Make", date: "Oct. 2026", href: "https://www.credly.com/badges/d9c3e14d-ad04-41fb-b930-880e7fcf31c8" },
  {
    name: "SQL and Relational Databases 101",
    issuer: "IBM, Cognitive Class",
    date: "Oct. 2025",
    href: "https://courses.cognitiveclass.ai/certificates/a8a451fb9aa44766b501ac4364e37a27",
  },
  {
    name: "Data Science Tools",
    issuer: "IBM, Cognitive Class",
    date: "Mars 2025",
    href: "https://courses.cognitiveclass.ai/certificates/53c3689bc4644c83bf2ab6e0a867ef22",
  },
  {
    name: "Python 101 for Data Science",
    issuer: "IBM, Cognitive Class",
    date: "Févr. 2025",
    href: "https://courses.cognitiveclass.ai/certificates/a1995500e94446a6a6747d239508b967",
  },
  {
    name: "AWS Educate Getting Started with Compute",
    issuer: "Amazon Web Services",
    date: "Févr. 2025",
    href: "https://www.credly.com/badges/e65d29bf-2a19-4887-a49a-d4713627ff27",
  },
  { name: "Data Fundamentals", issuer: "IBM", date: "Janv. 2025", href: "https://www.credly.com/badges/2159711b-d007-458b-bd15-992d676b8e38" },
  // DataCoach certificate: points to LinkedIn until the direct DataCoach link is added
  { name: "Power BI", issuer: "DataCoach", date: "Oct. 2024", href: "https://www.linkedin.com/in/francky-joel-fouejio/details/certifications/" },
  {
    name: "Microsoft Azure Well-Architected Framework",
    issuer: "Microsoft Learn",
    date: "Janv. 2024",
    href: "https://learn.microsoft.com/fr-fr/users/franckyjolfouejio-1369/transcript/d4m60f5l5lw4mwy",
  },
];

// Every public repository worth showing, grouped by field (descriptions taken from each README)
export type Repo = { name: string; title: string; text: string; tech: string };

export const repoGroups: { title: string; repos: Repo[] }[] = [
  {
    title: "Data Engineering et applications data",
    repos: [
      { name: "airflow-ecommerce-project", title: "Pipeline e-commerce industrialisé", text: "Collecte, qualité, KPI et stockage orchestrés par Airflow, avec CI/CD Jenkins.", tech: "Airflow, Jenkins, MongoDB, Docker" },
      { name: "PROJET-JOB", title: "Moteur de recommandation d'offres d'emploi", text: "Scraping de plusieurs job boards, ETL, base SQL et application Flask de recommandation.", tech: "Python, Selenium, MySQL, Flask" },
      { name: "Credit_Risk", title: "Scoring du risque crédit", text: "Application Streamlit de prédiction du risque crédit, avec authentification.", tech: "Python, Streamlit" },
      { name: "requ-te_DC", title: "Retours des apprenants (Digital College)", text: "Application web et base de données pour collecter et analyser les retours sur les formations.", tech: "Python, Django, MySQL" },
      { name: "Big_Data_Orange", title: "Qualité des oranges avec PySpark", text: "Analyse exploratoire et prédiction de la qualité avec un GBTRegressor.", tech: "PySpark, Spark MLlib" },
    ],
  },
  {
    title: "Machine learning et deep learning",
    repos: [
      { name: "Predict-No_show-doctolib", title: "API de prédiction des absences (Doctolib)", text: "Modèle de prédiction des rendez-vous non honorés, servi par une API et une application.", tech: "Python, XGBoost, FastAPI" },
      { name: "Doctolib_NoShow", title: "Étude Doctolib : notebook et rapport", text: "Analyse, modélisation et rapport du projet de fin d'études sur les annulations.", tech: "Python, Jupyter" },
      { name: "image_avec_Yolo8", title: "Détection d'objets avec YOLOv8", text: "Détection d'objets sur une vidéo de circulation.", tech: "YOLOv8, Python" },
      { name: "3--CNN_covid", title: "Classification d'images covid", text: "Réseau convolutif Keras qui distingue les images covid des images normales.", tech: "TensorFlow, Keras" },
      { name: "tensorflow_transferlearning", title: "Apprentissage par transfert", text: "Classification d'images en réutilisant un modèle ResNet50.", tech: "TensorFlow, ResNet50" },
      { name: "CNN_MNIST", title: "Chiffres manuscrits avec un CNN", text: "Classification des images du jeu de données MNIST.", tech: "TensorFlow, Keras" },
      { name: "DeepLearning_CHUN", title: "Prédiction du churn client", text: "Réseau de neurones qui prédit le départ des clients.", tech: "Python, Keras" },
      { name: "diabetes_oversampling_undersampling", title: "Prédiction du diabète", text: "KNN et rééchantillonnage pour des données déséquilibrées.", tech: "scikit-learn, imblearn" },
      { name: "ML_-regression_logistique", title: "Régression logistique", text: "Prédire un achat à partir de l'âge et du salaire estimé.", tech: "scikit-learn, pandas" },
    ],
  },
  {
    title: "BI et data visualisation",
    repos: [
      { name: "PowerBI_Financials_Data", title: "Tableau de bord financier", text: "Rapport Power BI construit sur des données financières.", tech: "Power BI" },
      { name: "homelessness", title: "Sans-abrisme au Royaume-Uni", text: "Visualisation Tableau réalisée pour #VizForSocialGood.", tech: "Tableau" },
    ],
  },
];

export const languages = [
  { name: "Français", level: "Langue maternelle" },
  { name: "Anglais", level: "B2, usage professionnel" },
];
