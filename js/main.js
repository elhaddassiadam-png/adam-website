/* =====================
   TRANSLATIONS
   ===================== */
const i18n = {
  ar: {
    dir: 'rtl', lang: 'ar',
    'meta.title': 'آدم الحداس | تصميم مواقع احترافية بالمغرب - من 1500 درهم',
    'nav.services': 'الخدمات', 'nav.why': 'لماذا نحن', 'nav.process': 'كيف نعمل',
    'nav.blog': 'المقالات', 'nav.terms': 'الشروط', 'nav.contact': 'تواصل معنا',
    'hero.badge': '✦ خدمات رقمية موثوقة',
    'hero.title1': 'احصل على موقعك', 'hero.title2': 'الاحترافي اليوم',
    'hero.subtitle': 'مواقع إلكترونية عالية الجودة بشفافية تامة وقيم راسخة.<br>ابدأ حضورك الرقمي من <strong>1500 درهم</strong> فقط.',
    'hero.cta1': '<i class="fab fa-whatsapp"></i> اطلب موقعك الآن',
    'hero.cta2': 'تعرف على الباقات',
    'hero.stat1num': '100%', 'hero.stat1label': 'شفافية',
    'hero.stat2num': '3', 'hero.stat2label': 'تعديلات مجانية',
    'hero.stat3num': '4', 'hero.stat3label': 'لغات',
    'services.badge': 'باقاتنا', 'services.title': 'اختر الباقة المناسبة لك',
    'services.subtitle': 'أسعار شفافة بلا مفاجآت — ما تراه هو ما تحصل عليه',
    'pkg1.name': 'الباقة الأساسية', 'pkg1.tagline': 'موقع احترافي عالي الجودة',
    'pkg1.f1': 'تصميم احترافي مخصص', 'pkg1.f2': 'متجاوب مع جميع الأجهزة',
    'pkg1.f3': 'سرعة تحميل عالية', 'pkg1.f4': 'تحسين محركات البحث (SEO)',
    'pkg1.f5': '3 تعديلات مجانية', 'pkg1.f6': 'دعم ما بعد التسليم',
    'pkg2.badge': 'الأكثر طلبًا', 'pkg2.name': 'الباقة المتقدمة',
    'pkg2.tagline': 'موقع احترافي + واتساب أوتوميشن',
    'pkg2.f1': 'كل ما في الباقة الأساسية', 'pkg2.f2': 'واتساب أوتوميشن متكامل',
    'pkg2.f3': 'ردود آلية على العملاء 24/7', 'pkg2.f4': 'تكامل واتساب مع الموقع',
    'pkg2.f5': '3 تعديلات مجانية', 'pkg2.f6': 'دعم تقني متميز',
    'pkg.cta': 'اطلب هذه الباقة', 'currency': 'درهم',
    'revision.note': 'ملاحظة: يحق للعميل 3 تعديلات مجانية — كل تعديل إضافي بعد ذلك بـ 100 درهم',
    'why.badge': 'مزايانا', 'why.title': 'لماذا تختارنا؟', 'why.subtitle': 'نبني الثقة قبل أن نبني الموقع',
    'why.f1.title': 'جودة عالية', 'why.f1.desc': 'مواقع مصممة بأعلى المعايير التقنية والجمالية لتعكس صورة احترافية لعملك',
    'why.f2.title': 'شفافية تامة', 'why.f2.desc': 'لا مفاجآت في الأسعار، لا وعود كاذبة — كل شيء واضح ومتفق عليه من البداية',
    'why.f3.title': 'قيم إسلامية', 'why.f3.desc': 'لا نضيف أي محتوى يخالف الدين الإسلامي — عملنا يسعى لرضا الله تعالى أولاً',
    'why.f4.title': 'تواصل سهل', 'why.f4.desc': 'متاح عبر واتساب والبريد الإلكتروني للإجابة على استفساراتك في أقرب وقت',
    'why.f5.title': 'متوافق مع الجوال', 'why.f5.desc': 'مواقع متجاوبة تعمل بشكل مثالي على الهواتف والأجهزة اللوحية وأجهزة الكمبيوتر',
    'why.f6.title': 'SEO مدمج', 'why.f6.desc': 'تحسين لمحركات البحث من البداية حتى يجدك عملاؤك بسهولة على جوجل',
    'process.badge': 'طريقة العمل', 'process.title': 'كيف نعمل معاً؟',
    'process.subtitle': 'عملية واضحة وبسيطة من أول تواصل حتى إطلاق موقعك',
    'step1.title': 'التواصل والاستشارة', 'step1.desc': 'تواصل معنا عبر واتساب أو البريد الإلكتروني لمناقشة احتياجاتك وأهداف موقعك',
    'step2.title': 'التصميم والتطوير', 'step2.desc': 'نبدأ العمل على موقعك بعد الاتفاق على التفاصيل والمتطلبات',
    'step3.title': 'المراجعة والتعديل', 'step3.desc': 'تراجع الموقع وتطلب التعديلات (3 تعديلات مجانية)',
    'step4.title': 'التسليم والإطلاق', 'step4.desc': 'يُطلق موقعك رسمياً ويصبح متاحاً للعالم بإذن الله',
    'values.title': 'التزامنا وقيمنا',
    'values.desc': 'بتوفيق الله تعالى، نلتزم بالعمل وفق مبادئ الإسلام الحنيف في كل ما نقدمه',
    'value1': 'لا نضيف أي محتوى يخالف الشريعة الإسلامية',
    'value2': 'لا صور نساء متبرجات أو محتوى غير لائق',
    'value3': 'لا شهادات مزورة أو ادعاءات كاذبة',
    'value4': 'الصدق والأمانة في كل تعامل',
    'value5': 'نسعى لرضا الله تعالى قبل أي شيء',
    'blog.badge': 'مقالاتنا', 'blog.title': 'اقرأ واستفد',
    'blog.subtitle': 'مقالات تساعدك على فهم أهمية الحضور الرقمي لعملك',
    'blog.cat1': 'الأعمال الرقمية', 'blog.cat2': 'المواقع الإلكترونية',
    'blog.art1.title': 'أهمية الإنترنت للأعمال التجارية في العصر الحديث',
    'blog.art1.excerpt': 'اكتشف كيف يمكن للإنترنت أن يحول عملك ويفتح لك أسواقاً لا محدودة في العالم الرقمي...',
    'blog.art2.title': 'لماذا يحتاج كل عمل تجاري إلى موقع إلكتروني؟',
    'blog.art2.excerpt': 'في عالم يبحث فيه الناس عن كل شيء على الإنترنت، غيابك الرقمي يعني خسارة فرص ذهبية...',
    'blog.readmore': 'اقرأ المزيد', 'blog.viewall': 'عرض جميع المقالات',
    'contact.badge': 'تواصل', 'contact.title': 'هل أنت مستعد لبناء موقعك؟',
    'contact.subtitle': 'تواصل معنا الآن ونبدأ رحلتك الرقمية بإذن الله',
    'contact.whatsapp': 'واتساب', 'contact.email': 'البريد الإلكتروني',
    'contact.hours': 'متاح للتواصل طوال أيام الأسبوع',
    'form.name': 'اسمك', 'form.name.placeholder': 'أدخل اسمك',
    'form.service': 'الخدمة المطلوبة',
    'form.opt1': 'الباقة الأساسية - 1500 درهم',
    'form.opt2': 'الباقة المتقدمة - 2000 درهم',
    'form.inquiry': 'استفسار عام',
    'form.message': 'رسالتك', 'form.msg.placeholder': 'أخبرنا عن مشروعك...',
    'form.submit': 'أرسل عبر واتساب',
    'footer.tagline': 'مواقع احترافية بقيم راسخة وشفافية تامة',
    'footer.nav.title': 'روابط سريعة', 'footer.contact.title': 'تواصل معنا',
    'footer.copy': 'جميع الحقوق محفوظة © 2025 آدم الحداس',
    'whatsapp.tooltip': 'تواصل معنا'
  },
  en: {
    dir: 'ltr', lang: 'en',
    'meta.title': 'Adam Haddas | Professional Websites in Morocco - from 1500 MAD',
    'nav.services': 'Services', 'nav.why': 'Why Us', 'nav.process': 'How We Work',
    'nav.blog': 'Blog', 'nav.terms': 'Terms', 'nav.contact': 'Contact Us',
    'hero.badge': '✦ Trusted Digital Services',
    'hero.title1': 'Get Your Professional', 'hero.title2': 'Website Today',
    'hero.subtitle': 'High-quality websites with full transparency and strong values.<br>Start your digital presence from <strong>1500 MAD</strong> only.',
    'hero.cta1': '<i class="fab fa-whatsapp"></i> Order Your Website',
    'hero.cta2': 'View Packages',
    'hero.stat1num': '100%', 'hero.stat1label': 'Transparent',
    'hero.stat2num': '3', 'hero.stat2label': 'Free Revisions',
    'hero.stat3num': '4', 'hero.stat3label': 'Languages',
    'services.badge': 'Our Packages', 'services.title': 'Choose the Right Package',
    'services.subtitle': 'Transparent pricing, no surprises — what you see is what you get',
    'pkg1.name': 'Basic Package', 'pkg1.tagline': 'Professional high-quality website',
    'pkg1.f1': 'Custom professional design', 'pkg1.f2': 'Responsive on all devices',
    'pkg1.f3': 'Fast loading speed', 'pkg1.f4': 'Search Engine Optimization (SEO)',
    'pkg1.f5': '3 free revisions', 'pkg1.f6': 'Post-delivery support',
    'pkg2.badge': 'Most Popular', 'pkg2.name': 'Advanced Package',
    'pkg2.tagline': 'Professional website + WhatsApp Automation',
    'pkg2.f1': 'Everything in Basic Package', 'pkg2.f2': 'Full WhatsApp Automation',
    'pkg2.f3': 'Automated client replies 24/7', 'pkg2.f4': 'WhatsApp + website integration',
    'pkg2.f5': '3 free revisions', 'pkg2.f6': 'Premium technical support',
    'pkg.cta': 'Order This Package', 'currency': 'MAD',
    'revision.note': 'Note: Clients get 3 free revisions — each additional revision after that costs 100 MAD',
    'why.badge': 'Our Advantages', 'why.title': 'Why Choose Us?', 'why.subtitle': 'We build trust before we build your website',
    'why.f1.title': 'High Quality', 'why.f1.desc': 'Websites designed to the highest technical and aesthetic standards to reflect a professional image of your business',
    'why.f2.title': 'Full Transparency', 'why.f2.desc': 'No price surprises, no false promises — everything is clear and agreed upon from the start',
    'why.f3.title': 'Islamic Values', 'why.f3.desc': 'We don\'t add any content that violates Islamic values — our work seeks Allah\'s pleasure first',
    'why.f4.title': 'Easy Contact', 'why.f4.desc': 'Available via WhatsApp and email to answer your questions as soon as possible',
    'why.f5.title': 'Mobile Friendly', 'why.f5.desc': 'Responsive websites that work perfectly on phones, tablets and computers',
    'why.f6.title': 'Built-in SEO', 'why.f6.desc': 'Search engine optimization built in from the start so your customers can find you easily on Google',
    'process.badge': 'Our Process', 'process.title': 'How We Work Together',
    'process.subtitle': 'A clear, simple process from first contact to launching your website',
    'step1.title': 'Consultation', 'step1.desc': 'Contact us via WhatsApp or email to discuss your needs and website goals',
    'step2.title': 'Design & Development', 'step2.desc': 'We start working on your website after agreeing on all details and requirements',
    'step3.title': 'Review & Revision', 'step3.desc': 'You review the website and request changes (3 free revisions)',
    'step4.title': 'Delivery & Launch', 'step4.desc': 'Your website launches officially and becomes available to the world, God willing',
    'values.title': 'Our Commitment & Values',
    'values.desc': 'With God\'s help, we are committed to working according to Islamic principles in everything we provide',
    'value1': 'We don\'t add any content that violates Islamic law',
    'value2': 'No immodest images or inappropriate content',
    'value3': 'No fake testimonials or false claims',
    'value4': 'Honesty and integrity in every interaction',
    'value5': 'We seek Allah\'s pleasure above everything',
    'blog.badge': 'Our Blog', 'blog.title': 'Read & Learn',
    'blog.subtitle': 'Articles to help you understand the importance of digital presence for your business',
    'blog.cat1': 'Digital Business', 'blog.cat2': 'Websites',
    'blog.art1.title': 'The Importance of the Internet for Businesses in the Modern Era',
    'blog.art1.excerpt': 'Discover how the internet can transform your business and open unlimited markets in the digital world...',
    'blog.art2.title': 'Why Does Every Business Need a Website?',
    'blog.art2.excerpt': 'In a world where people search for everything online, your digital absence means losing golden opportunities...',
    'blog.readmore': 'Read More', 'blog.viewall': 'View All Articles',
    'contact.badge': 'Contact', 'contact.title': 'Ready to Build Your Website?',
    'contact.subtitle': 'Contact us now and start your digital journey, God willing',
    'contact.whatsapp': 'WhatsApp', 'contact.email': 'Email',
    'contact.hours': 'Available all days of the week',
    'form.name': 'Your Name', 'form.name.placeholder': 'Enter your name',
    'form.service': 'Required Service',
    'form.opt1': 'Basic Package - 1500 MAD',
    'form.opt2': 'Advanced Package - 2000 MAD',
    'form.inquiry': 'General Inquiry',
    'form.message': 'Your Message', 'form.msg.placeholder': 'Tell us about your project...',
    'form.submit': 'Send via WhatsApp',
    'footer.tagline': 'Professional websites with strong values and full transparency',
    'footer.nav.title': 'Quick Links', 'footer.contact.title': 'Contact Us',
    'footer.copy': 'All rights reserved © 2025 Adam Haddas',
    'whatsapp.tooltip': 'Contact Us'
  },
  fr: {
    dir: 'ltr', lang: 'fr',
    'meta.title': 'Adam Haddas | Sites Web Professionnels au Maroc - à partir de 1500 MAD',
    'nav.services': 'Services', 'nav.why': 'Pourquoi Nous', 'nav.process': 'Notre Méthode',
    'nav.blog': 'Blog', 'nav.terms': 'Conditions', 'nav.contact': 'Nous Contacter',
    'hero.badge': '✦ Services Digitaux de Confiance',
    'hero.title1': 'Obtenez Votre Site Web', 'hero.title2': 'Professionnel Aujourd\'hui',
    'hero.subtitle': 'Sites web de haute qualité, transparence totale, valeurs solides.<br>Commencez votre présence digitale dès <strong>1500 MAD</strong>.',
    'hero.cta1': '<i class="fab fa-whatsapp"></i> Commander Mon Site',
    'hero.cta2': 'Voir les Formules',
    'hero.stat1num': '100%', 'hero.stat1label': 'Transparent',
    'hero.stat2num': '3', 'hero.stat2label': 'Révisions Gratuites',
    'hero.stat3num': '4', 'hero.stat3label': 'Langues',
    'services.badge': 'Nos Formules', 'services.title': 'Choisissez la Bonne Formule',
    'services.subtitle': 'Prix transparents, sans surprises — ce que vous voyez est ce que vous obtenez',
    'pkg1.name': 'Formule Basique', 'pkg1.tagline': 'Site web professionnel de haute qualité',
    'pkg1.f1': 'Design personnalisé professionnel', 'pkg1.f2': 'Compatible tous appareils',
    'pkg1.f3': 'Vitesse de chargement rapide', 'pkg1.f4': 'Optimisation SEO',
    'pkg1.f5': '3 révisions gratuites', 'pkg1.f6': 'Support après livraison',
    'pkg2.badge': 'La Plus Demandée', 'pkg2.name': 'Formule Avancée',
    'pkg2.tagline': 'Site professionnel + Automatisation WhatsApp',
    'pkg2.f1': 'Tout de la Formule Basique', 'pkg2.f2': 'Automatisation WhatsApp complète',
    'pkg2.f3': 'Réponses automatiques 24/7', 'pkg2.f4': 'Intégration WhatsApp + site',
    'pkg2.f5': '3 révisions gratuites', 'pkg2.f6': 'Support technique premium',
    'pkg.cta': 'Commander Cette Formule', 'currency': 'MAD',
    'revision.note': 'Note : Le client a droit à 3 révisions gratuites — chaque révision supplémentaire coûte 100 MAD',
    'why.badge': 'Nos Avantages', 'why.title': 'Pourquoi Nous Choisir ?', 'why.subtitle': 'Nous construisons la confiance avant de construire votre site',
    'why.f1.title': 'Haute Qualité', 'why.f1.desc': 'Sites conçus selon les plus hauts standards techniques et esthétiques',
    'why.f2.title': 'Transparence Totale', 'why.f2.desc': 'Pas de surprises tarifaires, pas de fausses promesses — tout est clair dès le départ',
    'why.f3.title': 'Valeurs Islamiques', 'why.f3.desc': 'Nous n\'ajoutons aucun contenu contraire aux valeurs islamiques',
    'why.f4.title': 'Contact Facile', 'why.f4.desc': 'Disponible via WhatsApp et email pour répondre à vos questions rapidement',
    'why.f5.title': 'Compatible Mobile', 'why.f5.desc': 'Sites responsives qui fonctionnent parfaitement sur tous les appareils',
    'why.f6.title': 'SEO Intégré', 'why.f6.desc': 'Référencement naturel intégré dès le départ pour que vos clients vous trouvent sur Google',
    'process.badge': 'Notre Processus', 'process.title': 'Comment Travaillons-Nous Ensemble ?',
    'process.subtitle': 'Un processus clair et simple du premier contact au lancement de votre site',
    'step1.title': 'Consultation', 'step1.desc': 'Contactez-nous via WhatsApp ou email pour discuter de vos besoins',
    'step2.title': 'Conception & Développement', 'step2.desc': 'Nous commençons à travailler sur votre site après accord sur tous les détails',
    'step3.title': 'Révision & Correction', 'step3.desc': 'Vous révisez le site et demandez des modifications (3 révisions gratuites)',
    'step4.title': 'Livraison & Lancement', 'step4.desc': 'Votre site est officiellement lancé et accessible au monde entier',
    'values.title': 'Nos Engagements & Valeurs',
    'values.desc': 'Avec l\'aide de Dieu, nous nous engageons à travailler selon les principes islamiques dans tout ce que nous faisons',
    'value1': 'Nous n\'ajoutons aucun contenu contraire à la loi islamique',
    'value2': 'Pas d\'images indécentes ou de contenu inapproprié',
    'value3': 'Pas de faux témoignages ou de fausses affirmations',
    'value4': 'Honnêteté et intégrité dans chaque interaction',
    'value5': 'Nous recherchons avant tout la satisfaction de Dieu',
    'blog.badge': 'Notre Blog', 'blog.title': 'Lisez & Apprenez',
    'blog.subtitle': 'Articles pour comprendre l\'importance de la présence digitale pour votre entreprise',
    'blog.cat1': 'Business Digital', 'blog.cat2': 'Sites Web',
    'blog.art1.title': 'L\'Importance d\'Internet pour les Entreprises à l\'Ère Moderne',
    'blog.art1.excerpt': 'Découvrez comment Internet peut transformer votre business et ouvrir des marchés illimités...',
    'blog.art2.title': 'Pourquoi Chaque Entreprise a Besoin d\'un Site Web ?',
    'blog.art2.excerpt': 'Dans un monde où les gens cherchent tout en ligne, votre absence digitale signifie perdre des opportunités précieuses...',
    'blog.readmore': 'Lire la Suite', 'blog.viewall': 'Voir Tous les Articles',
    'contact.badge': 'Contact', 'contact.title': 'Prêt à Construire Votre Site ?',
    'contact.subtitle': 'Contactez-nous maintenant et commencez votre voyage digital',
    'contact.whatsapp': 'WhatsApp', 'contact.email': 'Email',
    'contact.hours': 'Disponible tous les jours de la semaine',
    'form.name': 'Votre Nom', 'form.name.placeholder': 'Entrez votre nom',
    'form.service': 'Service Souhaité',
    'form.opt1': 'Formule Basique - 1500 MAD',
    'form.opt2': 'Formule Avancée - 2000 MAD',
    'form.inquiry': 'Renseignement Général',
    'form.message': 'Votre Message', 'form.msg.placeholder': 'Parlez-nous de votre projet...',
    'form.submit': 'Envoyer via WhatsApp',
    'footer.tagline': 'Sites professionnels avec des valeurs solides et une transparence totale',
    'footer.nav.title': 'Liens Rapides', 'footer.contact.title': 'Nous Contacter',
    'footer.copy': 'Tous droits réservés © 2025 Adam Haddas',
    'whatsapp.tooltip': 'Nous Contacter'
  },
  es: {
    dir: 'ltr', lang: 'es',
    'meta.title': 'Adam Haddas | Sitios Web Profesionales en Marruecos - desde 1500 MAD',
    'nav.services': 'Servicios', 'nav.why': 'Por Qué Nosotros', 'nav.process': 'Cómo Trabajamos',
    'nav.blog': 'Blog', 'nav.terms': 'Términos', 'nav.contact': 'Contáctanos',
    'hero.badge': '✦ Servicios Digitales de Confianza',
    'hero.title1': 'Obtén Tu Sitio Web', 'hero.title2': 'Profesional Hoy',
    'hero.subtitle': 'Sitios web de alta calidad con total transparencia y valores sólidos.<br>Inicia tu presencia digital desde <strong>1500 MAD</strong>.',
    'hero.cta1': '<i class="fab fa-whatsapp"></i> Pedir Mi Sitio Web',
    'hero.cta2': 'Ver Paquetes',
    'hero.stat1num': '100%', 'hero.stat1label': 'Transparente',
    'hero.stat2num': '3', 'hero.stat2label': 'Revisiones Gratis',
    'hero.stat3num': '4', 'hero.stat3label': 'Idiomas',
    'services.badge': 'Nuestros Paquetes', 'services.title': 'Elige el Paquete Adecuado',
    'services.subtitle': 'Precios transparentes sin sorpresas — lo que ves es lo que obtienes',
    'pkg1.name': 'Paquete Básico', 'pkg1.tagline': 'Sitio web profesional de alta calidad',
    'pkg1.f1': 'Diseño personalizado profesional', 'pkg1.f2': 'Compatible con todos los dispositivos',
    'pkg1.f3': 'Alta velocidad de carga', 'pkg1.f4': 'Optimización para motores de búsqueda (SEO)',
    'pkg1.f5': '3 revisiones gratuitas', 'pkg1.f6': 'Soporte post-entrega',
    'pkg2.badge': 'El Más Solicitado', 'pkg2.name': 'Paquete Avanzado',
    'pkg2.tagline': 'Sitio profesional + Automatización de WhatsApp',
    'pkg2.f1': 'Todo del Paquete Básico', 'pkg2.f2': 'Automatización completa de WhatsApp',
    'pkg2.f3': 'Respuestas automáticas 24/7', 'pkg2.f4': 'Integración WhatsApp + sitio web',
    'pkg2.f5': '3 revisiones gratuitas', 'pkg2.f6': 'Soporte técnico premium',
    'pkg.cta': 'Pedir Este Paquete', 'currency': 'MAD',
    'revision.note': 'Nota: El cliente tiene derecho a 3 revisiones gratuitas — cada revisión adicional cuesta 100 MAD',
    'why.badge': 'Nuestras Ventajas', 'why.title': '¿Por Qué Elegirnos?', 'why.subtitle': 'Construimos la confianza antes de construir tu sitio web',
    'why.f1.title': 'Alta Calidad', 'why.f1.desc': 'Sitios diseñados según los más altos estándares técnicos y estéticos',
    'why.f2.title': 'Total Transparencia', 'why.f2.desc': 'Sin sorpresas de precio, sin promesas falsas — todo es claro desde el principio',
    'why.f3.title': 'Valores Islámicos', 'why.f3.desc': 'No añadimos ningún contenido que vaya en contra de los valores islámicos',
    'why.f4.title': 'Contacto Fácil', 'why.f4.desc': 'Disponible vía WhatsApp y correo electrónico para responder tus preguntas rápidamente',
    'why.f5.title': 'Compatible con Móviles', 'why.f5.desc': 'Sitios responsivos que funcionan perfectamente en todos los dispositivos',
    'why.f6.title': 'SEO Integrado', 'why.f6.desc': 'Optimización para motores de búsqueda integrada desde el inicio',
    'process.badge': 'Nuestro Proceso', 'process.title': '¿Cómo Trabajamos Juntos?',
    'process.subtitle': 'Un proceso claro y simple desde el primer contacto hasta el lanzamiento de tu sitio',
    'step1.title': 'Consulta', 'step1.desc': 'Contáctanos por WhatsApp o correo para discutir tus necesidades y objetivos',
    'step2.title': 'Diseño y Desarrollo', 'step2.desc': 'Empezamos a trabajar en tu sitio después de acordar todos los detalles',
    'step3.title': 'Revisión y Corrección', 'step3.desc': 'Revisas el sitio y solicitas cambios (3 revisiones gratuitas)',
    'step4.title': 'Entrega y Lanzamiento', 'step4.desc': 'Tu sitio se lanza oficialmente y queda accesible para todo el mundo',
    'values.title': 'Nuestros Compromisos y Valores',
    'values.desc': 'Con la ayuda de Dios, nos comprometemos a trabajar según los principios islámicos en todo lo que ofrecemos',
    'value1': 'No añadimos contenido que viole la ley islámica',
    'value2': 'Sin imágenes indecentes ni contenido inapropiado',
    'value3': 'Sin testimonios falsos ni afirmaciones falsas',
    'value4': 'Honestidad e integridad en cada interacción',
    'value5': 'Buscamos la satisfacción de Dios por encima de todo',
    'blog.badge': 'Nuestro Blog', 'blog.title': 'Lee y Aprende',
    'blog.subtitle': 'Artículos para entender la importancia de la presencia digital para tu negocio',
    'blog.cat1': 'Negocios Digitales', 'blog.cat2': 'Sitios Web',
    'blog.art1.title': 'La Importancia de Internet para los Negocios en la Era Moderna',
    'blog.art1.excerpt': 'Descubre cómo Internet puede transformar tu negocio y abrir mercados ilimitados en el mundo digital...',
    'blog.art2.title': '¿Por Qué Todo Negocio Necesita un Sitio Web?',
    'blog.art2.excerpt': 'En un mundo donde las personas buscan todo en línea, tu ausencia digital significa perder oportunidades doradas...',
    'blog.readmore': 'Leer Más', 'blog.viewall': 'Ver Todos los Artículos',
    'contact.badge': 'Contacto', 'contact.title': '¿Listo para Crear Tu Sitio Web?',
    'contact.subtitle': 'Contáctanos ahora y comienza tu viaje digital',
    'contact.whatsapp': 'WhatsApp', 'contact.email': 'Correo Electrónico',
    'contact.hours': 'Disponible todos los días de la semana',
    'form.name': 'Tu Nombre', 'form.name.placeholder': 'Ingresa tu nombre',
    'form.service': 'Servicio Requerido',
    'form.opt1': 'Paquete Básico - 1500 MAD',
    'form.opt2': 'Paquete Avanzado - 2000 MAD',
    'form.inquiry': 'Consulta General',
    'form.message': 'Tu Mensaje', 'form.msg.placeholder': 'Cuéntanos sobre tu proyecto...',
    'form.submit': 'Enviar por WhatsApp',
    'footer.tagline': 'Sitios profesionales con valores sólidos y total transparencia',
    'footer.nav.title': 'Enlaces Rápidos', 'footer.contact.title': 'Contáctanos',
    'footer.copy': 'Todos los derechos reservados © 2025 Adam Haddas',
    'whatsapp.tooltip': 'Contáctanos'
  }
};

/* =====================
   LANGUAGE SWITCHER
   ===================== */
let currentLang = localStorage.getItem('lang') || 'ar';

function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);

  const html = document.getElementById('html-root');
  html.setAttribute('lang', lang);
  html.setAttribute('dir', t.dir);

  // Update meta title
  document.title = t['meta.title'] || document.title;

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Update select options
  const select = document.querySelector('select[name="service"]');
  if (select) {
    const opts = select.querySelectorAll('option');
    if (opts[0]) opts[0].textContent = t['form.opt1'] || opts[0].textContent;
    if (opts[1]) opts[1].textContent = t['form.opt2'] || opts[1].textContent;
    if (opts[2]) opts[2].textContent = t['form.inquiry'] || opts[2].textContent;
  }

  // Update active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

/* =====================
   NAVBAR
   ===================== */
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }
  // Back to top visibility
  const backBtn = document.getElementById('back-to-top');
  if (backBtn) backBtn.classList.toggle('visible', window.scrollY > 400);
});

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

/* =====================
   BACK TO TOP
   ===================== */
const backBtn = document.getElementById('back-to-top');
if (backBtn) {
  backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* =====================
   CONTACT FORM → WHATSAPP
   ===================== */
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const service = form.querySelector('[name="service"]').value;
    const message = form.querySelector('[name="message"]').value.trim();
    const serviceLabel = form.querySelector(`[name="service"] option[value="${service}"]`).textContent;
    const text = `السلام عليكم،\nاسمي: ${name}\nالخدمة المطلوبة: ${serviceLabel}\n${message ? 'الرسالة: ' + message : ''}`;
    window.open(`https://wa.me/212693680068?text=${encodeURIComponent(text)}`, '_blank');
  });
}

/* =====================
   SCROLL ANIMATIONS (AOS-lite)
   ===================== */
const aosObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('aos-animate');
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-aos]').forEach(el => aosObserver.observe(el));

/* =====================
   SMOOTH SCROLL for anchors
   ===================== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* =====================
   INIT
   ===================== */
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved or default language
  applyLang(currentLang);

  // Language button clicks
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
  });

  // Trigger scroll check on load
  window.dispatchEvent(new Event('scroll'));
});
