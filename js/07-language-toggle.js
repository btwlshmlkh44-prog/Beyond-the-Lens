(() => {
  const translations = {
    Cover: "الغلاف",
    "About me": "نبذة عني",
    About: "عنّي",
    Journey: "رحلتي",
    Skills: "المهارات",
    Projects: "المشاريع",
    "Ishkarra Parfums": "إيشكارا للعطور",
    "Brand identity": "الهوية البصرية",
    Logos: "الشعارات",
    Posters: "الملصقات",
    Photography: "التصوير",
    "Digital and motion": "التصميم الرقمي والموشن",
    Process: "مراحل العمل",
    Vision: "الرؤية",
    Achievements: "الإنجازات",
    Contact: "التواصل",
    Close: "إغلاق",
    Index: "الفهرس",
    "BTEC CREATIVE MEDIA": "الإعلام الإبداعي — BTEC",
    "AMMAN · JORDAN": "عمّان · الأردن",
    "CREATIVE MEDIA  |  PHOTOGRAPHY  |  VISUAL STORYTELLING":
      "الإعلام الإبداعي  |  التصوير  |  السرد البصري",
    "CREATIVE MEDIA | VISUAL STORYTELLING | PHOTOGRAPHY":
      "الإعلام الإبداعي | السرد البصري | التصوير",
    "A Creative Mind. A Visual Language. A Medical Vision.": "عقل مبدع، لغة بصرية، ورؤية طبية.",
    "ENTER THE PORTFOLIO": "ادخل إلى معرض الأعمال",
    "FUTURE FOCUS: MEDICAL & CLINICAL PHOTOGRAPHY": "طموحي القادم: التصوير الطبي والسريري",
    ABOUT: "نبذة عني",
    "Art as evidence.": "الفن شاهد،",
    "Images that matter.": "والصور تصنع أثرًا.",
    "Batool Shamlakh is a multidisciplinary creative and BTEC Creative Media student in Amman, with a passion for photography, graphic design, filmmaking, animation and digital communication.":
      "بتول شملخ مبدعة متعددة التخصصات وطالبة إعلام إبداعي BTEC في عمّان. تهتم بالتصوير والتصميم الجرافيكي وصناعة الأفلام والرسوم المتحركة والتواصل الرقمي.",
    "She believes visual media is more than aesthetics. It is a language that communicates ideas, documents reality and creates meaningful impact.":
      "تؤمن بأن الإعلام البصري يتجاوز الجانب الجمالي؛ فهو لغة تنقل الأفكار وتوثّق الواقع وتصنع أثرًا ذا معنى.",
    "Her long-term ambition is to join creative visual expertise with medicine through Medical & Clinical Photography, documenting surgical procedures for education, research and professional training.":
      "تطمح إلى الجمع بين خبرتها الإبداعية والطب من خلال التصوير الطبي والسريري، وتوثيق الإجراءات الجراحية لأغراض التعليم والبحث والتدريب المهني.",
    Creativity: "الإبداع",
    "Visual thinking": "التفكير البصري",
    Communication: "التواصل",
    Curiosity: "الفضول",
    Ambition: "الطموح",
    "Art × Science": "الفن × العلم",
    "BTEC Creative Media": "الإعلام الإبداعي BTEC",
    "Starts her studies.": "بداية الدراسة.",
    "Photography & visual communication": "التصوير والتواصل البصري",
    "Develops her craft.": "تطوّر مهاراتها.",
    "Graphic design & content": "التصميم الجرافيكي وصناعة المحتوى",
    "Digital content creation.": "إنشاء المحتوى الرقمي.",
    "Freelance & multimedia": "العمل الحر والوسائط المتعددة",
    "Creative activities.": "مشاريع إبداعية.",
    "Summer 2026": "صيف 2026",
    "Al Mamlaka News": "قناة المملكة",
    "Media training.": "تدريب إعلامي.",
    "Graduation (expected)": "التخرج (متوقع)",
    "Next: Medical & Clinical Photography.": "الخطوة التالية: التصوير الطبي والسريري.",
    "About and personal identity": "نبذة وهوية شخصية",
    عنّي: "عنّي",
    "Creative media student, photographer and painter from Amman, learning to see closely.":
      "طالبة إعلام إبداعي ومصورة ورسامة من عمّان، تتعلّم أن ترى التفاصيل بعمق.",
    "I am pursuing a three-year BTEC Diploma in Creative Media Production, and have worked since 2023 on graphic design, photography, video editing, animation and motion graphics.":
      "أدرس دبلوم BTEC في إنتاج الإعلام الإبداعي لمدة ثلاث سنوات، وأعمل منذ 2023 في التصميم الجرافيكي والتصوير وتحرير الفيديو والرسوم المتحركة والموشن جرافيك.",
    "My long-term direction is clinical: photography that documents medicine with accuracy and care.":
      "أتجه مستقبلًا إلى التصوير السريري الذي يوثّق الطب بدقة واهتمام.",
    "Camera lens": "عدسة الكاميرا",
    "Capturing life, surgery and untold stories.":
      "توثيق الحياة والعمليات الجراحية والقصص التي لم تُروَ.",
    Pangolin: "البنغول",
    "A rare soul worth protecting, and a promise to be its voice.":
      "كائن نادر يستحق الحماية، ووعد بأن أكون صوتًا له.",
    "DNA and stethoscope": "الحمض النووي والسماعة الطبية",
    "Science, medicine and a bigger tomorrow. Healing people and animals with the same compassion.":
      "العلم والطب وغدٌ أفضل؛ شفاء الإنسان والحيوان بالرحمة ذاتها.",
    "Paintbrush and feather": "فرشاة وريشة",
    "Art, creativity and the beauty in every detail.": "الفن والإبداع وجمال كل تفصيل.",
    "Creative journey": "الرحلة الإبداعية",
    "Painting first. Then stage, camera and design.": "بدأت بالرسم، ثم المسرح والكاميرا والتصميم.",
    "Scroll sideways": "مرّر أفقيًا",
    "Painting at the Institute of Fine Arts, Amman. A year in the visual arts section, certified by the Ministry of Culture. This is where my eye for light, portrait and symbol began.":
      "درست الرسم في معهد الفنون الجميلة في عمّان لمدة عام ضمن قسم الفنون البصرية، بشهادة من وزارة الثقافة. هنا بدأ اهتمامي بالضوء والبورتريه والرموز.",
    "Stage and camera. A year in the institute's performing arts section, while starting a BTEC Diploma in Creative Media Production and my first freelance multimedia work.":
      "المسرح والكاميرا. سنة في قسم الفنون الأدائية بالمعهد، بالتزامن مع بدء دبلوم BTEC في إنتاج الإعلام الإبداعي وأولى مشاريعي الحرة متعددة الوسائط.",
    "Design, video and photography. Brand identities, posters, studio and event shoots, and exhibitions, all pointed toward clinical photography.":
      "التصميم والفيديو والتصوير. هويات بصرية وملصقات وتصوير استوديو وفعاليات ومعارض، كلها تقرّبني من التصوير السريري.",
    "Skills and creative tools": "المهارات والأدوات الإبداعية",
    "Creative skills": "المهارات الإبداعية",
    "Multimedia production": "إنتاج الوسائط المتعددة",
    "Graphic design": "التصميم الجرافيكي",
    "Video editing": "تحرير الفيديو",
    "Motion graphics": "موشن جرافيك",
    Animation: "الرسوم المتحركة",
    "Visual storytelling": "السرد البصري",
    "Social media content": "محتوى وسائل التواصل الاجتماعي",
    "Web design": "تصميم المواقع",
    "Creative problem-solving": "حل المشكلات الإبداعية",
    "Time management": "إدارة الوقت",
    Languages: "اللغات",
    "Russian, basic": "الروسية، مستوى أساسي",
    "A SELECTION OF CREATIVE WORK": "مختارات من الأعمال الإبداعية",
    PROJECTS: "المشاريع",
    "Ideas shaped into visual worlds.": "أفكار تتحول إلى عوالم بصرية.",
    "Explore selected work": "تصفّح مختارات الأعمال",
    "Selected projects: Ishkarra Parfums, a concept brand":
      "مشاريع مختارة: إيشكارا للعطور، علامة تجارية تصورية",
    "Visual Identity": "الهوية البصرية",
    "Featured story": "قصة مميزة",
    "A perfume house for a kingdom the sand forgot. Concept brand.":
      "دار عطور لمملكة نسيها الرمل. علامة تجارية تصورية.",
    "Remember what": "تذكّر ما",
    "the sand forgot.": "نسيه الرمل.",
    "Ishkarra Parfums imagines the memory of a lost desert kingdom, Nahareth. The symbol is an amphora holding a flame: a vessel, and the thing it keeps alive.":
      "تستحضر إيشكارا للعطور ذاكرة مملكة صحراوية ضائعة تُدعى ناهارث. رمزها جرّة تحتضن شعلة: وعاءٌ يحفظ ما يبقيه حيًا.",
    "Type and colour": "الخط واللون",
    "Bronze, sand and lapis night": "البرونز والرمل وزرقة اللازورد",
    "A carved, high-contrast display serif for the name; a typewriter mono for museum-style captions; six named colours kept warm and dusty.":
      "خط سيريفي بارز عالي التباين للاسم، وخط أحادي يشبه الآلة الكاتبة للتعليقات بأسلوب المتاحف، وستة ألوان دافئة ومطفأة.",
    "Final identity": "الهوية النهائية",
    "One mark, five ways to wear it": "رمز واحد، بخمسة تطبيقات",
    Applications: "التطبيقات",
    "From packaging to phone": "من التغليف إلى الهاتف",
    Ishkarra: "إيشكارا",
    "Brand identity: self-initiated concept brands":
      "الهوية البصرية: علامات تجارية تصورية من ابتكاري",
    "BRAND WORLDS · SYSTEMS · STORIES": "عوالم العلامات · الأنظمة · القصص",
    VISUAL: "الهوية",
    IDENTITY: "البصرية",
    "Distinctive worlds, built from a single idea.": "عوالم متفردة، تنطلق من فكرة واحدة.",
    "Crispy Tales": "كريسبي تيلز",
    "Concept brand": "علامة تجارية تصورية",
    "A fried chicken restaurant whose brand tells a story: every meal comes with a tale.":
      "مطعم دجاج مقلي تروي علامته حكاية؛ فكل وجبة تأتي ومعها قصة.",
    "Tiny Treasures": "تايني تريجرز",
    "Keepsakes wrapped like secrets: soft florals, lavender and fine-line sketches for a gift brand.":
      "تذكارات مغلّفة كالأسرار: زهور ناعمة وخزامى ورسوم دقيقة لعلامة هدايا.",
    Aurelle: "أوريل",
    "A moonlit luxury emblem in black, bronze and stone, built for jewelry and ritual.":
      "شعار فاخر تحت ضوء القمر، بألوان الأسود والبرونز والحجر، صُمم للمجوهرات والطقوس.",
    "Mama and Daughters": "ماما وبناتها",
    "A family kitchen told in vintage illustration, gingham and warm red.":
      "حكاية مطبخ عائلي برسوم كلاسيكية ونقشة مربعات وأحمر دافئ.",
    "JiBi Wonder World": "عالم جيبي العجيب",
    "A bright, character-led world for children, from first sketch to final cast.":
      "عالم مرح للأطفال تقوده الشخصيات، من أول رسمة إلى الشكل النهائي.",
    Orbita: "أوربيتا",
    "A calm space-tech identity: orbit marks, night blue and a quiet app interface.":
      "هوية هادئة للتقنية الفضائية: مدارات وأزرق ليلي وواجهة تطبيق بسيطة.",
    Nocturne: "نوكتورن",
    "Night-time fragrance, drawn in smoke, city lights and deep indigo.":
      "عطر ليلي تستحضره سحب الدخان وأضواء المدينة ودرجات النيلي العميقة.",
    "Petal and Post": "بتلة ورسالة",
    "Floral stationery and bouquets, with hand-drawn posies and red ribbon.":
      "قرطاسية وباقات زهرية برسومات يدوية وأشرطة حمراء.",
    "Logo collection": "مجموعة الشعارات",
    "LOGO DESIGN": "تصميم الشعارات",
    "logo presentations, from game studios to fine dining. شعارات":
      "نماذج شعارات، من استوديوهات الألعاب إلى المطاعم الراقية. شعارات",
    "Poster and visual communication": "الملصقات والتواصل البصري",
    "Visual communication, scaled up.": "التواصل البصري بحجم أكبر.",
    ملصقات: "ملصقات",
    "Zorya luxury perfume advertisement": "إعلان عطر زوريا الفاخر",
    "Karate poster: Never give up": "ملصق كاراتيه: لا تستسلم",
    "Poster in Arabic: the story of a nation, Petra and the Jordanian horizon":
      "ملصق عربي: حكاية وطن، والبتراء والأفق الأردني",
    "Hey, JiBi! illustrated poster": "ملصق مرسوم: مرحبًا يا جيبي!",
    "Be Active kids karate flyer": "منشور كاراتيه للأطفال: كن نشيطًا",
    "Zorya luxury house identity board": "لوحة الهوية البصرية لدار زوريا الفاخرة",
    "Sunset photography poster": "ملصق تصوير الغروب",
    "SELECTED FRAMES": "لقطات مختارة",
    PHOTOGRAPHY: "التصوير الفوتوغرافي",
    "Light, place, and the moments between.": "الضوء والمكان واللحظات الفاصلة بينهما.",
    "Digital design and motion": "التصميم الرقمي والموشن",
    "Behind the lens": "خلف العدسة",
    "Studio interviews, multi-camera events, green screen, sports and on-location shoots.":
      "مقابلات في الاستوديو وفعاليات متعددة الكاميرات وتصوير بالشاشة الخضراء ورياضة وتصوير ميداني.",
    "Working crew-side taught me how light, sound and direction shape what an audience believes.":
      "علّمني العمل مع فريق الإنتاج كيف يشكّل الضوء والصوت والإخراج ما يصدقه الجمهور.",
    Showreel: "معرض الفيديو",
    "Creative process, shown on the Tiny Treasures board":
      "مراحل الإبداع، كما تظهر في لوحة تايني تريجرز",
    "Initial idea": "الفكرة الأولى",
    "Every project starts with the story, the problem and a handful of brand keywords, gathered into a moodboard.":
      "يبدأ كل مشروع بالقصة والمشكلة ومجموعة كلمات مفتاحية للعلامة، تُجمع في لوحة إلهام.",
    Sketching: "الرسم الأولي",
    "Fast pencil explorations: shapes, characters and symbols, before any colour.":
      "استكشافات سريعة بالقلم للأشكال والشخصيات والرموز، قبل إضافة الألوان.",
    "Design development": "تطوير التصميم",
    "Palette, type and patterns are tested on real applications.":
      "اختبار لوحة الألوان والخطوط والأنماط على تطبيقات واقعية.",
    "The system comes together as logo, packaging, print and digital pieces.":
      "تتكامل المنظومة في الشعار والتغليف والمطبوعات والتطبيقات الرقمية.",
    "Medical and clinical photography vision": "رؤية التصوير الطبي والسريري",
    "Seen with care": "رؤية باهتمام",
    "Document what is there. Same light, angle and scale, so images can be compared honestly over time.":
      "وثّق الواقع كما هو. الإضاءة والزاوية والمقياس نفسها، لتُقارن الصور بصدق مع مرور الوقت.",
    "Keep dignity in the frame. Consent and respect come before the shot.":
      "احفظ كرامة الإنسان في الصورة. الموافقة والاحترام يسبقان التصوير.",
    "Teach and tell. Clear images help students, families and the public understand care.":
      "علّم وارْوِ. تساعد الصور الواضحة الطلاب والعائلات والجمهور على فهم الرعاية الصحية.",
    "Achievements and experience": "الإنجازات والخبرة",
    Honors: "التكريمات",
    "BTEC Creative Media projects": "مشاريع الإعلام الإبداعي BTEC",
    "Photography and art exhibitions": "معارض التصوير والفن",
    "Freelance multimedia projects": "مشاريع الوسائط المتعددة المستقلة",
    "Creative competitions and awards": "مسابقات وجوائز إبداعية",
    "Freelance Multimedia Designer and Content Creator, 2023 to present":
      "مصممة وسائط متعددة وصانعة محتوى مستقلة، من 2023 حتى الآن",
    "Graphic design, digital visual content, video, animation, photography and visual storytelling, managed from concept to delivery.":
      "تصميم جرافيكي ومحتوى بصري رقمي وفيديو ورسوم متحركة وتصوير وسرد بصري، من الفكرة حتى التسليم.",
    "Freelance Content Creator, 2023 to present": "صانعة محتوى مستقلة، من 2023 حتى الآن",
    "Social media content that combines photography, video, design and editing.":
      "محتوى لوسائل التواصل يجمع التصوير والفيديو والتصميم والتحرير.",
    "BTEC Creative Media Production, 2023 to present":
      "إنتاج الإعلام الإبداعي BTEC، من 2023 حتى الآن",
    "Practical multimedia projects across design, photography, animation and video.":
      "مشاريع عملية متعددة الوسائط تشمل التصميم والتصوير والرسوم المتحركة والفيديو.",
    "Say hello": "يسعدني تواصلك",
    Portfolio: "معرض الأعمال",
    CV: "السيرة الذاتية",
    Email: "البريد الإلكتروني",
    Call: "اتصال",
    "Amman, Jordan": "عمّان، الأردن",
    "Creative Media Designer": "مصممة إعلام إبداعي",
    "Visual Storyteller": "راوية قصص بصرية",
    Photographer: "مصورة",
    "Aspiring Medical and Clinical Photographer": "طموحي التصوير الطبي والسريري",
    "Aspiring Medical & Clinical Photographer": "طموحي التصوير الطبي والسريري",
    "Portfolio 2026": "معرض الأعمال 2026",
    "I turn what I see into stories people feel, and I am training my lens toward medicine.":
      "أحوّل ما أراه إلى قصص يشعر بها الناس، وأوجّه عدستي نحو عالم الطب.",
    "Batool Shamlakh, 2026": "بتول شملخ، 2026",
    "Designed and photographed in Amman": "صُمم وصُوّر في عمّان",
    "SELECTED WORK": "أعمال مختارة",
    Research: "البحث",
    Type: "الخط",
    colour: "اللون",
  };
  Object.assign(translations, {
    "Enter the portfolio": "ادخلي إلى معرض الأعمال",
    "Future focus: Medical & Clinical Photography": "طموحي القادم: التصوير الطبي والسريري",
    Ongoing: "مستمرة",
    "Painting at the Institute of Fine Arts, Amman.": "درست الرسم في معهد الفنون الجميلة في عمّان.",
    "A year in the visual arts section, certified by the Ministry of Culture. This is where my eye for light, portrait and symbol began.":
      "أمضت عامًا في قسم الفنون البصرية، معتمدًا من وزارة الثقافة. هنا بدأ اهتمامها بالضوء والبورتريه والرموز.",
    "Stage and camera.": "المسرح والكاميرا.",
    "A year in the institute's performing arts section, while starting a BTEC Diploma in Creative Media Production and my first freelance multimedia work.":
      "سنة في قسم الفنون الأدائية بالمعهد، بالتزامن مع بدء دبلوم BTEC في إنتاج الإعلام الإبداعي وأولى مشاريعها الحرة متعددة الوسائط.",
    Now: "الآن",
    "Design, video and photography.": "التصميم والفيديو والتصوير.",
    "Brand identities, posters, studio and event shoots, and exhibitions, all pointed toward clinical photography.":
      "هويات بصرية وملصقات وتصوير في الاستوديو والفعاليات ومعارض، وكلها تقرّبها من التصوير السريري.",
    Arabic: "العربية",
    English: "الإنجليزية",
    "logo presentations, from game studios to fine dining.":
      "نماذج شعارات، من استوديوهات الألعاب إلى المطاعم الراقية.",
  });
  const translationLookup = new Map(
    Object.entries(translations).map(([key, value]) => [key.trim().replace(/\s+/g, " "), value]),
  );
  const originalNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || parent.closest("script,style,noscript,svg")) return NodeFilter.FILTER_REJECT;
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });
  while (walker.nextNode())
    originalNodes.push({
      node: walker.currentNode,
      parent: walker.currentNode.parentElement,
      text: walker.currentNode.nodeValue,
    });
  const arabicParents = new Set();
  const attrOriginal = [];
  const ariaTranslations = {
    Main: "القائمة الرئيسية",
    Sections: "الأقسام",
    "Portfolio index": "فهرس معرض الأعمال",
    Close: "إغلاق",
    "Enlarged image": "صورة مكبّرة",
    "Batool Shamlakh, back to top": "بتول شملخ، العودة إلى الأعلى",
    "Select language": "اختيار اللغة",
  };
  document
    .querySelectorAll("[aria-label]")
    .forEach((el) => attrOriginal.push({ el, value: el.getAttribute("aria-label") }));
  const enTitle = document.title;
  const arTitle = "بتول شملخ | مصممة إعلام إبداعي، راوية بصرية ومصورة";
  const langGroup = document.getElementById("language-switch");
  const buttons = [...langGroup.querySelectorAll("[data-language]")];
  function setLanguage(lang) {
    const arabic = lang === "ar";
    document.documentElement.lang = arabic ? "ar" : "en";
    document.documentElement.dir = arabic ? "rtl" : "ltr";
    originalNodes.forEach(({ node, parent, text }) => {
      const key = text.trim();
      const translated = arabic ? translationLookup.get(key.replace(/\s+/g, " ")) : null;
      if (translated !== undefined && translated !== null) {
        const lead = text.match(/^\s*/)[0],
          tail = text.match(/\s*$/)[0];
        node.nodeValue = lead + translated + tail;
        parent.classList.add("arabic-copy");
        arabicParents.add(parent);
      } else node.nodeValue = text;
    });
    if (!arabic) {
      arabicParents.forEach((el) => el.classList.remove("arabic-copy"));
      arabicParents.clear();
    }
    attrOriginal.forEach(({ el, value }) => {
      if (!el.isConnected) return;
      el.setAttribute("aria-label", arabic ? ariaTranslations[value] || value : value);
    });
    document.title = arabic ? arTitle : enTitle;
    buttons.forEach((btn) =>
      btn.setAttribute("aria-pressed", String(btn.dataset.language === lang)),
    );
    langGroup.setAttribute("aria-label", arabic ? "اختيار اللغة" : "Select language");
    try {
      localStorage.setItem("batoolPortfolioLanguage", lang);
    } catch (e) {}
  }
  buttons.forEach((btn) => btn.addEventListener("click", () => setLanguage(btn.dataset.language)));
  let preferred = "en";
  try {
    preferred = localStorage.getItem("batoolPortfolioLanguage") || "en";
  } catch (e) {}
  setLanguage(preferred === "ar" ? "ar" : "en");
})();
