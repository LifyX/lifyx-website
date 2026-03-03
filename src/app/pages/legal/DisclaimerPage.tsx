import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'motion/react';

export function DisclaimerPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Disclaimer',
      lastUpdated: 'Last Updated: February 14, 2026',
      intro: 'This Disclaimer governs your use of the LifyX website, content, and services. By accessing this website, you acknowledge and agree to the terms outlined below.',
      sections: [
        {
          title: '1. General Information Only',
          content:
            'The information provided on this website is for general informational purposes only.\n\nWhile LifyX makes reasonable efforts to ensure content is accurate and current, we make no representations, warranties, or guarantees — express or implied — regarding:\n\n• Accuracy\n• Completeness\n• Reliability\n• Suitability\n• Availability\n• Timeliness\n\nAll information is provided “as is” and “as available.”\n\nYour use of any information from this website is at your own risk.',
        },
        {
          title: '2. No Professional Advice',
          content:
            'Nothing on this website constitutes:\n\n• Legal advice\n• Financial advice\n• Investment advice\n• Tax advice\n• Regulatory compliance advice\n• Technical certification\n\nYou should consult qualified professionals before making business, legal, financial, or technical decisions.\n\nLifyX disclaims liability for decisions made based on website content.',
        },
        {
          title: '3. No Guarantees of Results',
          content:
            'LifyX does not guarantee:\n\n• Increased revenue or profitability\n• Specific SEO rankings\n• Increased traffic or conversions\n• Compatibility with all third-party systems\n• Continuous uptime\n• Error-free performance\n• Immunity from cybersecurity threats\n\nBusiness outcomes depend on numerous external factors beyond our control, including market conditions, competition, user behavior, third-party platform changes, and regulatory developments.\n\nPast results do not guarantee future performance.',
        },
        {
          title: '4. Technical Limitations',
          content:
            'Technology environments evolve rapidly.\n\nAny technical guidance, architectural suggestions, or development examples provided:\n\n• May become outdated\n• May require adaptation\n• May not apply to your specific environment\n\nYou are responsible for verifying compatibility and compliance before implementation.',
        },
        {
          title: '5. Third-Party Links and Services',
          content:
            'This website may contain links to third-party websites, tools, or services.\n\nLifyX:\n\n• Does not control third-party platforms\n• Is not responsible for their content\n• Does not guarantee their availability\n• Is not liable for their privacy or security practices\n\nAccessing third-party services is done at your own risk.',
        },
        {
          title: '6. Website Availability',
          content:
            'We reserve the right to:\n\n• Modify website content\n• Suspend access\n• Remove features\n• Update services\n• Discontinue offerings\n\nat any time without notice.\n\nWe are not liable for temporary or permanent unavailability.',
        },
        {
          title: '7. Limitation of Liability',
          content:
            'To the maximum extent permitted by law, LifyX shall not be liable for:\n\n• Direct, indirect, incidental, consequential, or punitive damages\n• Loss of revenue, profits, data, or goodwill\n• Business interruption\n• Reliance on website information\n• Security incidents\n• Third-party conduct\n\nUse of this website is entirely at your own risk.\n\nIf liability is imposed by law, it shall be limited to the minimum amount required by applicable legislation.',
        },
        {
          title: '8. Security Disclaimer',
          content:
            'While we implement reasonable safeguards, no website or system can guarantee absolute security.\n\nYou acknowledge that:\n\n• Internet transmission carries inherent risk\n• Unauthorized access cannot be fully prevented\n• Cybersecurity threats evolve constantly\n\nLifyX is not liable for breaches caused by factors beyond reasonable control.',
        },
        {
          title: '9. Testimonials and Case Studies',
          content:
            'Testimonials, examples, and case studies reflect specific client experiences.\n\nThey:\n\n• Do not guarantee similar outcomes\n• Are not predictive of future results\n• May represent exceptional circumstances\n\nIndividual results will vary.',
        },
        {
          title: '10. Forward-Looking Statements',
          content:
            'Any statements regarding projections, potential growth, or anticipated results are forward-looking statements based on current assumptions and may not materialize.',
        },
        {
          title: '11. Changes to This Disclaimer',
          content:
            'We may update this Disclaimer at any time without prior notice.\n\nContinued use of the website constitutes acceptance of the updated version.',
        },
        {
          title: '12. Contact Information',
          content:
            'For questions regarding this Disclaimer, please contact:\n\nLifyX\nsupport@lifyx.ca\nBusiness Hours: Monday–Friday, 8:00 AM – 4:00 PM (EST)',
        },
      ],
    },
    fr: {
      title: 'Avertissement',
      lastUpdated: 'Dernière mise à jour : 14 février 2026',
      intro: 'Cet avertissement régit votre utilisation du site Web et des services de LifyX.',
      sections: [
        {
          title: 'Informations générales',
          content: 'Les informations fournies sur ce site Web sont à des fins d\'information générale uniquement. Bien que nous nous efforcions de maintenir les informations exactes et à jour, nous ne faisons aucune représentation ou garantie de quelque nature que ce soit concernant l\'exhaustivité, l\'exactitude, la fiabilité ou la disponibilité des informations.',
        },
        {
          title: 'Conseils professionnels',
          content: 'Le contenu de ce site Web ne constitue pas un conseil professionnel. Vous devez demander des conseils professionnels appropriés avant de prendre toute décision commerciale, juridique, technique ou financière basée sur les informations de ce site Web.',
        },
        {
          title: 'Aucune garantie',
          content: 'LifyX ne garantit pas :\n\n• Des résultats ou résultats commerciaux spécifiques\n• Augmentation du trafic, des ventes ou des revenus\n• Compatibilité avec tous les systèmes et plateformes\n• Fonctionnement ininterrompu ou sans erreur\n• Sécurité complète contre toutes les menaces\n\nLes résultats dépendent de nombreux facteurs hors de notre contrôle.',
        },
        {
          title: 'Liens et services tiers',
          content: 'Notre site Web peut contenir des liens vers des sites Web ou des services tiers. LifyX n\'a aucun contrôle et n\'assume aucune responsabilité pour le contenu, les politiques de confidentialité ou les pratiques des sites ou services tiers.',
        },
        {
          title: 'Modifications et mises à jour',
          content: 'Nous nous réservons le droit de modifier, suspendre ou interrompre tout aspect de notre site Web ou de nos services à tout moment sans préavis. Nous pouvons également mettre à jour cet avertissement périodiquement.',
        },
        {
          title: 'Limitation de responsabilité',
          content: 'Dans toute la mesure permise par la loi, LifyX ne sera pas responsable des dommages résultant de :\n\n• Utilisation ou incapacité d\'utiliser nos services\n• Erreurs ou omissions dans le contenu\n• Accès non autorisé aux données\n• Conduite ou contenu de tiers\n• Toute autre question relative à nos services',
        },
        {
          title: 'Témoignages et études de cas',
          content: 'Tous les témoignages, études de cas ou exemples de travail représentent des expériences client spécifiques et peuvent ne pas être typiques. Vos résultats peuvent varier en fonction de votre situation spécifique, de vos efforts et d\'autres facteurs.',
        },
        {
          title: 'Informations techniques',
          content: 'Les informations techniques fournies sont sujettes à modification et peuvent ne pas refléter les dernières normes ou meilleures pratiques de l\'industrie à tout moment. Vérifiez toujours les informations techniques critiques de manière indépendante.',
        },
      ],
    },
    es: {
      title: 'Descargo de responsabilidad',
      lastUpdated: 'Última actualización: 14 de febrero de 2026',
      intro: 'Este descargo de responsabilidad rige su uso del sitio web y servicios de LifyX.',
      sections: [
        {
          title: 'Información general',
          content: 'La información proporcionada en este sitio web es solo para fines informativos generales. Si bien nos esforzamos por mantener la información precisa y actualizada, no hacemos representaciones ni garantías de ningún tipo sobre la integridad, precisión, confiabilidad o disponibilidad de la información.',
        },
        {
          title: 'Asesoramiento profesional',
          content: 'El contenido de este sitio web no constituye asesoramiento profesional. Debe buscar asesoramiento profesional apropiado antes de tomar cualquier decisión comercial, legal, técnica o financiera basada en la información de este sitio web.',
        },
        {
          title: 'Sin garantías',
          content: 'LifyX no garantiza:\n\n• Resultados o resultados comerciales específicos\n• Aumento del tráfico, ventas o ingresos\n• Compatibilidad con todos los sistemas y plataformas\n• Operación ininterrumpida o sin errores\n• Seguridad completa contra todas las amenazas\n\nLos resultados dependen de muchos factores fuera de nuestro control.',
        },
        {
          title: 'Enlaces y servicios de terceros',
          content: 'Nuestro sitio web puede contener enlaces a sitios web o servicios de terceros. LifyX no tiene control y no asume ninguna responsabilidad por el contenido, las políticas de privacidad o las prácticas de sitios o servicios de terceros.',
        },
        {
          title: 'Cambios y actualizaciones',
          content: 'Nos reservamos el derecho de modificar, suspender o descontinuar cualquier aspecto de nuestro sitio web o servicios en cualquier momento sin previo aviso. También podemos actualizar este descargo de responsabilidad periódicamente.',
        },
        {
          title: 'Limitación de responsabilidad',
          content: 'En la máxima medida permitida por la ley, LifyX no será responsable de ningún daño que surja de:\n\n• Uso o incapacidad de usar nuestros servicios\n• Errores u omisiones en el contenido\n• Acceso no autorizado a datos\n• Conducta o contenido de terceros\n• Cualquier otro asunto relacionado con nuestros servicios',
        },
        {
          title: 'Testimonios y estudios de caso',
          content: 'Cualquier testimonio, estudio de caso o ejemplo de trabajo representa experiencias específicas de clientes y puede no ser típico. Sus resultados pueden variar según su situación específica, esfuerzo y otros factores.',
        },
        {
          title: 'Información técnica',
          content: 'La información técnica proporcionada está sujeta a cambios y puede no reflejar los últimos estándares o mejores prácticas de la industria en todo momento. Siempre verifique la información técnica crítica de manera independiente.',
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
