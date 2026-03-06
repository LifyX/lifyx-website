import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Globe, ChevronDown, Sun, Moon } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../../assets/0b42223d9f55b7c8c03c00d28143a564ebd703f2.png';
import logoBlack from '../../assets/884e30d97f406d46d806b45565916678a69674e9.png';

export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on active scroll (not on initial position)
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const startY = window.scrollY;
    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (Math.abs(window.scrollY - startY) > 5) {
          setMobileMenuOpen(false);
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [mobileMenuOpen]);

  const handleLanguageChange = (value: Language) => {
    setLanguage(value);
    setLangDropdownOpen(false);
  };

  const languageLabels = {
    en: 'ENNnNn',
    fr: 'FR',
    es: 'ES',
  };

  const languageFullNames = {
    en: 'English',
    fr: 'Français',
    es: 'Español',
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we're on the home page, scroll to top
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (path: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we're already on this page, scroll to top
    if (location.pathname === path || (path !== '/' && location.pathname.startsWith(path))) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/portfolio', label: t('nav.portfolio') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b dark:border-border/40 dark:shadow-none ${
        mobileMenuOpen
          ? 'bg-background transition-colors duration-300'
          : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-[border-color,box-shadow,color,background-color] duration-300'
      }`}
      style={{ borderBottomColor: theme === 'dark' ? undefined : '#EAEAEA', borderBottomWidth: '1px' }}
    >
      <nav className={`mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8 relative z-50 transition-colors duration-300 ${mobileMenuOpen ? 'bg-background' : ''}`}>
        {/* Logo */}
        <Link to="/" className="group flex items-center space-x-2 shrink-0" onClick={handleLogoClick}>
          <motion.img 
            src={theme === 'dark' ? logo : logoBlack}
            alt="LifyX Logo" 
            className="h-10 w-auto transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(99,196,85,0.5)]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={(e) => handleNavClick(item.path, e)}
              className={`relative text-sm transition-colors hover:text-primary ${
                isActive(item.path) ? 'text-primary font-bold' : 'text-muted-foreground font-medium hover:text-foreground'
              }`}
            >
              {item.label}
              {isActive(item.path) && (
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary rounded-full"
                  layoutId="activeNavItem"
                  transition={{ 
                    type: "spring", 
                    stiffness: 380, 
                    damping: 30 
                  }}
                />
              )}
            </Link>
          ))}
          
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center rounded-lg border border-border bg-muted/50 w-9 h-9 text-muted-foreground transition-all hover:border-primary/50 hover:bg-muted hover:text-primary"
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </motion.div>
            </button>

            {/* Language Selector - Desktop */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-1.5 rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-sm font-medium transition-all hover:border-primary/50 hover:bg-muted"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                aria-label="Change language"
              >
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-foreground">{languageLabels[language]}</span>
                <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-lg border border-border bg-card shadow-xl">
                  <div className="py-1">
                    {(['en', 'fr', 'es'] as Language[]).map((lang) => (
                      <button
                        key={lang}
                        className={`flex w-full items-center px-4 py-2.5 text-sm transition-colors ${
                          language === lang
                            ? 'bg-primary/20 text-primary'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                        onClick={() => handleLanguageChange(lang)}
                      >
                        <span className="flex-1 text-left">{languageFullNames[lang]}</span>
                        {language === lang && (
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                {t('nav.cta')}
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Overlay + Animated Dropdown */}
      <AnimatePresence mode="sync">
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay — instant exit, no aftershadow */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.15 } }}
              exit={{ opacity: 0, transition: { duration: 0 } }}
              className="fixed inset-0 top-0 z-40 bg-black/40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              onTouchStart={() => setMobileMenuOpen(false)}
            />

            {/* Slide-down menu panel — fast clean exit */}
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.15, ease: "easeOut" } }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.08, ease: "easeIn" } }}
              className="relative z-50 border-t border-border/40 bg-background lg:hidden transition-colors duration-300"
            >
              <div className="space-y-1 px-6 pb-3 pt-2">
                {navItems.map((item) => (
                  <div key={item.path}>
                    <Link
                      to={item.path}
                      onClick={(e) => {
                        handleNavClick(item.path, e);
                        setMobileMenuOpen(false);
                      }}
                      className={`block rounded-md px-3 py-2 text-base transition-colors ${
                        isActive(item.path)
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
                
                <div className="flex gap-2 px-3 py-2">
                   {/* Theme Toggle - Mobile */}
                   <button
                    onClick={toggleTheme}
                    className="flex items-center justify-center rounded-md border border-border bg-muted/50 flex-1 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                  >
                    {theme === 'dark' ? (
                      <span className="flex items-center gap-2 text-sm font-medium">
                        <Moon className="h-4 w-4" /> {t('header.darkMode')}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-sm font-medium">
                        <Sun className="h-4 w-4" /> {t('header.lightMode')}
                      </span>
                    )}
                  </button>
                </div>

                {/* Language Selector - Mobile */}
                <div className="rounded-md border border-border bg-muted/50 px-3 py-3">
                  <div className="mb-2 flex items-center text-sm text-muted-foreground">
                    <Globe className="mr-2 h-4 w-4" />
                    <span>{t('header.language')}</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        language === 'en'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => handleLanguageChange('fr')}
                      className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        language === 'fr'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      FR
                    </button>
                    <button
                      onClick={() => handleLanguageChange('es')}
                      className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        language === 'es'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      ES
                    </button>
                  </div>
                </div>

                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block"
                >
                  <Button className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    {t('nav.cta')}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}