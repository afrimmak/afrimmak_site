// Afrimmak — Featured programmes (homepage).
// Shows 2-3 featured programmes with a "Coming soon" pattern for placeholders.
// Real detail pages live on programmes.html.

function Programs() {
  const programmes = [
    {
      id: 'skills',
      tag: 'Programme 01',
      title: 'Youth Skills Training',
      body: 'Practical, employable skills for young Gambians — taught in short, hands-on workshops with local trainers and partner organisations.',
      status: 'Pilot cohort enrolling',
      tone: 'var(--afr-blue)',
      icon: 'wrench',
    },
    {
      id: 'ent',
      tag: 'Programme 02',
      title: 'Entrepreneurship Bootcamp',
      body: 'A short, intensive bootcamp for first-time founders. Idea to launch in a few focused weeks, with mentorship from established Gambian entrepreneurs.',
      status: 'Curriculum in development',
      tone: 'var(--green-600)',
      icon: 'rocket',
    },
    {
      id: 'mentor',
      tag: 'Programme 03',
      title: 'Mentorship Network',
      body: 'One-to-one and small-group mentorship pairing young people with diaspora and local mentors who have been where they want to go.',
      status: 'Mentors being onboarded',
      tone: 'var(--afr-red)',
      icon: 'heart-handshake',
    },
  ];

  return (
    <section style={{ background: 'var(--paper-warm)' }}>
      <div className="afr-container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap', marginBottom: 48 }}>
          <div style={{ maxWidth: 640 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Our Work</div>
            <h2 className="h2" style={{ margin: 0 }}>What we're building.</h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Three programmes designed for The Gambia, run with local partners,
              shaped by what young people actually need. Each one is short, practical,
              and built around real outcomes.
            </p>
          </div>
          <a href="programmes.html" className="btn btn-ghost">
            See all programmes
            <i data-lucide="arrow-right" className="icon"></i>
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {programmes.map(p => (
            <article key={p.id} style={{
              background: 'white',
              border: '1px solid var(--ink-100)',
              borderRadius: 24, padding: 28,
              display: 'flex', flexDirection: 'column', gap: 16,
              transition: 'all 220ms var(--ease-out)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(10,26,51,0.10)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: `${p.tone}14`, color: p.tone,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <i data-lucide={p.icon} style={{ width: 26, height: 26 }}></i>
                </div>
                <span style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'var(--ink-500)',
                }}>{p.tag}</span>
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 22, letterSpacing: '-0.01em',
                color: 'var(--ink-900)', margin: 0,
              }}>{p.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: 'var(--ink-700)', margin: 0 }}>
                {p.body}
              </p>
              <div style={{ marginTop: 'auto', paddingTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: 'rgba(232,155,18,0.14)', color: '#8A5A00',
                  padding: '4px 10px', borderRadius: 999,
                  fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 10,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: 3, background: '#E89B12' }} />
                  {p.status}
                </span>
                <a href="programmes.html" style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13,
                  color: p.tone, textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                }}>
                  Details
                  <i data-lucide="arrow-right" className="icon" style={{ width: 14, height: 14 }}></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Programs = Programs;
