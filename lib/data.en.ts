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
