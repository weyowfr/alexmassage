import type { Article } from "../types";

const article: Article = {
  slug: "contre-indications-massage-bien-etre",
  category: "bienfaits",
  title: "Les contre-indications du massage bien-être : quand reporter sa séance",
  metaTitle: "Contre-indications du massage : quand reporter sa séance",
  description:
    "Fièvre, phlébite, grossesse, traitements : les situations où le massage bien-être se reporte ou s'adapte. La liste claire d'un praticien certifié.",
  excerpt:
    "Un bon praticien sait aussi quand ne pas masser : la liste des situations qui imposent prudence ou report.",
  date: "2026-07-14",
  readingMinutes: 4,
  image: "/images/alexandre-en-seance.jpeg",
  imageAlt: "Échange entre praticien et client avant la séance de massage",
  blocks: [
    {
      t: "p",
      x: "On juge un praticien à ses mains — mais aussi à sa capacité à dire « pas aujourd'hui ». Le massage bien-être est très sûr, à une condition : connaître les situations où il faut s'abstenir, adapter ou demander d'abord un avis médical. Voici la liste que je passe en revue avec chaque nouveau client, en toute transparence.",
    },
    { t: "h2", x: "Les cas où l'on reporte, sans discussion" },
    {
      t: "ul",
      items: [
        "**Fièvre ou infection en cours** — le corps est déjà mobilisé ; on le laisse travailler.",
        "**Phlébite ou suspicion de thrombose** — contre-indication absolue : on ne masse jamais un membre suspect de caillot.",
        "**Inflammation aiguë, entorse ou blessure récente** — pas de massage sur une zone chaude, rouge ou gonflée.",
        "**Maladie de peau contagieuse ou lésions étendues** — on attend la cicatrisation.",
        "**Intervention chirurgicale récente** — le feu vert du chirurgien d'abord.",
      ],
    },
    { t: "h2", x: "Les cas où l'on demande d'abord un avis médical" },
    {
      t: "ul",
      items: [
        "**Grossesse** — le massage prénatal est une spécialité à part entière ; par prudence, je demande l'accord du médecin ou de la sage-femme et j'adapte strictement le protocole, notamment au premier trimestre.",
        "**Antécédents cardiovasculaires ou traitement anticoagulant** — la pression et les zones se choisissent avec précaution.",
        "**Cancer, en traitement ou en rémission récente** — des massages adaptés existent, mais toujours en accord avec l'équipe soignante.",
        "**Diabète avec troubles de la sensibilité, ostéoporose sévère, épilepsie** — le protocole s'ajuste au cas par cas.",
      ],
    },
    { t: "h2", x: "Les situations qui s'adaptent facilement" },
    {
      t: "p",
      x: "La plupart des particularités ne empêchent rien, elles se signalent : une allergie (le choix des [huiles](/blog/huiles-de-massage-comment-choisir) s'ajuste), un grain de beauté à éviter, des varices (on ne travaille pas dessus, le reste de la jambe oui), des [courbatures fraîches](/blog/courbatures-et-massage) (la pression descend), une sensibilité particulière du ventre ou des pieds (on contourne). L'échange en début de séance — décrit dans [le déroulement d'une séance](/blog/massage-a-domicile-toulouse-comment-ca-se-passe) — sert exactement à cela.",
    },
    {
      t: "quote",
      x: "Ma règle : dans le doute, je pose la question, et si le doute persiste, je préfère perdre une séance que prendre un risque. Un client en bonne santé revient ; c'est la seule fidélisation qui m'intéresse.",
    },
    { t: "h2", x: "Pourquoi cette transparence vous protège" },
    {
      t: "p",
      x: "Un praticien qui ne pose aucune question avant de masser n'est pas plus « cool » — il est moins formé. La connaissance des contre-indications fait partie des certifications sérieuses, et c'est l'un des [7 critères pour choisir son masseur](/blog/comment-choisir-son-masseur-toulouse). Si vous avez un doute sur votre situation, mentionnez-le simplement à la réservation via la [page contact](/contact) : la réponse est gratuite, et parfois la meilleure séance est celle qu'on décale de dix jours.",
    },
  ],
  faq: [
    {
      q: "Peut-on se faire masser enceinte ?",
      a: "Oui, avec un protocole adapté et idéalement l'accord de votre médecin ou sage-femme — surtout au premier trimestre. Signalez la grossesse dès la réservation pour que la séance soit ajustée en conséquence.",
    },
    {
      q: "Je suis sous anticoagulants, le massage est-il possible ?",
      a: "Souvent oui, avec une pression douce et en évitant certaines manœuvres, mais demandez d'abord l'avis de votre médecin. Mentionnez tout traitement en cours avant la séance.",
    },
    {
      q: "Faut-il annuler sa séance pour un simple rhume ?",
      a: "S'il y a fièvre ou grosse fatigue, oui — le report est toujours possible sans frais avec un peu de prévenance. Pour un nez qui coule sans fièvre, la séance reste envisageable si vous vous en sentez l'envie.",
    },
  ],
  related: [
    "comment-choisir-son-masseur-toulouse",
    "huiles-de-massage-comment-choisir",
    "massage-a-domicile-toulouse-comment-ca-se-passe",
  ],
};

export default article;
