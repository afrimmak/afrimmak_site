// Afrimmak — Hero
// Light, paper-white hero with a full-bleed photo slot behind a copy capsule.
// (Replaces the explainer-video layout; communicates "photo goes here"
// without committing to a colour direction the real image hasn't earned yet.)

function Hero({ onApply, onLearn }) {
  return (
    <header style={{
      position: 'relative',
      minHeight: 720,
      paddingTop: 180, paddingBottom: 120,
      background: 'var(--paper)',
      overflow: 'hidden',
    }}>
      <HeroPhotoSlot />

      <div className="afr-container" style={{
        position: 'relative',
        display: 'grid', gridTemplateColumns: 'minmax(0, 640px)',
      }}>
        {/* Copy capsule — solid card on top of the photo slot, per the design
            system's "capsules > protection gradients" rule. */}
        <div style={{
          background: 'white',
          border: '1px solid var(--ink-100)',
          borderRadius: 28,
          padding: '40px 44px 44px',
          boxShadow: '0 24px 64px rgba(10,26,51,0.10)',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'var(--paper-warm)',
            border: '1px solid var(--ink-100)',
            borderRadius: 999, padding: '6px 14px', marginBottom: 24,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: 4, background: 'var(--afr-red)', boxShadow: '0 0 0 4px rgba(238,42,48,0.18)' }} />
            <span className="eyebrow" style={{ color: 'var(--ink-700)' }}>A project of the Mendez Impact Foundation · The Gambia</span>
          </div>

          <h1 className="h-display" style={{ margin: 0, color: 'var(--ink-900)' }}>
            Skills, mentorship,<br/>
            and a real shot —<br/>
            <span style={{ color: 'var(--afr-blue)' }}>for young Gambians.</span>
          </h1>
          <p className="lede" style={{ marginTop: 24, maxWidth: 540 }}>
            Afrimmak equips young people across The Gambia with practical skills,
            mentorship, and the confidence to build their own futures — through
            short, hands-on programmes run with local partners.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32, alignItems: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg" onClick={onApply}>
              Apply to a programme
              <i data-lucide="arrow-right" className="icon"></i>
            </button>
            <button className="btn btn-ghost btn-lg" onClick={onLearn}>
              Learn more
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

// Full-bleed photo placeholder — sits behind everything else in the hero,
// edge-to-edge. Reads clearly as "this is where the hero photograph goes."
function HeroPhotoSlot() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 24,
        borderRadius: 32,
        background: 'rgba(0,72,168,0.05)',
        border: '2px dashed var(--blue-300)',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
      {/* Faint dot-grid inside the slot, to read as imagery space. */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.6,
        backgroundImage: 'radial-gradient(rgba(0,72,168,0.10) 1.2px, transparent 1.2px)',
        backgroundSize: '28px 28px',
      }} />

      {/* Soft green halo in one corner — echoes the brand mark's spark. */}
      <div style={{
        position: 'absolute', bottom: -160, right: -160, width: 520, height: 520, borderRadius: '50%',
        background: 'radial-gradient(closest-side, rgba(111,197,46,0.22), transparent 70%)',
      }} />

      {/* Needs: Photo pill — top right, clears the nav. */}
      <div style={{
        position: 'absolute', top: 24, right: 24,
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: 'var(--afr-red)', color: 'white',
        padding: '5px 12px', borderRadius: 999,
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
        boxShadow: '0 8px 20px rgba(238,42,48,0.35)',
      }}>
        <span style={{ width: 6, height: 6, borderRadius: 3, background: 'white' }} />
        Needs: Photo — full-bleed hero
      </div>

      {/* Briefing note for whoever sources the photograph. */}
      <div style={{
        position: 'absolute', bottom: 28, right: 32,
        maxWidth: 320, textAlign: 'right',
        fontFamily: 'var(--font-body)', fontSize: 12, lineHeight: 1.55,
        color: 'var(--ink-500)',
      }}>
        Warm-lit daylight photograph of young Gambians in a real
        Afrimmak setting — classroom, workshop, or cohort group.
        Wide composition; subjects in the right two-thirds so the
        copy capsule on the left stays legible.
      </div>
    </div>
  );
}

window.Hero = Hero;
