<template>
  <section id="team" class="py-16 lg:py-24 px-6 lg:px-[60px] bg-surface-alt">
    <div v-if="pageData && memberList.length" class="max-w-container mx-auto">

      <div class="text-center max-w-[620px] mx-auto mb-10 lg:mb-14">
        <div class="flex items-center justify-center gap-2.5 mb-3.5">
          <div class="w-2 h-2 rounded-full bg-blue"></div>
          <div class="text-xs font-bold text-blue tracking-[2px] uppercase">
            {{ pageData.team_badge }}
          </div>
        </div>
        <h2 class="font-heading font-extrabold text-[clamp(28px,3.5vw,44px)] tracking-[-1.5px] leading-[1.1] text-ink mb-3.5">
          {{ pageData.team_title }}
        </h2>
        <p class="text-base text-ink-3 leading-[1.75]">
          {{ pageData.team_description }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="member in memberList"
          :key="member.id"
          :ref="setRef"
          class="reveal bg-white border border-border rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-card-hover"
        >
          <div class="h-[140px] flex items-center justify-center" :class="photoBg[member.theme] || photoBg.blue">
            <img 
              v-if="member.photo" 
              :src="useStrapiMedia(member.photo.url)" 
              :alt="member.name" 
              class="w-full h-full object-cover"
            >
            <div v-else class="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
              <svg class="w-7 h-7 fill-none" stroke-width="1.5" viewBox="0 0 24 24" :class="iconColor[member.theme] || iconColor.blue">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
            </div>
          </div>

          <div class="p-4 text-center">
            <div class="font-heading text-[15px] font-bold text-ink mb-0.5">{{ member.name }}</div>
            <div class="text-[10px] font-bold text-blue uppercase tracking-wide mb-3">{{ member.role }}</div>
            <div class="text-[12px] text-ink-3 leading-[1.5] mb-4">{{ member.description }}</div>
            
            <div v-if="member.parsedSkills.length" class="flex flex-wrap gap-1.5 justify-center mb-4">
              <span 
                v-for="skill in member.parsedSkills" 
                :key="skill" 
                class="bg-surface-alt border border-border rounded-full px-2 py-0.5 text-[10px] font-semibold text-ink-3"
              >
                {{ skill }}
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed, watch } from 'vue'

const { locale } = useI18n()
const { find } = useStrapi()

// Подключаем хук reveal-анимации
const setRef = useRevealGroup(80)

// 1. Параллельный запрос к контенту страницы и карточкам сотрудников с картинками
const { data: response, refresh } = await useAsyncData(
  'homepage-team-data',
  async () => {
    const [pageRes, teamRes] = await Promise.all([
      find('homepage', { locale: locale.value }),
      find('team-members', { 
        locale: locale.value, 
        sort: 'id:asc',
        populate: ['photo'] // Важно: запрашиваем вложенную структуру медиафайла
      })
    ])
    return {
      page: pageRes.data,
      team: teamRes.data
    }
  }
)

const pageData = computed(() => response.value?.page)

// 2. Обработка списка команды: очищаем и бьем строку навыков в чистый массив
const memberList = computed(() => {
  if (!response.value?.team) return []
  
  return response.value.team.map(member => {
    // Безопасно парсим строку "Vue, Nuxt, TS" в массив ['Vue', 'Nuxt', 'TS']
    const parsedSkills = member.skills
      ? member.skills.split(',').map(s => s.trim()).filter(s => s.length > 0)
      : []

    return {
      ...member,
      parsedSkills
    }
  })
})

// Следим за изменениями языка интерфейса
watch(locale, () => {
  refresh()
})

// 3. Стили интерфейса из дизайн-системы твоего коллеги
const photoBg = {
  blue:   'bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE]',
  purple: 'bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE]',
  red:    'bg-gradient-to-br from-[#FEF2F2] to-[#FEE2E2]',
  green:  'bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7]',
}
const iconColor = {
  blue: 'stroke-blue', purple: 'stroke-purple', red: 'stroke-red', green: 'stroke-green',
}
</script>