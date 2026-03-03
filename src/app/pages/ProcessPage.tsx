import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';

export function ProcessPage() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  
  const steps = [
    { id: '01', key: 'step1' },
    { id: '02', key: 'step2' },
    { id: '03', key: 'step3' },
    { id: '04', key: 'step4' },
    { id: '05', key: 'step5' },
    { id: '06', key: 'step6' },
    { id: '07', key: 'step7' },
    { id: '08', key: 'step8' },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden selection:bg-primary/30 selection:text-foreground" style={{ position: 'relative' }}>
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 opacity-50" />
      </div>

      {/* Header */}
      <header className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 md:mb-12 transition-colors duration-300">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('process.page.backToHome')}
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 md:mb-8 tracking-tight leading-[1.1]"
          >
            {t('process.page.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed"
          >
            {t('process.page.subtitle')}
          </motion.p>
        </div>
      </header>

      {/* Timeline Section */}
      <section className="pb-24 md:pb-40 px-6 relative" style={{ position: 'relative' }}>
        {/* Scroll Trigger Wrapper */}
        <div ref={containerRef} className="absolute inset-0 pointer-events-none" style={{ position: 'absolute' }} />
        
        <div className="max-w-[1200px] mx-auto relative">
          
          {/* Vertical Lines */}
          {/* Desktop Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-border/20 -translate-x-1/2 hidden md:block">
            <motion.div 
              style={{ scaleY, transformOrigin: "top" }} 
              className="w-full h-full bg-primary origin-top"
            />
          </div>
          {/* Mobile Left Line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-border/20 md:hidden">
            <motion.div 
              style={{ scaleY, transformOrigin: "top" }} 
              className="w-full h-full bg-primary origin-top"
            />
          </div>

          <div className="space-y-16 md:space-y-32">
            {steps.map((step, index) => (
              <TimelineStep key={step.id} stepId={step.id} stepKey={step.key} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 md:py-24 border-t border-border/20 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">{t('process.page.cta.title')}</h2>
            <p className="text-muted-foreground mb-8 md:mb-10 font-light text-base md:text-lg">
              {t('process.page.cta.subtitle')}
            </p>
            <Button size="lg" className="h-12 md:h-14 px-8 md:px-10 text-base md:text-lg bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300" asChild>
              <Link to="/contact">
                {t('process.page.cta.button')}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function TimelineStep({ stepId, stepKey, index }: { stepId: string; stepKey: string; index: number }) {
  const { t } = useLanguage();
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Content Side */}
      <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pl-24' : 'md:pr-24'}`}>
        <div className={`flex flex-col gap-3 md:gap-4 ${!isEven ? 'md:text-right md:items-end' : 'md:text-left md:items-start'}`}>
          <div className="flex items-baseline gap-3">
             <span className="text-primary font-mono text-sm tracking-wider opacity-80">{stepId}</span>
             <h3 className="text-xl md:text-3xl font-bold text-foreground leading-tight">{t(`process.${stepKey}.title`)}</h3>
          </div>
          
          <p className="text-muted-foreground leading-relaxed max-w-md font-light text-sm md:text-base">
            {t(`process.${stepKey}.description`)}
          </p>

          <div className={`mt-4 pt-4 border-t border-border/40 w-full max-w-md ${!isEven ? 'md:ml-auto' : ''}`}>
            <span className="block text-[11px] uppercase tracking-widest text-primary/80 mb-1 font-semibold">
              {t(`process.${stepKey}.deliverableLabel`)}
            </span>
            <span className="text-foreground text-sm font-medium">
              {t(`process.${stepKey}.deliverableText`)}
            </span>
          </div>
        </div>
      </div>

      {/* Center Marker */}
      <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex items-center justify-center">
        {/* Outer Glow */}
        <div className="w-4 h-4 rounded-full bg-background border-[3px] border-primary shadow-[0_0_15px_rgba(99,196,85,0.6)] z-20" />
      </div>

      {/* Empty Opposite Side for Balance */}
      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
}