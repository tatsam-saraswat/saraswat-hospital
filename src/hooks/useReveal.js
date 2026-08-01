import { useLayoutEffect } from 'react'

// Fades `.reveal` elements in as they scroll into view.
// Anything already on-screen is revealed synchronously before paint so there
// is never a flash of blank content (and it degrades gracefully without JS).
export function useReveal() {
  useLayoutEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))
    if (!els.length) return

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const inView = (el) => {
      const r = el.getBoundingClientRect()
      return r.top < window.innerHeight && r.bottom > 0
    }

    // Reveal immediately (without animation) anything currently on screen.
    els.forEach((el) => {
      if (inView(el)) el.classList.add('is-instant')
    })

    // Observe the rest and animate them in as they scroll into view.
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el) => {
      if (!el.classList.contains('is-instant')) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
