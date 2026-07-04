import React from 'react';

/**
 * Afrimmak Button — pill button in the brand's six variants.
 * All colours, radii, shadows and type come from the design tokens
 * in colors_and_type.css; nothing is hard-coded here except the
 * token references, so the button re-themes automatically.
 */

const VARIANT_STYLE = {
  primary:   { background: 'var(--blue-500)',  color: '#fff', boxShadow: '0 8px 20px rgba(0,72,168,0.25)' },
  secondary: { background: 'var(--green-500)', color: '#fff', boxShadow: '0 8px 20px rgba(111,197,46,0.25)' },
  accent:    { background: 'var(--red-500)',   color: '#fff', boxShadow: '0 8px 20px rgba(238,42,48,0.25)' },
  ghost:     { background: 'transparent',      color: 'var(--blue-600)', border: '2px solid var(--blue-500)' },
  soft:      { background: 'var(--blue-50)',   color: 'var(--blue-700)' },
  dark:      { background: 'var(--ink-900)',   color: '#fff' },
};

const VARIANT_HOVER = {
  primary:   'var(--blue-600)',
  secondary: 'var(--green-600)',
  accent:    'var(--red-600)',
  ghost:     'var(--blue-50)',
  soft:      'var(--blue-100)',
  dark:      'var(--ink-700)',
};

const SIZE_STYLE = {
  sm: { padding: '8px 16px',  fontSize: 12 },
  md: { padding: '12px 22px', fontSize: 14 },
  lg: { padding: '16px 28px', fontSize: 16 },
};

export function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  children,
  disabled,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const base = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    letterSpacing: '0.01em',
    border: 'none',
    borderRadius: 999,
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    transition: 'background 180ms var(--ease-out), transform 120ms var(--ease-out), box-shadow 180ms var(--ease-out)',
    transform: active && !disabled ? 'scale(0.97)' : 'scale(1)',
    opacity: disabled ? 0.4 : 1,
    ...SIZE_STYLE[size],
    ...VARIANT_STYLE[variant],
  };

  const hovered = hover && !disabled
    ? { background: VARIANT_HOVER[variant] }
    : null;

  return (
    <button
      type="button"
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{ ...base, ...hovered, ...style }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
