import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Sparkles, Zap, Target, ChevronUp, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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

/* ── Single service card (rendered inside the sticky frame) ── */
function ServiceCardContent({
  service,
  direction,
}: {
  service: ServiceItem;
  direction: number;
}) {
  const { t } = useLanguage();

  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: direction * 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: direction * -40 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 flex items-center justify-center px-4 md:px-6 pt-[80px] z-10"
    >
      <div
        className="
          w-full max-w-[1200px] h-[600px] relative overflow-hidden
          rounded-3xl
          bg-card dark:bg-[#0A0A0A]
          border border-border/60 dark:border-white/10
          shadow-xl shadow-primary/5 dark:shadow-2xl dark:shadow-black/50
        "
      >
        {/* Subtle green glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-0 h-full">
          {/* Left column */}
          <div className="lg:col-span-5 p-8 md:p-12 lg:p-10 xl:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border/60 dark:border-white/5 relative z-10 overflow-hidden">
            <div className="shrink min-h-0">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl font-display font-bold text-foreground/5 dark:text-white/5 select-none">
                  {service.id}
                </span>
                <div className="w-12 h-[1px] bg-primary/30" />
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-4 leading-tight">
                {t(service.titleKey)}
              </h3>

              <p className="text-lg text-muted-foreground dark:text-neutral-400 leading-relaxed font-light">
                {t(service.descKey)}
              </p>
            </div>

            <div className="mt-4 shrink-0">
              <div className="inline-flex flex-col items-start gap-1.5">
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  {t(service.outcomeLabelKey)}
                </span>
                <p className="text-lg lg:text-xl text-foreground dark:text-white font-medium leading-snug">
                  {t(service.outcomeTextKey)}
                </p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-7 p-8 md:p-12 lg:p-10 xl:p-14 bg-muted/30 dark:bg-white/[0.02]">
            <div className="grid md:grid-cols-2 gap-10 h-full">
              {/* Included */}
              <div className="flex flex-col">
                <h4 className="flex items-center gap-3 text-sm font-medium text-foreground dark:text-white mb-6 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {t(service.includedLabelKey)}
                </h4>
                <ul className="space-y-3">
                  {service.includedItems.map((key, i) => (
                    <motion.li
                      key={key}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.06 }}
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

              {/* Ideal for */}
              <div className="flex flex-col">
                <h4 className="flex items-center gap-3 text-sm font-medium text-foreground dark:text-white mb-6 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 dark:bg-neutral-600" />
                  {t(service.idealForLabelKey)}
                </h4>
                <ul className="space-y-3">
                  {service.idealForItems.map((key, i) => (
                    <motion.li
                      key={key}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.06 }}
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
  );
}

/* ── Progress dots (side rail) ── */
function ProgressDots({
  total,
  active,
}: {
  total: number;
  active: number;
}) {
  return (
    <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-50">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="relative flex items-center justify-center">
          <div
            className={`
              w-2 h-2 rounded-full transition-all duration-500
              ${i === active
                ? 'bg-primary scale-125 shadow-[0_0_8px_var(--primary)]'
                : 'bg-foreground/15 dark:bg-white/15'
              }
            `}
          />
          {i < total - 1 && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-3 bg-foreground/10 dark:bg-white/10" />
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Mobile fallback: simple stacked cards ── */
function MobileServiceCards() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-8 px-4 lg:hidden">
      {SERVICES.map((service) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div
            className="
              relative overflow-hidden rounded-2xl
              bg-card dark:bg-[#0A0A0A]
              border border-border/60 dark:border-white/10
              shadow-lg shadow-primary/5 dark:shadow-xl dark:shadow-black/50
            "
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            {/* Top section */}
            <div className="p-6 border-b border-border/60 dark:border-white/5 relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-5xl font-display font-bold text-foreground/5 dark:text-white/5 select-none">
                  {service.id}
                </span>
                <div className="w-8 h-[1px] bg-primary/30" />
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground dark:text-white mb-4 leading-tight">
                {t(service.titleKey)}
              </h3>
              <p className="text-base text-muted-foreground dark:text-neutral-400 leading-relaxed font-light">
                {t(service.descKey)}
              </p>
            </div>

            {/* Details */}
            <div className="p-6 bg-muted/30 dark:bg-white/[0.02]">
              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-medium text-foreground dark:text-white mb-4 tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {t(service.includedLabelKey)}
                  </h4>
                  <ul className="space-y-3">
                    {service.includedItems.map((key) => (
                      <li key={key} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-primary/60 shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground dark:text-neutral-300">
                          {t(key)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-medium text-foreground dark:text-white mb-4 tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                    {t(service.idealForLabelKey)}
                  </h4>
                  <ul className="space-y-2">
                    {service.idealForItems.map((key) => (
                      <li
                        key={key}
                        className="px-3 py-2.5 rounded-lg border border-border/60 dark:border-white/5 bg-background dark:bg-white/[0.02] text-muted-foreground dark:text-neutral-400 text-sm"
                      >
                        {t(key)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Outcome */}
              <div className="mt-6 pt-5 border-t border-border/60 dark:border-white/5">
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  {t(service.outcomeLabelKey)}
                </span>
                <p className="text-lg text-foreground dark:text-white font-medium mt-1.5">
                  {t(service.outcomeTextKey)}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Main export: desktop scroll-triggered + mobile stacked ── */
export function ServiceDetailSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const count = SERVICES.length;

  /* Scroll the page so that a specific card index becomes active */
  const scrollToCard = useCallback(
    (targetIndex: number) => {
      const el = containerRef.current;
      if (!el) return;
      const containerTop = el.offsetTop;
      const segmentHeight = (el.scrollHeight - window.innerHeight) / count;
      // Scroll to the midpoint of the target segment so it locks in cleanly
      const targetScroll = containerTop + segmentHeight * targetIndex + segmentHeight * 0.5;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    },
    [count],
  );

  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const scrollableHeight = el.scrollHeight - window.innerHeight;
    // How far we've scrolled into the container (0 → 1)
    const rawProgress = -rect.top / scrollableHeight;
    const progress = Math.max(0, Math.min(1, rawProgress));

    // Divide the scroll range into equal segments for each card
    const segmentSize = 1 / count;
    const newIndex = Math.min(count - 1, Math.floor(progress / segmentSize));

    setActiveIndex((prev) => {
      if (newIndex !== prev) {
        setDirection(newIndex > prev ? 1 : -1);
      }
      return newIndex;
    });
  }, [count]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      {/* Mobile: simple stacked cards */}
      <MobileServiceCards />

      {/* Desktop: scroll-triggered */}
      <div
        ref={containerRef}
        className="hidden lg:block relative z-10"
        style={{ height: `${count * 110}vh` }}
      >
        {/* Sticky viewport frame */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <ServiceCardContent
              key={SERVICES[activeIndex].id}
              service={SERVICES[activeIndex]}
              direction={direction}
            />
          </AnimatePresence>

          {/* ── Arrow navigation overlay — sits above all card layers ── */}
          <div className="absolute inset-0 z-50 pointer-events-none">
            {/* Up arrow — visible on services 2 and 3 */}
            {activeIndex > 0 && (
              <button
                onClick={() => scrollToCard(activeIndex - 1)}
                className="absolute top-24 left-1/2 -translate-x-1/2 pointer-events-auto cursor-pointer group p-2"
                aria-label="Previous service"
              >
                <ChevronUp
                  className="w-6 h-6 text-foreground/25 dark:text-white/25 group-hover:text-primary/70 transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </button>
            )}

            {/* Down arrow — visible on services 1 and 2 */}
            {activeIndex < count - 1 && (
              <button
                onClick={() => scrollToCard(activeIndex + 1)}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-auto cursor-pointer group p-2"
                aria-label="Next service"
              >
                <ChevronDown
                  className="w-6 h-6 text-foreground/25 dark:text-white/25 group-hover:text-primary/70 transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </button>
            )}
          </div>
        </div>

        <ProgressDots total={count} active={activeIndex} />
      </div>
    </>
  );
}