import { motion } from 'motion/react';
import { Check, Sparkles, Zap, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from './ui/utils';

interface ServiceItem {
  id: string;
  titleKey: string;
  descKey: string;
  includedLabelKey: string;
  includedItems: string[];
  idealForLabelKey: string;
  idealForItems: string[];
  outcomeLabelKey: string;
  outcomeTextKey: string;
  icon: React.ElementType;
}

const SERVICES: ServiceItem[] = [
  {
    id: '01',
    titleKey: 'services.s1.title',
    descKey: 'services.s1.desc',
    includedLabelKey: 'services.s1.included',
    includedItems: [
      'services.s1.item1',
      'services.s1.item2',
      'services.s1.item3',
      'services.s1.item4',
      'services.s1.item5',
    ],
    idealForLabelKey: 'services.s1.idealFor',
    idealForItems: [
      'services.s1.ideal1',
      'services.s1.ideal2',
      'services.s1.ideal3',
    ],
    outcomeLabelKey: 'services.s1.outcome',
    outcomeTextKey: 'services.s1.outcomeText',
    icon: Sparkles,
  },
  {
    id: '02',
    titleKey: 'services.s2.title',
    descKey: 'services.s2.desc',
    includedLabelKey: 'services.s2.included',
    includedItems: [
      'services.s2.item1',
      'services.s2.item2',
      'services.s2.item3',
      'services.s2.item4',
      'services.s2.item5',
    ],
    idealForLabelKey: 'services.s2.idealFor',
    idealForItems: [
      'services.s2.ideal1',
      'services.s2.ideal2',
      'services.s2.ideal3',
    ],
    outcomeLabelKey: 'services.s2.outcome',
    outcomeTextKey: 'services.s2.outcomeText',
    icon: Zap,
  },
  {
    id: '03',
    titleKey: 'services.s3.title',
    descKey: 'services.s3.desc',
    includedLabelKey: 'services.s3.included',
    includedItems: [
      'services.s3.item1',
      'services.s3.item2',
      'services.s3.item3',
      'services.s3.item4',
    ],
    idealForLabelKey: 'services.s3.idealFor',
    idealForItems: [
      'services.s3.ideal1',
      'services.s3.ideal2',
      'services.s3.ideal3',
    ],
    outcomeLabelKey: 'services.s3.outcome',
    outcomeTextKey: 'services.s3.outcomeText',
    icon: Target,
  },
];

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const { t } = useLanguage();
  
  // Adjusted offset calculation for tighter stacking
  const topOffset = 120 + index * 20; 
  
  return (
    <div 
      className="relative lg:sticky mb-12 lg:top-[var(--sticky-top)]"
      style={{ 
        '--sticky-top': `${topOffset}px`,
        zIndex: index + 10 // Ensure high z-index starting base
      } as React.CSSProperties}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative group"
      >
        {/* Card Container */}
        <div className="
          relative overflow-hidden
          rounded-3xl 
          bg-card dark:bg-[#0A0A0A] border border-border/60 dark:border-white/10
          shadow-xl shadow-primary/5 dark:shadow-2xl dark:shadow-black/50
        ">
          {/* Subtle Green Gradient Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-0">
            {/* Left Column: Core Value */}
            <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border/60 dark:border-white/5 relative z-10">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-6xl font-display font-bold text-foreground/5 dark:text-white/5 select-none">
                    {service.id}
                  </span>
                  <div className="w-12 h-[1px] bg-primary/30" />
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-6 leading-tight">
                  {t(service.titleKey)}
                </h3>
                
                <p className="text-lg text-muted-foreground dark:text-neutral-400 leading-relaxed font-light">
                  {t(service.descKey)}
                </p>
              </div>

              <div className="mt-12 lg:mt-20">
                <div className="inline-flex flex-col items-start gap-2">
                  <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                    {t(service.outcomeLabelKey)}
                  </span>
                  <p className="text-xl text-foreground dark:text-white font-medium">
                    {t(service.outcomeTextKey)}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 bg-muted/30 dark:bg-white/[0.02]">
              <div className="grid md:grid-cols-2 gap-12 h-full">
                
                {/* Included List */}
                <div className="flex flex-col">
                  <h4 className="flex items-center gap-3 text-sm font-medium text-foreground dark:text-white mb-8 tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {t(service.includedLabelKey)}
                  </h4>
                  <ul className="space-y-4">
                    {service.includedItems.map((key, i) => (
                      <motion.li 
                        key={key}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <Check className="w-5 h-5 text-primary/60 shrink-0 group-hover/item:text-primary transition-colors mt-0.5" />
                        <span className="text-muted-foreground dark:text-neutral-300 group-hover/item:text-foreground dark:group-hover/item:text-white transition-colors">
                          {t(key)}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For List */}
                <div className="flex flex-col">
                  <h4 className="flex items-center gap-3 text-sm font-medium text-foreground dark:text-white mb-8 tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 dark:bg-neutral-600" />
                    {t(service.idealForLabelKey)}
                  </h4>
                  <ul className="space-y-3">
                    {service.idealForItems.map((key, i) => (
                      <motion.li 
                        key={key}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        className="
                          px-4 py-3 rounded-lg border border-border/60 dark:border-white/5 bg-background dark:bg-white/[0.02]
                          text-muted-foreground dark:text-neutral-400 text-sm hover:border-primary/50 dark:hover:border-white/10 hover:bg-muted/50 dark:hover:bg-white/[0.05] hover:text-foreground dark:hover:text-white
                          transition-all duration-300
                        "
                      >
                        {t(key)}
                      </motion.li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ServiceDetailSlider() {
  return (
    <div className="w-full relative pb-40">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col">
        {SERVICES.map((service, index) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
}
