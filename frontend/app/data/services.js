// Заглушка данных для блока "Услуги"
// Позже заменить на запрос к Strapi: /api/services

export const services = [
  {
    id: 1,
    title: 'Аутстаффинг',
    description: 'Предоставление разработчиков, дизайнеров, аналитиков в команду клиента на любой срок.',
    icon: 'staff',
    accent: 'blue',
  },
  {
    id: 2,
    title: 'Аутсорсинг проектов',
    description: 'Разработка под ключ — полный цикл от аналитики и дизайна до релиза и поддержки.',
    icon: 'rocket',
    accent: 'red',
  },
  {
    id: 3,
    title: 'Техническое консультирование',
    description: 'Архитектурный аудит, код-ревью, выбор технологического стека и оценка рисков.',
    icon: 'consult',
    accent: 'purple',
  },
  {
    id: 4,
    title: 'Поддержка и сопровождение',
    description: 'Техническая поддержка продуктов, мониторинг производительности, обновления.',
    icon: 'shield',
    accent: 'blue',
  },
  {
    id: 5,
    title: 'Мобильная разработка',
    description: 'Приложения под iOS и Android, кроссплатформенные решения на React Native и Flutter.',
    icon: 'mobile',
    accent: 'orange',
  },
  {
    id: 6,
    title: 'Облачные решения',
    description: 'DevOps, облачная инфраструктура, CI/CD пайплайны, микросервисная архитектура.',
    icon: 'cloud',
    accent: 'green',
  },
]
