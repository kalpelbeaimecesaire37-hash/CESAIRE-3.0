import { Product, FAQItem } from '../types';
import featuredCover from '../assets/images/featured_product_1789551184721.jpg';
import aiGuideCover from '../assets/images/ai_guide_cover_1789551197466.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'pack-ia-business-3',
    slug: 'systeme-business-ia-3',
    title: 'Système Business & IA 3.0 : De la Compétence aux Revenus',
    category: 'formations',
    categoryLabel: 'Formation Complète',
    shortDescription: 'La méthode concrète pas à pas pour exploiter les outils IA, automatiser ta création et lancer ton offre numérique.',
    fullDescription: 'Une formation complète et pragmatique conçue pour te donner les clés de l’économie numérique actuelle. Tu apprendras à exploiter l’intelligence artificielle non pas comme un gadget, mais comme un véritable assistant stratégique pour créer du contenu, concevoir une offre digitale irrésistible et la commercialiser efficacement avec les outils adaptés au contexte africain et international.',
    price: 25000,
    oldPrice: 50000,
    currency: 'FCFA',
    badge: 'OFFRE DU MOMENT',
    isFeatured: true,
    image: featuredCover,
    format: 'Vidéos HD téléchargeables + Fiches actions PDF + Prompts prêts à l’emploi',
    deliveryTime: 'Accès instantané par email & WhatsApp',
    deviceCompatibility: '100% compatible smartphone, tablette et ordinateur',
    durationOrPages: '6 modules vidéo + 12 fiches pratiques',
    problemSolved: 'Tu as envie de te lancer dans le numérique ou d’exploiter l’IA, mais tu te sens submergé par la masse d’informations contradictoires sans méthode claire.',
    benefits: [
      'Maîtrise opérationnelle des meilleurs outils d’IA (génération de texte, visuels, automatisations)',
      'Méthode structurée pour transformer une compétence existante en produit ou service digital vendable',
      'Configuration pas-à-pas des systèmes de paiement mobile (Mobile Money & Carte) adaptés à notre contexte',
      'Templates de pages de vente, scripts de conversion et fiches de suivi prêts à l’emploi',
      'Accès à vie aux mises à jour des modules sans abonnement récurrent'
    ],
    modules: [
      {
        title: 'Module 1 : Fondations & Détection d’opportunités numériques',
        description: 'Identifier tes compétences exploitables et valider une demande réelle sans perdre de temps.'
      },
      {
        title: 'Module 2 : L’Intelligence Artificielle au service de ta productivité',
        description: 'Maîtriser le prompt engineering pratique pour rédiger, analyser et créer 5x plus vite.'
      },
      {
        title: 'Module 3 : Création d’un produit digital ou service à forte valeur',
        description: 'Structurer un guide, un atelier ou une offre de service concrète qui répond à un besoin urgent.'
      },
      {
        title: 'Module 4 : Mise en place de ton tunnel de vente mobile-first',
        description: 'Créer une page de présentation épurée et intégrer les passerelles de paiement accessibles.'
      },
      {
        title: 'Module 5 : Stratégie de diffusion sans budget publicitaire',
        description: 'Utiliser les réseaux sociaux et WhatsApp pour attirer des prospects qualifiés organiquement.'
      },
      {
        title: 'Module 6 : Automatisation & fidélisation client',
        description: 'Délivrer automatiquement tes ressources dès réception du paiement.'
      }
    ],
    targetAudience: [
      'Entrepreneurs souhaitant moderniser leurs process grâce à l’IA',
      'Étudiants et professionnels désireux de créer une source de revenus numérique',
      'Créateurs de contenu cherchant à monétiser leur audience'
    ]
  },
  {
    id: 'guide-ia-prompts-action',
    slug: 'guide-pratique-ia-action',
    title: 'Guide Pratique de l’IA au Quotidien : Boîte à Outils & Prompts',
    category: 'ia',
    categoryLabel: 'Intelligence Artificielle',
    shortDescription: 'Plus de 80 prompts testés et méthodes simples pour rédiger, créer des visuels et gagner des heures de travail.',
    fullDescription: 'Ce guide condensé va droit au but. Pas de théories mathématiques complexes : uniquement des cas d’usage concrets, des formules de prompts prêtes à copier-coller et des workflows simples pour exécuter des tâches administratives, marketing et graphiques en quelques minutes.',
    price: 10000,
    oldPrice: 18000,
    currency: 'FCFA',
    badge: 'POPULAIRE',
    image: aiGuideCover,
    format: 'E-book PDF interactif (110 pages) + Notion template',
    deliveryTime: 'Accès instantané par téléchargement immédiat',
    deviceCompatibility: 'Lecture optimisée pour écran de smartphone et tablette',
    durationOrPages: '110 pages de fiches pratiques',
    problemSolved: 'Tu obtiens des résultats moyens ou génériques avec ChatGPT et les outils d’IA faute de savoir exactement comment formuler tes instructions.',
    benefits: [
      '80+ formules de prompts professionnelles classées par objectif métier',
      'Workflows précis pour la rédaction d’emails professionnels, d’offres et de contenus réseaux',
      'Sélection rigoureuse des meilleurs outils IA gratuits ou très accessibles',
      'Guide pas-à-pas pour générer des visuels marketing percutants sans compétences graphiques'
    ],
    modules: [
      {
        title: 'Partie 1 : L’art de la formulation efficace (Prompting)',
        description: 'La structure universelle en 4 étapes pour obtenir des réponses précises du premier coup.'
      },
      {
        title: 'Partie 2 : Bibliothèque de prompts métier',
        description: 'Marketing, rédaction commerciale, synthèse de documents et service client.'
      },
      {
        title: 'Partie 3 : Création visuelle et multimédia avec l’IA',
        description: 'Produire des miniatures, affiches et supports promotionnels facilement.'
      }
    ],
    targetAudience: [
      'Travailleurs et indépendants voulant optimiser leur temps',
      'Débutants curieux voulant maîtriser les outils IA modernes',
      'Gestionnaires de communauté et communicants'
    ]
  },
  {
    id: 'formation-vendre-whatsapp-mobile',
    slug: 'vendre-avec-whatsapp-business',
    title: 'Méthode WhatsApp Business Pro : Convertir ses Contacts en Clients',
    category: 'business',
    categoryLabel: 'Business Digital',
    shortDescription: 'Configure un canal de vente puissant directement sur ton smartphone pour présenter tes offres et encaisser.',
    fullDescription: 'En Afrique, WhatsApp est le canal de communication numéro un. Cette formation pratique te montre comment professionnaliser ton compte, installer un catalogue clair, utiliser les étiquettes de suivi client et automatiser les réponses fréquentes pour convertir des échanges simples en ventes régulières.',
    price: 15000,
    oldPrice: 25000,
    currency: 'FCFA',
    badge: 'POPULAIRE',
    image: featuredCover,
    format: 'Vidéos de démonstration sur mobile + Scripts de conversation PDF',
    deliveryTime: 'Accès immédiat dans ton espace privé',
    deviceCompatibility: 'Conçu à 100% pour smartphone Android & iPhone',
    durationOrPages: '3h15 d’ateliers pratiques en vidéo',
    problemSolved: 'Tu reçois des messages de personnes qui demandent le prix puis disparaissent sans jamais commander.',
    benefits: [
      'Configuration intégrale du catalogue et des messages d’accueil professionnels',
      'Technique d’échange pour qualifier le besoin du client et clore la vente avec respect',
      'Organisation rigoureuse avec les étiquettes pour ne plus jamais oublier un prospect',
      'Scripts de relance bienveillants et efficaces pré-rédigés'
    ],
    modules: [
      {
        title: 'Atelier 1 : L’installation irréprochable du profil d’entreprise',
        description: 'Bio, catalogue photo, liens cliquables et horaires de disponibilité.'
      },
      {
        title: 'Atelier 2 : Le parcours de conversion dans la conversation',
        description: 'Comment répondre aux demandes de renseignements sans paraître insistant.'
      },
      {
        title: 'Atelier 3 : Le suivi et la clôture de la commande',
        description: 'Faciliter l’encaissement Mobile Money et envoyer les confirmations instantanées.'
      }
    ],
    targetAudience: [
      'Commerçants et prestataires de services',
      'Vendeurs de produits physiques ou digitaux',
      'Toute personne gérant sa clientèle via WhatsApp'
    ]
  },
  {
    id: 'guide-demarrer-business-digital',
    slug: 'guide-demarrer-business-digital-afrique',
    title: 'Guide Pratique : Lancer son Activité Numérique avec 0 Capital',
    category: 'guides',
    categoryLabel: 'Guides Pratiques',
    shortDescription: 'La feuille de route simple et sans fioritures pour valider et commercialiser tes compétences en partant de zéro.',
    fullDescription: 'Un plan d’action pragmatique pour ceux qui ont des connaissances, des compétences techniques ou créatives, mais qui hésitent sur la façon de les packager pour trouver leurs premiers clients payants.',
    price: 8000,
    oldPrice: 15000,
    currency: 'FCFA',
    badge: 'NOUVEAU',
    image: aiGuideCover,
    format: 'Guide PDF interactif (75 pages) + Feuilles de travail imprimables',
    deliveryTime: 'Téléchargement direct',
    deviceCompatibility: 'Smartphone, tablette, ordinateur',
    durationOrPages: '75 pages d’instructions étape par étape',
    problemSolved: 'Le manque de capital financier ou l’absence de méthode concrète pour démarrer légitimement sur le web.',
    benefits: [
      'Cartographie des services et compétences les plus recherchés actuellement',
      'Comment créer son portfolio ou sa vitrine sans savoir coder',
      'Les erreurs courantes qui découragent 90% des débutants et comment les éviter',
      'Méthode pas-à-pas pour fixer ses tarifs au juste prix'
    ],
    modules: [
      {
        title: 'Étape 1 : Bilan de compétences monétisables',
        description: 'Faire l’inventaire de ce que tu sais déjà faire et qui a de la valeur pour autrui.'
      },
      {
        title: 'Étape 2 : Positionnement et création de l’offre',
        description: 'Définir une promesse claire, un prix et des livrables précis.'
      },
      {
        title: 'Étape 3 : Acquisition des 3 premiers clients',
        description: 'La méthode de prospection directe et éthique sans spammer.'
      }
    ],
    targetAudience: [
      'Étudiants et diplômés cherchant une autonomie financière',
      'Salariés souhaitant développer une activité complémentaire',
      'Toute personne voulant valoriser son savoir-faire'
    ]
  },
  {
    id: 'formation-creation-visuelle-mobile',
    slug: 'creation-visuelle-smartphone-pro',
    title: 'Création Visuelle Pro sur Smartphone : Canva & Outils Modernes',
    category: 'formations',
    categoryLabel: 'Formations Digitales',
    shortDescription: 'Crée des affiches, visuels de produits et bannières de qualité pro directement sur ton téléphone.',
    fullDescription: 'Pas besoin d’ordinateur surpuissant ni de logiciels compliqués pour produire des visuels vendeurs. Cette formation te montre les règles de base du design, le choix des typographies et les astuces smartphone pour réaliser des supports promotionnels qui captivent l’attention.',
    price: 12000,
    oldPrice: 20000,
    currency: 'FCFA',
    badge: 'ESSENTIEL',
    image: featuredCover,
    format: 'Vidéos pas à pas enregistrées sur écran mobile + Packs d’éléments',
    deliveryTime: 'Accès immédiat par email',
    deviceCompatibility: '100% smartphone',
    durationOrPages: '2h45 de tutoriels vidéo',
    problemSolved: 'Avoir des visuels flous, mal cadrés ou amateurs qui décrédibilisent ton travail aux yeux des clients.',
    benefits: [
      'Les 5 principes universels du design visuel commercial',
      'Création d’affiches pour WhatsApp et les réseaux sociaux en moins de 15 minutes',
      'Suppression d’arrière-plan et mise en valeur professionnelle de produits',
      'Accès à un pack de 30 templates prêts à être personnalisés'
    ],
    modules: [
      {
        title: 'Module 1 : Les bases visuelles qui inspirent confiance',
        description: 'Hiérarchie visuelle, contrastes et choix des couleurs.'
      },
      {
        title: 'Module 2 : Prise en main efficace sur mobile',
        description: 'Utilisation des meilleurs outils mobiles gratuits pour le graphisme.'
      },
      {
        title: 'Module 3 : Production rapide de templates réutilisables',
        description: 'Créer ta propre identité visuelle pour publier régulièrement.'
      }
    ],
    targetAudience: [
      'Créateurs de contenu sur les réseaux sociaux',
      'Commerçants souhaitant afficher proprement leurs articles',
      'Débutants sans expérience en graphisme'
    ]
  },
  {
    id: 'guide-productivite-outils-digitaux',
    slug: 'guide-organisation-outils-digitaux',
    title: 'Guide d’Organisation Digitale : Gérer Projets, Fichiers & Temps',
    category: 'guides',
    categoryLabel: 'Guides Pratiques',
    shortDescription: 'Le système simple pour structurer tes notes, sécuriser tes fichiers et ne plus jamais perdre une opportunité.',
    fullDescription: 'Une méthode sans superflu pour organiser son espace de travail numérique, que ce soit sur téléphone ou sur ordinateur. Structuration des dossiers, synchronisation cloud, suivi des tâches et sécurisation de tes documents importants.',
    price: 6000,
    oldPrice: 12000,
    currency: 'FCFA',
    badge: 'ESSENTIEL',
    image: aiGuideCover,
    format: 'Guide PDF interactif (55 pages)',
    deliveryTime: 'Téléchargement instantané',
    deviceCompatibility: 'Tous supports',
    durationOrPages: '55 pages pratiques',
    problemSolved: 'Le désordre numérique, les fichiers éparpillés et les tâches oubliées qui freinent ton avancement.',
    benefits: [
      'Système d’arborescence claire pour retrouver n’importe quel document en 10 secondes',
      'Guide de synchronisation et sauvegarde automatique sur cloud gratuit',
      'Modèle simple de gestion de tâches quotidiennes sur smartphone',
      'Checklist de sécurité numérique pour protéger tes comptes'
    ],
    modules: [
      {
        title: 'Chapitre 1 : Le nettoyage et la structuration du bureau numérique',
        description: 'Ranger méthodiquement pour libérer de l’espace mental et de la mémoire.'
      },
      {
        title: 'Chapitre 2 : Les outils gratuits indispensables',
        description: 'Notes, scans, clouds et gestionnaires de rappels.'
      },
      {
        title: 'Chapitre 3 : Sécurité et pérennité de tes données',
        description: 'Double authentification et sauvegardes régulières.'
      }
    ],
    targetAudience: [
      'Étudiants préparant leurs examens ou projets',
      'Professionnels et freelances',
      'Toute personne voulant gagner en clarté'
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Comment acheter une formation ou un guide ?',
    answer: 'Pour acheter une ressource, choisis le produit de ton choix sur le site et clique sur « Découvrir l’offre » ou « Commander ». Tu pourras ensuite sélectionner ton mode de règlement sécurisé (Mobile Money ou Carte bancaire) ou finaliser directement via notre canal WhatsApp d’assistance. Tu recevras tes accès dès la confirmation.',
    category: 'Achat'
  },
  {
    id: 'faq-2',
    question: 'Comment vais-je recevoir mon produit après l’achat ?',
    answer: 'Dès que ton règlement est validé, tu reçois automatiquement tes liens d’accès et de téléchargement par email, ainsi que par message direct sur WhatsApp si tu as renseigné ton numéro. Tu peux ainsi commencer immédiatement.',
    category: 'Livraison'
  },
  {
    id: 'faq-3',
    question: 'Puis-je accéder aux ressources depuis mon smartphone ?',
    answer: 'Oui, absolument. Toutes les formations, guides et ressources créés par CESAIRE 3.0 sont spécialement conçus pour être consultés, lus et appliqués depuis un simple smartphone (Android ou iPhone), tout comme sur tablette ou ordinateur.',
    category: 'Accessibilité'
  },
  {
    id: 'faq-4',
    question: 'Les formations sont-elles adaptées aux débutants ?',
    answer: 'Oui. Chaque ressource est construite avec une pédagogie progressive : nous expliquons les concepts avec des mots simples, sans jargon inutile, et nous te montrons concrètement les étapes à reproduire pas à pas.',
    category: 'Pédagogie'
  },
  {
    id: 'faq-5',
    question: 'Quels moyens de paiement sont disponibles ?',
    answer: 'Nous acceptons les principaux moyens de paiement adaptés à notre environnement : les paiements par Mobile Money (Orange Money, MTN MoMo, Wave, Moov Money selon ton pays) ainsi que les cartes bancaires (Visa et Mastercard).',
    category: 'Paiement'
  },
  {
    id: 'faq-6',
    question: 'Comment contacter le support ?',
    answer: 'Tu peux contacter notre équipe d’assistance soit par email à l’adresse officielle kalpelbeaimecesaire37@gmail.com, soit directement via notre bouton WhatsApp officiel disponible sur le site. Nous répondons à toutes les demandes sous 24h ouvrées.',
    category: 'Support'
  }
];

export const PILLARS = [
  {
    title: 'PRATIQUE',
    subtitle: 'Des ressources conçues pour être comprises et appliquées.',
    iconName: 'Wrench'
  },
  {
    title: 'SIMPLE',
    subtitle: 'Des explications accessibles, sans jargon inutile.',
    iconName: 'Sparkles'
  },
  {
    title: 'ACTION',
    subtitle: 'L’objectif est de passer de la théorie à la pratique.',
    iconName: 'Zap'
  },
  {
    title: 'DIGITAL',
    subtitle: 'Accède à tes ressources depuis tes appareils compatibles.',
    iconName: 'Smartphone'
  },
  {
    title: 'AFRIQUE FRANCOPHONE',
    subtitle: 'Des contenus pensés pour être pertinents pour notre environnement.',
    iconName: 'Globe'
  }
];

export const AUDIENCE_ITEMS = [
  {
    title: 'Tu es étudiant',
    description: 'Tu veux développer des compétences utiles pour ton avenir.',
    icon: 'GraduationCap'
  },
  {
    title: 'Tu es entrepreneur',
    description: 'Tu veux améliorer ton activité et utiliser les outils numériques.',
    icon: 'Briefcase'
  },
  {
    title: 'Tu es créateur',
    description: 'Tu veux apprendre à créer davantage avec les nouveaux outils.',
    icon: 'Palette'
  },
  {
    title: 'Tu veux te lancer',
    description: 'Tu as une idée mais tu ne sais pas encore comment commencer.',
    icon: 'Rocket'
  },
  {
    title: 'Tu veux maîtriser l’IA',
    description: 'Tu souhaites utiliser l’intelligence artificielle de manière concrète.',
    icon: 'Cpu'
  },
  {
    title: 'Tu veux apprendre',
    description: 'Tu recherches des ressources simples et pratiques.',
    icon: 'BookOpen'
  }
];
