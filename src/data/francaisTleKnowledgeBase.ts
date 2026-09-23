export interface LiteraryMovement {
  name: string;
  period: string;
  principles: string[];
  keyAuthors: string[];
  keyWorks: string[];
}

export interface LiteraryGenreStudy {
  genre: "Poésie" | "Roman" | "Théâtre";
  definitions: string;
  characteristics: string[];
  functions: {
    functionName: string;
    description: string;
    argumentsAndExamples: {
      argument: string;
      author: string;
      work: string;
      explanation: string;
      example?: string;
    }[];
  }[];
}

export const francaisTleKnowledgeBase = {
  name: "Référentiel Officiel de Français — Terminales A, C, D (BAC Côte d'Ivoire)",
  version: "2026.1",
  level: "Terminale A, C, D",
  country: "Côte d'Ivoire (MENA / DPFC)",
  methodologies: {
    dissertationLitteraire: {
      definition: "Analyse sur un sujet de réflexion littéraire ou générale mobilisant des œuvres, citations et arguments rigoureux. C'est une réponse ordonnée à une question d'ordre littéraire ou général, un travail d'organisation et de mobilisation de connaissances solides.",
      reglesCardinales: {
        regle1_pasDeConsigneDansIntro: "DANS L'INTRODUCTION : ON NE MET JAMAIS LA CONSIGNE ! L'élève isole la citation ou la pensée, mais supprime formellement la consigne d'action (ex: 'Expliquez et discutez', 'Commentez').",
        regle2_pasDeOuDansProbleme: "DANS LE PROBLÈME (PROBLÉMATISATION) : IL N'Y A JAMAIS LE MOT « OU » DEDANS ! Formuler une interrogation ouverte, profonde et unifiée (ex: 'Dans quelle mesure...', 'En quoi...').",
        regle3_paragrapheQuintuple: "CHAQUE PARAGRAPHE = Idée directrice + Explication conceptuelle + Exemple d'œuvre + Citation textuelle exacte + Analyse critique.",
        regle4_conclusionTripartite: "CONCLUSION EN 3 TEMPS = Bilan synthétique + Prise de position personnelle argumentée + Ouverture prospective."
      },
      preliminaryWork: [
        "1. Analyser le sujet : cerner les caractéristiques, les mots-clés, les éléments essentiels et la consigne.",
        "2. Rechercher les idées : mentionner au brouillon toutes les idées capables d'aider dans l'argumentation, les citations et les œuvres illustratives.",
        "3. Localiser les orientations : éviter le hors-sujet et voir le type de plan à élaborer.",
        "4. Repérer la vocation (les fonctions de l'œuvre littéraire) parmi les 9 vocations canoniques."
      ],
      functionsOfLiterature: [
        { vocation: "Vocation Lyrique", def: "Exprime les sentiments intimes, l'épanchement du cœur et la subjectivité de l'auteur (Lamartine, Hugo, Musset)." },
        { vocation: "Vocation Émotive", def: "Suscite des émotions vives : pitié, compassion, terreur sacrée, attendrissement (Racine, Hugo, catharsis aristotélicienne)." },
        { vocation: "Vocation Morale", def: "Corrige les vices humains, promeut les vertus et assainit les mœurs selon la devise « Castigat ridendo mores » (Molière, La Fontaine)." },
        { vocation: "Vocation Didactique", def: "Instruit, transmet des savoirs, éclaire l'entendement et combat l'obscurantisme (Voltaire, Diderot, Brecht)." },
        { vocation: "Vocation Ludique", def: "Procure un plaisir récréatif immédiat, amuse, divertit et libère par le rire et la fête scénique (Molière, Feydeau, Hyacinthe Kacou)." },
        { vocation: "Vocation Satirique", def: "Dénonce vigoureusement les abus politiques, les tares sociales et l'hypocrisie par l'ironie et la caricature (Dadié, Beaumarchais, Kourouma)." },
        { vocation: "Vocation Esthétique", def: "Recherche la pure beauté formelle, le culte du style, la perfection du rythme et de la langue (Gautier, Le Parnasse, Baudelaire)." },
        { vocation: "Vocation Fictive / Évasive", def: "Offre une échappatoire loin du réel, invente des univers merveilleux et fait rêver (Saint-Exupéry, Jules Verne, Camus)." },
        { vocation: "Vocation Réaliste", def: "Reflète fidèlement la réalité des rapports sociaux, peint sans fard la condition humaine (Balzac, Zola, Stendhal, Oyono)." }
      ],
      baremeCorrection: {
        OI: "Organisation des idées (6 points)",
        CS: "Compréhension du sujet (6 points)",
        LE: "Langue et expression (6 points)",
        P: "Présentation de la copie (2 points)"
      }
    },
    commentaireCompose: {
      definition: "Analyse méthodique d'un texte littéraire pour en dégager le sens profond à travers des outils d'analyse stylistique précis.",
      structure: [
        "Introduction en 3 parties : Contexte du texte (auteur, œuvre, époque), Idée générale, Annonce des 2 ou 3 centres d'intérêt.",
        "Développement : Chaque centre d'intérêt découpé en idées secondaires suivant l'ordre Idée -> Outil d'analyse (relevé + procédé) -> Effet/Interprétation -> Transition.",
        "Conclusion : Bilan des centres d'intérêt + Intérêts du texte (littéraire, didactique, philosophique, social, historique ou stylistique) + Ouverture éventuelle."
      ]
    },
    resumeEtProductionEcrite: {
      reglesResume: [
        "Suivre l'ordre des idées du texte sans commenter ni juger.",
        "Rédiger à la même personne que l'auteur (pas de 'l'auteur dit que').",
        "Respecter strictement le quota de mots imposé (marge autorisée de +/- 10%)."
      ],
      themesFrequentsProductionEcrite: [
        "L'Éducation et la scolarisation",
        "La Jeunesse, l'emploi et l'entrepreneuriat",
        "La Pauvreté et la justice sociale",
        "Les Réseaux Sociaux et les TIC",
        "L'Immigration clandestine",
        "La Paix, le civisme et la cohésion nationale",
        "La Pollution et la préservation de l'environnement",
        "La lutte contre la drogue et les MST"
      ]
    }
  },
  literaryMovements: [
    {
      name: "La Littérature Négro-Africaine (Négritude et Post-Indépendance)",
      period: "Années 1930 à nos jours",
      principles: [
        "Mouvement de la Harlem Renaissance aux USA (Langston Hughes, Claude McKay) inspirant les étudiants noirs de Paris.",
        "Fondation de la Négritude (1930s) par Aimé Césaire, Léopold Sédar Senghor et Léon-Gontran Damas pour réhabiliter la dignité, la culture et l'identité noire.",
        "Avant les indépendances : combat anticolonial, dénonciation de l'oppression et éloge des traditions africaines.",
        "Après les indépendances (années 1960+) : littérature du désenchantement, de la désillusion et critique des régimes autocratiques (Ahmadou Kourouma, Sembène Ousmane, Sony Labou Tansi)."
      ],
      keyAuthors: ["Aimé Césaire", "Léopold Sédar Senghor", "David Diop", "Ahmadou Kourouma", "Bernard Binlin Dadié", "Sembène Ousmane", "Sony Labou Tansi"],
      keyWorks: ["Cahier d'un retour au pays natal", "Éthiopiques / Chants d'ombre", "Coups de pilon", "Les Soleils des indépendances", "Climbié", "Les Bouts de bois de Dieu", "La Vie et demie"]
    },
    {
      name: "Le Classicisme",
      period: "Seconde moitié du XVIIe siècle (1661-1685, règne de Louis XIV)",
      principles: [
        "Imitation des Anciens et recherche de l'harmonie, de l'ordre et de la mesure.",
        "Respect de la bienséance (ne pas choquer le public) et de la vraisemblance.",
        "Règle des trois unités au théâtre : unité de temps (24h), unité de lieu (un seul lieu) et unité d'action (une seule intrigue). Formule de Boileau : 'Qu'en un lieu, qu'en un jour, un seul fait accompli / Tienne jusqu'à la fin tout le théâtre rempli.'"
      ],
      keyAuthors: ["Molière", "Jean Racine", "Pierre Corneille", "Nicolas Boileau", "Jean de La Fontaine"],
      keyWorks: ["Le Misanthrope / L'Avare", "Phèdre", "Le Cid", "L'Art poétique", "Fables"]
    },
    {
      name: "Le Siècle des Lumières",
      period: "XVIIIe siècle",
      principles: [
        "Triomphe de la Raison, de l'esprit critique et de la démarche scientifique pour faire reculer l'ignorance et l'obscurantisme.",
        "Diffusion des connaissances par l'Encyclopédie de Diderot et d'Alembert.",
        "Dénonciation de l'intolérance religieuse, du fanatisme, du despotisme et de l'esclavage."
      ],
      keyAuthors: ["Voltaire", "Denis Diderot", "Jean-Jacques Rousseau", "Montesquieu"],
      keyWorks: ["Candide / Zadig / L'Ingénu", "Jacques le Fataliste", "Du contrat social", "De l'Esprit des lois"]
    },
    {
      name: "Le Romantisme",
      period: "Fin XVIIIe - première moitié du XIXe siècle",
      principles: [
        "Rupture avec les règles strictes du classicisme et culte de la sensibilité et du 'moi'.",
        "Expression du mal du siècle, mélancolie, communion avec la nature consolatrice, engagement pour la liberté.",
        "Création du drame romantique alliant le sublime et le grotesque (Victor Hugo, Préface de Cromwell)."
      ],
      keyAuthors: ["Victor Hugo", "Alphonse de Lamartine", "Alfred de Musset", "Alfred de Vigny", "Chateaubriand"],
      keyWorks: ["Les Contemplations / Hernani", "Méditations poétiques", "Les Nuits", "Poèmes antiques et modernes"]
    },
    {
      name: "Le Réalisme et le Naturalisme",
      period: "XIXe siècle (1830 à 1890)",
      principles: [
        "Réalisme : Peinture fidèle, exacte et objective de la société sans embellissement, refus de l'idéalisme romantique (Stendhal, Balzac, Flaubert, Maupassant). Formule de Stendhal : 'Le roman est un miroir que l'on promène le long d'une route.'",
        "Naturalisme : Prolongement scientifique du réalisme fondé sur la méthode expérimentale (Claude Bernard) et le déterminisme du milieu et de l'hérédité (Émile Zola, Le Roman expérimental)."
      ],
      keyAuthors: ["Honoré de Balzac", "Gustave Flaubert", "Guy de Maupassant", "Émile Zola"],
      keyWorks: ["Le Père Goriot", "Madame Bovary", "Une vie / Bel-Ami", "Germinal"]
    },
    {
      name: "Le Parnasse et le Symbolisme",
      period: "Fin XIXe siècle",
      principles: [
        "Parnasse : Culte du beau pour le beau ('L'art pour l'art' de Théophile Gautier), rejet de la subjectivité romantique et travail d'orfèvre sur la forme et la rime.",
        "Symbolisme : Suggestion de l'invisible derrière le monde sensible à travers des correspondances et la musicalité des vers (Baudelaire, Verlaine, Mallarmé, Rimbaud). Formule de Mallarmé : 'Nommer un objet, c'est supprimer les trois quarts de la jouissance du poème.'"
      ],
      keyAuthors: ["Théophile Gautier", "Charles Baudelaire", "Paul Verlaine", "Stéphane Mallarmé", "Arthur Rimbaud"],
      keyWorks: ["Émaux et Camées", "Les Fleurs du mal", "Poèmes saturniens / Romances sans paroles", "Une Saison en enfer"]
    },
    {
      name: "Le Surréalisme",
      period: "Entre-deux-guerres (1924+)",
      principles: [
        "Révolte contre la logique bourgeoise responsable de la guerre, influence de la psychanalyse freudienne.",
        "Pratique de l'écriture automatique pour libérer l'inconscient sans contrôle de la raison.",
        "Création d'images poétiques insolites et révolutionnaires."
      ],
      keyAuthors: ["André Breton", "Paul Éluard", "Louis Aragon", "Guillaume Apollinaire (précurseur)"],
      keyWorks: ["Manifeste du surréalisme", "Capitale de la douleur / Liberté", "Alcools / Calligrammes"]
    }
  ],
  corpusSynthese: [
    {
      sujetNumber: 1,
      quoteOrTopic: "Roland BARTHES : « L'univers poétique est rempli de tourments qui font des poètes des gens qui n'ont jamais souri. »",
      problematique: "La poésie est-elle exclusivement l'expression de la souffrance et du mal-être ?",
      these: "La poésie exprime la douleur, le deuil et le lyrisme tragique (Hugo, Les Contemplations ; Baudelaire, Les Fleurs du mal).",
      antithese: "La poésie est aussi célébration de la joie, de la beauté du monde, de l'amour et de l'engagement (Senghor, Chants d'ombre ; Éluard, Liberté)."
    },
    {
      sujetNumber: 2,
      quoteOrTopic: "« La littérature vous jette dans la bataille, écrire c'est une autre façon de vouloir la liberté. » (Jean-Paul Sartre)",
      problematique: "La littérature a-t-elle pour vocation première d'être une arme de combat politique et social ?",
      these: "La littérature engagée combat l'injustice, l'oppression et réveille les peuples (Césaire, Cahier d'un retour au pays natal ; Oyono, Une vie de boy ; Sembène Ousmane, Les Bouts de bois de Dieu).",
      antithese: "La littérature est également art de l'évasion, création esthétique, fiction ludique et fête du langage (Baudelaire, L'Invitation au voyage ; Saint-Exupéry, Le Petit Prince)."
    },
    {
      sujetNumber: 4,
      quoteOrTopic: "Jean VILAR : « Le théâtre n'est pas un divertissement, n'est pas l'objet de luxe, mais le besoin impérieux de tout homme et de toute femme. »",
      problematique: "Le théâtre se réduit-il au divertissement comique ou constitue-t-il une nécessité vitale de prise de conscience ?",
      these: "Le théâtre est un miroir éducatif de la condition humaine dénonçant les tares et réveillant les consciences (Césaire, La Tragédie du roi Christophe ; Dadié, Monsieur Tôgôgnini ; Sophocle, Antigone).",
      antithese: "Le théâtre est aussi distraction, jeu d'acteurs, ressort comique et fête cathartique (Molière, Les Fourberies de Scapin ; Hyacinthe Kacou, On se chamaille pour un siège)."
    },
    {
      sujetNumber: 18,
      quoteOrTopic: "STENDHAL : « Le roman est un miroir que l'on promène le long d'un chemin. »",
      problematique: "Le roman a-t-il pour seule mission de refléter fidèlement la réalité de la vie sociale ?",
      these: "Le roman réaliste et naturaliste peint la vérité crue de la société et des mœurs (Balzac, Le Père Goriot ; Zola, Germinal ; Kourouma, Les Soleils des indépendances).",
      antithese: "Le roman est avant tout fiction, invention d'univers merveilleux ou fantastiques et exploration poétique du monde (Pierre Boulle, La Planète des singes ; J.K. Rowling, Harry Potter)."
    }
  ],
  literaryGenreStudy: [
    {
      genre: "Poésie",
      definitions: "Art du langage visant à exprimer ou suggérer par le rythme, l'harmonie des sons et la puissance évocatrice des images ce que la parole ordinaire ne peut formuler. Elle transcende la simple communication pour toucher la sensibilité et l'imagination.",
      characteristics: [
        "Recherche rythmique et sonore (métrique, rimes, assonances, allitérations, vers libre).",
        "Puissance des figures d'analogie (métaphores, comparaisons, symboles, correspondances baudelairiennes).",
        "Ambivalence fondamentale entre repli intime/évasion onirique et engagement citoyen/politique."
      ],
      functions: [
        {
          functionName: "Évasive, Onirique & Voyage Imaginaire",
          description: "La poésie offre une échappatoire à la banalité, à la douleur et aux pesanteurs du monde réel en ouvrant les portes du rêve, de l'exotisme et de la beauté idéale.",
          argumentsAndExamples: [
            {
              argument: "La poésie offre un refuge contre la grisaille du quotidien et l'angoisse existentielle.",
              explanation: "Face aux souffrances et à la laideur du monde réel, le poète conçoit son art comme une invitation au voyage vers un univers féerique et harmonieux où l'âme trouve enfin l'apaisement.",
              example: "Dans Les Fleurs du mal de Charles Baudelaire (notamment « L'Invitation au voyage »), le poète invente un ailleurs idéal où « tout n'est qu'ordre et beauté, / Luxe, calme et volupté » pour apaiser le Spleen.",
              author: "Charles Baudelaire",
              work: "Les Fleurs du mal"
            },
            {
              argument: "La poésie est une quête d'évasion spirituelle et d'absolu.",
              explanation: "Par la puissance du verbe et de l'imagination visionnaire, le poète s'affranchit des limites terrestres pour explorer l'inconnu, le mystère et l'infini.",
              example: "Dans Le Bateau ivre d'Arthur Rimbaud et Brise marine de Stéphane Mallarmé (« Fuir ! là-bas fuir ! »), le poète rompt ses amarres avec le monde réel pour vivre une ivresse spirituelle infinie.",
              author: "Arthur Rimbaud / Stéphane Mallarmé",
              work: "Le Bateau ivre / Brise marine"
            },
            {
              argument: "La poésie bâtit un sanctuaire d'art pur et de beauté éternelle.",
              explanation: "L'auteur refuse d'asservir son art aux contingences matérielles, morales ou politiques pour s'abriter dans un univers de perfection formelle et d'harmonie intemporelle.",
              example: "Dans Émaux et Camées de Théophile Gautier (dans le poème « L'Art »), le poète parnassien fait de la perfection de la forme un rempart inaltérable contre les vicissitudes du temps.",
              author: "Théophile Gautier",
              work: "Émaux et Camées"
            },
            {
              argument: "La poésie transporte l'esprit dans un univers de rêve et de liberté onirique.",
              explanation: "Elle libère le langage des lois de la logique ordinaire pour ouvrir grand les portes du merveilleux, de l'inconscient et de la rêverie poétique.",
              example: "Dans Capitale de la douleur de Paul Éluard, la puissance des métaphores surréalistes affranchit l'esprit de la pesanteur du quotidien pour l'élever vers un monde réinventé.",
              author: "Paul Éluard",
              work: "Capitale de la douleur"
            },
            {
              argument: "La poésie ne peut se réduire à une évasion coupable loin des souffrances humaines.",
              explanation: "Si l'écriture poétique s'enferme dans une tour d'ivoire en ignorant la tragédie de son époque, elle devient un jeu esthétique stérile et déconnecté du destin collectif.",
              example: "Dans Cahier d'un retour au pays natal d'Aimé Césaire, le poète rejette l'évasion complaisante pour faire de son verbe « la bouche des malheurs qui n'ont point de bouche ».",
              author: "Aimé Césaire",
              work: "Cahier d'un retour au pays natal"
            }
          ]
        },
        {
          functionName: "Lyrique & Confession Intime",
          description: "Expression sincère des émotions personnelles : le deuil, l'amour passionné, la nostalgie, la communion avec la nature.",
          argumentsAndExamples: [
            {
              argument: "La poésie exprime la douleur et sublime le deuil.",
              explanation: "Le poète confie au vers sa souffrance intime pour transformer une blessure personnelle en un chant universel d'espérance et de recueillement.",
              example: "Dans Les Contemplations de Victor Hugo (notamment « Demain, dès l'aube... »), l'auteur pleure la disparition tragique de sa fille Léopoldine et console son âme brisée.",
              author: "Victor Hugo",
              work: "Les Contemplations"
            },
            {
              argument: "La poésie célèbre la nostalgie du temps qui fuit et l'amour éternel.",
              explanation: "Conscient de la précarité de l'existence humaine, le poète implore la nature d'immortaliser le souvenir des instants précieux vécus avec l'être aimé.",
              example: "Dans Méditations poétiques d'Alphonse de Lamartine (« Le Lac »), le poète conjure le temps de suspendre son vol afin de préserver la trace de ses amours.",
              author: "Alphonse de Lamartine",
              work: "Méditations poétiques"
            }
          ]
        },
        {
          functionName: "Engagée, Critique & Combat pour la Liberté",
          description: "Arme de combat et d'éveil civique au service de la justice, de la liberté, de la dénonciation des tyrannies, de la corruption et des injustices sociales.",
          argumentsAndExamples: [
            {
              argument: "La poésie dénonce les injustices et les inégalités",
              explanation: "Elle met en lumière la souffrance des populations opprimées.",
              example: "Dans Les Contemplations, Hugo dénonce la misère et l'exploitation des enfants.",
              author: "Victor Hugo",
              work: "Les Contemplations"
            },
            {
              argument: "La poésie critique la corruption et les dérives du pouvoir",
              explanation: "Elle pointe les abus, la manipulation et l'égoïsme des dirigeants. Elle expose les mécanismes de la corruption.",
              example: "Les Vers de Corrupthius de Tommy David Golé Bi Gnamien : Dans ce recueil, le poète ivoirien critique avec virulence la corruption dans les institutions et la société. À travers une langue ironique et provocatrice, il révèle l'ampleur du fléau.",
              author: "Tommy David Golé Bi Gnamien",
              work: "Les Vers de Corrupthius"
            },
            {
              argument: "La poésie s’élève contre l’oppression et la dictature",
              explanation: "Elle défend la liberté et met en garde contre la violence des régimes autoritaires.",
              example: "Dans Cahier d’un retour au pays natal, Aimé Césaire dénonce la colonisation et l'aliénation des peuples noirs.",
              author: "Aimé Césaire",
              work: "Cahier d’un retour au pays natal"
            },
            {
              argument: "La poésie célèbre la diversité et dénonce les discriminations",
              explanation: "Elle rejette le racisme et l'exclusion, et défend l'égalité.",
              example: "Dans Chants d’ombre, Léopold Sédar Senghor valorise la culture africaine et critique le mépris colonial.",
              author: "Léopold Sédar Senghor",
              work: "Chants d’ombre"
            },
            {
              argument: "La poésie défend la liberté et les droits humains",
              explanation: "Elle rappelle les valeurs de justice et de dignité.",
              example: "Dans « Liberté », Paul Éluard fait de son poème un symbole universel de résistance.",
              author: "Paul Éluard",
              work: "Poésie et Vérité 1942 (Liberté)"
            },
            {
              argument: "La poésie critique la guerre et la violence",
              explanation: "Elle dénonce la destruction et la souffrance causées par les conflits, tout en appelant à la paix.",
              example: "Dans Calligrammes de Guillaume Apollinaire, certains poèmes évoquent la Première Guerre mondiale et dénoncent la violence, transformant la poésie en acte de résistance pacifique.",
              author: "Guillaume Apollinaire",
              work: "Calligrammes"
            },
            {
              argument: "La poésie donne voix aux oubliés et aux marginalisés",
              explanation: "Elle rétablit la dignité de ceux que la société ignore ou opprime.",
              example: "Dans « Afrique », David Diop rend hommage à la résistance silencieuse des Africains face à la colonisation.",
              author: "David Diop",
              work: "Coups de pilon (Afrique)"
            }
          ]
        },
        {
          functionName: "Esthétique & Beauté du Verbe",
          description: "Recherche de la perfection formelle, de la musicalité, des sonorités harmonieuses, des images fortes et du travail original de la langue poétique.",
          argumentsAndExamples: [
            {
              argument: "La poésie joue sur la musicalité des mots",
              explanation: "Le poète utilise des sons, des rythmes, des rimes, des assonances et des allitérations pour créer une mélodie poétique qui touche le lecteur.",
              example: "Dans Demain, dès l’aube de Victor Hugo, le rythme régulier et les sonorités harmonieuses des vers renforcent l’émotion et produisent une musicalité qui charme le lecteur.",
              author: "Victor Hugo",
              work: "Les Contemplations (Demain, dès l’aube)"
            },
            {
              argument: "La poésie crée des images fortes et évocatrices",
              explanation: "Elle transforme des sensations ou des idées en images visuelles, sensorielles, donnant au texte une grande richesse esthétique.",
              example: "Dans Les Fleurs du mal de Baudelaire, de nombreux poèmes comme Correspondances utilisent des métaphores et des comparaisons pour peindre des images magnifiques et profondes.",
              author: "Charles Baudelaire",
              work: "Les Fleurs du mal (Correspondances)"
            },
            {
              argument: "La poésie utilise une langue travaillée et originale",
              explanation: "Le choix des mots, des figures de style et de la structure rend la poésie unique et artistique, faisant de chaque texte une œuvre d’art.",
              example: "Dans Les Calligrammes de Guillaume Apollinaire, la forme même des poèmes crée une expérience esthétique particulière : les mots forment des dessins, mêlant art visuel et poésie, ce qui rend chaque œuvre unique.",
              author: "Guillaume Apollinaire",
              work: "Calligrammes"
            }
          ]
        },
        {
          functionName: "Évasive & Imaginaire (Fictive)",
          description: "Transport du lecteur dans des univers imaginaires et féeriques, invention de mondes oniriques et d'êtres mythiques affranchis du réel.",
          argumentsAndExamples: [
            {
              argument: "La poésie invente des mondes imaginaires",
              explanation: "Elle transporte le lecteur dans des univers qui n’existent pas, offrant une évasion loin du réel.",
              example: "Dans L’Invitation au voyage (Les Fleurs du mal), Baudelaire décrit un pays rêvé « où tout n’est qu’ordre et beauté ».",
              author: "Charles Baudelaire",
              work: "Les Fleurs du mal (L’Invitation au voyage)"
            },
            {
              argument: "La poésie invente des personnages imaginaires",
              explanation: "Elle donne vie à des êtres qui n’existent pas dans la réalité, mais qui permettent au poète d’exprimer ses rêves, ses émotions ou sa vision du monde.",
              example: "Dans « Mélusine », Apollinaire évoque une femme mythique mi-femme, mi-fée.",
              author: "Guillaume Apollinaire",
              work: "Alcools (Mélusine)"
            }
          ]
        },
        {
          functionName: "Ludique & Divertissement",
          description: "Jeux de mots, humour, ironie, inventivité formelle et plaisir distrayant pour égayer l'esprit et détendre le lecteur.",
          argumentsAndExamples: [
            {
              argument: "La poésie cherche à faire rire",
              explanation: "Le poète utilise l’humour, les jeux de mots ou des situations amusantes pour provoquer le sourire ou le rire du lecteur, rendant la lecture agréable et plaisante.",
              example: "Dans Les Fables de Jean de La Fontaine, des textes comme Le Corbeau et le Renard utilisent l’ironie et des situations drôles pour amuser.",
              author: "Jean de La Fontaine",
              work: "Fables (Le Corbeau et le Renard)"
            },
            {
              argument: "La poésie divertit et détend",
              explanation: "Même sans être comique, la poésie peut plaire et captiver par son rythme, ses sons ou ses images originales. Elle permet de se changer les idées et de passer un moment agréable.",
              example: "Les Calligrammes de Guillaume Apollinaire divertissent le lecteur grâce à leur forme visuelle inventive, où les mots dessinent des objets comme un oiseau ou une tour.",
              author: "Guillaume Apollinaire",
              work: "Calligrammes"
            }
          ]
        },
        {
          functionName: "Didactique & Morale",
          description: "Transmission de leçons de vie, réflexion sur les comportements humains, maximes éthiques et enrichissement linguistique et métaphorique.",
          argumentsAndExamples: [
            {
              argument: "La poésie transmet des leçons de vie ou une morale",
              explanation: "Le poète utilise ses vers pour instruire le lecteur sur des comportements humains, des valeurs morales ou des réflexions sur la vie.",
              example: "Dans Les Fables de Jean de La Fontaine, chaque poème raconte une histoire courte et se termine par une morale claire. Par exemple, Le Lièvre et la Tortue transmet la leçon selon laquelle la persévérance et la patience sont plus efficaces que la précipitation.",
              author: "Jean de La Fontaine",
              work: "Fables (Le Lièvre et la Tortue)"
            },
            {
              argument: "La poésie enrichit la langue et le vocabulaire",
              explanation: "Elle permet au lecteur d’acquérir des mots, des expressions et des références littéraires.",
              example: "Dans La Ronde des jours, Bernard Binlin Dadié écrit : « Les lignes de nos mains ne sont point des parallèles, des chemins de montagnes, des gerçures sur troncs d’arbres, des traces de luttes homériques ». Cette métaphore originale offre au lecteur des images poétiques inédites et enrichit sa perception du langage.",
              author: "Bernard Binlin Dadié",
              work: "La Ronde des jours"
            }
          ]
        }
      ]
    },
    {
      genre: "Roman",
      definitions: "Récit en prose d'une certaine longueur relatant les aventures fictives de personnages présentés comme réels, explorant les méandres de la psychologie et la réalité des rapports sociaux.",
      characteristics: [
        "Multiplicité des voix narratives et richesse descriptive des décors et des milieux.",
        "Évolution psychologique des protagonistes confrontés à des choix moraux ou sociopolitiques.",
        "Miroir polyphonique de l'époque oscillant entre enquête réaliste, aventure imaginaire et critique engagée."
      ],
      functions: [
        {
          functionName: "Esthétique & Beauté du Style",
          description: "Valorisation du travail de la langue, du style et de la beauté formelle pour élever le récit au rang d'œuvre d'art.",
          argumentsAndExamples: [
            {
              argument: "Le roman valorise la beauté du langage et de la création littéraire.",
              explanation: "L’auteur soigne le style, les images et la musicalité du texte pour transformer le réel en œuvre d’art.",
              example: "Dans Une si longue lettre de Mariama Bâ, le style élégant et poétique met en valeur les émotions et les situations vécues par Ramatoulaye.",
              author: "Mariama Bâ",
              work: "Une si longue lettre"
            },
            {
              argument: "Le roman crée une émotion par la forme.",
              explanation: "Par la structure du récit, le choix des mots et des descriptions, l’écrivain suscite l’admiration du lecteur pour son art d’écrire.",
              example: "Dans Le Chercheur d’Afriques d’Henri Lopes, l’écriture raffinée crée une forte beauté littéraire.",
              author: "Henri Lopes",
              work: "Le Chercheur d’Afriques"
            }
          ]
        },
        {
          functionName: "Lyrique, Émotionnelle & Confession Personnelle",
          description: "Expression des blessures intimes, libération des peines, célébration de l'amour filial ou traditionnel et partage des sentiments profonds de l'auteur.",
          argumentsAndExamples: [
            {
              argument: "Le roman traduit l’amour et l’attachement à un être ou à une culture.",
              explanation: "Certains auteurs utilisent le roman pour célébrer les liens affectifs qui les unissent à leur famille, leur peuple ou leur terre natale.",
              example: "Dans L’Enfant noir de Camara Laye, l’auteur évoque avec tendresse son enfance en Guinée et son profond attachement à sa communauté villageoise.",
              author: "Camara Laye",
              work: "L'Enfant noir"
            },
            {
              argument: "Le roman exprime les émotions intimes et les blessures de l’auteur.",
              explanation: "Le roman permet à l’écrivain de dévoiler sa douleur, son chagrin ou ses souffrances intérieures. Il devient un moyen de se libérer de ce qui pèse et de partager ses peines avec le lecteur.",
              example: "Dans La Voix de ma rue de Sylvain Kean Zoh, l’auteur raconte son enfance difficile passée dans la rue. À travers ce récit, il exprime sa tristesse et les épreuves qui l’ont marqué.",
              author: "Sylvain Kean Zoh",
              work: "La Voix de ma rue"
            },
            {
              argument: "Le roman extériorise les déchirements de la passion et la vulnérabilité du cœur.",
              explanation: "La confidence romanesque met à nu les souffrances du conflit intérieur entre la raison, le devoir moral et l'ardeur des sentiments passionnés.",
              example: "Dans La Princesse de Clèves de Madame de La Fayette, la confession de l'héroïne illustre le combat douloureux entre l'amour interdit et la vertu.",
              author: "Madame de La Fayette",
              work: "La Princesse de Clèves"
            }
          ]
        },
        {
          functionName: "Engagée, Critique & Dénonciation",
          description: "Mise en accusation des systèmes d'oppression, éveil de la conscience politique et dénonciation des abus de pouvoir.",
          argumentsAndExamples: [
            {
              argument: "Le roman exprime la colère et la révolte de l’écrivain.",
              explanation: "À travers son récit, l’auteur dénonce les injustices et les situations oppressantes qui l’indignent.",
              example: "Dans Climbié de Bernard Binlin Dadié, l’écrivain exprime son mécontentement face aux injustices et à la misère que subit son personnage, symbole d’une jeunesse africaine opprimée.",
              author: "Bernard Binlin Dadié",
              work: "Climbié"
            },
            {
              argument: "Le roman est une arme de combat pour démasquer l'oppression et l'hypocrisie du pouvoir.",
              explanation: "L'écrivain met sa plume au service des opprimés pour fustiger l'arbitraire et éveiller la conscience politique des peuples.",
              example: "Dans Une vie de boy de Ferdinand Oyono, la naïveté feinte de Toundi dévoile la cruauté, l'arbitraire et la corruption morale du pouvoir colonial.",
              author: "Ferdinand Oyono",
              work: "Une vie de boy"
            },
            {
              argument: "Le roman galvanise la solidarité des travailleurs et la conquête de leur dignité.",
              explanation: "L'auteur célèbre la force de la lutte collective et la capacité du peuple à se lever contre l'exploitation.",
              example: "Dans Les Bouts de bois de Dieu d'Ousmane Sembène, la grève historique des cheminots du Dakar-Niger illustre l'éveil révolutionnaire des travailleurs et des femmes africaines.",
              author: "Ousmane Sembène",
              work: "Les Bouts de bois de Dieu"
            }
          ]
        },
        {
          functionName: "Réaliste, Témoignage & Miroir Social",
          description: "Peinture sans complaisance des mécanismes économiques, des tares de la société et des inégalités humaines.",
          argumentsAndExamples: [
            {
              argument: "Le roman reflète la société et dépeint fidèlement la réalité quotidienne des hommes.",
              explanation: "Le romancier explore minutieusement les rouages sociaux, les conditions matérielles d'existence et les inégalités de son époque.",
              example: "Dans Germinal d’Émile Zola et Le Père Goriot d'Honoré de Balzac, les auteurs peignent avec une précision saisissante la misère ouvrière et l'âpreté des luttes sociales.",
              author: "Émile Zola / Honoré de Balzac",
              work: "Germinal / Le Père Goriot"
            },
            {
              argument: "Le roman dresse le bilan lucide des désillusions historiques et de la faillite politique.",
              explanation: "Le récit devient une chronique amère des espoirs trahis d'un peuple face à la dérive des gouvernants.",
              example: "Dans Les Soleils des indépendances d’Ahmadou Kourouma, la déchéance de Fama symbolise la détresse populaire face à la confiscation du pouvoir par les régimes autoritaires.",
              author: "Ahmadou Kourouma",
              work: "Les Soleils des indépendances"
            }
          ]
        },
        {
          functionName: "Évasive, Aventure & Imagination",
          description: "Invitation au voyage, au mystère, à la découverte d'horizons inconnus et au plaisir du suspense narratif.",
          argumentsAndExamples: [
            {
              argument: "Le roman offre une échappatoire face à la grisaille du quotidien en stimulant l'imagination.",
              explanation: "Par la virtuosité des péripéties et le suspense de l'intrigue, le livre arrache le lecteur à son cadre habituel pour l'immerger dans des exploits et des mystères captivants.",
              example: "Dans Le Comte de Monte-Cristo d'Alexandre Dumas et Vingt Mille Lieues sous les mers de Jules Verne, l'aventure et l'inconnu arrachent le lecteur à sa réalité.",
              author: "Alexandre Dumas / Jules Verne",
              work: "Le Comte de Monte-Cristo / Vingt Mille Lieues sous les mers"
            },
            {
              argument: "Le roman réenchante le monde par l'allégorie poétique et le merveilleux.",
              explanation: "La fable romanesque invite à s'affranchir du matérialisme adulte pour redécouvrir la pureté du regard et les liens du cœur.",
              example: "Dans Le Petit Prince d'Antoine de Saint-Exupéry, le voyage d'étoile en étoile invite à retrouver l'essentiel qui est invisible pour les yeux.",
              author: "Antoine de Saint-Exupéry",
              work: "Le Petit Prince"
            }
          ]
        },
        {
          functionName: "Didactique, Morale & Formation de l'Esprit",
          description: "Transmission de leçons de sagesse, éveil du sens critique et réflexion sur le destin humain.",
          argumentsAndExamples: [
            {
              argument: "Le roman instruit le lecteur en confrontant les consciences aux grands dilemmes éthiques.",
              explanation: "L'auteur utilise l'histoire comme un laboratoire éthique pour éclairer les choix de vie et guider la réflexion humaine.",
              example: "Dans L'Aventure ambiguë de Cheikh Hamidou Kane, l'itinéraire philosophique de Samba Diallo pousse le lecteur à s'interroger sur le choc entre traditions spirituelles et modernité matérialiste.",
              author: "Cheikh Hamidou Kane",
              work: "L'Aventure ambiguë"
            },
            {
              argument: "Le roman est un laboratoire moral où les conséquences des vices et illusions sont éprouvées.",
              explanation: "Sous la forme d'un conte romanesque picaresque, l'écrivain met à l'épreuve les doctrines trompeuses afin d'inciter les hommes à agir concrètement pour le bien commun.",
              example: "Dans Candide ou l'Optimisme de Voltaire, l'auteur pourfend l'illusion d'un optimisme aveugle pour inciter l'homme à cultiver son propre jardin.",
              author: "Voltaire",
              work: "Candide ou l'Optimisme"
            }
          ]
        },
        {
          functionName: "Psychologique, Introspective & Analyse du Cœur",
          description: "Exploration des méandres du sentiment amoureux, des tourments de l'âme et des désillusions existentielles.",
          argumentsAndExamples: [
            {
              argument: "Le roman sonde les illusions intérieures et le vertige des désirs inassouvis.",
              explanation: "L'autopsie du bovarysme dissèque le décalage fatal entre les rêves exaltés d'Emma et la médiocrité étouffante de sa réalité provinciale.",
              example: "Dans Madame Bovary de Gustave Flaubert, l'analyse psychologique met à nu le mal de vivre et la désillusion tragique de l'héroïne.",
              author: "Gustave Flaubert",
              work: "Madame Bovary"
            },
            {
              argument: "Le roman interroge la solitude de l'homme face à l'absurdité du monde.",
              explanation: "À travers la sincérité tranchante du personnage principal, l'auteur dénonce la comédie des faux-semblants et met à nu la vulnérabilité humaine.",
              example: "Dans L'Étranger d'Albert Camus, le détachement de Meursault confronte le lecteur à l'incompréhension sociale et à l'absurde de la condition humaine.",
              author: "Albert Camus",
              work: "L'Étranger"
            }
          ]
        }
      ]
    },
    {
      genre: "Théâtre",
      definitions: "Art du spectacle où des acteurs incarnent des personnages devant un public dans une double énonciation constante, alliant texte dramatique et représentation scénique vivante.",
      characteristics: [
        "Double énonciation (les personnages se parlent entre eux tout en s'adressant aux spectateurs).",
        "Conflit dramatique direct sans narrateur intermédiaire (tension, péripéties, dénouement).",
        "Vocation d'impact immédiat sur la foule (rire, terreur, pitié, éveil civique)."
      ],
      functions: [
        {
          functionName: "Cathartique & Tragique",
          description: "Purification des passions (terreur et pitié) en confrontant l'homme à son destin et à sa fragilité.",
          argumentsAndExamples: [
            {
              argument: "Le théâtre purifie les passions en confrontant le spectateur à la fatalité du destin.",
              explanation: "En suscitant la terreur et la pitié, la tragédie libère l'âme des excès passionnels et rappelle la primauté inaliénable de la conscience morale.",
              example: "Dans Antigone de Jean Anouilh et de Sophocle, le sacrifice héroïque de la jeune femme face aux édits de Créon purifie le spectateur de ses peurs.",
              author: "Sophocle / Jean Anouilh",
              work: "Antigone"
            }
          ]
        },
        {
          functionName: "Satirique, Didactique & Morale",
          description: "Corriger les vices des hommes en les faisant rire (« Castigat ridendo mores »).",
          argumentsAndExamples: [
            {
              argument: "Le théâtre corrige les mœurs et dénonce l'hypocrisie par le rire.",
              explanation: "En ridiculisant les imposteurs, les avares et les tartuffes sur scène, la comédie classique désarme le vice et éduque le discernement des spectateurs.",
              example: "Dans Tartuffe et L'Avare de Molière, la mise en scène des travers humains suscite un rire salvateur qui assainit les mœurs.",
              author: "Molière",
              work: "Tartuffe / L'Avare"
            },
            {
              argument: "Le théâtre dénonce l'arrogance des profiteurs et des dirigeants opportunistes.",
              explanation: "La scène devient le miroir satirique des dérives sociopolitiques pour éveiller la vigilance critique du peuple.",
              example: "Dans Monsieur Tôgôgnini de Bernard Binlin Dadié, la farce féroce dénonce l'avidité des nouveaux riches et des marchands d'illusions dans les sociétés post-coloniales.",
              author: "Bernard Binlin Dadié",
              work: "Monsieur Tôgôgnini"
            }
          ]
        },
        {
          functionName: "Politique & Éveil Historique",
          description: "Tribune vivante pour ausculter le pouvoir, la tragédie de l'indépendance et la responsabilité des dirigeants.",
          argumentsAndExamples: [
            {
              argument: "Le théâtre est une tribune politique pour éclairer les peuples sur les pièges du pouvoir.",
              explanation: "La tragédie historique met en scène les dilemmes du dirigeant afin de faire réfléchir les nations sur les exigences de la liberté et de l'unité.",
              example: "Dans La Tragédie du roi Christophe d'Aimé Césaire, l'auteur met en scène le premier roi noir d'Haïti pour faire réfléchir sur les écueils de l'autoritarisme post-indépendance.",
              author: "Aimé Césaire",
              work: "La Tragédie du roi Christophe"
            }
          ]
        }
      ]
    }
  ]
};
