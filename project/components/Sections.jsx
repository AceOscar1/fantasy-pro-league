// Waitlist + App + Footer
const Waitlist = () => {
  const [email, setEmail] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (email.includes('@')) setSubmitted(true);
  };

  return (
    <section style={{
      position: 'relative',
      padding: '120px 48px',
      background: '#06070C',
    }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <div style={{
          position: 'relative',
          background: 'linear-gradient(180deg, #0F1117 0%, #0A0B12 100%)',
          border: '1px solid #00FF8740',
          borderRadius: 24,
          padding: '64px 56px',
          textAlign: 'center',
          boxShadow: '0 0 0 1px #00FF8720 inset, 0 40px 80px -20px #00000099, 0 0 100px -20px #00FF8740',
          overflow: 'hidden',
        }}>
          {/* Glow corners */}
          <div style={{
            position: 'absolute', top: -120, left: -120,
            width: 320, height: 320, borderRadius: '50%',
            background: 'radial-gradient(circle, #00FF8728 0%, transparent 70%)',
          }} />
          <div style={{
            position: 'absolute', bottom: -120, right: -120,
            width: 320, height: 320, borderRadius: '50%',
            background: 'radial-gradient(circle, #00C2FF20 0%, transparent 70%)',
          }} />

          <div style={{ position: 'relative' }}>
            <SectionEyebrow>Limited Spots</SectionEyebrow>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(36px, 4.5vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#F4F6FA',
              margin: '20px auto 16px',
              maxWidth: 700,
            }}>
              Get in early. <span style={{ color: '#00FF87' }}>Be first off the bench.</span>
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16, color: '#9AA3B2',
              maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.55,
            }}>
              Be first. No spam. Just launch news, beta invites, and an exclusive founder badge for your manager profile.
            </p>

            {!submitted ? (
              <form onSubmit={submit} style={{
                display: 'flex', gap: 12, maxWidth: 520, margin: '0 auto',
              }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="you@email.com"
                  style={{
                    flex: 1,
                    padding: '16px 20px',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    background: '#06070C',
                    border: `1px solid ${focused ? '#00FF87' : '#FFFFFF14'}`,
                    borderRadius: 12,
                    color: '#F4F6FA',
                    outline: 'none',
                    boxShadow: focused ? '0 0 0 3px #00FF8720, 0 0 24px #00FF8740' : 'none',
                    transition: 'all 0.2s',
                  }}
                />
                <NeonButton variant="primary" size="lg">Join Waitlist</NeonButton>
              </form>
            ) : (
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '16px 28px',
                background: '#00FF8714',
                border: '1px solid #00FF87',
                borderRadius: 12,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 15, fontWeight: 600, color: '#00FF87',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                You're on the list. Welcome, manager.
              </div>
            )}

            <div style={{
              display: 'flex', justifyContent: 'center', gap: 24,
              marginTop: 32,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11, color: '#9AA3B2',
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
              <span>● 12,408 Joined</span>
              <span>○ Beta Aug 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GetTheApp = () => (
  <section style={{
    position: 'relative',
    padding: '120px 48px',
    background: '#04050A',
    borderTop: '1px solid #FFFFFF08',
    overflow: 'hidden',
  }}>
    <div style={{
      maxWidth: 1400, margin: '0 auto',
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center',
    }}>
      {/* Left */}
      <div>
        <SectionEyebrow color="#00C2FF">Mobile App</SectionEyebrow>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(36px, 4.8vw, 60px)',
          fontWeight: 700,
          lineHeight: 1.0,
          letterSpacing: '-0.03em',
          color: '#F4F6FA',
          margin: '20px 0 24px',
        }}>
          Manage from <span style={{ color: '#00FF87' }}>anywhere.</span><br />
          Live scores in your pocket.
        </h2>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 17, color: '#9AA3B2',
          maxWidth: 460, margin: '0 0 36px', lineHeight: 1.55,
        }}>
          Push notifications the second your captain scores. One-tap transfers. Match-day chat with your league. Built for the 90+5.
        </p>

        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <StoreButton store="apple" />
          <StoreButton store="google" />
        </div>

        {/* Feature bullets */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 16, marginTop: 48,
        }}>
          {[
            ['Live Push', 'Goal alerts & lineups'],
            ['Quick Sub', 'Bench in one tap'],
            ['League Chat', 'Trash-talk built in'],
            ['Offline Mode', 'See your team anywhere'],
          ].map(([t, d], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <div style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#00FF87', boxShadow: '0 0 8px #00FF87',
                marginTop: 8,
              }} />
              <div>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 14, fontWeight: 700, color: '#F4F6FA',
                }}>{t}</div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13, color: '#9AA3B2',
                  marginTop: 2,
                }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: phones */}
      <div style={{ position: 'relative', height: 600, perspective: 1400 }}>
        {/* Glow behind phones */}
        <div style={{
          position: 'absolute',
          left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
          width: 500, height: 500,
          background: 'radial-gradient(circle, #00FF8722 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        <PhoneMockup
          variant="home"
          style={{
            position: 'absolute',
            left: '5%', top: '5%',
            transform: 'rotate(-8deg) translateZ(-40px)',
            animation: 'floatPhone 7s ease-in-out infinite',
          }}
        />
        <PhoneMockup
          variant="match"
          style={{
            position: 'absolute',
            right: '5%', top: '15%',
            transform: 'rotate(6deg) translateZ(20px)',
            animation: 'floatPhone 7s 1.5s ease-in-out infinite',
            zIndex: 2,
          }}
        />
      </div>
    </div>
  </section>
);

const StoreButton = ({ store }) => (
  <button style={{
    display: 'inline-flex', alignItems: 'center', gap: 12,
    padding: '14px 22px',
    background: '#0F1117',
    border: '1px solid #00FF8730',
    borderRadius: 999,
    color: '#F4F6FA',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: "'Inter', sans-serif",
  }}
  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#00FF87'; e.currentTarget.style.boxShadow = '0 0 24px #00FF8740'; }}
  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#00FF8730'; e.currentTarget.style.boxShadow = 'none'; }}
  >
    {store === 'apple' ? (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.05 12.04c-.03-3.13 2.55-4.63 2.67-4.71-1.46-2.13-3.73-2.43-4.54-2.46-1.93-.2-3.77 1.14-4.75 1.14-.99 0-2.49-1.11-4.1-1.08-2.11.03-4.06 1.23-5.14 3.12-2.2 3.81-.56 9.45 1.58 12.55 1.05 1.51 2.29 3.21 3.91 3.15 1.58-.06 2.18-1.02 4.09-1.02 1.91 0 2.45 1.02 4.12.99 1.7-.03 2.78-1.54 3.81-3.06 1.21-1.75 1.71-3.46 1.74-3.55-.04-.02-3.34-1.28-3.39-5.07zM14.04 3.7c.86-1.05 1.45-2.51 1.29-3.96-1.24.05-2.78.83-3.68 1.87-.8.92-1.5 2.41-1.31 3.83 1.39.11 2.81-.7 3.7-1.74z"/>
      </svg>
    ) : (
      <svg width="20" height="20" viewBox="0 0 24 24">
        <path d="M3.6 1.5c-.4.4-.6.9-.6 1.6v17.8c0 .7.2 1.2.6 1.6L13.4 12 3.6 1.5zM14.5 13l2.6 2.6-11 6.3c-.3.2-.6.2-.9.1L14.5 13zM18.7 8.6l-3.6 2.1-2.6-2.6 2.6-2.6 3.6 2.1c1 .6 1 1.6 0 2.2l-.1.1zM5.2 1.4c.3-.1.6-.1.9.1l11 6.3-2.6 2.6L5.2 1.4z" fill="#00FF87"/>
      </svg>
    )}
    <div style={{ textAlign: 'left' }}>
      <div style={{
        fontSize: 9, color: '#9AA3B2',
        letterSpacing: '0.1em', textTransform: 'uppercase',
        fontFamily: "'JetBrains Mono', monospace",
      }}>{store === 'apple' ? 'Download on the' : 'Get it on'}</div>
      <div style={{
        fontSize: 14, fontWeight: 700, color: '#F4F6FA',
        fontFamily: "'Space Grotesk', sans-serif",
        marginTop: 1,
      }}>{store === 'apple' ? 'App Store' : 'Google Play'}</div>
    </div>
  </button>
);

const PhoneMockup = ({ variant, style }) => (
  <div style={{
    width: 280, height: 580,
    background: '#06070C',
    border: '8px solid #1A1F2A',
    borderRadius: 44,
    boxShadow: '0 40px 80px -20px #000000, 0 0 0 1px #00FF8720, 0 0 60px -20px #00FF8740',
    overflow: 'hidden',
    position: 'relative',
    ...style,
  }}>
    {/* Notch */}
    <div style={{
      position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)',
      width: 90, height: 24, background: '#000', borderRadius: 16,
      zIndex: 10,
    }} />

    {variant === 'home' ? <PhoneHome /> : <PhoneMatch />}
  </div>
);

const PhoneHome = () => (
  <div style={{ padding: '46px 16px 16px', height: '100%', background: '#06070C' }}>
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '8px 4px',
    }}>
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 16, fontWeight: 800, color: '#F4F6FA',
      }}>FANTASY<span style={{ color: '#00FF87' }}>PRO</span></div>
      <div style={{
        width: 28, height: 28, borderRadius: '50%',
        background: 'linear-gradient(135deg, #00FF87, #00C2FF)',
      }} />
    </div>

    {/* Card */}
    <div style={{
      marginTop: 14,
      background: 'linear-gradient(180deg, #0F1117 0%, #0A0B12 100%)',
      border: '1px solid #00FF8730',
      borderRadius: 14, padding: 14,
    }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 9, color: '#00FF87', letterSpacing: '0.15em', marginBottom: 6,
      }}>● LIVE · GW 24</div>
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 36, fontWeight: 800, color: '#F4F6FA',
        letterSpacing: '-0.03em', lineHeight: 1,
      }}>+87 <span style={{ fontSize: 14, color: '#00FF87' }}>pts</span></div>
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 11, color: '#9AA3B2', marginTop: 4,
      }}>Rank up 1,204 places</div>
      <div style={{
        marginTop: 12, height: 6, background: '#06070C', borderRadius: 3,
        overflow: 'hidden',
      }}>
        <div style={{
          width: '78%', height: '100%',
          background: 'linear-gradient(90deg, #00FF87, #00C2FF)',
          boxShadow: '0 0 8px #00FF87',
        }} />
      </div>
    </div>

    <div style={{
      marginTop: 12,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 9, color: '#9AA3B2', letterSpacing: '0.15em',
    }}>YOUR XI</div>

    {[
      { name: 'Haaland', pos: 'ST', pts: 16, c: true },
      { name: 'Salah', pos: 'RW', pts: 10 },
      { name: 'Saka', pos: 'LW', pts: 12 },
      { name: 'Bellingham', pos: 'CM', pts: 9 },
    ].map((p, i) => (
      <div key={i} style={{
        marginTop: 8,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: '#0F1117',
        border: '1px solid #FFFFFF08',
        borderRadius: 10, padding: '8px 10px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 24, height: 24, borderRadius: 6,
            background: p.c ? '#00FF87' : '#06070C',
            border: p.c ? 'none' : '1px solid #FFFFFF14',
            display: 'grid', placeItems: 'center',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 8, fontWeight: 700,
            color: p.c ? '#06070C' : '#9AA3B2',
          }}>{p.pos}</div>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12, fontWeight: 600, color: '#F4F6FA',
          }}>{p.name}</span>
          {p.c && <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 10, fontWeight: 700, color: '#00FF87',
          }}>(C)</span>}
        </div>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 14, fontWeight: 800, color: '#F4F6FA',
        }}>{p.pts}</span>
      </div>
    ))}
  </div>
);

const PhoneMatch = () => (
  <div style={{ padding: '46px 0 0', height: '100%', background: '#06070C' }}>
    <div style={{
      padding: '12px 16px',
      borderBottom: '1px solid #FFFFFF08',
      display: 'flex', alignItems: 'center', gap: 10,
    }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M15 18l-6-6 6-6" stroke="#9AA3B2" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, color: '#9AA3B2', letterSpacing: '0.15em',
      }}>MATCH CENTER</span>
    </div>

    <div style={{
      padding: '20px 16px',
      background: 'linear-gradient(180deg, #00FF8714 0%, transparent 100%)',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div style={{ textAlign: 'center', flex: 1 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 10,
            background: '#6CABDD', margin: '0 auto 8px',
          }} />
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12, fontWeight: 700, color: '#F4F6FA',
          }}>ETU</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 9, color: '#00FF87', letterSpacing: '0.15em',
          }}>67' LIVE</div>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 32, fontWeight: 800, color: '#F4F6FA',
            margin: '4px 0', letterSpacing: '-0.03em',
          }}>2 — 1</div>
        </div>
        <div style={{ textAlign: 'center', flex: 1 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 10,
            background: '#C8102E', margin: '0 auto 8px',
          }} />
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12, fontWeight: 700, color: '#F4F6FA',
          }}>ANF</div>
        </div>
      </div>
    </div>

    <div style={{ padding: 16 }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 9, color: '#9AA3B2', letterSpacing: '0.15em',
        marginBottom: 10,
      }}>YOUR PLAYERS</div>
      {[
        { name: 'Haaland', ev: 'Goal · 67\'', pts: '+8', new: true },
        { name: 'Salah', ev: '4 shots', pts: '+2' },
        { name: 'Foden', ev: 'Assist · 23\'', pts: '+3' },
      ].map((e, i) => (
        <div key={i} style={{
          marginBottom: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: e.new ? '#00FF8714' : '#0F1117',
          border: e.new ? '1px solid #00FF8740' : '1px solid #FFFFFF08',
          borderRadius: 10, padding: '10px 12px',
        }}>
          <div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12, fontWeight: 600, color: '#F4F6FA',
            }}>{e.name}</div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, color: e.new ? '#00FF87' : '#9AA3B2',
              marginTop: 2,
            }}>{e.ev}</div>
          </div>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 14, fontWeight: 800,
            color: e.new ? '#00FF87' : '#F4F6FA',
          }}>{e.pts}</span>
        </div>
      ))}
    </div>
  </div>
);

const Footer = () => (
  <footer style={{
    position: 'relative',
    padding: '80px 48px 40px',
    background: '#04050A',
    borderTop: '1px solid #FFFFFF0A',
  }}>
    <div style={{ maxWidth: 1400, margin: '0 auto' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
        gap: 60, marginBottom: 60,
      }}>
        <div>
          <Logo size={26} />
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14, color: '#9AA3B2',
            maxWidth: 320, marginTop: 20, lineHeight: 1.6,
          }}>
            The fantasy league built for managers who play to win. Independent, ad-free, designed for match-day.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
            {['x', 'discord', 'instagram', 'tiktok'].map((s) => (
              <a key={s} href="#" style={{
                width: 38, height: 38,
                background: '#0F1117',
                border: '1px solid #FFFFFF14',
                borderRadius: 10,
                display: 'grid', placeItems: 'center',
                color: '#9AA3B2',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#00FF87'; e.currentTarget.style.color = '#00FF87'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#FFFFFF14'; e.currentTarget.style.color = '#9AA3B2'; }}
              >
                <SocialIcon name={s} />
              </a>
            ))}
          </div>
        </div>

        {[
          { title: 'Game', links: ['Squad Builder', 'Live Scores', 'Leaderboards', 'Cups & Prizes', 'Rules'] },
          { title: 'Community', links: ['League Hub', 'Discord', 'Manager Tips', 'Match Threads', 'Forum'] },
          { title: 'Info', links: ['About', 'Press Kit', 'Careers', 'Privacy', 'Terms'] },
        ].map((col) => (
          <div key={col.title}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, color: '#00FF87',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              marginBottom: 18,
            }}>{col.title}</div>
            {col.links.map((l) => (
              <a key={l} href="#" style={{
                display: 'block',
                fontFamily: "'Inter', sans-serif",
                fontSize: 14, color: '#9AA3B2',
                textDecoration: 'none',
                padding: '6px 0',
                transition: 'color 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#F4F6FA'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#9AA3B2'; }}
              >{l}</a>
            ))}
          </div>
        ))}
      </div>

      <div style={{
        paddingTop: 28,
        borderTop: '1px solid #FFFFFF0A',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 20,
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, color: '#9AA3B2',
          letterSpacing: '0.1em',
        }}>
          © 2026 FANTASYPRO LEAGUE · ALL RIGHTS RESERVED
        </div>
        <div style={{
          display: 'flex', gap: 6, alignItems: 'center',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, color: '#9AA3B2',
        }}>
          <Dot color="#00FF87" />
          <span>SERVER STATUS · OPERATIONAL</span>
        </div>
      </div>
    </div>
  </footer>
);

const SocialIcon = ({ name }) => {
  const paths = {
    x: <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
    discord: <path d="M19 5c-2-1-3.5-1-3.5-1l-.2.5c1.5.4 2.4 1 2.4 1-3-1.5-7.4-1.5-10.4 0 0 0 .9-.6 2.4-1l-.2-.5S8 4 6 5C5 6 4 9 4 12c2 2.5 4.5 2.5 4.5 2.5l.7-1c-1.2-.4-2-1-2-1 1.5 1 4 1.5 6.8 1.5 2.8 0 5.3-.5 6.8-1.5 0 0-.8.6-2 1l.7 1S22 14.5 24 12c0-3-1-6-2-7zM9 12c-.7 0-1.3-.7-1.3-1.5S8.3 9 9 9s1.3.7 1.3 1.5S9.7 12 9 12zm6 0c-.7 0-1.3-.7-1.3-1.5S14.3 9 15 9s1.3.7 1.3 1.5S15.7 12 15 12z" fill="currentColor" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" fill="none" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" fill="none" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></>,
    tiktok: <path d="M16 4v9.5a3.5 3.5 0 11-3.5-3.5h.5V7a6.5 6.5 0 106.5 6.5V8.5c1 .8 2.3 1.3 3.5 1.3V7c-1.5 0-3-.5-4-1.5-.7-.5-1-1-1-1.5h-2z" fill="currentColor" />,
  };
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none">{paths[name]}</svg>;
};

Object.assign(window, { Waitlist, GetTheApp, Footer });
