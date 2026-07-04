// Afrimmak — Apply / Get Involved CTA section for the homepage.

function ApplyCTA({ onApply, onLearn }) {
  return (
    <section style={{ paddingTop: 24, paddingBottom: 96 }}>
      <div className="afr-container">
        <div style={{
          background: 'var(--afr-blue)',
          borderRadius: 32,
          padding: '64px 56px',
          color: 'white',
          display: 'grid', gridTemplateColumns: '1.2fr auto', gap: 32, alignItems: 'center',
          position: 'relative', overflow: 'hidden',
          boxShadow: '0 16px 40px rgba(0,72,168,0.28)',
        }}>
          <div style={{
            position: 'absolute', right: -120, top: -120, width: 360, height: 360, borderRadius: '50%',
            background: 'radial-gradient(closest-side, rgba(111,197,46,0.4), transparent 70%)',
          }} />
          <div style={{ position: 'relative' }}>
            <div className="eyebrow on-dark" style={{ marginBottom: 12 }}>First cohort · Enrolment open</div>
            <h2 className="h2" style={{ margin: 0, color: 'white' }}>
              Ready to get started?
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.55, color: 'rgba(255,255,255,0.88)', margin: 0, marginTop: 16, maxWidth: 540 }}>
              If you're a young person in The Gambia who wants in, we'd love to hear
              from you. Applications take about 10 minutes — we read every one.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, position: 'relative' }}>
            <button className="btn btn-white btn-lg" onClick={onApply}>
              Apply now
              <i data-lucide="arrow-right" className="icon"></i>
            </button>
            <button className="btn btn-lg" onClick={onLearn} style={{ background: 'transparent', border: '2px solid rgba(255,255,255,0.35)', color: 'white' }}>
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

window.ApplyCTA = ApplyCTA;
