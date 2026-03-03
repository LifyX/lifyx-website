import { useLanguage } from '../../contexts/LanguageContext';

export function TermsPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Terms & Conditions',
      lastUpdated: 'Last Updated: February 14, 2026',
      sections: [
        {
          title: '1. Agreement',
          content:
            'These Terms & Conditions (“Terms”) form a legally binding agreement between you (“Client”) and LifyX (“LifyX,” “we,” “our,” or “us”).\n\nBy using our website, engaging our services, or entering into a project agreement, you agree to these Terms.\n\nThese Terms apply alongside any signed proposal or service agreement. In the event of a conflict, the written project agreement governs.',
        },
        {
          title: '2. Scope of Services',
          content:
            'LifyX provides digital services including website development, front-end design, platform integrations, and related consulting.\n\nAll deliverables, pricing, timelines, and responsibilities must be defined in a written agreement. Services not expressly included are excluded.\n\nWe reserve the right to decline or discontinue services where appropriate.',
        },
        {
          title: '3. Client Responsibilities',
          content:
            'You agree to:\n\n• Provide accurate and complete information\n• Supply required content, assets, and approvals on time\n• Ensure all provided materials are owned or properly licensed\n• Maintain confidentiality of login credentials\n• Use deliverables lawfully\n\nDelays in providing required materials may impact timelines. LifyX is not responsible for delays caused by missing inputs.',
        },
        {
          title: '4. Fees and Payment',
          content:
            'Deposits\n\nDeposits are non-refundable unless otherwise agreed in writing. Work begins only after required payment is received.\n\nPayment Terms\n\nInvoices are due as specified in the project agreement. Late payments may result in suspension of work.\n\nDeliverables, access credentials, or deployment may be withheld until payment is complete.\n\nOwnership Prior to Payment\n\nIntellectual property rights transfer only after full payment has been received.',
        },
        {
          title: '5. Intellectual Property',
          content:
            'Ownership Transfer\n\nOwnership of custom deliverables transfers upon full payment and compliance with the agreement.\n\nUntil that time, LifyX retains ownership of all work.\n\nRetained Rights\n\nLifyX retains rights to:\n\n• Pre-existing materials\n• Frameworks and reusable systems\n• Internal methodologies and processes\n• General technical knowledge\n\nPortfolio Rights\n\nUnless otherwise agreed in writing, LifyX may display completed work in its portfolio and marketing materials.\n\nThird-Party Tools\n\nThird-party software remains subject to its own licensing terms.',
        },
        {
          title: '6. Confidentiality',
          content:
            'Both parties agree to protect confidential information and not disclose it except as required for project execution or by law.\n\nConfidentiality obligations survive termination.',
        },
        {
          title: '7. Changes and Scope Adjustments',
          content:
            'Requests outside the agreed scope require written approval and may involve revised pricing or timelines.\n\nLifyX is not obligated to perform additional work without formal agreement.',
        },
        {
          title: '8. No Guarantees',
          content:
            'While services are provided professionally and competently, LifyX does not guarantee:\n\n• Revenue growth\n• Search engine rankings\n• Continuous uptime\n• Business performance results\n\nWebsites and integrations depend on third-party systems and infrastructure.\n\nServices are provided to the extent permitted by law without implied warranties beyond those legally required.',
        },
        {
          title: '9. Limitation of Liability',
          content:
            'To the maximum extent permitted by law, LifyX is not liable for indirect, incidental, or consequential damages, including loss of revenue, profits, data, or business interruption.\n\nLifyX’s total liability shall not exceed the total amount paid for the specific project.',
        },
        {
          title: '10. Indemnification',
          content:
            'You agree to indemnify and hold LifyX harmless from claims arising from:\n\n• Content you provide\n• Intellectual property violations\n• Regulatory non-compliance\n• Misuse of deliverables after handoff',
        },
        {
          title: '11. Security and Maintenance',
          content:
            'LifyX implements reasonable security safeguards during development.\n\nAfter project handoff, the Client is responsible for maintaining credentials and ongoing system updates unless covered under a separate maintenance agreement.\n\nLifyX is not responsible for security incidents caused by third-party systems or post-handoff changes.',
        },
        {
          title: '12. Termination',
          content:
            'Either party may terminate in accordance with the signed agreement.\n\nUpon termination:\n\n• Outstanding balances become immediately due\n• Deposits remain non-refundable\n• Work may be withheld pending payment\n\nProvisions relating to payment, intellectual property, liability, and confidentiality survive termination.',
        },
        {
          title: '13. Force Majeure',
          content:
            'LifyX is not liable for delays or failure to perform due to events beyond reasonable control, including infrastructure outages, government restrictions, natural disasters, or cyber incidents.',
        },
        {
          title: '14. Independent Contractor',
          content:
            'LifyX operates as an independent contractor. Nothing creates a partnership, joint venture, or employment relationship.',
        },
        {
          title: '15. Governing Law',
          content:
            'These Terms are governed by the laws of the Province of Ontario and the laws of Canada.\n\nDisputes shall be resolved in Ontario courts unless otherwise agreed.',
        },
        {
          title: '16. Severability',
          content:
            'If any provision is unenforceable, the remainder remains in effect.',
        },
        {
          title: '17. Contact',
          content:
            'LifyX\nEmail: support@lifyx.ca',
        },
      ],
    },
    fr: {
      title: 'Conditions générales',
      lastUpdated: 'Dernière mise à jour : 14 février 2026',
      sections: [
        {
          title: '1. Accord aux conditions',
          content:
            'En accédant et en utilisant les services de LifyX, vous acceptez d\'être lié par ces Conditions générales. Si vous n\'êtes pas d\'accord avec une partie de ces conditions, vous ne pouvez pas accéder à nos services.',
        },
        {
          title: '2. Services',
          content:
            'LifyX fournit des solutions de développement web, de conception et numériques pour les entreprises. Nos services comprennent notamment :\n\n• Conception et développement de sites Web\n• Développement d\'applications web full-stack\n• Intégration de systèmes d\'entreprise\n• Maintenance et support continus\n\nLes services spécifiques, les délais et les livrables seront décrits dans les accords de projet individuels.',
        },
        {
          title: '3. Responsabilités de l\'utilisateur',
          content:
            'Vous acceptez de :\n\n• Fournir des informations exactes et complètes\n• Maintenir la confidentialité de vos identifiants de compte\n• Utiliser nos services conformément aux lois applicables\n• Ne pas utiliser nos services à des fins illégales ou interdites\n• Respecter les droits de propriété intellectuelle',
        },
        {
          title: '4. Conditions de paiement',
          content:
            'Les conditions de paiement seront spécifiées dans votre accord de projet. Généralement :\n\n• Des dépôts peuvent être requis pour commencer le travail\n• Les paiements sont dus selon les jalons convenus\n• Les retards de paiement peuvent entraîner la suspension du projet\n• Tous les frais sont en USD sauf indication contraire\n• Les remboursements sont soumis aux conditions de votre accord de projet',
        },
        {
          title: '5. Propriété intellectuelle',
          content:
            'Après paiement intégral, vous recevez la propriété des livrables finaux créés spécifiquement pour votre projet. LifyX conserve les droits sur :\n\n• Les matériaux et outils préexistants\n• Les méthodologies et processus généraux\n• Les droits de portfolio pour présenter le travail (sauf accord contraire)\n• L\'utilisation des apprentissages du projet pour les futurs travaux clients',
        },
        {
          title: '6. Confidentialité',
          content:
            'Les deux parties acceptent de maintenir la confidentialité des informations commerciales sensibles partagées pendant le projet. Cette obligation continue après l\'achèvement du projet.',
        },
        {
          title: '7. Garanties et décharges',
          content:
            'LifyX garantit que les services seront exécutés de manière professionnelle et compétente. Cependant :\n\n• Les services sont fournis "tels quels" sans garantie de résultats spécifiques\n• Nous ne garantissons pas que les services seront ininterrompus ou sans erreur\n• Nous ne sommes pas responsables des services ou plateformes tiers\n• Les résultats dépendent de facteurs hors de notre contrôle',
        },
        {
          title: '8. Limitation de responsabilité',
          content:
            'Dans toute la mesure permise par la loi, LifyX ne sera pas responsable des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs résultant de l\'utilisation de nos services.',
        },
        {
          title: '9. Résiliation',
          content:
            'L\'une ou l\'autre partie peut résilier les services selon les termes de l\'accord de projet. La résiliation ne vous libère pas des obligations de paiement pour le travail effectué.',
        },
        {
          title: '10. Modifications des conditions',
          content:
            'Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prendront effet immédiatement après publication. L\'utilisation continue de nos services constitue l\'acceptation des conditions modifiées.',
        },
        {
          title: '11. Loi applicable',
          content:
            'Ces conditions seront régies et interprétées conformément aux lois locales applicables, sans égard aux principes de conflit de lois.',
        },
        {
          title: '12. Contact',
          content:
            'Pour toute question sur ces Conditions générales, veuillez nous contacter via notre formulaire de contact.',
        },
      ],
    },
    es: {
      title: 'Términos y condiciones',
      lastUpdated: 'Última actualización: 14 de febrero de 2026',
      sections: [
        {
          title: '1. Acuerdo a los términos',
          content:
            'Al acceder y usar los servicios de LifyX, acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no puede acceder a nuestros servicios.',
        },
        {
          title: '2. Servicios',
          content:
            'LifyX proporciona desarrollo web, diseño y soluciones digitales para empresas. Nuestros servicios incluyen pero no se limitan a:\n\n• Diseño y desarrollo de sitios web\n• Desarrollo de aplicaciones web full-stack\n• Integración de sistemas empresariales\n• Mantenimiento y soporte continuo\n\nLos servicios específicos, plazos y entregables se describirán en acuerdos de proyecto individuales.',
        },
        {
          title: '3. Responsabilidades del usuario',
          content:
            'Usted acepta:\n\n• Proporcionar información precisa y completa\n• Mantener la confidencialidad de sus credenciales de cuenta\n• Usar nuestros servicios en cumplimiento con las leyes aplicables\n• No usar nuestros servicios para ningún propósito ilegal o prohibido\n• Respetar los derechos de propiedad intelectual',
        },
        {
          title: '4. Términos de pago',
          content:
            'Los términos de pago se especificarán en su acuerdo de proyecto. Generalmente:\n\n• Pueden requerirse depósitos para comenzar el trabajo\n• Los pagos vencen según los hitos acordados\n• Los pagos atrasados pueden resultar en la suspensión del proyecto\n• Todas las tarifas están en USD a menos que se especifique lo contrario\n• Los reembolsos están sujetos a los términos en su acuerdo de proyecto',
        },
        {
          title: '5. Propiedad intelectual',
          content:
            'Al realizar el pago completo, recibe la propiedad de los entregables finales creados específicamente para su proyecto. LifyX conserva los derechos sobre:\n\n• Materiales y herramientas preexistentes\n• Metodologías y procesos generales\n• Derechos de portafolio para mostrar el trabajo (a menos que se acuerde lo contrario)\n• Uso de aprendizajes del proyecto para trabajo futuro de clientes',
        },
        {
          title: '6. Confidencialidad',
          content:
            'Ambas partes acuerdan mantener la confidencialidad de la información comercial sensible compartida durante el proyecto. Esta obligación continúa después de la finalización del proyecto.',
        },
        {
          title: '7. Garantías y exenciones',
          content:
            'LifyX garantiza que los servicios se realizarán profesional y competentemente. Sin embargo:\n\n• Los servicios se proporcionan "tal cual" sin garantías de resultados específicos\n• No garantizamos que los servicios sean ininterrompus o libres de errores\n• No somos responsables de servicios o plataformas de terceros\n• Los resultados dependen de factores fuera de nuestro control',
        },
        {
          title: '8. Limitación de responsabilidad',
          content:
            'En la máxima medida permitida por la ley, LifyX no será responsable de ningún daño indirecto, incidental, especial, consecuente o punitivo que surja del uso de nuestros servicios.',
        },
        {
          title: '9. Terminación',
          content:
            'Cualquiera de las partes puede terminar los servicios de acuerdo con los términos del acuerdo del proyecto. La terminación no lo libera de las obligaciones de pago por el trabajo completado.',
        },
        {
          title: '10. Cambios a los términos',
          content:
            'Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos inmediatamente después de la publicación. El uso continuo de nuestros servicios constituye la aceptación de los términos modificados.',
        },
        {
          title: '11. Ley aplicable',
          content:
            'Estos términos se regirán e interpretarán de acuerdo con las leyes locales aplicables, sin tener en cuenta los principios de conflicto de leyes.',
        },
        {
          title: '12. Contacto',
          content:
            'Para preguntas sobre estos Términos y Condiciones, contáctenos a través de nuestro formulario de contacto.',
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