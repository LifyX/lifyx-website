import { useState } from 'react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FAQPage() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ position: 'relative' }}>
      <div className="mx-auto max-w-[1000px] px-6 py-24 md:py-[140px]">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-3xl md:text-5xl font-bold tracking-tight"
          >
            {t('faq.header.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            {t('faq.header.subtitle')}
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-2">
          {faqItems.map((index) => {
            const isOpen = openFaq === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="border-b border-border"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between py-4 md:py-6 text-left transition-colors hover:text-primary"
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-primary' : 'text-foreground'}`}>
                    {t(`faq.q${index}`)}
                  </span>
                  <span className="ml-6 flex h-6 w-6 shrink-0 items-center justify-center text-primary">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 text-muted-foreground leading-relaxed pr-4 md:pr-12">
                        {t(`faq.a${index}`)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 md:mt-20 flex flex-col items-center text-center"
        >
          <div className="mb-8 md:mb-10 h-px w-16 bg-border" />
          
          <h3 className="mb-6 md:mb-8 text-xl md:text-2xl font-medium text-foreground">
            {t('faq.cta.text')}
          </h3>
          
          <Button 
            asChild 
            size="lg" 
            className="bg-primary text-black hover:bg-primary/90 h-12 md:h-14 px-8 text-lg font-semibold rounded-full"
          >
            <Link to="/contact">
              {t('faq.cta.button')}
            </Link>
          </Button>
        </motion.div>

      </div>
    </div>
  );
}