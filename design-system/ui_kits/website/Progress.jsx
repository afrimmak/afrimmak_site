// Afrimmak — Early-stage stats / impact strip.
// Honest "early estimates" framing — no fabricated continental-scale numbers.

function Progress() {
  const stats = [
    { value: '—', label: 'Youth trained', hint: 'pilot cohort starting', tone: 'var(--afr-blue)' },
    { value: '—', label: 'Businesses started', hint: 'launching with first cohort', tone: 'var(--green-600)' },
    { value: '—', label: 'Communities reached', hint: 'Greater Banjul to start', tone: 'var(--afr-red)' },
    { value: '—', label: 'Local partners',      hint: 'building the network', tone: 'var(--ink-900)' },
  ];

  return (
    <section>
      <div className="afr-container">
        <div style={{ textAlign: 'center', maxWidth: 720, marginLeft: 'auto', marginRight: 'auto', marginBottom: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Impact</div>
          <h2 className="h2" style={{ margin: 0 }}>
            Building proof, one cohort at a time. <DraftTag>Early estimates</DraftTag>
          </h2>
          <p className="lede" style={{ marginTop: 16 }}>
            We're brand new. These boxes will fill with real numbers as our first
            cohorts run. We'd rather show you nothing than show you fiction.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: 'white',
              border: '1px solid var(--ink-100)',
              borderRadius: 24,
              padding: 28,
              textAlign: 'left',
              boxShadow: '0 2px 6px rgba(10,26,51,0.06)',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: 12, right: 12,
                display: 'inline-flex', alignItems: 'center', gap: 4,
                background: 'rgba(232,155,18,0.14)', color: '#8A5A00',
                padding: '2px 8px', borderRadius: 999,
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 9, letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>
                <span style={{ width: 4, height: 4, borderRadius: 2, background: '#E89B12' }} />
                Pending
              </div>
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: `${s.tone}14`, color: s.tone,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20,
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 28 }}>{i + 1}</span>
              </div>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 900,
                fontSize: 44, lineHeight: 1, color: 'var(--ink-400, var(--ink-300))',
                letterSpacing: '-0.02em',
              }}>{s.value}</div>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15,
                marginTop: 10, color: 'var(--ink-900)',
              }}>{s.label}</div>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--ink-500)',
                marginTop: 4, lineHeight: 1.4,
              }}>{s.hint}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Progress = Progress;
