import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'motion/react';

export function CookiePolicyPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Cookie Policy',
      lastUpdated: 'Last Updated: February 14, 2026',
      intro: 'This Cookie Policy explains how LifyX (“LifyX,” “we,” “our,” or “us”) uses cookies and similar tracking technologies when you visit our website.\n\nThis policy should be read together with our Privacy Policy.',
      sections: [
        {
          title: '1. What Are Cookies?',
          content:
            'Cookies are small text files placed on your device (computer, tablet, or mobile device) when you visit a website. They allow the website to recognize your device and store certain information about your preferences or past actions.\n\nCookies may be:\n\n• Session Cookies (deleted when you close your browser)\n• Persistent Cookies (remain on your device until deleted or expired)\n\nIn addition to cookies, we may use similar technologies such as pixels, web beacons, and local storage.',
        },
        {
          title: '2. Why We Use Cookies',
          content:
            'We use cookies and similar technologies to:\n\n• Ensure proper website functionality\n• Improve website performance\n• Analyze traffic and user behavior\n• Enhance security and prevent fraud\n• Remember user preferences (e.g., language settings)\n• Preserve form inputs to prevent data loss\n• Support marketing and performance optimization (where applicable)\n\nWe do not use cookies to sell personal information.',
        },
        {
          title: '3. Types of Cookies We Use',
          content:
            'A. Strictly Necessary (Essential) Cookies\n\nThese cookies are required for core website functionality. Without them, the website may not function properly.\n\nExamples:\n\n• Session management\n• Security verification\n• Load balancing\n• Form submission handling\n\nThese cookies cannot be disabled through our systems.\n\nB. Analytics Cookies\n\nThese cookies help us understand how visitors interact with our website by collecting aggregated information such as:\n\n• Pages visited\n• Time spent on pages\n• Referral sources\n• Device type\n\nThis information is used to improve performance and user experience.\n\nWhere required by law, analytics cookies are only placed after obtaining consent.\n\nC. Preference Cookies\n\nThese cookies remember your settings and preferences, such as:\n\n• Language selection\n• Region\n• Interface preferences\n\nD. Security Cookies\n\nThese cookies help detect and prevent:\n\n• Malicious activity\n• Unauthorized login attempts\n• Abuse of website functionality\n\nE. Third-Party Cookies\n\nWe may use third-party services such as:\n\n• Analytics providers\n• Performance monitoring services\n• Embedded content providers\n\nThese third parties may set cookies through our website. We do not control these cookies and recommend reviewing their respective privacy policies.',
        },
        {
          title: '4. Legal Basis for Cookie Use',
          content:
            'For users in Canada, cookies are used in accordance with applicable privacy legislation, including PIPEDA.\n\nFor users located in jurisdictions requiring consent (such as the European Union or United Kingdom), non-essential cookies are deployed only after obtaining appropriate consent through our cookie banner or preference tool.\n\nYou may withdraw consent at any time.',
        },
        {
          title: '5. Managing and Controlling Cookies',
          content:
            'You can manage cookies in several ways:\n\n• Adjust your browser settings to refuse or delete cookies\n• Clear stored cookies at any time\n• Disable non-essential cookies through our cookie consent banner (if applicable)\n\nPlease note that disabling cookies may impact certain website features or functionality.\n\nBrowser-specific instructions can typically be found in your browser’s Help section.',
        },
        {
          title: '6. Data Collected Through Cookies',
          content:
            'Cookies may collect information such as:\n\n• IP address\n• Browser type\n• Device information\n• Usage patterns\n• Referral URLs\n\nWhere such information can identify an individual, it is treated as personal information in accordance with our Privacy Policy.',
        },
        {
          title: '7. International Visitors',
          content:
            'Because LifyX serves international clients, data collected through cookies may be processed outside your country of residence.\n\nWe implement appropriate safeguards to protect data during cross-border transfers.',
        },
        {
          title: '8. Do Not Track Signals',
          content:
            'Our website may not respond to browser “Do Not Track” signals due to lack of standardized implementation.',
        },
        {
          title: '9. Updates to This Cookie Policy',
          content:
            'We may update this Cookie Policy periodically to reflect changes in technology, legislation, or business practices.\n\nThe “Last Updated” date will indicate when revisions were made.\n\nContinued use of the website after updates constitutes acceptance of the revised policy.',
        },
        {
          title: '10. Contact Information',
          content:
            'If you have questions regarding this Cookie Policy, please contact:\n\nLifyX\nsupport@lifyx.ca\nBusiness Hours: Monday–Friday, 8:00 AM – 4:00 PM (EST)',
        },
      ],
    },
    fr: {
      title: 'Politique des cookies',
      lastUpdated: 'Dernière mise à jour : 14 février 2026',
      intro: 'Cette Politique des cookies explique comment LifyX utilise les cookies et technologies similaires sur notre site Web.',
      sections: [
        {
          title: 'Que sont les cookies',
          content: 'Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez des sites Web. Ils aident les sites Web à se souvenir de vos préférences et à améliorer votre expérience de navigation.',
        },
        {
          title: 'Comment nous utilisons les cookies',
          content: 'Nous utilisons des cookies pour :\n\n• Se souvenir de votre préférence linguistique\n• Analyser le trafic et les modèles d\'utilisation du site Web\n• Améliorer la fonctionnalité du site Web\n• Améliorer la sécurité\n• Se souvenir de vos entrées de formulaire (pour éviter la perte de données)',
        },
        {
          title: 'Types de cookies que nous utilisons',
          content: '• Cookies essentiels : Requis pour que le site Web fonctionne correctement\n• Cookies d\'analyse : Nous aident à comprendre comment les visiteurs utilisent notre site Web\n• Cookies de préférence : Se souviennent de vos paramètres et préférences\n• Cookies de sécurité : Aident à garder le site Web sécurisé',
        },
        {
          title: 'Gestion des cookies',
          content: 'Vous pouvez contrôler et gérer les cookies via les paramètres de votre navigateur. La plupart des navigateurs vous permettent de refuser ou de supprimer les cookies. Notez que le blocage des cookies peut affecter votre expérience sur notre site Web.',
        },
        {
          title: 'Cookies tiers',
          content: 'Nous pouvons utiliser des services tiers qui définissent des cookies à des fins d\'analyse et de fonctionnalité. Ces tiers ont leurs propres politiques de confidentialité.',
        },
        {
          title: 'Mises à jour de cette politique',
          content: 'Nous pouvons mettre à jour cette Politique des cookies de temps à autre. Veuillez consulter cette page périodiquement pour les modifications.',
        },
      ],
    },
    es: {
      title: 'Política de cookies',
      lastUpdated: 'Última actualización: 14 de febrero de 2026',
      intro: 'Esta Política de Cookies explica cómo LifyX utiliza cookies y tecnologías similares en nuestro sitio web.',
      sections: [
        {
          title: 'Qué son las cookies',
          content: 'Las cookies son pequeños archivos de texto almacenados en su dispositivo cuando visita sitios web. Ayudan a los sitios web a recordar sus preferencias y mejorar su experiencia de navegación.',
        },
        {
          title: 'Cómo usamos las cookies',
          content: 'Usamos cookies para:\n\n• Recordar su preferencia de idioma\n• Analizar el tráfico y los patrones de uso del sitio web\n• Mejorar la funcionalidad del sitio web\n• Mejorar la seguridad\n• Recordar las entradas de su formulario (para evitar la pérdida de datos)',
        },
        {
          title: 'Tipos de cookies que usamos',
          content: '• Cookies esenciales: Necesarias para que el sitio web funcione correctamente\n• Cookies de análisis: Nos ayudan a entender cómo los visitantes usan nuestro sitio web\n• Cookies de preferencias: Recuerdan su configuración y preferencias\n• Cookies de seguridad: Ayudan a mantener el sitio web seguro',
        },
        {
          title: 'Gestión de cookies',
          content: 'Puede controlar y administrar las cookies a través de la configuración de su navegador. La mayoría de los navegadores le permiten rechazar o eliminar cookies. Tenga en cuenta que bloquear las cookies puede afectar su experiencia en nuestro sitio web.',
        },
        {
          title: 'Cookies de terceros',
          content: 'Podemos usar servicios de terceros que establecen cookies con fines de análisis y funcionalidad. Estos terceros tienen sus propias políticas de privacidad.',
        },
        {
          title: 'Actualizaciones de esta política',
          content: 'Podemos actualizar esta Política de Cookies de vez en cuando. Consulte esta página periódicamente para ver los cambios.',
        },
      ],
    },
  };

  const pageContent = content[language];

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{pageContent.title}</h1>
          <p className="mb-6 text-muted-foreground">{pageContent.lastUpdated}</p>
          <p className="mb-12 text-lg text-muted-foreground">{pageContent.intro}</p>

          <div className="space-y-8">
            {pageContent.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border-l-2 border-emerald-400 pl-6"
              >
                <h2 className="mb-3 text-xl font-semibold text-emerald-400">
                  {section.title}
                </h2>
                <p className="whitespace-pre-line leading-relaxed text-muted-foreground">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
