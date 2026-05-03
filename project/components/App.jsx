// Top nav + Tweaks integration
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: '20px 48px',
      background: scrolled ? '#06070CE6' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid #FFFFFF0A' : '1px solid transparent',
      transition: 'all 0.3s',
    }}>
      <div style={{
        maxWidth: 1400, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <Logo size={22} />
        <div style={{
          display: 'flex', alignItems: 'center', gap: 36,
        }}>
          {['Game', 'Kits', 'Leagues', 'Pricing'].map((l) => (
            <a key={l} href="#" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14, fontWeight: 500,
              color: '#9AA3B2',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#F4F6FA'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#9AA3B2'; }}
            >{l}</a>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="#" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14, fontWeight: 500,
            color: '#F4F6FA',
            textDecoration: 'none',
          }}>Sign in</a>
          <NeonButton variant="primary" size="sm">Join Waitlist</NeonButton>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <div style={{
      background: '#06070C',
      color: '#F4F6FA',
      minHeight: '100vh',
      overflowX: 'hidden',
    }}>
      <Nav />
      <Hero />
      <WhyPlay />
      <KitCarousel />
      <Waitlist />
      <GetTheApp />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
