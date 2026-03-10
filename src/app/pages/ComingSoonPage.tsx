import { Link, useSearchParams } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ComingSoonPage() {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const projectName = searchParams.get('project') || '';

  return (
    <div className="relative min-h-screen bg-background text-foreground flex items-center justify-center px-6" style={{ position: 'relative' }}>
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-xl mx-auto"
      >
        {/* Project name label */}
        {projectName && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-primary font-mono text-sm md:text-base uppercase tracking-widest mb-4"
          >
            {projectName}
          </motion.p>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          {t('comingSoon.title')}
        </h1>

        {/* Description */}
        <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-10 max-w-md mx-auto">
          {t('comingSoon.description')}
        </p>

        {/* Animated dots */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary/60"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Back link */}
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors uppercase tracking-wider text-sm md:text-base font-bold group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          {t('comingSoon.backToPortfolio')}
        </Link>
      </motion.div>
    </div>
  );
}