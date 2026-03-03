import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'motion/react';

export function AcceptableUsePage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Acceptable Use Policy',
      lastUpdated: 'Last Updated: February 14, 2026',
      intro: 'This Acceptable Use Policy (“Policy”) governs your access to and use of services provided by LifyX (“LifyX,” “we,” “our,” or “us”).\n\nBy accessing or using our services, you agree to comply with this Policy. Violation of this Policy may result in immediate suspension or termination of services without refund.',
      sections: [
        {
          title: '1. Prohibited Uses',
          content:
            'You may not use LifyX services, infrastructure, or deliverables to:\n\nA. Illegal or Unlawful Activities\n\n• Violate any applicable local, provincial, national, or international laws\n• Facilitate criminal activity\n• Engage in money laundering, fraud, or deceptive practices\n• Circumvent sanctions or export restrictions\n\nB. Intellectual Property Violations\n\n• Infringe copyrights, trademarks, patents, or trade secrets\n• Distribute pirated or unauthorized materials\n• Use content without proper licensing\n\nC. Security Violations\n\n• Introduce malicious code, viruses, malware, ransomware, or spyware\n• Attempt unauthorized access to systems, accounts, or data\n• Probe, scan, or test system vulnerabilities without authorization\n• Circumvent authentication or access controls\n• Interfere with security mechanisms\n\nD. Network or Service Abuse\n\n• Interfere with or disrupt servers, networks, or services\n• Conduct denial-of-service attacks (DDoS)\n• Exploit platform vulnerabilities\n• Overload systems in a manner that degrades performance\n\nE. Fraudulent or Deceptive Conduct\n\n• Impersonate another individual or entity\n• Misrepresent your identity or authority\n• Use false contact or payment information\n• Conduct phishing or deceptive marketing practices\n\nF. Harassment or Harmful Conduct\n\n• Harass, threaten, or intimidate others\n• Promote violence, hate speech, or discrimination\n• Distribute harmful, abusive, or exploitative material\n\nG. Spam and Unsolicited Communications\n\n• Send bulk unsolicited communications\n• Operate unauthorized mailing lists\n• Use our services to distribute spam\n\nH. Regulated or High-Risk Activities\n\nWithout prior written consent, you may not use LifyX services in connection with:\n\n• Gambling operations\n• Adult content platforms\n• Financial trading schemes\n• Cryptocurrency fraud or high-risk investment platforms\n• Healthcare or medical advice platforms\n• Government impersonation\n\nLifyX reserves sole discretion to determine high-risk use cases.',
        },
        {
          title: '2. Content Standards',
          content:
            'Any content you provide, upload, or deploy must:\n\n• Be lawful and accurate\n• Respect intellectual property rights\n• Comply with applicable advertising and consumer protection laws\n• Not contain defamatory, obscene, or unlawful material\n• Not promote illegal or unethical conduct\n\nYou are solely responsible for content you provide.',
        },
        {
          title: '3. Compliance Responsibility',
          content:
            'You are responsible for ensuring your use of our services complies with:\n\n• All applicable laws and regulations\n• Industry-specific requirements\n• Professional standards\n• Third-party platform terms\n\nLifyX does not monitor legal compliance of your business model.',
        },
        {
          title: '4. Monitoring and Enforcement',
          content:
            'LifyX reserves the right, at its sole discretion, to:\n\n• Monitor usage for compliance\n• Investigate suspected violations\n• Remove or disable access to content\n• Suspend or terminate services immediately\n• Withhold deliverables\n• Deny future service\n• Report violations to law enforcement\n• Pursue legal remedies\n\nWe are not obligated to provide advance notice before enforcement action.',
        },
        {
          title: '5. Suspension Without Refund',
          content:
            'If services are suspended or terminated due to violation of this Policy:\n\n• No refunds will be issued\n• Outstanding balances remain due\n• Access to deliverables may be revoked\n\nYou remain liable for damages caused by violations.',
        },
        {
          title: '6. Security and Risk Allocation',
          content:
            'You are responsible for:\n\n• Securing your credentials\n• Maintaining safe practices after project handoff\n• Implementing necessary compliance controls in your business\n\nLifyX is not responsible for misuse of deliverables once transferred.',
        },
        {
          title: '7. Reporting Violations',
          content:
            'If you become aware of a violation of this Policy, you must notify us immediately through our official contact channel.\n\nFailure to report known abuse may result in service termination.',
        },
        {
          title: '8. Changes to This Policy',
          content:
            'We reserve the right to modify this Policy at any time. Continued use of our services constitutes acceptance of the updated Policy.',
        },
        {
          title: '9. Contact Information',
          content:
            'For questions regarding this Acceptable Use Policy, please contact:\n\nLifyX\nsupport@lifyx.ca\nBusiness Hours: Monday–Friday, 8:00 AM – 4:00 PM (EST)',
        },
      ],
    },
    fr: {
      title: 'Politique d\'utilisation acceptable',
      lastUpdated: 'Dernière mise à jour : 14 février 2026',
      intro: 'Cette Politique d\'utilisation acceptable décrit les utilisations interdites des services LifyX.',
      sections: [
        {
          title: 'Activités interdites',
          content: 'Vous ne pouvez pas utiliser nos services pour :\n\n• Violer des lois ou réglementations\n• Porter atteinte aux droits de propriété intellectuelle\n• Transmettre du code malveillant ou des virus\n• S\'engager dans des activités frauduleuses\n• Harceler, menacer ou nuire à autrui\n• Distribuer du spam ou des communications non sollicitées\n• Usurper l\'identité d\'autrui ou déformer votre identité\n• Interférer avec ou perturber nos services\n• Tenter un accès non autorisé aux systèmes\n• S\'engager dans toute conduite illégale ou contraire à l\'éthique',
        },
        {
          title: 'Normes de contenu',
          content: 'Tout contenu que vous fournissez doit :\n\n• Être exact et non trompeur\n• Respecter les lois applicables\n• Respecter les droits des tiers\n• Ne pas contenir de matériel offensant, nuisible ou inapproprié\n• Ne violer aucune norme professionnelle ou éthique',
        },
        {
          title: 'Responsabilité de conformité',
          content: 'Vous êtes responsable de vous assurer que votre utilisation de nos services est conforme à :\n\n• Toutes les lois locales, étatiques, nationales et internationales applicables\n• Réglementations spécifiques à l\'industrie\n• Normes professionnelles et codes de conduite\n• Conditions générales de tiers',
        },
        {
          title: 'Surveillance et application',
          content: 'LifyX se réserve le droit de :\n\n• Surveiller l\'utilisation de nos services\n• Enquêter sur les violations présumées\n• Supprimer ou désactiver l\'accès au contenu\n• Suspendre ou résilier les services\n• Signaler les violations aux forces de l\'ordre\n• Prendre des mesures légales si nécessaire',
        },
        {
          title: 'Signalement des violations',
          content: 'Si vous prenez connaissance de violations de cette politique, veuillez nous contacter immédiatement via notre formulaire de contact.',
        },
        {
          title: 'Conséquences des violations',
          content: 'Les violations peuvent entraîner :\n\n• Avertissements\n• Suspension temporaire des services\n• Résiliation permanente des services\n• Action en justice et responsabilité pour dommages\n• Signalement aux autorités',
        },
      ],
    },
    es: {
      title: 'Política de uso aceptable',
      lastUpdated: 'Última actualización: 14 de febrero de 2026',
      intro: 'Esta Política de Uso Aceptable describe los usos prohibidos de los servicios de LifyX.',
      sections: [
        {
          title: 'Actividades prohibidas',
          content: 'No puede usar nuestros servicios para:\n\n• Violar leyes o regulaciones\n• Infringir derechos de propiedad intelectual\n• Transmitir código malicioso o virus\n• Participar en actividades fraudulentas\n• Acosar, amenazar o dañar a otros\n• Distribuir spam o comunicaciones no solicitadas\n• Hacerse pasar por otros o tergiversar su identidad\n• Interferir o interrumpir nuestros servicios\n• Intentar acceso no autorizado a sistemas\n• Participar en conducta ilegal o poco ética',
        },
        {
          title: 'Estándares de contenido',
          content: 'Cualquier contenido que proporcione debe:\n\n• Ser preciso y no engañoso\n• Cumplir con las leyes aplicables\n• Respetar los derechos de terceros\n• No contener material ofensivo, dañino o inapropiado\n• No violar ningún estándar profesional o ético',
        },
        {
          title: 'Responsabilidad de cumplimiento',
          content: 'Usted es responsable de asegurar que su uso de nuestros servicios cumpla con:\n\n• Todas las leyes locales, estatales, nacionales e internacionales aplicables\n• Regulaciones específicas de la industria\n• Estándares profesionales y códigos de conducta\n• Términos y condiciones de terceros',
        },
        {
          title: 'Monitoreo y aplicación',
          content: 'LifyX se reserva el derecho de:\n\n• Monitorear el uso de nuestros servicios\n• Investigar violaciones sospechadas\n• Eliminar o deshabilitar el acceso al contenido\n• Suspender o terminar servicios\n• Reportar violaciones a las autoridades\n• Tomar acciones legales cuando sea necesario',
        },
        {
          title: 'Reportar violaciones',
          content: 'Si se entera de cualquier violación de esta política, contáctenos inmediatamente a través de nuestro formulario de contacto.',
        },
        {
          title: 'Consecuencias de las violaciones',
          content: 'Las violaciones pueden resultar en:\n\n• Avisos de advertencia\n• Suspensión temporal de servicios\n• Terminación permanente de servicios\n• Acción legal y responsabilidad por daños\n• Reporte a las autoridades',
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
