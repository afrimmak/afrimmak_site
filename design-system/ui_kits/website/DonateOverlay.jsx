// Afrimmak — Donate overlay (simple flow)

function DonateOverlay({ open, onClose }) {
  const presets = [25, 50, 100, 250, 500];
  const [amount, setAmount] = React.useState(100);
  const [custom, setCustom] = React.useState('');
  const [recurring, setRecurring] = React.useState(true);
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => { if (!open) { setAmount(100); setCustom(''); setRecurring(true); setSubmitted(false); } }, [open]);
  if (!open) return null;

  const effective = custom ? Number(custom) : amount;

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 100,
      background: 'rgba(10,26,51,0.6)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: 'white', borderRadius: 24, maxWidth: 540, width: '100%',
        padding: 36, boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
      }}>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div style={{
              width: 80, height: 80, borderRadius: 999, background: 'var(--green-50)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
            }}>
              <i data-lucide="heart-handshake" style={{ width: 44, height: 44, color: 'var(--green-600)' }}></i>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 28, margin: 0, letterSpacing: '-0.02em' }}>Thank you.</h3>
            <p className="lede" style={{ marginTop: 12 }}>
              Your ${effective} {recurring ? 'monthly ' : ''}gift funds {Math.max(1, Math.round(effective / 25))} learning experience{effective >= 25 ? 's' : ''}.
              A receipt is on its way.
            </p>
            <button className="btn btn-primary btn-lg" style={{ marginTop: 24 }} onClick={onClose}>Done</button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <div>
                <div className="eyebrow">Donate</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 24, margin: 0, marginTop: 4, letterSpacing: '-0.02em' }}>Back a builder</h3>
              </div>
              <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--ink-500)' }}>
                <i data-lucide="x" style={{ width: 24, height: 24 }}></i>
              </button>
            </div>

            {/* Frequency toggle */}
            <div style={{ display: 'inline-flex', background: 'var(--ink-50)', borderRadius: 999, padding: 4, marginBottom: 20 }}>
              <button onClick={() => setRecurring(true)} style={{
                background: recurring ? 'white' : 'transparent', color: recurring ? 'var(--blue-700)' : 'var(--ink-500)',
                border: 'none', padding: '8px 18px', borderRadius: 999, cursor: 'pointer',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13,
                boxShadow: recurring ? '0 1px 3px rgba(10,26,51,0.1)' : 'none',
              }}>Monthly</button>
              <button onClick={() => setRecurring(false)} style={{
                background: !recurring ? 'white' : 'transparent', color: !recurring ? 'var(--blue-700)' : 'var(--ink-500)',
                border: 'none', padding: '8px 18px', borderRadius: 999, cursor: 'pointer',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13,
                boxShadow: !recurring ? '0 1px 3px rgba(10,26,51,0.1)' : 'none',
              }}>One-time</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8, marginBottom: 14 }}>
              {presets.map(p => (
                <button key={p} onClick={() => { setAmount(p); setCustom(''); }} style={{
                  padding: '14px 0',
                  border: amount === p && !custom ? '2px solid var(--blue-500)' : '1.5px solid var(--ink-200)',
                  background: amount === p && !custom ? 'var(--blue-50)' : 'white',
                  color: amount === p && !custom ? 'var(--blue-700)' : 'var(--ink-700)',
                  borderRadius: 14, cursor: 'pointer',
                  fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16,
                }}>${p}</button>
              ))}
            </div>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-700)' }}>Custom amount</span>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--ink-500)' }}>$</span>
                <input type="number" min="1" value={custom} onChange={e => setCustom(e.target.value)} placeholder="Enter amount"
                  style={{
                    width: '100%', boxSizing: 'border-box',
                    fontFamily: 'var(--font-body)', fontSize: 14, padding: '12px 14px 12px 28px',
                    border: '1.5px solid var(--ink-200)', borderRadius: 12, outline: 'none',
                  }}
                />
              </div>
            </label>

            <div style={{ background: 'var(--bg-2)', borderRadius: 14, padding: '14px 16px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
              <i data-lucide="info" style={{ width: 18, height: 18, color: 'var(--blue-500)' }}></i>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--ink-700)' }}>
                Your ${effective || 0}{recurring ? '/month' : ''} funds <strong>{Math.max(1, Math.round((effective || 0) / 25))}</strong> learning experience{(effective || 0) >= 25 ? 's' : ''} for young Africans.
              </span>
            </div>

            <button onClick={() => setSubmitted(true)} className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
              {recurring ? `Donate $${effective || 0}/month` : `Donate $${effective || 0}`}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

window.DonateOverlay = DonateOverlay;
