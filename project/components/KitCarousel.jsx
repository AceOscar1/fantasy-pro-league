// Kit / Jersey Carousel — the standout section
const KITS = [
  {
    club: 'Highbury Athletic', clubShort: 'HBA', accent: '#FF3D3D',
    player: 'Bukayo Saka', position: 'RW', number: 7,
    price: '£12.4m', form: 92,
    body: '#E8181A', sleeve: '#FFFFFF', stripe: '#FFFFFF',
    pattern: 'plain',
  },
  {
    club: 'Anfield FC', clubShort: 'ANF', accent: '#FF1F2E',
    player: 'Mohamed Salah', position: 'RW', number: 11,
    price: '£12.8m', form: 88,
    body: '#C8102E', sleeve: '#C8102E', stripe: '#FFC72C',
    pattern: 'collar',
  },
  {
    club: 'Etihad United', clubShort: 'ETU', accent: '#6CABDD',
    player: 'Erling Haaland', position: 'ST', number: 9,
    price: '£14.5m', form: 95,
    body: '#6CABDD', sleeve: '#6CABDD', stripe: '#FFFFFF',
    pattern: 'gradient',
  },
  {
    club: 'White Hart Lane', clubShort: 'WHL', accent: '#FFFFFF',
    player: 'Son Heung-min', position: 'LW', number: 7,
    price: '£10.2m', form: 84,
    body: '#FFFFFF', sleeve: '#0A0F2C', stripe: '#0A0F2C',
    pattern: 'sleeve',
  },
  {
    club: 'Stamford Blues', clubShort: 'STB', accent: '#034694',
    player: 'Cole Palmer', position: 'CAM', number: 20,
    price: '£11.6m', form: 90,
    body: '#034694', sleeve: '#034694', stripe: '#FFFFFF',
    pattern: 'stripe',
  },
  {
    club: 'Old Trafford', clubShort: 'OTR', accent: '#DA291C',
    player: 'Marcus Rashford', position: 'LW', number: 10,
    price: '£9.8m', form: 78,
    body: '#DA291C', sleeve: '#000000', stripe: '#FBE122',
    pattern: 'shoulder',
  },
];

// Stylized jersey SVG
const Jersey = ({ kit, size = 280 }) => {
  const w = size;
  const h = size * 1.18;
  return (
    <svg width={w} height={h} viewBox="0 0 200 240" style={{ display: 'block' }}>
      <defs>
        <linearGradient id={`bodyG-${kit.clubShort}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={kit.body} stopOpacity="1" />
          <stop offset="100%" stopColor={kit.body} stopOpacity="0.85" />
        </linearGradient>
        <filter id={`shadow-${kit.clubShort}`}>
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Jersey shape */}
      <g filter={`url(#shadow-${kit.clubShort})`}>
        {/* Sleeves */}
        <path d="M 30 50 L 10 90 L 30 110 L 50 80 Z" fill={kit.sleeve} />
        <path d="M 170 50 L 190 90 L 170 110 L 150 80 Z" fill={kit.sleeve} />

        {/* Main body */}
        <path d="M 50 50
                 L 75 35
                 L 85 45
                 Q 100 52 115 45
                 L 125 35
                 L 150 50
                 L 155 75
                 L 152 220
                 Q 100 230 48 220
                 L 45 75 Z"
              fill={`url(#bodyG-${kit.clubShort})`} />

        {/* Pattern overlays */}
        {kit.pattern === 'stripe' && (
          <>
            <rect x="80" y="50" width="8" height="180" fill={kit.stripe} opacity="0.85" />
            <rect x="112" y="50" width="8" height="180" fill={kit.stripe} opacity="0.85" />
          </>
        )}
        {kit.pattern === 'gradient' && (
          <path d="M 50 50 L 150 50 L 152 130 Q 100 145 48 130 Z" fill="#FFFFFF" opacity="0.08" />
        )}
        {kit.pattern === 'shoulder' && (
          <>
            <path d="M 50 50 L 75 35 L 85 45 L 75 55 L 60 65 Z" fill={kit.stripe} opacity="0.9" />
            <path d="M 150 50 L 125 35 L 115 45 L 125 55 L 140 65 Z" fill={kit.stripe} opacity="0.9" />
          </>
        )}
        {kit.pattern === 'sleeve' && (
          <>
            <path d="M 30 50 L 10 90 L 30 110 L 50 80 Z" fill={kit.stripe} opacity="0.6" />
            <path d="M 170 50 L 190 90 L 170 110 L 150 80 Z" fill={kit.stripe} opacity="0.6" />
          </>
        )}

        {/* Collar/neckline */}
        <path d="M 85 45 Q 100 55 115 45 L 113 50 Q 100 60 87 50 Z" fill={kit.stripe === '#FFFFFF' || kit.body === '#FFFFFF' ? '#0A0A0A' : kit.stripe} opacity="0.8" />

        {/* Number on chest */}
        <text x="100" y="155"
              textAnchor="middle"
              fontFamily="'Space Grotesk', sans-serif"
              fontWeight="800"
              fontSize="68"
              fill={kit.stripe === kit.body ? '#FFFFFF' : kit.stripe}
              opacity="0.95">
          {kit.number}
        </text>

        {/* Sponsor box */}
        <rect x="78" y="90" width="44" height="14" rx="2" fill="#000" opacity="0.2" />

        {/* Club crest placeholder */}
        <circle cx="65" cy="80" r="9" fill={kit.stripe} opacity="0.9" />
        <circle cx="65" cy="80" r="6" fill={kit.body} />
      </g>
    </svg>
  );
};

const KitCarousel = () => {
  const [idx, setIdx] = React.useState(2);
  const kit = KITS[idx];

  const next = () => setIdx((i) => (i + 1) % KITS.length);
  const prev = () => setIdx((i) => (i - 1 + KITS.length) % KITS.length);

  return (
    <section style={{
      position: 'relative',
      padding: '140px 48px 160px',
      background: '#04050A',
      overflow: 'hidden',
      borderTop: '1px solid #FFFFFF08',
      borderBottom: '1px solid #FFFFFF08',
    }}>
      {/* Animated radial glow tied to club accent */}
      <div style={{
        position: 'absolute',
        left: '50%', top: '55%', transform: 'translate(-50%, -50%)',
        width: 1100, height: 1100,
        background: `radial-gradient(circle, ${kit.accent}28 0%, ${kit.accent}10 30%, transparent 70%)`,
        pointerEvents: 'none',
        transition: 'background 0.6s ease',
      }} />

      <PitchTexture opacity={0.3} />

      <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <SectionEyebrow color="#00C2FF">Kit Selection</SectionEyebrow>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(40px, 5.5vw, 72px)',
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: '-0.035em',
            color: '#F4F6FA',
            margin: '20px auto 16px',
            maxWidth: 900,
          }}>
            Pick a kit. <span style={{ color: '#00FF87' }}>Pick a side.</span>
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 17, color: '#9AA3B2',
            maxWidth: 580, margin: '0 auto', lineHeight: 1.55,
          }}>
            Browse the squad pool. Tap into form, price, and chemistry — then lock in your starting eleven.
          </p>
        </div>

        {/* Carousel */}
        <div style={{ position: 'relative', height: 560 }}>
          {/* Spotlight floor */}
          <div style={{
            position: 'absolute',
            left: '50%', bottom: 80, transform: 'translateX(-50%)',
            width: 480, height: 60,
            background: `radial-gradient(ellipse at center, ${kit.accent}80 0%, ${kit.accent}30 40%, transparent 80%)`,
            filter: 'blur(20px)',
            transition: 'background 0.6s ease',
          }} />
          <div style={{
            position: 'absolute',
            left: '50%', bottom: 70, transform: 'translateX(-50%)',
            width: 360, height: 8,
            borderRadius: '50%',
            background: `radial-gradient(ellipse at center, ${kit.accent} 0%, transparent 80%)`,
            filter: 'blur(6px)',
            opacity: 0.8,
            transition: 'background 0.6s ease',
          }} />

          {/* Side jerseys (peek) */}
          {[-2, -1, 1, 2].map((offset) => {
            const i = (idx + offset + KITS.length) % KITS.length;
            const k = KITS[i];
            const abs = Math.abs(offset);
            return (
              <div key={offset}
                onClick={() => setIdx(i)}
                style={{
                  position: 'absolute',
                  left: `calc(50% + ${offset * 220}px)`,
                  top: '50%',
                  transform: `translate(-50%, -50%) scale(${1 - abs * 0.18}) rotateY(${offset * -18}deg)`,
                  opacity: 1 - abs * 0.35,
                  filter: `blur(${abs * 1.5}px)`,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  zIndex: 10 - abs,
                  pointerEvents: abs > 1 ? 'none' : 'auto',
                }}>
                <Jersey kit={k} size={240} />
              </div>
            );
          })}

          {/* Center jersey */}
          <div style={{
            position: 'absolute',
            left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 20,
            animation: 'jerseyFloat 4s ease-in-out infinite',
          }}>
            <Jersey kit={kit} size={340} />
          </div>

          {/* Big club mark watermark */}
          <div style={{
            position: 'absolute',
            left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 320,
            color: kit.accent,
            opacity: 0.05,
            letterSpacing: '-0.05em',
            lineHeight: 1,
            pointerEvents: 'none',
            transition: 'color 0.6s ease',
            zIndex: 1,
          }}>{kit.clubShort}</div>

          {/* Arrows */}
          <button onClick={prev} style={{
            position: 'absolute',
            left: 40, top: '50%', transform: 'translateY(-50%)',
            width: 56, height: 56,
            background: '#0F1117',
            border: '1px solid #FFFFFF14',
            borderRadius: 14,
            color: '#F4F6FA',
            cursor: 'pointer',
            display: 'grid', placeItems: 'center',
            transition: 'all 0.2s',
            zIndex: 30,
          }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#00FF87'; e.currentTarget.style.boxShadow = '0 0 24px #00FF8740'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#FFFFFF14'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button onClick={next} style={{
            position: 'absolute',
            right: 40, top: '50%', transform: 'translateY(-50%)',
            width: 56, height: 56,
            background: '#0F1117',
            border: '1px solid #FFFFFF14',
            borderRadius: 14,
            color: '#F4F6FA',
            cursor: 'pointer',
            display: 'grid', placeItems: 'center',
            transition: 'all 0.2s',
            zIndex: 30,
          }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#00FF87'; e.currentTarget.style.boxShadow = '0 0 24px #00FF8740'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#FFFFFF14'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Player info card */}
        <div style={{
          maxWidth: 720, margin: '20px auto 0',
          background: 'linear-gradient(180deg, #0F1117 0%, #0A0B12 100%)',
          border: `1px solid ${kit.accent}30`,
          borderRadius: 18,
          padding: '22px 28px',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1fr',
          alignItems: 'center',
          gap: 22,
          boxShadow: `0 30px 60px -20px #000000, 0 0 60px -20px ${kit.accent}40`,
          transition: 'all 0.6s ease',
          position: 'relative',
        }}>
          {/* Club */}
          <div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, color: '#9AA3B2', letterSpacing: '0.15em',
              marginBottom: 6,
            }}>CLUB</div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 16, fontWeight: 700, color: '#F4F6FA',
              letterSpacing: '-0.01em',
            }}>{kit.club}</div>
          </div>

          <div style={{ width: 1, height: 36, background: '#FFFFFF14' }} />

          {/* Player */}
          <div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, color: '#9AA3B2', letterSpacing: '0.15em',
              marginBottom: 6,
            }}>{kit.position} · #{kit.number}</div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 16, fontWeight: 700, color: '#F4F6FA',
              letterSpacing: '-0.01em',
            }}>{kit.player}</div>
          </div>

          <div style={{ width: 1, height: 36, background: '#FFFFFF14' }} />

          {/* Price */}
          <div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, color: '#9AA3B2', letterSpacing: '0.15em',
              marginBottom: 6,
            }}>PRICE</div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 16, fontWeight: 700, color: '#00FF87',
              letterSpacing: '-0.01em',
            }}>{kit.price}</div>
          </div>

          <div style={{ width: 1, height: 36, background: '#FFFFFF14' }} />

          {/* Form bar */}
          <div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, color: '#9AA3B2', letterSpacing: '0.15em',
              marginBottom: 8,
              display: 'flex', justifyContent: 'space-between',
            }}>
              <span>FORM</span><span style={{ color: '#00FF87' }}>{kit.form}</span>
            </div>
            <div style={{
              height: 6, background: '#06070C',
              borderRadius: 3, overflow: 'hidden',
              border: '1px solid #FFFFFF08',
            }}>
              <div style={{
                width: `${kit.form}%`, height: '100%',
                background: 'linear-gradient(90deg, #00FF87, #00C2FF)',
                boxShadow: '0 0 12px #00FF87',
                transition: 'width 0.5s',
              }} />
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 8,
          marginTop: 28,
        }}>
          {KITS.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} style={{
              width: i === idx ? 28 : 8, height: 8,
              borderRadius: 4,
              background: i === idx ? '#00FF87' : '#FFFFFF20',
              boxShadow: i === idx ? '0 0 12px #00FF87' : 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              padding: 0,
            }} />
          ))}
        </div>

        {/* Add to squad button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
          <NeonButton variant="primary" size="lg" icon={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          }>
            Add to Squad
          </NeonButton>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { KitCarousel, Jersey });
