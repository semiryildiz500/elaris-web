import type { Service, Workshop } from "@/lib/data";

const METHOD_EN =
  "Sessions can be held both online (video call) and in person; you can indicate your preference during booking.";

const CANCELLATION_EN =
  "Cancellations made at least 24 hours before the scheduled session are eligible for a refund of the session fee. Cancellations made less than 24 hours before the scheduled session are non-refundable. Requests to reschedule a session can be submitted via WhatsApp.";

/**
 * İngilizce içerik. Fiyat ve süre değerleri lib/data.ts ile BİREBİR aynıdır
 * (TRY tutarları değişmedi, yalnızca gösterim biçimi İngilizce formatına
 * uyarlandı: "1,500 TRY" gibi). Slug'lar TR sürümüyle aynı tutulur ki dil
 * değiştirildiğinde kullanıcı aynı çalışmanın karşı dildeki sayfasında
 * kalsın.
 */
export const servicesEn: Service[] = [
  {
    slug: "cakra-enerji-alani-dengeleme",
    name: "Chakra & Energy Field Balancing",
    description:
      "A session focused on creating a sense of balance and flow in your energy centers.",
    purpose:
      "A spiritual awareness session, grounded in the concepts of energy centers and the energy field, that focuses on a person's bodily and emotional awareness. The session accompanies the person in observing themselves, focusing on their inner balance, and making space for their experience.",
    duration: "30 min",
    price: "1,500 TRY",
    method: METHOD_EN,
    cancellationInfo: CANCELLATION_EN,
    details: {
      what: [
        "Chakra & Energy Field Balancing is a spiritual awareness session that creates space for you to look more closely at how you feel physically, emotionally, and within yourself.",
        "The concepts of chakras and the energy field are used as a spiritual framework to support observation of your inner world.",
      ],
      topics: ["The session may focus on areas where you currently feel weighed down, tired, scattered, or restricted. Emotional burdens, the mental intensity created by daily life, and your awareness of your own inner balance may also be explored."],
      process: ["The session begins with a brief conversation about what you need that day and the subject you would like to focus on. This is followed by an awareness and balancing practice centered on the chakras and energy field."],
      audience: ["This session may be chosen by those who wish to return their attention to themselves, observe their inner world, and create a brief space amid the intensity of daily life."],
      after: ["After the session, you are encouraged to observe your emotions, body, and thoughts. Each person’s experience is unique, and no specific outcome is promised."],
    },
  },
  {
    slug: "enerji-alani-temizleme-dengeleme",
    name: "Energy Field Clearing & Balancing",
    description:
      "A session aimed at creating a sense of clarity and balance in your overall energy field.",
    purpose:
      "An individual awareness session, within a spiritual energy approach, in which a person focuses on their inner world, feelings, and current state. The terms “energy clearing” and “balancing” are used within spiritual terminology; they do not refer to physical cleaning or medical intervention.",
    duration: "30 min",
    price: "1,500 TRY",
    method: METHOD_EN,
    cancellationInfo: CANCELLATION_EN,
    details: {
      what: [
        "The people, environments, responsibilities, and emotional experiences we encounter in daily life can sometimes leave us feeling mentally or emotionally overwhelmed.",
        "Using the concept of the “energy field” within a spiritual framework, this session supports you in bringing your attention back to your own inner space.",
      ],
      topics: ["The session may explore the intensity you feel you carry through the day, distinguishing your own emotions from those you believe have been influenced by your surroundings, and becoming more aware of your personal boundaries."],
      process: [
        "A brief conversation is used to understand your current experience. Spiritual clearing and balancing practices are then offered to help direct your attention back to your inner space.",
        "The term “clearing” does not refer to a physical or medical procedure.",
      ],
      audience: ["This session may be chosen by those who feel a need to reconnect with themselves after an intense social or working schedule, believe they are easily affected by their surroundings, or wish to give greater attention to their personal space."],
      after: ["You are encouraged to spend some time observing your inner world, allow yourself a quiet period where possible, and consider the experience through your own feelings."],
    },
  },
  {
    slug: "koklenme-guven-alani",
    name: "Grounding & Inner Safety",
    description:
      "A session that opens space for a deeper sense of being grounded and safe, in your body and your life.",
    purpose:
      "An individual, spiritual and awareness-based session focused on being present in the moment, body awareness, and a person's own sense of inner safety. The person's own boundaries and comfort are the guiding principle throughout the session.",
    duration: "30 min",
    price: "1,500 TRY",
    method: METHOD_EN,
    cancellationInfo: CANCELLATION_EN,
    details: {
      what: ["Grounding & Inner Safety is a spiritual awareness session designed to help bring your attention back to the present moment, your body, and your own inner space, rather than continually carrying it into the past or future."],
      topics: ["The session may focus on being present, body awareness, personal boundaries, making space for yourself in daily life, and recognizing the conditions in which you feel more secure."],
      process: [
        "The session begins by discussing your current needs. Suitable breath, body-awareness, attention, and spiritual grounding practices are then used to guide the work.",
        "Your boundaries and comfort remain the priority throughout the session.",
      ],
      audience: ["This session may be chosen by those who feel their mind is constantly pulled in different directions, find it difficult to reconnect with themselves amid the pace of daily life, or wish to become more aware of their own boundaries."],
      after: ["Briefly returning attention to the body and breath during the day, observing your surroundings, and making room for daily routines that help you feel at ease may support the awareness developed in the session."],
    },
  },
  {
    slug: "ozdeger-ozsevgi",
    name: "Self-Worth & Self-Love",
    description:
      "A session that supports connecting with your sense of self-worth and self-love.",
    purpose:
      "An individual session aimed at helping a person notice their thoughts, needs, personal boundaries, and their relationship with the concepts of self-worth and self-love. The aim is to open space for the person to observe themselves more closely and recognize their own inner resources.",
    duration: "30 min",
    price: "1,500 TRY",
    method: METHOD_EN,
    cancellationInfo: CANCELLATION_EN,
    details: {
      what: [
        "Offering ourselves the understanding we readily show others can sometimes be more difficult.",
        "Self-Worth & Self-Love creates space to look at the relationship you have with yourself and to notice your needs, boundaries, and inner dialogue.",
      ],
      topics: ["The session may explore patterns such as constant self-criticism, acting according to others’ expectations, difficulty saying no, putting your own needs aside, and feeling that your worth depends on external approval."],
      process: ["Your current experience of your relationship with yourself is heard first. Spiritual awareness practices then focus on self-worth, self-compassion, personal boundaries, and recognizing your own inner resources."],
      audience: ["This session may be chosen by those who wish to approach themselves with greater understanding, become more aware of their needs, and observe their thoughts about their own sense of worth."],
      after: ["The intention is not to make you feel different immediately, but to create space to observe more consciously how you treat yourself and the situations in which you move away from your own needs."],
    },
  },
  {
    slug: "enerjetik-bag-kesme",
    name: "Energetic Cord Release",
    description:
      "Makes space for noticing and releasing energetic cords that no longer serve you.",
    purpose:
      "An awareness session focused on noticing emotional and spiritual cords thought to be connected to past relationships, people, or experiences, and on the person refocusing on their own boundaries. “Energetic cord release” is a term used within spiritual work terminology.",
    duration: "45 min",
    price: "2,000 TRY",
    method: METHOD_EN,
    cancellationInfo: CANCELLATION_EN,
    details: {
      what: [
        "Some relationships may continue to affect our thoughts or emotions even after they have ended. At other times, the weight of past experiences may be felt within an ongoing relationship.",
        "Energetic Cord Release is an awareness session that approaches these bonds from a spiritual and symbolic perspective.",
      ],
      topics: ["Past relationships, people or experiences that repeatedly return to mind, emotional processes that feel unresolved, and personal boundaries may be explored."],
      process: ["The session begins by discussing the relationship or experience you wish to explore. The thoughts and emotions associated with that bond are then observed, followed by a spiritual cord-release practice."],
      audience: ["This session may be chosen by those who feel they still carry the effects of a past relationship or experience and wish to view their relationship with it from a different perspective."],
      after: ["Here, “cord release” does not mean forgetting someone or erasing the past. Its purpose is to create space for you to recognize the inner bond you have formed with the relationship and to become aware of your own boundaries."],
    },
  },
  {
    slug: "disil-eril-enerji-dengeleme",
    name: "Feminine & Masculine Energy Balancing",
    description:
      "A session that supports finding balance between your inner feminine and masculine energies.",
    purpose:
      "An awareness session in which a person observes their own behaviors, needs, and inner balance through the symbolic qualities referred to as “feminine” and “masculine” in spiritual approaches. The concepts of feminine and masculine do not refer to an assessment of biological sex or gender identity.",
    duration: "45 min",
    price: "2,000 TRY",
    method: METHOD_EN,
    cancellationInfo: CANCELLATION_EN,
    details: {
      what: [
        "Within the ELARIS approach, the terms “feminine” and “masculine” are not used to refer to biological sex.",
        "They are symbolic concepts representing different inner qualities, such as taking action and receiving, directing and allowing flow, creating and resting.",
      ],
      topics: ["The session may observe your need to remain in control, difficulty allowing yourself to rest or make decisions, boundary setting, receiving, productivity, and your personal balance between effort and flow."],
      process: ["The session begins by discussing which quality you feel is more dominant in your life. An awareness practice then explores how these two symbolic qualities are reflected in your daily experience."],
      audience: ["This session may be chosen by those who feel they are constantly struggling, or conversely find it difficult to take action, and who wish to observe the balance between giving and receiving, action and rest, control and flow."],
      after: ["The aim is not to make the two sides mathematically equal, but to create space for you to recognize more clearly which inner quality you need in different situations."],
    },
  },
  {
    slug: "bolluk-bereket-oruntuleri",
    name: "Abundance & Prosperity Patterns",
    description:
      "A session focused on noticing energetic blocks related to your sense of abundance.",
    purpose:
      "A spiritual session focused on helping a person notice their thought and belief patterns around abundance, prosperity, giving-and-receiving, sufficiency, and the possibilities in their life. It is not financial advice and does not promise financial gain or any specific economic outcome.",
    duration: "45 min",
    price: "2,000 TRY",
    method: METHOD_EN,
    cancellationInfo: CANCELLATION_EN,
    details: {
      what: [
        "Abundance is not only about money. The way we relate to receiving, giving, sufficiency, opportunities, and what we already have may also form part of our sense of abundance.",
        "This session creates space to observe your thoughts and beliefs about abundance and prosperity from a spiritual awareness perspective.",
      ],
      topics: ["Thoughts you may recognize in yourself—such as “there is not enough,” “I do not deserve it,” “I will lose it,” or “it is wrong to ask”—as well as your balance of giving and receiving and your approach to opportunities may be explored."],
      process: ["Your relationship with abundance and the patterns you believe are recurring are discussed. An awareness practice then explores how these patterns are reflected in your life."],
      audience: ["This session may be chosen by those who wish to examine their relationship with money, opportunities, success, giving and receiving, or sufficiency from a different perspective."],
      after: ["This session is not financial or investment advice and does not promise income, gains, or any material outcome. Its purpose is to create space for you to recognize your own patterns of thought and behavior around the subject."],
    },
  },
  {
    slug: "karmik-baglar-iliski-oruntuleri",
    name: "Karmic Bonds & Relationship Patterns",
    description:
      "An exploratory session for understanding recurring patterns in your relationships.",
    purpose:
      "An individual session in which a person observes, from a spiritual awareness perspective, the behaviors, emotions, and relational patterns they feel tend to repeat in their relationships. It does not make predictions about relationships or promise any definite outcome regarding the future.",
    duration: "60 min",
    price: "2,750 TRY",
    method: METHOD_EN,
    cancellationInfo: CANCELLATION_EN,
    details: {
      what: [
        "Sometimes, although the people in our lives change, we may feel that similar situations continue to repeat within our relationships.",
        "Karmic Bonds & Relationship Patterns creates space to examine these repetitions from a spiritual awareness perspective.",
      ],
      topics: ["Recurring relationship dynamics, similar partner choices, ways of setting boundaries, the balance of giving and receiving, and the roles you feel you assume within relationships may be explored."],
      process: ["The recurring relationship patterns that draw your attention are discussed. The session observes how they have appeared in past and present relationships and explores your own choices, boundaries, and needs through an awareness practice."],
      audience: ["This session may be chosen by those who ask themselves, “Why do I keep experiencing similar things in my relationships?” and wish to examine their relationship experiences from a different perspective."],
      after: ["Here, “karmic” is used as a spiritual framework for the session. The session does not claim to provide verified information about past lives and is neither fortune-telling nor a prediction of the future."],
    },
  },
  {
    slug: "atasal-karma-atasal-oruntuler",
    name: "Ancestral Karma & Ancestral Patterns",
    description:
      "A gentle, awareness-based look at patterns carried across generations.",
    purpose:
      "A spiritual session focused on recognizing, through the person's own experience, the behavioral, relational, and life patterns thought to have been passed down from family and past generations. It does not claim to present verified facts about the past or about family members.",
    duration: "60 min",
    price: "2,750 TRY",
    method: METHOD_EN,
    cancellationInfo: CANCELLATION_EN,
    details: {
      what: [
        "There may be behaviors, beliefs, and relationship models within a family that we feel have been passed from one generation to another.",
        "Ancestral Karma & Ancestral Patterns creates space to view your relationship with your family and with patterns you believe may come from the past through a spiritual perspective.",
      ],
      topics: ["Relationship styles, roles, and expectations you feel recur within the family, approaches to money and success, ideas of self-sacrifice, or similar behavioral patterns you observe in yourself may be explored."],
      process: ["Themes you believe recur are identified through your own experience and the family history known to you. The session then explores how you relate to these patterns in your life today."],
      audience: ["This session may be chosen by those who wish to explore the question, “Is this behavior truly mine, or is it a pattern I learned from my family?” and observe patterns they believe they learned within their family."],
      after: ["This session does not claim to reveal unknown truths about family history or ancestors. Your own experience, perception, and awareness remain at the center of the work."],
    },
  },
  {
    slug: "ruhsal-farkindalik-donusum",
    name: "Spiritual Awareness & Transformation",
    description:
      "A session aimed at deepening your inner awareness and supporting your process of transformation.",
    purpose:
      "An individual session that creates space for a person to observe the experiences, thoughts, emotions, and their relationship with themselves from a spiritual perspective. It does not aim to instill any particular belief system and does not guarantee any specific outcome of transformation.",
    duration: "60 min",
    price: "2,750 TRY",
    method: METHOD_EN,
    cancellationInfo: CANCELLATION_EN,
    details: {
      what: [
        "At times, we may sense that something in our life needs to change without being able to see clearly where that change might begin.",
        "Spiritual Awareness & Transformation is an individual awareness space created to help you view your life from a broader perspective.",
      ],
      topics: ["Recurring themes in your life, your values, choices, relationships, connection with yourself, and questions that have become important during your current stage of life may be explored."],
      process: ["The session begins with you describing where you are today and which subject currently feels most important. Conversation and spiritual awareness practices are then used to approach the subject from different perspectives."],
      audience: ["This session may be chosen by those moving through a period of transition, wishing to reassess themselves, or wanting to create more space for the question, “Where am I in my life right now?”"],
      after: [
        "The aim is not to tell you what you should do. It is to create space for you to see your own answers, values, and choices more clearly.",
        "No specific transformation or outcome is guaranteed.",
      ],
    },
  },
  {
    slug: "bireysel-elaris-danismanligi",
    name: "Individual ELARIS Consultation",
    description:
      "A comprehensive, one-on-one consultation tailored to your needs.",
    purpose:
      "An individual meeting in which the person's topics of interest and needs are heard, and suitable ELARIS awareness sessions are discussed together. No medical or psychiatric diagnosis is made and no treatment is prescribed within this meeting.",
    duration: "60 min",
    price: "2,750 TRY",
    method: METHOD_EN,
    cancellationInfo: CANCELLATION_EN,
    details: {
      what: [
        "If you are unsure which ELARIS session would be most suitable for you, or if the subject you wish to explore does not fit under a single heading, an Individual ELARIS Consultation can be used as a starting point.",
        "The work begins not from a predetermined format, but from the subject and need you bring on that day.",
      ],
      topics: ["Relationships, personal boundaries, self-worth, recurring patterns in life, periods of decision, your relationship with yourself, or another subject currently coming to the forefront of your life may be explored."],
      process: [
        "The first part of the session is dedicated to hearing your needs and expectations.",
        "A personal space is then created using the awareness and spiritual approaches within ELARIS that are most appropriate to the subject.",
      ],
      audience: ["This consultation is suitable for those who are unsure which session to choose or who wish to consider several subjects together."],
      after: [
        "At the end of the consultation, the subjects explored are briefly reviewed. Where appropriate, areas you may continue to observe on your own are discussed.",
        "This consultation is not a substitute for medical or psychiatric assessment, diagnosis, or psychotherapy.",
      ],
    },
  },
];

export const workshopsEn: Workshop[] = [
  {
    slug: "workshop-1",
    title: "Upcoming Workshop",
    date: "Date to be announced",
    description:
      "This space will be updated soon with details of our upcoming workshops and gatherings.",
  },
  {
    slug: "workshop-2",
    title: "Upcoming Gathering",
    date: "Date to be announced",
    description:
      "An experiential gathering that deepens through group energy.",
  },
  {
    slug: "workshop-3",
    title: "Upcoming Workshop",
    date: "Date to be announced",
    description: "Details and images will appear here very soon.",
  },
];
