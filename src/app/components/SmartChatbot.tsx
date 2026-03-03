import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Calendar, Mail, Phone, Clock, AlertCircle, CheckCircle2, ArrowRight, Zap, TrendingUp, ExternalLink } from 'lucide-react';
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
  showActions?: boolean;
  actions?: Action[];
}

interface Action {
  label: string;
  value: string;
  icon?: any;
}

type ConversationState = 
  | 'greeting'
  | 'new-website'
  | 'new-website-type'
  | 'new-website-timeline'
  | 'new-website-features'
  | 'existing-website'
  | 'existing-website-issue'
  | 'existing-website-recommendation'
  | 'booking'
  | 'booking-date'
  | 'booking-time'
  | 'booking-details'
  | 'contact-info'
  | 'pricing'
  | 'pricing-custom'
  | 'urgent-support'
  | 'general-question'
  | 'clarification';

interface ConversationContext {
  state: ConversationState;
  previousState?: ConversationState;
  userName?: string;
  userEmail?: string;
  businessType?: string;
  websiteType?: string;
  timeline?: string;
  features?: string[];
  existingIssue?: string;
  selectedDate?: string;
  selectedTime?: string;
  previousMessages: string[];
  usedResponses: Set<string>;
  isUrgent: boolean;
  hasDeliveredValue: boolean;
}

export function SmartChatbot() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [context, setContext] = useState<ConversationContext>({
    state: 'greeting',
    previousMessages: [],
    usedResponses: new Set(),
    isUrgent: false,
    hasDeliveredValue: false,
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      sendGreeting();
    }
  }, [isOpen, language]);

  const addMessage = (text: string, sender: 'user' | 'bot', actions?: Action[]) => {
    const message: Message = {
      id: Date.now().toString() + Math.random(),
      text,
      sender,
      timestamp: new Date(),
      showActions: !!actions && actions.length > 0,
      actions,
    };
    setMessages(prev => [...prev, message]);
  };

  const getVariedResponse = (responses: string[]): string => {
    const available = responses.filter(r => !context.usedResponses.has(r));
    const selected = available.length > 0 
      ? available[Math.floor(Math.random() * available.length)]
      : responses[Math.floor(Math.random() * responses.length)];
    
    setContext(prev => ({
      ...prev,
      usedResponses: new Set([...prev.usedResponses, selected]),
    }));
    
    return selected;
  };

  const sendGreeting = () => {
    const hour = new Date().getHours();
    const timeOfDay = hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening';

    const greetings = {
      en: {
        morning: [
          "Good morning! I'm your digital growth consultant at LifyX. I help businesses like yours build exceptional online presences.",
          "Morning! Welcome to LifyX. I specialize in helping small businesses grow through smart web solutions.",
          "Good morning! Thanks for stopping by LifyX. I'm here to help you explore digital growth opportunities.",
        ],
        afternoon: [
          "Good afternoon! Welcome to LifyX. I help businesses create powerful digital presences that drive real results.",
          "Afternoon! I'm your LifyX consultant. Let's explore how we can elevate your business online.",
          "Good afternoon! I specialize in digital growth strategies for small businesses. How can I help today?",
        ],
        evening: [
          "Good evening! Thanks for reaching out to LifyX. I'm here to help you grow your business online.",
          "Evening! Welcome to LifyX. I help businesses build websites that actually convert visitors into customers.",
          "Good evening! I'm your digital growth consultant at LifyX. Let's discuss your online presence.",
        ],
      },
      fr: {
        morning: [
          "Bonjour! Je suis votre consultant en croissance numérique chez LifyX. J'aide les entreprises comme la vôtre à créer des présences en ligne exceptionnelles.",
          "Bonjour! Bienvenue chez LifyX. Je me spécialise dans l'aide aux petites entreprises pour croître grâce à des solutions web intelligentes.",
        ],
        afternoon: [
          "Bon après-midi! Bienvenue chez LifyX. J'aide les entreprises à créer des présences numériques puissantes qui produisent de vrais résultats.",
          "Après-midi! Je suis votre consultant LifyX. Explorons comment nous pouvons élever votre entreprise en ligne.",
        ],
        evening: [
          "Bonsoir! Merci de contacter LifyX. Je suis là pour vous aider à développer votre entreprise en ligne.",
          "Bonsoir! Bienvenue chez LifyX. J'aide les entreprises à créer des sites web qui convertissent réellement les visiteurs en clients.",
        ],
      },
      es: {
        morning: [
          "¡Buenos días! Soy su consultor de crecimiento digital en LifyX. Ayudo a empresas como la suya a crear presencias en línea excepcionales.",
          "¡Buenos días! Bienvenido a LifyX. Me especializo en ayudar a pequeñas empresas a crecer a través de soluciones web inteligentes.",
        ],
        afternoon: [
          "¡Buenas tardes! Bienvenido a LifyX. Ayudo a las empresas a crear presencias digitales poderosas que generan resultados reales.",
          "¡Buenas tardes! Soy su consultor de LifyX. Exploremos cómo podemos elevar su negocio en línea.",
        ],
        evening: [
          "¡Buenas noches! Gracias por contactar a LifyX. Estoy aquí para ayudarlo a hacer crecer su negocio en línea.",
          "¡Buenas noches! Bienvenido a LifyX. Ayudo a las empresas a crear sitios web que realmente convierten visitantes en clientes.",
        ],
      },
    };

    const greeting = getVariedResponse(greetings[language][timeOfDay]);
    
    const actions: Action[] = [
      { label: language === 'en' ? '🚀 Build a New Website' : language === 'fr' ? '🚀 Créer un Nouveau Site' : '🚀 Crear un Nuevo Sitio', value: 'new-website', icon: Zap },
      { label: language === 'en' ? '⚡ Improve My Site' : language === 'fr' ? '⚡ Améliorer Mon Site' : '⚡ Mejorar Mi Sitio', value: 'existing-website', icon: TrendingUp },
      { label: language === 'en' ? '💰 See Pricing' : language === 'fr' ? '💰 Voir les Prix' : '💰 Ver Precios', value: 'pricing', icon: ArrowRight },
      { label: language === 'en' ? '📅 Book a Call' : language === 'fr' ? '📅 Réserver un Appel' : '📅 Reservar una Llamada', value: 'booking', icon: Calendar },
      { label: language === 'en' ? '📞 Contact Info' : language === 'fr' ? '📞 Info Contact' : '📞 Info de Contacto', value: 'contact', icon: Mail },
    ];

    addMessage(greeting, 'bot', actions);
  };

  const detectIntent = (message: string): ConversationState => {
    const lower = message.toLowerCase().trim();

    // Urgent support detection
    if (['down', 'broken', 'emergency', 'urgent', 'help', 'asap', 'not working', 'error'].some(word => lower.includes(word))) {
      setContext(prev => ({ ...prev, isUrgent: true }));
      return 'urgent-support';
    }

    // Short acknowledgments
    if (['ok', 'okay', 'yes', 'yeah', 'sure', 'yep', 'oui', 'si', 'sí'].includes(lower)) {
      return context.state; // Stay in current state
    }

    // Greeting detection
    if (['hi', 'hello', 'hey', 'bonjour', 'hola', 'salut'].some(word => lower.includes(word)) && lower.length < 20) {
      return 'greeting';
    }

    // New website
    if (['new', 'build', 'create', 'start', 'need a website', 'nouveau', 'créer', 'nuevo', 'crear'].some(word => lower.includes(word))) {
      return 'new-website';
    }

    // Existing website
    if (['improve', 'existing', 'current', 'have a', 'my site', 'améliorer', 'actuel', 'mejorar', 'actual'].some(word => lower.includes(word))) {
      return 'existing-website';
    }

    // Booking
    if (['call', 'meet', 'schedule', 'book', 'appointment', 'talk', 'speak', 'appel', 'réserver', 'llamada', 'cita'].some(word => lower.includes(word))) {
      return 'booking';
    }

    // Contact
    if (['contact', 'email', 'phone', 'reach', 'contacter', 'contactar'].some(word => lower.includes(word))) {
      return 'contact-info';
    }

    // Pricing
    if (['price', 'cost', 'budget', 'how much', 'prix', 'coût', 'precio', 'costo', 'cuánto'].some(word => lower.includes(word))) {
      return 'pricing';
    }

    return 'clarification';
  };

  const handleUserInput = (userMessage: string) => {
    if (!userMessage.trim()) return;

    addMessage(userMessage, 'user');
    
    setContext(prev => ({
      ...prev,
      previousMessages: [...prev.previousMessages, userMessage].slice(-5),
    }));

    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      processUserMessage(userMessage);
      setIsTyping(false);
    }, 600 + Math.random() * 800);
  };

  const processUserMessage = (userMessage: string) => {
    const newState = detectIntent(userMessage);
    
    setContext(prev => ({
      ...prev,
      previousState: prev.state,
      state: newState,
    }));

    handleState(newState, userMessage);
  };

  const handleActionClick = (actionValue: string) => {
    addMessage(actionValue, 'user');
    
    setContext(prev => ({
      ...prev,
      previousMessages: [...prev.previousMessages, actionValue].slice(-5),
    }));

    setIsTyping(true);

    setTimeout(() => {
      const newState = actionValue as ConversationState;
      setContext(prev => ({
        ...prev,
        previousState: prev.state,
        state: newState,
      }));
      handleState(newState, actionValue);
      setIsTyping(false);
    }, 600 + Math.random() * 800);
  };

  const handleState = (state: ConversationState, userMessage: string) => {
    switch (state) {
      case 'greeting':
        sendGreeting();
        break;
      
      case 'new-website':
        handleNewWebsite();
        break;
      
      case 'new-website-type':
        handleNewWebsiteType(userMessage);
        break;
      
      case 'new-website-timeline':
        handleNewWebsiteTimeline(userMessage);
        break;
      
      case 'existing-website':
        handleExistingWebsite();
        break;
      
      case 'existing-website-issue':
        handleExistingWebsiteIssue(userMessage);
        break;
      
      case 'booking':
        handleBooking();
        break;
      
      case 'booking-date':
        handleBookingDate(userMessage);
        break;
      
      case 'booking-time':
        handleBookingTime(userMessage);
        break;
      
      case 'contact-info':
        handleContactInfo();
        break;
      
      case 'pricing':
        handlePricing();
        break;
      
      case 'urgent-support':
        handleUrgentSupport();
        break;
      
      case 'clarification':
        handleClarification(userMessage);
        break;
      
      default:
        handleClarification(userMessage);
    }
  };

  const handleNewWebsite = () => {
    const responses = {
      en: [
        "Excellent! Building from scratch gives us the perfect opportunity to create something truly strategic for your business. \n\nWhat type of business are you in? (e.g., restaurant, consulting, e-commerce, professional services)",
        "Perfect! I love working on new projects. When we start fresh, we can design everything around your specific goals.\n\nTell me about your business — what industry are you in?",
        "Great choice! A well-built website can be a game-changer. \n\nLet's start with the basics: What kind of business are you running?",
      ],
      fr: [
        "Excellent! Construire à partir de zéro nous donne l'opportunité parfaite de créer quelque chose de vraiment stratégique pour votre entreprise.\n\nQuel type d'entreprise avez-vous? (ex: restaurant, conseil, e-commerce, services professionnels)",
        "Parfait! J'adore travailler sur de nouveaux projets. Quand nous partons de zéro, nous pouvons tout concevoir autour de vos objectifs spécifiques.\n\nParlez-moi de votre entreprise — dans quelle industrie êtes-vous?",
      ],
      es: [
        "¡Excelente! Construir desde cero nos da la oportunidad perfecta de crear algo verdaderamente estratégico para su negocio.\n\n¿Qué tipo de negocio tiene? (ej: restaurante, consultoría, e-commerce, servicios profesionales)",
        "¡Perfecto! Me encanta trabajar en proyectos nuevos. Cuando empezamos desde cero, podemos diseñar todo alrededor de sus objetivos específicos.\n\nCuénteme sobre su negocio — ¿en qué industria está?",
      ],
    };

    const response = getVariedResponse(responses[language]);
    addMessage(response, 'bot');
    
    setContext(prev => ({
      ...prev,
      state: 'new-website-type',
      hasDeliveredValue: true,
    }));
  };

  const handleNewWebsiteType = (businessType: string) => {
    setContext(prev => ({ ...prev, businessType }));

    const responses = {
      en: [
        `Got it — ${businessType}. That's a space where a strong online presence can really make a difference.\n\nWhat's your timeline? Are you looking to launch:\n• Within 2-4 weeks (fast-track)\n• 1-2 months (standard)\n• 2-3 months (comprehensive build)\n• Flexible / exploring options`,
        `Perfect, ${businessType}. I've worked with similar businesses and know what works in this space.\n\nHow soon are you looking to go live? What's your ideal timeline?`,
        `Nice! ${businessType} businesses really benefit from a strategic web presence.\n\nWhen would you ideally want to launch? What's driving your timeline?`,
      ],
      fr: [
        `Compris — ${businessType}. C'est un espace où une forte présence en ligne peut vraiment faire la différence.\n\nQuel est votre calendrier? Cherchez-vous à lancer:\n• Dans 2-4 semaines (voie rapide)\n• 1-2 mois (standard)\n• 2-3 mois (construction complète)\n• Flexible / exploration d'options`,
        `Parfait, ${businessType}. J'ai travaillé avec des entreprises similaires et je sais ce qui fonctionne dans cet espace.\n\nDans combien de temps cherchez-vous à être en ligne? Quel est votre calendrier idéal?`,
      ],
      es: [
        `Entendido — ${businessType}. Es un espacio donde una fuerte presencia en línea puede marcar una gran diferencia.\n\n¿Cuál es su cronograma? ¿Busca lanzar:\n• En 2-4 semanas (vía rápida)\n• 1-2 meses (estándar)\n• 2-3 meses (construcción completa)\n• Flexible / explorando opciones`,
        `Perfecto, ${businessType}. He trabajado con negocios similares y sé qué funciona en este espacio.\n\n¿Qué tan pronto busca estar en línea? ¿Cuál es su cronograma ideal?`,
      ],
    };

    const response = getVariedResponse(responses[language]);
    addMessage(response, 'bot');
    
    setContext(prev => ({ ...prev, state: 'new-website-timeline' }));
  };

  const handleNewWebsiteTimeline = (timeline: string) => {
    setContext(prev => ({ ...prev, timeline }));

    const responses = {
      en: [
        `Perfect. Based on what you've shared:\n• Business: ${context.businessType}\n• Timeline: ${timeline}\n\nI'd recommend we start with a discovery call to map out exactly what you need. This is a free 30-minute strategy session where we'll:\n✅ Define your goals and target audience\n✅ Outline must-have features\n✅ Discuss design direction\n✅ Create a custom timeline and quote\n\nWould you like to schedule that now?`,
        `Great! Here's what I'm thinking based on your ${timeline} timeline:\n\nFor a ${context.businessType} business, we'd build:\n• Custom responsive design\n• Strategic content structure\n• Contact/booking system\n• SEO foundation\n• Performance optimization\n\nOur starting price is $2,000, with most projects in the $2-8K range depending on complexity.\n\nWant to schedule a discovery call to get a detailed proposal?`,
      ],
      fr: [
        `Parfait. Basé sur ce que vous avez partagé:\n• Entreprise: ${context.businessType}\n• Calendrier: ${timeline}\n\nJe recommanderais de commencer par un appel de découverte pour définir exactement ce dont vous avez besoin. C'est une session de stratégie gratuite de 30 minutes où nous allons:\n✅ Définir vos objectifs et votre public cible\n✅ Décrire les fonctionnalités essentielles\n✅ Discuter de la direction du design\n✅ Créer un calendrier et un devis personnalisés\n\nVoulez-vous planifier cela maintenant?`,
      ],
      es: [
        `Perfecto. Basado en lo que ha compartido:\n• Negocio: ${context.businessType}\n• Cronograma: ${timeline}\n\nRecomendaría que comencemos con una llamada de descubrimiento para mapear exactamente lo que necesita. Esta es una sesión de estrategia gratuita de 30 minutos donde:\n✅ Definiremos sus objetivos y audiencia objetivo\n✅ Delinearemos las características imprescindibles\n✅ Discutiremos la dirección del diseño\n✅ Crearemos un cronograma y cotización personalizados\n\n¿Le gustaría programar eso ahora?`,
      ],
    };

    const response = getVariedResponse(responses[language]);
    
    const actions: Action[] = [
      { label: language === 'en' ? '📅 Yes, Book Discovery Call' : language === 'fr' ? '📅 Oui, Réserver Appel' : '📅 Sí, Reservar Llamada', value: 'booking' },
      { label: language === 'en' ? '💰 Tell Me More About Pricing' : language === 'fr' ? '💰 En Savoir Plus sur les Prix' : '💰 Más Sobre Precios', value: 'pricing' },
      { label: language === 'en' ? '📞 Send Me Contact Info' : language === 'fr' ? '📞 Envoyer Info Contact' : '📞 Enviar Info de Contacto', value: 'contact' },
    ];

    addMessage(response, 'bot', actions);
  };

  const handleExistingWebsite = () => {
    const responses = {
      en: [
        "Smart move! Many businesses have websites that aren't working as hard as they should be.\n\nWhat's the main challenge you're facing? Is it:\n• Not getting enough traffic?\n• Traffic but no conversions?\n• Outdated design?\n• Slow performance?\n• Hard to update content?\n• Something else?",
        "Great! Improving an existing site can often deliver faster ROI than building new.\n\nWhat's not working for you right now? Tell me the biggest pain point.",
        "Perfect. Let's diagnose what's holding your site back.\n\nWhat specific issue are you trying to solve? (e.g., low traffic, poor design, technical problems, not converting)",
      ],
      fr: [
        "Décision intelligente! Beaucoup d'entreprises ont des sites web qui ne travaillent pas aussi dur qu'ils le devraient.\n\nQuel est le principal défi auquel vous êtes confronté? Est-ce:\n• Pas assez de trafic?\n• Du trafic mais pas de conversions?\n• Design dépassé?\n• Performance lente?\n• Difficile de mettre à jour le contenu?\n• Autre chose?",
        "Génial! Améliorer un site existant peut souvent offrir un ROI plus rapide que de construire du nouveau.\n\nQu'est-ce qui ne fonctionne pas pour vous en ce moment? Dites-moi le plus gros problème.",
      ],
      es: [
        "¡Decisión inteligente! Muchas empresas tienen sitios web que no están trabajando tan duro como deberían.\n\n¿Cuál es el principal desafío que enfrenta? ¿Es:\n• ¿No obtener suficiente tráfico?\n• ¿Tráfico pero sin conversiones?\n• ¿Diseño desactualizado?\n• ¿Rendimiento lento?\n• ¿Difícil actualizar contenido?\n• ¿Algo más?",
        "¡Genial! Mejorar un sitio existente a menudo puede ofrecer un ROI más rápido que construir uno nuevo.\n\n¿Qué no está funcionando para usted ahora? Cuénteme el mayor problema.",
      ],
    };

    const response = getVariedResponse(responses[language]);
    addMessage(response, 'bot');
    
    setContext(prev => ({
      ...prev,
      state: 'existing-website-issue',
      hasDeliveredValue: true,
    }));
  };

  const handleExistingWebsiteIssue = (issue: string) => {
    setContext(prev => ({ ...prev, existingIssue: issue }));

    const responses = {
      en: [
        `I hear you on "${issue}" — that's a common challenge, but also very fixable.\n\nHere's what I'd suggest:\n\n**Option 1: Quick Audit**\nI can do a free 15-minute audit of your site and send you a detailed report on what's working, what's not, and specific recommendations.\n\n**Option 2: Strategy Call**\nWe can hop on a 30-minute call where I'll screen-share, walk through your site live, and map out a game plan.\n\nWhich would be more helpful for you?`,
        `"${issue}" — yeah, I see this a lot. The good news? It's solvable.\n\nI'd recommend we take a look at your site together. I offer a free audit where I'll:\n✅ Review your current setup\n✅ Identify what's causing ${issue}\n✅ Provide actionable fixes\n✅ Estimate timeline and cost\n\nWant me to run that audit, or would you prefer to jump straight to a strategy call?`,
      ],
      fr: [
        `Je comprends "${issue}" — c'est un défi commun, mais aussi très réparable.\n\nVoici ce que je suggère:\n\n**Option 1: Audit Rapide**\nJe peux faire un audit gratuit de 15 minutes de votre site et vous envoyer un rapport détaillé sur ce qui fonctionne, ce qui ne fonctionne pas et des recommandations spécifiques.\n\n**Option 2: Appel Stratégique**\nNous pouvons avoir un appel de 30 minutes où je partagerai l'écran, parcourrai votre site en direct et établirai un plan d'action.\n\nQu'est-ce qui serait le plus utile pour vous?`,
      ],
      es: [
        `Entiendo lo de "${issue}" — es un desafío común, pero también muy solucionable.\n\nEsto es lo que sugiero:\n\n**Opción 1: Auditoría Rápida**\nPuedo hacer una auditoría gratuita de 15 minutos de su sitio y enviarle un informe detallado sobre qué funciona, qué no y recomendaciones específicas.\n\n**Opción 2: Llamada Estratégica**\nPodemos tener una llamada de 30 minutos donde compartiré pantalla, revisaré su sitio en vivo y trazaré un plan de acción.\n\n¿Qué sería más útil para usted?`,
      ],
    };

    const response = getVariedResponse(responses[language]);
    
    const actions: Action[] = [
      { label: language === 'en' ? '📊 Send Me Free Audit' : language === 'fr' ? '📊 Envoyer Audit Gratuit' : '📊 Enviar Auditoría Gratis', value: 'contact' },
      { label: language === 'en' ? '📅 Book Strategy Call' : language === 'fr' ? '📅 Réserver Appel Stratégique' : '📅 Reservar Llamada', value: 'booking' },
      { label: language === 'en' ? '💰 See Pricing First' : language === 'fr' ? '💰 Voir Prix d\'Abord' : '💰 Ver Precios Primero', value: 'pricing' },
    ];

    addMessage(response, 'bot', actions);
  };

  const handleBooking = () => {
    const responses = {
      en: [
        "Perfect! Let's get you scheduled. Our discovery calls are where the magic happens — we dive deep into your business and create a custom roadmap.\n\n**What to expect (30-45 min):**\n✅ Deep dive into your business goals\n✅ Technical and design discussion\n✅ Timeline and budget alignment\n✅ Custom recommendations\n✅ Next steps and proposal\n\nSelect a date that works for you:",
        "Excellent choice! These strategy calls are super valuable — it's where we figure out exactly what you need and how to get there.\n\n**You'll walk away with:**\n• Clear understanding of scope\n• Realistic timeline\n• Accurate pricing estimate\n• Actionable next steps\n\nPick a day that works:",
      ],
      fr: [
        "Parfait! Planifions votre rendez-vous. Nos appels de découverte sont où la magie opère — nous plongeons profondément dans votre entreprise et créons une feuille de route personnalisée.\n\n**À quoi s'attendre (30-45 min):**\n✅ Plongée profonde dans vos objectifs commerciaux\n✅ Discussion technique et design\n✅ Alignement du calendrier et du budget\n✅ Recommandations personnalisées\n✅ Prochaines étapes et proposition\n\nSélectionnez une date qui vous convient:",
      ],
      es: [
        "¡Perfecto! Programemos su cita. Nuestras llamadas de descubrimiento son donde ocurre la magia — profundizamos en su negocio y creamos una hoja de ruta personalizada.\n\n**Qué esperar (30-45 min):**\n✅ Inmersión profunda en sus objetivos comerciales\n✅ Discusión técnica y de diseño\n✅ Alineación de cronograma y presupuesto\n✅ Recomendaciones personalizadas\n✅ Próximos pasos y propuesta\n\nSeleccione una fecha que le funcione:",
      ],
    };

    const response = getVariedResponse(responses[language]);
    
    const dates = [
      'Tomorrow',
      'Thursday',
      'Friday',
      'Next Monday',
      'Next Tuesday',
    ];

    const actions: Action[] = dates.map(date => ({
      label: `📅 ${date}`,
      value: `booking-date-${date}`,
    }));

    addMessage(response, 'bot', actions);
    setContext(prev => ({ ...prev, state: 'booking-date' }));
  };

  const handleBookingDate = (dateSelection: string) => {
    const date = dateSelection.replace('booking-date-', '');
    setContext(prev => ({ ...prev, selectedDate: date }));

    const responses = {
      en: [
        `Great! ${date} it is. What time works best for you?`,
        `Perfect — ${date}. Now let's find a time that fits your schedule:`,
      ],
      fr: [
        `Génial! ${date} c'est parti. Quelle heure vous convient le mieux?`,
      ],
      es: [
        `¡Genial! ${date} será. ¿Qué hora le funciona mejor?`,
      ],
    };

    const response = getVariedResponse(responses[language]);
    
    const times = ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'];
    const actions: Action[] = times.map(time => ({
      label: `🕐 ${time}`,
      value: `booking-time-${time}`,
    }));

    addMessage(response, 'bot', actions);
    setContext(prev => ({ ...prev, state: 'booking-time' }));
  };

  const handleBookingTime = (timeSelection: string) => {
    const time = timeSelection.replace('booking-time-', '');
    setContext(prev => ({ ...prev, selectedTime: time }));

    const responses = {
      en: [
        `Perfect! I've got you down for **${context.selectedDate} at ${time}**.\n\nTo confirm your booking, I just need:\n• Your full name\n• Email address\n\nYou can type them here, or if you prefer, I can send the booking link to your email and you can fill it out there.`,
        `Excellent — ${context.selectedDate} at ${time} is reserved for you!\n\nLast step: What's your name and email so I can send you the confirmation and calendar invite?`,
      ],
      fr: [
        `Parfait! Je vous ai réservé pour **${context.selectedDate} à ${time}**.\n\nPour confirmer votre réservation, j'ai juste besoin de:\n• Votre nom complet\n• Adresse e-mail\n\nVous pouvez les taper ici, ou si vous préférez, je peux envoyer le lien de réservation à votre e-mail et vous pouvez le remplir là-bas.`,
      ],
      es: [
        `¡Perfecto! Lo tengo anotado para **${context.selectedDate} a las ${time}**.\n\nPara confirmar su reserva, solo necesito:\n• Su nombre completo\n• Dirección de correo electrónico\n\nPuede escribirlos aquí, o si prefiere, puedo enviar el enlace de reserva a su correo electrónico y puede completarlo allí.`,
      ],
    };

    const response = getVariedResponse(responses[language]);
    addMessage(response, 'bot');
    setContext(prev => ({ ...prev, state: 'booking-details' }));
  };

  const handleContactInfo = () => {
    const responses = {
      en: [
        `Here's how to reach us directly:\n\n📧 **Email:** support@lifyx.ca\n📞 **Phone:** Available Mon-Fri, 9 AM - 6 PM EST\n💬 **Response Time:** We typically reply within one business day\n\nWant to skip the back-and-forth and just book a call now?`,
        `Happy to share! Here are all the ways to connect:\n\n📧 **Email:** support@lifyx.ca\n📞 **Phone:** (555) 123-4567 (9-6 EST)\n\nOr we can chat right here. What's on your mind?`,
      ],
      fr: [
        `Voici comment nous joindre directement:\n\n📧 **Email:** support@lifyx.ca\n📞 **Téléphone:** Disponible Lun-Ven, 9h - 18h EST\n💬 **Temps de Réponse:** Nous répondons généralement dans un jour ouvrable\n\nVoulez-vous éviter les allers-retours et simplement réserver un appel maintenant?`,
      ],
      es: [
        `Así es como contactarnos directamente:\n\n📧 **Email:** support@lifyx.ca\n📞 **Teléfono:** Disponible Lun-Vie, 9 AM - 6 PM EST\n💬 **Tiempo de Respuesta:** Generalmente respondemos dentro de un día hábil\n\n¿Quiere evitar el ir y venir y simplemente reservar una llamada ahora?`,
      ],
    };

    const response = getVariedResponse(responses[language]);
    
    const actions: Action[] = [
      { label: language === 'en' ? '📅 Book a Call Now' : language === 'fr' ? '📅 Réserver un Appel' : '📅 Reservar Llamada', value: 'booking' },
      { label: language === 'en' ? '💰 See Pricing' : language === 'fr' ? '💰 Voir les Prix' : '💰 Ver Precios', value: 'pricing' },
    ];

    addMessage(response, 'bot', actions);
    setContext(prev => ({ ...prev, hasDeliveredValue: true }));
  };

  const handlePricing = () => {
    const responses = {
      en: [
        `Great question! Here's our transparent pricing structure:\n\n💰 **Starting Point:** $2,000 minimum for all projects\n📊 **Typical Range:** $2,000 - $8,000+ depending on complexity\n\n**What influences price:**\n• Number of pages and custom features\n• Design complexity (custom vs. template-based)\n• Integrations (booking, payments, CRM)\n• Multilingual setup (EN/FR/ES)\n• E-commerce functionality\n• Timeline urgency\n\n**What's always included:**\n✅ Responsive design (mobile + desktop)\n✅ SEO foundation\n✅ Performance optimization\n✅ Security best practices\n✅ Post-launch support\n\nWant a custom quote for your specific project?`,
        `Let's talk investment. We believe in transparent pricing:\n\n**Our Model:**\n• Minimum project: $2,000\n• Most clients invest: $2,000 - $8,000+\n• Custom solutions: Quote based on scope\n\n**Example Pricing:**\n🌐 Basic business site (5-10 pages): $2,000 - $3,500\n🛍️ E-commerce platform: $4,000 - $8,000+\n📅 Booking/SaaS system: $5,000 - $10,000+\n\n**Why clients choose us:**\n• No hidden fees\n• Fixed-price proposals\n• Quality over templates\n• Ongoing partnership\n\nReady to get a detailed quote for what you need?`,
      ],
      fr: [
        `Excellente question! Voici notre structure de tarification transparente:\n\n💰 **Point de Départ:** 2 000 $ minimum pour tous les projets\n📊 **Fourchette Typique:** 2 000 $ - 8 000 $+ selon la complexité\n\n**Ce qui influence le prix:**\n• Nombre de pages et fonctionnalités personnalisées\n• Complexité du design (personnalisé vs. basé sur modèle)\n• Intégrations (réservation, paiements, CRM)\n• Configuration multilingue (EN/FR/ES)\n• Fonctionnalité e-commerce\n• Urgence du calendrier\n\n**Ce qui est toujours inclus:**\n✅ Design réactif (mobile + desktop)\n✅ Fondation SEO\n✅ Optimisation des performances\n✅ Meilleures pratiques de sécurité\n✅ Support post-lancement\n\nVoulez-vous un devis personnalisé pour votre projet spécifique?`,
      ],
      es: [
        `¡Excelente pregunta! Aquí está nuestra estructura de precios transparente:\n\n💰 **Punto de Partida:** $2,000 mínimo para todos los proyectos\n📊 **Rango Típico:** $2,000 - $8,000+ dependiendo de la complejidad\n\n**Lo que influye en el precio:**\n• Número de páginas y características personalizadas\n• Complejidad del diseño (personalizado vs. basado en plantilla)\n• Integraciones (reservas, pagos, CRM)\n• Configuración multilingüe (EN/FR/ES)\n• Funcionalidad de e-commerce\n• Urgencia del cronograma\n\n**Qué siempre está incluido:**\n✅ Diseño responsivo (móvil + escritorio)\n✅ Fundación SEO\n✅ Optimización de rendimiento\n✅ Mejores prácticas de seguridad\n✅ Soporte post-lanzamiento\n\n¿Quiere una cotización personalizada para su proyecto específico?`,
      ],
    };

    const response = getVariedResponse(responses[language]);
    
    const actions: Action[] = [
      { label: language === 'en' ? '📅 Get Custom Quote (Book Call)' : language === 'fr' ? '📅 Obtenir Devis (Réserver)' : '📅 Obtener Cotización (Reservar)', value: 'booking' },
      { label: language === 'en' ? '🚀 Start New Project' : language === 'fr' ? '🚀 Démarrer Projet' : '🚀 Iniciar Proyecto', value: 'new-website' },
      { label: language === 'en' ? '📞 Email Me Details' : language === 'fr' ? '📞 M\'Envoyer Détails' : '📞 Enviarme Detalles', value: 'contact' },
    ];

    addMessage(response, 'bot', actions);
    setContext(prev => ({ ...prev, hasDeliveredValue: true }));
  };

  const handleUrgentSupport = () => {
    const responses = {
      en: [
        `🚨 **I understand this is urgent.** Let me help you right away.\n\n**Immediate Actions:**\n📧 Email us NOW: support@lifyx.ca (mark as URGENT)\n📞 Call during hours: Mon-Fri, 9 AM - 6 PM EST\n\n**I've flagged this conversation as high priority.**\n\nWhat specific issue are you experiencing? (e.g., site down, security breach, broken functionality)\n\nThe more details you provide, the faster we can help.`,
        `⚡ **Urgent issue noted.** I'm escalating this immediately.\n\n**Quick Response Options:**\n1. Email: support@lifyx.ca (we monitor urgently)\n2. Describe the issue here and I'll route it to our team\n3. If critical: Call us during business hours\n\n**Tell me:** What's broken and how is it impacting your business right now?`,
      ],
      fr: [
        `🚨 **Je comprends que c'est urgent.** Laissez-moi vous aider tout de suite.\n\n**Actions Immédiates:**\n📧 Envoyez-nous un email MAINTENANT: support@lifyx.ca (marquer comme URGENT)\n📞 Appelez pendant les heures: Lun-Ven, 9h - 18h EST\n\n**J'ai marqué cette conversation comme haute priorité.**\n\nQuel problème spécifique rencontrez-vous? (ex: site en panne, faille de sécurité, fonctionnalité cassée)\n\nPlus vous fournissez de détails, plus vite nous pouvons aider.`,
      ],
      es: [
        `🚨 **Entiendo que esto es urgente.** Permítame ayudarlo de inmediato.\n\n**Acciones Inmediatas:**\n📧 Envíenos un email AHORA: support@lifyx.ca (marcar como URGENTE)\n📞 Llame durante horas: Lun-Vie, 9 AM - 6 PM EST\n\n**He marcado esta conversación como alta prioridad.**\n\n¿Qué problema específico está experimentando? (ej: sitio caído, brecha de seguridad, funcionalidad rota)\n\nCuantos más detalles proporcione, más rápido podemos ayudar.`,
      ],
    };

    const response = getVariedResponse(responses[language]);
    addMessage(response, 'bot');
    setContext(prev => ({ ...prev, hasDeliveredValue: true }));
  };

  const handleClarification = (userMessage: string) => {
    const hasContext = context.previousMessages.length > 2;

    const responses = {
      en: [
        `I want to make sure I point you in the right direction. Are you looking to:\n\n• Build a brand new website?\n• Improve an existing site?\n• Get pricing information?\n• Schedule a consultation?\n• Contact our team?\n\nJust let me know what would be most helpful!`,
        `Got it! To give you the best answer, could you tell me a bit more about what you're looking for?\n\nFor example:\n• Starting a new web project?\n• Fixing something on your current site?\n• Learning about our services and pricing?\n• Booking a call to discuss your needs?`,
        hasContext 
          ? `Based on what we've discussed so far, what would be the most valuable next step for you?\n\n• Continue exploring your project details?\n• See pricing and packages?\n• Book a strategy call?\n• Get our contact info?`
          : `Thanks for reaching out! I'm here to help. What brings you to LifyX today?\n\nI can help with:\n✅ New website projects\n✅ Improving existing sites\n✅ Pricing questions\n✅ Booking consultations\n✅ General inquiries`,
      ],
      fr: [
        `Je veux m'assurer de vous orienter dans la bonne direction. Cherchez-vous à:\n\n• Créer un tout nouveau site web?\n• Améliorer un site existant?\n• Obtenir des informations sur les prix?\n• Planifier une consultation?\n• Contacter notre équipe?\n\nDites-moi simplement ce qui serait le plus utile!`,
      ],
      es: [
        `Quiero asegurarme de señalarlo en la dirección correcta. ¿Está buscando:\n\n• ¿Construir un sitio web completamente nuevo?\n• ¿Mejorar un sitio existente?\n• ¿Obtener información de precios?\n• ¿Programar una consulta?\n• ¿Contactar a nuestro equipo?\n\n¡Solo déjeme saber qué sería más útil!`,
      ],
    };

    const response = getVariedResponse(responses[language]);
    
    const actions: Action[] = [
      { label: language === 'en' ? '🚀 New Website' : language === 'fr' ? '🚀 Nouveau Site' : '🚀 Nuevo Sitio', value: 'new-website' },
      { label: language === 'en' ? '⚡ Improve Existing' : language === 'fr' ? '⚡ Améliorer Existant' : '⚡ Mejorar Existente', value: 'existing-website' },
      { label: language === 'en' ? '💰 Pricing' : language === 'fr' ? '💰 Prix' : '💰 Precios', value: 'pricing' },
      { label: language === 'en' ? '📅 Book Call' : language === 'fr' ? '📅 Réserver' : '📅 Reservar', value: 'booking' },
    ];

    addMessage(response, 'bot', actions);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleUserInput(inputValue);
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
              className="absolute inset-0 rounded-full bg-emerald-400"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.button
              onClick={() => setIsOpen(true)}
              className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 text-white shadow-2xl shadow-emerald-400/50"
              whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(52, 211, 153, 0.8)" }}
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
            <div className="relative flex h-full sm:h-[600px] w-full sm:w-[90vw] sm:max-w-[450px] flex-col rounded-lg border border-emerald-400/30 bg-background shadow-2xl">
              {/* Header */}
              <div className="relative flex items-center justify-between rounded-t-lg bg-gradient-to-r from-emerald-500 to-emerald-400 px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="h-5 w-5 text-yellow-300" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold">LifyX Consultant</h3>
                    <p className="text-xs text-emerald-100">Digital Growth Specialist</p>
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
                            ? 'bg-gradient-to-br from-emerald-500 to-emerald-400 text-white'
                            : 'bg-muted text-foreground border border-emerald-400/10'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    {message.showActions && message.actions && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-3 flex flex-wrap gap-2"
                      >
                        {message.actions.map((action, idx) => (
                          <motion.button
                            key={idx}
                            onClick={() => handleActionClick(action.value)}
                            className="px-3 py-2 text-xs rounded-lg border border-emerald-400/30 bg-emerald-50/50 dark:bg-emerald-950/20 hover:bg-emerald-100 dark:hover:bg-emerald-950/40 hover:border-emerald-400/60 transition-all text-left"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {action.label}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
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
                          className="h-2 w-2 rounded-full bg-emerald-400"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="h-2 w-2 rounded-full bg-emerald-400"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="h-2 w-2 rounded-full bg-emerald-400"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-emerald-400/20 p-4">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="border-emerald-400/20 focus:border-emerald-400/50"
                  />
                  
                  <Button
                    onClick={() => handleUserInput(inputValue)}
                    size="icon"
                    className="bg-gradient-to-br from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-500"
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
