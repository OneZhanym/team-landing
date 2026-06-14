// Заглушка данных для блока "Команда"
// Позже заменить на запрос к Strapi: /api/team-members

export const team = [
  {
    id: 1,
    name: '[Имя Фамилия]',
    role: 'CEO & Co-founder',
    description: 'Краткое описание роли и опыта.',
    skills: ['Leadership', 'Strategy'],
    photo: null, // url из Strapi
    theme: 'blue',
    socials: { in: '#', tg: '#' },
  },
  {
    id: 2,
    name: '[Имя Фамилия]',
    role: 'CTO',
    description: 'Краткое описание роли и опыта.',
    skills: ['Vue.js', 'Node.js'],
    photo: null,
    theme: 'purple',
    socials: { in: '#', gh: '#' },
  },
  {
    id: 3,
    name: '[Имя Фамилия]',
    role: 'Lead Designer',
    description: 'Краткое описание роли и опыта.',
    skills: ['Figma', 'UI/UX'],
    photo: null,
    theme: 'red',
    socials: { in: '#', be: '#' },
  },
  {
    id: 4,
    name: '[Имя Фамилия]',
    role: 'Head of Clinic',
    description: 'Краткое описание роли и опыта.',
    skills: ['Medicine', 'Management'],
    photo: null,
    theme: 'green',
    socials: { in: '#', tg: '#' },
  },
]
