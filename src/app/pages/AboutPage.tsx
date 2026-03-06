import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { Target, TrendingUp, ShieldCheck, Zap, BarChart3, ArrowRight, Layout, Cpu, Layers, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import anaPhoto from '../../assets/ebb5b69fa61218827934cd867a2634e8c5324b3b.png';
import nisithPhoto from '../../assets/aced1777e6f8694d88997f7582798ac1cc55c8ef.png';

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary" style={{ position: 'relative' }}>
      
      {/* Hero Section - Centered & Static Feel (Minimal) */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-6 lg:pt-48 lg:pb-32 flex flex-col items-center text-center">
        {/* Subtle grid background - more visible */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#63C45520_1px,transparent_1px),linear-gradient(to_bottom,#63C45520_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-foreground mb-6 md:mb-8 leading-[1.1]"
          >
            {t('about.hero.h1.part1')} <span className="text-primary">{t('about.hero.h1.highlight')}</span> {t('about.hero.h1.part2')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-lg md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light"
          >
            {t('about.hero.text')}
          </motion.p>
        </div>
      </section>

      {/* Creative Philosophy Section */}
      <section className="py-16 md:py-24 lg:py-32 px-6 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10 opacity-60" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10 opacity-40" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block opacity-80">
              {t('about.mission.title')}
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 md:mb-8 leading-[1.1] tracking-tight">
              {t('about.mission.headingPart1')} <span className="text-primary/90">{t('about.mission.headingHighlight')}</span>
            </h2>
            <div className="prose prose-base md:prose-lg prose-invert text-muted-foreground leading-relaxed mb-8 md:mb-10">
              <p className="text-lg md:text-xl font-light">
                {t('about.mission.text')}
              </p>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <Button size="lg" className="group h-12 md:h-14 px-8 text-base md:text-lg font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20" asChild>
                <Link to="/process">
                  {t('about.process.cta')}
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Creative Bento Grid */}
          <div className="relative w-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full h-auto md:h-[600px]">
              
              {/* Item 1: Long-Term Asset (Top Left, Large) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="md:col-span-7 md:row-span-6 relative group overflow-hidden rounded-[2rem] bg-card/30 border border-black/10 dark:border-white/10 hover:border-primary/30 transition-all duration-500 p-6 md:p-8 flex flex-col justify-between min-h-[280px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -right-10 -top-10 text-[8rem] md:text-[12rem] font-bold text-black/5 dark:text-white/[0.02] group-hover:text-primary/[0.05] transition-colors select-none leading-none">01</div>
                
                <div className="relative z-10">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                     <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
                   </div>
                   <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{t('about.bento.item1.title')}</h3>
                   <p className="text-muted-foreground font-light leading-relaxed max-w-sm">
                     {t('about.bento.item1.desc')}
                   </p>
                </div>
              </motion.div>

              {/* Item 2: Scalable (Top Right, Medium) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="md:col-span-5 md:row-span-5 relative group overflow-hidden rounded-[2rem] bg-card/30 border border-black/10 dark:border-white/10 hover:border-primary/30 transition-all duration-500 p-6 md:p-8 flex flex-col justify-between min-h-[240px]"
              >
                <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -right-6 -bottom-6 text-[6rem] md:text-[8rem] font-bold text-black/5 dark:text-white/[0.02] group-hover:text-blue-500/[0.05] transition-colors select-none leading-none">02</div>

                <div className="relative z-10">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                     <Layers className="w-5 h-5 md:w-6 md:h-6" />
                   </div>
                   <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{t('about.bento.item2.title')}</h3>
                   <p className="text-sm text-muted-foreground font-light leading-relaxed">
                     {t('about.bento.item2.desc')}
                   </p>
                </div>
              </motion.div>

              {/* Item 3: Efficient (Bottom Left, Medium) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:col-span-5 md:row-span-6 relative group overflow-hidden rounded-[2rem] bg-card/30 border border-black/10 dark:border-white/10 hover:border-primary/30 transition-all duration-500 p-6 md:p-8 flex flex-col justify-between min-h-[240px]"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -left-6 -bottom-6 text-[6rem] md:text-[8rem] font-bold text-black/5 dark:text-white/[0.02] group-hover:text-yellow-500/[0.05] transition-colors select-none leading-none">03</div>

                <div className="relative z-10">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-4 group-hover:scale-110 transition-transform">
                     <Zap className="w-5 h-5 md:w-6 md:h-6" />
                   </div>
                   <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{t('about.bento.item3.title')}</h3>
                   <p className="text-sm text-muted-foreground font-light leading-relaxed">
                     {t('about.bento.item3.desc')}
                   </p>
                </div>
              </motion.div>

              {/* Item 4: Measurable (Bottom Right, Large) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="md:col-span-7 md:row-span-5 relative group overflow-hidden rounded-[2rem] bg-card/30 border border-black/10 dark:border-white/10 hover:border-primary/30 transition-all duration-500 p-6 md:p-8 flex flex-col justify-between min-h-[240px]"
              >
                 <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 <div className="absolute right-4 top-4 w-32 h-32 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <BarChart3 className="w-full h-full" />
                 </div>
                 
                 <div className="absolute -right-2 bottom-4 text-[4rem] md:text-[6rem] font-bold text-black/5 dark:text-white/[0.02] group-hover:text-emerald-500/[0.05] transition-colors select-none leading-none">04</div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                     <Activity className="w-5 h-5 md:w-6 md:h-6" />
                   </div>
                   <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{t('about.bento.item4.title')}</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        {t('about.bento.item4.desc')}
                      </p>
                   </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </section>

      {/* Leadership Section - Clean & Minimal */}
      <section className="py-16 md:py-24 px-6 bg-card/30 border-t border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-16 gap-6">
            <div className="text-center md:text-left">
              <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block opacity-80">
                Team
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                {t('about.team.title')}
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Ana Zuluaga */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col bg-card border border-border/40 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              <div className="p-6 md:p-10 flex flex-col h-full">
                <div className="flex items-start gap-4 md:gap-6 mb-6 md:mb-8">
                  <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border border-border/40 group-hover:border-primary/50 transition-colors shrink-0">
                    <ImageWithFallback
                      src={anaPhoto}
                      alt="Ana Zuluaga"
                      className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold text-foreground mb-1">Ana Zuluaga</h3>
                    <p className="text-primary font-medium text-sm md:text-base tracking-wide uppercase opacity-90">{t('about.team.ana.roleShort')}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    {t('about.team.ana.bioShort')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Nisith Jayalath */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group flex flex-col bg-card border border-border/40 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              <div className="p-6 md:p-10 flex flex-col h-full">
                <div className="flex items-start gap-4 md:gap-6 mb-6 md:mb-8">
                  <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border border-border/40 group-hover:border-primary/50 transition-colors shrink-0">
                    <ImageWithFallback
                      src={nisithPhoto}
                      alt="Nisith Jayalath"
                      className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold text-foreground mb-1">Nisith Jayalath</h3>
                    <p className="text-primary font-medium text-sm md:text-base tracking-wide uppercase opacity-90">{t('about.team.nisith.roleShort')}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    {t('about.team.nisith.bioShort')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}