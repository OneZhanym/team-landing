// Заглушка данных для блока "Технологии"
// Позже заменить на запрос к Strapi: /api/technologies

export const techStats = [
  { id: 1, value: '[N]+', label: 'Специалистов в команде', color: 'blue' },
  { id: 2, value: '[N]+', label: 'Проектов', color: 'pink' },
  { id: 3, value: '[N]+', label: 'Лет опыта', color: 'green' },
  { id: 4, value: '[N]+', label: 'Технологий в стеке', color: 'purple' },
]

export const techStack = [
  { id: 1, name: 'Vue.js', sub: 'Frontend', icon: 'Vue', theme: 'vue' },
  { id: 2, name: 'Nuxt.js', sub: 'Frontend', icon: 'Nuxt', theme: 'nuxt' },
  { id: 3, name: 'Tailwind', sub: 'CSS', icon: 'TW', theme: 'tailwind' },
  { id: 4, name: 'TypeScript', sub: 'Language', icon: 'TS', theme: 'typescript' },
  { id: 5, name: 'Strapi', sub: 'CMS', icon: 'CMS', theme: 'strapi' },
  { id: 6, name: 'Node.js', sub: 'Backend', icon: 'Node', theme: 'node' },
]
