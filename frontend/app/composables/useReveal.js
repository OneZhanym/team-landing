import { onMounted, onUnmounted, ref } from 'vue'

export function useReveal(options = {}) {
  const target = ref(null)

  onMounted(() => {
    if (!target.value) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(target.value)
    onUnmounted(() => observer.disconnect())
  })

  return target
}

export function useRevealGroup(staggerMs = 80) {
  const observer = ref(null)
  const els = []

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = els.indexOf(entry.target)
            const delay = idx >= 0 ? idx * staggerMs : 0
            setTimeout(() => entry.target.classList.add('is-visible'), delay)
            observer.value.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
  })

  onUnmounted(() => observer.value?.disconnect())

  function setRef(el) {
    if (el && !els.includes(el)) {
      els.push(el)
      observer.value?.observe(el)
    }
  }

  return setRef
}