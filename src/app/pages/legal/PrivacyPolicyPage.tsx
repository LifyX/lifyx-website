import { useLanguage } from '../../contexts/LanguageContext';

export function PrivacyPolicyPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: February 14, 2026',
      sections: [
        {
          title: '1. Introduction',
          content:
            'LifyX (“LifyX,” “we,” “our,” or “us”) respects your privacy and is committed to protecting personal information in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and other applicable privacy laws.\n\nThis Privacy Policy explains how we collect, use, disclose, and safeguard personal information when you visit our website, submit a form, engage our services, or otherwise interact with us.\n\nBy using our website or services, you consent to the practices described in this policy.',
        },
        {
          title: '2. Accountability',
          content:
            'LifyX is responsible for personal information under our control.\n\nIf you have questions about how your information is handled, you may contact us using the details provided at the end of this policy.',
        },
        {
          title: '3. What Is Personal Information',
          content:
            '“Personal information” means information about an identifiable individual, including:\n\n• Name\n• Email address\n• Phone number\n• IP address (when linked to an individual)\n• Billing details\n• Business contact information associated with an individual\n\nBusiness contact information used strictly for professional purposes may not always be classified as personal information under PIPEDA; however, we handle all such data responsibly.',
        },
        {
          title: '4. Information We Collect',
          content:
            'A. Information You Provide\n\nWe may collect information when you:\n\n• Submit a contact form\n• Engage our services\n• Communicate with us\n\nThis may include:\n\n• Name and contact details\n• Company name and business information\n• Project requirements\n• Communications and correspondence\n• Billing information\n\nPayment processing is handled through secure third-party providers. We do not store full credit card numbers.\n\nB. Automatically Collected Information\n\nWhen you visit our website, we may collect:\n\n• IP address\n• Device and browser information\n• Website usage data\n• Cookie identifiers\n• Approximate geographic location\n\nThis information helps improve performance, security, and user experience.',
        },
        {
          title: '5. Purpose of Collection',
          content:
            'We collect personal information in order to:\n\n• Provide and manage our services\n• Communicate with clients and prospective clients\n• Process payments\n• Improve website functionality\n• Maintain security and prevent fraud\n• Comply with legal obligations\n• Send marketing communications where consent has been provided\n\nWe do not use personal information for purposes beyond those identified without consent or legal authorization.',
        },
        {
          title: '6. Consent',
          content:
            'We obtain meaningful consent for the collection, use, and disclosure of personal information.\n\nConsent may be:\n\n• Express (e.g., submitting a form or agreeing to terms)\n• Implied (e.g., ongoing client relationship)\n\nYou may withdraw consent at any time, subject to legal or contractual limitations. Withdrawal of consent may affect our ability to provide services.',
        },
        {
          title: '7. Limiting Collection',
          content:
            'We collect only the information necessary to fulfill identified purposes. We do not collect excessive or unrelated data.',
        },
        {
          title: '8. Use, Disclosure, and Retention',
          content:
            'We do not sell personal information.\n\nWe may share information with:\n\n• Service providers (hosting, payment processors, analytics providers)\n• Professional advisors (legal or accounting)\n• Government authorities when required by law\n• Parties involved in a business transaction\n\nPersonal information is retained only as long as necessary to fulfill its purpose or meet legal requirements. When no longer required, it is securely deleted or anonymized.',
        },
        {
          title: '9. Safeguards',
          content:
            'We use appropriate administrative, technical, and physical safeguards based on the sensitivity of the information, including:\n\n• SSL encryption\n• Secure cloud hosting\n• Access controls\n• Authentication measures\n• System monitoring\n\nWhile we take reasonable steps to protect information, no system can guarantee absolute security.',
        },
        {
          title: '10. Accuracy',
          content:
            'We make reasonable efforts to ensure personal information is accurate and up to date. You may request corrections if information is inaccurate.',
        },
        {
          title: '11. Access Rights',
          content:
            'Under PIPEDA, individuals may:\n\n• Request access to their personal information\n• Be informed about how it is used\n• Request corrections\n\nWe respond within a reasonable timeframe, subject to legal exceptions.',
        },
        {
          title: '12. Cookies and Analytics',
          content:
            'We use cookies and similar technologies to:\n\n• Improve website performance\n• Analyze traffic and engagement\n• Enhance user experience\n\nYou may disable cookies through your browser settings. Disabling cookies may affect site functionality.\n\nWhere required, consent will be obtained for non-essential cookies.',
        },
        {
          title: '13. International Data Transfers',
          content:
            'Because LifyX serves clients internationally and uses secure cloud service providers, personal information may be processed or stored outside Canada.\n\nWhen information is transferred internationally, we ensure appropriate safeguards are in place, including contractual and technical protections.\n\nBy using our services, you acknowledge that your information may be transferred outside your province or country.',
        },
        {
          title: '14. Third-Party Links',
          content:
            'Our website may contain links to external platforms. We are not responsible for their privacy practices and encourage users to review their policies.',
        },
        {
          title: '15. Breach Notification',
          content:
            'If a security breach involving personal information poses a real risk of significant harm, we will:\n\n• Notify affected individuals as required by law\n• Notify the Office of the Privacy Commissioner of Canada when required\n• Maintain required breach records',
        },
        {
          title: '16. Children’s Privacy',
          content:
            'Our services are not intended for individuals under 18. We do not knowingly collect information from minors.',
        },
        {
          title: '17. Changes to This Policy',
          content:
            'We may update this Privacy Policy periodically. Updates will be reflected in the “Last Updated” date. Continued use of our services indicates acceptance of any changes.',
        },
        {
          title: '18. Contact',
          content:
            'If you have questions or requests regarding this Privacy Policy, please contact:\n\nLifyX\nEmail: support@lifyx.ca\n\nYou may also contact the Office of the Privacy Commissioner of Canada if you believe your privacy rights have been violated.',
        },
      ],
    },
    fr: {
      title: 'Politique de confidentialité',
      lastUpdated: 'Dernière mise à jour : 14 février 2026',
      sections: [
        {
          title: '1. Introduction',
          content:
            'LifyX ("nous," "notre," ou "nos") s\'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site Web et utilisez nos services.',
        },
        {
          title: '2. Informations que nous collectons',
          content:
            'Nous collectons les informations que vous nous fournissez directement, notamment :\n\n• Informations d\'identification personnelles (nom, adresse e-mail, numéro de téléphone)\n• Informations commerciales (nom de l\'entreprise, secteur, taille)\n• Exigences et préférences du projet\n• Informations de paiement et de facturation\n• Communications avec notre équipe\n\nNous collectons également automatiquement certaines informations sur votre appareil et vos habitudes d\'utilisation via des cookies et des technologies similaires.',
        },
        {
          title: '3. Comment nous utilisons vos informations',
          content:
            'Nous utilisons les informations que nous collectons pour :\n\n• Fournir, maintenir et améliorer nos services\n• Traiter vos transactions et envoyer des informations connexes\n• Répondre à vos demandes et fournir un support client\n• Vous envoyer des avis techniques, des mises à jour et des communications marketing\n• Surveiller et analyser les modèles et tendances d\'utilisation\n• Détecter, prévenir et résoudre les problèmes techniques et les activités frauduleuses\n• Respecter les obligations légales',
        },
        {
          title: '4. Partage et divulgation d\'informations',
          content:
            'Nous ne vendons pas vos informations personnelles. Nous pouvons partager vos informations avec :\n\n• Les fournisseurs de services qui nous aident à exploiter notre entreprise\n• Les conseillers professionnels (avocats, comptables, auditeurs)\n• Les forces de l\'ordre ou les agences gouvernementales lorsque la loi l\'exige\n• Des tiers dans le cadre d\'une transaction commerciale (fusion, vente, acquisition)',
        },
        {
          title: '5. Sécurité des données',
          content:
            'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos informations personnelles contre l\'accès, l\'altération, la divulgation ou la destruction non autorisés. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n\'est sûre à 100%.',
        },
        {
          title: '6. Vos droits',
          content:
            'En fonction de votre emplacement, vous pouvez avoir certains droits concernant vos informations personnelles, notamment :\n\n• Accès à vos informations personnelles\n• Correction des données inexactes\n• Suppression de vos informations personnelles\n• Restriction du traitement\n• Portabilité des données\n• Objection au traitement\n• Retrait du consentement',
        },
        {
          title: '7. Cookies et technologies de suivi',
          content:
            'Nous utilisons des cookies et des technologies de suivi similaires pour suivre l\'activité sur notre site Web et stocker certaines informations. Vous pouvez demander à votre navigateur de refuser tous les cookies ou d\'indiquer lorsqu\'un cookie est envoyé.',
        },
        {
          title: '8. Transferts internationaux de données',
          content:
            'Vos informations peuvent être transférées et conservées sur des ordinateurs situés en dehors de votre juridiction où les lois sur la protection des données peuvent différer. Nous prenons les mesures appropriées pour garantir que vos données sont traitées en toute sécurité.',
        },
        {
          title: '9. Confidentialité des enfants',
          content:
            'Nos services ne sont pas destinés aux personnes de moins de 18 ans. Nous ne collectons pas sciemment d\'informations personnelles auprès d\'enfants.',
        },
        {
          title: '10. Modifications de cette politique',
          content:
            'Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de toute modification en publiant la nouvelle politique de confidentialité sur cette page et en mettant à jour la date de "Dernière mise à jour".',
        },
        {
          title: '11. Nous contacter',
          content:
            'Si vous avez des questions sur cette politique de confidentialité, veuillez nous contacter via notre formulaire de contact ou pendant les heures de bureau (lundi-vendredi, 9h - 18h).',
        },
      ],
    },
    es: {
      title: 'Política de privacidad',
      lastUpdated: 'Última actualización: 14 de febrero de 2026',
      sections: [
        {
          title: '1. Introducción',
          content:
            'LifyX ("nosotros", "nuestro" o "nos") está comprometido a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro sitio web y usa nuestros servicios.',
        },
        {
          title: '2. Información que recopilamos',
          content:
            'Recopilamos información que usted nos proporciona directamente, incluyendo:\n\n• Información de identificación personal (nombre, dirección de correo electrónico, número de teléfono)\n• Información comercial (nombre de la empresa, industria, tamaño)\n• Requisitos y preferencias del proyecto\n• Información de pago y facturación\n• Comunicaciones con nuestro equipo\n\nTambién recopilamos automáticamente cierta información sobre su dispositivo y patrones de uso a través de cookies y tecnologías similares.',
        },
        {
          title: '3. Cómo usamos su información',
          content:
            'Usamos la información que recopilamos para:\n\n• Proporcionar, mantener y mejorar nuestros servicios\n• Procesar sus transacciones y enviar información relacionada\n• Responder a sus consultas y brindar soporte al cliente\n• Enviarle avisos técnicos, actualizaciones y comunicaciones de marketing\n• Monitorear y analizar patrones y tendencias de uso\n• Detectar, prevenir y abordar problemas técnicos y actividades fraudulentas\n• Cumplir con obligaciones legales',
        },
        {
          title: '4. Compartir y divulgar información',
          content:
            'No vendemos su información personal. Podemos compartir su información con:\n\n• Proveedores de servicios que nos ayudan a operar nuestro negocio\n• Asesores profesionales (abogados, contadores, auditores)\n• Agencias policiales o gubernamentales cuando lo requiera la ley\n• Terceros en relación con una transacción comercial (fusión, venta, adquisición)',
        },
        {
          title: '5. Seguridad de datos',
          content:
            'Implementamos medidas técnicas y organizativas apropiadas para proteger su información personal contra acceso, alteración, divulgación o destrucción no autorizados. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro.',
        },
        {
          title: '6. Sus derechos',
          content:
            'Dependiendo de su ubicación, puede tener ciertos derechos con respecto a su información personal, incluyendo:\n\n• Acceso a su información personal\n• Corrección de datos inexactos\n• Eliminación de su información personal\n• Restricción del procesamiento\n• Portabilidad de datos\n• Objeción al procesamiento\n• Retiro del consentimiento',
        },
        {
          title: '7. Cookies y tecnologías de seguimiento',
          content:
            'Utilizamos cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro sitio web y almacenar cierta información. Puede indicarle a su navegador que rechace todas las cookies o que indique cuándo se está enviando una cookie.',
        },
        {
          title: '8. Transferencias internacionales de datos',
          content:
            'Su información puede ser transferida y mantenida en computadoras ubicadas fuera de su jurisdicción donde las leyes de protección de datos pueden diferir. Tomamos las medidas apropiadas para garantizar que sus datos se traten de manera segura.',
        },
        {
          title: '9. Privacidad de los niños',
          content:
            'Nuestros servicios no están dirigidos a personas menores de 18 años. No recopilamos conscientemente información personal de niños.',
        },
        {
          title: '10. Cambios a esta política',
          content:
            'Podemos actualizar esta Política de Privacidad de vez en cuando. Le notificaremos sobre cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de "Última actualización".',
        },
        {
          title: '11. Contáctenos',
          content:
            'Si tiene preguntas sobre esta Política de Privacidad, contáctenos a través de nuestro formulario de contacto o durante el horario comercial (lunes a viernes, 9 AM - 6 PM).',
        },
      ],
    },
  };

  const pageContent = content[language];

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{pageContent.title}</h1>
          <p className="mb-12 text-muted-foreground">{pageContent.lastUpdated}</p>

          <div className="space-y-8">
            {pageContent.sections.map((section, index) => (
              <div
                key={index}
                className=""
              >
                <h2 className="mb-3 text-xl font-semibold text-emerald-400">
                  {section.title}
                </h2>
                <p className="whitespace-pre-line leading-relaxed text-muted-foreground">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}