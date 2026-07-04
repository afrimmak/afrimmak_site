// Afrimmak — Footer
// Includes Mendez Impact Foundation note + WhatsApp + Gambia address slot.

function Footer() {
  const cols = [
    { title: 'Explore', items: [
      { label: 'Programmes', href: 'programmes.html' },
      { label: 'About',      href: 'about.html' },
      { label: 'Partners',   href: 'partners.html' },
      { label: 'Contact',    href: 'contact.html' },
    ] },
    { title: 'Get Involved', items: [
      { label: 'Apply to a programme', href: 'programmes.html' },
      { label: 'Become a mentor',      href: 'partners.html' },
      { label: 'Partner with us',      href: 'partners.html' },
      { label: 'Donate',               href: '#donate' },
    ] },
  ];
  const SocialIcon = ({ name }) => {
    const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'currentColor' };
    if (name === 'Instagram') return (<svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>);
    if (name === 'Facebook')  return (<svg {...common}><path d="M13 22V12h3l.5-4H13V5.5c0-1.1.3-1.9 2-1.9h2.1V.2C16.8.1 15.6 0 14.2 0 11.2 0 9 1.8 9 5.2V8H6v4h3v10h4z"/></svg>);
    if (name === 'WhatsApp')  return (<svg {...common}><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.92c0 1.75.46 3.45 1.33 4.96L2 22l5.27-1.38a9.96 9.96 0 0 0 4.77 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.85 9.85 0 0 0 12.04 2zm5.79 14.05c-.24.68-1.42 1.3-1.97 1.34-.5.04-1.13.06-1.83-.11-.42-.1-.96-.27-1.66-.57-2.92-1.26-4.83-4.21-4.97-4.4-.15-.19-1.19-1.58-1.19-3.02 0-1.44.76-2.14 1.03-2.44.27-.3.6-.37.8-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.24.58.83 2.02.9 2.16.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.32.39-.45.52-.15.15-.31.31-.13.61.18.3.79 1.31 1.7 2.12 1.17 1.04 2.16 1.37 2.46 1.52.3.15.48.13.66-.08.18-.21.76-.89.96-1.2.2-.3.4-.25.67-.15.27.1 1.71.81 2 .96.3.15.5.22.57.34.07.13.07.73-.17 1.41z"/></svg>);
    return null;
  };
  return (
    <footer style={{ background: 'var(--ink-900)', color: 'rgba(255,255,255,0.78)', paddingTop: 72, paddingBottom: 32, position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.06,
        backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />
      <div className="afr-container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.1fr', gap: 40, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <img src="../../assets/afrimmak-wordmark.png" alt="Afrimmak"
                 style={{ height: 44, display: 'block', marginBottom: 18, filter: 'brightness(0) invert(1)' }} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, margin: 0, maxWidth: 320, color: 'rgba(255,255,255,0.78)' }}>
              Afrimmak equips young Gambians with practical skills, mentorship,
              and the confidence to build their futures.
            </p>
            <div style={{ marginTop: 20, padding: '14px 16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, maxWidth: 360 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--green-400)', marginBottom: 4 }}>
                A project of
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, color: 'white' }}>
                Mendez Impact Foundation
              </div>
            </div>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <div className="eyebrow" style={{ color: 'var(--green-400)', marginBottom: 16 }}>{c.title}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.items.map(it => (
                  <li key={it.label}>
                    <a href={it.href} style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.78)', textDecoration: 'none' }}>{it.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <div className="eyebrow" style={{ color: 'var(--green-400)', marginBottom: 16 }}>Get in touch</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.78)' }}>
              <a href="mailto:hello@afrimmak.org" style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <i data-lucide="mail" style={{ width: 16, height: 16, color: 'var(--green-400)' }}></i>
                hello@afrimmak.org
              </a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <i data-lucide="map-pin" style={{ width: 16, height: 16, color: 'var(--green-400)' }}></i>
                The Gambia
              </a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
              {['WhatsApp','Facebook','Instagram'].map(s => (
                <a key={s} href="#" aria-label={s} style={{
                  width: 38, height: 38, borderRadius: 999,
                  background: 'rgba(255,255,255,0.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.85)', transition: 'all 180ms',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--green-500)'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; }}
                >
                  <SocialIcon name={s} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          marginTop: 28,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16,
          fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.55)',
        }}>
          <div>© 2026 Afrimmak · A project of the Mendez Impact Foundation.</div>
          <div style={{ display: 'inline-flex', gap: 20 }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Privacy</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
