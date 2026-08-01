import { useEffect, useState } from 'react'
import { CLINIC, NAV_LINKS } from '../data'
import { BrandMark } from './Icons'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)
  const [active, setActive] = useState('#home')

  // Sticky-header shadow on scroll
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav link for the section in view
  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')
    if (!sections.length || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`header${stuck ? ' is-stuck' : ''}`} id="header">
      <div className="container header__inner">
        <a href="#home" className="brand" aria-label={`${CLINIC.fullName} home`}>
          <span className="brand__mark" aria-hidden="true">
            <BrandMark size={44} id="brand-header" />
          </span>
          <span className="brand__text">
            <strong>{CLINIC.name}</strong>
            <small>{CLINIC.tagline}</small>
          </span>
        </a>

        <nav className={`nav${open ? ' is-open' : ''}`} id="nav">
          <button className="nav__close" aria-label="Close menu" onClick={() => setOpen(false)}>&times;</button>
          <ul className="nav__list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav__link${active === link.href ? ' is-active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--primary nav__cta" onClick={() => setOpen(false)}>
            Book Appointment
          </a>
        </nav>

        <button className="nav__toggle" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
