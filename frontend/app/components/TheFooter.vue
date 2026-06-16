<template>
  <footer class="bg-ink px-6 py-10 lg:px-[60px] lg:pt-14 lg:pb-7">
    <div v-if="pageData" class="max-w-container mx-auto">

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-8 mb-10">
        
        <div class="flex flex-col">
          <div class="flex items-center gap-2.5 mb-3">
            <div class="w-[38px] h-[38px] rounded-[10px] bg-grad-accent flex items-center justify-center font-heading font-extrabold text-white text-sm">
              IT
            </div>
            <div>
              <div class="font-heading font-extrabold text-[17px] text-white">
                {{ pageData.company_name }}
              </div>
              <div class="text-[9px] text-white/30 tracking-[2px] uppercase">IT Staffing Company</div>
            </div>
          </div>
          <p class="text-[13px] text-white/35 leading-[1.7] max-w-[220px]">
            {{ pageData.footer_description }}
          </p>
        </div>

        <div v-for="col in localizedColumns" :key="col.title">
          <h5 class="text-[10px] font-bold text-white/30 tracking-[1.5px] uppercase mb-4">{{ col.title }}</h5>
          <ul class="flex flex-col gap-2">
            <li v-for="link in col.links" :key="link.label">
              <a :href="link.href" class="text-[13px] font-medium text-white/45 hover:text-white/90 transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/[0.08] text-center md:text-left">
        <div class="text-[11px] text-white/25">
          © 2026 {{ pageData.company_name }}. {{ t.allRights }}
        </div>
        <div class="flex items-center gap-1.5 text-[11px] text-white/30">
          <span class="text-red-light">—</span>
          {{ t.donationNotice }} {{ pageData.clinic_name }}
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { computed, watch } from 'vue'

const { locale } = useI18n()
const { find } = useStrapi()

// 1. Получаем глобальные данные компании из Strapi v5
// Добавляем [locale] вторым аргументом, чтобы Nuxt создавал уникальный кэш под каждый язык
const { data: response, refresh } = await useAsyncData(
  'homepage-footer-data',
  () => find('homepage', { locale: locale.value }),
  { watch: [locale] } 
)
const pageData = computed(() => response.value?.data)

// КРИТИЧЕСКИЙ ХУК: Следим за сменой языка и принудительно обновляем данные из Strapi
watch(locale, () => {
  refresh()
})

// 2. Локальный мини-словарь для служебных фраз нижней панели футера
const translations = {
  ru: { allRights: 'Все права защищены.', donationNotice: 'Часть дохода направляется в' },
  en: { allRights: 'All rights reserved.', donationNotice: 'Part of the revenue goes to' },
  'zh-CN': { allRights: '保留所有权利。', donationNotice: '部分项目营收将直接捐赠予' }
}
const t = computed(() => translations[locale.value] || translations.ru)

// 3. Формируем реактивную навигационную структуру на основе выбранного языка и контактов из админки
const localizedColumns = computed(() => {
  const email = pageData.value?.contact_email || 'hello@company.com'
  const phone = pageData.value?.contact_phone || '+996 700 000 000'
  const cleanPhone = phone.replace(/[^0-9+]/g, '') // Очистка телефона для ссылки tel:

  if (locale.value === 'en') {
    return [
      {
        title: 'Company',
        links: [
          { label: 'About Us', href: '#about' },
          { label: 'Mission', href: '#mission' },
          { label: 'Team', href: '#team' },
          { label: 'Clinic', href: '#clinic' }
        ]
      },
      {
        title: 'Services',
        links: [
          { label: 'Outstaffing', href: '#services' },
          { label: 'Outsourcing', href: '#services' },
          { label: 'Technologies', href: '#tech' },
          { label: 'Cases', href: '#cases' }
        ]
      },
      {
        title: 'Contacts',
        links: [
          { label: 'Contact Us', href: '#contact' },
          { label: email, href: `mailto:${email}` },
          { label: phone, href: `tel:${cleanPhone}` }
        ]
      }
    ]
  }

  if (locale.value === 'zh-CN') {
    return [
      {
        title: '企业信息',
        links: [
          { label: '关于我们', href: '#about' },
          { label: '社会使命', href: '#mission' },
          { label: '核心专家', href: '#team' },
          { label: '公益医疗', href: '#clinic' }
        ]
      },
      {
        title: '业务范围',
        links: [
          { label: '技术人员外包', href: '#services' },
          { label: '全周期外包', href: '#services' },
          { label: '核心技术', href: '#tech' },
          { label: '业务案例', href: '#cases' }
        ]
      },
      {
        title: '业务咨询',
        links: [
          { label: '在线留言', href: '#contact' },
          { label: email, href: `mailto:${email}` },
          { label: phone, href: `tel:${cleanPhone}` }
        ]
      }
    ]
  }

  // Дефолтная русская версия
  return [
    {
      title: 'Компания',
      links: [
        { label: 'О нас', href: '#about' },
        { label: 'Миссия', href: '#mission' },
        { label: 'Команда', href: '#team' },
        { label: 'Clinic', href: '#clinic' } // Если секция в макете называется клиника
      ]
    },
    {
      title: 'Услуги',
      links: [
        { label: 'Аутстаффинг', href: '#services' },
        { label: 'Аутсорсинг', href: '#services' },
        { label: 'Технологии', href: '#tech' },
        { label: 'Кейсы', href: '#cases' }
      ]
    },
    {
      title: 'Контакты',
      links: [
        { label: 'Написать нам', href: '#contact' },
        { label: email, href: `mailto:${email}` },
        { label: phone, href: `tel:${cleanPhone}` }
      ]
    }
  ]
})
</script>