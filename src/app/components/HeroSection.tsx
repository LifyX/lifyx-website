import { Link } from 'react-router';
import { Button } from './ui/button';
import { ArrowRight, Leaf } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export function HeroSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Background Layers ── */}

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95 -z-10" />

      {/* Subtle grid overlay — structural texture */}
      <div
        className="absolute inset-0 -z-[8]"
        style={{
          opacity: isDark ? 0.035 : 0.02,
          backgroundImage: `
            linear-gradient(to right, ${isDark ? 'var(--primary)' : '#888'} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDark ? 'var(--primary)' : '#888'} 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Dark mode: large radial glow — top center */}
      {isDark && (
        <>
          <div
            className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full blur-[140px] -z-[7]"
            style={{ background: 'rgba(99,196,85,0.04)' }}
          />
          <div
            className="absolute -bottom-[200px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[120px] -z-[7]"
            style={{ background: 'rgba(99,196,85,0.03)' }}
          />
        </>
      )}

      {/* Light mode: subtle structural radial gradient behind hero text — no glow, no blur */}
      {!isDark && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] -z-[7] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 55% at 50% 48%, rgba(99,196,85,0.07) 0%, transparent 70%)',
          }}
        />
      )}

      {/* Floating accent dots — dark mode only */}
      {isDark && (
        <div className="hidden md:contents">
          <div
            className="absolute top-[18%] left-[12%] w-1.5 h-1.5 rounded-full bg-primary"
            style={{
              boxShadow: '0 0 8px var(--primary), 0 0 12px var(--primary)',
              opacity: 0.3,
              animation: 'twinkle 3s ease-in-out infinite both',
            }}
          />
          <div
            className="absolute top-[30%] right-[10%] w-2 h-2 rounded-full bg-primary"
            style={{
              boxShadow: '0 0 10px var(--primary), 0 0 15px var(--primary)',
              opacity: 0.3,
              animation: 'twinkle 2.5s ease-in-out 0.5s infinite both',
            }}
          />
          <div
            className="absolute bottom-[25%] left-[8%] w-2.5 h-2.5 rounded-full bg-primary"
            style={{
              boxShadow: '0 0 12px var(--primary), 0 0 18px var(--primary)',
              opacity: 0.3,
              animation: 'twinkle 3.5s ease-in-out 1s infinite both',
            }}
          />
          <div
            className="absolute bottom-[35%] right-[15%] w-1.5 h-1.5 rounded-full bg-primary"
            style={{
              boxShadow: '0 0 8px var(--primary), 0 0 12px var(--primary)',
              opacity: 0.3,
              animation: 'twinkle 2.8s ease-in-out 1.5s infinite both',
            }}
          />
          <div
            className="absolute top-[60%] left-[22%] w-1 h-1 rounded-full bg-primary"
            style={{
              boxShadow: '0 0 6px var(--primary), 0 0 10px var(--primary)',
              opacity: 0.3,
              animation: 'twinkle 3.2s ease-in-out 2s infinite both',
            }}
          />
          <div
            className="absolute top-[15%] right-[25%] w-1 h-1 rounded-full bg-primary"
            style={{
              boxShadow: '0 0 6px var(--primary), 0 0 10px var(--primary)',
              opacity: 0.3,
              animation: 'twinkle 2.7s ease-in-out 0.8s infinite both',
            }}
          />
        </div>
      )}

      {/* Vertical accent lines — slightly more visible in dark */}
      <div
        className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent -z-[6] hidden lg:block"
        style={{ opacity: isDark ? 0.06 : 0.04 }}
      />
      <div
        className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent -z-[6] hidden lg:block"
        style={{ opacity: isDark ? 0.06 : 0.04 }}
      />

      {/* Horizontal accent line */}
      <div
        className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent -z-[6] hidden lg:block"
        style={{ opacity: isDark ? 0.05 : 0.035 }}
      />

      {/* ── Content ── */}
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 py-24 md:py-32 text-center relative z-10">
        <h1 className="text-foreground mb-6 md:mb-8 font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight">
          <span className="block mb-2">{t('home.hero2.title')}</span>
          <span
            className="block pb-6 md:pb-8 leading-tight"
            style={{
              fontWeight: isDark ? 700 : 600,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              backgroundImage: isDark
                ? 'linear-gradient(to right, #63C455, #63C455, rgba(99,196,85,0.6))'
                : 'linear-gradient(to right, #63C455, #63C455, #4FA944)',
            }}
          >
            {t('home.hero2.titleHighlight')}
          </span>
        </h1>

        <p
          className="text-xl md:text-2xl leading-relaxed mb-12 max-w-4xl mx-auto font-light"
          style={{ color: isDark ? undefined : '#2A2A2A' }}
        >
          {t('home.hero2.subtitle')}
          <Leaf className="inline-block ml-2 h-5 w-5 text-primary" strokeWidth={2.5} />
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Button
            size="lg"
            className={`h-14 px-8 text-lg transition-all hover:scale-105 ${
              isDark
                ? 'hover:shadow-lg hover:shadow-primary/40'
                : 'hover:shadow-md hover:shadow-primary/20'
            }`}
            asChild
          >
            <Link to="/contact">
              {t('home.hero.cta1')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className={`h-14 px-8 text-lg transition-all hover:scale-105 ${
              isDark
                ? 'hover:bg-foreground/5 border-border'
                : 'border-[#63C455] text-[#63C455] hover:bg-[#63C455]/5'
            }`}
            asChild
          >
            <Link to="/portfolio">
              {t('home.hero.cta2')}
            </Link>
          </Button>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      {/* Star twinkle animation styles — dark mode only */}
      {isDark && (
        <style>{`
          @keyframes twinkle {
            0%, 100% {
              opacity: 0.3;
              transform: scale(0.9);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
          }
        `}</style>
      )}
    </section>
  );
}