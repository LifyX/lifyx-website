import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fr' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQs',
    'nav.cta': 'Start a Project',
    
    // Header
    'header.darkMode': 'Dark Mode',
    'header.lightMode': 'Light Mode',
    'header.language': 'Language',
    
    // Footer
    'footer.description': 'Nurture Your Digital Growth',
    'footer.tagline': 'Engineered for growth. Designed for clarity.',
    'footer.backToTop': 'Back to top',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsConditions': 'Terms & Conditions',
    'footer.quickLinks': 'Quick Links',
    'footer.legal': 'Legal',
    'footer.contact': 'Contact',
    'footer.workingHours': 'Working Hours',
    'footer.workingHoursValue': 'Monday – Friday\n9:00 AM – 6:00 PM',
    'footer.copyright': '© 2026 LifyX. Engineered with precision. All rights reserved.',
    'footer.language': 'Language',
    'footer.cta.title': 'Ready to build with clarity?',
    'footer.cta.description': 'Let\'s create something engineered to grow.',
    'footer.cta.button': 'Get Started',
    
    // Legal
    'legal.privacy': 'Privacy Policy',
    'legal.terms': 'Terms & Conditions',
    'legal.cookies': 'Cookie Policy',
    'legal.dataProtection': 'Data Protection',
    'legal.acceptable': 'Acceptable Use',
    'legal.disclaimer': 'Disclaimer',
    
    // Home Page - New Hero
    'home.hero2.title': 'Custom Websites',
    'home.hero2.titleHighlight': 'Designed for Performance',
    'home.hero2.subtitle': 'We redesign, rebuild, and develop high-performance, brand-aligned websites that elevate credibility, improve user experience, and convert visitors into customers.',
    
    // Home Page - Problem Section
    'home.problem.title': 'Is Your Current Website Working Against You?',
    'home.problem.pain1': 'Slow performance.',
    'home.problem.pain2': 'Outdated design.',
    'home.problem.pain3': 'Low conversions.',
    'home.problem.statement': 'We build better.',
    
    // Home Page - Services Cards
    'home.cards.title': 'What We Build',
    'home.cards.card1.title': 'Custom Business Websites',
    'home.cards.card1.desc': 'Professional, high-performance websites built or rebuilt to position your business with clarity and authority.',
    'home.cards.card1.item1': 'Custom design aligned to your brand',
    'home.cards.card1.item2': 'Mobile-first responsive development',
    'home.cards.card1.item3': 'SEO-ready structure',
    'home.cards.card1.item4': 'Fast, optimized performance',
    'home.cards.card2.title': 'E-Commerce Websites',
    'home.cards.card2.desc': 'Scalable online stores designed for seamless purchasing experiences, including Shopify redesigns and performance upgrades.',
    'home.cards.card2.item1': 'Secure checkout integration',
    'home.cards.card2.item2': 'Product catalog configuration',
    'home.cards.card2.item3': 'Payment gateway setup',
    'home.cards.card2.item4': 'Conversion-focused product pages',
    'home.cards.card3.title': 'Booking & Business Systems',
    'home.cards.card3.desc': 'Integrated tools that streamline operations and improve customer experience.',
    'home.cards.card3.item1': 'Online booking platforms',
    'home.cards.card3.item2': 'Lead capture systems',
    'home.cards.card3.item3': 'Contact and inquiry management',
    'home.cards.card3.item4': 'Workflow automation',
    'home.cards.learnMore': 'Learn More',
    
    // Home Page - Trust Section
    'home.trust.title': 'Built for Performance and Longevity',
    'home.trust.subtitle': 'We engineer digital foundations that scale with your business, ensuring speed, security, and stability.',
    'home.trust.item1.title': 'Reliable Architecture',
    'home.trust.item1.desc': 'Structured for stability and maintainability.',
    'home.trust.item2.title': 'Optimized Speed',
    'home.trust.item2.desc': 'Fast loading times to maximize engagement.',
    'home.trust.item3.title': 'Clear Process',
    'home.trust.item3.desc': 'Structured execution from concept to launch.',
    'home.trust.item4.title': 'Ongoing Support',
    'home.trust.item4.desc': 'Continued refinement as you grow.',
    
    // Home Page - About Preview
    'home.about.title': 'Who We Are',
    'home.about.text': 'LifyX is a boutique digital studio founded by Ana Zuluaga and Nisith Jayalath. We specialize in building scalable, high-performance websites for businesses ready to establish a stronger digital presence.',
    'home.about.cta': 'More About Us',
    
    // Home Page - Final CTA
    'home.cta.title': 'Ready to Build a Website That Works as Hard as You Do?',
    'home.cta.subtitle': "Let's create a digital foundation designed for long-term growth.",
    'home.cta.btn': 'Start Your Project',

    // Home Page (legacy keys)
    'home.hero.title': 'Grow your business with a powerful digital presence',
    'home.hero.subtitle': 'We design and build professional, scalable and interactive websites for small businesses ready to grow.',
    'home.hero.cta1': 'Start Your Project',
    'home.hero.cta2': 'View Our Work',
    
    'home.values.title1': 'Custom Design for Your Brand',
    'home.values.desc1': 'Brand-aligned layouts crafted around your business identity',
    'home.values.title2': 'Full Frontend & Backend Development',
    'home.values.desc2': 'Complete technical solutions from interface to infrastructure',
    'home.values.title3': 'Growth-Ready Business Systems',
    'home.values.desc3': 'Scalable platforms that evolve with your business',
    'home.values.title4': 'Interactive & Modern Experiences',
    'home.values.desc4': 'Engaging interfaces with smooth animations and interactions',
    
    'home.intro.title': 'Who LifyX Is',
    'home.intro.text': 'LifyX is a full-stack web studio founded by two professional developers, Ana Zuluaga and Nisith Jayalath, focused on helping startups and small businesses grow through modern and reliable digital platforms.',
    'home.intro.cta': 'About LifyX',
    
    'home.services.title': 'What We Build',
    'home.services.block1.title': 'Website Experience',
    'home.services.block1.items': '• Clean interfaces\n• Responsive layouts\n• Interactive elements\n• Brand storytelling',
    'home.services.block2.title': 'Business Systems',
    'home.services.block2.items': '• Booking & inquiries\n• Client data management\n• Dashboards\n• Workflows',
    'home.services.block3.title': 'Growth Platforms',
    'home.services.block3.items': '• Scalable infrastructure\n• Integrations\n• Future feature expansion',
    'home.services.cta': 'Explore Services',
    
    'home.immersive.title': 'Interactive Experience',
    'home.immersive.text': 'A visually engaging area reserved for future immersive and 3D interactive content that enhances storytelling and brand presence.',
    
    'home.why.title': 'Why LifyX',
    'home.why.point1': 'You work directly with developers',
    'home.why.point2': 'Custom solutions, not templates',
    'home.why.point3': 'Small-business focused strategy',
    'home.why.point4': 'Growth planning included',
    'home.why.statement': 'We build digital foundations that grow with your business.',
    'home.why.cta': 'Start Your Project',
    
    'home.portfolio.title': 'Our Work',
    'home.portfolio.cta': 'View Portfolio',
    
    'home.finalCta.title': 'Ready to grow your business with a modern website?',
    'home.finalCta.btn1': 'Start a Project',
    'home.finalCta.btn2': 'Contact Us',
    
    // Process Page - Lifecycle
    'process.page.title': 'LifyX Website Lifecycle',
    'process.page.subtitle': 'From concept to deployment — structured, controlled, and performance-focused.',
    'process.page.backToHome': 'Back to Home',
    'process.page.cta.title': 'Ready to start the lifecycle?',
    'process.page.cta.subtitle': "Let's build a foundation designed for performance and longevity.",
    'process.page.cta.button': 'Start Project',

    'process.step1.title': 'Discovery & Scope Alignment',
    'process.step1.description': 'We define objectives, confirm required pages, clarify features, and lock the project scope before any production begins.',
    'process.step1.deliverableLabel': 'Deliverable',
    'process.step1.deliverableText': 'Approved sitemap and project scope confirmation',

    'process.step2.title': 'Content & Structure Confirmation',
    'process.step2.description': 'Brand assets, copy, imagery, and required business information are collected and validated. Once approved, content is frozen to protect timeline and scope.',
    'process.step2.deliverableLabel': 'Deliverable',
    'process.step2.deliverableText': 'Content & Structure Freeze Confirmation',

    'process.step3.title': 'Design System & Layout',
    'process.step3.description': 'We establish typography, color system, spacing, and structural components before building any pages.',
    'process.step3.deliverableLabel': 'Deliverable',
    'process.step3.deliverableText': 'Approved visual direction and layout system',

    'process.step4.title': 'Front-End Production',
    'process.step4.description': 'Pages are built with performance, responsiveness, and accessibility in mind. The full website is completed visually and structurally.',
    'process.step4.deliverableLabel': 'Deliverable',
    'process.step4.deliverableText': 'Fully built front-end (not yet integrated or deployed)',

    'process.step5.title': 'Review & Refinement',
    'process.step5.description': 'The full website is presented. Structured feedback is implemented within agreed revision scope.',
    'process.step5.deliverableLabel': 'Deliverable',
    'process.step5.deliverableText': 'Approved front-end ready for integration or deployment',

    'process.step6.title': 'Platform Integration (Optional Phase)',
    'process.step6.description': 'If required, we connect booking systems, payments, analytics, or other platforms through structured configuration.',
    'process.step6.deliverableLabel': 'Deliverable',
    'process.step6.deliverableText': 'Connected and fully functional website',

    'process.step7.title': 'Launch & Handover',
    'process.step7.description': 'We deploy the website to production and provide guidance for management and future updates.',
    'process.step7.deliverableLabel': 'Deliverable',
    'process.step7.deliverableText': 'Live website and handover documentation',

    'process.step8.title': 'Growth & Optimization',
    'process.step8.description': 'Performance monitoring, refinement, and structured expansion as your business evolves.',
    'process.step8.deliverableLabel': 'Deliverable',
    'process.step8.deliverableText': 'Ongoing support and strategic improvements',

    // About Page - Hero
    'about.hero.h1.part1': 'We build',
    'about.hero.h1.highlight': 'digital foundations',
    'about.hero.h1.part2': 'for growing businesses.',
    'about.hero.longTermAsset': 'Long-Term Asset',
    'about.hero.scalable': 'Scalable',
    'about.hero.efficient': 'Efficient',
    'about.hero.measurable': 'Measurable',
    'about.team.ana.roleShort': 'Co-Founder & Full-Stack Developer',
    'about.team.ana.bioShort': 'Ana leads frontend architecture and strategic design. With a background in business marketing, she focuses on creating refined, conversion-aware digital experiences that align with brand positioning and growth objectives.',
    'about.team.nisith.roleShort': 'Co-Founder & Full-Stack Developer',
    'about.team.nisith.bioShort': 'Nisith specializes in backend systems and cloud infrastructure. His focus is scalable architecture, performance optimization, and building resilient environments designed to evolve with the businesses they support.',
    
    // Services Page - Full
    'services.hero.titleFull': 'Our Services',
    'services.hero.subtitleFull': 'Scalable digital solutions designed to elevate, rebuild, and strengthen your online presence.',
    'services.slider.tab1': 'Websites',
    'services.slider.tab2': 'E-Commerce',
    'services.slider.tab3': 'Systems',
    'services.s1.title': 'Custom Business Websites',
    'services.s1.desc': 'Designed or redesigned for businesses with outdated, underperforming, or template-based websites that need a stronger digital presence.',
    'services.s1.included': "What's Included",
    'services.s1.item1': 'Strategic planning session',
    'services.s1.item2': 'Custom UI design',
    'services.s1.item3': 'Frontend development',
    'services.s1.item4': 'Performance optimization',
    'services.s1.item5': 'SEO-ready structure',
    'services.s1.idealFor': 'Ideal For',
    'services.s1.ideal1': 'Businesses redesigning their current site',
    'services.s1.ideal2': 'Companies rebranding',
    'services.s1.ideal3': 'Service businesses needing credibility',
    'services.s1.outcome': 'Expected Outcome',
    'services.s1.outcomeText': 'A fast, modern website that strengthens trust and increases inquiries.',
    'services.s2.title': 'E-Commerce Websites',
    'services.s2.desc': 'Online stores built or redesigned for seamless purchasing experiences and scalable growth, including Shopify performance upgrades.',
    'services.s2.included': "What's Included",
    'services.s2.item1': 'Store architecture planning',
    'services.s2.item2': 'Shopify or custom implementation',
    'services.s2.item3': 'Secure checkout setup',
    'services.s2.item4': 'Payment gateway configuration',
    'services.s2.item5': 'Product and inventory structure',
    'services.s2.idealFor': 'Ideal For',
    'services.s2.ideal1': 'Businesses migrating from outdated themes',
    'services.s2.ideal2': 'Stores with low conversions',
    'services.s2.ideal3': 'Brands scaling product offerings',
    'services.s2.outcome': 'Expected Outcome',
    'services.s2.outcomeText': 'A conversion-focused online store built for performance and growth.',
    'services.s3.title': 'Booking & Business Systems',
    'services.s3.desc': 'Integrated systems that streamline operations, automate workflows, and improve customer experience.',
    'services.s3.included': "What's Included",
    'services.s3.item1': 'Online booking integration',
    'services.s3.item2': 'Lead capture systems',
    'services.s3.item3': 'Workflow automation',
    'services.s3.item4': 'CRM-ready integrations',
    'services.s3.idealFor': 'Ideal For',
    'services.s3.ideal1': 'Service-based businesses',
    'services.s3.ideal2': 'Businesses relying on manual processes',
    'services.s3.ideal3': 'Teams needing better client tracking',
    'services.s3.outcome': 'Expected Outcome',
    'services.s3.outcomeText': 'Streamlined operations and improved client management.',
    'services.process.title': 'Our Process',
    'services.process.step1.title': 'Discovery',
    'services.process.step1.desc': 'We begin with a focused consultation to understand your business, goals, and current challenges. Clear objectives and scope are defined before any design work begins.',
    'services.process.step2.title': 'Strategy',
    'services.process.step2.desc': 'We structure the user flow, content hierarchy, and technical foundation to ensure alignment with performance and long-term scalability.',
    'services.process.step3.title': 'Design & Development',
    'services.process.step3.desc': 'We design and build your website with responsiveness, speed, and conversion in mind. Structured updates and review checkpoints keep the process transparent.',
    'services.process.step4.title': 'Launch & Optimization',
    'services.process.step4.desc': 'After testing and refinement, we deploy your website and monitor performance. Ongoing improvements ensure your digital presence continues to evolve.',
    'services.lifecycle_section.title': 'Curious about how we work?',
    'services.lifecycle_section.btn': 'View Website Lifecycle',
    'services.cta.title': 'Ready to Upgrade Your Website?',
    'services.cta.subtitle': "Let's build a digital foundation designed for long-term performance.",
    'services.cta.btn': 'Start Your Project',
    
    // Portfolio Page - Full
    'portfolio.hero.titleFull': 'Selected Projects',
    'portfolio.hero.subtitleFull': 'Built for performance. Designed to scale.',
    'portfolio.category.label': 'Websites made by LifyX',
    'portfolio.featured': 'Featured Project',
    'portfolio.viewLive': 'View Live',
    'portfolio.sourceCode': 'Source Code',
    'portfolio.comingSoon': 'Coming Soon',
    'comingSoon.title': 'Coming Soon',
    'comingSoon.description': 'We\'re putting the finishing touches on this project. Check back soon to see the final result.',
    'comingSoon.backToPortfolio': 'Back to Portfolio',
    'portfolio.project1.title': 'Solaris Cartagena',
    'portfolio.project1.desc': 'Boutique luxury hotel booking platform with immersive virtual tours and seamless reservation management.',
    'portfolio.project2.title': 'Los Asados de Ruben',
    'portfolio.project2.desc': 'Restaurant website with online ordering, table reservations, and dynamic menu management system.',
    'portfolio.project3.title': 'Capitan Poop',
    'portfolio.project3.desc': 'E-commerce platform for premium bathroom odor elimination sprays with engaging product showcase and seamless checkout.',
    
    // Contact Page - Missing
    'contact.form.required': 'Please complete all required fields',
    'contact.faq.stillHave': 'Still have questions?',
    'contact.faq.checkOut': 'Check out our Frequently Asked Questions for quick answers to common inquiries.',
    'contact.faq.visitPage': 'Visit FAQ Page',
    
    // FAQ Page - Missing
    'faq.badge': 'Questions & Answers',

    // About Page (existing)
    'about.hero.title': 'Building Digital Foundations That Scale',
    'about.hero.text': 'LifyX is a full-stack digital studio specializing in high-performance websites for growing businesses. We design and engineer digital systems that strengthen brand credibility, improve user experience, and support long-term growth.',
    
    'about.mission.title': 'Our Philosophy',
    'about.mission.subtitle': 'A professional digital presence is infrastructure.',
    'about.mission.headingPart1': 'A professional digital presence is ',
    'about.mission.headingHighlight': 'infrastructure.',
    'about.mission.text': 'We approach every project as a long-term asset. Structure, performance, and clarity are prioritized from day one to ensure every build is scalable, efficient, and aligned with measurable business objectives.',
    'about.process.cta': 'Our Process',
    
    'about.bento.item1.title': 'Long-Term Asset',
    'about.bento.item1.desc': 'Built to last and grow with your business. Not just for today, but for years to come.',
    'about.bento.item2.title': 'Scalable',
    'about.bento.item2.desc': 'Infrastructure that expands without breaking as you grow.',
    'about.bento.item3.title': 'Efficient',
    'about.bento.item3.desc': 'Optimized performance for maximum speed.',
    'about.bento.item4.title': 'Measurable',
    'about.bento.item4.desc': 'Driven by data and clear business objectives.',
    
    'about.goals.title': 'What We Aim to Do',
    'about.goals.goal1': 'Remove technical barriers for entrepreneurs',
    'about.goals.goal2': 'Simplify digital transformation',
    'about.goals.goal3': 'Create platforms that genuinely support business growth',
    'about.goals.text': 'We focus on helping startups and small companies establish credibility, visibility, operational efficiency and long-term scalability.',
    'about.goals.statement': 'We don\'t simply build websites. We build digital foundations that allow businesses to grow, adapt and compete in modern markets.',
    
    'about.values.title': 'Our Values',
    'about.values.value1': 'Transparency',
    'about.values.value2': 'Reliability',
    'about.values.value3': 'Long-term partnerships',
    'about.values.value4': 'Business-first thinking',
    'about.values.value5': 'Clean and maintainable development',
    'about.values.value6': 'Continuous growth mindset',
    
    // About Page - Team
    'about.team.badge': 'Leadership',
    'about.team.title': 'Leadership',
    'about.team.subtitle': '',
    'about.team.showSkills': 'View Technical Skills',
    'about.team.hideSkills': 'Hide Technical Skills',
    'about.team.ana.role': 'Co-Founder & Full-Stack Developer',
    'about.team.ana.subtitle': '',
    'about.team.ana.bio': 'Ana leads frontend architecture and strategic design. With a background in business marketing, she focuses on creating refined, conversion-aware digital experiences that align with brand positioning and growth objectives.',
    'about.team.nisith.role': 'Co-Founder & Full-Stack Developer',
    'about.team.nisith.subtitle': '',
    'about.team.nisith.bio': 'Nisith specializes in backend systems and cloud infrastructure. His focus is scalable architecture, performance optimization, and building resilient environments designed to evolve with the businesses they support.',
    
    // Services Page
    'services.hero.title': 'What We Build',
    'services.hero.subtitle': 'Custom digital systems designed for growing businesses.',
    
    'services.category1.title': 'Custom Business Websites',
    'services.category1.description': 'Professional, high-performance websites built to elevate your brand and convert visitors into customers.',
    'services.category1.item1': 'Custom visual design',
    'services.category1.item2': 'Mobile-responsive development',
    'services.category1.item3': 'Conversion-focused layouts',
    'services.category1.item4': 'SEO-ready structure',
    'services.category1.item5': 'Fast, optimized performance',
    
    'services.category2.title': 'E-Commerce Websites',
    'services.category2.description': 'Online stores designed for smooth purchasing experiences and scalable growth.',
    'services.category2.item1': 'Product catalog setup',
    'services.category2.item2': 'Secure checkout integration',
    'services.category2.item3': 'Payment gateway configuration',
    'services.category2.item4': 'Inventory-ready structure',
    'services.category2.item5': 'Conversion-optimized product pages',
    
    'services.category3.title': 'Booking & Business Systems',
    'services.category3.description': 'Integrated systems that streamline operations and improve customer experience.',
    'services.category3.item1': 'Online booking platforms',
    'services.category3.item2': 'Lead capture systems',
    'services.category3.item3': 'Contact and inquiry management',
    'services.category3.item4': 'Workflow automation',
    'services.category3.item5': 'Basic CRM integrations',
    
    'services.category4.title': 'Website Optimization & Growth',
    'services.category4.description': 'Improving performance, clarity, and scalability over time.',
    'services.category4.item1': 'Speed optimization',
    'services.category4.item2': 'UX improvements',
    'services.category4.item3': 'Conversion refinement',
    'services.category4.item4': 'Feature expansion',
    'services.category4.item5': 'Ongoing technical support',
    
    // Website Lifecycle
    'services.lifecycle.title': 'LifyX Website Lifecycle',
    'services.lifecycle.subtitle': 'From idea to launch — a leaf-growth timeline',
    'services.lifecycle.totalTime': 'From start to live website: ≈ 2.5 to 3 weeks total',
    
    'services.lifecycle.phase1.icon': '🌰',
    'services.lifecycle.phase1.name': 'Seed',
    'services.lifecycle.phase1.title': 'Discovery & Goals',
    'services.lifecycle.phase1.duration': 'Day 1–2',
    'services.lifecycle.phase1.description': 'We align with your vision to define clear business objectives, scope, and strategic direction for a high-impact digital presence.',
    'services.lifecycle.phase1.output': 'Clear scope and site structure',
    
    'services.lifecycle.phase2.icon': '🌱',
    'services.lifecycle.phase2.name': 'Sprout',
    'services.lifecycle.phase2.title': 'Design & Structure',
    'services.lifecycle.phase2.duration': 'Day 3–5',
    'services.lifecycle.phase2.description': 'We craft the visual architecture and user experience, creating high-fidelity prototypes that balance aesthetics with conversion-focused usability.',
    'services.lifecycle.phase2.output': 'Visual structure (wireframe / layout)',
    
    'services.lifecycle.phase3.icon': '🌿',
    'services.lifecycle.phase3.name': 'Small Leaf',
    'services.lifecycle.phase3.title': 'Development',
    'services.lifecycle.phase3.duration': 'Week 1–2',
    'services.lifecycle.phase3.description': 'Our engineers build a robust, scalable foundation using modern technologies, ensuring performance, security, and seamless functionality across all devices.',
    'services.lifecycle.phase3.output': 'Working website (not public yet)',
    
    'services.lifecycle.phase4.icon': '🍃',
    'services.lifecycle.phase4.name': 'Growing Leaf',
    'services.lifecycle.phase4.title': 'Integration & Logic',
    'services.lifecycle.phase4.duration': '2–4 days',
    'services.lifecycle.phase4.description': 'We integrate complex systems and dynamic content logic, ensuring your platform operates intelligently with seamless data flow and user interactions.',
    'services.lifecycle.phase4.output': 'Everything switches language correctly',
    
    'services.lifecycle.phase5.icon': '🍃',
    'services.lifecycle.phase5.name': 'Big Healthy Leaf',
    'services.lifecycle.phase5.title': 'Quality Assurance',
    'services.lifecycle.phase5.duration': '2–3 days',
    'services.lifecycle.phase5.description': 'Rigorous cross-platform testing ensures a flawless experience, optimizing speed, responsiveness, and accessibility before the final reveal.',
    'services.lifecycle.phase5.output': 'Ready-to-launch site',
    
    'services.lifecycle.phase6.icon': '🌿🍃',
    'services.lifecycle.phase6.name': 'Mature Leaf',
    'services.lifecycle.phase6.title': 'Launch & Handover',
    'services.lifecycle.phase6.duration': '1 day',
    'services.lifecycle.phase6.description': 'We manage a smooth deployment to production and provide the necessary tools and knowledge to empower your team to manage the platform.',
    'services.lifecycle.phase6.output': 'The website is live',
    
    'services.lifecycle.phase7.icon': '🍂',
    'services.lifecycle.phase7.name': 'New Leaves',
    'services.lifecycle.phase7.title': 'Growth & Evolution',
    'services.lifecycle.phase7.duration': 'Ongoing',
    'services.lifecycle.phase7.description': 'Our partnership continues with ongoing optimization, security monitoring, and feature evolution to keep your digital asset ahead of the curve.',
    'services.lifecycle.phase7.output': 'Continuous support & growth',
    
    // Portfolio Page
    'portfolio.hero.title': 'Our Work',
    'portfolio.hero.subtitle': 'A curated gallery of projects focused on small businesses, service companies, startups and digital platforms',
    'portfolio.coming.title': 'Portfolio Coming Soon',
    'portfolio.coming.text': 'We\'re currently showcasing our best work. Check back soon to see our case studies and success stories.',
    
    // Contact Page
    'contact.hero.title': 'Let\'s Discuss Your Project',
    'contact.hero.subtitle': 'Tell us about your business and what you\'re looking to improve. We’ll review your details and respond with next steps.',
    
    'contact.form.fullName': 'Full Name',
    'contact.form.businessName': 'Business Name',
    'contact.form.email': 'Email Address',
    'contact.form.website': 'Current Website (optional)',
    
    'contact.form.projectType': 'Project Type',
    'contact.form.projectType.redesign': 'Website Redesign',
    'contact.form.projectType.new': 'New Website',
    'contact.form.projectType.ecommerce': 'E-Commerce',
    'contact.form.projectType.booking': 'Booking / Business System',
    'contact.form.projectType.unsure': 'Not Sure Yet',
    
    'contact.form.budget': 'Estimated Budget',
    'contact.form.budget.range1': '$2,000 – $3,000',
    'contact.form.budget.range2': '$3,000 – $5,000',
    'contact.form.budget.range3': '$5,000+',
    'contact.form.budget.discuss': 'Prefer to discuss',
    
    'contact.form.details': 'Project Details',
    'contact.form.detailsPlaceholder': 'Briefly describe your goals, challenges, or what you\'d like to improve.',
    
    'contact.form.submit': 'Start the Conversation',
    'contact.form.privacy': 'By submitting this form, you agree to our Privacy Policy.',
    
    'contact.cta.title': 'Prefer to speak directly?',
    'contact.cta.button': 'Schedule a 20-Minute Intro Call',
    
    'contact.success.title': 'Thank You',
    'contact.success.message': 'We’ve received your message and will review your details shortly. If your project aligns with our scope, we’ll reach out with next steps.',
    'contact.success.button': 'Back to Home',
    
    // Contact Page - FAQ
    'contact.faq.title': 'Frequently Asked Questions',
    'contact.faq.subtitle': 'Clear answers about our process, structure, and delivery model.',
    'contact.faq.q1': 'How long does a project take?',
    'contact.faq.a1': 'Most front-end projects are completed within 3 weeks. If platform integrations are required, total delivery is typically 4–5 weeks depending on complexity.',
    'contact.faq.q2': 'What is included in the front-end website contract?',
    'contact.faq.a2': 'The front-end phase includes structure, responsive layout, accessibility, performance optimization, and SEO-ready architecture. Platform integrations and deployment are handled separately.',
    'contact.faq.q3': 'Why are integration services separate?',
    'contact.faq.a3': 'Separating front-end development from platform configuration ensures clarity, protects scope, and maintains predictable timelines. Integration covers connecting your website to booking systems, payments, analytics, or e-commerce platforms.',
    'contact.faq.q4': 'Do you redesign existing websites?',
    'contact.faq.a4': 'Yes. Most projects involve rebuilding or upgrading underperforming websites to improve structure, speed, and conversion.',
    'contact.faq.q5': 'What do I need to provide before production begins?',
    'contact.faq.a5': 'Clients provide branding assets, written content, business information, and required approvals before production begins. This protects timeline and delivery quality.',
    'contact.faq.q6': 'Do you work with clients internationally?',
    'contact.faq.a6': 'Yes. We collaborate with clients globally through structured remote communication and scheduled project milestones.',
    'contact.faq.q7': 'Do you offer ongoing support?',
    'contact.faq.a7': 'Yes. After launch, structured optimization and support options are available depending on your needs.',
    
    // FAQ Section
    'faq.header.title': 'Frequently Asked Questions',
    'faq.header.subtitle': 'Clear answers about our process, structure, and delivery model.',
    
    'faq.q1': 'How long does a project take?',
    'faq.a1': 'Most front-end projects are completed within 3 weeks. If platform integrations are required, total delivery is typically 4–5 weeks depending on complexity.',
    
    'faq.q2': 'What is included in the front-end website contract?',
    'faq.a2': 'The front-end phase includes structure, responsive layout, accessibility, performance optimization, and SEO-ready architecture. Platform integrations and deployment are handled separately.',
    
    'faq.q3': 'Why are integration services separate?',
    'faq.a3': 'Separating front-end development from platform configuration ensures clarity, protects scope, and maintains predictable timelines. Integration covers connecting your website to booking systems, payments, analytics, or e-commerce platforms.',
    
    'faq.q4': 'Do you redesign existing websites?',
    'faq.a4': 'Yes. Most projects involve rebuilding or upgrading underperforming websites to improve structure, speed, and conversion.',
    
    'faq.q5': 'What do I need to provide before production begins?',
    'faq.a5': 'Clients provide branding assets, written content, business information, and required approvals before production begins. This protects timeline and delivery quality.',
    
    'faq.q6': 'Do you work with clients internationally?',
    'faq.a6': 'Yes. We collaborate with clients globally through structured remote communication and scheduled project milestones.',
    
    'faq.q7': 'Do you offer ongoing support?',
    'faq.a7': 'Yes. After launch, structured optimization and support options are available depending on your needs.',
    
    'faq.cta.text': 'Have a specific question about your project?',
    'faq.cta.button': 'Start Your Project',
    
    // Chatbot
    'chatbot.title': 'Chat with us',
    'chatbot.placeholder': 'Ask us anything...',
    'chatbot.send': 'Send',
    'chatbot.welcome': 'Hello! How can we help you today?',
    'chatbot.close': 'Close chat',
    'chatbot.open': 'Chat with us',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'nav.cta': 'Démarrer un projet',
    
    // Header
    'header.darkMode': 'Mode sombre',
    'header.lightMode': 'Mode clair',
    'header.language': 'Langue',
    
    // Footer
    'footer.description': 'Cultivez votre croissance numérique',
    'footer.tagline': 'Conçu pour la croissance. Pensé pour la clarté.',
    'footer.backToTop': 'Retour en haut',
    'footer.privacyPolicy': 'Politique de confidentialité',
    'footer.termsConditions': 'Conditions générales',
    'footer.quickLinks': 'Liens rapides',
    'footer.legal': 'Légal',
    'footer.contact': 'Contact',
    'footer.workingHours': 'Heures d\'ouverture',
    'footer.workingHoursValue': 'Lundi – Vendredi\n9h00 – 18h00',
    'footer.copyright': '© 2026 LifyX. Conçu avec précision. Tous droits réservés.',
    'footer.language': 'Langue',
    'footer.cta.title': 'Prêt à construire avec clarté?',
    'footer.cta.description': 'Créons quelque chose conçu pour grandir.',
    'footer.cta.button': 'Commencer',
    
    // Legal
    'legal.privacy': 'Politique de confidentialité',
    'legal.terms': 'Conditions générales',
    'legal.cookies': 'Politique des cookies',
    'legal.dataProtection': 'Protection des données',
    'legal.acceptable': 'Utilisation acceptable',
    'legal.disclaimer': 'Avertissement',
    
    // Home Page - New Hero
    'home.hero2.title': 'Sites web personnalisés',
    'home.hero2.titleHighlight': 'Conçus pour la Performance',
    'home.hero2.subtitle': 'Nous redessinons, reconstruisons et développons des sites web haute performance, alignés sur votre marque, qui renforcent la crédibilité, améliorent l\'expérience utilisateur et convertissent les visiteurs en clients.',
    
    // Home Page - Problem Section
    'home.problem.title': 'Votre site web actuel joue-t-il contre vous?',
    'home.problem.pain1': 'Performance lente.',
    'home.problem.pain2': 'Design obsolète.',
    'home.problem.pain3': 'Faibles conversions.',
    'home.problem.statement': 'Nous faisons mieux.',
    
    // Home Page - Services Cards
    'home.cards.title': 'Ce que nous construisons',
    'home.cards.card1.title': 'Sites Web d\'Entreprise',
    'home.cards.card1.desc': 'Sites web professionnels et performants conçus ou reconstruits pour positionner votre entreprise avec clarté et autorité.',
    'home.cards.card1.item1': 'Design personnalisé aligné à votre marque',
    'home.cards.card1.item2': 'Développement responsive mobile-first',
    'home.cards.card1.item3': 'Structure prête pour le référencement',
    'home.cards.card1.item4': 'Performance rapide et optimisée',
    'home.cards.card2.title': 'Sites E-Commerce',
    'home.cards.card2.desc': 'Boutiques en ligne évolutives conçues pour des expériences d\'achat fluides, y compris la refonte et l\'optimisation Shopify.',
    'home.cards.card2.item1': 'Intégration de paiement sécurisé',
    'home.cards.card2.item2': 'Configuration du catalogue produits',
    'home.cards.card2.item3': 'Configuration de la passerelle de paiement',
    'home.cards.card2.item4': 'Pages produits axées sur la conversion',
    'home.cards.card3.title': 'Systèmes de Réservation & d\'Entreprise',
    'home.cards.card3.desc': 'Outils intégrés qui rationalisent les opérations et améliorent l\'expérience client.',
    'home.cards.card3.item1': 'Plateformes de réservation en ligne',
    'home.cards.card3.item2': 'Systèmes de capture de prospects',
    'home.cards.card3.item3': 'Gestion des contacts et des demandes',
    'home.cards.card3.item4': 'Automatisation des flux de travail',
    'home.cards.learnMore': 'En savoir plus',
    
    // Home Page - Trust Section
    'home.trust.title': 'Construit pour la performance et la longévité',
    'home.trust.subtitle': 'Nous concevons des fondations numériques qui évoluent avec votre entreprise, garantissant vitesse, sécurité et stabilité.',
    'home.trust.item1.title': 'Architecture fiable',
    'home.trust.item1.desc': 'Structurée pour la stabilité et la maintenabilité.',
    'home.trust.item2.title': 'Vitesse optimisée',
    'home.trust.item2.desc': 'Temps de chargement rapides pour maximiser l\'engagement.',
    'home.trust.item3.title': 'Processus clair',
    'home.trust.item3.desc': 'Exécution structurée du concept au lancement.',
    'home.trust.item4.title': 'Support continu',
    'home.trust.item4.desc': 'Amélioration continue à mesure que vous grandissez.',
    
    // Home Page - About Preview
    'home.about.title': 'Qui sommes-nous',
    'home.about.text': 'LifyX est un studio numérique boutique fondé par Ana Zuluaga et Nisith Jayalath. Nous nous spécialisons dans la création de sites web évolutifs et performants pour les entreprises prêtes à établir une présence numérique plus forte.',
    'home.about.cta': 'En savoir plus',
    
    // Home Page - Final CTA
    'home.cta.title': 'Prêt à créer un site web qui travaille aussi dur que vous?',
    'home.cta.subtitle': 'Créons une fondation numérique conçue pour une croissance à long terme.',
    'home.cta.btn': 'Démarrer votre projet',

    // Home Page (legacy keys)
    'home.hero.title': 'Développez votre entreprise avec une présence numérique puissante',
    'home.hero.subtitle': 'Nous concevons et développons des sites web professionnels, évolutifs et interactifs pour les petites entreprises prêtes à croître.',
    'home.hero.cta1': 'Démarrer votre projet',
    'home.hero.cta2': 'Voir notre travail',
    
    'home.values.title1': 'Design personnalisé pour votre marque',
    'home.values.desc1': 'Des mises en page alignées sur votre identité d\'entreprise',
    'home.values.title2': 'Développement Frontend & Backend complet',
    'home.values.desc2': 'Solutions techniques complètes de l\'interface à l\'infrastructure',
    'home.values.title3': 'Systèmes d\'entreprise évolutifs',
    'home.values.desc3': 'Plateformes évolutives qui évoluent avec votre entreprise',
    'home.values.title4': 'Expériences interactives et modernes',
    'home.values.desc4': 'Interfaces engageantes avec animations et interactions fluides',
    
    'home.intro.title': 'Qui est LifyX',
    'home.intro.text': 'LifyX est un studio web full-stack fondé par deux développeurs professionnels, Ana Zuluaga et Nisith Jayalath, axé sur l\'aide aux startups et aux petites entreprises pour croître grâce à des plateformes numériques modernes et fiables.',
    'home.intro.cta': 'À propos de LifyX',
    
    'home.services.title': 'Ce que nous construisons',
    'home.services.block1.title': 'Expérience Web',
    'home.services.block1.items': '• Interfaces propres\n• Mises en page réactives\n• Éléments interactifs\n• Narration de marque',
    'home.services.block2.title': 'Systèmes d\'entreprise',
    'home.services.block2.items': '• Réservation et demandes\n• Gestion des données clients\n• Tableaux de bord\n• Flux de travail',
    'home.services.block3.title': 'Plateformes de croissance',
    'home.services.block3.items': '• Infrastructure évolutive\n• Intégrations\n• Expansion des fonctionnalités',
    'home.services.cta': 'Explorer les services',
    
    'home.immersive.title': 'Expérience interactive',
    'home.immersive.text': 'Une zone visuellement engageante réservée au futur contenu interactif immersif et 3D qui améliore la narration et la présence de la marque.',
    
    'home.why.title': 'Pourquoi LifyX',
    'home.why.point1': 'Vous travaillez directement avec les développeurs',
    'home.why.point2': 'Solutions personnalisées, pas de modèles',
    'home.why.point3': 'Stratégie axée sur les petites entreprises',
    'home.why.point4': 'Planification de croissance incluse',
    'home.why.statement': 'Nous construisons des fondations numériques qui évoluent avec votre entreprise.',
    'home.why.cta': 'Démarrer votre projet',
    
    'home.portfolio.title': 'Notre travail',
    'home.portfolio.cta': 'Voir le portfolio',
    
    'home.finalCta.title': 'Prêt à développer votre entreprise avec un site web moderne?',
    'home.finalCta.btn1': 'Démarrer un projet',
    'home.finalCta.btn2': 'Nous contacter',
    
    // Process Page - Lifecycle
    'process.page.title': 'Cycle de vie du site web LifyX',
    'process.page.subtitle': 'Du concept au déploiement — structuré, contrôlé et axé sur la performance.',
    'process.page.backToHome': 'Retour à l\'accueil',
    'process.page.cta.title': 'Prêt à commencer le cycle de vie ?',
    'process.page.cta.subtitle': 'Construisons une fondation conçue pour la performance et la longévité.',
    'process.page.cta.button': 'Démarrer le projet',

    'process.step1.title': 'Découverte et alignement de la portée',
    'process.step1.description': 'Nous définissons les objectifs, confirmons les pages requises, clarifions les fonctionnalités et verrouillons la portée du projet avant le début de toute production.',
    'process.step1.deliverableLabel': 'Livrable',
    'process.step1.deliverableText': 'Plan du site approuvé et confirmation de la portée du projet',

    'process.step2.title': 'Confirmation du contenu et de la structure',
    'process.step2.description': 'Les actifs de marque, les textes, les images et les informations commerciales requises sont collectés et validés. Une fois approuvé, le contenu est gelé pour protéger le calendrier et la portée.',
    'process.step2.deliverableLabel': 'Livrable',
    'process.step2.deliverableText': 'Confirmation du gel du contenu et de la structure',

    'process.step3.title': 'Système de design et mise en page',
    'process.step3.description': 'Nous établissons la typographie, le système de couleurs, l\'espacement et les composants structurels avant de construire les pages.',
    'process.step3.deliverableLabel': 'Livrable',
    'process.step3.deliverableText': 'Direction visuelle et système de mise en page approuvés',

    'process.step4.title': 'Production Front-End',
    'process.step4.description': 'Les pages sont construites en tenant compte de la performance, de la réactivité et de l\'accessibilité. Le site web complet est achevé visuellement et structurellement.',
    'process.step4.deliverableLabel': 'Livrable',
    'process.step4.deliverableText': 'Front-end entièrement construit (pas encore intégré ou déployé)',

    'process.step5.title': 'Révision et raffinement',
    'process.step5.description': 'Le site web complet est présenté. Les retours structurés sont mis en œuvre dans le cadre de la portée de révision convenue.',
    'process.step5.deliverableLabel': 'Livrable',
    'process.step5.deliverableText': 'Front-end approuvé prêt pour l\'intégration ou le déploiement',

    'process.step6.title': 'Intégration de plateforme (Phase optionnelle)',
    'process.step6.description': 'Si nécessaire, nous connectons des systèmes de réservation, des paiements, des analyses ou d\'autres plateformes via une configuration structurée.',
    'process.step6.deliverableLabel': 'Livrable',
    'process.step6.deliverableText': 'Site web connecté et entièrement fonctionnel',

    'process.step7.title': 'Lancement et transfert',
    'process.step7.description': 'Nous déployons le site web en production et fournissons des conseils pour la gestion et les futures mises à jour.',
    'process.step7.deliverableLabel': 'Livrable',
    'process.step7.deliverableText': 'Site web en ligne et documentation de transfert',

    'process.step8.title': 'Croissance et optimisation',
    'process.step8.description': 'Surveillance des performances, raffinement et expansion structurée à mesure que votre entreprise évolue.',
    'process.step8.deliverableLabel': 'Livrable',
    'process.step8.deliverableText': 'Support continu et améliorations stratégiques',

    // About Page - Hero
    'about.hero.h1.part1': 'Nous construisons des',
    'about.hero.h1.highlight': 'fondations numériques',
    'about.hero.h1.part2': 'pour les entreprises en croissance.',
    'about.hero.longTermAsset': 'Actif à long terme',
    'about.hero.scalable': 'Évolutif',
    'about.hero.efficient': 'Efficace',
    'about.hero.measurable': 'Mesurable',
    'about.team.ana.roleShort': 'Co-fondatrice et développeuse Full-Stack',
    'about.team.ana.bioShort': 'Ana dirige l\'architecture frontend et le design stratégique. Avec une formation en marketing d\'entreprise, elle se concentre sur la création d\'expériences numériques raffinées et axées sur la conversion, alignées avec le positionnement de la marque et les objectifs de croissance.',
    'about.team.nisith.roleShort': 'Co-fondateur et développeur Full-Stack',
    'about.team.nisith.bioShort': 'Nisith se spécialise dans les systèmes backend et l\'infrastructure cloud. Son focus est l\'architecture évolutive, l\'optimisation des performances et la construction d\'environnements résilients conçus pour évoluer avec les entreprises qu\'ils soutiennent.',
    
    // Services Page - Full
    'services.hero.titleFull': 'Nos services',
    'services.hero.subtitleFull': 'Solutions numériques évolutives conçues pour élever, reconstruire et renforcer votre présence en ligne.',
    'services.slider.tab1': 'Sites Web',
    'services.slider.tab2': 'E-Commerce',
    'services.slider.tab3': 'Systèmes',
    'services.s1.title': 'Sites Web d\'Entreprise Personnalisés',
    'services.s1.desc': 'Conçus ou redessinés pour les entreprises avec des sites web obsolètes, sous-performants ou basés sur des modèles qui ont besoin d\'une présence numérique plus forte.',
    'services.s1.included': 'Ce qui est inclus',
    'services.s1.item1': 'Session de planification stratégique',
    'services.s1.item2': 'Design UI personnalisé',
    'services.s1.item3': 'Développement frontend',
    'services.s1.item4': 'Optimisation des performances',
    'services.s1.item5': 'Structure prête pour le référencement',
    'services.s1.idealFor': 'Idéal pour',
    'services.s1.ideal1': 'Entreprises redessinant leur site actuel',
    'services.s1.ideal2': 'Entreprises en cours de rebranding',
    'services.s1.ideal3': 'Entreprises de services ayant besoin de crédibilité',
    'services.s1.outcome': 'Résultat attendu',
    'services.s1.outcomeText': 'Un site web rapide et moderne qui renforce la confiance et augmente les demandes.',
    'services.s2.title': 'Sites E-Commerce',
    'services.s2.desc': 'Boutiques en ligne construites ou redessinées pour des expériences d\'achat fluides et une croissance évolutive, y compris les mises à niveau de performance Shopify.',
    'services.s2.included': 'Ce qui est inclus',
    'services.s2.item1': 'Planification de l\'architecture de la boutique',
    'services.s2.item2': 'Implémentation Shopify ou personnalisée',
    'services.s2.item3': 'Configuration de paiement sécurisé',
    'services.s2.item4': 'Configuration de la passerelle de paiement',
    'services.s2.item5': 'Structure produits et inventaire',
    'services.s2.idealFor': 'Idéal pour',
    'services.s2.ideal1': 'Entreprises migrant de thèmes obsolètes',
    'services.s2.ideal2': 'Boutiques avec de faibles conversions',
    'services.s2.ideal3': 'Marques élargissant leur offre de produits',
    'services.s2.outcome': 'Résultat attendu',
    'services.s2.outcomeText': 'Une boutique en ligne axée sur la conversion, construite pour la performance et la croissance.',
    'services.s3.title': 'Systèmes de Réservation & d\'Entreprise',
    'services.s3.desc': 'Systèmes intégrés qui rationalisent les opérations, automatisent les flux de travail et améliorent l\'expérience client.',
    'services.s3.included': 'Ce qui est inclus',
    'services.s3.item1': 'Intégration de réservation en ligne',
    'services.s3.item2': 'Systèmes de capture de prospects',
    'services.s3.item3': 'Automatisation des flux de travail',
    'services.s3.item4': 'Intégrations prêtes pour CRM',
    'services.s3.idealFor': 'Idéal pour',
    'services.s3.ideal1': 'Entreprises basées sur les services',
    'services.s3.ideal2': 'Entreprises dépendant de processus manuels',
    'services.s3.ideal3': 'Équipes ayant besoin d\'un meilleur suivi client',
    'services.s3.outcome': 'Résultat attendu',
    'services.s3.outcomeText': 'Opérations rationalisées et gestion client améliorée.',
    'services.process.title': 'Notre processus',
    'services.process.step1.title': 'Découverte',
    'services.process.step1.desc': 'Nous commençons par une consultation ciblée pour comprendre votre entreprise, vos objectifs et vos défis actuels. Des objectifs et une portée clairs sont définis avant tout travail de design.',
    'services.process.step2.title': 'Stratégie',
    'services.process.step2.desc': 'Nous structurons le flux utilisateur, la hiérarchie du contenu et la fondation technique pour assurer l\'alignement avec les performances et l\'évolutivité à long terme.',
    'services.process.step3.title': 'Design & Développement',
    'services.process.step3.desc': 'Nous concevons et construisons votre site web en pensant à la réactivité, la vitesse et la conversion. Des mises à jour structurées et des points de contrôle maintiennent le processus transparent.',
    'services.process.step4.title': 'Lancement & Optimisation',
    'services.process.step4.desc': 'Après les tests et le raffinement, nous déployons votre site web et surveillons les performances. Des améliorations continues assurent que votre présence numérique continue d\'évoluer.',
    'services.lifecycle_section.title': 'Curieux de savoir comment nous travaillons ?',
    'services.lifecycle_section.btn': 'Voir le cycle de vie du site web',
    'services.cta.title': 'Prêt à améliorer votre site web?',
    'services.cta.subtitle': 'Construisons une fondation numérique conçue pour des performances à long terme.',
    'services.cta.btn': 'Démarrer votre projet',
    
    // Portfolio Page - Full
    'portfolio.hero.titleFull': 'Projets sélectionnés',
    'portfolio.hero.subtitleFull': 'Conçus pour la performance. Construits pour évoluer.',
    'portfolio.category.label': 'Sites web créés par LifyX',
    'portfolio.featured': 'Projet en vedette',
    'portfolio.viewLive': 'Voir en direct',
    'portfolio.sourceCode': 'Code source',
    'portfolio.comingSoon': 'Bientôt disponible',
    'comingSoon.title': 'Bient\u00f4t disponible',
    'comingSoon.description': 'Nous mettons la touche finale \u00e0 ce projet. Revenez bient\u00f4t pour d\u00e9couvrir le r\u00e9sultat.',
    'comingSoon.backToPortfolio': 'Retour au Portfolio',
    'portfolio.project1.title': 'Solaris Cartagena',
    'portfolio.project1.desc': 'Plateforme de réservation d\'hôtel boutique de luxe avec visites virtuelles immersives et gestion fluide des réservations.',
    'portfolio.project2.title': 'Los Asados de Ruben',
    'portfolio.project2.desc': 'Site web de restaurant avec commande en ligne, réservation de tables et système de gestion de menu dynamique.',
    'portfolio.project3.title': 'Capitan Poop',
    'portfolio.project3.desc': 'Plateforme e-commerce pour sprays premium d\'élimination des odeurs de salle de bain avec vitrine produits et paiement fluide.',
    
    // Contact Page - Missing
    'contact.form.required': 'Veuillez compléter tous les champs obligatoires',
    'contact.faq.stillHave': 'Vous avez encore des questions?',
    'contact.faq.checkOut': 'Consultez nos questions fréquemment posées pour des réponses rapides aux questions courantes.',
    'contact.faq.visitPage': 'Visiter la page FAQ',
    
    // FAQ Page - Missing
    'faq.badge': 'Questions & Réponses',

    // About Page (existing)
    'about.hero.title': 'Qui sommes-nous',
    'about.hero.text': 'LifyX a été fondé par deux développeurs full-stack professionnels : Ana Zuluaga et Nisith Jayalath. Nous avons créé LifyX pour combler le fossé entre les petites entreprises et les solutions numériques de haute qualité.',
    
    'about.mission.title': 'Notre Philosophie',
    'about.mission.subtitle': 'Une présence numérique professionnelle est une infrastructure.',
    'about.mission.headingPart1': 'Une présence numérique professionnelle est une ',
    'about.mission.headingHighlight': 'infrastructure.',
    'about.mission.text': 'Nous abordons chaque projet comme un actif à long terme. La structure, la performance et la clarté sont prioritaires dès le premier jour pour garantir que chaque construction est évolutive, efficace et alignée sur des objectifs commerciaux mesurables.',
    'about.process.cta': 'Notre processus',
    
    'about.bento.item1.title': 'Actif à long terme',
    'about.bento.item1.desc': 'Construit pour durer et grandir avec votre entreprise. Pas seulement pour aujourd\'hui, mais pour les années à venir.',
    'about.bento.item2.title': 'Évolutif',
    'about.bento.item2.desc': 'Une infrastructure qui s\'étend sans se briser à mesure que vous grandissez.',
    'about.bento.item3.title': 'Efficace',
    'about.bento.item3.desc': 'Performance optimisée pour une vitesse maximale.',
    'about.bento.item4.title': 'Mesurable',
    'about.bento.item4.desc': 'Piloté par des données et des objectifs commerciaux clairs.',
    
    'about.goals.title': 'Ce que nous visons',
    'about.goals.goal1': 'Supprimer les barrières techniques pour les entrepreneurs',
    'about.goals.goal2': 'Simplifier la transformation numérique',
    'about.goals.goal3': 'Créer des plateformes qui soutiennent réellement la croissance',
    'about.goals.text': 'Nous nous concentrons sur l\'aide aux startups et aux petites entreprises pour établir crédibilité, visibilité, efficacité opérationnelle et évolutivité à long terme.',
    'about.goals.statement': 'Nous ne construisons pas simplement des sites web. Nous construisons des fondations numériques qui permettent aux entreprises de croître, de s\'adapter et de concurrencer sur les marchés modernes.',
    
    'about.values.title': 'Nos valeurs',
    'about.values.value1': 'Transparence',
    'about.values.value2': 'Fiabilité',
    'about.values.value3': 'Partenariats à long terme',
    'about.values.value4': 'Pensée orientée entreprise',
    'about.values.value5': 'Développement propre et maintenable',
    'about.values.value6': 'Mentalité de croissance continue',
    
    // About Page - Team
    'about.team.badge': 'Rencontrez l\'équipe',
    'about.team.title': 'Les personnes derrière LifyX',
    'about.team.subtitle': 'Deux développeurs full-stack expérimentés passionnés par la réussite en ligne des petites entreprises',
    'about.team.showSkills': 'Voir les compétences techniques',
    'about.team.hideSkills': 'Masquer les compétences techniques',
    'about.team.ana.role': 'Co-fondatrice et développeuse Full-Stack',
    'about.team.ana.subtitle': 'Formation en marketing d\'entreprise',
    'about.team.ana.bio': 'Ana apporte une combinaison unique d\'expertise technique et de compétences en marketing d\'entreprise à chaque projet. Elle se spécialise dans la création d\'interfaces belles et conviviales tout en comprenant l\'importance stratégique de l\'engagement des utilisateurs, de l\'optimisation des conversions et de la cohérence de la marque. Son expertise en marketing garantit que chaque site web fonctionne parfaitement et génère de vrais résultats commerciaux—vous aidant à attirer des clients, à établir la confiance et à développer votre présence en ligne.',
    'about.team.nisith.role': 'Co-fondateur et développeur Full-Stack',
    'about.team.nisith.subtitle': 'Expert en AWS et infrastructure cloud',
    'about.team.nisith.bio': 'Nisith se concentre sur des systèmes backend robustes, une architecture évolutive et des intégrations fluides. Avec une connaissance approfondie des relations AWS et de l\'infrastructure cloud, son expertise en technologies côté serveur et DevOps garantit que chaque application est sécurisée, performante et conçue pour évoluer. Il se spécialise dans l\'architecture de solutions cloud natives qui évoluent efficacement et réduisent les coûts opérationnels pour les entreprises.',
    
    // Services Page
    'services.hero.title': 'Ce que nous construisons',
    'services.hero.subtitle': 'Systèmes numériques personnalisés conçus pour les entreprises en croissance.',
    
    'services.category1.title': 'Sites Web d\'Entreprise Personnalisés',
    'services.category1.description': 'Sites web professionnels et performants conçus pour élever votre marque et convertir les visiteurs en clients.',
    'services.category1.item1': 'Design visuel personnalisé',
    'services.category1.item2': 'Développement mobile-first',
    'services.category1.item3': 'Mises en page axées sur la conversion',
    'services.category1.item4': 'Structure prête pour le référencement',
    'services.category1.item5': 'Performance rapide et optimisée',
    
    'services.category2.title': 'Sites E-Commerce',
    'services.category2.description': 'Boutiques en ligne conçues pour des expériences d\'achat fluides et une croissance évolutive.',
    'services.category2.item1': 'Configuration du catalogue produits',
    'services.category2.item2': 'Intégration de paiement sécurisé',
    'services.category2.item3': 'Configuration de la passerelle de paiement',
    'services.category2.item4': 'Structure prête pour l\'inventaire',
    'services.category2.item5': 'Pages produits optimisées pour la conversion',
    
    'services.category3.title': 'Systèmes de Réservation & d\'Entreprise',
    'services.category3.description': 'Systèmes intégrés qui rationalisent les opérations et améliorent l\'expérience client.',
    'services.category3.item1': 'Plateformes de réservation en ligne',
    'services.category3.item2': 'Systèmes de capture de prospects',
    'services.category3.item3': 'Gestion des contacts et des demandes',
    'services.category3.item4': 'Automatisation des flux de travail',
    'services.category3.item5': 'Intégrations CRM de base',
    
    'services.category4.title': 'Optimisation de Site Web & Croissance',
    'services.category4.description': 'Amélioration des performances, de la clarté et de l\'évolutivité au fil du temps.',
    'services.category4.item1': 'Optimisation de la vitesse',
    'services.category4.item2': 'Améliorations UX',
    'services.category4.item3': 'Raffinement de la conversion',
    'services.category4.item4': 'Expansion des fonctionnalités',
    'services.category4.item5': 'Support technique continu',
    
    // Website Lifecycle
    'services.lifecycle.title': 'Cycle de vie du site web LifyX',
    'services.lifecycle.subtitle': 'De l\'idée à la mise en ligne — un calendrier de croissance de feuille',
    'services.lifecycle.totalTime': 'Du début à la mise en ligne du site web: ≈ 2.5 à 3 semaines au total',
    
    'services.lifecycle.phase1.icon': '🌰',
    'services.lifecycle.phase1.name': 'Graine',
    'services.lifecycle.phase1.title': 'Découverte & Objectifs',
    'services.lifecycle.phase1.duration': 'Jour 1–2',
    'services.lifecycle.phase1.description': 'Nous nous alignons sur votre vision pour définir des objectifs commerciaux clairs, la portée et la direction stratégique pour une présence numérique à fort impact.',
    'services.lifecycle.phase1.output': 'Portée claire et structure du site',
    
    'services.lifecycle.phase2.icon': '🌱',
    'services.lifecycle.phase2.name': 'Pousse',
    'services.lifecycle.phase2.title': 'Design & Structure',
    'services.lifecycle.phase2.duration': 'Jour 3–5',
    'services.lifecycle.phase2.description': 'Nous concevons l\'architecture visuelle et l\'expérience utilisateur, créant des prototypes haute fidélité qui équilibrent esthétique et convivialité axée sur la conversion.',
    'services.lifecycle.phase2.output': 'Structure visuelle (maquette / mise en page)',
    
    'services.lifecycle.phase3.icon': '🌿',
    'services.lifecycle.phase3.name': 'Petite Feuille',
    'services.lifecycle.phase3.title': 'Développement',
    'services.lifecycle.phase3.duration': 'Semaine 1–2',
    'services.lifecycle.phase3.description': 'Nos ingénieurs construisent une fondation robuste et évolutive utilisant des technologies modernes, assurant performance, sécurité et fonctionnalité fluide sur tous les appareils.',
    'services.lifecycle.phase3.output': 'Site web fonctionnel (pas encore public)',
    
    'services.lifecycle.phase4.icon': '🍃',
    'services.lifecycle.phase4.name': 'Feuille en Croissance',
    'services.lifecycle.phase4.title': 'Intégration & Logique',
    'services.lifecycle.phase4.duration': '2–4 jours',
    'services.lifecycle.phase4.description': 'Nous intégrons des systèmes complexes et une logique de contenu dynamique, assurant que votre plateforme fonctionne intelligemment avec un flux de données fluide.',
    'services.lifecycle.phase4.output': 'Tout change de langue correctement',
    
    'services.lifecycle.phase5.icon': '🍃',
    'services.lifecycle.phase5.name': 'Grande Feuille Saine',
    'services.lifecycle.phase5.title': 'Assurance Qualité',
    'services.lifecycle.phase5.duration': '2–3 jours',
    'services.lifecycle.phase5.description': 'Des tests rigoureux multiplateformes assurent une expérience sans faille, optimisant la vitesse, la réactivité et l\'accessibilité avant la révélation finale.',
    'services.lifecycle.phase5.output': 'Site prêt à la mise en ligne',
    
    'services.lifecycle.phase6.icon': '🌿🍃',
    'services.lifecycle.phase6.name': 'Feuille Mature',
    'services.lifecycle.phase6.title': 'Lancement & Transfert',
    'services.lifecycle.phase6.duration': '1 jour',
    'services.lifecycle.phase6.description': 'Nous gérons un déploiement fluide en production et fournissons les outils et connaissances nécessaires pour permettre à votre équipe de gérer la plateforme.',
    'services.lifecycle.phase6.output': 'Le site web est en ligne',
    
    'services.lifecycle.phase7.icon': '🍂',
    'services.lifecycle.phase7.name': 'Nouvelles Feuilles',
    'services.lifecycle.phase7.title': 'Croissance & Évolution',
    'services.lifecycle.phase7.duration': 'Continu',
    'services.lifecycle.phase7.description': 'Notre partenariat se poursuit avec une optimisation continue, une surveillance de la sécurité et une évolution des fonctionnalités pour garder votre actif numérique en avance.',
    'services.lifecycle.phase7.output': 'Soutien continu & croissance',
    
    // Portfolio Page
    'portfolio.hero.title': 'Notre travail',
    'portfolio.hero.subtitle': 'Une galerie organisée de projets axés sur les petites entreprises, les sociétés de services, les startups et les plateformes numériques',
    'portfolio.coming.title': 'Portfolio à venir',
    'portfolio.coming.text': 'Nous présentons actuellement notre meilleur travail. Revenez bientôt pour voir nos études de cas et nos histoires de réussite.',
    
    // Contact Page
    'contact.hero.title': 'Discutons de votre projet',
    'contact.hero.subtitle': 'Parlez-nous de votre entreprise et de ce que vous souhaitez améliorer. Nous examinerons vos détails et vous répondrons avec les prochaines étapes.',
    
    'contact.form.fullName': 'Nom complet',
    'contact.form.businessName': 'Nom de l\'entreprise',
    'contact.form.email': 'Adresse e-mail',
    'contact.form.website': 'Site web actuel (optionnel)',
    
    'contact.form.projectType': 'Type de projet',
    'contact.form.projectType.redesign': 'Refonte de site web',
    'contact.form.projectType.new': 'Nouveau site web',
    'contact.form.projectType.ecommerce': 'E-Commerce',
    'contact.form.projectType.booking': 'Système de réservation / d\'entreprise',
    'contact.form.projectType.unsure': 'Pas encore sûr',
    
    'contact.form.budget': 'Budget estimé',
    'contact.form.budget.range1': '2 000 $ – 3 000 $',
    'contact.form.budget.range2': '3 000 $ – 5 000 $',
    'contact.form.budget.range3': '5 000 $ +',
    'contact.form.budget.discuss': 'Préfère discuter',
    
    'contact.form.details': 'Détails du projet',
    'contact.form.detailsPlaceholder': 'Décrivez brièvement vos objectifs, défis ou ce que vous aimeriez améliorer.',
    
    'contact.form.submit': 'Lancer la conversation',
    'contact.form.privacy': 'En soumettant ce formulaire, vous acceptez notre politique de confidentialité.',
    
    'contact.cta.title': 'Vous préférez parler directement?',
    'contact.cta.button': 'Planifier un appel d\'intro de 20 minutes',
    
    'contact.success.title': 'Merci',
    'contact.success.message': 'Nous avons bien reçu votre message et examinerons vos détails sous peu. Si votre projet correspond à notre champ d\'action, nous vous contacterons avec les prochaines étapes.',
    'contact.success.button': 'Retour à l\'accueil',
    
    // Contact Page - FAQ
    'contact.faq.title': 'Foire aux questions',
    'contact.faq.subtitle': 'Réponses rapides aux questions courantes sur le travail avec LifyX',
    'contact.faq.q1': 'Combien de temps faut-il pour construire un site web?',
    'contact.faq.a1': 'La plupart des projets prennent 2-4 semaines du début à la mise en ligne. Le calendrier dépend de la complexité des fonctionnalités, du nombre de pages et des cycles de feedback du client. Nous fournissons un calendrier détaillé lors de notre premier appel de découverte.',
    'contact.faq.q2': 'Qu\'est-ce qui est inclus dans vos services de développement web?',
    'contact.faq.a2': 'Nous fournissons un développement full-stack incluant un design visuel personnalisé, des mises en page réactives, un support multilingue (anglais, français, espagnol), des formulaires de contact, des pages légales, une intégration de chatbot IA, des systèmes d\'entreprise et un soutien post-mise en ligne. Chaque projet est adapté à vos besoins spécifiques.',
    'contact.faq.q3': 'Offrez-vous un soutien et une maintenance à long terme?',
    'contact.faq.a3': 'Oui! Nous offrons des packages de maintenance à long terme qui incluent des mises à jour de sécurité, des mises à jour de contenu, des ajouts de fonctionnalités, un suivi des performances et un soutien technique. Nous croyons en des partenariats à long terme avec nos clients.',
    'contact.faq.q4': 'Pouvez-vous travailler avec des clients dans différents pays?',
    'contact.faq.a4': 'Absolument! Nous travaillons avec des clients à l\'échelle mondiale. Nos capacités multilingues (anglais, français, espagnol) et notre approche à distance facilitent la collaboration internationale. Nous nous adaptons à votre fuseau horaire pour les appels et la communication.',
    'contact.faq.q5': 'Quelles technologies utilisez-vous?',
    'contact.faq.a5': 'Nous utilisons des technologies modernes et fiables, y compris React, TypeScript, Tailwind CSS, Node.js et diverses solutions de base de données. Nous choisissons la pile technique en fonction de vos besoins spécifiques, de vos exigences d\'échelle et de vos considérations de maintenance à long terme.',
    'contact.faq.q6': 'Que se passe-t-il après que j\'ai soumis le formulaire de contact?',
    'contact.faq.a6': 'Dans les 24 heures, notre équipe examinera les détails de votre projet et vous contactera pour planifier un appel de découverte. Lors de cet appel, nous discuterons de vos objectifs, de votre calendrier, de votre budget et créerons une proposition personnalisée pour votre projet. Il n\'y a pas d\'obligation de poursuivre.',
    'contact.faq.cta.title': 'Vous avez encore des questions?',
    'contact.faq.cta.subtitle': 'Notre équipe est là pour vous aider. Envoyez-nous votre question et nous vous répondrons rapidement.',
    'contact.faq.cta.response': 'Nous répondons généralement dans les 24 heures',
    
    // Chatbot
    'chatbot.title': 'Discutez avec nous',
    'chatbot.placeholder': 'Posez-nous une question...',
    'chatbot.send': 'Envoyer',
    'chatbot.welcome': 'Bonjour! Comment pouvons-nous vous aider aujourd\'hui?',
    'chatbot.close': 'Fermer le chat',
    'chatbot.open': 'Discutez avec nous',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portafolio',
    'nav.contact': 'Contacto',
    'nav.faq': 'Preguntas frecuentes',
    'nav.cta': 'Iniciar un proyecto',
    
    // Header
    'header.darkMode': 'Modo oscuro',
    'header.lightMode': 'Modo claro',
    'header.language': 'Idioma',
    
    // Footer
    'footer.description': 'Un estudio web full-stack boutique que ayuda a pequeñas empresas a construir plataformas digitales modernas, escalables y confiables.',
    'footer.tagline': 'Diseñado para el crecimiento. Pensado para la claridad.',
    'footer.backToTop': 'Volver arriba',
    'footer.privacyPolicy': 'Política de privacidad',
    'footer.termsConditions': 'Términos y condiciones',
    'footer.quickLinks': 'Enlaces rápidos',
    'footer.legal': 'Legal',
    'footer.contact': 'Contacto',
    'footer.workingHours': 'Horario de trabajo',
    'footer.workingHoursValue': 'Lunes – Viernes\n9:00 AM – 6:00 PM',
    'footer.copyright': '© 2026 LifyX. Diseñado con precisión. Todos los derechos reservados.',
    'footer.language': 'Idioma',
    'footer.cta.title': '¿Listo para construir con claridad?',
    'footer.cta.description': 'Creemos algo diseñado para crecer.',
    'footer.cta.button': 'Comenzar',
    
    // Legal
    'legal.privacy': 'Política de privacidad',
    'legal.terms': 'Términos y condiciones',
    'legal.cookies': 'Política de cookies',
    'legal.dataProtection': 'Protección de datos',
    'legal.acceptable': 'Uso aceptable',
    'legal.disclaimer': 'Descargo de responsabilidad',
    
    // Home Page - New Hero
    'home.hero2.title': 'Sitios web personalizados',
    'home.hero2.titleHighlight': 'Diseñados para el Rendimiento',
    'home.hero2.subtitle': 'Rediseñamos, reconstruimos y desarrollamos sitios web de alto rendimiento, alineados con su marca, que elevan la credibilidad, mejoran la experiencia del usuario y convierten visitantes en clientes.',
    
    // Home Page - Problem Section
    'home.problem.title': '¿Su sitio web actual está trabajando en su contra?',
    'home.problem.pain1': 'Rendimiento lento.',
    'home.problem.pain2': 'Diseño obsoleto.',
    'home.problem.pain3': 'Bajas conversiones.',
    'home.problem.statement': 'Nosotros lo hacemos mejor.',
    
    // Home Page - Services Cards
    'home.cards.title': 'Lo que construimos',
    'home.cards.card1.title': 'Sitios Web Empresariales',
    'home.cards.card1.desc': 'Sitios web profesionales y de alto rendimiento construidos o reconstruidos para posicionar su negocio con claridad y autoridad.',
    'home.cards.card1.item1': 'Diseño personalizado alineado a su marca',
    'home.cards.card1.item2': 'Desarrollo responsive mobile-first',
    'home.cards.card1.item3': 'Estructura lista para SEO',
    'home.cards.card1.item4': 'Rendimiento rápido y optimizado',
    'home.cards.card2.title': 'Sitios E-Commerce',
    'home.cards.card2.desc': 'Tiendas en línea escalables diseñadas para experiencias de compra fluidas, incluyendo rediseño y optimización de Shopify.',
    'home.cards.card2.item1': 'Integración de pago seguro',
    'home.cards.card2.item2': 'Configuración del catálogo de productos',
    'home.cards.card2.item3': 'Configuración de pasarela de pago',
    'home.cards.card2.item4': 'Páginas de producto enfocadas en conversión',
    'home.cards.card3.title': 'Sistemas de Reservas y Empresariales',
    'home.cards.card3.desc': 'Herramientas integradas que optimizan operaciones y mejoran la experiencia del cliente.',
    'home.cards.card3.item1': 'Plataformas de reservas en línea',
    'home.cards.card3.item2': 'Sistemas de captura de leads',
    'home.cards.card3.item3': 'Gestión de contactos y consultas',
    'home.cards.card3.item4': 'Automatización de flujos de trabajo',
    'home.cards.learnMore': 'Más información',
    
    // Home Page - Trust Section
    'home.trust.title': 'Construido para el rendimiento y la longevidad',
    'home.trust.subtitle': 'Diseñamos fundaciones digitales que escalan con su negocio, garantizando velocidad, seguridad y estabilidad.',
    'home.trust.item1.title': 'Arquitectura confiable',
    'home.trust.item1.desc': 'Estructurada para la estabilidad y el mantenimiento.',
    'home.trust.item2.title': 'Velocidad optimizada',
    'home.trust.item2.desc': 'Tiempos de carga rápidos para maximizar el engagement.',
    'home.trust.item3.title': 'Proceso claro',
    'home.trust.item3.desc': 'Ejecución estructurada del concepto al lanzamiento.',
    'home.trust.item4.title': 'Soporte continuo',
    'home.trust.item4.desc': 'Mejora continua a medida que crece.',
    
    // Home Page - About Preview
    'home.about.title': 'Quiénes somos',
    'home.about.text': 'LifyX es un estudio digital boutique fundado por Ana Zuluaga y Nisith Jayalath. Nos especializamos en crear sitios web escalables y de alto rendimiento para empresas listas para establecer una presencia digital más fuerte.',
    'home.about.cta': 'Más sobre nosotros',
    
    // Home Page - Final CTA
    'home.cta.title': '¿Listo para crear un sitio web que trabaje tan duro como usted?',
    'home.cta.subtitle': 'Creemos una fundación digital diseñada para el crecimiento a largo plazo.',
    'home.cta.btn': 'Iniciar su proyecto',

    // Home Page (legacy keys)
    'home.hero.title': 'Haga crecer su negocio con una presencia digital poderosa',
    'home.hero.subtitle': 'Diseñamos y desarrollamos sitios web profesionales, escalables e interactivos para pequeñas empresas listas para crecer.',
    'home.hero.cta1': 'Iniciar su proyecto',
    'home.hero.cta2': 'Ver nuestro trabajo',
    
    'home.values.title1': 'Diseño personalizado para su marca',
    'home.values.desc1': 'Diseños alineados con la identidad de su negocio',
    'home.values.title2': 'Desarrollo Frontend y Backend completo',
    'home.values.desc2': 'Soluciones técnicas completas desde la interfaz hasta la infraestructura',
    'home.values.title3': 'Sistemas empresariales listos para crecer',
    'home.values.desc3': 'Plataformas escalables que evolucionan con su negocio',
    'home.values.title4': 'Experiencias interactivas y modernas',
    'home.values.desc4': 'Interfaces atractivas con animaciones e interacciones fluidas',
    
    'home.intro.title': 'Quién es LifyX',
    'home.intro.text': 'LifyX es un estudio web full-stack fundado por dos desarrolladores profesionales, Ana Zuluaga y Nisith Jayalath, enfocado en ayudar a startups y pequeñas empresas a crecer a través de plataformas digitales modernas y confiables.',
    'home.intro.cta': 'Acerca de LifyX',
    
    'home.services.title': 'Lo que construimos',
    'home.services.block1.title': 'Experiencia Web',
    'home.services.block1.items': '• Interfaces limpias\n• Diseños responsivos\n• Elementos interactivos\n• Narrativa de marca',
    'home.services.block2.title': 'Sistemas empresariales',
    'home.services.block2.items': '• Reservas y consultas\n• Gestión de datos de clientes\n• Paneles de control\n• Flujos de trabajo',
    'home.services.block3.title': 'Plataformas de crecimiento',
    'home.services.block3.items': '• Infraestructura escalable\n• Integraciones\n• Expansión de funcionalidades',
    'home.services.cta': 'Explorar servicios',
    
    'home.immersive.title': 'Experiencia interactiva',
    'home.immersive.text': 'Un área visualmente atractiva reservada para contenido interactivo inmersivo y 3D futuro que mejora la narrativa y la presencia de marca.',
    
    'home.why.title': 'Por qué LifyX',
    'home.why.point1': 'Trabaja directamente con desarrolladores',
    'home.why.point2': 'Soluciones personalizadas, no plantillas',
    'home.why.point3': 'Estrategia enfocada en pequeñas empresas',
    'home.why.point4': 'Planificación de crecimiento incluida',
    'home.why.statement': 'Construimos fundaciones digitales que crecen con su negocio.',
    'home.why.cta': 'Iniciar su proyecto',
    
    'home.portfolio.title': 'Nuestro trabajo',
    'home.portfolio.cta': 'Ver portafolio',
    
    'home.finalCta.title': '¿Listo para hacer crecer su negocio con un sitio web moderno?',
    'home.finalCta.btn1': 'Iniciar un proyecto',
    'home.finalCta.btn2': 'Contáctenos',
    
    // Process Page - Lifecycle
    'process.page.title': 'Ciclo de vida del sitio web LifyX',
    'process.page.subtitle': 'Del concepto al despliegue — estructurado, controlado y enfocado en el rendimiento.',
    'process.page.backToHome': 'Volver al Inicio',
    'process.page.cta.title': '¿Listo para comenzar el ciclo de vida?',
    'process.page.cta.subtitle': 'Construyamos una base diseñada para el rendimiento y la longevidad.',
    'process.page.cta.button': 'Iniciar Proyecto',

    'process.step1.title': 'Descubrimiento y Alineación del Alcance',
    'process.step1.description': 'Definimos objetivos, confirmamos las páginas requeridas, aclaramos características y bloqueamos el alcance del proyecto antes de que comience cualquier producción.',
    'process.step1.deliverableLabel': 'Entregable',
    'process.step1.deliverableText': 'Mapa del sitio aprobado y confirmación del alcance del proyecto',

    'process.step2.title': 'Confirmación de Contenido y Estructura',
    'process.step2.description': 'Se recopilan y validan los activos de marca, textos, imágenes e información comercial requerida. Una vez aprobado, el contenido se congela para proteger el cronograma y el alcance.',
    'process.step2.deliverableLabel': 'Entregable',
    'process.step2.deliverableText': 'Confirmación de congelación de contenido y estructura',

    'process.step3.title': 'Sistema de Diseño y Maquetación',
    'process.step3.description': 'Establecemos tipografía, sistema de colores, espaciado y componentes estructurales antes de construir cualquier página.',
    'process.step3.deliverableLabel': 'Entregable',
    'process.step3.deliverableText': 'Dirección visual y sistema de maquetación aprobados',

    'process.step4.title': 'Producción Front-End',
    'process.step4.description': 'Las páginas se construyen teniendo en cuenta el rendimiento, la capacidad de respuesta y la accesibilidad. El sitio web completo se completa visual y estructuralmente.',
    'process.step4.deliverableLabel': 'Entregable',
    'process.step4.deliverableText': 'Front-end completamente construido (aún no integrado o desplegado)',

    'process.step5.title': 'Revisión y Refinamiento',
    'process.step5.description': 'Se presenta el sitio web completo. La retroalimentación estructurada se implementa dentro del alcance de revisión acordado.',
    'process.step5.deliverableLabel': 'Entregable',
    'process.step5.deliverableText': 'Front-end aprobado listo para integración o despliegue',

    'process.step6.title': 'Integración de Plataforma (Fase Opcional)',
    'process.step6.description': 'Si es necesario, conectamos sistemas de reservas, pagos, análisis u otras plataformas a través de una configuración estructurada.',
    'process.step6.deliverableLabel': 'Entregable',
    'process.step6.deliverableText': 'Sitio web conectado y completamente funcional',

    'process.step7.title': 'Lanzamiento y Entrega',
    'process.step7.description': 'Desplegamos el sitio web en producción y proporcionamos orientación para la gestión y futuras actualizaciones.',
    'process.step7.deliverableLabel': 'Entregable',
    'process.step7.deliverableText': 'Sitio web en vivo y documentación de entrega',

    'process.step8.title': 'Crecimiento y Optimización',
    'process.step8.description': 'Monitoreo de rendimiento, refinamiento y expansión estructurada a medida que su negocio evoluciona.',
    'process.step8.deliverableLabel': 'Entregable',
    'process.step8.deliverableText': 'Soporte continuo y mejoras estratégicas',

    // About Page - Hero
    'about.hero.h1.part1': 'Construimos',
    'about.hero.h1.highlight': 'fundaciones digitales',
    'about.hero.h1.part2': 'para empresas en crecimiento.',
    'about.hero.longTermAsset': 'Activo a largo plazo',
    'about.hero.scalable': 'Escalable',
    'about.hero.efficient': 'Eficiente',
    'about.hero.measurable': 'Medible',
    'about.team.ana.roleShort': 'Co-fundadora y desarrolladora Full-Stack',
    'about.team.ana.bioShort': 'Ana lidera la arquitectura frontend y el diseño estratégico. Con formación en marketing empresarial, se enfoca en crear experiencias digitales refinadas y orientadas a la conversión, alineadas con el posicionamiento de marca y los objetivos de crecimiento.',
    'about.team.nisith.roleShort': 'Co-fundador y desarrollador Full-Stack',
    'about.team.nisith.bioShort': 'Nisith se especializa en sistemas backend e infraestructura en la nube. Su enfoque es la arquitectura escalable, la optimización del rendimiento y la construcción de entornos resilientes diseñados para evolucionar con las empresas que respaldan.',
    
    // Services Page - Full
    'services.hero.titleFull': 'Nuestros servicios',
    'services.hero.subtitleFull': 'Soluciones digitales escalables diseñadas para elevar, reconstruir y fortalecer su presencia en línea.',
    'services.slider.tab1': 'Sitios Web',
    'services.slider.tab2': 'E-Commerce',
    'services.slider.tab3': 'Sistemas',
    'services.s1.title': 'Sitios Web Empresariales Personalizados',
    'services.s1.desc': 'Diseñados o rediseñados para empresas con sitios web obsoletos, de bajo rendimiento o basados en plantillas que necesitan una presencia digital más fuerte.',
    'services.s1.included': 'Qué incluye',
    'services.s1.item1': 'Sesión de planificación estratégica',
    'services.s1.item2': 'Diseño UI personalizado',
    'services.s1.item3': 'Desarrollo frontend',
    'services.s1.item4': 'Optimización del rendimiento',
    'services.s1.item5': 'Estructura lista para SEO',
    'services.s1.idealFor': 'Ideal para',
    'services.s1.ideal1': 'Empresas rediseñando su sitio actual',
    'services.s1.ideal2': 'Empresas en proceso de rebranding',
    'services.s1.ideal3': 'Empresas de servicios que necesitan credibilidad',
    'services.s1.outcome': 'Resultado esperado',
    'services.s1.outcomeText': 'Un sitio web rápido y moderno que fortalece la confianza y aumenta las consultas.',
    'services.s2.title': 'Sitios E-Commerce',
    'services.s2.desc': 'Tiendas en línea construidas o rediseñadas para experiencias de compra fluidas y crecimiento escalable, incluyendo mejoras de rendimiento de Shopify.',
    'services.s2.included': 'Qué incluye',
    'services.s2.item1': 'Planificación de la arquitectura de la tienda',
    'services.s2.item2': 'Implementación Shopify o personalizada',
    'services.s2.item3': 'Configuración de pago seguro',
    'services.s2.item4': 'Configuración de pasarela de pago',
    'services.s2.item5': 'Estructura de productos e inventario',
    'services.s2.idealFor': 'Ideal para',
    'services.s2.ideal1': 'Empresas migrando de temas obsoletos',
    'services.s2.ideal2': 'Tiendas con bajas conversiones',
    'services.s2.ideal3': 'Marcas expandiendo su oferta de productos',
    'services.s2.outcome': 'Resultado esperado',
    'services.s2.outcomeText': 'Una tienda en línea enfocada en conversión, construida para el rendimiento y el crecimiento.',
    'services.s3.title': 'Sistemas de Reservas y Empresariales',
    'services.s3.desc': 'Sistemas integrados que optimizan operaciones, automatizan flujos de trabajo y mejoran la experiencia del cliente.',
    'services.s3.included': 'Qué incluye',
    'services.s3.item1': 'Integración de reservas en línea',
    'services.s3.item2': 'Sistemas de captura de leads',
    'services.s3.item3': 'Automatización de flujos de trabajo',
    'services.s3.item4': 'Integraciones listas para CRM',
    'services.s3.idealFor': 'Ideal para',
    'services.s3.ideal1': 'Empresas basadas en servicios',
    'services.s3.ideal2': 'Empresas que dependen de procesos manuales',
    'services.s3.ideal3': 'Equipos que necesitan mejor seguimiento de clientes',
    'services.s3.outcome': 'Resultado esperado',
    'services.s3.outcomeText': 'Operaciones optimizadas y gestión de clientes mejorada.',
    'services.process.title': 'Nuestro proceso',
    'services.process.step1.title': 'Descubrimiento',
    'services.process.step1.desc': 'Comenzamos con una consulta enfocada para entender su negocio, objetivos y desafíos actuales. Se definen objetivos claros y alcance antes de cualquier trabajo de diseño.',
    'services.process.step2.title': 'Estrategia',
    'services.process.step2.desc': 'Estructuramos el flujo de usuario, la jerarquía de contenido y la fundación técnica para asegurar la alineación con el rendimiento y la escalabilidad a largo plazo.',
    'services.process.step3.title': 'Diseño y Desarrollo',
    'services.process.step3.desc': 'Diseñamos y construimos su sitio web pensando en la capacidad de respuesta, la velocidad y la conversión. Actualizaciones estructuradas y puntos de control mantienen el proceso transparente.',
    'services.process.step4.title': 'Lanzamiento y Optimización',
    'services.process.step4.desc': 'Después de las pruebas y el refinamiento, desplegamos su sitio web y monitoreamos el rendimiento. Las mejoras continuas aseguran que su presencia digital siga evolucionando.',
    'services.lifecycle_section.title': '¿Curioso sobre cómo trabajamos?',
    'services.lifecycle_section.btn': 'Ver Ciclo de Vida del Sitio Web',
    'services.cta.title': '¿Listo para mejorar su sitio web?',
    'services.cta.subtitle': 'Construyamos una fundación digital diseñada para el rendimiento a largo plazo.',
    'services.cta.btn': 'Iniciar su proyecto',
    
    // Portfolio Page - Full
    'portfolio.hero.titleFull': 'Proyectos seleccionados',
    'portfolio.hero.subtitleFull': 'Construidos para el rendimiento. Diseñados para escalar.',
    'portfolio.category.label': 'Sitios web creados por LifyX',
    'portfolio.featured': 'Proyecto destacado',
    'portfolio.viewLive': 'Ver en vivo',
    'portfolio.sourceCode': 'Código fuente',
    'portfolio.comingSoon': 'Próximamente',
    'comingSoon.title': 'Pr\u00f3ximamente',
    'comingSoon.description': 'Estamos dando los toques finales a este proyecto. Vuelve pronto para ver el resultado.',
    'comingSoon.backToPortfolio': 'Volver al Portafolio',
    'portfolio.project1.title': 'Solaris Cartagena',
    'portfolio.project1.desc': 'Plataforma de reserva de hotel boutique de lujo con recorridos virtuales inmersivos y gestión fluida de reservaciones.',
    'portfolio.project2.title': 'Los Asados de Ruben',
    'portfolio.project2.desc': 'Sitio web de restaurante con pedidos en línea, reservaciones de mesa y sistema de gestión de menú dinámico.',
    'portfolio.project3.title': 'Capitan Poop',
    'portfolio.project3.desc': 'Plataforma e-commerce para sprays premium de eliminación de olores de baño con exhibición de productos y pago fluido.',
    
    // Contact Page - Missing
    'contact.form.required': 'Por favor complete todos los campos obligatorios',
    'contact.faq.stillHave': '¿Todavía tiene preguntas?',
    'contact.faq.checkOut': 'Consulte nuestras preguntas frecuentes para respuestas rápidas a consultas comunes.',
    'contact.faq.visitPage': 'Visitar página de FAQ',
    
    // FAQ Page - Missing
    'faq.badge': 'Preguntas y Respuestas',

    // About Page (existing)
    'about.hero.title': 'Quiénes somos',
    'about.hero.text': 'LifyX fue fundado por dos desarrolladores full-stack profesionales: Ana Zuluaga y Nisith Jayalath. Creamos LifyX para cerrar la brecha entre las pequeñas empresas y las soluciones digitales de alta calidad.',
    
    'about.mission.title': 'Nuestra Filosofía',
    'about.mission.subtitle': 'Una presencia digital profesional es infraestructura.',
    'about.mission.headingPart1': 'Una presencia digital profesional es ',
    'about.mission.headingHighlight': 'infraestructura.',
    'about.mission.text': 'Abordamos cada proyecto como un activo a largo plazo. La estructura, el rendimiento y la claridad se priorizan desde el primer día para garantizar que cada construcción sea escalable, eficiente y esté alineada con objetivos comerciales medibles.',
    'about.process.cta': 'Nuestro proceso',
    
    'about.bento.item1.title': 'Activo a largo plazo',
    'about.bento.item1.desc': 'Construido para durar y crecer con su negocio. No solo para hoy, sino para los años venideros.',
    'about.bento.item2.title': 'Escalable',
    'about.bento.item2.desc': 'Infraestructura que se expande sin romperse a medida que crece.',
    'about.bento.item3.title': 'Eficiente',
    'about.bento.item3.desc': 'Rendimiento optimizado para máxima velocidad.',
    'about.bento.item4.title': 'Medible',
    'about.bento.item4.desc': 'Impulsado por datos y objetivos comerciales claros.',
    
    'about.goals.title': 'Lo que buscamos lograr',
    'about.goals.goal1': 'Eliminar barreras técnicas para emprendedores',
    'about.goals.goal2': 'Simplificar la transformación digital',
    'about.goals.goal3': 'Crear plataformas que realmente apoyen el crecimiento empresarial',
    'about.goals.text': 'Nos enfocamos en ayudar a startups y pequeñas empresas a establecer credibilidad, visibilidad, eficiencia operativa y escalabilidad a largo plazo.',
    'about.goals.statement': 'No solo construimos sitios web. Construimos fundaciones digitales que permiten a las empresas crecer, adaptarse y competir en mercados modernos.',
    
    'about.values.title': 'Nuestros valores',
    'about.values.value1': 'Transparencia',
    'about.values.value2': 'Confiabilidad',
    'about.values.value3': 'Asociaciones a largo plazo',
    'about.values.value4': 'Pensamiento orientado al negocio',
    'about.values.value5': 'Desarrollo limpio y mantenible',
    'about.values.value6': 'Mentalidad de crecimiento continuo',
    
    // About Page - Team
    'about.team.badge': 'Conozca al equipo',
    'about.team.title': 'Las personas detrás de LifyX',
    'about.team.subtitle': 'Dos desarrolladores full-stack experimentados apasionados por ayudar a las pequeñas empresas a tener éxito en línea',
    'about.team.showSkills': 'Ver habilidades técnicas',
    'about.team.hideSkills': 'Ocultar habilidades técnicas',
    'about.team.ana.role': 'Co-fundadora y desarrolladora Full-Stack',
    'about.team.ana.subtitle': 'Formación en marketing empresarial',
    'about.team.ana.bio': 'Ana aporta una combinación única de experiencia técnica y conocimientos de marketing empresarial a cada proyecto. Se especializa en crear interfaces hermosas y fáciles de usar mientras comprende la importancia estratégica del compromiso del usuario, la optimización de conversiones y la coherencia de la marca. Su formación en marketing garantiza que cada sitio web no solo funcione perfectamente, sino que también genere resultados comerciales reales—ayudándole a atraer clientes, generar confianza y hacer crecer su presencia en línea.',
    'about.team.nisith.role': 'Co-fundador y desarrollador Full-Stack',
    'about.team.nisith.subtitle': 'Experto en AWS e infraestructura en la nube',
    'about.team.nisith.bio': 'Nisith se enfoca en sistemas backend robustos, arquitectura escalable e integraciones fluidas. Con un profundo conocimiento de las relaciones de AWS y la infraestructura en la nube, su experiencia en tecnologías del lado del servidor y DevOps garantiza que cada aplicación sea segura, eficiente y construida para crecer. Se especializa en arquitecturas de soluciones nativas en la nube que escalan eficientemente y reducen los costos operativos para las empresas.',
    
    // Services Page
    'services.hero.title': 'Nuestros servicios',
    'services.hero.subtitle': 'Soluciones digitales integrales para empresas en crecimiento',
    
    'services.category1.title': 'Diseño y experiencia web',
    'services.category1.item1': 'Diseño visual personalizado',
    'services.category1.item2': 'Diseños alineados con la marca',
    'services.category1.item3': 'Experiencia de usuario responsiva',
    'services.category1.item4': 'Interfaces interactivas',
    'services.category1.item5': 'Optimización de accesibilidad y usabilidad',
    
    'services.category2.title': 'Desarrollo Web Full-Stack',
    'services.category2.item1': 'Desarrollo front-end',
    'services.category2.item2': 'Sistemas e infraestructura back-end',
    'services.category2.item3': 'Paneles de administración y tableros personalizados',
    'services.category2.item4': 'Flujos de trabajo de automatización empresarial',
    
    'services.category3.title': 'Sistemas empresariales e integraciones',
    'services.category3.item1': 'Sistemas de contacto y leads',
    'services.category3.item2': 'Plataformas de reservas y citas',
    'services.category3.item3': 'Flujos de pago y servicios',
    'services.category3.item4': 'Gestión de datos de clientes',
    'services.category3.item5': 'Integraciones con terceros',
    
    'services.category4.title': 'Crecimiento y optimización',
    'services.category4.item1': 'Optimización del rendimiento',
    'services.category4.item2': 'Mantenimiento continuo',
    'services.category4.item3': 'Planificación de expansión de funcionalidades',
    'services.category4.item4': 'Actualizaciones de seguridad',
    'services.category4.item5': 'Escalabilidad de la plataforma',
    
    'services.category5.title': 'Experiencias inmersivas e interactivas',
    'services.category5.item1': 'Experiencias visuales avanzadas',
    'services.category5.item2': 'Secciones de narrativa interactiva',
    'services.category5.item3': 'Componentes listos para 3D para presentación de marca',
    
    // Website Lifecycle
    'services.lifecycle.title': 'Ciclo de vida del sitio web LifyX',
    'services.lifecycle.subtitle': 'De la idea a la puesta en línea — un calendario de crecimiento de hoja',
    'services.lifecycle.totalTime': 'Desde el inicio hasta el sitio web en vivo: ≈ 2.5 a 3 semanas en total',
    
    'services.lifecycle.phase1.icon': '🌰',
    'services.lifecycle.phase1.name': 'Semilla',
    'services.lifecycle.phase1.title': 'Descubrimiento & Objetivos',
    'services.lifecycle.phase1.duration': 'Día 1–2',
    'services.lifecycle.phase1.description': 'Nos alineamos con su visión para definir objetivos comerciales claros, el alcance y la dirección estratégica para una presencia digital de alto impacto.',
    'services.lifecycle.phase1.output': 'Alcance claro y estructura del sitio',
    
    'services.lifecycle.phase2.icon': '🌱',
    'services.lifecycle.phase2.name': 'Brote',
    'services.lifecycle.phase2.title': 'Diseño & Estructura',
    'services.lifecycle.phase2.duration': 'Día 3–5',
    'services.lifecycle.phase2.description': 'Diseñamos la arquitectura visual y la experiencia de usuario, creando prototipos de alta fidelidad que equilibran la estética con la usabilidad enfocada en la conversión.',
    'services.lifecycle.phase2.output': 'Estructura visual (maqueta / diseño)',
    
    'services.lifecycle.phase3.icon': '🌿',
    'services.lifecycle.phase3.name': 'Pequeña Hoja',
    'services.lifecycle.phase3.title': 'Desarrollo',
    'services.lifecycle.phase3.duration': 'Semana 1–2',
    'services.lifecycle.phase3.description': 'Nuestros ingenieros construyen una base robusta y escalable utilizando tecnologías modernas, asegurando rendimiento, seguridad y funcionalidad fluida en todos los dispositivos.',
    'services.lifecycle.phase3.output': 'Sitio web funcional (no público aún)',
    
    'services.lifecycle.phase4.icon': '🍃',
    'services.lifecycle.phase4.name': 'Hoja en Crecimiento',
    'services.lifecycle.phase4.title': 'Integración & Lógica',
    'services.lifecycle.phase4.duration': '2–4 días',
    'services.lifecycle.phase4.description': 'Integramos sistemas complejos y lógica de contenido dinámico, asegurando que su plataforma opere inteligentemente con un flujo de datos fluido.',
    'services.lifecycle.phase4.output': 'Todo cambia de idioma correctamente',
    
    'services.lifecycle.phase5.icon': '🍃',
    'services.lifecycle.phase5.name': 'Grande Hoja Saludable',
    'services.lifecycle.phase5.title': 'Garantía de Calidad',
    'services.lifecycle.phase5.duration': '2–3 días',
    'services.lifecycle.phase5.description': 'Pruebas rigurosas multiplataforma aseguran una experiencia impecable, optimizando velocidad, capacidad de respuesta y accesibilidad antes de la revelación final.',
    'services.lifecycle.phase5.output': 'Sitio listo para la puesta en línea',
    
    'services.lifecycle.phase6.icon': '🌿🍃',
    'services.lifecycle.phase6.name': 'Hoja Madura',
    'services.lifecycle.phase6.title': 'Lanzamiento & Entrega',
    'services.lifecycle.phase6.duration': '1 día',
    'services.lifecycle.phase6.description': 'Gestionamos un despliegue fluido a producción y proporcionamos las herramientas y el conocimiento necesarios para empoderar a su equipo en la gestión de la plataforma.',
    'services.lifecycle.phase6.output': 'El sitio web está en línea',
    
    'services.lifecycle.phase7.icon': '🍂',
    'services.lifecycle.phase7.name': 'Nuevas Hojas',
    'services.lifecycle.phase7.title': 'Crecimiento & Evolución',
    'services.lifecycle.phase7.duration': 'Continuo',
    'services.lifecycle.phase7.description': 'Nuestra asociación continúa con optimización constante, monitoreo de seguridad y evolución de características para mantener su activo digital a la vanguardia.',
    'services.lifecycle.phase7.output': 'Soporte continuo & crecimiento',
    
    // Portfolio Page
    'portfolio.hero.title': 'Nuestro trabajo',
    'portfolio.hero.subtitle': 'Una galería curada de proyectos enfocados en pequeñas empresas, empresas de servicios, startups y plataformas digitales',
    'portfolio.coming.title': 'Portafolio próximamente',
    'portfolio.coming.text': 'Actualmente estamos mostrando nuestro mejor trabajo. Vuelva pronto para ver nuestros casos de estudio e historias de éxito.',
    
    // Contact Page
    'contact.hero.title': 'Hablemos de su proyecto',
    'contact.hero.subtitle': 'Cuéntenos sobre su negocio y qué busca mejorar. Revisaremos sus detalles y responderemos con los siguientes pasos.',
    
    'contact.form.fullName': 'Nombre completo',
    'contact.form.businessName': 'Nombre del negocio',
    'contact.form.email': 'Correo electrónico',
    'contact.form.website': 'Sitio web actual (opcional)',
    
    'contact.form.projectType': 'Tipo de proyecto',
    'contact.form.projectType.redesign': 'Rediseño de sitio web',
    'contact.form.projectType.new': 'Nuevo sitio web',
    'contact.form.projectType.ecommerce': 'Comercio electrónico',
    'contact.form.projectType.booking': 'Sistema de reservas / empresarial',
    'contact.form.projectType.unsure': 'Aún no estoy seguro',
    
    'contact.form.budget': 'Presupuesto estimado',
    'contact.form.budget.range1': '$2,000 – $3,000',
    'contact.form.budget.range2': '$3,000 – $5,000',
    'contact.form.budget.range3': '$5,000+',
    'contact.form.budget.discuss': 'Prefiero discutirlo',
    
    'contact.form.details': 'Detalles del proyecto',
    'contact.form.detailsPlaceholder': 'Describa brevemente sus objetivos, desafíos o lo que le gustaría mejorar.',
    
    'contact.form.submit': 'Iniciar la conversación',
    'contact.form.privacy': 'Al enviar este formulario, acepta nuestra política de privacidad.',
    
    'contact.cta.title': '¿Prefiere hablar directamente?',
    'contact.cta.button': 'Agendar una llamada de introducción de 20 minutos',
    
    'contact.success.title': 'Gracias',
    'contact.success.message': 'Hemos recibido su mensaje y revisaremos sus detalles en breve. Si su proyecto se alinea con nuestro alcance, nos pondremos en contacto con los siguientes pasos.',
    'contact.success.button': 'Volver al inicio',
    
    // Contact Page - FAQ
    'contact.faq.title': 'Preguntas frecuentes',
    'contact.faq.subtitle': 'Respuestas rápidas a preguntas comunes sobre trabajar con LifyX',
    'contact.faq.q1': '¿Cuánto tiempo lleva construir un sitio web?',
    'contact.faq.a1': 'La mayoría de los proyectos llevan de 2 a 4 semanas desde la descubrimiento hasta la puesta en línea. El cronograma depende de la complejidad de las características, el número de páginas y los ciclos de retroalimentación del cliente. Proporcionamos un cronograma detallado durante nuestra llamada de descubrimiento inicial.',
    'contact.faq.q2': '¿Qué está incluido en sus servicios de desarrollo web?',
    'contact.faq.a2': 'Proporcionamos desarrollo full-stack que incluye diseño visual personalizado, diseños responsivos, soporte multilingüe (inglés, francés, español), formularios de contacto, páginas legales, integración de chatbot IA, sistemas empresariales y soporte post-puesta en línea. Cada proyecto se adapta a sus necesidades específicas.',
    'contact.faq.q3': '¿Ofrecen mantenimiento y soporte continuo?',
    'contact.faq.a3': '¡Sí! Ofrecemos paquetes de mantenimiento continuo que incluyen actualizaciones de seguridad, actualizaciones de contenido, adiciones de funcionalidades, monitoreo de rendimiento y soporte técnico. Creemos en asociaciones a largo plazo con nuestros clientes.',
    'contact.faq.q4': '¿Pueden trabajar con clientes en diferentes países?',
    'contact.faq.a4': '¡Absolutamente! Trabajamos con clientes a nivel global. Nuestras capacidades multilingües (inglés, francés, español) y nuestra enfoque remoto hacen que la colaboración internacional sea fluida. Nos adaptamos a su zona horaria para las llamadas y la comunicación.',
    'contact.faq.q5': '¿Qué tecnologías utilizan?',
    'contact.faq.a5': 'Utilizamos tecnologías modernas y confiables, incluyendo React, TypeScript, Tailwind CSS, Node.js y diversas soluciones de base de datos. Elegimos la pila de tecnologías según sus necesidades específicas, requisitos de escalabilidad y consideraciones de mantenimiento a largo plazo.',
    'contact.faq.q6': '¿Qué sucede después de que envío el formulario de contacto?',
    'contact.faq.a6': 'Dentro de 24 horas, nuestro equipo revisará los detalles de su proyecto y se pondrá en contacto para programar una llamada de descubrimiento. Durante esta llamada, discutiremos sus objetivos, cronograma, presupuesto y crearemos una propuesta personalizada para su proyecto. No hay obligación de proceder.',
    'contact.faq.cta.title': '¿Todavía tiene preguntas?',
    'contact.faq.cta.subtitle': 'Nuestro equipo está aquí para ayudar. Envíenos su pregunta y responderemos rápidamente.',
    'contact.faq.cta.response': 'Generalmente respondemos en 24 horas',
    
    // Chatbot
    'chatbot.title': 'Chatea con nosotros',
    'chatbot.placeholder': 'Pregúntanos lo que quieras...',
    'chatbot.send': 'Enviar',
    'chatbot.welcome': '¡Hola! ¿Cómo podemos ayudarte hoy?',
    'chatbot.close': 'Cerrar chat',
    'chatbot.open': 'Chatea con nosotros',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem('lifyxLanguage');
    if (stored && (stored === 'en' || stored === 'fr' || stored === 'es')) {
      return stored;
    }
    
    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'fr' || browserLang === 'es') {
      return browserLang;
    }
    
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('lifyxLanguage', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}