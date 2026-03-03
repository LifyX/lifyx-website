import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'motion/react';

export function DataProtectionPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Data Protection & User Rights',
      lastUpdated: 'Last Updated: February 14, 2026',
      intro: 'LifyX (“LifyX,” “we,” “our,” or “us”) is committed to protecting personal information and respecting the rights of individuals in accordance with applicable privacy laws, including Canada’s Personal Information Protection and Electronic Documents Act (PIPEDA) and, where applicable, international data protection regulations.\n\nThis section explains your rights and how we safeguard personal information.',
      sections: [
        {
          title: '1. Your Privacy Rights',
          content:
            'Depending on your location and applicable laws, you may have the following rights:\n\n• Right to Access\nYou may request confirmation of whether we hold personal information about you and request access to that information.\n\n• Right to Rectification\nYou may request correction of inaccurate or incomplete personal information.\n\n• Right to Erasure\nYou may request deletion of your personal information where it is no longer required for the purposes collected, subject to legal or contractual obligations.\n\n• Right to Restrict Processing\nYou may request that we limit the processing of your personal information in certain circumstances.\n\n• Right to Data Portability\nWhere applicable, you may request a copy of your personal information in a structured, commonly used format.\n\n• Right to Object\nYou may object to certain processing activities, including marketing communications.\n\n• Right to Withdraw Consent\nWhere processing is based on consent, you may withdraw that consent at any time. Withdrawal does not affect processing completed prior to withdrawal.\n\nSome rights may be limited by legal, regulatory, or contractual requirements.',
        },
        {
          title: '2. How to Exercise Your Rights',
          content:
            'To exercise any of the above rights, please contact us using the contact details provided below.\n\nTo protect your privacy and security, we may:\n\n• Request verification of identity\n• Request additional information to clarify your request\n\nWe aim to respond within 30 days, unless an extension is permitted under applicable law.\n\nWe reserve the right to decline requests that are manifestly unfounded, excessive, or repetitive, as permitted by law.',
        },
        {
          title: '3. Data Retention',
          content:
            'We retain personal information only for as long as necessary to:\n\n• Fulfill the purposes for which it was collected\n• Meet legal, regulatory, tax, or accounting requirements\n• Enforce contractual rights\n• Resolve disputes\n\nWhen personal information is no longer required, it is securely deleted or anonymized.\n\nRetention periods may vary depending on the nature of the data and applicable laws.',
        },
        {
          title: '4. Data Security Measures',
          content:
            'We implement appropriate administrative, technical, and physical safeguards proportional to the sensitivity of the data, including:\n\n• Encryption of sensitive data in transit\n• Secure hosting infrastructure\n• Role-based access controls\n• Multi-factor authentication where appropriate\n• Routine system updates and security monitoring\n• Confidentiality obligations for personnel\n• Internal data protection policies and training\n\nWhile we take reasonable measures to safeguard personal information, no system can guarantee absolute security.',
        },
        {
          title: '5. International Data Transfers',
          content:
            'Because LifyX serves clients internationally, personal information may be processed or stored outside of your province or country of residence.\n\nWhere required, we implement appropriate safeguards, such as:\n\n• Contractual data protection clauses\n• Secure cloud provider standards\n• Vendor data processing agreements\n• Compliance reviews\n\nBy using our services, you acknowledge that your information may be transferred internationally in accordance with applicable laws.',
        },
        {
          title: '6. Data Breach Response',
          content:
            'In the event of a security breach involving personal information that poses a real risk of significant harm, we will:\n\n• Notify affected individuals where required by law\n• Notify applicable regulatory authorities where required\n• Maintain records of breaches in accordance with legal obligations',
        },
        {
          title: '7. Complaints and Regulatory Rights',
          content:
            'If you believe your privacy rights have been violated, you may contact us directly to resolve the issue.\n\nYou also have the right to lodge a complaint with:\n\n• The Office of the Privacy Commissioner of Canada (OPC) if you are in Canada\n• Your local data protection authority if you are located internationally\n\nWe encourage individuals to contact us first so we may address concerns promptly.',
        },
        {
          title: '8. Contact Information',
          content:
            'For privacy-related inquiries or rights requests, please contact:\n\nPrivacy Officer\nLifyX\nsupport@lifyx.ca\nBusiness Hours: Monday–Friday, 8:00 AM – 4:00 PM (EST)',
        },
      ],
    },
    fr: {
      title: 'Protection des données et droits des utilisateurs',
      lastUpdated: 'Dernière mise à jour : 14 février 2026',
      intro: 'LifyX s\'engage à protéger vos données personnelles et à respecter vos droits à la vie privée.',
      sections: [
        {
          title: 'Vos droits sur les données',
          content: 'Vous avez les droits suivants concernant vos données personnelles :\n\n• Droit d\'accès : Demander des copies de vos données personnelles\n• Droit de rectification : Demander la correction des données inexactes\n• Droit à l\'effacement : Demander la suppression de vos données personnelles\n• Droit de restreindre le traitement : Demander la limitation du traitement des données\n• Droit à la portabilité des données : Recevoir vos données dans un format portable\n• Droit d\'opposition : S\'opposer à certains types de traitement\n• Droit de retirer le consentement : Retirer le consentement à tout moment',
        },
        {
          title: 'Comment exercer vos droits',
          content: 'Pour exercer l\'un de ces droits, veuillez nous contacter via notre formulaire de contact. Nous répondrons à votre demande dans les 30 jours. Vous devrez peut-être vérifier votre identité pour des raisons de sécurité.',
        },
        {
          title: 'Conservation des données',
          content: 'Nous conservons vos données personnelles uniquement aussi longtemps que nécessaire pour remplir les objectifs pour lesquels elles ont été collectées, y compris les exigences légales, comptables ou de reporting.',
        },
        {
          title: 'Mesures de sécurité des données',
          content: 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées, notamment :\n\n• Chiffrement des données sensibles\n• Évaluations de sécurité régulières\n• Contrôles d\'accès et authentification\n• Stockage et transmission sécurisés des données\n• Formation des employés sur la protection des données',
        },
        {
          title: 'Transferts internationaux de données',
          content: 'Si nous transférons vos données à l\'international, nous veillons à ce que des garanties appropriées soient en place, telles que des clauses contractuelles types ou des décisions d\'adéquation.',
        },
        {
          title: 'Plaintes',
          content: 'Si vous pensez que vos droits à la protection des données ont été violés, vous avez le droit de déposer une plainte auprès de votre autorité locale de protection des données.',
        },
      ],
    },
    es: {
      title: 'Protección de datos y derechos del usuario',
      lastUpdated: 'Última actualización: 14 de febrero de 2026',
      intro: 'LifyX se compromete a proteger sus datos personales y respetar sus derechos de privacidad.',
      sections: [
        {
          title: 'Sus derechos sobre los datos',
          content: 'Tiene los siguientes derechos con respecto a sus datos personales:\n\n• Derecho de acceso: Solicitar copias de sus datos personales\n• Derecho de rectificación: Solicitar corrección de datos inexactos\n• Derecho al olvido: Solicitar eliminación de sus datos personales\n• Derecho a restringir el procesamiento: Solicitar limitación del procesamiento de datos\n• Derecho a la portabilidad de datos: Recibir sus datos en un formato portable\n• Derecho a objetar: Objetar ciertos tipos de procesamiento\n• Derecho a retirar el consentimiento: Retirar el consentimiento en cualquier momento',
        },
        {
          title: 'Cómo ejercer sus derechos',
          content: 'Para ejercer cualquiera de estos derechos, contáctenos a través de nuestro formulario de contacto. Responderemos a su solicitud dentro de 30 días. Es posible que deba verificar su identidad por motivos de seguridad.',
        },
        {
          title: 'Retención de datos',
          content: 'Retenemos sus datos personales solo durante el tiempo necesario para cumplir los propósitos para los que se recopilaron, incluidos los requisitos legales, contables o de informes.',
        },
        {
          title: 'Medidas de seguridad de datos',
          content: 'Implementamos medidas técnicas y organizativas apropiadas que incluyen:\n\n• Encriptación de datos sensibles\n• Evaluaciones de seguridad regulares\n• Controles de acceso y autenticación\n• Almacenamiento y transmisión segura de datos\n• Capacitación de empleados sobre protección de datos',
        },
        {
          title: 'Transferencias internacionales de datos',
          content: 'Si transferimos sus datos internacionalmente, nos aseguramos de que existan salvaguardas apropiadas, como cláusulas contractuales estándar o decisiones de adecuación.',
        },
        {
          title: 'Quejas',
          content: 'Si cree que se han violado sus derechos de protección de datos, tiene derecho a presentar una queja ante su autoridad local de protección de datos.',
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
