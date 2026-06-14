<template>
  <footer class="bg-ink px-6 py-10 lg:px-[60px] lg:pt-14 lg:pb-7">
    <div class="max-w-container mx-auto">

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-8 mb-10">
        <div class="flex flex-col">
          <div class="flex items-center gap-2.5 mb-3">
            <div class="w-[38px] h-[38px] rounded-[10px] bg-grad-accent flex items-center justify-center font-heading font-extrabold text-white text-sm">
              IT
            </div>
            <div>
              <div class="font-heading font-extrabold text-[17px] text-white">[Название]</div>
              <div class="text-[9px] text-white/30 tracking-[2px] uppercase">IT Staffing Company</div>
            </div>
          </div>
          <p class="text-[13px] text-white/35 leading-[1.7] max-w-[220px]">
            Наши IT-решения превращаются в реальную помощь для пациентов медицинской клиники.
          </p>
        </div>

        <div v-for="col in columns" :key="col.title">
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
        <div class="text-[11px] text-white/25">© 2026 [Название компании]. Все права защищены.</div>
        <div class="flex items-center gap-1.5 text-[11px] text-white/30">
          <span class="text-red-light">—</span>
          Часть дохода направляется в [Название клиники]
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
const columns = [
  {
    title: 'Компания',
    links: [
      { label: 'О нас', href: '#about' },
      { label: 'Миссия', href: '#mission' },
      { label: 'Команда', href: '#team' },
      { label: 'Клиника', href: '#clinic' },
    ],
  },
  {
    title: 'Услуги',
    links: [
      { label: 'Аутстаффинг', href: '#services' },
      { label: 'Аутсорсинг', href: '#services' },
      { label: 'Технологии', href: '#tech' },
      { label: 'Кейсы', href: '#cases' },
    ],
  },
  {
    title: 'Контакты',
    links: [
      { label: 'Написать нам', href: '#contact' },
      { label: 'hello@company.com', href: 'mailto:hello@company.com' },
      { label: '+996 700 000 000', href: 'tel:+996700000000' },
    ],
  },
]
</script>