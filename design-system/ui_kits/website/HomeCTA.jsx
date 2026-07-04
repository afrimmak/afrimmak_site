// Afrimmak — Two-up CTA section at the bottom of the homepage.
// "Apply" for young Gambians; "Partner / Donate" for funders & supporters.

function HomeCTA({ onDonate }) {
  return (
    <section>
      <div className="afr-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {/* For applicants */}
          <a href="programmes.html" style={{
            background: 'var(--afr-blue)', color: 'white',
            borderRadius: 32, padding: 40, textDecoration: 'none',
            display: 'flex', flexDirection: 'column', gap: 16,
            boxShadow: '0 16px 40px rgba(0,72,168,0.28)',
            position: 'relative', overflow: 'hidden',
            transition: 'transform 220ms var(--ease-out)',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.currentTarget.style.transform = ''}
          >
            <div style={{
              position: 'absolute', right: -80, top: -80, width: 280, height: 280, borderRadius: '50%',
              background: 'radial-gradient(closest-side, rgba(111,197,46,0.35), transparent 70%)',
            }} />
            <div className="eyebrow" style={{ color: 'var(--green-300)' }}>For young Gambians</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 36, lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0, color: 'white', position: 'relative' }}>
              Ready to join a programme?
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, margin: 0, color: 'rgba(255,255,255,0.88)', maxWidth: 380, position: 'relative' }}>
              Applications take a few minutes. You don't need experience — just curiosity and the willingness to show up.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 8, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, position: 'relative' }}>
              Apply now
              <i data-lucide="arrow-right" className="icon"></i>
            </div>
          </a>

          {/* For supporters */}
          <div style={{
            background: 'white', border: '2px solid var(--ink-100)',
            borderRadius: 32, padding: 40,
            display: 'flex', flexDirection: 'column', gap: 16,
          }}>
            <div className="eyebrow" style={{ color: 'var(--afr-red)' }}>For supporters</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 36, lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0, color: 'var(--ink-900)' }}>
              Help us reach the next young person.
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, margin: 0, color: 'var(--ink-700)', maxWidth: 380 }}>
              We're looking for partners, mentors, and donors who want to be part of building something good in The Gambia from the ground up.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
              <button className="btn btn-primary" onClick={onDonate}>
                Donate
                <i data-lucide="heart-handshake" className="icon"></i>
              </button>
              <a href="partners.html" className="btn btn-ghost">
                Partner with us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.HomeCTA = HomeCTA;
