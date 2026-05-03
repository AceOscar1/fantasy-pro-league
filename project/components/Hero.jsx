// Hero section
const Hero = () => {
  const [particles] = React.useState(() =>
    Array.from({ length: 24 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 8,
    }))
  );

  return (
    <section style={{
      position: 'relative',
      minHeight: '92vh',
      paddingTop: 120,
      paddingBottom: 80,
      overflow: 'hidden',
      background: 'radial-gradient(ellipse 80% 60% at 70% 50%, #00FF8712 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 20% 80%, #00C2FF0A 0%, transparent 60%), #06070C',
    }}>
      {/* Pitch grid */}
      <PitchTexture opacity={0.6} />

      {/* Pitch arc/center circle */}
      <div style={{
        position: 'absolute',
        right: '-15%', top: '50%', transform: 'translateY(-50%)',
        width: 900, height: 900,
        borderRadius: '50%',
        border: '1px solid #00FF8710',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        right: '-8%', top: '50%', transform: 'translateY(-50%)',
        width: 600, height: 600,
        borderRadius: '50%',
        border: '1px solid #00FF8708',
        pointerEvents: 'none',
      }} />

      {/* Particles */}
      {particles.map(p => (
        <div key={p.id} style={{
          position: 'absolute',
          left: `${p.x}%`, top: `${p.y}%`,
          width: p.size, height: p.size,
          borderRadius: '50%',
          background: '#00FF87',
          boxShadow: `0 0 ${p.size * 4}px #00FF87`,
          animation: `floatParticle ${p.duration}s ${p.delay}s ease-in-out infinite`,
          opacity: 0.6,
        }} />
      ))}

      <div style={{
        maxWidth: 1400, margin: '0 auto', padding: '0 48px',
        position: 'relative',
        display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 60, alignItems: 'center',
      }}>
        {/* Left content */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <Pill style={{ background: '#0F1117', borderColor: '#00FF8740' }}>
              <Dot /> Season 26 — Now Open
            </Pill>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11, color: '#9AA3B2', letterSpacing: '0.15em',
            }}>
              48,212 MANAGERS
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(48px, 6vw, 88px)',
            fontWeight: 700,
            lineHeight: 0.98,
            letterSpacing: '-0.035em',
            color: '#F4F6FA',
            margin: 0,
            marginBottom: 28,
          }}>
            Build your squad,<br />
            earn fantasy points,<br />
            <span style={{ position: 'relative', display: 'inline-block' }}>
              <span style={{ color: '#F4F6FA' }}>compete</span>
              <span style={{ color: '#00FF87' }}>.</span>
              <span style={{
                position: 'absolute',
                left: 0, right: 0, bottom: -8,
                height: 4,
                background: 'linear-gradient(90deg, #00FF87, transparent)',
                boxShadow: '0 0 18px #00FF87, 0 0 32px #00FF8770',
                borderRadius: 4,
              }} />
            </span>
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 18, lineHeight: 1.55,
            color: '#9AA3B2',
            maxWidth: 540,
            margin: 0, marginBottom: 36,
          }}>
            The fantasy league built for managers who play to win. Draft real footballers,
            outscore your friends, climb global leaderboards — all season long.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48, flexWrap: 'wrap' }}>
            <NeonButton variant="primary" size="lg" icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }>
              Join the Waitlist
            </NeonButton>
            <NeonButton variant="ghost" size="lg" icon={
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            }>
              Watch Trailer
            </NeonButton>
          </div>

          {/* Stats strip */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
            paddingTop: 32,
            borderTop: '1px solid #FFFFFF0A',
          }}>
            {[
              { val: '£250K', lbl: 'Prize Pool' },
              { val: '38', lbl: 'Match Weeks' },
              { val: '4.9★', lbl: 'Avg Rating' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 32, fontWeight: 700,
                  color: '#F4F6FA',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}>{s.val}</div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11, color: '#9AA3B2',
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  marginTop: 6,
                }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: squad mockup */}
        <SquadMockup />
      </div>
    </section>
  );
};

// Stylized squad builder mockup card (formation pitch)
const SquadMockup = () => {
  // 4-3-3
  const positions = [
    { x: 50, y: 88, role: 'GK', name: 'Onana', pts: 6, badge: '#00C2FF' },
    { x: 18, y: 70, role: 'LB', name: 'Robertson', pts: 9 },
    { x: 38, y: 72, role: 'CB', name: 'Saliba', pts: 8 },
    { x: 62, y: 72, role: 'CB', name: 'Van Dijk', pts: 5 },
    { x: 82, y: 70, role: 'RB', name: 'Walker', pts: 7 },
    { x: 25, y: 48, role: 'CM', name: 'Rice', pts: 11 },
    { x: 50, y: 50, role: 'CM', name: 'Bellingham', pts: 14, captain: true },
    { x: 75, y: 48, role: 'CM', name: 'Ødegaard', pts: 9 },
    { x: 22, y: 22, role: 'LW', name: 'Saka', pts: 12 },
    { x: 50, y: 18, role: 'ST', name: 'Haaland', pts: 16 },
    { x: 78, y: 22, role: 'RW', name: 'Salah', pts: 10 },
  ];

  return (
    <div style={{ position: 'relative', perspective: 1400 }}>
      <div style={{
        position: 'relative',
        transform: 'rotateY(-8deg) rotateX(4deg)',
        transformStyle: 'preserve-3d',
        animation: 'floatCard 8s ease-in-out infinite',
      }}>
        {/* Card frame */}
        <div style={{
          background: 'linear-gradient(180deg, #0F1117 0%, #0A0B12 100%)',
          border: '1px solid #FFFFFF14',
          borderRadius: 20,
          padding: 22,
          boxShadow: '0 40px 80px -20px #00000099, 0 0 0 1px #00FF8714, 0 0 80px -20px #00FF8740',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: 16,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: 'linear-gradient(135deg, #00FF87, #00C2FF)',
                display: 'grid', placeItems: 'center',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800, fontSize: 14, color: '#06070C',
              }}>M</div>
              <div>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 14, fontWeight: 700, color: '#F4F6FA',
                  letterSpacing: '-0.01em',
                }}>MidfieldMaestros</div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10, color: '#9AA3B2',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>GW 24 · Live</div>
              </div>
            </div>
            <div style={{
              padding: '4px 10px',
              background: '#00FF8714',
              border: '1px solid #00FF8740',
              borderRadius: 6,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11, fontWeight: 600, color: '#00FF87',
              letterSpacing: '0.1em',
            }}>+107 PTS</div>
          </div>

          {/* Pitch */}
          <div style={{
            position: 'relative',
            height: 460,
            background: 'linear-gradient(180deg, #0A1A0F 0%, #06120A 100%)',
            borderRadius: 14,
            overflow: 'hidden',
            border: '1px solid #00FF8714',
          }}>
            {/* Pitch lines */}
            <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} preserveAspectRatio="none" viewBox="0 0 100 140">
              <g stroke="#00FF8722" strokeWidth="0.2" fill="none">
                <rect x="2" y="2" width="96" height="136" />
                <line x1="2" y1="70" x2="98" y2="70" />
                <circle cx="50" cy="70" r="9" />
                <circle cx="50" cy="70" r="0.5" fill="#00FF8744" />
                <rect x="30" y="2" width="40" height="14" />
                <rect x="40" y="2" width="20" height="6" />
                <rect x="30" y="124" width="40" height="14" />
                <rect x="40" y="132" width="20" height="6" />
              </g>
            </svg>

            {/* Stripes */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'repeating-linear-gradient(180deg, #00FF8703 0 30px, transparent 30px 60px)',
            }} />

            {/* Players */}
            {positions.map((p, i) => (
              <div key={i} style={{
                position: 'absolute',
                left: `${p.x}%`, top: `${p.y}%`,
                transform: 'translate(-50%, -50%)',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: 4,
              }}>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    width: 38, height: 46,
                    background: p.captain
                      ? 'linear-gradient(180deg, #00FF87, #00C2FF)'
                      : 'linear-gradient(180deg, #1A1F2A, #0F1117)',
                    border: p.captain ? 'none' : '1px solid #FFFFFF20',
                    borderRadius: '8px 8px 14px 14px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: p.captain ? '0 0 20px #00FF8770' : '0 4px 8px #00000060',
                    position: 'relative',
                  }}>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 8, fontWeight: 600,
                      color: p.captain ? '#06070C' : '#9AA3B2',
                      letterSpacing: '0.05em',
                      lineHeight: 1,
                    }}>{p.role}</div>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 16, fontWeight: 800,
                      color: p.captain ? '#06070C' : '#F4F6FA',
                      lineHeight: 1, marginTop: 2,
                    }}>{p.pts}</div>
                  </div>
                  {p.captain && (
                    <div style={{
                      position: 'absolute', top: -5, right: -5,
                      width: 16, height: 16, borderRadius: '50%',
                      background: '#06070C', border: '2px solid #00FF87',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 9, fontWeight: 800, color: '#00FF87',
                      display: 'grid', placeItems: 'center',
                    }}>C</div>
                  )}
                </div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 9, fontWeight: 600,
                  color: '#F4F6FA',
                  background: '#06070C99',
                  padding: '2px 5px',
                  borderRadius: 3,
                  whiteSpace: 'nowrap',
                }}>{p.name}</div>
              </div>
            ))}
          </div>

          {/* Footer stats */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 8, marginTop: 14,
          }}>
            {[
              { lbl: 'BANK', val: '£2.4m' },
              { lbl: 'RANK', val: '12,401' },
              { lbl: 'GW', val: '107' },
              { lbl: 'TOTAL', val: '1,842' },
            ].map((s, i) => (
              <div key={i} style={{
                background: '#06070C',
                border: '1px solid #FFFFFF0A',
                borderRadius: 8,
                padding: '8px 10px',
              }}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9, color: '#9AA3B2',
                  letterSpacing: '0.1em',
                }}>{s.lbl}</div>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 14, fontWeight: 700, color: '#F4F6FA',
                  marginTop: 2,
                }}>{s.val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating notification card */}
        <div style={{
          position: 'absolute',
          right: -40, top: 40,
          background: '#0F1117',
          border: '1px solid #00FF8740',
          borderRadius: 12,
          padding: '12px 14px',
          display: 'flex', alignItems: 'center', gap: 10,
          boxShadow: '0 20px 40px -10px #00000099, 0 0 30px #00FF8730',
          transform: 'translateZ(40px)',
          animation: 'floatBadge 5s ease-in-out infinite',
        }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8,
            background: '#00FF8714',
            display: 'grid', placeItems: 'center',
            border: '1px solid #00FF8740',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15 9 22 10 17 15 18 22 12 19 6 22 7 15 2 10 9 9z" fill="#00FF87" />
            </svg>
          </div>
          <div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12, fontWeight: 700, color: '#F4F6FA',
            }}>Haaland scored!</div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, color: '#00FF87',
              letterSpacing: '0.05em',
            }}>+8 pts · 67'</div>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          left: -30, bottom: 60,
          background: '#0F1117',
          border: '1px solid #00C2FF40',
          borderRadius: 12,
          padding: '10px 12px',
          boxShadow: '0 20px 40px -10px #00000099, 0 0 30px #00C2FF30',
          transform: 'translateZ(40px)',
          animation: 'floatBadge 6s 1s ease-in-out infinite',
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 9, color: '#9AA3B2',
            letterSpacing: '0.15em',
            marginBottom: 2,
          }}>RANK ▲</div>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 16, fontWeight: 800,
            color: '#00C2FF',
          }}>+1,204</div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { Hero, SquadMockup });
