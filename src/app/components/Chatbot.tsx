import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function Chatbot() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with welcome message when chat opens or language changes
  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          id: Date.now().toString(),
          text: t('chatbot.welcome'),
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, language, t]);

  const knowledgeBase = {
    en: {
      services: 'We offer comprehensive web development services including custom website design, full-stack development, business systems integration, booking platforms, payment processing, and ongoing maintenance. Our focus is on creating scalable solutions for small businesses.',
      pricing: 'Our pricing starts at $2,000 minimum for all projects. Typical projects range from $2,000 to $8,000+ depending on scope and complexity. We offer transparent pricing and work with you to find the best solution for your budget. Contact us for a personalized quote.',
      timeline: 'Project timelines depend on complexity. A basic website typically takes 2-4 weeks, while more complex platforms with custom features may take 6-12 weeks. We provide detailed timelines during our discovery phase.',
      process: 'Our process begins with a discovery call to understand your business needs. Then we create a proposal with timeline and pricing. After approval, we design, develop, and launch your platform with ongoing support.',
      hours: 'We are available Monday through Friday, 9:00 AM to 6:00 PM. We typically respond to inquiries within one business day.',
      contact: 'You can reach us through our contact form on the website, or start a project inquiry. We will respond within one business day to schedule a discovery conversation.',
    },
    fr: {
      services: 'Nous offrons des services complets de développement web, y compris la conception de sites web personnalisés, le développement full-stack, l\'intégration de systèmes d\'entreprise, les plateformes de réservation, le traitement des paiements et la maintenance continue. Notre focus est sur la création de solutions évolutives pour les petites entreprises.',
      pricing: 'Nos tarifs commencent à partir de 2 000 $ minimum pour tous les projets. Les projets typiques vont de 2 000 $ à 8 000 $ et plus selon la portée et la complexité. Nous offrons une tarification transparente et travaillons avec vous pour trouver la meilleure solution pour votre budget. Contactez-nous pour un devis personnalisé.',
      timeline: 'Les délais du projet dépendent de la complexité. Un site web de base prend généralement 2 à 4 semaines, tandis que des plateformes plus complexes avec des fonctionnalités personnalisées peuvent prendre 6 à 12 semaines. Nous fournissons des délais détaillés lors de notre phase de découverte.',
      process: 'Notre processus commence par un appel de découverte pour comprendre les besoins de votre entreprise. Ensuite, nous créons une proposition avec calendrier et tarification. Après approbation, nous concevons, développons et lançons votre plateforme avec un support continu.',
      hours: 'Nous sommes disponibles du lundi au vendredi, de 9h00 à 18h00. Nous répondons généralement aux demandes dans un délai d\'un jour ouvrable.',
      contact: 'Vous pouvez nous contacter via notre formulaire de contact sur le site web, ou démarrer une demande de projet. Nous vous répondrons dans un délai d\'un jour ouvrable pour planifier une conversation de découverte.',
    },
    es: {
      services: 'Ofrecemos servicios integrales de desarrollo web que incluyen diseño de sitios web personalizados, desarrollo full-stack, integración de sistemas empresariales, plataformas de reservas, procesamiento de pagos y mantenimiento continuo. Nuestro enfoque está en crear soluciones escalables para pequeñas empresas.',
      pricing: 'Nuestros precios comienzan desde $2,000 mínimo para todos los proyectos. Los proyectos típicos van de $2,000 a $8,000+ según el alcance y la complejidad. Ofrecemos precios transparentes y trabajamos con usted para encontrar la mejor solución para su presupuesto. Contáctenos para una cotización personalizada.',
      timeline: 'Los plazos del proyecto dependen de la complejidad. Un sitio web básico generalmente toma de 2 a 4 semanas, mientras que las plataformas más complejas con características personalizadas pueden tomar de 6 a 12 semanas. Proporcionamos plazos detallados durante nuestra fase de descubrimiento.',
      process: 'Nuestro proceso comienza con una llamada de descubrimiento para entender las necesidades de su negocio. Luego creamos una propuesta con cronograma y precios. Después de la aprobación, diseñamos, desarrollamos y lanzamos su plataforma con soporte continuo.',
      hours: 'Estamos disponibles de lunes a viernes, de 9:00 AM a 6:00 PM. Generalmente respondemos a las consultas dentro de un día hábil.',
      contact: 'Puede contactarnos a través de nuestro formulario de contacto en el sitio web, o iniciar una consulta de proyecto. Le responderemos dentro de un día hábil para programar una conversación de descubrimiento.',
    },
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    const kb = knowledgeBase[language];
    
    // Service-related keywords
    if (message.includes('service') || message.includes('servicio') || message.includes('offer') || message.includes('offrez') || message.includes('ofrecen') || message.includes('do') || message.includes('build')) {
      return kb.services;
    }
    
    // Pricing keywords
    if (message.includes('price') || message.includes('cost') || message.includes('prix') || message.includes('coût') || message.includes('precio') || message.includes('costo') || message.includes('budget')) {
      return kb.pricing;
    }
    
    // Timeline keywords
    if (message.includes('time') || message.includes('long') || message.includes('when') || message.includes('temps') || message.includes('quand') || message.includes('tiempo') || message.includes('cuándo') || message.includes('délai')) {
      return kb.timeline;
    }
    
    // Process keywords
    if (message.includes('process') || message.includes('how') || message.includes('work') || message.includes('processus') || message.includes('comment') || message.includes('proceso') || message.includes('cómo') || message.includes('funciona')) {
      return kb.process;
    }
    
    // Hours keywords
    if (message.includes('hour') || message.includes('available') || message.includes('heure') || message.includes('disponible') || message.includes('hora') || message.includes('horario')) {
      return kb.hours;
    }
    
    // Contact keywords
    if (message.includes('contact') || message.includes('reach') || message.includes('talk') || message.includes('speak') || message.includes('contacter') || message.includes('parler') || message.includes('hablar') || message.includes('llamar')) {
      return kb.contact;
    }
    
    // Default response
    const defaults = {
      en: 'Thank you for your question! For detailed information about our services, pricing, or to discuss your specific project needs, please use our contact form or call us during business hours (Monday-Friday, 9 AM - 6 PM). We\'d be happy to help!',
      fr: 'Merci pour votre question! Pour des informations détaillées sur nos services, tarifs, ou pour discuter de vos besoins spécifiques de projet, veuillez utiliser notre formulaire de contact ou nous appeler pendant les heures de bureau (lundi-vendredi, 9h - 18h). Nous serions heureux de vous aider!',
      es: '¡Gracias por su pregunta! Para obtener información detallada sobre nuestros servicios, precios o para discutir las necesidades específicas de su proyecto, use nuestro formulario de contacto o llámenos durante el horario comercial (lunes a viernes, 9 AM - 6 PM). ¡Estaremos encantados de ayudar!',
    };
    
    return defaults[language];
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button with Glow Effect */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
          >
            {/* Pulsing glow rings */}
            <motion.div
              className="absolute inset-0 rounded-full bg-primary"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/80"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            
            {/* Main button with inner glow */}
            <motion.button
              onClick={() => setIsOpen(true)}
              className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary text-primary-foreground shadow-2xl shadow-primary/50"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 40px rgba(99, 196, 85, 0.8), 0 0 80px rgba(99, 196, 85, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              aria-label={t('chatbot.open')}
            >
              {/* Animated sparkle effect */}
              <motion.div
                className="absolute -right-1 -top-1"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Sparkles className="h-4 w-4 text-yellow-300 drop-shadow-lg" />
              </motion.div>
              
              {/* Rotating icon */}
              <motion.div
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
              </motion.div>
              
              {/* Inner glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white"
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
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
            {/* Glowing background blur */}
            <motion.div
              className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/30 via-primary/20 to-primary/30 blur-2xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Main chat container */}
            <div className="relative flex h-full sm:h-[500px] w-full sm:w-[90vw] sm:max-w-[400px] flex-col rounded-lg sm:rounded-lg border border-primary/30 bg-background shadow-2xl shadow-primary/20">
              {/* Animated gradient border effect */}
              <motion.div
                className="absolute -inset-[1px] rounded-lg bg-gradient-to-br from-primary/50 via-primary/30 to-primary/50 opacity-75"
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ zIndex: -1 }}
              />
              
              {/* Header with gradient and sparkle */}
              <div className="relative flex items-center justify-between rounded-t-lg bg-gradient-to-r from-primary via-primary/80 to-primary px-4 py-4 sm:py-3 text-primary-foreground overflow-hidden">
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 2,
                  }}
                />
                
                <div className="relative z-10 flex items-center gap-2">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="h-5 w-5 sm:h-4 sm:w-4 text-yellow-300" />
                  </motion.div>
                  <h3 className="font-semibold text-base sm:text-base">{t('chatbot.title')}</h3>
                </div>
                
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="relative z-10 rounded-full p-1.5 sm:p-1 transition-all hover:bg-white/20"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={t('chatbot.close')}
                >
                  <X className="h-6 w-6 sm:h-5 sm:w-5" />
                </motion.button>
              </div>

              {/* Messages with enhanced animations */}
              <div className="relative flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-4 bg-gradient-to-b from-background via-background to-primary/5 chatbot-scrollbar">
                {/* Floating particles effect */}
                <motion.div
                  className="absolute left-4 top-8 h-2 w-2 rounded-full bg-primary/30 blur-sm"
                  animate={{
                    y: [-20, -60, -20],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute right-8 top-16 h-2 w-2 rounded-full bg-primary/30 blur-sm"
                  animate={{
                    y: [-20, -60, -20],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                      className={`flex ${
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`relative max-w-[80%] break-words rounded-lg px-4 py-2 ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-br from-primary to-primary text-primary-foreground shadow-lg shadow-primary/30'
                            : 'bg-gradient-to-br from-muted to-muted/50 text-foreground shadow-lg border border-primary/10'
                        }`}
                      >
                        {/* Shimmer effect for bot messages */}
                        {message.sender === 'bot' && index === messages.length - 1 && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-lg"
                            animate={{
                              x: ['-100%', '200%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: 2,
                              ease: "easeInOut",
                            }}
                          />
                        )}
                        
                        <p className="relative z-10 text-sm whitespace-pre-wrap">{message.text}</p>
                        
                        {/* Glow for user messages */}
                        {message.sender === 'user' && (
                          <div className="absolute -inset-1 rounded-lg bg-primary/20 blur -z-10" />
                        )}
                      </motion.div>
                    </motion.div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Input with glow effect */}
              <div className="relative border-t border-primary/20 bg-gradient-to-t from-primary/5 to-transparent p-4">
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={t('chatbot.placeholder')}
                      className="border-primary/20 focus:border-primary/50 focus:ring-primary/20 transition-all"
                    />
                    {/* Input glow when focused */}
                    {inputValue && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute -inset-1 rounded-lg bg-primary/10 blur -z-10"
                      />
                    )}
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={handleSendMessage}
                      size="icon"
                      className="relative bg-gradient-to-br from-primary to-primary hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg shadow-primary/30"
                    >
                      <motion.div
                        animate={{
                          rotate: inputValue ? [0, 360] : 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        <Send className="h-4 w-4" />
                      </motion.div>
                      
                      {/* Button glow */}
                      <motion.div
                        className="absolute -inset-1 rounded-lg bg-primary/30 blur -z-10"
                        animate={{
                          opacity: inputValue ? [0.5, 1, 0.5] : 0,
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
