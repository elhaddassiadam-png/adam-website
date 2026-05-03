/* =====================
   TRANSLATIONS
   ===================== */
const i18n = {
  ar: {
    dir: 'rtl', lang: 'ar',
    'meta.title': 'آدم الحدسي | تصميم مواقع احترافية بالمغرب - من 1500 درهم',
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
    'blog.art1.intro': 'لم يعد الإنترنت رفاهية أو خياراً اختيارياً — بل أصبح ضرورة حياتية لكل عمل تجاري يريد البقاء والنمو في عالم اليوم. أثبتت الأرقام أن الشركات التي تستثمر في حضورها الرقمي تنمو بشكل أسرع وتصل إلى عملاء أكثر بتكلفة أقل.',
    'blog.art2.title': 'لماذا يحتاج كل عمل تجاري إلى موقع إلكتروني؟',
    'blog.art2.excerpt': 'في عالم يبحث فيه الناس عن كل شيء على الإنترنت، غيابك الرقمي يعني خسارة فرص ذهبية...',
    'blog.art2.intro': '"لدينا صفحة على فيسبوك — هل نحتاج موقعاً أيضاً؟" هذا سؤال كثير من أصحاب الأعمال يطرحونه. الجواب القاطع: نعم، تحتاج موقعاً خاصاً بك، وإليك السبب.',
    'blog.readmore': 'اقرأ المزيد', 'blog.viewall': 'عرض جميع المقالات',
    'blog.page.badge': 'مقالاتنا', 'blog.page.title': 'اقرأ واستفد',
    'blog.page.subtitle': 'مقالات تساعدك على فهم أهمية الحضور الرقمي لعملك',
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
    'footer.copy': 'جميع الحقوق محفوظة © 2026 آدم الحدسي',
    'whatsapp.tooltip': 'تواصل معنا',
    /* --- صفحة الشروط --- */
    'terms.page.badge': 'الشروط والأحكام',
    'terms.hero.title': 'شفافية تامة في كل تفصيل',
    'terms.hero.p': 'نؤمن بأن الوضوح والصدق هما أساس أي علاقة عمل ناجحة ومباركة بإذن الله',
    'terms.s1.h': 'التزامنا بالقيم الإسلامية',
    'terms.s1.p': 'بتوفيق الله تعالى، نعمل وفق مبادئ الإسلام الحنيف في كل جانب من جوانب عملنا. هذا ليس مجرد شرط في العقد — بل هو قناعة راسخة وجوهر ما نقدمه.',
    'terms.s1.i1': 'المصمم لا يضيف أي محتوى يخالف الدين الإسلامي تحت أي ظرف أو طلب',
    'terms.s1.i2': 'لا نستخدم صور نساء متبرجات أو أي محتوى غير لائق في أي مشروع',
    'terms.s1.i3': 'لا شهادات عملاء مزورة ولا ادعاءات كاذبة بأي شكل كان',
    'terms.s1.i4': 'لا محتوى مشبوه أو إعلانات مضللة أو وعود غير حقيقية',
    'terms.s1.i5': 'كل ما يُنشر في موقعك يجب أن يكون صادقاً وحقيقياً ومرضياً لله تعالى',
    'terms.s1.i6': 'إن طُلب منا محتوى يخالف هذه المبادئ، نحتفظ بالحق في رفض المشروع',
    'terms.s2.h': 'سياسة التعديلات',
    'terms.s2.p': 'نريد أن تكون راضياً تماماً عن موقعك. لذلك نمنحك حق التعديل لضمان أن الموقع يعبر بدقة عن هويتك وعملك. إليك سياستنا الواضحة:',
    'terms.s2.free': 'تعديلات مجانية بالكامل',
    'terms.s2.paid': 'درهم لكل تعديل إضافي',
    'terms.s2.i1': 'التعديل يشمل: تغيير الألوان، الخطوط، النصوص، الصور، ترتيب الأقسام',
    'terms.s2.i2': 'التعديلات الثلاثة المجانية تُحسب من تاريخ تسليم النسخة الأولى للعميل',
    'terms.s2.i3': 'التعديل الإضافي ما بعد الثلاثة الأولى: 100 درهم لكل تعديل واحد',
    'terms.s2.i4': 'إعادة التصميم الكاملة تُعدّ مشروعاً جديداً وتخضع لأسعار منفصلة',
    'terms.s3.h': 'نطاق العمل والتسليم',
    'terms.s3.p': 'وضوح نطاق العمل من البداية يجنّب الطرفين أي سوء فهم أو خلاف لاحق. فيما يلي ما يتضمنه كل مشروع وما لا يتضمنه.',
    'terms.s3.i1': '<strong>يشمل المشروع:</strong> تصميم وتطوير الموقع حسب المتفق عليه في بداية التعاقد',
    'terms.s3.i2': 'يُسلّم الموقع جاهزاً للنشر مع ملفاته كاملة أو مُنشراً على الاستضافة حسب الاتفاق',
    'terms.s3.i3': 'يُقدَّم دعم فني لمدة محددة بعد التسليم لتصحيح أي أخطاء تقنية غير مقصودة',
    'terms.s3.i4': '<strong>لا يشمل (ما لم يُتفق عليه مسبقاً):</strong> استضافة الموقع، تسجيل النطاق، إنشاء المحتوى والنصوص',
    'terms.s3.i5': 'إدارة وسائل التواصل الاجتماعي أو حملات الإعلانات المدفوعة',
    'terms.s4.h': 'شروط الدفع',
    'terms.s4.p': 'نتفق مسبقاً على طريقة الدفع قبل بدء العمل لضمان حقوق الطرفين وراحة البال.',
    'terms.s4.i1': 'يُدفع جزء من المبلغ مقدماً عند بدء المشروع (يُتفق عليه في البداية)',
    'terms.s4.i2': 'يُسدَّد المبلغ المتبقي عند تسليم النسخة النهائية المعتمدة من العميل',
    'terms.s4.i3': 'التعديلات الإضافية (100 درهم/تعديل) تُدفع قبل تنفيذها',
    'terms.s4.i4': 'في حال إلغاء المشروع بعد بدء العمل، لا يُسترد المبلغ المقدَّم',
    'terms.s5.h': 'التزامات العميل',
    'terms.s5.p': 'التعاون المثمر يقوم على مسؤولية الطرفين. من جهة العميل:',
    'terms.s5.i1': 'تقديم المحتوى المطلوب (نصوص، شعار، صور) في الوقت المتفق عليه',
    'terms.s5.i2': 'التأكد من أن المحتوى المقدَّم حلال ولا يخالف القانون أو الشريعة',
    'terms.s5.i3': 'تقديم ملاحظات التعديل بشكل واضح ومحدد لتسهيل التنفيذ',
    'terms.s5.i4': 'الرد على التواصل والاستفسارات في وقت معقول لضمان سير العمل',
    'terms.s5.i5': 'الالتزام بشروط الدفع المتفق عليها في بداية التعاقد',
    'terms.s6.h': 'ملاحظات عامة',
    'terms.s6.p': 'هذه الشروط مبنية على قيم الصدق والأمانة ابتغاءً لمرضاة الله تعالى. نسعى دائماً لحل أي خلاف بالحسنى والتفاهم المتبادل.',
    'terms.s6.i1': 'أي خلاف يُحل بالتراضي والتفاهم المباشر عبر واتساب أو البريد الإلكتروني',
    'terms.s6.i2': 'هذه الشروط قابلة للتحديث — ينطبق على كل مشروع الشروط السارية وقت التعاقد',
    'terms.s6.i3': 'للاستفسار أو التوضيح حول أي بند، تواصل معنا قبل بدء أي مشروع',
    'terms.s6.btn': 'تواصل معنا للاستفسار',
  },

  en: {
    dir: 'ltr', lang: 'en',
    'meta.title': 'Adam Haddasi | Professional Websites in Morocco - from 1500 MAD',
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
    'blog.art1.intro': 'The internet is no longer a luxury or an option — it has become a vital necessity for every business that wants to survive and grow in today\'s world. Numbers prove that companies investing in their digital presence grow faster and reach more customers at a lower cost.',
    'blog.art2.title': 'Why Does Every Business Need a Website?',
    'blog.art2.excerpt': 'In a world where people search for everything online, your digital absence means losing golden opportunities...',
    'blog.art2.intro': '"We have a Facebook page — do we also need a website?" This is a question many business owners ask. The definitive answer: Yes, you need your own website. Here is why.',
    'blog.readmore': 'Read More', 'blog.viewall': 'View All Articles',
    'blog.page.badge': 'Our Blog', 'blog.page.title': 'Read & Learn',
    'blog.page.subtitle': 'Articles to help you understand the importance of digital presence for your business',
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
    'footer.copy': 'All rights reserved © 2026 Adam Haddasi',
    'whatsapp.tooltip': 'Contact Us',
    /* --- Terms page --- */
    'terms.page.badge': 'Terms & Conditions',
    'terms.hero.title': 'Complete Transparency in Every Detail',
    'terms.hero.p': 'We believe that clarity and honesty are the foundation of any successful and blessed working relationship',
    'terms.s1.h': 'Our Commitment to Islamic Values',
    'terms.s1.p': 'With God\'s help, we work according to Islamic principles in every aspect of our work. This is not just a contractual clause — it is a firm conviction and the very core of what we offer.',
    'terms.s1.i1': 'The designer will not add any content that violates Islamic religion under any circumstances or request',
    'terms.s1.i2': 'We do not use immodest images of women or any inappropriate content in any project',
    'terms.s1.i3': 'No fake client testimonials or false claims of any kind',
    'terms.s1.i4': 'No suspicious content, misleading advertising, or unrealistic promises',
    'terms.s1.i5': 'All content published on your website must be truthful, real, and pleasing to Allah',
    'terms.s1.i6': 'If we are asked for content that violates these principles, we reserve the right to refuse the project',
    'terms.s2.h': 'Revision Policy',
    'terms.s2.p': 'We want you to be completely satisfied with your website. We give you the right to revise to ensure the site accurately represents your identity and business.',
    'terms.s2.free': 'Completely free revisions',
    'terms.s2.paid': 'MAD per additional revision',
    'terms.s2.i1': 'Revision includes: changing colors, fonts, texts, images, and section layout',
    'terms.s2.i2': 'The 3 free revisions are counted from the delivery date of the first version to the client',
    'terms.s2.i3': 'Additional revision after the first 3: 100 MAD per single revision',
    'terms.s2.i4': 'A complete redesign is considered a new project and is subject to separate pricing',
    'terms.s3.h': 'Scope & Delivery',
    'terms.s3.p': 'Clarity on the scope of work from the start avoids any misunderstanding or later dispute. Below is what each project includes and excludes.',
    'terms.s3.i1': '<strong>Project includes:</strong> Design and development of the website as agreed at the start of the contract',
    'terms.s3.i2': 'The website is delivered ready for publication with all complete files, or hosted as agreed',
    'terms.s3.i3': 'Technical support is provided for a defined period after delivery to fix any unintentional technical errors',
    'terms.s3.i4': '<strong>Not included (unless previously agreed):</strong> Website hosting, domain registration, content and text creation',
    'terms.s3.i5': 'Social media management or paid advertising campaigns',
    'terms.s4.h': 'Payment Terms',
    'terms.s4.p': 'We agree in advance on the payment method before starting work to protect both parties\' rights and provide peace of mind.',
    'terms.s4.i1': 'A portion of the amount is paid upfront when the project begins (agreed upon at the start)',
    'terms.s4.i2': 'The remaining amount is paid upon delivery of the final version approved by the client',
    'terms.s4.i3': 'Additional revisions (100 MAD/revision) are paid before being carried out',
    'terms.s4.i4': 'If the project is cancelled after work has begun, the advance payment is non-refundable',
    'terms.s5.h': 'Client Obligations',
    'terms.s5.p': 'A productive collaboration is based on the responsibility of both parties. From the client\'s side:',
    'terms.s5.i1': 'Provide required content (texts, logo, images) in the agreed time',
    'terms.s5.i2': 'Ensure that the provided content is lawful and complies with Islamic values',
    'terms.s5.i3': 'Provide revision feedback clearly and specifically to facilitate implementation',
    'terms.s5.i4': 'Respond to communications and inquiries in a reasonable time to ensure smooth workflow',
    'terms.s5.i5': 'Comply with the payment terms agreed upon at the beginning of the contract',
    'terms.s6.h': 'General Notes',
    'terms.s6.p': 'These terms are built on honesty and integrity, seeking God\'s pleasure. We always strive to resolve any dispute amicably and through mutual understanding.',
    'terms.s6.i1': 'Any dispute is resolved by mutual agreement via WhatsApp or email',
    'terms.s6.i2': 'These terms may be updated — each project is subject to the terms in force at contract time',
    'terms.s6.i3': 'For any clarification regarding any clause, contact us before starting any project',
    'terms.s6.btn': 'Contact Us for Inquiry',
  },

  fr: {
    dir: 'ltr', lang: 'fr',
    'meta.title': 'Adam Haddasi | Sites Web Professionnels au Maroc - à partir de 1500 MAD',
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
    'why.f1.title': 'Haute Qualité', 'why.f1.desc': 'Sites conçus selon les plus hauts standards techniques et esthétiques pour refléter une image professionnelle',
    'why.f2.title': 'Transparence Totale', 'why.f2.desc': 'Pas de surprises tarifaires, pas de fausses promesses — tout est clair dès le départ',
    'why.f3.title': 'Valeurs Islamiques', 'why.f3.desc': 'Nous n\'ajoutons aucun contenu contraire aux valeurs islamiques — notre travail recherche avant tout la satisfaction de Dieu',
    'why.f4.title': 'Contact Facile', 'why.f4.desc': 'Disponible via WhatsApp et email pour répondre à vos questions rapidement',
    'why.f5.title': 'Compatible Mobile', 'why.f5.desc': 'Sites responsives qui fonctionnent parfaitement sur tous les appareils',
    'why.f6.title': 'SEO Intégré', 'why.f6.desc': 'Référencement naturel intégré dès le départ pour que vos clients vous trouvent sur Google',
    'process.badge': 'Notre Processus', 'process.title': 'Comment Travaillons-Nous Ensemble ?',
    'process.subtitle': 'Un processus clair et simple du premier contact au lancement de votre site',
    'step1.title': 'Consultation', 'step1.desc': 'Contactez-nous via WhatsApp ou email pour discuter de vos besoins et objectifs',
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
    'blog.art1.intro': 'Internet n\'est plus un luxe ni une option — c\'est devenu une nécessité vitale pour toute entreprise qui veut survivre et croître dans le monde d\'aujourd\'hui. Les chiffres prouvent que les entreprises qui investissent dans leur présence digitale grandissent plus vite et atteignent plus de clients à moindre coût.',
    'blog.art2.title': 'Pourquoi Chaque Entreprise a Besoin d\'un Site Web ?',
    'blog.art2.excerpt': 'Dans un monde où les gens cherchent tout en ligne, votre absence digitale signifie perdre des opportunités précieuses...',
    'blog.art2.intro': '"Nous avons une page Facebook — avons-nous aussi besoin d\'un site ?" C\'est une question que beaucoup posent. La réponse définitive : Oui, vous avez besoin de votre propre site web. Voici pourquoi.',
    'blog.readmore': 'Lire la Suite', 'blog.viewall': 'Voir Tous les Articles',
    'blog.page.badge': 'Notre Blog', 'blog.page.title': 'Lisez & Apprenez',
    'blog.page.subtitle': 'Articles pour comprendre l\'importance de la présence digitale pour votre entreprise',
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
    'footer.copy': 'Tous droits réservés © 2026 Adam Haddasi',
    'whatsapp.tooltip': 'Nous Contacter',
    /* --- Terms page --- */
    'terms.page.badge': 'Conditions Générales',
    'terms.hero.title': 'Transparence Totale dans Chaque Détail',
    'terms.hero.p': 'Nous croyons que la clarté et l\'honnêteté sont la base de toute relation professionnelle réussie et bénie',
    'terms.s1.h': 'Notre Engagement envers les Valeurs Islamiques',
    'terms.s1.p': 'Avec l\'aide de Dieu, nous travaillons selon les principes islamiques dans tous les aspects de notre travail. Ce n\'est pas juste une clause contractuelle — c\'est une conviction profonde et le cœur de ce que nous offrons.',
    'terms.s1.i1': 'Le designer n\'ajoutera aucun contenu contraire à la religion islamique sous aucune circonstance',
    'terms.s1.i2': 'Nous n\'utilisons pas d\'images indécentes ou de contenu inapproprié dans aucun projet',
    'terms.s1.i3': 'Aucun faux témoignage client ou fausse affirmation d\'aucune sorte',
    'terms.s1.i4': 'Aucun contenu suspect, publicité trompeuse ou promesses irréalistes',
    'terms.s1.i5': 'Tout le contenu publié sur votre site doit être véridique et agréable à Dieu',
    'terms.s1.i6': 'Si on nous demande du contenu violant ces principes, nous nous réservons le droit de refuser le projet',
    'terms.s2.h': 'Politique de Révision',
    'terms.s2.p': 'Nous voulons que vous soyez complètement satisfait de votre site. Nous vous accordons le droit de révision pour garantir que le site représente fidèlement votre identité.',
    'terms.s2.free': 'révisions entièrement gratuites',
    'terms.s2.paid': 'MAD par révision supplémentaire',
    'terms.s2.i1': 'La révision comprend : changement de couleurs, polices, textes, images, disposition des sections',
    'terms.s2.i2': 'Les 3 révisions gratuites sont comptées à partir de la date de livraison de la première version',
    'terms.s2.i3': 'Révision supplémentaire après les 3 premières : 100 MAD par révision',
    'terms.s2.i4': 'Une refonte complète est considérée comme un nouveau projet avec une tarification séparée',
    'terms.s3.h': 'Portée et Livraison',
    'terms.s3.p': 'La clarté sur la portée du travail dès le départ évite tout malentendu ou litige ultérieur.',
    'terms.s3.i1': '<strong>Le projet comprend :</strong> Conception et développement du site comme convenu au départ',
    'terms.s3.i2': 'Le site est livré prêt à être publié avec tous ses fichiers, ou hébergé selon l\'accord',
    'terms.s3.i3': 'Un support technique est fourni pendant une période définie après la livraison',
    'terms.s3.i4': '<strong>Non inclus (sauf accord préalable) :</strong> Hébergement, enregistrement de domaine, création de contenu',
    'terms.s3.i5': 'Gestion des réseaux sociaux ou campagnes publicitaires payantes',
    'terms.s4.h': 'Conditions de Paiement',
    'terms.s4.p': 'Nous convenons à l\'avance du mode de paiement avant de commencer le travail pour protéger les deux parties.',
    'terms.s4.i1': 'Une partie du montant est payée d\'avance au début du projet (convenue au départ)',
    'terms.s4.i2': 'Le montant restant est payé à la livraison de la version finale approuvée',
    'terms.s4.i3': 'Les révisions supplémentaires (100 MAD/révision) sont payées avant exécution',
    'terms.s4.i4': 'En cas d\'annulation après le début du travail, l\'avance n\'est pas remboursable',
    'terms.s5.h': 'Obligations du Client',
    'terms.s5.p': 'Une collaboration fructueuse repose sur la responsabilité des deux parties.',
    'terms.s5.i1': 'Fournir le contenu requis (textes, logo, images) dans les délais convenus',
    'terms.s5.i2': 'S\'assurer que le contenu fourni est licite et conforme aux valeurs islamiques',
    'terms.s5.i3': 'Fournir des retours de révision clairs et précis pour faciliter la mise en œuvre',
    'terms.s5.i4': 'Répondre aux communications dans un délai raisonnable pour assurer le bon déroulement',
    'terms.s5.i5': 'Respecter les conditions de paiement convenues au début du contrat',
    'terms.s6.h': 'Notes Générales',
    'terms.s6.p': 'Ces conditions sont fondées sur l\'honnêteté et l\'intégrité, en cherchant la satisfaction de Dieu. Nous cherchons toujours à résoudre tout litige à l\'amiable.',
    'terms.s6.i1': 'Tout litige est résolu à l\'amiable via WhatsApp ou email',
    'terms.s6.i2': 'Ces conditions peuvent être mises à jour — chaque projet est soumis aux conditions en vigueur',
    'terms.s6.i3': 'Pour toute clarification, contactez-nous avant de commencer un projet',
    'terms.s6.btn': 'Nous Contacter pour Renseignements',
  },

  es: {
    dir: 'ltr', lang: 'es',
    'meta.title': 'Adam Haddasi | Sitios Web Profesionales en Marruecos - desde 1500 MAD',
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
    'why.f1.title': 'Alta Calidad', 'why.f1.desc': 'Sitios diseñados según los más altos estándares técnicos y estéticos para reflejar una imagen profesional',
    'why.f2.title': 'Total Transparencia', 'why.f2.desc': 'Sin sorpresas de precio, sin promesas falsas — todo es claro desde el principio',
    'why.f3.title': 'Valores Islámicos', 'why.f3.desc': 'No añadimos ningún contenido que vaya en contra de los valores islámicos — nuestro trabajo busca la satisfacción de Dios',
    'why.f4.title': 'Contacto Fácil', 'why.f4.desc': 'Disponible vía WhatsApp y correo electrónico para responder tus preguntas rápidamente',
    'why.f5.title': 'Compatible con Móviles', 'why.f5.desc': 'Sitios responsivos que funcionan perfectamente en todos los dispositivos',
    'why.f6.title': 'SEO Integrado', 'why.f6.desc': 'Optimización para motores de búsqueda integrada desde el inicio para que tus clientes te encuentren en Google',
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
    'blog.art1.intro': 'Internet ya no es un lujo ni una opción — se ha convertido en una necesidad vital para todo negocio que quiera sobrevivir y crecer en el mundo actual. Los números demuestran que las empresas que invierten en su presencia digital crecen más rápido y llegan a más clientes a menor costo.',
    'blog.art2.title': '¿Por Qué Todo Negocio Necesita un Sitio Web?',
    'blog.art2.excerpt': 'En un mundo donde las personas buscan todo en línea, tu ausencia digital significa perder oportunidades doradas...',
    'blog.art2.intro': '"Tenemos una página de Facebook, ¿también necesitamos un sitio web?" Esta es una pregunta que muchos propietarios hacen. La respuesta definitiva: Sí, necesitas tu propio sitio web. Aquí está el motivo.',
    'blog.readmore': 'Leer Más', 'blog.viewall': 'Ver Todos los Artículos',
    'blog.page.badge': 'Nuestro Blog', 'blog.page.title': 'Lee y Aprende',
    'blog.page.subtitle': 'Artículos para entender la importancia de la presencia digital para tu negocio',
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
    'footer.copy': 'Todos los derechos reservados © 2026 Adam Haddasi',
    'whatsapp.tooltip': 'Contáctanos',
    /* --- Terms page --- */
    'terms.page.badge': 'Términos y Condiciones',
    'terms.hero.title': 'Transparencia Total en Cada Detalle',
    'terms.hero.p': 'Creemos que la claridad y la honestidad son la base de cualquier relación de trabajo exitosa y bendecida',
    'terms.s1.h': 'Nuestro Compromiso con los Valores Islámicos',
    'terms.s1.p': 'Con la ayuda de Dios, trabajamos según los principios islámicos en todos los aspectos de nuestro trabajo. No es solo una cláusula contractual — es una convicción firme y el núcleo de lo que ofrecemos.',
    'terms.s1.i1': 'El diseñador no añadirá ningún contenido que viole la religión islámica bajo ninguna circunstancia',
    'terms.s1.i2': 'No utilizamos imágenes inapropiadas de mujeres ni ningún contenido indecente en ningún proyecto',
    'terms.s1.i3': 'Sin testimonios falsos de clientes ni afirmaciones falsas de ningún tipo',
    'terms.s1.i4': 'Sin contenido sospechoso, publicidad engañosa ni promesas irreales',
    'terms.s1.i5': 'Todo el contenido publicado en tu sitio debe ser veraz y agradable a Dios',
    'terms.s1.i6': 'Si se nos pide contenido que viole estos principios, nos reservamos el derecho de rechazar el proyecto',
    'terms.s2.h': 'Política de Revisiones',
    'terms.s2.p': 'Queremos que estés completamente satisfecho con tu sitio web. Te damos el derecho de revisión para garantizar que el sitio represente fielmente tu identidad.',
    'terms.s2.free': 'revisiones completamente gratuitas',
    'terms.s2.paid': 'MAD por cada revisión adicional',
    'terms.s2.i1': 'La revisión incluye: cambio de colores, fuentes, textos, imágenes, disposición de secciones',
    'terms.s2.i2': 'Las 3 revisiones gratuitas se cuentan desde la fecha de entrega de la primera versión',
    'terms.s2.i3': 'Revisión adicional después de las 3 primeras: 100 MAD por revisión',
    'terms.s2.i4': 'Un rediseño completo se considera un nuevo proyecto con precios separados',
    'terms.s3.h': 'Alcance y Entrega',
    'terms.s3.p': 'La claridad sobre el alcance del trabajo desde el principio evita malentendidos o disputas posteriores.',
    'terms.s3.i1': '<strong>El proyecto incluye:</strong> Diseño y desarrollo del sitio según lo acordado al inicio del contrato',
    'terms.s3.i2': 'El sitio se entrega listo para publicación con todos sus archivos, o alojado según el acuerdo',
    'terms.s3.i3': 'Se brinda soporte técnico durante un período definido después de la entrega',
    'terms.s3.i4': '<strong>No incluido (salvo acuerdo previo):</strong> Alojamiento, registro de dominio, creación de contenido',
    'terms.s3.i5': 'Gestión de redes sociales o campañas de publicidad pagada',
    'terms.s4.h': 'Condiciones de Pago',
    'terms.s4.p': 'Acordamos el método de pago por adelantado antes de comenzar el trabajo para proteger a ambas partes.',
    'terms.s4.i1': 'Una parte del importe se paga por adelantado al comenzar el proyecto (acordado al inicio)',
    'terms.s4.i2': 'El importe restante se paga al entregar la versión final aprobada',
    'terms.s4.i3': 'Las revisiones adicionales (100 MAD/revisión) se pagan antes de su implementación',
    'terms.s4.i4': 'En caso de cancelación después de comenzar el trabajo, el anticipo no es reembolsable',
    'terms.s5.h': 'Obligaciones del Cliente',
    'terms.s5.p': 'Una colaboración fructífera se basa en la responsabilidad de ambas partes.',
    'terms.s5.i1': 'Proporcionar el contenido requerido (textos, logo, imágenes) en el tiempo acordado',
    'terms.s5.i2': 'Asegurarse de que el contenido proporcionado sea lícito y conforme a los valores islámicos',
    'terms.s5.i3': 'Proporcionar comentarios de revisión de forma clara y específica',
    'terms.s5.i4': 'Responder a comunicaciones e inquietudes en un tiempo razonable',
    'terms.s5.i5': 'Cumplir con las condiciones de pago acordadas al inicio del contrato',
    'terms.s6.h': 'Notas Generales',
    'terms.s6.p': 'Estos términos están basados en la honestidad e integridad, buscando la satisfacción de Dios. Siempre buscamos resolver cualquier disputa amistosamente.',
    'terms.s6.i1': 'Cualquier disputa se resuelve de mutuo acuerdo por WhatsApp o correo electrónico',
    'terms.s6.i2': 'Estos términos pueden actualizarse — cada proyecto está sujeto a los términos vigentes al momento del contrato',
    'terms.s6.i3': 'Para cualquier aclaración, contáctenos antes de comenzar un proyecto',
    'terms.s6.btn': 'Contáctenos para Consultas',
  }
};

/* =====================
   APPLY LANGUAGE
   ===================== */
let currentLang = localStorage.getItem('lang') || 'ar';

function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);

  const html = document.getElementById('html-root');
  html.setAttribute('lang', t.lang);
  html.setAttribute('dir', t.dir);

  // Update page title
  if (t['meta.title']) document.title = t['meta.title'];

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

  // Show/hide language content blocks
  document.querySelectorAll('[data-lang-block]').forEach(el => {
    el.style.display = el.getAttribute('data-lang-block') === lang ? '' : 'none';
  });

  // Update active language button
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
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
  const backBtn = document.getElementById('back-to-top');
  if (backBtn) backBtn.classList.toggle('visible', window.scrollY > 400);
});

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
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
   SCROLL ANIMATIONS
   ===================== */
const aosObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('aos-animate');
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-aos]').forEach(el => aosObserver.observe(el));

/* =====================
   SMOOTH SCROLL
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
  applyLang(currentLang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
  });
  window.dispatchEvent(new Event('scroll'));
});
