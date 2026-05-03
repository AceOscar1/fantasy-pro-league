// Why Play Section — 3 feature cards
const WhyPlay = () => {
  const features = [
    {
      n: '01',
      title: 'Pick Your Squad',
      desc: 'Draft 15 footballers within a £100m budget. Real Premier League players, real-time prices, weekly transfer windows.',
      visual: 'squad',
    },
    {
      n: '02',
      title: 'Create & Join Leagues',
      desc: 'Spin up private leagues with friends, climb global ladders, or join brand-sponsored cups with cash prize pools.',
      visual: 'league',
    },
    {
      n: '03',
      title: 'Earn Fantasy Points',
      desc: 'Goals, assists, clean sheets, bonus points — every touch counts. Live scoring updates the second they happen.',
      visual: 'points',
    },
  ];

  return (
    <section style={{
      position: 'relative',
      padding: '140px 48px',
      background: '#06070C',
      borderTop: '1px solid #FFFFFF08',
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40 }}>
          <div>
            <SectionEyebrow>Why Play</SectionEyebrow>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: '#F4F6FA',
              margin: '20px 0 0',
              maxWidth: 760,
            }}>
              Three steps from kickoff<br />to <span style={{ color: '#00FF87' }}>champion</span>.
            </h2>
          </div>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            color: '#9AA3B2',
            maxWidth: 360,
            lineHeight: 1.55,
          }}>
            A clean fantasy experience without the bloat. Built around the moments that actually matter on a match day.
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ n, title, desc, visual }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #0F1117 0%, #0A0B12 100%)',
        border: `1px solid ${hover ? '#00FF8740' : '#FFFFFF0F'}`,
        borderRadius: 20,
        padding: 32,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: hover
          ? '0 20px 50px -20px #00FF8740, 0 0 0 1px #00FF8730 inset, 0 0 60px -10px #00FF8730'
          : '0 8px 30px -10px #00000060',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'pointer',
      }}>
      {/* Glow corner */}
      <div style={{
        position: 'absolute',
        top: -100, right: -100,
        width: 280, height: 280,
        borderRadius: '50%',
        background: 'radial-gradient(circle, #00FF8718 0%, transparent 70%)',
        opacity: hover ? 1 : 0.5,
        transition: 'opacity 0.4s',
        pointerEvents: 'none',
      }} />

      {/* Number badge */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        marginBottom: 28,
      }}>
        <div style={{
          width: 56, height: 56,
          background: hover ? '#00FF87' : '#0A0B12',
          color: hover ? '#06070C' : '#00FF87',
          border: `1px solid ${hover ? '#00FF87' : '#00FF8740'}`,
          borderRadius: 14,
          display: 'grid', placeItems: 'center',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 22, fontWeight: 800,
          letterSpacing: '-0.02em',
          boxShadow: hover ? '0 0 30px #00FF8770' : 'none',
          transition: 'all 0.3s',
        }}>{n}</div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10, color: '#9AA3B2',
          letterSpacing: '0.15em',
        }}>STEP·{n}</div>
      </div>

      {/* Mockup visual */}
      <div style={{
        height: 200,
        background: '#06070C',
        border: '1px solid #FFFFFF08',
        borderRadius: 12,
        marginBottom: 24,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {visual === 'squad' && <SquadVisual />}
        {visual === 'league' && <LeagueVisual />}
        {visual === 'points' && <PointsVisual />}
      </div>

      <h3 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 24, fontWeight: 700,
        color: '#F4F6FA',
        margin: '0 0 12px',
        letterSpacing: '-0.02em',
      }}>{title}</h3>

      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 14, lineHeight: 1.6,
        color: '#9AA3B2',
        margin: 0,
      }}>{desc}</p>

      <div style={{
        marginTop: 20,
        display: 'flex', alignItems: 'center', gap: 6,
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 12, fontWeight: 600,
        color: hover ? '#00FF87' : '#9AA3B2',
        letterSpacing: '0.06em', textTransform: 'uppercase',
        transition: 'color 0.3s',
      }}>
        Learn more
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{
          transform: hover ? 'translateX(4px)' : 'translateX(0)',
          transition: 'transform 0.3s',
        }}>
          <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

const SquadVisual = () => (
  <div style={{ position: 'absolute', inset: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
    {[
      ['ST', 'Haaland', '£14.0m', '#00FF87'],
      ['MID', 'Salah', '£12.5m', '#00FF87'],
      ['DEF', 'Saliba', '£6.0m', '#00C2FF'],
    ].map(([pos, name, price, c], i) => (
      <div key={i} style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: '#0F1117',
        border: '1px solid #FFFFFF0A',
        borderRadius: 8,
        padding: '8px 10px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 6,
            background: `${c}14`, border: `1px solid ${c}40`,
            display: 'grid', placeItems: 'center',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 9, fontWeight: 600, color: c,
          }}>{pos}</div>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12, fontWeight: 600, color: '#F4F6FA',
          }}>{name}</span>
        </div>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, color: '#9AA3B2',
        }}>{price}</span>
      </div>
    ))}
    <div style={{
      marginTop: 4,
      display: 'flex', justifyContent: 'space-between',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10, color: '#00FF87',
      letterSpacing: '0.1em',
    }}>
      <span>BUDGET</span>
      <span>£32.5m / £100m</span>
    </div>
    <div style={{
      height: 4, background: '#0F1117', borderRadius: 2, overflow: 'hidden',
    }}>
      <div style={{
        width: '32%', height: '100%',
        background: 'linear-gradient(90deg, #00FF87, #00C2FF)',
        boxShadow: '0 0 8px #00FF87',
      }} />
    </div>
  </div>
);

const LeagueVisual = () => (
  <div style={{ position: 'absolute', inset: 16 }}>
    <div style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10, color: '#9AA3B2',
      letterSpacing: '0.15em',
      marginBottom: 8,
    }}>OFFICE LEGENDS · 24 MEMBERS</div>
    {[
      { rank: 1, name: 'You', pts: 1842, isYou: true },
      { rank: 2, name: 'Marco', pts: 1791 },
      { rank: 3, name: 'Priya', pts: 1768 },
      { rank: 4, name: 'Tomás', pts: 1742 },
    ].map((r, i) => (
      <div key={i} style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '7px 10px',
        background: r.isYou ? '#00FF8714' : 'transparent',
        border: r.isYou ? '1px solid #00FF8740' : '1px solid transparent',
        borderRadius: 6,
        marginBottom: 4,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 13, fontWeight: 700,
            color: r.rank === 1 ? '#00FF87' : '#9AA3B2',
            width: 18,
          }}>{r.rank}</span>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12, fontWeight: 600,
            color: r.isYou ? '#00FF87' : '#F4F6FA',
          }}>{r.name}</span>
        </div>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, color: '#F4F6FA',
        }}>{r.pts}</span>
      </div>
    ))}
  </div>
);

const PointsVisual = () => {
  const events = [
    { time: "67'", text: 'Goal · Haaland', pts: '+4', c: '#00FF87' },
    { time: "61'", text: 'Assist · Foden', pts: '+3', c: '#00FF87' },
    { time: "44'", text: 'Yellow · Rice', pts: '−1', c: '#FF6B6B' },
    { time: "23'", text: 'Clean Sheet · Onana', pts: '+4', c: '#00C2FF' },
  ];
  return (
    <div style={{ position: 'absolute', inset: 16 }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: 10,
      }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10, color: '#00FF87',
          letterSpacing: '0.15em',
        }}>● LIVE</span>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 16, fontWeight: 700, color: '#00FF87',
        }}>+10</span>
      </div>
      {events.map((e, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '5px 0',
          borderBottom: i < events.length - 1 ? '1px solid #FFFFFF06' : 'none',
        }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10, color: '#9AA3B2',
            width: 28,
          }}>{e.time}</span>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11, color: '#F4F6FA',
            flex: 1,
          }}>{e.text}</span>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12, fontWeight: 700, color: e.c,
          }}>{e.pts}</span>
        </div>
      ))}
    </div>
  );
};

Object.assign(window, { WhyPlay, FeatureCard });
