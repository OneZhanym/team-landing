<!-- TheNav.vue -->
<!-- Документация: Главная навигационная панель с интеграцией переключателя языков и i18n переводов -->

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 h-[68px] bg-white/95 backdrop-blur-md border-b border-border">
    <div class="max-w-container mx-auto h-full px-6 lg:px-[60px] flex items-center justify-between">

      <!-- Логотип компании -->
      <div class="flex items-center gap-3">
        <div class="w-[38px] h-[38px] rounded-[10px] bg-grad-accent flex items-center justify-center font-heading font-extrabold text-white text-sm">
          IT
        </div>
        <div>
          <div class="font-heading font-extrabold text-[17px] text-ink leading-tight">[Название]</div>
          <div class="text-[9px] text-ink-4 tracking-[2px] uppercase">IT Staffing Company</div>
        </div>
      </div>

      <!-- Десктопные ссылки меню (видны только на больших экранах) -->
      <ul class="hidden lg:flex items-center list-none">
        <li v-for="link in links" :key="link.href">
          <!-- Используем $t() для динамического перевода названий пунктов меню -->
          <a :href="link.href" class="px-3.5 py-2 text-sm font-medium text-ink-3 hover:text-blue transition-colors">
            {{ $t(link.labelKey) }}
          </a>
        </li>
      </ul>

      <!-- Правая часть: Переключатель языков и Кнопка действия -->
      <div class="flex items-center gap-4">
        <!-- Встраиваем переключатель языков для ПК (скрыт на мобильных, виден на lg) -->
        <div class="hidden lg:block">
          <LangSwitcher />
        </div>

        <a href="#contact" class="hidden lg:inline-block whitespace-nowrap bg-grad-primary text-white text-sm font-bold px-6 py-2.5 rounded-lg shadow-glow hover:opacity-90 transition-opacity">
          {{ $t('nav.contact') }}
        </a>

        <!-- Гамбургер-кнопка для мобильного меню -->
        <button
          class="lg:hidden flex flex-col gap-1.5 p-1"
          @click="mobileOpen = !mobileOpen"
          aria-label="Открыть меню"
        >
          <span class="block w-[22px] h-[2px] bg-ink rounded-sm"></span>
          <span class="block w-[22px] h-[2px] bg-ink rounded-sm"></span>
          <span class="block w-[22px] h-[2px] bg-ink rounded-sm"></span>
        </button>
      </div>
    </div>

    <!-- Мобильное меню (выпадает при клике на гамбургер) -->
    <div
      v-show="mobileOpen"
      class="lg:hidden fixed top-[68px] left-0 right-0 bg-white border-b border-border px-6 pb-6 pt-4 flex flex-col gap-1"
    >
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="px-4 py-3 text-[15px] font-semibold text-ink-2 rounded-lg hover:bg-surface-alt transition-colors"
        @click="mobileOpen = false"
      >
        {{ $t(link.labelKey) }}
      </a>
      
      <a
        href="#contact"
        class="mt-2 bg-grad-primary text-white text-center font-bold rounded-lg py-3"
        @click="mobileOpen = false"
      >
        {{ $t('nav.contact') }}
      </a>

      <!-- Встраиваем переключатель языков внутрь мобильного меню -->
      <div class="mt-4 pt-4 border-t border-border flex justify-center">
        <LangSwitcher />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

// Управляет открытием/закрытием мобильной шторки
const mobileOpen = ref(false)
const links = [
  { href: '#about', labelKey: 'nav.about' },
  { href: '#services', labelKey: 'nav.services' },
  { href: '#tech', labelKey: 'nav.tech' },
  { href: '#cases', labelKey: 'nav.cases' },
  { href: '#team', labelKey: 'nav.team' },
  { href: '#clinic', labelKey: 'nav.clinic' },
  { href: '#contact', labelKey: 'nav.contact' },
]
</script>