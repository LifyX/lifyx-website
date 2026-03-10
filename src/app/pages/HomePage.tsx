import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { ArrowRight, CheckCircle2, Globe, Layout, ShoppingCart, Calendar, Server, Zap, GitCommit, LifeBuoy, Timer, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { HeroSection } from '../components/HeroSection';
import { useMemo } from 'react';

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
    opacity: 0.15 + rand() * 0.25,
  }));
}

export function HomePage() {
  const { t } = useLanguage();
  const leaves = useMemo(() => generateLeaves(9, 42), []);
  
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden" style={{ position: 'relative' }}>
      {/* Animated Fixed Background Pattern */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Mobile-only falling leaves */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 md:hidden">
        {leaves.map((leaf, i) => (
          <div
            key={`leaf-${i}`}
            className="absolute"
            style={{
              left: leaf.left,
              top: '-30px',
              animation: `homeLeafFall ${leaf.duration}s linear ${leaf.delay}s infinite`,
              ['--sway' as string]: `${leaf.swayAmount}px`,
            }}
          >
            <svg
              width={leaf.size}
              height={leaf.size}
              viewBox="0 0 24 24"
              fill="none"
              style={{
                animation: `homeLeafSpin ${leaf.duration * 0.8}s linear ${leaf.delay}s infinite`,
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

      {/* Falling leaves keyframes */}
      <style>{`
        @keyframes homeLeafFall {
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

        @keyframes homeLeafSpin {
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
      `}</style>

      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 3. CORE SERVICES SECTION */}
      <section className="py-10 md:py-24 lg:py-[120px] px-6 lg:px-8 bg-background relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-20"
          >
             <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
               {t('home.cards.title')}
             </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group bg-card border border-border/40 hover:border-primary/50 p-6 md:p-8 rounded-[16px] flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="mb-6 w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Layout className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('home.cards.card1.title')}</h3>
              <p className="text-muted-foreground mb-8 flex-grow">
                {t('home.cards.card1.desc')}
              </p>
              <ul className="space-y-3 mb-8">
                {[t('home.cards.card1.item1'), t('home.cards.card1.item2'), t('home.cards.card1.item3'), t('home.cards.card1.item4')].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full mt-auto group-hover:border-primary/50 group-hover:text-primary" asChild>
                <Link to="/services">
                   {t('home.cards.learnMore')}
                </Link>
              </Button>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-card border border-border/40 hover:border-primary/50 p-6 md:p-8 rounded-[16px] flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="mb-6 w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <ShoppingCart className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('home.cards.card2.title')}</h3>
              <p className="text-muted-foreground mb-8 flex-grow">
                {t('home.cards.card2.desc')}
              </p>
              <ul className="space-y-3 mb-8">
                {[t('home.cards.card2.item1'), t('home.cards.card2.item2'), t('home.cards.card2.item3'), t('home.cards.card2.item4')].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full mt-auto group-hover:border-primary/50 group-hover:text-primary" asChild>
                <Link to="/services">
                   {t('home.cards.learnMore')}
                </Link>
              </Button>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group bg-card border border-border/40 hover:border-primary/50 p-6 md:p-8 rounded-[16px] flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="mb-6 w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('home.cards.card3.title')}</h3>
              <p className="text-muted-foreground mb-8 flex-grow">
                {t('home.cards.card3.desc')}
              </p>
              <ul className="space-y-3 mb-8">
                {[t('home.cards.card3.item1'), t('home.cards.card3.item2'), t('home.cards.card3.item3'), t('home.cards.card3.item4')].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full mt-auto group-hover:border-primary/50 group-hover:text-primary" asChild>
                <Link to="/services">
                   {t('home.cards.learnMore')}
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. TRUST / VALUE SECTION - Minimal Adaptive Design */}
      <section className="py-16 md:py-24 lg:py-32 px-6 lg:px-8 bg-secondary/50 dark:bg-card/30 relative border-y border-border/60 dark:border-border/20">
        <div className="max-w-7xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 mb-12 md:mb-20 items-start lg:items-end">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
               <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
                 {t('home.trust.title')}
               </h2>
               <p className="text-xl text-muted-foreground font-light max-w-xl leading-relaxed">
                 {t('home.trust.subtitle')}
               </p>
             </motion.div>
             
             <div className="flex justify-center lg:justify-end lg:pb-8">
                <Link 
                  to="/process" 
                  className="group flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary transition-colors duration-300"
                >
                  {t('services.process.title')}
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
             </div>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border/60 dark:border-border/40">
              {[
                { 
                  icon: Server, 
                   title: t('home.trust.item1.title'), 
                   desc: t('home.trust.item1.desc'),
                   delay: 0.1
                },
                { 
                  icon: Zap, 
                   title: t('home.trust.item2.title'), 
                   desc: t('home.trust.item2.desc'),
                   delay: 0.2
                },
                { 
                  icon: GitCommit, 
                   title: t('home.trust.item3.title'), 
                   desc: t('home.trust.item3.desc'),
                   delay: 0.3
                },
                { 
                  icon: LifeBuoy, 
                   title: t('home.trust.item4.title'), 
                   desc: t('home.trust.item4.desc'),
                   delay: 0.4
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="bg-transparent p-6 md:p-8 lg:p-10 group hover:bg-background/80 transition-all duration-500 relative border-r border-b border-border/60 dark:border-border/40"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay }}
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left z-10" />
                  
                  <div className="mb-4 md:mb-6 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 text-primary/80 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light group-hover:text-foreground/80 transition-colors duration-300">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. ABOUT PREVIEW SECTION */}
      <section className="py-16 md:py-24 lg:py-[120px] px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-[500px] mx-auto md:max-w-none md:mx-0"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
               {t('home.about.title')}
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed font-light mb-8">
               {t('home.about.text')}
            </p>
            <div className="flex justify-center md:justify-start">
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <Link to="/about">
                   {t('home.about.cta')}
                   <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Side - Animated Abstract Visual */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="hidden md:flex relative h-[400px] md:h-[500px] lg:h-[600px] w-full items-center justify-center"
          >
             {/* Animated Rings - Significantly Larger */}
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] border border-primary/10 rounded-full border-dashed"
             />
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
               className="absolute w-[220px] h-[220px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] border border-primary/15 rounded-full"
             />
             <motion.div 
               animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] bg-primary/5 rounded-full blur-3xl"
             />
             
             {/* Floating Card Representation - Scaled Up */}
             <motion.div
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 bg-card/90 border border-primary/20 p-6 md:p-8 rounded-3xl shadow-2xl backdrop-blur-md w-[90%] max-w-[380px]"
             >
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-500/20" />
                   <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-yellow-500/20" />
                   <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-500/20" />
                </div>
                <div className="space-y-4">
                   <motion.div 
                     animate={{ width: ["60%", "85%", "60%"] }}
                     transition={{ duration: 4, repeat: Infinity }}
                     className="h-4 bg-primary/20 rounded w-3/4" 
                   />
                   <div className="h-4 bg-muted/20 rounded w-1/2" />
                   <div className="h-4 bg-muted/20 rounded w-5/6" />
                   <div className="h-4 bg-muted/20 rounded w-2/3" />
                </div>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION (Renumbered) */}
      <section className="py-16 md:py-24 lg:py-[140px] px-6 lg:px-8 bg-secondary/50 dark:bg-card/30 border-y border-border/60 dark:border-border/20 relative text-center">
        <div className="max-w-3xl lg:max-w-4xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight"
          >
            {t('home.cta.title')}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 font-light"
          >
            {t('home.cta.subtitle')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="h-14 md:h-16 px-8 md:px-12 text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 hover:scale-105 transition-all" asChild>
              <Link to="/contact">
                 {t('home.cta.btn')}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}