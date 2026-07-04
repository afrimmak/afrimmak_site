// Afrimmak — Top Navigation
// Sticky transparent-on-hero, solid on scroll.

function Nav({ onDonate, current = 'Home' }) {
  const [scrolled, setScrolled] = React.useState(true);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home',       href: 'index.html' },
    { label: 'Programmes', href: 'programmes.html' },
    { label: 'About',      href: 'about.html' },
    { label: 'Partners',   href: 'partners.html' },
    { label: 'Contact',    href: 'contact.html' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'all 200ms var(--ease-out)',
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--ink-100)' : '1px solid transparent',
    }}>
      <div className="afr-container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 76,
      }}>
        <a href="index.html" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <img src="../../assets/afrimmak-wordmark.png" alt="Afrimmak"
               style={{ height: 42, display: 'block' }} />
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div style={{ display: 'flex', gap: 28 }}>
            {links.map(l => (
              <a key={l.label} href={l.href}
                 style={{
                   position: 'relative',
                   fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14,
                   color: current === l.label ? 'var(--blue-700)' : 'var(--ink-700)',
                   textDecoration: 'none',
                 }}>
                {l.label}
                {current === l.label && (
                  <span style={{
                    position: 'absolute', left: 0, right: 0, bottom: -24,
                    height: 3, background: 'var(--blue-500)',
                    borderRadius: 2,
                  }} />
                )}
              </a>
            ))}
          </div>
          <button className="btn" onClick={onDonate} style={{
            background: 'var(--afr-red)', color: 'white',
            padding: '10px 20px',
            boxShadow: '0 4px 12px rgba(238,42,48,0.25)',
          }}>Donate</button>
        </div>
      </div>
    </nav>
  );
}

window.Nav = Nav;
