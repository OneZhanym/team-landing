<template>
  <div class="bg-surface-alt border-y border-border py-14 px-6 lg:px-[60px]">
    <div class="max-w-container mx-auto">
      <div class="text-center text-[11px] text-ink-4 tracking-[2.5px] uppercase font-bold mb-9">
        Нам доверяют
      </div>
      <div class="flex flex-wrap items-center justify-center gap-5">
        <div
          v-for="partner in partners"
          :key="partner.id"
          class="w-40 h-20 bg-white border border-border rounded-2xl flex items-center justify-center px-5 py-3 transition-all hover:border-border-dark hover:shadow-card hover:-translate-y-0.5"
        >
          <img
            v-if="partner.logo"
            :src="partner.logo"
            :alt="partner.name"
            class="max-w-full max-h-full object-contain grayscale opacity-50 transition-all hover:grayscale-0 hover:opacity-100"
          >
          <div v-else class="flex flex-col items-center justify-center gap-1 w-full h-full">
            <svg class="w-[22px] h-[22px] stroke-ink-4 fill-none" stroke-width="1.5" viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="2"/>
              <path d="M3 7l9 6 9-6"/>
            </svg>
            <span class="text-[11px] font-semibold text-ink-4 tracking-wide">Логотип партнёра</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { partners } from '~/data/content'
</script>
