<template>
  <section id="about" class="py-24 px-6 lg:px-[60px]">
    <div class="max-w-container mx-auto grid lg:grid-cols-2 gap-20 items-center">

      <!-- Image stack -->
      <div class="relative h-[420px]">
        <div class="absolute top-0 right-0 w-[74%] h-[280px] rounded-2xl border border-border bg-gradient-to-br from-[#EFF6FF] to-[#F5F3FF] flex flex-col items-center justify-center gap-2 text-ink-4">
          <svg class="w-7 h-7 stroke-current fill-none" stroke-width="1.5" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M3 9h18M9 21V9"/>
          </svg>
          <span class="text-xs font-medium">Фото команды / офиса</span>
        </div>
        <div class="absolute bottom-0 left-0 w-[54%] h-[200px] rounded-2xl border border-border bg-white shadow-card flex flex-col items-center justify-center gap-2 text-ink-4">
          <svg class="w-7 h-7 stroke-current fill-none" stroke-width="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
          </svg>
          <span class="text-xs font-medium">Фото команды</span>
        </div>
      </div>

      <!-- Text -->
      <div>
        <div class="flex items-center gap-2.5 mb-3.5">
          <div class="w-2 h-2 rounded-full bg-blue"></div>
          <div class="text-xs font-bold text-blue tracking-[2px] uppercase">О нас</div>
        </div>
        <h2 class="font-heading font-extrabold text-[clamp(28px,3.5vw,44px)] tracking-[-1.5px] leading-[1.1] text-ink mb-4">
          О НАС
        </h2>

        <div class="border-l-[3px] border-red pl-5 mb-7 space-y-3.5">
          <p class="text-[15px] text-ink-2 leading-[1.8]">
            [Описание компании — специализация на подборе IT-специалистов.]
          </p>
          <p class="text-[15px] text-ink-2 leading-[1.8]">
            [Опыт команды, работа на локальном и глобальном рынке.]
          </p>
          <p class="text-[15px] text-ink-2 leading-[1.8]">
            [Персонализированный подход к каждому клиенту.]
          </p>
        </div>

        <div class="flex flex-col">
          <div
            v-for="(step, i) in steps"
            :key="step.title"
            class="flex gap-4 py-4"
            :class="i !== steps.length - 1 ? 'border-b border-border' : ''"
          >
            <div class="w-7 h-7 rounded-lg bg-grad-primary flex-shrink-0 mt-0.5 flex items-center justify-center text-xs font-bold text-white font-heading">
              {{ i + 1 }}
            </div>
            <div>
              <div class="font-heading text-sm font-bold text-ink mb-0.5">{{ step.title }}</div>
              <div class="text-[13px] text-ink-3 leading-[1.55]">{{ step.description }}</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const steps = [
  { title: 'Анализ потребностей', description: 'Изучаем задачи бизнеса и подбираем оптимальный состав команды.' },
  { title: 'Подбор специалистов', description: 'Многоступенчатый отбор: техническое интервью и soft skills.' },
  { title: 'Запуск и сопровождение', description: 'Интегрируем команду в процессы, поддержка на всём протяжении.' },
  { title: 'Результат', description: 'Оцениваем эффективность и корректируем состав команды.' },
]
</script>
