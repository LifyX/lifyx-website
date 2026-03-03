import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'motion/react';
import { ArrowRight, Linkedin, Instagram, Facebook, Send, Circle } from 'lucide-react';
import logo from '../../assets/0b42223d9f55b7c8c03c00d28143a564ebd703f2.png';
import logoBlack from '../../assets/884e30d97f406d46d806b45565916678a69674e9.png';

export function Footer() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const links = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/portfolio', label: t('nav.portfolio') },
    { path: '/contact', label: t('nav.contact') },
  ];
  
  const legalLinks = [
    { path: '/privacy', label: t('footer.privacyPolicy') },
    { path: '/terms', label: t('footer.termsConditions') },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/lifyx',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/lifyxdigital/',
      icon: Instagram,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/people/LifyX/61587747907750/',
      icon: Facebook,
    },
  ];

  return (
    <footer className="relative border-t border-[rgba(99,196,85,0.15)] bg-background overflow-hidden">
      {/* Centered subtle background gradient */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/3 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,196,85,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,196,85,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Decorative green accent bar - top */}
      <motion.div 
        className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ width: '100%', transformOrigin: 'center' }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-[80px] pb-12 lg:px-8">
        {/* Main Footer Content - Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Logo, Tagline, Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start lg:col-span-1"
          >
            <Link to="/" className="inline-block group mb-3 relative">
              <motion.img
                src={theme === 'dark' ? logo : logoBlack}
                alt="LifyX Logo"
                className="h-8 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_16px_rgba(99,196,85,0.6)]"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
              {/* Decorative corner accent */}
              <motion.div 
                className="absolute -bottom-1 left-0 h-px bg-primary"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            
            <p className="text-xs mb-4 max-w-xs leading-relaxed" style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)' }}>
              {t('footer.tagline')}
            </p>

            {/* Status badge */}
            <motion.div 
              className="flex items-center gap-2 mb-4 px-2.5 py-1 rounded-full border border-primary/30 bg-primary/5"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Circle className="h-1.5 w-1.5 fill-primary text-primary" />
              </motion.div>
              <span className="text-[0.625rem] text-primary font-medium">Available for projects</span>
            </motion.div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative hover:text-primary transition-all duration-300"
                    style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)' }}
                    whileHover={{ 
                      scale: 1.1,
                      filter: 'drop-shadow(0 0 8px rgba(99,196,85,0.25))'
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon className="h-4 w-4" />
                    {/* Animated ring on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-full border border-primary/0"
                      whileHover={{ 
                        scale: 1.5,
                        borderColor: 'rgba(99,196,85,0.3)',
                        opacity: 0,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-col items-start md:pl-8 lg:pl-12"
          >
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-[0.625rem] font-bold uppercase tracking-[0.04em] text-primary">
                {t('footer.quickLinks')}
              </h3>
              <motion.div 
                className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{ transformOrigin: 'left' }}
              />
            </div>
            <ul className="flex flex-col gap-2">
              {links.map((link, index) => (
                <motion.li 
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="group relative text-xs hover:text-primary transition-colors duration-300 inline-block"
                    style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.75)' }}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <motion.span
                      className="absolute bottom-0 left-0 h-px bg-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Legal & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-start"
          >
            {/* Legal */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-[0.625rem] font-bold uppercase tracking-[0.04em] text-primary">
                  {t('footer.legal')}
                </h3>
                <motion.div 
                  className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
              <ul className="flex flex-col gap-2">
                {legalLinks.map((link, index) => (
                  <motion.li 
                    key={link.path}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className="group relative text-xs hover:text-primary transition-colors duration-300 inline-block"
                      style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.75)' }}
                    >
                      <span className="relative z-10">{link.label}</span>
                      <motion.span
                        className="absolute bottom-0 left-0 h-px bg-primary"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-[0.625rem] font-bold uppercase tracking-[0.04em] text-primary">
                  {t('footer.contact')}
                </h3>
                <motion.div 
                  className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
              <motion.a 
                href="mailto:support@lifyx.ca" 
                className="group relative text-xs hover:text-primary transition-colors duration-300 inline-block"
                style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.8)' }}
                whileHover={{ x: 2 }}
              >
                <span className="relative z-10">support@lifyx.ca</span>
                <motion.span
                  className="absolute bottom-0 left-0 h-px bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>
          </motion.div>

          {/* Column 4: Project CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-[0.625rem] font-bold uppercase tracking-[0.04em] text-primary">
                {t('footer.cta.title')}
              </h3>
              <motion.div 
                className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                style={{ transformOrigin: 'left' }}
              />
            </div>
            
            <p className="text-xs mb-4 leading-relaxed" style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.65)' }}>
              {t('footer.cta.description')}
            </p>

            <Link to="/contact">
              <motion.button
                className="group relative px-5 py-2.5 bg-primary/10 border border-primary/30 rounded-lg text-xs font-medium text-primary hover:bg-primary hover:text-background transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                <span className="relative z-10 flex items-center gap-2">
                  {t('footer.cta.button')}
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Decorative separator with animated dots */}
        <motion.div 
          className="mt-8 mb-6 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.div 
            className="h-px w-20 bg-gradient-to-r from-transparent via-primary/30 to-primary/30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-0.5 w-0.5 rounded-full bg-primary/40"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
          <motion.div 
            className="h-px w-20 bg-gradient-to-l from-transparent via-primary/30 to-primary/30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="text-[0.625rem]" style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)' }}>
            {t('footer.copyright')}
          </div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-1.5 text-[0.625rem] transition-colors duration-300 relative"
            style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)' }}
            whileHover={{ x: -2 }}
          >
            <span>{t('footer.backToTop')}</span>
            <ArrowRight className="h-2.5 w-2.5 -rotate-90 transition-transform group-hover:-translate-y-1" />
            {/* Subtle underline */}
            <motion.span
              className="absolute bottom-0 left-0 h-px bg-primary/60"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}