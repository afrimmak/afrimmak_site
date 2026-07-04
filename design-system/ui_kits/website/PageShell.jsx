// Afrimmak — Common page chrome.
// Use on every page (Home, Programmes, About, Partners, Contact)
// to keep nav + footer + global state consistent.

function PageShell({ children, current }) {
  const [donate, setDonate] = React.useState(false);

  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  return (
    <div data-screen-label={current}>
      <Nav onDonate={() => setDonate(true)} current={current} />
      {children}
      <Footer />
      <DonateOverlay open={donate} onClose={() => setDonate(false)} />
    </div>
  );
}

// Small inner-page banner used as the top section of every non-home page.
function PageBanner({ eyebrow, title, intro, accent = 'var(--afr-blue)' }) {
  return (
    <header style={{
      paddingTop: 140, paddingBottom: 56,
      background: 'var(--paper-warm)',
      borderBottom: '1px solid var(--ink-100)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.5,
        backgroundImage: 'radial-gradient(rgba(0,72,168,0.06) 1.2px, transparent 1.2px)',
        backgroundSize: '28px 28px',
      }} />
      <div style={{
        position: 'absolute', top: -120, right: -120, width: 360, height: 360, borderRadius: '50%',
        background: `radial-gradient(closest-side, ${accent}22, transparent 70%)`,
      }} />
      <div className="afr-container" style={{ position: 'relative', maxWidth: 880 }}>
        <div className="eyebrow" style={{ marginBottom: 12 }}>{eyebrow}</div>
        <h1 className="h-display" style={{ margin: 0 }}>{title}</h1>
        {intro && <p className="lede" style={{ marginTop: 20, maxWidth: 680 }}>{intro}</p>}
      </div>
    </header>
  );
}

window.PageShell = PageShell;
window.PageBanner = PageBanner;
