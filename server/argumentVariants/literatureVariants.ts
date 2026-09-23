import { ArgumentVariant } from "../argumentVariationEngine";

export const LITERATURE_VARIANTS: Record<string, ArgumentVariant[]> = {
  "theatre": [
    {
      id: 0,
      label: "Perspectives Tragiques & Classiques : Catharsis, Fatalité & Terreur Sacrée",
      perspective: "Catharsis aristotélicienne, Dilemme cornélien & Fatalité racinienne",
      pedagogicalAdvice: "Idéal pour poser la fonction morale et émotionnelle du théâtre classique purifiant les passions humaines.",
      arguments: [
        {
          statement: "La représentation tragique a pour vocation suprême d'opérer la catharsis, c'est-à-dire la purgation salutaire des passions destructrices.",
          author: "Aristote",
          work: "Poétique",
          quote: "La tragédie est l'imitation d'une action de caractère élevé... suscitant la pitié et la terreur, elle opère la purgation des passions de cette nature.",
          explanation: "Aristote montre que le spectateur, en voyant les souffrances des héros royaux sans courir lui-même de danger, éprouve une délivrance affective bienfaisante qui pacifie ses pulsions et renforce sa sagesse morale.",
          category: "Thèse Classique (Catharsis & Purgation)",
          connector: "De prime abord"
        },
        {
          statement: "La tragédie classique met en scène le déchirement héroïque entre le devoir d'honneur et la passion amoureuse.",
          author: "Pierre Corneille",
          work: "Le Cid",
          quote: "L'amour n'est qu'un plaisir, l'honneur est un devoir.",
          explanation: "Dans le théâtre cornélien, le héros sublime ses sentiments personnels pour préserver sa gloire et sa dignité aristocratique. Le conflit intérieur grandit l'âme humaine et offre au public un modèle éclatant de maîtrise de soi par la volonté.",
          category: "Dilemme Cornélien (Honneur & Volonté)",
          connector: "En second lieu"
        },
        {
          statement: "La fatalité tragique montre l'écrasement inéluctable de l'homme sous le poids de passions dévastatrices incontrôlables.",
          author: "Jean Racine",
          work: "Phèdre",
          quote: "Ce n'est plus une ardeur dans mes veines cachée : C'est Vénus tout entière à sa proie attachée.",
          explanation: "Racine peint la noirceur du jansénisme : la créature abandonnée de la grâce divine est prisonnière de ses pulsions interdites (comme l'amour incestueux de Phèdre pour Hippolyte), provoquant la terreur sacrée et la compassion devant la détresse humaine.",
          category: "Fatalité Racinienne (Passion Aveuglante & Destin)",
          connector: "Par ailleurs"
        },
        {
          statement: "Le théâtre antique est le lieu civique et religieux où la cité interroge publiquement ses propres lois et ses contradictions sacrées.",
          author: "Sophocle",
          work: "Antigone",
          quote: "Je ne pensais pas que tes décrets eussent tant de force qu'ils permissent à un mortel de violer les lois non écrites et infaillibles des dieux.",
          explanation: "En opposant Antigone (gardienne du devoir fraternel et religieux) et Créon (incarnation de la raison d'État), la tragédie grecque confronte les spectateurs aux dilemmes insolubles de la justice et de l'obéissance civique.",
          category: "Conflit Tragique (Droit Naturel vs Raison d'État)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Comiques & Satiriques : Castigat Ridendo Mores & Correction des Mœurs",
      perspective: "Satire moliéresque, Ironie de Beaumarchais & Dénonciation des vices",
      pedagogicalAdvice: "À mobiliser pour analyser le rire théâtral comme instrument de lucidité critique et d'assainissement social.",
      arguments: [
        {
          statement: "La comédie a pour rôle éducatif et moral de corriger les vices des hommes en les exposant au ridicule public.",
          author: "Molière",
          work: "Le Tartuffe (Préface)",
          quote: "L'emploi de la comédie est de corriger les vices des hommes... Le plus grand coup que l'on puisse porter aux vices est de les exposer à la risée de tout le monde.",
          explanation: "Molière explique que les hommes supportent volontiers les réprimandes sévères mais ne tolèrent pas d'être tournés en dérision. En caricaturant l'hypocrisie dévote, l'avarice ou la pédanterie, le rire comique désamorce les dérives sociales.",
          category: "Thèse Comique (Castigat Ridendo Mores)",
          connector: "En premier lieu"
        },
        {
          statement: "Le monologue comique devient une tribune révolutionnaire contestant avec esprit les privilèges héréditaires de la noblesse.",
          author: "Beaumarchais",
          work: "Le Mariage de Figaro",
          quote: "Parce que vous êtes un grand seigneur, vous vous croyez un grand génie !... Vous vous êtes donné la peine de naître, et rien de plus.",
          explanation: "Figaro incarne le peuple ingénieux et travailleur qui revendique sa liberté face à l'arbitraire aristocratique du comte Almaviva. Le théâtre de Beaumarchais annonce directement la Révolution française par la virtuosité subversive de son verbe.",
          category: "Satire Politique & Émancipation Sociale",
          connector: "Dans le même sens"
        },
        {
          statement: "Le jeu théâtral dévoile la cruauté des rapports de pouvoir et le mensonge des conventions amoureuses.",
          author: "Marivaux",
          work: "L'Île des esclaves",
          quote: "Vous avez été nos maîtres, et nous avons été vos esclaves ; vous avez été méchants, nous avons été malheureux.",
          explanation: "Dans cette comédie utopique, le renversement des rôles entre maîtres et valets force les aristocrates à éprouver l'humiliation subie par leurs serviteurs. Le théâtre devient un laboratoire moral pour rééduquer le cœur humain à la bienveillance.",
          category: "Marivaudage & Éducation Morale",
          connector: "D'autre part"
        },
        {
          statement: "L'acteur sur scène n'éprouve pas véritablement les passions qu'il mime mais les calcule avec une froide lucidité technique.",
          author: "Denis Diderot",
          work: "Paradoxe sur le comédien",
          quote: "Les larmes du comédien descendent de son cerveau ; celles de l'homme sensible montent de son cœur.",
          explanation: "Diderot déconstruit l'illusion d'une sensibilité brute sur scène : le comédien sublime son art non pas en sanglotant réellement, mais en reproduisant avec précision les signes extérieurs de l'émotion par un travail rigoureux de l'esprit.",
          category: "Esthétique du Jeu (Le Paradoxe Diderotien)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Politiques & Engagées : Théâtre Épique, Distanciation & Révolution",
      perspective: "Distanciation brechtienne (Verfremdung), Théâtre de situation sartrien & Cri décolonial",
      pedagogicalAdvice: "Indispensable pour les sujets abordant le théâtre comme tribune idéologique, éveil politique et dénonciation des injustices.",
      arguments: [
        {
          statement: "Le théâtre épique doit rompre l'illusion spectaculaire par la distanciation pour transformer le spectateur passif en observateur critique conscient.",
          author: "Bertolt Brecht",
          work: "Petit Organon pour le théâtre",
          quote: "Le théâtre ne doit pas seulement représenter le monde, il doit enseigner au spectateur comment le transformer.",
          explanation: "Brecht refuse l'identification émotionnelle aveugle qui berce le public. Par l'effet d'étrangeté (Verfremdungseffekt), des pancartes et des chansons interrompant l'action, le spectateur garde son esprit critique en éveil pour analyser les mécanismes de classe du capitalisme.",
          category: "Thèse Brechtienne (Distanciation & Lucidité Politique)",
          connector: "De prime abord"
        },
        {
          statement: "Le théâtre de situation place des libertés en actes face à des choix historiques irréversibles et angoissants.",
          author: "Jean-Paul Sartre",
          work: "Les Mains sales",
          quote: "Tous les moyens ne sont pas bons. Mais pour réussir, il faut se salir les mains jusqu'aux coudes.",
          explanation: "À travers le drame politique d'Hugo et de Hoederer, Sartre refuse l'angélisme moral des principes purs : l'engagement révolutionnaire plonge les consciences dans les compromissions réelles de l'histoire, obligeant le public à assumer le tragique de la responsabilité.",
          category: "Théâtre de Situation (Engagement & Mains Sales)",
          connector: "Par ailleurs"
        },
        {
          statement: "La tragédie anticoloniale donne une tribune épique aux luttes héroïques et tragiques des leaders d'émancipation africaine et caribéenne.",
          author: "Aimé Césaire",
          work: "La Tragédie du roi Christophe",
          quote: "À qui fera-t-on croire que tous les hommes ont les mêmes droits si nous ne prouvons pas aux yeux du monde que nous sommes capables de bâtir un État moderne ?",
          explanation: "Césaire met en scène les grandeurs et les écueils de la liberté conquise en Haïti après l'esclavage. Christophe veut contraindre son peuple au travail acharné pour forcer le respect des nations blanches, incarnant le drame politique de la souveraineté postcoloniale.",
          category: "Théâtre Décolonial (Souveraineté & Dignité Noire)",
          connector: "Toutefois"
        },
        {
          statement: "Le théâtre de la cruauté cherche à ébranler l'organisme entier du spectateur par un choc physique et spirituel total.",
          author: "Antonin Artaud",
          work: "Le Théâtre et son double",
          quote: "Le théâtre, comme la peste, est une crise qui se dénoue par la mort ou par la guérison... Il doit être égalé à une convulsion vitale.",
          explanation: "Artaud récuse le théâtre psychologique bavard et bourgeois. Il conçoit la scène comme un rituel tellurique où le son, la lumière et la transe physique brisent les faux semblants de la civilisation pour faire surgir les forces brutes de l'inconscient.",
          category: "Théâtre de la Cruauté (Le Rituel Transgressif)",
          connector: "Pour terminer"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Déconstructrices & Absurdes : Crise du Langage, Dérision & Dénuement",
      perspective: "Théâtre de l'absurde beckettien, Rhinocéros ionescien & Vacuité existentielle",
      pedagogicalAdvice: "À mobiliser pour aborder le théâtre contemporain, l'effondrement des intrigues classiques et la crise du sens après la guerre.",
      arguments: [
        {
          statement: "Le théâtre de l'absurde met en scène l'attente vaine et la vacuité du temps où les personnages errent dans l'impossibilité d'agir.",
          author: "Samuel Beckett",
          work: "En attendant Godot",
          quote: "Rien ne se passe, personne ne vient, personne ne s'en va, c'est terrible !",
          explanation: "Beckett anéantit les ressorts conventionnels du drame (ni intrigue, ni action, ni décor somptueux). Vladimir et Estragon attendent un personnage énigmatique qui ne viendra jamais, incarnant la condition humaine privée de sens métaphysique et condamnée à meubler le vide verbal.",
          category: "Théâtre de l'Absurde (L'Attente Stérile & Le Silence)",
          connector: "De prime abord"
        },
        {
          statement: "L'effondrement de la communication et le conformisme grégaire menacent les hommes de régression bestiale dans le totalitarisme.",
          author: "Eugène Ionesco",
          work: "Rhinocéros",
          quote: "Le conformisme est un monstre qui dévore l'humanité de l'homme... Je ne capitule pas !",
          explanation: "Ionesco montre comment une épidémie de « rhinocérite » contamine une petite ville : par lâcheté ou paresse intellectuelle, tous les citoyens abdiquent leur jugement critique pour rallier la horde barbare. Seul Bérenger résiste au nom de sa singularité humaine.",
          category: "Résistance Humaniste (Critique du Totalitarisme)",
          connector: "Aussi"
        },
        {
          statement: "Le théâtre contemporain fait éclater la cohérence psychologique du personnage pour refléter le morcellement identitaire de l'homme moderne.",
          author: "Jean Genet",
          work: "Les Bonnes",
          quote: "Nous sommes des esclaves, nos gestes ne nous appartiennent pas, nous jouons le rôle que Madame nous a préparé.",
          explanation: "Genet montre deux servantes prises au piège de rituels de haine où elles miment tour à tour la maîtresse et l'esclave. Le théâtre devient un jeu de miroirs vénéneux où la frontière entre le vrai et le faux, le maître et la victime s'efface dans une cérémonie sacrificielle.",
          category: "Jeu de Masques & Aliénation Sociale",
          connector: "D'autre part"
        },
        {
          statement: "La dérision théâtrale et l'humour noir sont les ultimes remparts de la lucidité humaine face à la mort et au néant.",
          author: "Samuel Beckett",
          work: "Fin de partie",
          quote: "Il n'y a rien de plus comique que le malheur, je vous l'accorde... C'est la chose la plus risible du monde.",
          explanation: "Enfermés dans un refuge délabré après un cataclysme inconnu, Hamm et Clov rient de leur propre décrépitude physique. L'ironie grinçante n'annule pas la souffrance mais offre le courage stoïque de regarder la fin du monde en face sans illusion.",
          category: "Humour Noir & Lucidité Existentielle",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Le Théâtre Épique, Décolonial & Tragédie Historique Panafricaine",
      perspective: "Distanciation brechtienne, Tragédie césairienne & Éveil politique",
      pedagogicalAdvice: "À mobiliser pour les sujets liant le théâtre à l'histoire politique, la décolonisation, la résistance des peuples et l'éveil civique.",
      arguments: [
        {
          statement: "Le théâtre épique refuse l'hypnose illusionniste et mobilise l'effet de distanciation pour faire du spectateur un juge critique et actif.",
          author: "Bertolt Brecht",
          work: "Petit Organon pour le théâtre",
          quote: "Il ne s'agit pas de faire éprouver au spectateur des sentiments, mais de lui arracher des jugements.",
          explanation: "Brecht rompt avec l'identification émotionnelle passive d'Aristote. Par des chants, des pancartes et une scénographie dépouillée, il brise le quatrième mur afin que le public comprenne que les lois sociales et les inégalités ne sont pas une fatalité naturelle, mais des constructions humaines modifiables par l'action politique.",
          category: "Théâtre Épique & Distanciation Critique",
          connector: "De prime abord"
        },
        {
          statement: "La tragédie historique décoloniale met en scène la douloureuse genèse d'un peuple noir en quête de grandeur et de respect.",
          author: "Aimé Césaire",
          work: "La Tragédie du roi Christophe",
          quote: "Haïti a moins péri par les Français que par nous-mêmes ! C'est d'un pas nouveau que nous voulons marcher !",
          explanation: "Césaire dépeint l'épopée déchirante du roi bâtisseur d'Haïti. Voulant arracher son peuple à l'infamie de l'esclavage passé à marche forcée en érigeant la Citadelle La Ferrière, Christophe se heurte à la fragilité humaine et périt de sa démesure, offrant une immense méditation sur les défis du pouvoir postcolonial.",
          category: "Tragédie Politique Décoloniale",
          connector: "En second lieu"
        },
        {
          statement: "Le théâtre historique africain réhabilite les figures pionnières de la résistance anticoloniale pour éveiller la fierté des générations futures.",
          author: "Bernard Dadié",
          work: "Béatrice du Congo",
          quote: "Quand la terre saigne, ce sont ses filles et ses fils qui doivent se lever pour la défendre.",
          explanation: "Dadié retrace le combat héroïque de Dona Béatrice (Kimpa Vita) au XVIIIe siècle contre les trafiquants portugais et les missionnaires complices. Le théâtre devient un sanctuaire de mémoire vivante où la foi patriotique d'une jeune femme défie l'impérialisme.",
          category: "Mémoire Anticoloniale & Dignité Africaine",
          connector: "Par ailleurs"
        },
        {
          statement: "Le drame rituel confronte les exigences cosmiques et métaphysiques d'une civilisation ancestrale au mépris aveugle de l'occupant étranger.",
          author: "Wole Soyinka (Prix Nobel)",
          work: "La Mort et l'Écuyer du roi",
          quote: "L'honneur d'un peuple repose dans l'accomplissement sacré de son passage entre le monde des ancêtres et celui des vivants.",
          explanation: "Soyinka met en scène le suicide rituel d'Elesin Oba pour accompagner son roi défunt dans l'au-delà yoruba, interdit par un administrateur colonial ignorant. La tragédie révèle l'abîme d'incompréhension entre deux visions du monde et la déchirure d'une culture sommée de renier ses mystères sacrés.",
          category: "Conflit Tragique & Métaphysique Yoruba",
          connector: "Pour terminer"
        }
      ]
    }
  ],
  "roman": [
    {
      id: 0,
      label: "Perspectives Réalistes, Naturalistes & Témoignage Social",
      perspective: "Miroir stendhalien, Réalisme balzacien, Naturalisme de Zola & Radiographie kouroumienne",
      pedagogicalAdvice: "Idéal pour poser la thèse de la fonction mimétique, sociologique et documentaire du roman.",
      arguments: [
        {
          statement: "Le roman a pour vocation première de refléter impartialement la réalité humaine et les contrastes sociaux.",
          author: "Stendhal",
          work: "Le Rouge et le Noir",
          quote: "Un roman est un miroir qui se promène sur une grande route. Tantôt il reflète à vos yeux l'azur des cieux, tantôt la fange des bourbiers de la route.",
          explanation: "Stendhal soutient que le romancier n'a pas à embellir artificiellement le monde ni à masquer ses laideurs : sa mission éthique et littéraire est d'enregistrer avec sincérité les grandeurs et les tares de la société de son époque.",
          category: "Thèse Réaliste (Le Roman-Miroir)",
          connector: "De prime abord"
        },
        {
          statement: "Le romancier se fait le greffier rigoureux de l'histoire des mœurs et des passions économiques.",
          author: "Honoré de Balzac",
          work: "Avant-propos de La Comédie humaine",
          quote: "La société française allait être l'historien, je ne devais être que le secrétaire.",
          explanation: "Balzac érige le roman en véritable monument sociologique où l'observation minutieuse des détails (décors, costumes, budgets) permet de comprendre les rouages invisibles de l'ascension et de la déchéance des classes sociales.",
          category: "Réalisme Sociologique (L'Archiviste des Mœurs)",
          connector: "En deuxième lieu"
        },
        {
          statement: "La méthode naturaliste transforme le roman en laboratoire d'auscultation scientifique des injustices prolétariennes.",
          author: "Émile Zola",
          work: "Le Roman expérimental",
          quote: "Nous autres romanciers, nous sommes les juges d'instruction des hommes et de leurs passions.",
          explanation: "Dans Germinal, Zola applique l'enquête expérimentale aux ravages de la misère minière afin de réveiller la conscience civique et d'exiger des réformes salutaires pour la classe ouvrière écrasée par le capital.",
          category: "Naturalisme & Réquisitoire Social",
          connector: "Par ailleurs"
        },
        {
          statement: "Le roman africain contemporain dresse le bilan sans complaisance des désillusions politiques de l'ère des indépendances.",
          author: "Ahmadou Kourouma",
          work: "Les Soleils des indépendances",
          quote: "Les soleils des indépendances s'étaient annoncés comme un orage de bonheur... mais ils avaient laissé les indigents sans toit ni sépulture.",
          explanation: "À travers la déchéance de Fama Doumbouya, Kourouma subvertit la langue française pour peindre l'amère réalité du néocolonialisme, du parti unique et de la confiscation des espoirs populaires.",
          category: "Réalisme Postcolonial & Désillusion Historique",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Engagées, Politiques & Dénonciation des Injustices",
      perspective: "Contestation anticoloniale d'Oyono et Dadié, Épopée prolétarienne de Sembène & Cri hugolien",
      pedagogicalAdvice: "À mobiliser pour démontrer que le roman est une arme de combat au service de l'émancipation des opprimés.",
      arguments: [
        {
          statement: "Le roman dévoile la tartufferie et la cruauté du système colonial à travers le regard faussement naïf des victimes.",
          author: "Ferdinand Oyono",
          work: "Une vie de boy",
          quote: "Qu'est-ce qu'un Noir pour un Blanc ? Un enfant que l'on punit, un chien que l'on siffle.",
          explanation: "Par le truchement du journal de Toundi, Oyono démonte l'imposture civilisatrice des maîtres européens et fait du récit romanesque un implacable réquisitoire contre la déshumanisation institutionnelle.",
          category: "Dénonciation Coloniale & Réquisitoire Intime",
          connector: "De prime abord"
        },
        {
          statement: "Le roman d'initiation et de révolte exprime la colère d'une jeunesse africaine résolue à briser les fers du travail forcé.",
          author: "Bernard Binlin Dadié",
          work: "Climbié",
          quote: "La vie n'est pas faite pour être subie dans la servitude, mais pour être conquise pas à pas dans la dignité.",
          explanation: "Dadié retrace l'éveil civique de son héros qui refuse le statut d'éternel assujetti et met sa plume au service de la souveraineté et du respect inaliénable de l'homme noir.",
          category: "Combat Civique & Éveil de la Jeunesse",
          connector: "Aussi"
        },
        {
          statement: "L'épopée romanesque célèbre la solidarité collective et la force transformatrice de la grève prolétarienne.",
          author: "Ousmane Sembène",
          work: "Les Bouts de bois de Dieu",
          quote: "Ceux qui n'ont rien compris à la grève n'ont rien compris aux hommes en marche vers leur destin.",
          explanation: "Sembène immortalise la grève historique des cheminots du Dakar-Niger (1947-1948), montrant comment la prise de conscience solidaire des hommes et des femmes brise l'arrogance patronale coloniale.",
          category: "Épopée Prolétarienne & Résistance Solidaire",
          connector: "En outre"
        },
        {
          statement: "Le roman humaniste universel porte la voix des miséreux pour réclamer l'instruction publique et la justice fraternelle.",
          author: "Victor Hugo",
          work: "Les Misérables",
          quote: "Tant qu'il y aura sur la terre ignorance et misère, des livres de la nature de celui-ci pourront ne pas être inutiles.",
          explanation: "Hugo démontre que la criminalité naît de la misère économique et du mépris social ; le roman devient une plaidoirie monumentale pour le rachat des réprouvés comme Jean Valjean.",
          category: "Humanisme & Réhabilitation Sociale",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Didactiques, Morales & Quête Identitaire",
      perspective: "Apologue voltairien, Déchirement culturel chez Kane, Peste camusienne & Laboratoire éthique",
      pedagogicalAdvice: "À employer pour explorer la vocation philosophique et éducative du roman formant le discernement de l'homme.",
      arguments: [
        {
          statement: "Le conte et le roman philosophique éveillent l'esprit critique contre le fanatisme religieux et le fatalisme trompeur.",
          author: "Voltaire",
          work: "Candide ou l'Optimisme",
          quote: "Il faut cultiver notre jardin.",
          explanation: "En confrontant le jeune Candide aux atrocités de la guerre et de l'Inquisition, Voltaire récuse les spéculations métaphysiques stériles et exhorte l'homme à l'action concrète et solidaire.",
          category: "Apologue Philosophique & Discernement Critique",
          connector: "En premier lieu"
        },
        {
          statement: "Le roman ausculte la déchirure identitaire de l'homme africain écartelé entre tradition sacrée et modernité occidentale.",
          author: "Cheikh Hamidou Kane",
          work: "L'Aventure ambiguë",
          quote: "Peut-on apprendre à lier le bois au bois, sans pour autant périr dans son âme ?",
          explanation: "Kane fait du destin spirituel de Samba Diallo une tragédie philosophique universelle posant la question du salut spirituel face au triomphe de la technique matérialiste.",
          category: "Déchirement Culturel & Quête Métaphysique",
          connector: "Sous un autre angle"
        },
        {
          statement: "La chronique romanesque allégorique illustre la grandeur morale de l'héroïsme ordinaire face au mal et à la barbarie.",
          author: "Albert Camus",
          work: "La Peste",
          quote: "Il y a dans les hommes plus de choses à admirer que de choses à mépriser.",
          explanation: "À travers le dévouement désintéressé du docteur Rieux et de ses camarades luttant contre l'épidémie, Camus offre une parabole éclatante de la résistance humaine contre l'absurde et le totalitarisme.",
          category: "Résistance Humaniste & Solidarité face à l'Absurde",
          connector: "Par ailleurs"
        },
        {
          statement: "Le roman épistolaire analyse avec finesse la dialectique de l'émancipation féminine et de la dignité morale.",
          author: "Mariama Bâ",
          work: "Une si longue lettre",
          quote: "L'amitié a des grandeurs que l'amour ne connaît point.",
          explanation: "Dans sa correspondance intime, Ramatoulaye médite sur la trahison conjugale, la polygamie forcée et l'affirmation d'une parole féminine responsable et féconde pour la société nouvelle.",
          category: "Émancipation Féminine & Éthique de la Responsabilité",
          connector: "Pour terminer"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Esthétiques, Psychologiques & Évasion Imaginaire",
      perspective: "Autopsie psychologique chez Flaubert, Poésie de la mémoire proustienne & Aventure dumasienne",
      pedagogicalAdvice: "Idéal pour l'axe d'antithèse ou de dépassement : le roman comme souveraineté de l'art, fiction et exploration du cœur.",
      arguments: [
        {
          statement: "Le roman explore les abîmes de la psychologie intérieure et démonte l'illusion destructrice des désirs romanesques.",
          author: "Gustave Flaubert",
          work: "Madame Bovary",
          quote: "Elle retrouvait dans l'adultère toutes les platitudes du mariage.",
          explanation: "Flaubert dissèque le bovarysme : l'incapacité d'Emma à vivre le réel sans le draper des chimères de ses lectures sentimentales révèle la vulnérabilité universelle de l'âme humaine.",
          category: "Introspection Psychologique & Bovarysme",
          connector: "D'abord"
        },
        {
          statement: "La création romanesque transmue le temps fugitif en vérité spirituelle et esthétique inaltérable.",
          author: "Marcel Proust",
          work: "Le Temps retrouvé",
          quote: "La vraie vie, la vie enfin découverte et éclaircie, la seule vie par conséquent réellement vécue, c'est la littérature.",
          explanation: "Pour Proust, le roman ne copie pas la vie extérieure : il permet au lecteur de devenir le lecteur de son propre cœur grâce à la réminiscence et à la magie stylistique de la mémoire involontaire.",
          category: "Esthétique de la Mémoire & Vérité de l'Art",
          connector: "En deuxième lieu"
        },
        {
          statement: "Le roman d'aventure et de science-fiction répond au besoin irrépressible d'évasion, de mystère et d'héroïsme.",
          author: "Alexandre Dumas",
          work: "Le Comte de Monte-Cristo",
          quote: "Attendre et espérer : toute la sagesse humaine est contenue dans ces deux mots.",
          explanation: "Dumas et Jules Verne démontrent la souveraineté du plaisir narratif : le lecteur s'évade des servitudes quotidiennes pour embrasser le vertige des épopées maritimes, souterraines ou vengeresses.",
          category: "Roman d'Aventure & Évasion Imaginaire",
          connector: "De plus"
        },
        {
          statement: "Le roman d'apprentissage poétique célèbre la quête du domaine mystérieux et la ferveur inoubliable de l'enfance.",
          author: "Alain-Fournier",
          work: "Le Grand Meaulnes",
          quote: "C'était comme un rêve plus beau que le rêve lui-même.",
          explanation: "En créant le domaine sans nom où s'entremêlent amour idéalisé et nostalgie lumineuse, Alain-Fournier fait de la fiction un sanctuaire poétique préservé des noirceurs de l'âge adulte.",
          category: "Quête Onirique & Nostalgie de l'Innocence",
          connector: "Pour finir"
        }
      ]
    }
  ],
  "poesie": [
    {
      id: 0,
      label: "Perspectives Lyriques, Élégiaques & Confession du Cœur",
      perspective: "Élégie lamartinienne, Universalité du cri hugolien & Musique de l'âme verlainienne",
      pedagogicalAdvice: "Idéal pour poser la définition canonique de la poésie comme chant intime et résonance de la douleur humaine.",
      arguments: [
        {
          statement: "La poésie lyrique offre une voix sublime à la douleur du deuil et à la méditation douloureuse sur le temps qui fuit.",
          author: "Alphonse de Lamartine",
          work: "Méditations poétiques (Le Lac)",
          quote: "Ô temps ! suspends ton vol, et vous, heures propices ! / Suspendez votre cours.",
          explanation: "Face à la perte déchirante de Julie Charles, le poète prend la nature pour confidente et transfigure son angoisse existentielle en une élégie universelle où chaque être reconnaît sa propre finitude.",
          category: "Élégie Romantique & Finitude Humaine",
          connector: "De prime abord"
        },
        {
          statement: "Le lyrisme poétique abolit la frontière entre le poète et son lecteur pour faire résonner l'universalité de la condition humaine.",
          author: "Victor Hugo",
          work: "Les Contemplations (Préface)",
          quote: "Ah ! insensé qui crois que je ne suis pas toi ! [...] Quand je vous parle de moi, je vous parle de vous.",
          explanation: "Hugo montre que la confession intime n'est jamais un repli égoïste : en pleurant la mort tragique de sa fille Léopoldine, le poète devient le miroir sensible de toutes les souffrances du monde.",
          category: "Universalité du Lyrisme Intime",
          connector: "En second lieu"
        },
        {
          statement: "La parole poétique se fait pure vibration musicale pour suggérer les nuances les plus secrètes et mélancoliques de l'âme.",
          author: "Paul Verlaine",
          work: "Jadis et Naguère (Art poétique)",
          quote: "De la musique avant toute chose, / Et pour cela préfère l'Impair / Plus vague et plus soluble dans l'air.",
          explanation: "Verlaine privilégie la mélodie fluide, la nuance impalpable et le vers impair pour traduire les états d'âme insaisissables sans alourdir le poème d'éloquence pesante.",
          category: "Musicalité Symboliste & Suggestion Mélancolique",
          connector: "Par ailleurs"
        },
        {
          statement: "La célébration de la beauté féminine et de l'amour éphémère exhorte l'homme à goûter la plénitude de l'instant présent.",
          author: "Pierre de Ronsard",
          work: "Sonnets pour Hélène",
          quote: "Cueillez dès aujourd'hui les roses de la vie.",
          explanation: "Héritier du motif antique du Carpe Diem, Ronsard sublime la fugacité de la jeunesse pour inviter l'être aimé à vaincre la fuite destructrice du temps par la ferveur amoureuse.",
          category: "Lyrisme Amoureux & Carpe Diem",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Engagées, Négritude & Combat pour la Liberté",
      perspective: "Dénonciation des injustices, critique de la corruption, refus des dictatures, diversité & résistance",
      pedagogicalAdvice: "À mobiliser pour démontrer que la poésie est une arme d'éveil civique, de justice sociale et de libération humaine.",
      arguments: [
        {
          statement: "La poésie dénonce les injustices et les inégalités",
          author: "Victor Hugo",
          work: "Les Contemplations",
          quote: "Où vont tous ces enfants dont pas un seul ne rit ?",
          explanation: "Elle met en lumière la souffrance des populations opprimées. Dans Les Contemplations, Hugo dénonce la misère et l'exploitation des enfants.",
          category: "Dénonciation des Injustices & Exploitation",
          connector: "De prime abord"
        },
        {
          statement: "La poésie critique la corruption et les dérives du pouvoir",
          author: "Tommy David Golé Bi Gnamien",
          work: "Les Vers de Corrupthius",
          quote: "La corruption ronge les piliers de la cité sous le masque du bien public.",
          explanation: "Elle pointe les abus, la manipulation et l'égoïsme des dirigeants. Elle expose les mécanismes de la corruption. Dans ce recueil, le poète ivoirien critique avec virulence la corruption dans les institutions et la société. À travers une langue ironique et provocatrice, il révèle l'ampleur du fléau.",
          category: "Critique de la Corruption & Dérives du Pouvoir",
          connector: "En second lieu"
        },
        {
          statement: "La poésie s’élève contre l’oppression et la dictature",
          author: "Aimé Césaire",
          work: "Cahier d’un retour au pays natal",
          quote: "Ma bouche sera la bouche des malheurs qui n'ont point de bouche, ma voix, la liberté de celles qui s'affaissent au cachot du désespoir.",
          explanation: "Elle défend la liberté et met en garde contre la violence des régimes autoritaires. Dans Cahier d’un retour au pays natal, Aimé Césaire dénonce la colonisation et l'aliénation des peuples noirs.",
          category: "Refus de la Dictature & Dignité Décoloniale",
          connector: "Aussi"
        },
        {
          statement: "La poésie célèbre la diversité et dénonce les discriminations",
          author: "Léopold Sédar Senghor",
          work: "Chants d’ombre",
          quote: "Femme nue, femme noire / Vêtue de ta couleur qui est vie, de ta forme qui est beauté !",
          explanation: "Elle rejette le racisme et l'exclusion, et défend l'égalité. Dans Chants d’ombre, Léopold Sédar Senghor valorise la culture africaine et critique le mépris colonial.",
          category: "Diversité, Égalité & Rejet des Discriminations",
          connector: "Par ailleurs"
        },
        {
          statement: "La poésie défend la liberté et les droits humains",
          author: "Paul Éluard",
          work: "Poésie et Vérité 1942 (Liberté)",
          quote: "Et par le pouvoir d'un mot / Je recommence ma vie / Je suis né pour te connaître / Pour te nommer / Liberté.",
          explanation: "Elle rappelle les valeurs de justice et de dignité. Dans Liberté, Paul Éluard fait de son poème un symbole universel de résistance.",
          category: "Défense de la Liberté & Droits Humains",
          connector: "En outre"
        },
        {
          statement: "La poésie critique la guerre et la violence",
          author: "Guillaume Apollinaire",
          work: "Calligrammes",
          quote: "La nuit descend / On y pressent / Un long destin de sang.",
          explanation: "Elle dénonce la destruction et la souffrance causées par les conflits, tout en appelant à la paix. Dans Calligrammes de Guillaume Apollinaire, certains poèmes évoquent la Première Guerre mondiale et dénoncent la violence, transformant la poésie en acte de résistance pacifique.",
          category: "Critique de la Guerre & Appel à la Paix",
          connector: "De surcroît"
        },
        {
          statement: "La poésie donne voix aux oubliés et aux marginalisés",
          author: "David Diop",
          work: "Coups de pilon (Afrique)",
          quote: "Afrique mon Afrique / Afrique des fiers guerriers dans les savanes ancestrales... C'est l'Afrique qui repousse patiemment obstinément.",
          explanation: "Elle rétablit la dignité de ceux que la société ignore ou opprime. Dans Afrique, David Diop rend hommage à la résistance silencieuse des Africains face à la colonisation.",
          category: "Voix des Oubliés & Réhabilitation des Marginalisés",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Esthétiques & Beauté du Verbe",
      perspective: "Musicalité des mots, création d'images évocatrices & langue travaillée et originale",
      pedagogicalAdvice: "À utiliser pour traiter les sujets interrogeant la primauté de la forme, de l'harmonie sonore, des images poétiques et du travail stylistique.",
      arguments: [
        {
          statement: "La poésie joue sur la musicalité des mots",
          author: "Victor Hugo",
          work: "Les Contemplations (Demain, dès l’aube)",
          quote: "Demain, dès l'aube, à l'heure où blanchit la campagne, / Je partirai.",
          explanation: "Le poète utilise des sons, des rythmes, des rimes, des assonances et des allitérations pour créer une mélodie poétique qui touche le lecteur. Dans Demain, dès l’aube de Victor Hugo, le rythme régulier et les sonorités harmonieuses des vers renforcent l’émotion et produisent une musicalité qui charme le lecteur.",
          category: "Musicalité des Mots & Harmonie Sonore",
          connector: "De prime abord"
        },
        {
          statement: "La poésie crée des images fortes et évocatrices",
          author: "Charles Baudelaire",
          work: "Les Fleurs du mal (Correspondances)",
          quote: "Les parfums, les couleurs et les sons se répondent.",
          explanation: "Elle transforme des sensations ou des idées en images visuelles, sensorielles, donnant au texte une grande richesse esthétique. Dans Les Fleurs du mal de Baudelaire, de nombreux poèmes comme Correspondances utilisent des métaphores et des comparaisons pour peindre des images magnifiques et profondes.",
          category: "Images Évocatrices & Correspondances Sensorielles",
          connector: "En deuxième lieu"
        },
        {
          statement: "La poésie utilise une langue travaillée et originale",
          author: "Guillaume Apollinaire",
          work: "Calligrammes",
          quote: "Et vous chères colombes qui vous envolez / Les souvenirs de naguère...",
          explanation: "Le choix des mots, des figures de style et de la structure rend la poésie unique et artistique, faisant de chaque texte une œuvre d’art. Dans Les Calligrammes de Guillaume Apollinaire, la forme même des poèmes crée une expérience esthétique particulière : les mots forment des dessins, mêlant art visuel et poésie, ce qui rend chaque œuvre unique.",
          category: "Langue Travaillée & Ciselure Formelle",
          connector: "Par ailleurs"
        },
        {
          statement: "La poésie opère une alchimie miraculeuse transfigurant la laideur du monde en splendeur artistique",
          author: "Charles Baudelaire",
          work: "Les Fleurs du mal (Projet d'épilogue)",
          quote: "Tu m'as donné ta boue et j'en ai fait de l'or.",
          explanation: "La beauté poétique ne réside pas dans le sujet moral ou conventionnel, mais dans la puissance transfiguratrice de l'écriture capable d'extraire la grâce éternelle du réel.",
          category: "Alchimie Poétique & Transfiguration",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Évasives, Fictives & Oniriques",
      perspective: "Invention de mondes imaginaires, création de personnages mythiques & voyage intérieur",
      pedagogicalAdvice: "À employer pour analyser la poésie comme refuge onirique, création d'univers féeriques et dépassement du monde sensible.",
      arguments: [
        {
          statement: "La poésie invente des mondes imaginaires",
          author: "Charles Baudelaire",
          work: "Les Fleurs du mal (L’Invitation au voyage)",
          quote: "Là, tout n'est qu'ordre et beauté, / Luxe, calme et volupté.",
          explanation: "Elle transporte le lecteur dans des univers qui n’existent pas, offrant une évasion loin du réel. Dans L’Invitation au voyage (Les Fleurs du mal), Baudelaire décrit un pays rêvé « où tout n’est qu’ordre et beauté ».",
          category: "Mondes Imaginaires & Refuge Onirique",
          connector: "D'emblée"
        },
        {
          statement: "La poésie invente des personnages imaginaires",
          author: "Guillaume Apollinaire",
          work: "Alcools (Mélusine)",
          quote: "Mélusine en ses songes / Voit couler les fleuves d'or.",
          explanation: "Elle donne vie à des êtres qui n’existent pas dans la réalité, mais qui permettent au poète d’exprimer ses rêves, ses émotions ou sa vision du monde. Dans « Mélusine », Apollinaire évoque une femme mythique mi-femme, mi-fée.",
          category: "Créatures Mythiques & Fictions Poétiques",
          connector: "En second lieu"
        },
        {
          statement: "La poésie affranchit l'esprit du carcan de la réalité quotidienne",
          author: "André Breton",
          work: "Manifeste du surréalisme",
          quote: "L'imagination seule me rend compte de ce qui peut être.",
          explanation: "Par l'audace des images et l'affranchissement des contraintes logiques, la poésie réconcilie le rêve avec l'action vécue, élargissant infiniment les frontières de l'existence.",
          category: "Rêve Émancipateur & Liberté de l'Esprit",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 4,
      label: "Perspectives Ludiques & Didactiques (Édification & Rire)",
      perspective: "Plaisir du rire, divertissement formel, leçons morales & enrichissement de la langue",
      pedagogicalAdvice: "À mobiliser lorsque le sujet interroge la poésie comme divertissement, jeu esthétique, fable morale ou moyen d'instruction.",
      arguments: [
        {
          statement: "La poésie cherche à faire rire",
          author: "Jean de La Fontaine",
          work: "Fables (Le Corbeau et le Renard)",
          quote: "Tout flatteur vit aux dépens de celui qui l'écoute.",
          explanation: "Le poète utilise l’humour, les jeux de mots ou des situations amusantes pour provoquer le sourire ou le rire du lecteur, rendant la lecture agréable et plaisante. Dans Les Fables de Jean de La Fontaine, des textes comme Le Corbeau et le Renard utilisent l’ironie et des situations drôles pour amuser.",
          category: "Humour, Ironie & Comique Poétique",
          connector: "De prime abord"
        },
        {
          statement: "La poésie divertit et détend",
          author: "Guillaume Apollinaire",
          work: "Calligrammes",
          quote: "Mon cœur pareil à une flamme renversée.",
          explanation: "Même sans être comique, la poésie peut plaire et captiver par son rythme, ses sons ou ses images originales. Elle permet de se changer les idées et de passer un moment agréable. Les Calligrammes de Guillaume Apollinaire divertissent le lecteur grâce à leur forme visuelle inventive, où les mots dessinent des objets comme un oiseau ou une tour.",
          category: "Divertissement & Inventivité Formelle",
          connector: "En deuxième lieu"
        },
        {
          statement: "La poésie transmet des leçons de vie ou une morale",
          author: "Jean de La Fontaine",
          work: "Fables (Le Lièvre et la Tortue)",
          quote: "Rien ne sert de courir ; il faut partir à point.",
          explanation: "Le poète utilise ses vers pour instruire le lecteur sur des comportements humains, des valeurs morales ou des réflexions sur la vie. Dans Les Fables de Jean de La Fontaine, chaque poème raconte une histoire courte et se termine par une morale claire. Par exemple, Le Lièvre et la Tortue transmet la leçon selon laquelle la persévérance et la patience sont plus efficaces que la précipitation.",
          category: "Morale Pratique & Leçons de Vie",
          connector: "Aussi"
        },
        {
          statement: "La poésie enrichit la langue et le vocabulaire",
          author: "Bernard Binlin Dadié",
          work: "La Ronde des jours",
          quote: "Les lignes de nos mains ne sont point des parallèles, des chemins de montagnes, des gerçures sur troncs d'arbres, des traces de luttes homériques.",
          explanation: "Elle permet au lecteur d’acquérir des mots, des expressions et des références littéraires. Dans La Ronde des jours, Bernard Binlin Dadié écrit : « Les lignes de nos mains ne sont point des parallèles, des chemins de montagnes, des gerçures sur troncs d’arbres, des traces de luttes homériques ». Cette métaphore originale offre au lecteur des images poétiques inédites et enrichit sa perception du langage.",
          category: "Enrichissement de la Langue & Métaphores Inédites",
          connector: "Enfin"
        }
      ]
    }
  ]
};
