export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export const defaultLang = 'fr';

export const ui = {
  fr: {
    'nav.home': 'Accueil',
    'nav.projects': 'Projets',
    'nav.cv': 'CV',
    'nav.contact': 'Contact',
    'sidebar.status': 'BUT 3 Informatique',
    'sidebar.specialization': 'Ingénierie Logicielle',
    'role.description': 'Étudiant ingénieur logiciel',
    'experiences.section': 'Expériences Professionnelles',
    'experiences.present': 'Présent',
    'experiences.repo': 'Dépôt de code',
    'experiences.report': 'Rapport de stage',
    'experiences.type.Internship': 'Stage',
    'experiences.type.Apprenticeship': 'Alternance',
    'footer.role': 'Étudiant BUT 3 Informatique',
    'footer.rights': 'Tous droits réservés',
    'footer.contact': 'Me contacter',
    'hero.title': 'Bonjour !',
    'hero.text':
      "Je suis étudiant en BUT 3 Informatique. Je construis ce portfolio pour présenter mes compétences en architecture logicielle et développement fullstack aux écoles d'ingénieurs.",
    'hero.button': 'Voir mes projets',
    'hero.imageAlt': 'Avatar de Lohan',
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.cv': 'Resume',
    'nav.contact': 'Contact',
    'role.description': 'Software Engineering Student',
    'experiences.section': 'Professional Experiences',
    'experiences.present': 'Present',
    'experiences.repo': 'Code repository',
    'experiences.report': 'Internship report',
    'experiences.type.Internship': 'Internship',
    'experiences.type.Apprenticeship': 'Apprenticeship',
    'footer.role': "CS Student (Bachelor's Year 3)",
    'footer.rights': 'All rights reserved',
    'footer.contact': 'Contact me',
    'sidebar.status': 'CS Student (Bachelor 3)',
    'sidebar.specialization': 'Software Engineering',
    'hero.title': 'Hello!',
    'hero.text':
      'I am a 3rd-year CS student. I built this portfolio to showcase my software architecture and fullstack development skills to engineering schools.',
    'hero.button': 'See my projects',
    'hero.imageAlt': "Lohan's Avatar",
  },
} as const;

export type Lang = keyof typeof ui;
export type TranslationKey = keyof (typeof ui)[typeof defaultLang];
