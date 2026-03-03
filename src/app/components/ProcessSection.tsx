import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Search, 
  Map, 
  Palette, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from './ui/utils';

// Icon mapping for the phases
const ICONS = [
  Search,
  Map,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  TrendingUp
];

interface LifecyclePhase {
  id: number;
  iconKey: string;
  nameKey: string;
  titleKey: string;
  durationKey: string;
  descKey: string;
  outputKey: string;
}

const PHASES: LifecyclePhase[] = [
  { id: 1, iconKey: 'services.lifecycle.phase1.icon', nameKey: 'services.lifecycle.phase1.name', titleKey: 'services.lifecycle.phase1.title', durationKey: 'services.lifecycle.phase1.duration', descKey: 'services.lifecycle.phase1.description', outputKey: 'services.lifecycle.phase1.output' },
  { id: 2, iconKey: 'services.lifecycle.phase2.icon', nameKey: 'services.lifecycle.phase2.name', titleKey: 'services.lifecycle.phase2.title', durationKey: 'services.lifecycle.phase2.duration', descKey: 'services.lifecycle.phase2.description', outputKey: 'services.lifecycle.phase2.output' },
  { id: 3, iconKey: 'services.lifecycle.phase3.icon', nameKey: 'services.lifecycle.phase3.name', titleKey: 'services.lifecycle.phase3.title', durationKey: 'services.lifecycle.phase3.duration', descKey: 'services.lifecycle.phase3.description', outputKey: 'services.lifecycle.phase3.output' },
  { id: 4, iconKey: 'services.lifecycle.phase4.icon', nameKey: 'services.lifecycle.phase4.name', titleKey: 'services.lifecycle.phase4.title', durationKey: 'services.lifecycle.phase4.duration', descKey: 'services.lifecycle.phase4.description', outputKey: 'services.lifecycle.phase4.output' },
  { id: 5, iconKey: 'services.lifecycle.phase5.icon', nameKey: 'services.lifecycle.phase5.name', titleKey: 'services.lifecycle.phase5.title', durationKey: 'services.lifecycle.phase5.duration', descKey: 'services.lifecycle.phase5.description', outputKey: 'services.lifecycle.phase5.output' },
  { id: 6, iconKey: 'services.lifecycle.phase6.icon', nameKey: 'services.lifecycle.phase6.name', titleKey: 'services.lifecycle.phase6.title', durationKey: 'services.lifecycle.phase6.duration', descKey: 'services.lifecycle.phase6.description', outputKey: 'services.lifecycle.phase6.output' },
  { id: 7, iconKey: 'services.lifecycle.phase7.icon', nameKey: 'services.lifecycle.phase7.name', titleKey: 'services.lifecycle.phase7.title', durationKey: 'services.lifecycle.phase7.duration', descKey: 'services.lifecycle.phase7.description', outputKey: 'services.lifecycle.phase7.output' },
];

function PhaseCard({ phase, index }: { phase: LifecyclePhase; index: number }) {
  const { t } = useLanguage();
  const Icon = ICONS[index % ICONS.length];

  return (
    <div className="
      relative flex flex-col justify-between
      w-[85vw] md:w-[400px] lg:w-[450px] 
      h-[500px] md:h-[550px]
      p-8 md:p-10
      rounded-3xl
      bg-[#0A0A0A] border border-white/10
      group hover:border-primary/50 transition-colors duration-500
    ">
      {/* Background Gradient Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

      {/* Top Section */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8">
          <div className="
            w-14 h-14 rounded-2xl bg-white/5 
            flex items-center justify-center 
            text-primary border border-white/5
            group-hover:bg-primary group-hover:text-black transition-all duration-300
          ">
            <Icon size={28} />
          </div>
          <span className="text-6xl font-display font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500">
            0{phase.id}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
          {t(phase.titleKey)}
        </h3>

        <p className="text-neutral-400 leading-relaxed text-lg">
          {t(phase.descKey)}
        </p>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 space-y-6">
        {/* Divider */}
        <div className="h-px w-full bg-white/10 group-hover:bg-white/20 transition-colors" />

        <div className="flex flex-col gap-4">
          {/* Duration removed as requested */}
          
          <div className="flex items-start gap-3 text-sm text-neutral-300">
            <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">Deliverable</span>
              <span className="font-medium text-white">{t(phase.outputKey)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProcessSection() {
  const { t } = useLanguage();
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section className="bg-neutral-950 relative md:h-[300vh]" style={{ position: 'relative' }}>
      {/* Scroll Trigger Wrapper */}
      <div ref={targetRef} className="absolute inset-0 pointer-events-none" style={{ position: 'absolute' }} />
      
      {/* Mobile View (Vertical List) */}
      <div className="md:hidden py-24 px-6 relative z-10">
        <div className="mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            {t('services.lifecycle.subtitle') || 'Our Process'}
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('services.lifecycle.title')}
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          {PHASES.map((phase, index) => (
            <PhaseCard key={phase.id} phase={phase} index={index} />
          ))}
        </div>
      </div>

      {/* Desktop View (Horizontal Scroll) */}
      <div className="hidden md:block sticky top-0 h-screen overflow-hidden">
        <div className="relative h-full flex flex-col">
          
          {/* Title Section - Static Top */}
          <div className="container mx-auto px-12 pt-20 pb-4 shrink-0 z-20">
             <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              {t('services.lifecycle.subtitle') || 'How We Work'}
            </span>
            <h2 className="text-5xl font-bold text-white leading-tight">
              {t('services.lifecycle.title')}
            </h2>
          </div>

          {/* Cards Track - Scroll Area */}
          <div className="relative flex-1 flex items-center w-full">
            {/* Background Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2" />
            
            <motion.div 
              style={{ x }} 
              className="flex gap-12 px-12 items-center" 
            >
              {PHASES.map((phase, index) => (
                <PhaseCard key={phase.id} phase={phase} index={index} />
              ))}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
