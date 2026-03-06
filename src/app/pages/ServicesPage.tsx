import { useMemo } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ServiceDetailSlider } from '../components/ServiceDetailSlider';

// Generate randomized falling leaves configuration
function generateLeaves(count: number, seed: number) {
  let s = seed;
  const rand = () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };

  return Array.from({ length: count }, () => ({
    left: `${rand() * 100}%`,
    size: 10 + rand() * 14,
    duration: 5 + rand() * 5,
    delay: rand() * 8,
    swayAmount: 30 + rand() * 60,
    rotation: rand() * 360,
    rotationSpeed: 120 + rand() * 240,
    opacity: 0.15 + rand() * 0.25,
  }));
}

export function ServicesPage() {
  const { t } = useLanguage();
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const leaves = useMemo(() => generateLeaves(11, 77), []);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 pt-[80px]" style={{ position: 'relative' }}>
      
      {/* Page-wide falling leaves */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {leaves.map((leaf, i) => (
          <div
            key={`leaf-${i}`}
            className="absolute hidden md:block"
            style={{
              left: leaf.left,
              top: '-30px',
              animation: `leafFall ${leaf.duration}s linear ${leaf.delay}s infinite`,
              ['--sway' as string]: `${leaf.swayAmount}px`,
            }}
          >
            <svg
              width={leaf.size}
              height={leaf.size}
              viewBox="0 0 24 24"
              fill="none"
              style={{
                animation: `leafSpin ${leaf.duration * 0.8}s linear ${leaf.delay}s infinite`,
                filter: `drop-shadow(0 0 6px var(--primary)) drop-shadow(0 0 12px var(--primary))`,
                opacity: 0,
              }}
            >
              <path
                d="M12 2C6.5 6.5 4 11 4 15c0 3.5 2.5 6 6 7 .5.15 1 .2 1.5.2h1c.5 0 1-.05 1.5-.2 3.5-1 6-3.5 6-7 0-4-2.5-8.5-8-13z"
                fill="var(--primary)"
                fillOpacity={leaf.opacity}
              />
              <path
                d="M12 2v20M12 8c-2 2-3.5 4-4 6M12 12c2 1.5 3.5 3 4 5"
                stroke="var(--primary)"
                strokeOpacity={leaf.opacity * 0.6}
                strokeWidth="0.5"
                fill="none"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* 1. HERO SECTION */}
      <section className="py-16 md:py-[120px] px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div 
            className="absolute top-[20%] left-[10%] w-[600px] h-[600px] rounded-full bg-primary/[0.15] blur-[90px]"
            style={{
              animation: 'float1 20s ease-in-out infinite',
            }}
          />
          <div 
            className="absolute top-[50%] right-[15%] w-[500px] h-[500px] rounded-full bg-primary/[0.12] blur-[100px]"
            style={{
              animation: 'float2 25s ease-in-out infinite',
            }}
          />
          <div 
            className="absolute bottom-[10%] left-[30%] w-[450px] h-[450px] rounded-full bg-primary/[0.10] blur-[95px]"
            style={{
              animation: 'float3 22s ease-in-out infinite',
            }}
          />
        </div>

        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
              {t('services.hero.titleFull')}
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              {t('services.hero.subtitleFull')}
            </p>
          </motion.div>
        </div>
        
        {/* Animation keyframes */}
        <style>{`
          @keyframes float1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -40px) scale(1.1); }
            66% { transform: translate(-20px, 30px) scale(0.9); }
          }
          @keyframes float2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-40px, 30px) scale(0.9); }
            66% { transform: translate(25px, -35px) scale(1.05); }
          }
          @keyframes float3 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(35px, 25px) scale(1.08); }
            66% { transform: translate(-30px, -20px) scale(0.95); }
          }

          @keyframes leafFall {
            0% {
              transform: translateY(-30px) translateX(0);
              opacity: 0;
            }
            3% {
              opacity: 1;
            }
            40% {
              transform: translateY(calc(40vh)) translateX(var(--sway));
              opacity: 0.9;
            }
            70% {
              transform: translateY(calc(70vh)) translateX(calc(var(--sway) * -0.3));
              opacity: 0.5;
            }
            100% {
              transform: translateY(calc(100vh + 30px)) translateX(calc(var(--sway) * 0.4));
              opacity: 0;
            }
          }

          @keyframes leafSpin {
            0% {
              transform: rotate(0deg);
              opacity: 0;
            }
            8% {
              opacity: 1;
            }
            85% {
              opacity: 0.3;
            }
            100% {
              transform: rotate(360deg);
              opacity: 0;
            }
          }

          @keyframes lifecyclePulse {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.15); }
          }
        `}</style>
      </section>

      {/* 2. SERVICE DETAIL SLIDER + LIFECYCLE LINK (seamless) */}
      <section className="py-16 md:py-[120px] pb-24 md:pb-[20vh]">
        <ServiceDetailSlider />

        {/* Lifecycle Link — flows directly after services */}
        <div className="mt-20 md:mt-32 px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center relative"
          >
            {/* Glowing backdrop pulse */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
              <div
                className="w-[400px] h-[200px] md:w-[600px] md:h-[250px] rounded-full bg-primary/[0.06] blur-[80px]"
                style={{ animation: 'lifecyclePulse 4s ease-in-out infinite' }}
              />
            </div>

            <p className="text-sm md:text-base font-mono tracking-[0.35em] uppercase text-primary/70 mb-6 md:mb-8">
              {t('services.lifecycle_section.title')}
            </p>

            <Link
              to="/process"
              className="group inline-flex flex-col items-center gap-4 relative"
            >
              <span className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">
                {t('services.lifecycle_section.btn')}
              </span>

              {/* Animated arrow + line */}
              <span className="flex items-center gap-2 mt-2">
                <span className="block h-px w-10 md:w-16 bg-primary/50 group-hover:w-20 md:group-hover:w-24 group-hover:bg-primary transition-all duration-500 ease-out" />
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-primary/60 group-hover:text-primary group-hover:translate-x-1.5 transition-all duration-300 ease-out" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}