// Afrimmak — Testimonial section and partner strip for the homepage.
// Both designed to handle 0 → many real entries.

function Testimonials() {
  // Real entries should be filled in here as participant/partner quotes come in.
  // For early launch, show 1 placeholder slot + a clear "more coming" hint.
  const entries = []; // empty for now

  return (
    <section>
      <div className="afr-container">
        <div style={{ textAlign: 'center', maxWidth: 720, marginLeft: 'auto', marginRight: 'auto', marginBottom: 40 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Voices</div>
          <h2 className="h2" style={{ margin: 0 }}>What people are saying.</h2>
        </div>

        {entries.length === 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            <Placeholder kind="Quote" label="First participant quote"
              hint="Name, photo (with permission), and a 1–2 sentence quote about what they got from a programme."
              height={220} />
            <Placeholder kind="Quote" label="A partner endorsement"
              hint="A short, plain-spoken quote from a partner or sponsor. Speaker name + title."
              height={220} />
            <Placeholder kind="Quote" label="A graduate success story"
              hint="What did they do in the programme, and what did they go on to achieve? 2-3 sentences."
              height={220} />
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {entries.map((s, i) => (
              <article key={i} className="card" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <i data-lucide="quote" style={{ width: 28, height: 28, color: 'var(--green-500)' }}></i>
                <p style={{ fontFamily: 'var(--font-friendly)', fontWeight: 700, fontSize: 20, lineHeight: 1.35, color: 'var(--ink-900)', margin: 0 }}>
                  "{s.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto', paddingTop: 8 }}>
                  <div className="avatar"></div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14, color: 'var(--ink-900)' }}>{s.name}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--ink-500)' }}>{s.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function PartnerStrip() {
  // Real partner logos go here. Until then, show a friendly empty slot strip.
  const partners = []; // [{ name, logoSrc }]

  if (partners.length > 0) {
    return (
      <section className="tight" style={{ background: 'var(--paper-warm)' }}>
        <div className="afr-container">
          <div className="eyebrow" style={{ textAlign: 'center', marginBottom: 24 }}>In partnership with</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 0, border: '1px solid var(--ink-100)', borderRadius: 24, overflow: 'hidden', background: 'white' }}>
            {partners.map((p, i) => (
              <div key={p.name} style={{ padding: '28px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: (i % 6) < 5 ? '1px solid var(--ink-100)' : 'none' }}>
                <img src={p.logoSrc} alt={p.name} style={{ maxHeight: 36, maxWidth: '100%', objectFit: 'contain', opacity: 0.7 }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="tight" style={{ background: 'var(--paper-warm)' }}>
      <div className="afr-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 32, alignItems: 'center' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Partners</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.01em', margin: 0, color: 'var(--ink-900)' }}>
              Building our partner network.
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: 'var(--ink-700)', marginTop: 12, maxWidth: 360 }}>
              We're talking with schools, training providers, funders, and Gambian
              businesses who want to help. Want to be one of them?
            </p>
            <a href="partners.html" className="btn btn-ghost" style={{ marginTop: 16 }}>
              Partner with us
              <i data-lucide="arrow-right" className="icon"></i>
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {[1,2,3,4,5,6].map(n => (
              <Placeholder key={n} kind="Logo" label={`Partner ${n}`} dense height={88} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Testimonials = Testimonials;
window.PartnerStrip = PartnerStrip;
