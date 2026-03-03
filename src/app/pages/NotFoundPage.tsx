import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export function NotFoundPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: '404',
      heading: 'Page Not Found',
      message: 'The page you are looking for doesn\'t exist or has been moved.',
      homeButton: 'Go Home',
      backButton: 'Go Back',
    },
    fr: {
      title: '404',
      heading: 'Page non trouvée',
      message: 'La page que vous recherchez n\'existe pas ou a été déplacée.',
      homeButton: 'Accueil',
      backButton: 'Retour',
    },
    es: {
      title: '404',
      heading: 'Página no encontrada',
      message: 'La página que busca no existe o ha sido movida.',
      homeButton: 'Ir al inicio',
      backButton: 'Volver',
    },
  };

  const pageContent = content[language];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-background px-6 py-20" style={{ position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="mb-4 bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-9xl font-bold text-transparent">
          {pageContent.title}
        </h1>
        <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          {pageContent.heading}
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          {pageContent.message}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link to="/">
            <Button className="w-full bg-primary hover:bg-primary/90 sm:w-auto">
              <Home className="mr-2 h-4 w-4" />
              {pageContent.homeButton}
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="w-full border-muted bg-transparent text-foreground hover:bg-muted sm:w-auto"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {pageContent.backButton}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}