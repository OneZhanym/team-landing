<template>
  <section id="team" class="py-16 lg:py-24 px-6 lg:px-[60px] bg-surface-alt">
    <div class="max-w-container mx-auto">

      <div class="text-center max-w-[620px] mx-auto mb-10 lg:mb-14">
        <div class="flex items-center justify-center gap-2.5 mb-3.5">
          <div class="w-2 h-2 rounded-full bg-blue"></div>
          <div class="text-xs font-bold text-blue tracking-[2px] uppercase">Команда</div>
        </div>
        <h2 class="font-heading font-extrabold text-[clamp(28px,3.5vw,44px)] tracking-[-1.5px] leading-[1.1] text-ink mb-3.5">
          Познакомьтесь с нашей командой
        </h2>
        <p class="text-base text-ink-3 leading-[1.75]">
          Наши IT-специалисты — это те самые профессионалы, чей труд в аутстаф-проектах помогает нам финансировать развитие клиники и делать медицину лучше.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="member in team"
          :key="member.id"
          :ref="setRef"
          class="reveal bg-white border border-border rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-card-hover"
        >
          <div class="h-[140px] flex items-center justify-center" :class="photoBg[member.theme]">
            <img v-if="member.photo" :src="member.photo" :alt="member.name" class="w-full h-full object-cover">
            <div v-else class="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
              <svg class="w-7 h-7 fill-none" stroke-width="1.5" viewBox="0 0 24 24" :class="iconColor[member.theme]">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
            </div>
          </div>

          <div class="p-4 text-center">
            <div class="font-heading text-[15px] font-bold text-ink mb-0.5">{{ member.name }}</div>
            <div class="text-[10px] font-bold text-blue uppercase tracking-wide mb-3">{{ member.role }}</div>
            <div class="text-[12px] text-ink-3 leading-[1.5] mb-4">{{ member.description }}</div>
            
            <div class="flex flex-wrap gap-1.5 justify-center mb-4">
              <span v-for="skill in member.skills" :key="skill" class="bg-surface-alt border border-border rounded-full px-2 py-0.5 text-[10px] font-semibold text-ink-3">
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
import { team } from '~/data/team'
import { useRevealGroup } from '~/composables/useReveal'

const setRef = useRevealGroup(80)

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