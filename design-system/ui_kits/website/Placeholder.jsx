// Afrimmak — Placeholder slot.
// A visually marked "content needed" block that doubles as a briefing
// to the AFRIMMAK / MIF content owner. Designed to ship in the live site
// during early stage, then be removed when real content arrives.

function Placeholder({ kind = 'Content', label, hint, height = 'auto', children, dense = false }) {
  // kind: 'Photo' | 'Video' | 'Logo' | 'Quote' | 'Content' | 'Form'
  const colors = {
    Photo:   { tint: 'rgba(0,72,168,0.08)',  border: 'var(--blue-400)',  fg: 'var(--blue-700)' },
    Video:   { tint: 'rgba(238,42,48,0.07)', border: 'var(--red-500)',   fg: 'var(--red-700)' },
    Logo:    { tint: 'rgba(10,26,51,0.04)',  border: 'var(--ink-300)',   fg: 'var(--ink-700)' },
    Quote:   { tint: 'rgba(111,197,46,0.10)',border: 'var(--green-500)', fg: 'var(--green-700)' },
    Content: { tint: 'rgba(10,26,51,0.04)',  border: 'var(--ink-300)',   fg: 'var(--ink-700)' },
    Form:    { tint: 'rgba(10,26,51,0.04)',  border: 'var(--ink-300)',   fg: 'var(--ink-700)' },
  };
  const c = colors[kind] || colors.Content;

  return (
    <div style={{
      position: 'relative',
      background: c.tint,
      border: `2px dashed ${c.border}`,
      borderRadius: 18,
      padding: dense ? 16 : 24,
      minHeight: height === 'auto' ? undefined : height,
      display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center',
      gap: 10,
    }}>
      <div style={{
        position: 'absolute', top: 12, left: 12,
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: c.border, color: 'white',
        padding: '3px 10px', borderRadius: 999,
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
      }}>
        <span style={{ width: 6, height: 6, borderRadius: 3, background: 'white' }} />
        Needs: {kind}
      </div>
      <div style={{
        marginTop: 20,
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 14, color: c.fg,
      }}>{label}</div>
      {hint && (
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, lineHeight: 1.5, color: 'var(--ink-500)', maxWidth: 480 }}>
          {hint}
        </div>
      )}
      {children}
    </div>
  );
}

// Tag for "early estimate" / "draft" numbers
function DraftTag({ children = 'Draft' }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      background: 'rgba(232,155,18,0.14)', color: '#8A5A00',
      padding: '2px 8px', borderRadius: 999,
      fontFamily: 'var(--font-display)', fontWeight: 800,
      fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
      verticalAlign: 'middle', marginLeft: 8,
    }}>
      <span style={{ width: 5, height: 5, borderRadius: 3, background: '#E89B12' }} />
      {children}
    </span>
  );
}

window.Placeholder = Placeholder;
window.DraftTag = DraftTag;
