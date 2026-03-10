import { useLanguage } from '../contexts/LanguageContext';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import capitanPoopLogo from '../../assets/2b7c7e01209ff2d4c80d1f9fe0f91e6b30731e2b.png';
import magnoLoftImage from '../../assets/b619cde91ad85a8b9b8c7fd42f53908a0cea6362.png';
import losAsadosLogo from '../../assets/0317080f99089df2b5a6e317d3c57784231215a2.png';
import solarisLogo from '../../assets/c76beadbf6b72572b306185aa05f3e4ac73c8e54.png';

export function PortfolioPage() {
  const { t } = useLanguage();

  // Curated projects data with shorter, authoritative descriptions
  const projects = [
    {
      id: 1,
      title: t('portfolio.project1.title'),
      category: "web",
      image: magnoLoftImage,
      description: t('portfolio.project1.desc'),
      link: "#",
      comingSoon: true
    },
    {
      id: 2,
      title: t('portfolio.project2.title'),
      category: "web",
      image: "https://images.unsplash.com/photo-1765036741158-5a1698974257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCQlElMjBjaGFyY29hbCUyMGdyaWxsJTIwY29va2luZyUyMG1lYXR8ZW58MXx8fHwxNzcyNDkwNzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: t('portfolio.project2.desc'),
      link: "#",
      comingSoon: true
    },
    {
      id: 3,
      title: t('portfolio.project3.title'),
      category: "web",
      image: "https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGx1eHVyeSUyMGludGVyaW9yfGVufDF8fHx8MTc3MTg3MTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: t('portfolio.project3.desc'),
      link: "https://capitanpoop.lifyx.ca/",
      comingSoon: false
    },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground pt-24 md:pt-32 pb-16 md:pb-24" style={{ position: 'relative' }}>
      {/* Hero Section */}
      <section className="px-6 mb-16 md:mb-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
              {t('portfolio.hero.titleFull')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl">
              {t('portfolio.hero.subtitleFull')}
            </p>
          </motion.div>

          {/* Category Label */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-12 md:mt-16 flex items-center gap-8 border-b border-border/20 pb-4"
          >
            <span className="text-sm tracking-wider uppercase text-primary font-medium">
              {t('portfolio.category.label')}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Projects Display */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-16 md:space-y-24"
          >
            {/* Featured Project (First Item) */}
            <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Image Side */}
              <div className="lg:col-span-8 overflow-hidden rounded-sm relative aspect-[16/9] lg:aspect-[16/10]">
                <ImageWithFallback
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                {projects[0].comingSoon && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-primary/90 backdrop-blur-sm text-background px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider">
                    {t('portfolio.comingSoon')}
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <img 
                    src={solarisLogo} 
                    alt="Solaris Cartagena Logo" 
                    className="w-32 sm:w-40 md:w-52 lg:w-64 max-w-[60%] h-auto drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-4 flex flex-col h-full justify-center">
                <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4">
                  {t('portfolio.featured')}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                  <Link to={`/portfolio/coming-soon?project=${encodeURIComponent(projects[0].title)}`} className="hover:text-primary transition-colors">
                    {projects[0].title}
                  </Link>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 font-light leading-relaxed">
                  {projects[0].description}
                </p>
                
                {/* Links */}
                <div className="flex items-center gap-8">
                  <Link to={`/portfolio/coming-soon?project=${encodeURIComponent(projects[0].title)}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors uppercase tracking-wider text-xs font-bold group/link">
                    {t('portfolio.viewLive')} <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Remaining Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-20 pt-12 border-t border-border/20">
              {projects.slice(1).map((project) => (
                <div key={project.id} className="group flex flex-col">
                  {/* Image */}
                  <div className="overflow-hidden rounded-sm mb-6 md:mb-8 aspect-[4/3] relative">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors duration-500" />
                    {project.comingSoon && (
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-primary/90 backdrop-blur-sm text-background px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider">
                        {t('portfolio.comingSoon')}
                      </div>
                    )}
                    {project.id === 2 && (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <img 
                          src={losAsadosLogo} 
                          alt="Los Asados de Ruben Logo" 
                          className="w-40 sm:w-52 md:w-64 lg:w-80 max-w-[70%] h-auto drop-shadow-2xl"
                        />
                      </div>
                    )}
                    {project.id === 3 && (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <img 
                          src={capitanPoopLogo} 
                          alt="Capitan Poop Logo" 
                          className="w-56 sm:w-72 md:w-88 lg:w-[26rem] max-w-[85%] h-auto drop-shadow-2xl"
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.comingSoon ? (
                          <Link to={`/portfolio/coming-soon?project=${encodeURIComponent(project.title)}`} className="hover:text-primary transition-colors">
                            {project.title}
                          </Link>
                        ) : (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            {project.title}
                          </a>
                        )}
                      </h3>
                      {project.comingSoon ? (
                        <Link to={`/portfolio/coming-soon?project=${encodeURIComponent(project.title)}`} className="text-muted-foreground hover:text-foreground transition-colors">
                          <ArrowUpRight className="w-5 h-5" />
                        </Link>
                      ) : (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                          <ArrowUpRight className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground font-light mb-6 flex-grow leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}