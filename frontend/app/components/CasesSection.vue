<template>
  <section id="cases" class="py-24 px-6 lg:px-[60px]">
    <div class="max-w-container mx-auto">

      <div class="text-center max-w-[620px] mx-auto mb-14">
        <div class="flex items-center justify-center gap-2.5 mb-3.5">
          <div class="w-2 h-2 rounded-full bg-blue"></div>
          <div class="text-xs font-bold text-blue tracking-[2px] uppercase">Портфолио</div>
        </div>
        <h2 class="font-heading font-extrabold text-[clamp(28px,3.5vw,44px)] tracking-[-1.5px] leading-[1.1] text-ink mb-3.5">
          Примеры работ
        </h2>
        <p class="text-base text-ink-3 leading-[1.75]">
          [Реализованные проекты — результаты и кейсы наших клиентов.]
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-5">
        <div
          v-for="item in cases"
          :key="item.id"
          :ref="setRef"
          class="reveal rounded-3xl overflow-hidden flex flex-col min-h-[520px] pt-8 px-7 relative transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_56px_rgba(0,0,0,0.12)]"
          :class="cardBg[item.theme]"
        >
          <div class="font-heading font-extrabold text-2xl leading-[1.15] mb-3.5 text-[#0F172A]">
            {{ item.title }}
          </div>
          <div class="text-sm leading-[1.7] mb-8 max-w-[320px]" :class="descColor[item.theme]">
            {{ item.description }}
          </div>

          <div class="mt-auto relative flex justify-center items-end">
            <div class="absolute bottom-0 left-[10%] right-[10%] h-[60px] rounded-full blur-xl" :class="shadowColor[item.theme]"></div>

            <!-- Реальный скриншот, если есть -->
            <div v-if="item.image" class="w-[90%] rounded-t-2xl overflow-hidden relative z-10 shadow-[0_-8px_32px_rgba(0,0,0,0.15)] border border-white/60 border-b-0">
              <img :src="item.image" :alt="item.title" class="w-full block">
            </div>

            <!-- Плейсхолдер-мокап браузера -->
            <div v-else class="w-[90%] rounded-t-2xl overflow-hidden relative z-10 shadow-[0_-8px_32px_rgba(0,0,0,0.15)] border border-white/60 border-b-0">
              <div class="h-[26px] flex items-center gap-1.5 px-2.5 bg-[#F8FAFC] border-b border-[#E2E8F0]">
                <span class="w-[7px] h-[7px] rounded-full bg-[#EF4444]"></span>
                <span class="w-[7px] h-[7px] rounded-full bg-[#F59E0B]"></span>
                <span class="w-[7px] h-[7px] rounded-full bg-[#22C55E]"></span>
              </div>
              <div class="bg-white p-3 flex flex-col gap-1.5 min-h-[180px]">
                <div class="h-8 rounded-md" :class="headerBg[item.theme]"></div>
                <div class="h-[9px] rounded w-4/5 bg-[#F1F5F9]"></div>
                <div class="h-[9px] rounded w-3/5 bg-[#F1F5F9]"></div>
                <div class="grid grid-cols-2 gap-1.5 flex-1">
                  <div class="rounded-md min-h-[40px] bg-[#F8FAFC] border border-[#E2E8F0]"></div>
                  <div class="rounded-md min-h-[40px] bg-[#F8FAFC] border border-[#E2E8F0]"></div>
                  <div class="rounded-md min-h-[40px] bg-[#F8FAFC] border border-[#E2E8F0]"></div>
                  <div class="rounded-md min-h-[40px] bg-[#F8FAFC] border border-[#E2E8F0]"></div>
                </div>
                <div class="h-[9px] rounded w-[90%] bg-[#F1F5F9]"></div>
                <div class="h-[9px] rounded w-2/5 bg-[#F1F5F9]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { cases } from '~/data/cases'
import { useRevealGroup } from '~/composables/useReveal'

const setRef = useRevealGroup(100)

const cardBg = {
  purple: 'bg-[#E0DBFF]',
  mint:   'bg-[#C8F5E0]',
  sky:    'bg-[#BFE3FF]',
}
const descColor = {
  purple: 'text-[#3D2F8A]',
  mint:   'text-[#064E3B]',
  sky:    'text-[#0C4A6E]',
}
const shadowColor = {
  purple: 'bg-[rgba(109,79,220,0.25)]',
  mint:   'bg-[rgba(16,185,129,0.2)]',
  sky:    'bg-[rgba(14,165,233,0.2)]',
}
const headerBg = {
  purple: 'bg-gradient-to-r from-[#DDD6FE] to-[#EDE9FE]',
  mint:   'bg-gradient-to-r from-[#A7F3D0] to-[#D1FAE5]',
  sky:    'bg-gradient-to-r from-[#BAE6FD] to-[#E0F2FE]',
}
</script>