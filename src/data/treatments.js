const skinAssessmentImage = "/images/treatments/skin-assessment.jpg";
const scalpAssessmentImage = "/images/treatments/scalp-assessment.jpg";
const nailAssessmentImage = "/images/treatments/nail-assessment.jpg";
const laserHairReductionImage = "/images/treatments/laser-hair-reduction.jpg";
const chemicalPeelImage = "/images/treatments/chemical-peel.jpg";
const lesionAssessmentImage = "/images/treatments/lesion-assessment.jpg";
const vitiligoAssessmentImage = "/images/treatments/vitiligo-assessment.jpg";

export const treatments = [
  {
    slug: "acne-treatment",
    title: "Acne Treatment in Vadodara",
    shortTitle: "Acne & Pimples",
    category: "Skin",
    group: "Clinical dermatology",
    description:
      "Assessment of active pimples, breakouts, and acne-related marks.",
    metaDescription:
      "Acne and pimples consultation in Vadodara with Dr. Hiteshree Shah, including skin assessment and follow-up planning.",
    overview:
      "Acne can change over time and may leave marks or scars. A consultation helps connect the pattern, duration, skin type, previous products, and your goals before a treatment plan is chosen.",
    consultation:
      "Bring your current products, past prescriptions, and questions about active acne, marks, texture, or scars.",
    image: skinAssessmentImage,
    imageAlt: "Dermatologist examining facial skin with a dermatoscope",
    imageLabel: "A closer look at your skin",
    highlights: [
      {
        title: "Active acne",
        body: "The doctor can assess the type and severity of active acne and explain suitable medical or procedural options.",
      },
      {
        title: "Acne-related marks",
        body: "Discuss marks left by breakouts, previous products, and your skin-care routine during the assessment.",
      },
      {
        title: "Chemical peels",
        body: "If a peel is considered, the doctor will discuss suitability, preparation, expected downtime, and aftercare first.",
      },
      {
        title: "Maintenance",
        body: "A plan can include practical routines and follow-up so you know how to continue care after the first visit.",
      },
    ],
    faqs: [
      {
        question: "What should I bring to an acne consultation?",
        answer:
          "Bring the products and medicines you currently use, details of earlier treatments if available, and a short note of what you want to improve.",
      },
      {
        question: "Can acne marks and acne scars be discussed together?",
        answer:
          "Yes. The doctor can distinguish the concern during examination and explain which options, if any, suit your skin and stage of acne.",
      },
      {
        question: "Will a procedure be done during the first visit?",
        answer:
          "That depends on the examination and the plan you agree on. Suitability, preparation, and next steps are discussed before any procedure.",
      },
    ],
  },
  {
    slug: "pigmentation-melasma",
    title: "Pigmentation & Melasma Care in Vadodara",
    shortTitle: "Pigmentation & Melasma",
    category: "Skin",
    group: "Clinical dermatology",
    description:
      "Evaluation for pigmentation, melasma, uneven tone, and dark spots with skin-type-aware planning.",
    metaDescription:
      "Consultation-led pigmentation and melasma care in Vadodara with Dr. Hiteshree Shah, including assessment of skin type and prior treatment.",
    overview:
      "Pigmentation may have more than one contributing factor. The consultation looks at its pattern, duration, sun exposure, products, and previous treatment before discussing options.",
    consultation:
      "Share when the pigmentation started, what changes it, and any creams, peels, or home remedies you have tried.",
    image: skinAssessmentImage,
    imageAlt: "Dermatologist examining facial skin in a bright consultation room",
    imageLabel: "Start with a skin assessment",
    highlights: [
      {
        title: "Pattern and cause",
        body: "The doctor can examine the pattern and ask about triggers, routine, medicines, and earlier treatment before planning care.",
      },
      {
        title: "Melasma conversations",
        body: "Melasma often needs ongoing attention. The consultation focuses on realistic options, sun protection, and follow-up.",
      },
      {
        title: "Dark spots",
        body: "Different marks can look similar. An examination helps decide whether a medical or procedural approach is appropriate.",
      },
      {
        title: "Skin-type-aware care",
        body: "Your skin type and history matter when discussing products or procedures, including how to reduce avoidable irritation.",
      },
    ],
    faqs: [
      {
        question: "Is every dark spot melasma?",
        answer:
          "No. Several conditions can cause pigmentation. An in-person assessment is the right way to identify the concern before choosing treatment.",
      },
      {
        question: "Should I stop my current products before visiting?",
        answer:
          "Do not stop prescribed medicines without medical advice. Bring your products or a clear list so the doctor can review your routine.",
      },
      {
        question: "Is pigmentation care a one-time treatment?",
        answer:
          "The timeline varies by cause and skin response. The doctor can explain what follow-up and maintenance may involve for your concern.",
      },
    ],
  },
  {
    slug: "fungal-nail-care",
    title: "Fungal Skin & Nail Care in Vadodara",
    shortTitle: "Fungal Skin & Nails",
    category: "Skin",
    group: "Clinical dermatology",
    description:
      "Clinical evaluation for suspected fungal skin or nail concerns, with treatment based on the examination.",
    metaDescription:
      "Dermatologist consultation in Vadodara for suspected fungal skin and nail concerns, with diagnosis-led treatment planning.",
    overview:
      "Skin and nail changes can have different causes and may need different treatment. The doctor assesses the site, appearance, duration, and earlier medicines before advising you.",
    consultation:
      "Note where the concern began, whether it is spreading or recurring, and which creams or tablets have already been used.",
    image: nailAssessmentImage,
    imageAlt: "Dermatologist examining a fingernail with a dermatoscope",
    imageLabel: "Look closely before treating",
    highlights: [
      {
        title: "Skin examination",
        body: "The affected area and its pattern help guide the next step. The doctor can also discuss hygiene and recurrence questions.",
      },
      {
        title: "Nail changes",
        body: "Nail discoloration or thickening can have several causes, so an examination is important before treatment is selected.",
      },
      {
        title: "Recurring concerns",
        body: "If the issue keeps returning, share the earlier treatment history so the consultation can consider the full picture.",
      },
      {
        title: "Follow-up",
        body: "The doctor will explain how to use the recommended treatment and when a review may be useful.",
      },
    ],
    faqs: [
      {
        question: "Can I use an old antifungal cream before my visit?",
        answer:
          "Bring the product or its name instead of restarting an old course on your own. The doctor can advise after seeing the concern and reviewing its history.",
      },
      {
        question: "Why do nail concerns need patience?",
        answer:
          "Nails grow slowly and changes can have several causes. The doctor can explain the expected review timeline after examination.",
      },
      {
        question: "What if the rash keeps coming back?",
        answer:
          "Mention recurrence, household or workplace exposures, and every product used. These details help make the consultation more useful.",
      },
    ],
  },
  {
    slug: "warts-skin-tags",
    title: "Warts & Skin Tag Removal in Vadodara",
    shortTitle: "Warts & Skin Tags",
    category: "Skin",
    group: "Clinical dermatology",
    description:
      "Assessment of warts and skin tags, with the removal method chosen after examining the lesion and its location.",
    metaDescription:
      "Consult Dr. Hiteshree Shah in Vadodara for assessment and removal planning for warts and skin tags.",
    overview:
      "A bump or growth should be examined before it is removed. The doctor can discuss what it may be, whether removal is appropriate, and what aftercare could involve.",
    consultation:
      "Do not pick or cut the area before your visit. Share how long it has been present and whether it has changed, bled, or become painful.",
    image: lesionAssessmentImage,
    imageAlt: "Dermatologist examining a small skin mark with a dermatoscope",
    imageLabel: "Assess the mark first",
    highlights: [
      {
        title: "Lesion assessment",
        body: "The first step is looking closely at the lesion and its location. This helps determine whether removal should be considered.",
      },
      {
        title: "Removal options",
        body: "The doctor can explain the suitable method, what the visit involves, and whether more than one step is needed.",
      },
      {
        title: "Sensitive areas",
        body: "Face, neck, eyelid, and other visible areas need careful planning around healing and aftercare.",
      },
      {
        title: "Aftercare",
        body: "You will receive guidance on keeping the area comfortable and when to contact the clinic if you have concerns.",
      },
    ],
    faqs: [
      {
        question: "Can every skin tag be removed?",
        answer:
          "Removal depends on what the lesion is and where it is located. The doctor decides after an in-person examination.",
      },
      {
        question: "Is it safe to remove a wart at home?",
        answer:
          "Home cutting or picking can injure the skin and make assessment harder. A consultation is safer when you are unsure what the lesion is.",
      },
      {
        question: "Will removal leave a mark?",
        answer:
          "Healing varies by lesion, location, skin type, and method. The doctor can discuss likely aftercare and possible skin changes before proceeding.",
      },
    ],
  },
  {
    slug: "hair-fall-treatment",
    title: "Hair Fall Treatment in Vadodara",
    shortTitle: "Hair Fall & Alopecia",
    category: "Hair",
    group: "Hair care",
    description:
      "Medical evaluation and treatment planning for hair fall, dandruff, alopecia, and scalp concerns.",
    metaDescription:
      "Doctor-led hair fall consultation in Vadodara for thinning, alopecia, dandruff, and scalp concerns.",
    overview:
      "Hair fall has different patterns and possible contributing factors. A consultation reviews your history, scalp, duration, pattern, and previous treatment before discussing a plan.",
    consultation:
      "Bring recent blood reports if relevant, a list of medicines or supplements, and photos that show how the hair concern has changed.",
    image: scalpAssessmentImage,
    imageAlt: "Dermatologist examining a scalp part with a dermatoscope",
    imageLabel: "Understand the pattern",
    highlights: [
      {
        title: "Hair-loss pattern",
        body: "The doctor can examine the pattern and scalp and ask about timing, family history, illness, stress, and medicines.",
      },
      {
        title: "Alopecia concerns",
        body: "Patchy or sudden hair loss deserves a clinical assessment so the right questions and next steps are clear.",
      },
      {
        title: "Dandruff and scalp",
        body: "Itching, scaling, or scalp inflammation can be discussed alongside hair fall rather than treated as an isolated issue.",
      },
      {
        title: "PRP suitability",
        body: "If PRP is being considered, the doctor will explain whether it fits your concern and what a treatment plan may involve.",
      },
    ],
    faqs: [
      {
        question: "How long should I wait before seeing a dermatologist for hair fall?",
        answer:
          "If hair fall is sudden, patchy, painful, or worrying you, book a consultation. The doctor can assess the pattern instead of relying on a general timeline.",
      },
      {
        question: "Should I get tests before the appointment?",
        answer:
          "Only get tests advised for your situation. Bring existing reports so the doctor can decide whether anything further is useful.",
      },
      {
        question: "Is PRP right for every type of hair fall?",
        answer:
          "No. Suitability depends on the diagnosis, pattern, scalp findings, and your goals. It is discussed after evaluation.",
      },
    ],
  },
  {
    slug: "prp-therapy",
    title: "PRP Therapy in Vadodara",
    shortTitle: "PRP Therapy",
    category: "Hair",
    group: "Hair care",
    description:
      "PRP therapy consultation for suitable hair or skin concerns after clinical evaluation.",
    metaDescription:
      "Consultation-led PRP therapy planning in Vadodara for selected hair or skin concerns after a dermatologist assessment.",
    overview:
      "PRP is not a one-size-fits-all treatment. The doctor can discuss whether it is relevant to your hair or skin concern, what the process involves, and how progress may be reviewed.",
    consultation:
      "Share your main goal, previous procedures, medicines, allergies, and any scalp or skin condition being treated.",
    image: scalpAssessmentImage,
    imageAlt: "Dermatologist examining the scalp before planning PRP therapy",
    imageLabel: "Plan around the scalp",
    highlights: [
      {
        title: "Suitability check",
        body: "The doctor first considers your diagnosis, health history, treatment goal, and whether PRP is a sensible option.",
      },
      {
        title: "Hair-focused PRP",
        body: "For hair concerns, the consultation looks at the pattern of thinning or loss and the wider scalp picture.",
      },
      {
        title: "Skin-focused PRP",
        body: "If skin rejuvenation is discussed, the doctor will explain the concern, alternatives, and aftercare before scheduling anything.",
      },
      {
        title: "Progress reviews",
        body: "The clinic can explain how response is assessed and when follow-up may be useful for the selected plan.",
      },
    ],
    faqs: [
      {
        question: "What happens before a PRP session?",
        answer:
          "The doctor reviews your concern and medical history, examines the area, and explains suitability, preparation, and aftercare before a session is planned.",
      },
      {
        question: "Can PRP be used for skin and hair?",
        answer:
          "It may be discussed for selected concerns. The appropriate use depends on the clinical assessment and the plan agreed with your doctor.",
      },
      {
        question: "How many PRP sessions will I need?",
        answer:
          "The number and spacing of sessions vary by concern and response. The doctor can discuss this after examining you.",
      },
    ],
  },
  {
    slug: "hair-transplant",
    title: "Hair Transplant Consultation in Vadodara",
    shortTitle: "Hair Transplant Consultation",
    category: "Hair & Surgery",
    group: "Hair care",
    description:
      "A consultation to assess hair-transplant suitability, donor area, hair-loss pattern, and treatment planning.",
    metaDescription:
      "Hair transplant consultation in Vadodara with assessment of hair-loss pattern, donor area, suitability, and planning.",
    overview:
      "Hair transplant planning starts with understanding the pattern and stage of hair loss, donor area, scalp health, expectations, and available options.",
    consultation:
      "Bring older photographs if your hair loss has changed over time, along with details of medicines, procedures, and your preferred outcome.",
    image: scalpAssessmentImage,
    imageAlt: "Dermatologist assessing the scalp and hair pattern",
    imageLabel: "Start with a suitability discussion",
    highlights: [
      {
        title: "Hair-loss pattern",
        body: "The consultation maps the pattern and stage of hair loss and considers whether the change is stable enough for planning.",
      },
      {
        title: "Donor-area assessment",
        body: "The donor area and scalp are examined as part of deciding whether a transplant conversation is appropriate.",
      },
      {
        title: "Expectations",
        body: "A useful plan includes an honest discussion of goals, limitations, healing, and the time needed to assess progress.",
      },
      {
        title: "Medical alternatives",
        body: "The doctor can also explain non-surgical care or preparation when that is more appropriate for the current stage.",
      },
    ],
    faqs: [
      {
        question: "How do I know if I am suitable for a hair transplant?",
        answer:
          "Suitability depends on the hair-loss pattern, donor area, scalp health, medical history, and expectations. It can only be assessed during consultation.",
      },
      {
        question: "Should hair fall be treated before a transplant?",
        answer:
          "Sometimes medical treatment or further evaluation is discussed first. The doctor will explain the order that best fits your findings.",
      },
      {
        question: "Can I see a fixed result timeline before booking?",
        answer:
          "Hair growth and healing vary. The doctor can discuss the likely stages and follow-up after reviewing your individual situation.",
      },
    ],
  },
  {
    slug: "laser-hair-removal",
    title: "Laser Hair Removal in Vadodara",
    shortTitle: "Laser Hair Reduction",
    category: "Cosmetic & Laser",
    group: "Cosmetic & laser care",
    description:
      "Laser-based hair-reduction planning with doctor-guided suitability, session guidance, and aftercare.",
    metaDescription:
      "Doctor-guided laser hair-reduction consultation in Vadodara with suitability, session planning, and aftercare discussion.",
    overview:
      "Laser hair reduction needs an assessment of skin tone, hair type, treatment area, medications, and recent sun exposure before a session plan is made.",
    consultation:
      "Tell the clinic about recent tanning, hair-removal methods, skin sensitivity, medicines, and the areas you want to discuss.",
    image: laserHairReductionImage,
    imageAlt: "Dermatologist preparing a laser hair-reduction handset over an arm",
    imageLabel: "A considered treatment plan",
    highlights: [
      {
        title: "Skin and hair assessment",
        body: "The doctor considers skin tone, hair type, treatment area, and relevant skin history when discussing suitability.",
      },
      {
        title: "Session planning",
        body: "The clinic can explain the intended schedule, preparation, and what to expect before you choose to proceed.",
      },
      {
        title: "Recent tanning",
        body: "Recent sun exposure or tanning should be mentioned because it can affect when and how treatment is planned.",
      },
      {
        title: "Aftercare guidance",
        body: "You will be given practical care guidance for the treated area and told what changes should prompt a call to the clinic.",
      },
    ],
    faqs: [
      {
        question: "Is laser hair reduction suitable for every skin and hair type?",
        answer:
          "Suitability and expected response vary with skin tone, hair type, area, and device settings. The doctor assesses this before treatment.",
      },
      {
        question: "Can I wax before a laser appointment?",
        answer:
          "Ask the clinic for preparation instructions for your area and appointment. The right preparation can vary by the treatment plan.",
      },
      {
        question: "Is laser hair reduction permanent?",
        answer:
          "Results and maintenance needs vary. The clinic can explain what reduction may mean for your situation during consultation.",
      },
    ],
  },
  {
    slug: "chemical-peeling",
    title: "Chemical Peeling in Vadodara",
    shortTitle: "Chemical Peeling",
    category: "Cosmetic & Laser",
    group: "Cosmetic & laser care",
    description:
      "Doctor-selected chemical peels for acne, pigmentation, uneven tone, and skin texture concerns.",
    metaDescription:
      "Doctor-selected chemical peel consultation in Vadodara for acne, pigmentation, uneven tone, and texture concerns.",
    overview:
      "The right peel depends on the concern, skin type, current routine, recent procedures, and how much downtime you can accommodate.",
    consultation:
      "Share recent sun exposure, active products, medicines, past peels, and any history of sensitivity or irritation.",
    image: chemicalPeelImage,
    imageAlt: "Dermatologist preparing facial skin with a cotton pad",
    imageLabel: "Begin with a skin assessment",
    highlights: [
      {
        title: "Peel selection",
        body: "The doctor chooses whether a peel is appropriate and explains why a particular strength or approach may be considered.",
      },
      {
        title: "Acne and marks",
        body: "Acne, marks, and texture are discussed together so the plan reflects what is active now and what has healed.",
      },
      {
        title: "Preparation",
        body: "You will be told how to prepare your skin and which products or procedures may need to be paused or reviewed.",
      },
      {
        title: "Post-peel care",
        body: "Aftercare, sun protection, expected sensations, and warning signs are part of the conversation before treatment.",
      },
    ],
    faqs: [
      {
        question: "Can I choose a peel by myself?",
        answer:
          "It is safer to choose a peel after your skin and concern have been assessed. The doctor can advise on the appropriate option and preparation.",
      },
      {
        question: "How much downtime should I plan for?",
        answer:
          "Downtime varies with the peel and your skin. The clinic can explain the expected recovery before you schedule it.",
      },
      {
        question: "Can a peel be done when acne is active?",
        answer:
          "Sometimes a peel may be discussed, but the choice depends on the type and severity of acne and your current skin condition.",
      },
    ],
  },
  {
    slug: "vitiligo-treatment",
    title: "Vitiligo Treatment in Vadodara",
    shortTitle: "Vitiligo Care & Surgery",
    category: "Vitiligo",
    group: "Dermatosurgery & vitiligo",
    description:
      "Dermatology-led vitiligo care, including medical and surgical treatment options where clinically appropriate.",
    metaDescription:
      "Dermatologist-led vitiligo consultation in Vadodara, including discussion of medical care and surgical options where appropriate.",
    overview:
      "Vitiligo care depends on the pattern, stability, sites involved, duration, and earlier treatment. The consultation helps clarify which medical or surgical conversations are relevant.",
    consultation:
      "Bring earlier reports and treatment details if you have them, and note when new patches appeared or changed.",
    image: vitiligoAssessmentImage,
    imageAlt: "Dermatologist assessing a depigmented patch on an arm",
    imageLabel: "A careful clinical assessment",
    highlights: [
      {
        title: "Vitiligo assessment",
        body: "The doctor examines the distribution and history of the patches and discusses the factors that shape treatment planning.",
      },
      {
        title: "Medical care",
        body: "Your consultation can cover medical options, how they are used, and what kind of follow-up may be needed.",
      },
      {
        title: "Surgical options",
        body: "Where clinically appropriate, surgical options can be discussed after assessing stability, sites, and expectations.",
      },
      {
        title: "Follow-up planning",
        body: "The doctor will explain the next review and what changes to monitor so the plan remains clear over time.",
      },
    ],
    faqs: [
      {
        question: "Is every vitiligo case suitable for surgery?",
        answer:
          "No. Surgical options depend on factors such as stability, sites involved, and the clinical assessment. They are discussed only when appropriate.",
      },
      {
        question: "What should I bring to a vitiligo consultation?",
        answer:
          "Bring previous prescriptions, reports, and photographs that show how the patches have changed, if available.",
      },
      {
        question: "Can new patches be discussed at the same appointment?",
        answer:
          "Yes. Tell the doctor about any new or changing patches so the consultation considers the current pattern and history.",
      },
    ],
  },
  {
    slug: "scar-revision",
    title: "Scar Revision Consultation in Vadodara",
    shortTitle: "Scar Revision",
    category: "Dermatosurgery",
    group: "Dermatosurgery & vitiligo",
    description:
      "Consultation for acne scars and other scars, with procedural options considered after assessing the scar and skin.",
    metaDescription:
      "Dermatology consultation in Vadodara for acne scars and scar revision planning based on scar type, skin, and treatment history.",
    overview:
      "Scars differ in depth, texture, colour, and activity. The doctor can assess the scar and explain which combinations of medical or procedural care may be worth discussing.",
    consultation:
      "Bring details of earlier acne, injuries, surgeries, procedures, and products, along with your main concern about the scar.",
    image: skinAssessmentImage,
    imageAlt: "Dermatologist examining facial skin before planning scar care",
    imageLabel: "Plan around the scar you have",
    highlights: [
      {
        title: "Scar type",
        body: "The depth, texture, colour, and location of a scar guide the conversation about what may be appropriate.",
      },
      {
        title: "Acne-scar planning",
        body: "Microneedling and laser treatment are available for acne-scar care. The doctor assesses scar type and active acne before recommending a procedure.",
      },
      {
        title: "Combination options",
        body: "The doctor can explain whether a combination of options is relevant and what each step is intended to address.",
      },
      {
        title: "Realistic follow-up",
        body: "Healing and change take time. The consultation sets out follow-up and aftercare so you can make an informed decision.",
      },
    ],
    faqs: [
      {
        question: "Can old scars still be assessed?",
        answer:
          "Yes. The doctor can assess the current scar and explain which options, if any, are suitable for its type and location.",
      },
      {
        question: "Should active acne be controlled first?",
        answer:
          "That may be recommended in some cases. The order depends on the examination and the concerns that are active at the time.",
      },
      {
        question: "Will one procedure remove a scar?",
        answer:
          "No single result can be promised in advance. The doctor can discuss the likely goals, limits, and review plan for your scar.",
      },
    ],
  },
  {
    slug: "cyst-mole-removal",
    title: "Cyst & Mole Removal Consultation in Vadodara",
    shortTitle: "Cyst & Mole Removal",
    category: "Dermatosurgery",
    group: "Dermatosurgery & vitiligo",
    description:
      "Assessment of cysts, moles, and other benign-appearing lesions before a removal decision is made.",
    metaDescription:
      "Consultation in Vadodara for assessment and removal planning for cysts, moles, and other skin lesions.",
    overview:
      "A lesion needs an examination before removal is planned. The doctor considers its appearance, history, location, and any change in size, colour, bleeding, or symptoms.",
    consultation:
      "Note when the lesion appeared and whether it has changed. Do not attempt to squeeze, cut, or remove it before examination.",
    image: lesionAssessmentImage,
    imageAlt: "Dermatologist examining a pigmented skin mark with a dermatoscope",
    imageLabel: "Start with an examination",
    highlights: [
      {
        title: "In-person assessment",
        body: "The doctor examines the lesion and asks about changes, symptoms, and earlier treatment before discussing removal.",
      },
      {
        title: "Location and healing",
        body: "The face, neck, and other visible or high-friction areas may need specific planning around aftercare and healing.",
      },
      {
        title: "Removal discussion",
        body: "If removal is appropriate, the doctor can explain the method, steps, and information you need before deciding.",
      },
      {
        title: "Changes to report",
        body: "Tell the clinic if the lesion has recently grown, changed colour, bled, become painful, or started itching.",
      },
    ],
    faqs: [
      {
        question: "Can a mole be removed without an examination?",
        answer:
          "No. An in-person examination should come first so the doctor can decide what the lesion may be and whether removal is appropriate.",
      },
      {
        question: "What changes should I mention?",
        answer:
          "Mention changes in size, shape, colour, bleeding, itching, pain, or any recent injury to the area.",
      },
      {
        question: "Can I squeeze a cyst before the appointment?",
        answer:
          "Avoid squeezing or cutting it. This can irritate the area and make the consultation or later care more difficult.",
      },
    ],
  },
];

export const serviceGroups = [
  {
    slug: "skin",
    title: "Skin",
    eyebrow: "Clinical dermatology",
    description: "Everyday skin concerns, pigmentation, and infections start with a careful examination.",
    image: "/images/treatments/skin-assessment.jpg",
    imageAlt: "Dermatologist examining facial skin with a dermatoscope",
    slugs: ["acne-treatment", "pigmentation-melasma", "fungal-nail-care", "warts-skin-tags"],
  },
  {
    slug: "hair",
    title: "Hair & Scalp",
    eyebrow: "Hair & scalp care",
    description: "Explore care for hair fall, hair thinning, dandruff, and scalp conditions.",
    image: "/images/treatments/scalp-assessment.jpg",
    imageAlt: "Dermatologist examining a scalp part with a dermatoscope",
    slugs: ["hair-fall-treatment", "prp-therapy", "hair-transplant"],
    optionsTitle: "More hair & scalp concerns",
    options: [
      { title: "Dandruff & scalp concerns", description: "Discuss itching, flaking, scalp discomfort, and products you have tried.", href: "/treatments/hair-fall-treatment" },
      { title: "Hair thinning & patchy hair loss", description: "Review the pattern of hair loss, when it began, and changes in your health or routine.", href: "/treatments/hair-fall-treatment" },
    ],
  },
  {
    slug: "cosmetic-laser",
    title: "Cosmetic & Laser",
    eyebrow: "Cosmetic & laser care",
    description: "Explore laser and cosmetic options with a dermatologist-led suitability assessment.",
    image: "/images/treatments/laser-hair-reduction.jpg",
    imageAlt: "Laser hair-reduction handset prepared in a treatment room",
    slugs: ["laser-hair-removal", "chemical-peeling"],
    optionsTitle: "Cosmetic procedures",
    options: [
      {
        title: "Q-switch laser & pigmentation care",
        description: "Laser options for dark spots and pigmentation after examining the mark and your skin type.",
        href: "/treatments/pigmentation-melasma",
      },
      {
        title: "Tattoo & birthmark laser care",
        description: "Assessment of tattoos and birthmarks before choosing a laser approach. The treatment plan depends on the type, colour, and area involved.",
      },
      {
        title: "Carbon laser peel",
        description: "A cosmetic laser procedure. Discuss your skin concerns, preparation, and aftercare with the dermatologist before treatment.",
      },
      {
        title: "Vampire peel for skin rejuvenation",
        description: "A skin rejuvenation option. The doctor explains the procedure used at the clinic, its suitability, and recovery before you book treatment.",
      },
      {
        title: "Botox for wrinkles",
        description: "Botulinum toxin injections for selected expression lines, with the treatment areas chosen after a facial assessment.",
      },
      {
        title: "Hydrafacial & medifacial",
        description: "Facial procedures selected around your skin-care goals and current skin condition. Discuss the steps and products before treatment.",
      },
      {
        title: "Tan removal & glow care",
        description: "Care for tanning, dullness, and uneven tone. The doctor assesses your skin before recommending a peel or another suitable option.",
        href: "/treatments/pigmentation-melasma",
      },
      {
        title: "Microneedling & laser for acne scars",
        description: "Procedural care for acne scars and uneven texture, with the choice guided by scar type, skin condition, and previous treatment.",
        href: "/treatments/scar-revision",
      },
      {
        title: "Skin tightening",
        description: "Assessment of skin laxity and the area you want treated. The doctor explains the proposed procedure, its limits, and the expected recovery.",
      },
      {
        title: "PRP therapy for hair loss",
        description: "Hair-loss assessment and PRP planning. Explore the hair-care page for consultation details and follow-up questions.",
        href: "/treatments/prp-therapy",
      },
      {
        title: "Mole removal",
        description: "An examination comes before removal. Discuss the mole, any recent changes, the removal method, and healing.",
        href: "/treatments/cyst-mole-removal",
      },
    ],
  },
  {
    slug: "dermatosurgery-vitiligo",
    title: "Dermatosurgery",
    eyebrow: "Dermatosurgery",
    description: "Doctor-led assessment for lesions, scars, vitiligo, and surgical conversations where appropriate.",
    image: "/images/treatments/lesion-assessment.jpg",
    imageAlt: "Dermatologist examining a skin mark with a dermatoscope",
    slugs: ["vitiligo-treatment", "scar-revision", "cyst-mole-removal"],
  },
];

export function getTreatment(slug) {
  return treatments.find((treatment) => treatment.slug === slug);
}

export function getServiceGroup(slug) {
  return serviceGroups.find((group) => group.slug === slug);
}
