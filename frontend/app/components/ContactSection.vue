<template>
  <section id="contact" class="py-24 px-6 lg:px-[60px] reveal">
    <div class="max-w-container mx-auto">
      <div class="text-center max-w-[620px] mx-auto mb-14 reveal">
        <div class="flex items-center justify-center gap-2.5 mb-3.5">
          <div class="w-2 h-2 rounded-full bg-blue"></div>
          <div class="text-xs font-bold text-blue tracking-[2px] uppercase">Контакты</div>
        </div>
        <h2 class="font-heading font-extrabold text-[clamp(28px,3.5vw,44px)] tracking-[-1.5px] leading-[1.1] text-ink mb-3.5">
          Начнём работу?
        </h2>
        <p class="text-base text-ink-3 leading-[1.75]">
          Напишите нам — ответим в течение рабочего дня и обсудим детали проекта.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <form class="bg-white border border-border rounded-xl4 p-9 shadow-card reveal" novalidate @submit.prevent="handleSubmit">
          <div class="font-heading text-xl font-extrabold text-ink mb-6">Оставить заявку</div>

          <div class="grid sm:grid-cols-2 gap-3.5 mb-3.5">
            <div>
              <label class="block text-xs font-bold text-ink-3 mb-2 tracking-wide uppercase">Имя</label>
              <input v-model="form.name" type="text" placeholder="Ваше имя" class="w-full bg-surface border-2 border-border rounded-[10px] px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-blue focus:bg-white">
            </div>
            <div>
              <label class="block text-xs font-bold text-ink-3 mb-2 tracking-wide uppercase">Компания</label>
              <input v-model="form.company" type="text" placeholder="Название компании" class="w-full bg-surface border-2 border-border rounded-[10px] px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-blue focus:bg-white">
            </div>
          </div>

          <div class="mb-3.5">
            <label class="block text-xs font-bold text-ink-3 mb-2 tracking-wide uppercase">Email</label>
            <input v-model="form.email" type="email" placeholder="email@company.com" class="w-full bg-surface border-2 border-border rounded-[10px] px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-blue focus:bg-white">
          </div>

          <div class="mb-3.5">
            <label class="block text-xs font-bold text-ink-3 mb-2 tracking-wide uppercase">Телефон</label>
            <input v-model="form.phone" type="tel" placeholder="+996 700 000 000" class="w-full bg-surface border-2 border-border rounded-[10px] px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-blue focus:bg-white">
          </div>

          <div class="mb-3.5">
            <label class="block text-xs font-bold text-ink-3 mb-2 tracking-wide uppercase">Услуга</label>
            <div class="relative">
              <select v-model="form.service" class="w-full bg-surface border-2 border-border rounded-[10px] pl-3.5 pr-10 py-2.5 text-sm outline-none cursor-pointer appearance-none">
                <option>Аутстаффинг</option>
                <option>Аутсорсинг</option>
                <option>Консультация</option>
                <option>Другое</option>
              </select>
              <svg class="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 stroke-ink-3 fill-none" stroke-width="2" viewBox="0 0 24 24">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
          </div>

          <div class="mb-6">
            <label class="block text-xs font-bold text-ink-3 mb-2 tracking-wide uppercase">Сообщение</label>
            <textarea v-model="form.message" placeholder="Расскажите о вашем проекте..." rows="4" class="w-full bg-surface border-2 border-border rounded-[10px] px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-blue focus:bg-white resize-y"></textarea>
          </div>

          <button
            type="submit"
            :disabled="status === 'sending'"
            class="w-full bg-grad-primary text-white text-[15px] font-bold py-3.5 rounded-[10px] shadow-glow hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {{ status === 'sending' ? 'Отправка...' : 'Отправить заявку' }}
          </button>

          <div v-if="status === 'success'" class="text-green text-center font-bold mt-4">Спасибо! Мы скоро свяжемся.</div>
          <div v-if="status === 'error'" class="text-red text-center font-bold mt-4">Что-то пошло не так. Попробуйте еще раз.</div>
        </form>

        <!-- Info -->
        <div class="reveal" style="transition-delay: 100ms;">
          <h3 class="font-heading font-extrabold text-[32px] tracking-[-1px] text-ink mb-3.5 leading-tight">
            Свяжитесь<br>с нами
          </h3>
          <p class="text-[15px] text-ink-3 leading-[1.8] mb-9">
            Ответим в течение рабочего дня и обсудим все детали вашего проекта.
          </p>

          <div class="flex flex-col gap-4 mb-8">
            <div class="flex items-center gap-3.5">
              <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-soft to-blue-mid flex items-center justify-center flex-shrink-0">
                <svg class="w-[18px] h-[18px] stroke-blue fill-none" stroke-width="1.5" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <div class="text-[11px] text-ink-4 uppercase tracking-wide font-bold">Email</div>
                <div class="text-sm font-semibold text-ink-2">[email@company.com]</div>
              </div>
            </div>
            <div class="flex items-center gap-3.5">
              <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-soft to-blue-mid flex items-center justify-center flex-shrink-0">
                <svg class="w-[18px] h-[18px] stroke-blue fill-none" stroke-width="1.5" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.88a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <div class="text-[11px] text-ink-4 uppercase tracking-wide font-bold">Телефон</div>
                <div class="text-sm font-semibold text-ink-2">[+X (XXX) XXX-XX-XX]</div>
              </div>
            </div>
            <div class="flex items-center gap-3.5">
              <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-soft to-blue-mid flex items-center justify-center flex-shrink-0">
                <svg class="w-[18px] h-[18px] stroke-blue fill-none" stroke-width="1.5" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div class="text-[11px] text-ink-4 uppercase tracking-wide font-bold">Адрес</div>
                <div class="text-sm font-semibold text-ink-2">[Город, улица, офис]</div>
              </div>
            </div>
          </div>

            <div class="flex gap-2.5">
            <a href="#" class="w-10 h-10 rounded-[10px] bg-surface-alt border border-border flex items-center justify-center text-ink-3 hover:bg-blue-soft hover:border-blue-mid hover:text-blue transition-colors">
              <svg class="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-[10px] bg-surface-alt border border-border flex items-center justify-center text-ink-3 hover:bg-blue-soft hover:border-blue-mid hover:text-blue transition-colors">
              <svg class="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M22.05 2.5 2.6 10.27c-1.34.54-1.33 1.3-.25 1.63l4.99 1.56 1.93 6.21c.24.66.4.93.82.93.42 0 .61-.19.85-.42l2.04-1.98 4.25 3.14c.78.43 1.34.21 1.53-.72L23.96 3.97c.27-1.17-.45-1.7-1.91-1.47zM8.22 13.06l9.36-5.9c.47-.28.9-.13.55.18l-7.99 7.21-.32 3.45-1.6-4.94z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-[10px] bg-surface-alt border border-border flex items-center justify-center text-ink-3 hover:bg-blue-soft hover:border-blue-mid hover:text-blue transition-colors">
              <svg class="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-1.749-.71-2.892-1.27-3.998-2.873-.302-.413-.302-.621-.05-.866.16-.156.354-.405.534-.605.18-.207.24-.36.36-.6.12-.241.06-.443-.03-.6-.09-.158-.81-1.95-1.11-2.66-.3-.71-.6-.6-.85-.6-.226 0-.49.06-.74.36-.25.301-.96 1.4-.96 1.4s-.18 1.95.81 3.59c.99 1.65 2.7 3.84 5.61 5.27 1.05.51 2.13.69 2.93.69.92 0 1.97-.27 2.27-.59.3-.32.45-.85.41-1.1-.04-.25-.2-.42-.5-.57z"/></svg>
            <a href="#" class="w-10 h-10 rounded-[10px] bg-surface-alt border border-border flex items-center justify-center text-ink-3 hover:bg-blue-soft hover:border-blue-mid hover:text-blue transition-colors">
         <svg class="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const status = ref('idle')

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  service: 'Аутстаффинг',
  message: ''
})

const socials = [
  { name: 'linkedin', href: '#', icon: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z"/>' },
  { name: 'telegram', href: '#', icon: '<path d="M22.05 2.5 2.6 10.27c-1.34.54-1.33 1.3-.25 1.63l4.99 1.56 1.93 6.21c.24.66.4.93.82.93.42 0 .61-.19.85-.42l2.04-1.98 4.25 3.14c.78.43 1.34.21 1.53-.72L23.96 3.97c.27-1.17-.45-1.7-1.91-1.47zM8.22 13.06l9.36-5.9c.47-.28.9-.13.55.18l-7.99 7.21-.32 3.45-1.6-4.94z"/>' },
  { name: 'whatsapp', href: '#', icon: '<path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-1.749-.71-2.892-1.27-3.998-2.873-.302-.413-.302-.621-.05-.866.16-.156.354-.405.534-.605.18-.207.24-.36.36-.6.12-.241.06-.443-.03-.6-.09-.158-.81-1.95-1.11-2.66-.3-.71-.6-.6-.85-.6-.226 0-.49.06-.74.36-.25.301-.96 1.4-.96 1.4s-.18 1.95.81 3.59c.99 1.65 2.7 3.84 5.61 5.27 1.05.51 2.13.69 2.93.69.92 0 1.97-.27 2.27-.59.3-.32.45-.85.41-1.1-.04-.25-.2-.42-.5-.57z"/>' },
]

async function handleSubmit() {
  status.value = 'sending'
  try {
    await $fetch(`${runtimeConfig.public.strapiUrl}/api/leads`, {
      method: 'POST',
      body: { data: form }
    })
    status.value = 'success'
    Object.keys(form).forEach(key => form[key] = '')
  } catch (e) {
    status.value = 'error'
    console.error(e)
  }
}
</script>