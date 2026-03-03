import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Calendar, User, Mail, Building, DollarSign, Clock, AlertCircle, CheckCircle2, TrendingUp, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'lead-capture' | 'booking' | 'action' | 'urgent';
  metadata?: any;
}

interface ConversationContext {
  userName?: string;
  userEmail?: string;
  businessName?: string;
  businessType?: string;
  servicesInterested: string[];
  budgetRange?: string;
  timeline?: string;
  urgencyLevel: 'low' | 'medium' | 'high' | 'critical';
  isQualified: boolean;
  conversationStage: 'greeting' | 'discovery' | 'qualification' | 'proposal' | 'booking' | 'escalation';
  messageCount: number;
  lastTopics: string[];
  tone: 'formal' | 'casual' | 'consultative';
}

interface LeadData {
  name: string;
  email: string;
  businessName: string;
  businessType: string;
  servicesInterested: string[];
  budgetRange: string;
  timeline: string;
  urgencyLevel: string;
  capturedAt: Date;
}

export function AdvancedChatbot() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [context, setContext] = useState<ConversationContext>({
    servicesInterested: [],
    urgencyLevel: 'low',
    isQualified: false,
    conversationStage: 'greeting',
    messageCount: 0,
    lastTopics: [],
    tone: 'consultative',
  });

  const [leadData, setLeadData] = useState<Partial<LeadData>>({
    servicesInterested: [],
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with personalized welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = getWelcomeMessage();
      addBotMessage(welcomeMessage, 'text');
    }
  }, [isOpen, language]);

  const getWelcomeMessage = (): string => {
    const hour = new Date().getHours();
    const timeOfDay = hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening';

    const welcomes = {
      en: {
        morning: "Good morning! I'm your digital growth consultant at LifyX. I help businesses like yours build exceptional web presences. What brings you here today?",
        afternoon: "Good afternoon! Welcome to LifyX. I'm here to help you explore how we can elevate your digital presence. What would you like to know?",
        evening: "Good evening! Thanks for reaching out to LifyX. I specialize in helping businesses grow online. How can I assist you today?",
      },
      fr: {
        morning: "Bonjour! Je suis votre consultant en croissance numérique chez LifyX. J'aide les entreprises comme la vôtre à créer des présences web exceptionnelles. Qu'est-ce qui vous amène ici aujourd'hui?",
        afternoon: "Bon après-midi! Bienvenue chez LifyX. Je suis là pour vous aider à explorer comment nous pouvons améliorer votre présence numérique. Que souhaitez-vous savoir?",
        evening: "Bonsoir! Merci de contacter LifyX. Je me spécialise dans l'aide aux entreprises pour croître en ligne. Comment puis-je vous aider aujourd'hui?",
      },
      es: {
        morning: "¡Buenos días! Soy su consultor de crecimiento digital en LifyX. Ayudo a empresas como la suya a crear presencias web excepcionales. ¿Qué le trae aquí hoy?",
        afternoon: "¡Buenas tardes! Bienvenido a LifyX. Estoy aquí para ayudarle a explorar cómo podemos elevar su presencia digital. ¿Qué le gustaría saber?",
        evening: "¡Buenas noches! Gracias por contactar a LifyX. Me especializo en ayudar a las empresas a crecer en línea. ¿Cómo puedo ayudarle hoy?",
      },
    };

    return welcomes[language][timeOfDay];
  };

  const detectUrgency = (message: string): 'low' | 'medium' | 'high' | 'critical' => {
    const urgentWords = {
      critical: ['down', 'broken', 'emergency', 'urgent', 'immediately', 'asap', 'help', 'crisis', 'perdido', 'urgente', 'emergencia'],
      high: ['soon', 'quickly', 'fast', 'deadline', 'losing', 'competitors', 'pronto', 'rápido', 'fecha límite'],
      medium: ['interested', 'looking', 'need', 'want', 'interesado', 'busco', 'necesito'],
    };

    const lowerMessage = message.toLowerCase();

    if (urgentWords.critical.some(word => lowerMessage.includes(word))) return 'critical';
    if (urgentWords.high.some(word => lowerMessage.includes(word))) return 'high';
    if (urgentWords.medium.some(word => lowerMessage.includes(word))) return 'medium';
    return 'low';
  };

  const detectIntent = (message: string): string[] => {
    const intents: string[] = [];
    const lowerMessage = message.toLowerCase();

    const intentKeywords = {
      pricing: ['price', 'cost', 'budget', 'afford', 'expensive', 'cheap', 'prix', 'coût', 'precio', 'costo', 'presupuesto'],
      services: ['service', 'offer', 'do', 'provide', 'build', 'create', 'develop', 'servicio', 'ofrecer', 'desarrollar'],
      timeline: ['when', 'how long', 'time', 'duration', 'quickly', 'fast', 'cuándo', 'tiempo', 'duración', 'rápido'],
      portfolio: ['example', 'work', 'portfolio', 'project', 'show', 'case', 'ejemplo', 'trabajo', 'proyecto', 'mostrar'],
      booking: ['call', 'meet', 'schedule', 'appointment', 'talk', 'speak', 'demo', 'llamar', 'reunión', 'cita', 'hablar'],
      support: ['help', 'issue', 'problem', 'broken', 'fix', 'ayuda', 'problema', 'arreglar'],
      about: ['who', 'what', 'founded', 'team', 'company', 'quién', 'qué', 'fundado', 'equipo', 'empresa'],
      process: ['process', 'how', 'work', 'steps', 'workflow', 'proceso', 'cómo', 'funciona', 'pasos'],
    };

    Object.entries(intentKeywords).forEach(([intent, keywords]) => {
      if (keywords.some(keyword => lowerMessage.includes(keyword))) {
        intents.push(intent);
      }
    });

    return intents.length > 0 ? intents : ['general'];
  };

  const updateContext = (userMessage: string, intents: string[]) => {
    const urgency = detectUrgency(userMessage);
    const newMessageCount = context.messageCount + 1;

    // Determine conversation stage
    let newStage = context.conversationStage;
    if (urgency === 'critical') {
      newStage = 'escalation';
    } else if (intents.includes('booking') && context.isQualified) {
      newStage = 'booking';
    } else if (newMessageCount > 3 && !context.userName) {
      newStage = 'qualification';
    } else if (newMessageCount > 1) {
      newStage = 'discovery';
    }

    // Detect tone preference
    const casualIndicators = ['hey', 'hi', 'thanks', 'cool', 'awesome', 'hola', 'gracias', 'genial'];
    const formalIndicators = ['greetings', 'sir', 'madam', 'professional', 'business', 'señor', 'señora', 'profesional'];
    const tone = formalIndicators.some(word => userMessage.toLowerCase().includes(word)) 
      ? 'formal' 
      : casualIndicators.some(word => userMessage.toLowerCase().includes(word))
      ? 'casual'
      : 'consultative';

    setContext(prev => ({
      ...prev,
      urgencyLevel: urgency,
      conversationStage: newStage,
      messageCount: newMessageCount,
      lastTopics: [...intents.slice(0, 3), ...prev.lastTopics].slice(0, 5),
      tone,
    }));
  };

  const generateIntelligentResponse = (userMessage: string, intents: string[]): string => {
    const { conversationStage, urgencyLevel, tone, userName, lastTopics } = context;

    // Critical urgency responses
    if (urgencyLevel === 'critical') {
      return getUrgentResponse();
    }

    // Lead qualification stage
    if (conversationStage === 'qualification' && !userName) {
      return getQualificationPrompt();
    }

    // Intent-based responses with context
    if (intents.includes('pricing')) {
      return getPricingResponse(tone);
    }

    if (intents.includes('services')) {
      return getServicesResponse(tone, lastTopics);
    }

    if (intents.includes('timeline')) {
      return getTimelineResponse(tone);
    }

    if (intents.includes('booking')) {
      return getBookingResponse();
    }

    if (intents.includes('process')) {
      return getProcessResponse(tone);
    }

    if (intents.includes('about')) {
      return getAboutResponse(tone);
    }

    if (intents.includes('portfolio')) {
      return getPortfolioResponse(tone);
    }

    // Contextual default response
    return getContextualResponse(intents);
  };

  const getUrgentResponse = (): string => {
    const responses = {
      en: "I understand this is urgent. Let me connect you with our team immediately. I've flagged this as a priority. In the meantime, you can reach us directly at support@lifyx.ca or call during business hours (Mon-Fri, 9 AM - 6 PM). What specific issue are you experiencing?",
      fr: "Je comprends que c'est urgent. Permettez-moi de vous connecter immédiatement avec notre équipe. J'ai marqué ceci comme prioritaire. En attendant, vous pouvez nous joindre directement à support@lifyx.ca ou appeler pendant les heures de bureau (Lun-Ven, 9h - 18h). Quel problème spécifique rencontrez-vous?",
      es: "Entiendo que esto es urgente. Permítame conectarlo con nuestro equipo de inmediato. He marcado esto como prioritario. Mientras tanto, puede contactarnos directamente en support@lifyx.ca o llamar durante el horario comercial (Lun-Vie, 9 AM - 6 PM). ¿Qué problema específico está experimentando?",
    };
    return responses[language];
  };

  const getQualificationPrompt = (): string => {
    const prompts = {
      en: "I'd love to provide you with more personalized recommendations. To better assist you, could you share your name and a bit about your business? This helps me understand your unique needs and suggest the best solutions for you.",
      fr: "J'aimerais vous fournir des recommandations plus personnalisées. Pour mieux vous aider, pourriez-vous partager votre nom et un peu d'informations sur votre entreprise? Cela m'aide à comprendre vos besoins uniques et à suggérer les meilleures solutions pour vous.",
      es: "Me encantaría proporcionarle recomendaciones más personalizadas. Para ayudarlo mejor, ¿podría compartir su nombre y un poco sobre su negocio? Esto me ayuda a entender sus necesidades únicas y sugerir las mejores soluciones para usted.",
    };
    
    setTimeout(() => setShowLeadForm(true), 1000);
    return prompts[language];
  };

  const getPricingResponse = (tone: string): string => {
    const responses = {
      en: {
        formal: "Our pricing structure is designed to be transparent and value-driven. We maintain a $2,000 minimum for all projects to ensure quality and comprehensive service. Most client engagements range from $2,000 to $8,000+, depending on scope and complexity.\n\nKey factors that influence pricing:\n• Number of pages and features\n• Custom design vs template\n• Integration requirements\n• Timeline urgency\n• Ongoing support needs\n\nI'd recommend scheduling a discovery call where we can discuss your specific requirements and provide a detailed, tailored quote. Would you like to book a consultation?",
        casual: "Great question! Our projects start at $2,000 minimum, with most falling in the $2,000-$8,000+ range. The exact price depends on what you need—think custom design, features, integrations, and timeline.\n\nWe're all about transparent pricing with no surprises. Want to hop on a call to get a personalized quote for your specific project?",
        consultative: "Let's talk about investment and value. Our pricing starts at $2,000 minimum for all projects, with typical engagements ranging from $2,000 to $8,000+ based on complexity and scope.\n\nWhat drives the investment:\n• Custom design and development work\n• Feature complexity and integrations\n• Content volume and multilingual needs\n• Timeline requirements\n• Post-launch support\n\nTo give you an accurate quote, I'd need to understand your business goals, target audience, and must-have features. Can you tell me more about what you're looking to build?",
      },
      fr: {
        formal: "Notre structure de tarification est conçue pour être transparente et axée sur la valeur. Nous maintenons un minimum de 2 000 $ pour tous les projets afin de garantir la qualité et un service complet. La plupart des engagements clients se situent entre 2 000 $ et 8 000 $ et plus, selon la portée et la complexité.\n\nFacteurs clés qui influencent les prix:\n• Nombre de pages et fonctionnalités\n• Conception personnalisée vs modèle\n• Exigences d'intégration\n• Urgence du calendrier\n• Besoins de soutien continu\n\nJe recommanderais de planifier un appel de découverte où nous pouvons discuter de vos exigences spécifiques et fournir un devis détaillé et personnalisé. Souhaitez-vous réserver une consultation?",
        casual: "Excellente question! Nos projets commencent à partir de 2 000 $ minimum, la plupart se situant dans la fourchette de 2 000 $ à 8 000 $ et plus. Le prix exact dépend de ce dont vous avez besoin—pensez à la conception personnalisée, aux fonctionnalités, aux intégrations et au calendrier.\n\nNous sommes transparents avec nos prix, sans surprises. Voulez-vous planifier un appel pour obtenir un devis personnalisé pour votre projet spécifique?",
        consultative: "Parlons d'investissement et de valeur. Notre tarification commence à 2 000 $ minimum pour tous les projets, avec des engagements typiques allant de 2 000 $ à 8 000 $ et plus selon la complexité et la portée.\n\nCe qui détermine l'investissement:\n• Travail de conception et développement personnalisé\n• Complexité des fonctionnalités et intégrations\n• Volume de contenu et besoins multilingues\n• Exigences de calendrier\n• Support post-lancement\n\nPour vous donner un devis précis, j'aurais besoin de comprendre vos objectifs commerciaux, votre public cible et vos fonctionnalités indispensables. Pouvez-vous m'en dire plus sur ce que vous cherchez à construire?",
      },
      es: {
        formal: "Nuestra estructura de precios está diseñada para ser transparente y orientada al valor. Mantenemos un mínimo de $2,000 para todos los proyectos para garantizar calidad y servicio integral. La mayoría de los compromisos con clientes oscilan entre $2,000 y $8,000+, dependiendo del alcance y la complejidad.\n\nFactores clave que influyen en los precios:\n• Número de páginas y características\n• Diseño personalizado vs plantilla\n• Requisitos de integración\n• Urgencia del cronograma\n• Necesidades de soporte continuo\n\nRecomendaría programar una llamada de descubrimiento donde podamos discutir sus requisitos específicos y proporcionar una cotización detallada y personalizada. ¿Le gustaría reservar una consulta?",
        casual: "¡Excelente pregunta! Nuestros proyectos comienzan en $2,000 mínimo, con la mayoría cayendo en el rango de $2,000-$8,000+. El precio exacto depende de lo que necesite—piense en diseño personalizado, características, integraciones y cronograma.\n\nSomos transparentes con nuestros precios, sin sorpresas. ¿Quiere programar una llamada para obtener una cotización personalizada para su proyecto específico?",
        consultative: "Hablemos de inversión y valor. Nuestros precios comienzan en $2,000 mínimo para todos los proyectos, con compromisos típicos que van de $2,000 a $8,000+ según la complejidad y el alcance.\n\nLo que determina la inversión:\n• Trabajo de diseño y desarrollo personalizado\n• Complejidad de características e integraciones\n• Volumen de contenido y necesidades multilingües\n• Requisitos de cronograma\n• Soporte post-lanzamiento\n\nPara darle una cotización precisa, necesitaría entender sus objetivos comerciales, audiencia objetivo y características imprescindibles. ¿Puede contarme más sobre lo que busca construir?",
      },
    };

    return responses[language][tone];
  };

  const getServicesResponse = (tone: string, lastTopics: string[]): string => {
    const alreadyDiscussed = lastTopics.includes('services');
    
    const responses = {
      en: {
        new: "We're a full-stack web development studio specializing in digital growth for small businesses. Our core services include:\n\n🎨 **Custom Website Design** - Beautiful, brand-aligned designs that convert\n⚙️ **Full-Stack Development** - React, modern frameworks, scalable architecture\n🌍 **Multilingual Systems** - English, French, Spanish support built-in\n📅 **Business Systems** - Booking platforms, payment processing, CRM integration\n📈 **Growth Optimization** - SEO, performance, analytics, conversion optimization\n🛠️ **Ongoing Support** - Maintenance, updates, continuous improvement\n\nWhat area interests you most, or is there a specific challenge you're trying to solve?",
        followup: "Since we've already touched on our services, let me get more specific. What type of business are you running, and what's the main goal for your digital presence? Are you looking to:\n\n• Generate more leads online?\n• Sell products/services directly?\n• Build credibility and brand awareness?\n• Streamline operations with automation?\n• Something else entirely?\n\nThis helps me recommend the exact services that will move the needle for you.",
      },
      fr: {
        new: "Nous sommes un studio de développement web full-stack spécialisé dans la croissance numérique pour les petites entreprises. Nos services principaux incluent:\n\n🎨 **Conception de sites Web personnalisés** - Designs magnifiques et alignés sur la marque qui convertissent\n⚙️ **Développement Full-Stack** - React, frameworks modernes, architecture évolutive\n🌍 **Systèmes multilingues** - Support anglais, français, espagnol intégré\n📅 **Systèmes d'entreprise** - Plateformes de réservation, traitement des paiements, intégration CRM\n📈 **Optimisation de croissance** - SEO, performance, analyse, optimisation de conversion\n🛠️ **Support continu** - Maintenance, mises à jour, amélioration continue\n\nQuel domaine vous intéresse le plus, ou y a-t-il un défi spécifique que vous essayez de résoudre?",
        followup: "Puisque nous avons déjà abordé nos services, permettez-moi d'être plus précis. Quel type d'entreprise dirigez-vous, et quel est l'objectif principal de votre présence numérique? Cherchez-vous à:\n\n• Générer plus de prospects en ligne?\n• Vendre des produits/services directement?\n• Construire la crédibilité et la notoriété de la marque?\n• Rationaliser les opérations avec l'automatisation?\n• Autre chose?\n\nCela m'aide à recommander les services exacts qui feront la différence pour vous.",
      },
      es: {
        new: "Somos un estudio de desarrollo web full-stack especializado en crecimiento digital para pequeñas empresas. Nuestros servicios principales incluyen:\n\n🎨 **Diseño de sitios web personalizados** - Diseños hermosos y alineados con la marca que convierten\n⚙️ **Desarrollo Full-Stack** - React, frameworks modernos, arquitectura escalable\n🌍 **Sistemas multilingües** - Soporte de inglés, francés, español integrado\n📅 **Sistemas empresariales** - Plataformas de reservas, procesamiento de pagos, integración CRM\n📈 **Optimización de crecimiento** - SEO, rendimiento, análisis, optimización de conversión\n🛠️ **Soporte continuo** - Mantenimiento, actualizaciones, mejora continua\n\n¿Qué área le interesa más, o hay un desafío específico que está tratando de resolver?",
        followup: "Ya que hemos tocado nuestros servicios, permítame ser más específico. ¿Qué tipo de negocio está dirigiendo y cuál es el objetivo principal de su presencia digital? ¿Está buscando:\n\n• ¿Generar más clientes potenciales en línea?\n• ¿Vender productos/servicios directamente?\n• ¿Construir credibilidad y conciencia de marca?\n• ¿Optimizar operaciones con automatización?\n• ¿Algo más?\n\nEsto me ayuda a recomendar los servicios exactos que marcarán la diferencia para usted.",
      },
    };

    return alreadyDiscussed ? responses[language].followup : responses[language].new;
  };

  const getTimelineResponse = (tone: string): string => {
    const responses = {
      en: "Great question about timelines. Here's the realistic breakdown:\n\n⚡ **Basic Website** (5-10 pages)\n• 2-4 weeks from start to launch\n• Perfect for: Service businesses, portfolios, local businesses\n\n🚀 **Standard Platform** (Custom features, integrations)\n• 4-8 weeks from discovery to deployment\n• Perfect for: E-commerce, booking systems, member portals\n\n🏗️ **Complex Solution** (Advanced features, multiple integrations)\n• 8-12+ weeks for full build and testing\n• Perfect for: SaaS platforms, marketplaces, enterprise tools\n\nWhat we deliver faster than most:\n• We work in sprints with weekly check-ins\n• You see progress continuously, not at the end\n• No months of silence—active collaboration throughout\n\nWhat's your ideal timeline? Are you working with a specific deadline or event?",
      fr: "Excellente question sur les délais. Voici la répartition réaliste:\n\n⚡ **Site Web de base** (5-10 pages)\n• 2-4 semaines du début au lancement\n• Parfait pour: Entreprises de services, portfolios, entreprises locales\n\n🚀 **Plateforme standard** (Fonctionnalités personnalisées, intégrations)\n• 4-8 semaines de la découverte au déploiement\n• Parfait pour: E-commerce, systèmes de réservation, portails membres\n\n🏗️ **Solution complexe** (Fonctionnalités avancées, intégrations multiples)\n• 8-12+ semaines pour la construction et les tests complets\n• Parfait pour: Plateformes SaaS, places de marché, outils d'entreprise\n\nCe que nous livrons plus rapidement que la plupart:\n• Nous travaillons en sprints avec des points hebdomadaires\n• Vous voyez les progrès en continu, pas à la fin\n• Pas de mois de silence—collaboration active tout au long\n\nQuel est votre délai idéal? Travaillez-vous avec une date limite ou un événement spécifique?",
      es: "Excelente pregunta sobre los plazos. Aquí está el desglose realista:\n\n⚡ **Sitio web básico** (5-10 páginas)\n• 2-4 semanas desde el inicio hasta el lanzamiento\n• Perfecto para: Empresas de servicios, portafolios, negocios locales\n\n🚀 **Plataforma estándar** (Características personalizadas, integraciones)\n• 4-8 semanas desde el descubrimiento hasta el despliegue\n• Perfecto para: E-commerce, sistemas de reservas, portales de miembros\n\n🏗️ **Solución compleja** (Características avanzadas, múltiples integraciones)\n• 8-12+ semanas para construcción y pruebas completas\n• Perfecto para: Plataformas SaaS, mercados, herramientas empresariales\n\nLo que entregamos más rápido que la mayoría:\n• Trabajamos en sprints con reuniones semanales\n• Ve el progreso continuamente, no al final\n• Sin meses de silencio—colaboración activa en todo momento\n\n¿Cuál es su plazo ideal? ¿Está trabajando con una fecha límite o evento específico?",
    };

    return responses[language];
  };

  const getBookingResponse = (): string => {
    const responses = {
      en: "I'd love to set up a consultation! Our discovery calls are where the magic happens—we dive deep into your business, goals, and challenges to create a custom roadmap.\n\n**What to expect in our 30-45 min call:**\n✅ Deep dive into your business and target audience\n✅ Review of your current digital presence (if any)\n✅ Discussion of must-have features and nice-to-haves\n✅ Timeline and budget alignment\n✅ Initial recommendations and next steps\n\nLet me pull up our calendar for available times. Would you prefer to schedule now, or would you like me to send you a booking link?",
      fr: "J'aimerais organiser une consultation! Nos appels de découverte sont là où la magie opère—nous plongeons profondément dans votre entreprise, vos objectifs et vos défis pour créer une feuille de route personnalisée.\n\n**À quoi s'attendre lors de notre appel de 30-45 min:**\n✅ Plongée profonde dans votre entreprise et votre public cible\n✅ Examen de votre présence numérique actuelle (le cas échéant)\n✅ Discussion des fonctionnalités indispensables et souhaitables\n✅ Alignement du calendrier et du budget\n✅ Recommandations initiales et prochaines étapes\n\nPermettez-moi de consulter notre calendrier pour les heures disponibles. Préférez-vous planifier maintenant, ou souhaitez-vous que je vous envoie un lien de réservation?",
      es: "¡Me encantaría programar una consulta! Nuestras llamadas de descubrimiento son donde ocurre la magia—profundizamos en su negocio, objetivos y desafíos para crear una hoja de ruta personalizada.\n\n**Qué esperar en nuestra llamada de 30-45 min:**\n✅ Inmersión profunda en su negocio y audiencia objetivo\n✅ Revisión de su presencia digital actual (si existe)\n✅ Discusión de características imprescindibles y deseables\n✅ Alineación de cronograma y presupuesto\n✅ Recomendaciones iniciales y próximos pasos\n\nPermítame consultar nuestro calendario para horarios disponibles. ¿Prefiere programar ahora, o le gustaría que le enviara un enlace de reserva?",
    };

    setTimeout(() => setShowBooking(true), 1000);
    return responses[language];
  };

  const getProcessResponse = (tone: string): string => {
    const responses = {
      en: "Our process is designed for clarity, collaboration, and results. Here's how we work:\n\n**Phase 1: Discovery & Strategy** (Week 1)\n• Deep dive into your business, audience, and goals\n• Competitive analysis and market positioning\n• Feature prioritization and technical planning\n• Deliverable: Detailed project roadmap and timeline\n\n**Phase 2: Design** (Week 1-2)\n• Custom visual design aligned with your brand\n• User experience (UX) optimization\n• Mobile-first responsive layouts\n• Deliverable: Interactive design mockups for approval\n\n**Phase 3: Development** (Week 2-4)\n• Full-stack development with modern technologies\n• Content integration and multilingual setup\n• Third-party integrations (payments, booking, etc.)\n• Deliverable: Functional staging site for testing\n\n**Phase 4: Testing & Launch** (Week 4)\n• Cross-browser and device testing\n• Performance optimization and SEO setup\n• Client training and documentation\n• Deliverable: Live website with analytics\n\n**Phase 5: Growth & Support** (Ongoing)\n• Performance monitoring and optimization\n• Content updates and feature additions\n• Security updates and maintenance\n• Deliverable: Continuous improvement\n\nWhat phase interests you most, or do you have questions about any step?",
      fr: "Notre processus est conçu pour la clarté, la collaboration et les résultats. Voici comment nous travaillons:\n\n**Phase 1: Découverte & Stratégie** (Semaine 1)\n• Plongée profonde dans votre entreprise, public et objectifs\n• Analyse concurrentielle et positionnement sur le marché\n• Priorisation des fonctionnalités et planification technique\n• Livrable: Feuille de route de projet détaillée et calendrier\n\n**Phase 2: Conception** (Semaine 1-2)\n• Conception visuelle personnalisée alignée avec votre marque\n• Optimisation de l'expérience utilisateur (UX)\n• Mises en page réactives mobile-first\n• Livrable: Maquettes de conception interactives pour approbation\n\n**Phase 3: Développement** (Semaine 2-4)\n• Développement full-stack avec technologies modernes\n• Intégration de contenu et configuration multilingue\n• Intégrations tierces (paiements, réservation, etc.)\n• Livrable: Site de staging fonctionnel pour tests\n\n**Phase 4: Tests & Lancement** (Semaine 4)\n• Tests multi-navigateurs et multi-appareils\n• Optimisation des performances et configuration SEO\n• Formation client et documentation\n• Livrable: Site Web en ligne avec analyse\n\n**Phase 5: Croissance & Support** (Continu)\n• Surveillance et optimisation des performances\n• Mises à jour de contenu et ajouts de fonctionnalités\n• Mises à jour de sécurité et maintenance\n• Livrable: Amélioration continue\n\nQuelle phase vous intéresse le plus, ou avez-vous des questions sur une étape?",
      es: "Nuestro proceso está diseñado para claridad, colaboración y resultados. Así es como trabajamos:\n\n**Fase 1: Descubrimiento y Estrategia** (Semana 1)\n• Inmersión profunda en su negocio, audiencia y objetivos\n• Análisis competitivo y posicionamiento de mercado\n• Priorización de características y planificación técnica\n• Entregable: Hoja de ruta de proyecto detallada y cronograma\n\n**Fase 2: Diseño** (Semana 1-2)\n• Diseño visual personalizado alineado con su marca\n• Optimización de experiencia de usuario (UX)\n• Diseños responsivos mobile-first\n• Entregable: Maquetas de diseño interactivas para aprobación\n\n**Fase 3: Desarrollo** (Semana 2-4)\n• Desarrollo full-stack con tecnologías modernas\n• Integración de contenido y configuración multilingüe\n• Integraciones de terceros (pagos, reservas, etc.)\n• Entregable: Sitio de prueba funcional\n\n**Fase 4: Pruebas y Lanzamiento** (Semana 4)\n• Pruebas en navegadores y dispositivos\n• Optimización de rendimiento y configuración SEO\n• Capacitación del cliente y documentación\n• Entregable: Sitio web en vivo con análisis\n\n**Fase 5: Crecimiento y Soporte** (Continuo)\n• Monitoreo y optimización de rendimiento\n• Actualizaciones de contenido y adiciones\n• Actualizaciones de seguridad y mantenimiento\n• Entregable: Mejora continua\n\n¿Qué fase le interesa más, o tiene preguntas sobre algún paso?",
    };

    return responses[language];
  };

  const getAboutResponse = (tone: string): string => {
    const responses = {
      en: "We're LifyX, a modern web development studio. We were founded on the belief that small businesses deserve enterprise-grade digital tools without the enterprise price tag.\n\nOur team consists of full-stack developers, UI/UX designers, and growth strategists who are passionate about building things that work.\n\nWe don't just build websites; we build growth engines. We're based remotely but serve clients globally, with a focus on Canada, US, and Europe.",
      fr: "Nous sommes LifyX, un studio de développement web moderne. Nous avons été fondés sur la conviction que les petites entreprises méritent des outils numériques de niveau entreprise sans le prix de l'entreprise.\n\nNotre équipe se compose de développeurs full-stack, de designers UI/UX et de stratèges de croissance passionnés par la construction de choses qui fonctionnent.\n\nNous ne construisons pas seulement des sites web; nous construisons des moteurs de croissance. Nous sommes basés à distance mais servons des clients dans le monde entier, avec un accent sur le Canada, les États-Unis et l'Europe.",
      es: "Somos LifyX, un estudio de desarrollo web moderno. Fuimos fundados en la creencia de que las pequeñas empresas merecen herramientas digitales de nivel empresarial sin el precio empresarial.\n\nNuestro equipo consta de desarrolladores full-stack, diseñadores UI/UX y estrategas de crecimiento apasionados por construir cosas que funcionan.\n\nNo solo construimos sitios web; construimos motores de crecimiento. Estamos basados de forma remota pero servimos a clientes globalmente, con un enfoque en Canadá, EE. UU. y Europa.",
    };

    return responses[language];
  };

  const getPortfolioResponse = (tone: string): string => {
    const responses = {
      en: "I'd be happy to share some of our work. We've helped businesses across various industries transform their online presence.\n\nSome recent highlights:\n\n🏙️ **Real Estate Firm:** Increased leads by 40% with a custom property showcase platform\n🛒 **Boutique E-commerce:** Launched a multilingual store that generated $50k in first month sales\n🍽️ **Restaurant Chain:** Implemented a direct booking system saving them $2k/month in 3rd party fees\n\nYou can view our full portfolio on our website. Would you like me to send you a link to specific case studies relevant to your industry?",
      fr: "Je serais heureux de partager une partie de notre travail. Nous avons aidé des entreprises de diverses industries à transformer leur présence en ligne.\n\nQuelques faits saillants récents:\n\n🏙️ **Société Immobilière:** Augmentation des prospects de 40% avec une plateforme de vitrine immobilière personnalisée\n🛒 **E-commerce Boutique:** Lancement d'une boutique multilingue qui a généré 50k $ de ventes le premier mois\n🍽️ **Chaîne de Restaurants:** Mise en œuvre d'un système de réservation directe leur économisant 2k $/mois en frais tiers\n\nVous pouvez consulter notre portfolio complet sur notre site web. Voulez-vous que je vous envoie un lien vers des études de cas spécifiques pertinentes pour votre industrie?",
      es: "Estaría encantado de compartir parte de nuestro trabajo. Hemos ayudado a empresas de diversas industrias a transformar su presencia en línea.\n\nAlgunos destacados recientes:\n\n🏙️ **Firma Inmobiliaria:** Aumento de clientes potenciales en un 40% con una plataforma de exhibición de propiedades personalizada\n🛒 **E-commerce Boutique:** Lanzamiento de una tienda multilingüe que generó $50k en ventas el primer mes\n🍽️ **Cadena de Restaurantes:** Implementación de un sistema de reserva directa ahorrándoles $2k/mes en tarifas de terceros\n\nPuede ver nuestro portafolio completo en nuestro sitio web. ¿Le gustaría que le enviara un enlace a estudios de casos específicos relevantes para su industria?",
    };

    return responses[language];
  };

  const getContextualResponse = (intents: string[]): string => {
    // Fallback for when we're not sure
    return "I'm processing that... To make sure I give you the best information, could you clarify if you're looking to start a new project or improve an existing one?";
  };

  const addBotMessage = (text: string, type: 'text' | 'lead-capture' | 'booking' | 'action' | 'urgent' = 'text', metadata: any = {}) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date(),
      type,
      metadata,
    };
    setMessages(prev => [...prev, message]);
  };

  const addUserMessage = (text: string) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, message]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);
    const intents = detectIntent(inputValue);
    updateContext(inputValue, intents);
    
    setInputValue('');
    setIsTyping(true);

    // Simulate thinking time based on complexity
    const thinkingTime = 1000 + Math.random() * 1000;

    setTimeout(() => {
      const response = generateIntelligentResponse(inputValue, intents);
      addBotMessage(response);
      setIsTyping(false);
    }, thinkingTime);
  };

  const handleBookingSelect = (slot: string) => {
    addUserMessage(`I'd like to book: ${slot}`);
    setIsTyping(true);
    setTimeout(() => {
      addBotMessage(`Excellent! I've reserved ${slot} for you. I'll send a calendar invitation to your email shortly. Is there anything specific you'd like us to prepare for the call?`);
      setIsTyping(false);
      setShowBooking(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-primary"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.button
              onClick={() => setIsOpen(true)}
              className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl shadow-primary/50"
              whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(99, 196, 85, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              aria-label="Open AI Assistant"
            >
              <motion.div
                className="absolute -right-1 -top-1"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-4 w-4 text-yellow-300" />
              </motion.div>
              <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 p-4 sm:p-0"
          >
            <div className="relative flex h-full sm:h-[600px] w-full sm:w-[90vw] sm:max-w-[450px] flex-col rounded-lg border border-primary/30 bg-background shadow-2xl">
              {/* Header */}
              <div className="relative flex items-center justify-between rounded-t-lg bg-primary px-4 py-3 text-primary-foreground">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="h-5 w-5 text-yellow-300" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold">LifyX AI</h3>
                    <p className="text-xs text-primary-foreground/80">Growth Consultant</p>
                  </div>
                </div>
                
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 transition-all hover:bg-white/20"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] break-words rounded-lg px-4 py-2 ${
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground border border-primary/10'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                      </div>
                    </motion.div>
                  </div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-muted rounded-lg px-4 py-3">
                      <div className="flex gap-1">
                        <motion.div
                          className="h-2 w-2 rounded-full bg-primary"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="h-2 w-2 rounded-full bg-primary"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="h-2 w-2 rounded-full bg-primary"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Lead Capture Form */}
                {showLeadForm && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <Card className="p-4 border-primary/20 bg-primary/5">
                      <form onSubmit={(e) => { e.preventDefault(); setShowLeadForm(false); addBotMessage("Thanks! I've noted your details. How else can I help?"); }} className="space-y-3">
                        <h4 className="font-semibold text-sm flex items-center gap-2">
                          <User className="h-4 w-4 text-primary" />
                          Let's personalize your experience
                        </h4>
                        
                        <div className="space-y-2">
                          <Label htmlFor="lead-name" className="text-xs">Your Name</Label>
                          <Input
                            id="lead-name"
                            required
                            placeholder="John Doe"
                            value={leadData.name || ''}
                            onChange={(e) => setLeadData(prev => ({ ...prev, name: e.target.value }))}
                            className="text-sm"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="lead-email" className="text-xs">Email</Label>
                          <Input
                            id="lead-email"
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={leadData.email || ''}
                            onChange={(e) => setLeadData(prev => ({ ...prev, email: e.target.value }))}
                            className="text-sm"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="lead-business" className="text-xs">Business Name</Label>
                          <Input
                            id="lead-business"
                            required
                            placeholder="My Company"
                            value={leadData.businessName || ''}
                            onChange={(e) => setLeadData(prev => ({ ...prev, businessName: e.target.value }))}
                            className="text-sm"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="lead-type" className="text-xs">Business Type</Label>
                          <Input
                            id="lead-type"
                            required
                            placeholder="e.g., Restaurant, Consulting, E-commerce"
                            value={leadData.businessType || ''}
                            onChange={(e) => setLeadData(prev => ({ ...prev, businessType: e.target.value }))}
                            className="text-sm"
                          />
                        </div>

                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-sm text-primary-foreground">
                          Continue Conversation
                        </Button>>
                      </form>
                    </Card>
                  </motion.div>
                )}

                {/* Booking Calendar */}
                {showBooking && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <Card className="p-4 border-primary/20 bg-primary/5">
                      <h4 className="font-semibold text-sm flex items-center gap-2 mb-3">
                        <Calendar className="h-4 w-4 text-primary" />
                        Select a time for your discovery call
                      </h4>
                      
                      <div className="space-y-2">
                        {['Tomorrow 10:00 AM', 'Tomorrow 2:00 PM', 'Thursday 11:00 AM', 'Thursday 3:00 PM', 'Friday 9:00 AM'].map((slot) => (
                          <button
                            key={slot}
                            onClick={() => handleBookingSelect(slot)}
                            className="w-full text-left px-3 py-2 rounded-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all text-sm flex items-center justify-between group"
                          >
                            <span className="flex items-center gap-2">
                              <Clock className="h-3 w-3 text-primary" />
                              {slot}
                            </span>
                            <ExternalLink className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => setShowBooking(false)}
                        className="mt-3 w-full text-xs text-muted-foreground hover:text-foreground"
                      >
                        I'll schedule later
                      </button>
                    </Card>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-primary/20 p-4">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything..."
                    className="border-primary/20 focus:border-primary/50"
                  />
                  
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
