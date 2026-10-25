export const EN = {
  NAV_BAR_DATA: {
    title: `RAHIL-SAIYED / PORTFOLIO`,
    systems: "Systems",
    timeLines: "Timeline",
    builds: "Builds",
    contact: "Contact",
  },
  HERO_DATA:{
    designation:'Full Stack Developer — Cloud',
    aiSystems:'AI Systems',
    title:'I build products end to end —',
    title2:'interface to infrastructure.',
    subject:'React and Node.js on the front lines, GraphQL and AWS Lambda underneath, and AI woven into the workflow when it earns its place. Currently shipping production features at Perception System.',
    button1:'View builds ↓',
    button2:'Get in touch'
  },
  SKILLS_DATA: {
    sheetTitle: 'Systems & Tooling',
    sheetTag: 'Component legend',
  },
  EXPERIENCE_DATA: {
    sheetTitle: 'Experience Timeline',
    sheetTag: 'Click Badge To Download Certificate',
    challengeLabel: 'Challenge solved',
    backHint: '← Click to go back',
    confidential: 'Client Confidential',
    entries: [
      {
        role: 'Full Stack Developer', company: 'Perception System', badge: 'Current', current: true,
        desc: 'Building production features across the stack — React/Next.js interfaces, Node.js and Express APIs, and AWS Amplify GraphQL schemas with live subscriptions.',
        bullets: [
          'Designed and shipped AI-powered features: AI-generated eBooks, LLM-driven HTML generation, and image-generation pipelines.',
          'Built a serverless PDF pipeline on AWS Lambda using Puppeteer and headless Chromium, with S3 delivery.',
          'Owned cloud infrastructure — CloudFront CDN configuration, IAM permissions, presigned URLs, and CORS.',
          'Debugged production issues spanning GraphQL payload limits, Lambda packaging, and Next.js build failures.',
        ],
        certificatePath: ''
      },
      {
        role: 'Backend Developer Intern', company: 'Mayora Infotech', badge: 'Internship', current: false,
        desc: 'Focused on backend fundamentals — building and maintaining REST APIs with Node.js and Express, and working with database design and CRUD operations.',
        bullets: [],
        certificatePath: 'Rahil_InternshipCertificate.pdf'
      },
      {
        role: 'Summer Intern', company: 'Adani Green Energy', badge: 'Internship', current: false,
        desc: 'Early hands-on exposure to software development workflows, version control, and collaborative engineering practices.',
        bullets: [],
        certificatePath: 'ScannedDocument.pdf'
      },
    ],
  },
  PROJECTS_DATA: {
    sheetTitle: 'Selected Builds',
    sheetTag: 'Click a card for the challenge solved',
    challengeLabel: 'Challenge solved',
    backHint: '← Click to go back',
    confidential: 'Client Confidential',
    entries: [
      {
        title: 'Lugelo Platform',
        desc: 'A production platform spanning AI eBook generation, interactive storybooks, VR experiences, and a full user dashboard for media management.',
        tags: ['React', 'Node.js', 'AWS', 'GraphQL', 'DynamoDB', 'S3', 'CloudFront'],
        challenge: 'Synced frontend state across long-running AI generation jobs without polling, using GraphQL subscriptions.',
        link: 'http://lugelo.com/', image: '/projects_images/lgl-img.png'
      },
      {
        title: 'Monitor Mate',
        desc: 'An AI workflow that generates complete HTML books through LLMs, tracks generation status.',
        tags: ['LLM orchestration', 'GraphQL Subscriptions', 'Prompt engineering'],
        challenge: 'Kept the UI honest during multi-minute generations — real-time status, retries, and clear failure states.',
        image: '/projects_images/monitor-mate-dashboard.png'
      },
      {
        title: 'Medisync - Doctor Appointment Booking System',
        desc: 'A full-stack web application designed to streamline the process of booking medical appointments online.',
        tags: ['ReactJS', 'NodeJS', 'MongoDB', 'Express.js'],
        challenge: 'Streamlined appointment booking and scheduling by implementing role-based access, real-time availability, and efficient doctor–patient management in a responsive full-stack platform.',
        image: '/projects_images/Medisync.png'
      },
      {
        title: 'AI Ebooks Generator',
        desc: 'An AWS Lambda service that renders HTML, generates PDFs with headless Chromium, and delivers secure, downloadable files via S3.',
        tags: ['AWS Lambda', 'Puppeteer', 'S3', 'Performance'],
        challenge: "Got headless Chromium running reliably inside Lambda's size and memory constraints.",
        image: '/projects_images/aie.png'
      },
    ],
  },
  GALLERY_DATA: {
    sheetTitle: 'Field Photos',
    sheetTag: 'Arrows cycle photos · Details flips the card',
    backBtn: '← Back to photos',
    entries: [
      {
        tag: 'Workplace', title: 'Perception System', subtitle: 'Full Stack Developer — current',
        photos: ['/work_images/perception/ps1.jpeg', '/work_images/perception/ps4.jpeg', '/work_images/perception/ps3.jpeg'],
        back: 'Working as a Full Stack Developer / Associate Software Engineer, contributing to the development, enhancement, and maintenance of production-level web applications using React.js, Node.js, and AWS services.'
      },
      {
        tag: 'Hackathons', title: 'Various Hackathons', subtitle: 'Backend Developer Intern',
        photos: ['/work_images/hackathons/img1.png','/work_images/hackathons/img2.png', '/work_images/hackathons/img3.png'],
        back: 'Participated in various hackathons throughout my college journey, where I learned the value of teamwork, collaboration, and working together to solve problems.'
      },
      {
        tag: 'Internship', title: 'Adani Green Energy', subtitle: 'Summer Intern',
        photos: ['/work_images/adani/ada2.jpeg', '/work_images/adani/ada1.jpeg', '/work_images/adani/ada3.jpeg', '/work_images/adani/ada4.jpeg', '/work_images/adani/ada5.jpeg', '/work_images/adani/ada6.jpeg', '/work_images/adani/ada7.jpeg'],
        back: 'Contribute to the development and maintenance of Solar Assest Data Managment Platform, contributring towared backend development and maintence of production-grade API\'s  '
      },
    ],
  },
  DEBUG_LOG_DATA: {
    title:'Debug Log',
    subtitleFirst:'Issues traced',
    subtitleLast:'resolved',
    logItems: [
      "Large GraphQL payload limitations",
      "CloudFront caching misconfiguration",
      "S3 bucket & object permissions",
      "Lambda deployment package size",
      "CORS across API and CDN layers",
      "Puppeteer stability on AWS Lambda",
      "Git cherry-pick conflicts",
      "Next.js build failures",
      "Authentication flow edge cases",
      "AWS IAM policy scoping",
    ]


  },
  FOOTER_DATA: {
    title: 'Contact',
    tag: 'Open to full-time roles',
    heading: "Building cloud-native, AI-powered products — let's talk about where I'd fit.",
    emailButton: 'Email me →',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    basedInLabel: 'Based in',
    location: 'India',
    statusLabel: 'Status',
    status: 'Open to opportunities',
  }
};

export const DE = {
  NAV_BAR_DATA: {
    title: `RAHIL-SAIYED / PORTFOLIO`,
    systems: "Systeme",
    timeLines: "Zeitstrahl",
    builds: "Baut",
    contact: "Kontakt",
  },
  SKILLS_DATA: {
    sheetTitle: 'Systeme & Werkzeuge',
    sheetTag: 'Komponentenlegende',
  },
  EXPERIENCE_DATA: {
    sheetTitle: 'Erfahrungszeitstrahl',
    sheetTag: 'Badge anklicken zum Zertifikat herunterladen',
    challengeLabel: 'Gelöste Herausforderung',
    backHint: '← Klicken zum Zurückgehen',
    confidential: 'Vertraulich',
    entries: [
      {
        role: 'Full Stack Entwickler', company: 'Perception System', badge: 'Aktuell', current: true,
        desc: 'Entwicklung von Produktionsfunktionen über den gesamten Stack — React/Next.js-Oberflächen, Node.js- und Express-APIs sowie AWS Amplify GraphQL-Schemas mit Live-Subscriptions.',
        bullets: [
          'KI-gestützte Funktionen entwickelt und ausgeliefert: KI-generierte eBooks, LLM-basierte HTML-Generierung und Bildgenerierungs-Pipelines.',
          'Eine serverlose PDF-Pipeline auf AWS Lambda mit Puppeteer und Headless Chromium sowie S3-Auslieferung aufgebaut.',
          'Cloud-Infrastruktur verantwortet — CloudFront-CDN-Konfiguration, IAM-Berechtigungen, Presigned URLs und CORS.',
          'Produktionsprobleme behoben, die GraphQL-Payload-Limits, Lambda-Paketierung und Next.js-Build-Fehler umfassten.',
        ],
        certificatePath: ''
      },
      {
        role: 'Backend-Entwickler Praktikant', company: 'Mayora Infotech', badge: 'Praktikum', current: false,
        desc: 'Fokus auf Backend-Grundlagen — Aufbau und Pflege von REST-APIs mit Node.js und Express sowie Datenbankdesign und CRUD-Operationen.',
        bullets: [],
        certificatePath: 'Rahil_InternshipCertificate.pdf'
      },
      {
        role: 'Sommerpraktikant', company: 'Adani Green Energy', badge: 'Praktikum', current: false,
        desc: 'Frühe praktische Erfahrung mit Softwareentwicklungs-Workflows, Versionskontrolle und kollaborativen Engineering-Praktiken.',
        bullets: [],
        certificatePath: 'ScannedDocument.pdf'
      },
    ],
  },
  PROJECTS_DATA: {
    sheetTitle: 'Ausgewählte Projekte',
    sheetTag: 'Karte anklicken für die gelöste Herausforderung',
    challengeLabel: 'Gelöste Herausforderung',
    backHint: '← Klicken zum Zurückgehen',
    confidential: 'Vertraulich',
    entries: [
      {
        title: 'Lugelo Platform',
        desc: 'Eine Produktionsplattform für KI-eBook-Generierung, interaktive Bilderbücher, VR-Erlebnisse und ein vollständiges Benutzer-Dashboard für die Medienverwaltung.',
        tags: ['React', 'Node.js', 'AWS', 'GraphQL', 'DynamoDB', 'S3', 'CloudFront'],
        challenge: 'Frontend-Zustand über lang laufende KI-Generierungsjobs hinweg synchronisiert — ohne Polling, mit GraphQL-Subscriptions.',
        link: 'http://lugelo.com/', image: '/projects_images/lgl-img.png'
      },
      {
        title: 'Monitor Mate',
        desc: 'Ein KI-Workflow, der vollständige HTML-Bücher über LLMs generiert und den Generierungsstatus verfolgt.',
        tags: ['LLM orchestration', 'GraphQL Subscriptions', 'Prompt engineering'],
        challenge: 'Die UI während mehrminütiger Generierungen konsistent gehalten — Echtzeit-Status, Wiederholungen und klare Fehlerzustände.',
        image: '/projects_images/monitor-mate-dashboard.png'
      },
      {
        title: 'Medisync - Arzttermin-Buchungssystem',
        desc: 'Eine Full-Stack-Webanwendung zur Vereinfachung der Online-Buchung von Arztterminen.',
        tags: ['ReactJS', 'NodeJS', 'MongoDB', 'Express.js'],
        challenge: 'Terminbuchung und -planung optimiert durch rollenbasierte Zugriffskontrolle, Echtzeit-Verfügbarkeit und effizientes Arzt-Patienten-Management.',
        image: '/projects_images/Medisync.png'
      },
      {
        title: 'KI-eBook-Generator',
        desc: 'Ein AWS-Lambda-Dienst, der HTML rendert, PDFs mit Headless Chromium generiert und sichere, herunterladbare Dateien über S3 bereitstellt.',
        tags: ['AWS Lambda', 'Puppeteer', 'S3', 'Performance'],
        challenge: 'Headless Chromium zuverlässig innerhalb der Größen- und Speicherbeschränkungen von Lambda zum Laufen gebracht.',
        image: '/projects_images/aie.png'
      },
    ],
  },
  GALLERY_DATA: {
    sheetTitle: 'Feldfotos',
    sheetTag: 'Pfeile wechseln Fotos · Details dreht die Karte',
    backBtn: '← Zurück zu den Fotos',
    entries: [
      {
        tag: 'Arbeitsplatz', title: 'Perception System', subtitle: 'Full Stack Entwickler — aktuell',
        photos: ['/work_images/perception/ps1.jpeg', '/work_images/perception/ps4.jpeg', '/work_images/perception/ps3.jpeg'],
        back: 'Wo auch immer Sie KI-eBooks, PDF-Pipelines oder den Schreibtisch, von dem aus Sie alles gebaut haben, verschickt haben — ersetzen Sie diesen Text durch die echte Geschichte hinter den Fotos.'
      },
      {
        tag: 'Praktikum', title: 'Mayora Infotech', subtitle: 'Backend-Entwickler Praktikant',
        photos: ['', ''],
        back: 'Ein Teamfoto, ein Zertifikat und ein Screenshot Ihrer ersten bereitgestellten API — stapeln Sie alles hier.'
      },
      {
        tag: 'Praktikum', title: 'Adani Green Energy', subtitle: 'Sommerpraktikant',
        photos: ['/work_images/adani/ada2.jpeg', '/work_images/adani/ada1.jpeg', '/work_images/adani/ada3.jpeg', '/work_images/adani/ada4.jpeg', '/work_images/adani/ada5.jpeg', '/work_images/adani/ada6.jpeg', '/work_images/adani/ada7.jpeg'],
        back: 'Ihr erster Einblick in ein echtes Ingenieurteam. Fügen Sie Fotos vom Standortbesuch, dem Büro und der Abschlusspräsentation ein.'
      },
    ],
  },
  HERO_DATA:{
    designation:'Full Stack Entwickler – Cloud',
    aiSystems:'AI Systeme',
    title:'Ich entwickle Produkte von A bis Z —',
    title2:'Schnittstelle zur Infrastruktur.',
    subject:'React und Node.js bilden die vorderste Front, GraphQL und AWS Lambda bilden den Hintergrund, und KI wird in den Workflow integriert, sobald sie sich als sinnvoll erweist. Aktuell werden bei Perception System produktive Funktionen bereitgestellt.',
    button1:'Builds ansehen ↓',
    button2:'Nehmen Sie Kontakt auf'
  },
  DEBUG_LOG_DATA: {
    title: 'Debug-Protokoll',
    subtitleFirst: 'Probleme analysiert',
    subtitleLast: 'gelöst',
    logItems: [
      "Einschränkungen bei großen GraphQL-Payloads",
      "Fehlkonfiguration des CloudFront-Cachings",
      "S3-Bucket- & Objektberechtigungen",
      "Größe des Lambda-Deployment-Pakets",
      "CORS über API- und CDN-Ebenen hinweg",
      "Stabilität von Puppeteer auf AWS Lambda",
      "Konflikte beim Git Cherry-Pick",
      "Fehlgeschlagene Next.js-Builds",
      "Randfälle im Authentifizierungsablauf",
      "Eingrenzung von AWS-IAM-Richtlinien",
    ]
  },
  FOOTER_DATA: {
    title: 'Kontakt',
    tag: 'Offen für Vollzeitstellen',
    heading: 'Ich entwickle cloudnative, KI-gestützte Produkte — lassen Sie uns darüber sprechen, wo ich passen würde.',
    emailButton: 'E-Mail senden →',
    emailLabel: 'E-Mail',
    phoneLabel: 'Telefon',
    basedInLabel: 'Standort',
    location: 'Indien',
    statusLabel: 'Status',
    status: 'Offen für neue Möglichkeiten',
  }
};
