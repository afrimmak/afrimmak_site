// Afrimmak — Application overlay (5-minute Google-Form-fits version).

function ApplyOverlay({ open, onClose }) {
  const [step, setStep] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);
  React.useEffect(() => { if (!open) { setStep(0); setSubmitted(false); } }, [open]);
  if (!open) return null;

  const steps = ['You', 'Why', 'Review'];

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 100,
      background: 'rgba(10,26,51,0.6)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
    }}>
      <div onClick={e=>e.stopPropagation()} style={{
        background: 'white', borderRadius: 24, maxWidth: 640, width: '100%',
        padding: 36, boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
      }}>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div style={{ width: 80, height: 80, borderRadius: 999, background: 'var(--green-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
              <i data-lucide="check-circle-2" style={{ width: 44, height: 44, color: 'var(--green-600)' }}></i>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 28, letterSpacing: '-0.02em', margin: 0, color: 'var(--ink-900)' }}>Your application is in.</h3>
            <p className="lede" style={{ marginTop: 12 }}>We read every one. You'll hear from us within 14 days.</p>
            <button className="btn btn-primary btn-lg" style={{ marginTop: 24 }} onClick={onClose}>Done</button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
              <div>
                <div className="eyebrow">Apply</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.01em', margin: 0, marginTop: 4 }}>
                  {step === 0 && 'Tell us about you'}
                  {step === 1 && 'Tell us why'}
                  {step === 2 && 'Review and submit'}
                </h3>
              </div>
              <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--ink-500)' }}>
                <i data-lucide="x" style={{ width: 24, height: 24 }}></i>
              </button>
            </div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 28 }}>
              {steps.map((s, i) => (<div key={s} style={{ flex: 1, height: 4, borderRadius: 2, background: i <= step ? 'var(--blue-500)' : 'var(--ink-100)' }} />))}
            </div>
            {step === 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <AField label="Full name" placeholder="Aisha Jallow" />
                <AField label="Phone (WhatsApp)" placeholder="+220 …" />
                <AField label="Email" placeholder="you@example.com" />
                <AField label="Age" placeholder="22" />
                <AField label="Where do you live?" placeholder="Banjul, Serrekunda…" />
                <ASelect label="Programme you want" options={['Youth Skills Training', 'Entrepreneurship Bootcamp', 'Mentorship Network', "I'm not sure yet"]} />
              </div>
            )}
            {step === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <ATextArea label="Why do you want to join Afrimmak?" placeholder="A few sentences in your own words." />
                <ATextArea label="What do you hope to do after the programme?" placeholder="Even a rough idea is fine." />
              </div>
            )}
            {step === 2 && (
              <div style={{ background: 'var(--bg-2)', borderRadius: 16, padding: 20, fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ink-700)', lineHeight: 1.6 }}>
                <strong style={{ color: 'var(--ink-900)' }}>Ready to send.</strong> Your draft is saved.
                Click submit and we'll get this in front of someone today.
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 28 }}>
              <button className="btn btn-ghost" onClick={() => step > 0 ? setStep(step-1) : onClose()}>
                {step === 0 ? 'Cancel' : 'Back'}
              </button>
              {step < 2 ? (
                <button className="btn btn-primary" onClick={() => setStep(step+1)}>Continue <i data-lucide="arrow-right" className="icon"></i></button>
              ) : (
                <button className="btn btn-primary btn-lg" onClick={() => setSubmitted(true)}>Submit application</button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function AField({ label, placeholder, defaultValue }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-700)' }}>{label}</span>
      <input defaultValue={defaultValue} placeholder={placeholder}
        style={{ fontFamily: 'var(--font-body)', fontSize: 14, padding: '11px 14px', border: '1.5px solid var(--ink-200)', borderRadius: 12, outline: 'none' }}
        onFocus={e => { e.target.style.borderColor = 'var(--blue-500)'; e.target.style.boxShadow = '0 0 0 4px rgba(0,72,168,0.15)'; }}
        onBlur={e => { e.target.style.borderColor = 'var(--ink-200)'; e.target.style.boxShadow = 'none'; }}
      />
    </label>
  );
}
function ASelect({ label, options }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-700)' }}>{label}</span>
      <select style={{ fontFamily: 'var(--font-body)', fontSize: 14, padding: '11px 14px', border: '1.5px solid var(--ink-200)', borderRadius: 12, outline: 'none', background: 'white' }}>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
function ATextArea({ label, placeholder }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-700)' }}>{label}</span>
      <textarea placeholder={placeholder} rows={4}
        style={{ fontFamily: 'var(--font-body)', fontSize: 14, padding: '11px 14px', border: '1.5px solid var(--ink-200)', borderRadius: 12, outline: 'none', resize: 'vertical' }}
      />
    </label>
  );
}

window.ApplyOverlay = ApplyOverlay;
