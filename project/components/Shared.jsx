// Shared UI primitives
const Pill = ({ children, color = '#00FF87', filled = false, style = {} }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 6,
    padding: '6px 12px',
    fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
    color: filled ? '#06070C' : color,
    background: filled ? color : 'transparent',
    border: filled ? 'none' : `1px solid ${color}40`,
    borderRadius: 999,
    fontFamily: "'Inter', sans-serif",
    ...style,
  }}>{children}</span>
);

const Dot = ({ color = '#00FF87', size = 6, glow = true }) => (
  <span style={{
    display: 'inline-block', width: size, height: size, borderRadius: '50%',
    background: color,
    boxShadow: glow ? `0 0 8px ${color}, 0 0 14px ${color}80` : 'none',
  }} />
);

const NeonButton = ({ children, variant = 'primary', size = 'md', onClick, style = {}, icon }) => {
  const sizes = {
    sm: { padding: '10px 18px', fontSize: 13 },
    md: { padding: '14px 26px', fontSize: 14 },
    lg: { padding: '18px 34px', fontSize: 15 },
  };
  const variants = {
    primary: {
      background: '#00FF87',
      color: '#06070C',
      boxShadow: '0 0 0 1px #00FF87, 0 0 30px #00FF8755, 0 12px 40px -8px #00FF8770',
      border: 'none',
    },
    ghost: {
      background: 'transparent',
      color: '#E8ECF2',
      border: '1px solid #FFFFFF20',
      boxShadow: 'none',
    },
    cyan: {
      background: 'transparent',
      color: '#00C2FF',
      border: '1px solid #00C2FF',
      boxShadow: '0 0 24px #00C2FF30',
    },
  };
  return (
    <button onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      borderRadius: 12,
      cursor: 'pointer',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease',
      ...sizes[size],
      ...variants[variant],
      ...style,
    }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.filter = 'brightness(1.08)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.filter = 'brightness(1)'; }}
    >
      {children}
      {icon}
    </button>
  );
};

// Subtle pitch grid background
const PitchTexture = ({ opacity = 0.5 }) => (
  <div style={{
    position: 'absolute', inset: 0, pointerEvents: 'none', opacity,
    backgroundImage: `
      linear-gradient(to right, #00FF8708 1px, transparent 1px),
      linear-gradient(to bottom, #00FF8708 1px, transparent 1px)
    `,
    backgroundSize: '80px 80px',
    maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 100%)',
    WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 100%)',
  }} />
);

const Scanlines = ({ opacity = 0.04 }) => (
  <div style={{
    position: 'absolute', inset: 0, pointerEvents: 'none', opacity,
    backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 3px)',
  }} />
);

// Logo
const Logo = ({ size = 22 }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <div style={{
      width: size + 8, height: size + 8,
      display: 'grid', placeItems: 'center',
      background: 'linear-gradient(135deg, #00FF87, #00C2FF)',
      borderRadius: 8,
      position: 'relative',
    }}>
      <svg width={size - 4} height={size - 4} viewBox="0 0 24 24" fill="none" style={{ position: 'relative' }}>
        <path d="M12 2 L21 6 V12 C21 17 17 20 12 22 C7 20 3 17 3 12 V6 Z" fill="#06070C" />
        <path d="M9 11 L11 13 L15 9" stroke="#00FF87" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <div style={{
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 800,
      fontSize: size * 0.75,
      letterSpacing: '-0.02em',
      color: '#E8ECF2',
      lineHeight: 1,
    }}>
      FANTASY<span style={{ color: '#00FF87' }}>PRO</span>
    </div>
  </div>
);

// Section heading kit
const SectionEyebrow = ({ children, color = '#00FF87' }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 10,
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase',
    color,
  }}>
    <Dot color={color} />
    {children}
  </div>
);

Object.assign(window, { Pill, Dot, NeonButton, PitchTexture, Scanlines, Logo, SectionEyebrow });
