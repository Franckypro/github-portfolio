// All visible content lives here so the site can be updated without touching components.
// One photo per project, chosen for its subject; portrait crops because the panels are taller than wide
import shipPort from "../assets/img/project-ship-port.webp";
import conveyor from "../assets/img/project-conveyor.webp";
import padlock from "../assets/img/project-padlock.webp";
import robotArms from "../assets/img/project-robot-arms.webp";
import goldMedals from "../assets/img/project-gold-medals.webp";
import calendar from "../assets/img/project-calendar.webp";

export const profile = {
  firstName: "Francky",
  lastName: "Fouejio",
  role: "Data Engineer",
  tagline: "Je fiabilise les flux de données entre applications avec Talend, Kafka, les API et l'automatisation.",
  availability: "Disponible en CDI · novembre 2026",
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
  { id: "parcours", label: "Parcours" },
  { id: "competences", label: "Compétences" },
  { id: "formation", label: "Formation" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof navItems)[number]["id"];

export const impact = [
  { prefix: "-", value: 97, suffix: " %", label: "d'erreurs et de doublons sur 7 projets clients", source: "MyAIFactory" },
  { prefix: "", value: 67, suffix: "", label: "workflows d'automatisation livrés en 3 mois", source: "Mission freelance ITIA" },
  { prefix: "", value: 5, suffix: " M", label: "d'enregistrements centralisés depuis 11 sources", source: "Mission freelance ITIA" },
  { prefix: "", value: 50, suffix: " M+", label: "de lignes traitées dans un Data Lake Medallion", source: "Projet IEF2I" },
];

export type PipelineStage = {
  key: string;
  name: string;
  text: string;
  tools: string[];
};

export const pipeline: PipelineStage[] = [
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
];

export type Project = {
  id: string;
  context: string;
  title: string;
  summary: string;
  points: string[];
  result?: string;
  tags: string[];
  image: string;
  imageAlt: string;
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    id: "cardex-salesforce",
    context: "MyAIFactory, 2026",
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
    id: "pipeline-ecommerce",
    context: "Projet IEF2I, 2026",
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
    link: { label: "Voir le code", href: "https://github.com/Franckypro/airflow-ecommerce-project" },
  },
  {
    id: "talend-recovery",
    context: "MyAIFactory, 2026",
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
  {
    id: "automatisation",
    context: "MyAIFactory, 2025 - 2026",
    title: "Automatisation des processus de PME",
    summary: "Des workflows qui suppriment la ressaisie et synchronisent les outils SaaS des clients.",
    points: [
      "5 à 10 h de ressaisie supprimées par semaine et par processus avec n8n, Make et Zapier.",
      "Erreurs et doublons réduits de 97 % sur 7 projets grâce aux contrôles qualité des flux.",
      "Applications et bases synchronisées en 5 minutes par une architecture événementielle.",
    ],
    tags: ["n8n", "Make", "Zapier", "API REST", "Webhooks", "Python"],
    image: robotArms,
    imageAlt: "Bras robotisés orange sur une ligne de production automatisée",
  },
  {
    id: "data-lake",
    context: "Projet IEF2I, 2025",
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
    id: "doctolib",
    context: "Projet Ascencia, 2025",
    title: "Prédire les annulations de rendez-vous",
    summary: "Projet de fin d'études sur un cas Doctolib : anticiper les rendez-vous non honorés.",
    points: [
      "Modèle XGBoost à 0,81 d'AUC, servi par une API FastAPI.",
      "Backlog Jira d'une équipe de 3, sur 5 sprints de 2 semaines.",
      "Architectures AWS et Azure chiffrées pour 30 M d'appels par mois.",
    ],
    tags: ["Python", "XGBoost", "FastAPI", "Scrum", "Jira"],
    image: calendar,
    imageAlt: "Calendrier de rendez-vous avec des dates épinglées",
    link: { label: "Voir le code", href: "https://github.com/Franckypro/Doctolib_NoShow" },
  },
];

export const experiences = [
  {
    company: "MyAIFactory",
    role: "Data Engineer et Chef de projet Data & IA",
    meta: "CDD, à distance",
    period: "Oct. 2025 - aujourd'hui",
    text: "Intégration de flux avec Talend Cloud, Kafka et n8n, automatisation et pilotage de projets IA pour des TPE et PME.",
    highlight: "8 projets IA menés jusqu'en production",
  },
  {
    company: "ITIA",
    role: "Data Engineer et Chef de projet automatisation",
    meta: "Mission freelance, à distance",
    period: "Mars - mai 2025",
    text: "Centralisation de sources hétérogènes dans des pipelines testés et automatisation de processus métier.",
    highlight: "67 workflows livrés",
  },
  {
    company: "Crédit Foncier du Cameroun",
    role: "Data Engineer et Data Scientist",
    meta: "Stage, Yaoundé",
    period: "Févr. - juil. 2024",
    text: "Industrialisation de l'ETL de l'entrepôt du risque crédit (Python, Talend, SQL Server) et modèle de scoring.",
    highlight: "-30 % d'incohérences dans l'entrepôt",
  },
  {
    company: "SAFACAM",
    role: "Data Engineer et Data Scientist",
    meta: "Stage, Douala",
    period: "Févr. - juil. 2023",
    text: "Collecte de plus de 20 000 images et modèle CNN de détection des maladies des plantes, servi par Streamlit.",
    highlight: "92,3 % de précision",
  },
  {
    company: "ICCSOFT SA",
    role: "Développeur back‑end et data",
    meta: "CDD, Yaoundé",
    period: "Mai 2021 - janv. 2022",
    text: "Plateforme de réservation : API Laravel et base MongoDB remodélisée.",
    highlight: "Requêtes 30 % plus rapides",
  },
];

export const skillGroups = [
  {
    key: "integration",
    title: "Intégration et streaming",
    text: "Le cœur de mon métier : faire circuler la donnée entre les applications.",
    tools: ["Talend Cloud", "TMC", "Apache Kafka", "Kafka Streams", "Schema Registry", "API REST", "JSON"],
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
  { key: "ia", title: "IA, BI et méthodes", tools: ["scikit-learn", "XGBoost", "FastAPI", "Power BI", "Scrum", "Jira"] },
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

export const languages = [
  { name: "Français", level: "Langue maternelle" },
  { name: "Anglais", level: "B2, usage professionnel" },
];
