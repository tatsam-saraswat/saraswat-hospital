// Reusable inline SVG icons. `className="ic"` inherits currentColor via CSS.

export function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.25 1z" />
    </svg>
  )
}

export function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  )
}

export function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 6v6l4 2M12 22A10 10 0 1 0 12 2a10 10 0 0 0 0 20z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function WhatsappIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm5.5 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .3-3.3-.7s-3.7-3.4-3.8-3.5-.9-1.2-.9-2.3.6-1.6.8-1.8.4-.3.6-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.4.5-.3.3c-.1.1-.3.3-.1.6l.9 1.4c.6.9 1.2 1.2 1.5 1.4l.5.2c.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.8.9c.2.1.4.2.5.3.1.3.1.7-.1 1.3z" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m9 12 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function EyeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 5c-5 0-9 4.5-10 7 1 2.5 5 7 10 7s9-4.5 10-7c-1-2.5-5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
    </svg>
  )
}

export function ToothIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M17 3c-1.7 0-2.6 1-4 1S10.7 3 9 3C6.7 3 5 5 5 8c0 2.4 1.1 4.1 1.8 6.4.6 2 .6 5.1 1.5 6.9.4.9 1.9.9 2.3-.1.6-1.9.5-4.2 2-4.2s1.4 2.3 2 4.2c.4 1 1.9 1 2.3.1.9-1.8.9-4.9 1.5-6.9C19.9 12.1 21 10.4 21 8c0-3-1.7-5-4-5z" />
    </svg>
  )
}

export function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m9 12 2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function UsersIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 21a8 8 0 0 1 16 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function EquipmentIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 3v18M5 8l7-5 7 5M4 21h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function HeartIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

export const HIGHLIGHT_ICONS = {
  shield: ShieldIcon,
  users: UsersIcon,
  equipment: EquipmentIcon,
  heart: HeartIcon,
}

// Brand logo: a refined eye (vision) above a tooth (dental) inside a squared
// emblem tile. `id` must be unique per instance so gradients don't collide.
export function BrandMark({ size = 44, id = 'brand', solid = false }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} role="img">
      {!solid && (
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#134a63" />
            <stop offset="1" stopColor="#0e8a86" />
          </linearGradient>
        </defs>
      )}
      <rect x="0" y="0" width="48" height="48" rx="4" fill={solid ? '#0e8a86' : `url(#${id})`} />
      {/* eye — vision */}
      <path d="M13 18 Q24 11 35 18 Q24 25 13 18 Z" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="24" cy="18" r="4.3" fill="#fff" />
      <circle cx="24" cy="18" r="1.9" fill="#0b5c73" />
      <circle cx="22.7" cy="16.8" r="0.8" fill="#fff" />
      {/* tooth — dental */}
      <path d="M29 30.4 C 27.7 29.1 25.8 28.8 24 28.8 C 22.2 28.8 20.3 29.1 19 30.4 C 17.8 31.6 17.8 33.4 18.2 34.9 C 18.55 36.2 19.1 36.9 19.4 38.2 C 19.7 39.5 19.7 40.7 20.4 41.2 C 21 41.6 21.6 41.1 21.8 40.1 C 22.05 38.9 22.2 37.5 24 37.5 C 25.8 37.5 25.95 38.9 26.2 40.1 C 26.4 41.1 27 41.6 27.6 41.2 C 28.3 40.7 28.3 39.5 28.6 38.2 C 28.9 36.9 29.45 36.2 29.8 34.9 C 30.2 33.4 30.2 31.6 29 30.4 Z" fill="#fff" />
    </svg>
  )
}
