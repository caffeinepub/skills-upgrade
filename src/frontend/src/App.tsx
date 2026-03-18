import {
  Apple,
  Brain,
  Droplets,
  Dumbbell,
  Flame,
  Heart,
  Leaf,
  Moon,
  PersonStanding,
  Smile,
  Star,
  Sun,
  Wind,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const healthBenefits = [
  {
    icon: Sun,
    title: "Morning Yoga & Exercise",
    titleHi: "सुबह का योग और व्यायाम",
    desc: "Boost your energy, flexibility, and strength with just 20 minutes of daily yoga. A morning routine sets a positive tone for the entire day.",
    gradient: "from-saffron-500 to-saffron-600",
  },
  {
    icon: Apple,
    title: "Healthy Nutrition",
    titleHi: "स्वस्थ पोषण",
    desc: "Eat fresh, seasonal Indian foods rich in spices like turmeric, ginger, and cumin. Traditional food is your best medicine.",
    gradient: "from-forest-500 to-forest-600",
  },
  {
    icon: Droplets,
    title: "Morning Hydration",
    titleHi: "सुबह की जलयोजन",
    desc: "Drink 2-3 glasses of warm water first thing in the morning. It flushes toxins, kickstarts metabolism, and energizes your body.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Brain,
    title: "Mental Wellness & Meditation",
    titleHi: "मानसिक स्वास्थ्य और ध्यान",
    desc: "A calm mind is a healthy mind. Just 10 minutes of daily meditation reduces stress, improves focus, and brings inner peace.",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Moon,
    title: "Quality Sleep",
    titleHi: "गुणवत्तापूर्ण नींद",
    desc: "7-8 hours of deep sleep allows your body to recover, repair muscles, balance hormones, and strengthen immunity.",
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Leaf,
    title: "Nature & Morning Sunlight",
    titleHi: "प्रकृति और सुबह की धूप",
    desc: "15 minutes of morning sunlight boosts Vitamin D, improves mood, regulates sleep cycles, and strengthens your bones naturally.",
    gradient: "from-emerald-500 to-emerald-600",
  },
];

const walkBenefits = [
  {
    icon: Flame,
    title: "Burns Calories & Aids Weight Loss",
    desc: "A 30-minute brisk walk can burn 150–200 calories, helping you maintain a healthy weight naturally.",
  },
  {
    icon: Zap,
    title: "Boosts Energy All Day",
    desc: "Morning movement increases oxygen flow and releases endorphins, giving you sustained energy throughout the day.",
  },
  {
    icon: Smile,
    title: "Elevates Your Mood",
    desc: "Walking triggers the release of serotonin and dopamine — nature's own happiness hormones.",
  },
  {
    icon: Heart,
    title: "Strengthens Your Heart",
    desc: "Regular morning walks lower blood pressure, reduce bad cholesterol, and significantly cut the risk of heart disease.",
  },
  {
    icon: Moon,
    title: "Improves Sleep Quality",
    desc: "People who walk in the morning fall asleep faster and enjoy deeper, more restful sleep at night.",
  },
  {
    icon: Wind,
    title: "Clears Your Mind",
    desc: "Fresh morning air and rhythmic movement calm mental chatter, reduce anxiety, and sharpen focus.",
  },
];

const stats = [
  { value: "30 min", label: "Morning Walk" },
  { value: "10 min", label: "Daily Meditation" },
  { value: "7-8 hrs", label: "Quality Sleep" },
  { value: "3 L", label: "Daily Water" },
];

const ageGroups = [
  {
    id: "10-20",
    label: "10–20 Yrs",
    emoji: "🧒",
    title: "Teenagers",
    titleHi: "किशोरावस्था",
    duration: "60 min",
    walkDuration: "20–30 min",
    colorClass: "age-purple",
    bgHex: "oklch(0.92 0.06 290)",
    accentHex: "oklch(0.52 0.22 290)",
    ringHex: "oklch(0.52 0.22 290 / 0.25)",
    exercise: "Active play, running, sports, yoga",
    exerciseHi: "खेल, दौड़, स्पोर्ट्स, योगा",
    walkDesc: "20–30 mins brisk morning walk for fresh energy",
    healthTips: [
      "Build strong bones with calcium-rich foods",
      "Avoid junk food and sugary drinks",
      "Drink milk and eat green vegetables daily",
      "Sleep 8–9 hours for healthy growth",
    ],
    benefits: [
      "Better focus and concentration in studies",
      "Strong immunity and healthy growth",
      "Improved mood and social skills",
      "Healthy bone density development",
    ],
    icon: Zap,
    workoutPlan: [
      {
        part: "Legs",
        icon: "🦵",
        color: "#f97316",
        sets: 4,
        reps: 25,
        exercises: ["Squats", "Lunges", "Jumping Jacks", "Calf Raises"],
      },
      {
        part: "Core",
        icon: "🔥",
        color: "#22c55e",
        sets: 4,
        reps: 25,
        exercises: [
          "Crunches",
          "Leg Raises",
          "Plank (30 sec)",
          "Bicycle Crunches",
        ],
      },
      {
        part: "Arms",
        icon: "💪",
        color: "#3b82f6",
        sets: 4,
        reps: 25,
        exercises: [
          "Push-ups",
          "Dumbbell Curls",
          "Tricep Dips",
          "Shoulder Press",
        ],
      },
    ],
  },
  {
    id: "20-30",
    label: "20–30 Yrs",
    emoji: "🏃",
    title: "Young Adults",
    titleHi: "युवा वयस्क",
    duration: "45 min",
    walkDuration: "30–40 min",
    colorClass: "age-blue",
    bgHex: "oklch(0.93 0.05 230)",
    accentHex: "oklch(0.48 0.18 230)",
    ringHex: "oklch(0.48 0.18 230 / 0.25)",
    exercise: "Jogging, gym, cycling, swimming",
    exerciseHi: "जॉगिंग, जिम, साइकिलिंग, तैराकी",
    walkDesc: "30–40 mins power walk or light jog for peak fitness",
    healthTips: [
      "Build muscle with protein-rich balanced meals",
      "Manage career stress through regular exercise",
      "Eat balanced meals — avoid skipping breakfast",
      "Stay hydrated with at least 3 litres water daily",
    ],
    benefits: [
      "High energy levels throughout the day",
      "Sharper career focus and mental clarity",
      "Strong metabolism and lean body composition",
      "Reduced anxiety and stress resilience",
    ],
    icon: Flame,
    workoutPlan: [
      {
        part: "Legs",
        icon: "🦵",
        color: "#f97316",
        sets: 4,
        reps: 25,
        exercises: ["Squats", "Deadlifts", "Lunges", "Box Jumps"],
      },
      {
        part: "Core",
        icon: "🔥",
        color: "#22c55e",
        sets: 4,
        reps: 25,
        exercises: ["Crunches", "Russian Twists", "Plank", "Mountain Climbers"],
      },
      {
        part: "Arms",
        icon: "💪",
        color: "#3b82f6",
        sets: 4,
        reps: 25,
        exercises: ["Push-ups", "Bicep Curls", "Tricep Extensions", "Pull-ups"],
      },
    ],
  },
  {
    id: "30-40",
    label: "30–40 Yrs",
    emoji: "💪",
    title: "Adults",
    titleHi: "प्रौढ़ वयस्क",
    duration: "45 min",
    walkDuration: "30–40 min",
    colorClass: "age-teal",
    bgHex: "oklch(0.93 0.05 185)",
    accentHex: "oklch(0.44 0.14 185)",
    ringHex: "oklch(0.44 0.14 185 / 0.25)",
    exercise: "Cardio + strength training mix",
    exerciseHi: "कार्डियो + स्ट्रेंथ ट्रेनिंग",
    walkDesc: "30–40 mins brisk walk to boost metabolism",
    healthTips: [
      "Watch weight — avoid processed and oily food",
      "Reduce screen time, especially before sleep",
      "Prioritize 7–8 hours of quality sleep",
      "Include yoga or stretching to reduce back pain",
    ],
    benefits: [
      "Prevents lifestyle diseases like diabetes",
      "Boosts metabolism and weight management",
      "Better work-life balance and mental focus",
      "Stronger muscles and joint health",
    ],
    icon: Dumbbell,
    workoutPlan: [
      {
        part: "Legs",
        icon: "🦵",
        color: "#f97316",
        sets: 4,
        reps: 25,
        exercises: ["Squats", "Leg Press", "Step-ups", "Calf Raises"],
      },
      {
        part: "Core",
        icon: "🔥",
        color: "#22c55e",
        sets: 4,
        reps: 25,
        exercises: ["Crunches", "Plank", "Side Bends", "Flutter Kicks"],
      },
      {
        part: "Arms",
        icon: "💪",
        color: "#3b82f6",
        sets: 4,
        reps: 25,
        exercises: [
          "Push-ups",
          "Dumbbell Curls",
          "Overhead Press",
          "Lateral Raises",
        ],
      },
    ],
  },
  {
    id: "40-50",
    label: "40–50 Yrs",
    emoji: "🧘",
    title: "Middle Age",
    titleHi: "मध्य आयु",
    duration: "40 min",
    walkDuration: "40 min",
    colorClass: "age-saffron",
    bgHex: "oklch(0.95 0.06 60)",
    accentHex: "oklch(0.62 0.18 48)",
    ringHex: "oklch(0.62 0.18 48 / 0.25)",
    exercise: "Low-impact cardio, yoga, swimming",
    exerciseHi: "लो-इम्पैक्ट कार्डियो, योगा, तैराकी",
    walkDesc: "40 mins moderate walk — steady and consistent",
    healthTips: [
      "Take care of joints — avoid high-impact running",
      "Increase calcium and Vitamin D intake",
      "Schedule regular health checkups every 6 months",
      "Monitor blood pressure and blood sugar",
    ],
    benefits: [
      "Controls blood pressure naturally",
      "Reduces risk of Type 2 diabetes",
      "Improves bone density and joint flexibility",
      "Maintains healthy hormonal balance",
    ],
    icon: Heart,
    workoutPlan: [
      {
        part: "Legs",
        icon: "🦵",
        color: "#f97316",
        sets: 4,
        reps: 20,
        exercises: ["Slow Squats", "Wall Sit", "Leg Extensions", "Calf Raises"],
      },
      {
        part: "Core",
        icon: "🔥",
        color: "#22c55e",
        sets: 4,
        reps: 20,
        exercises: [
          "Crunches",
          "Plank (20 sec)",
          "Seated Twists",
          "Leg Raises",
        ],
      },
      {
        part: "Arms",
        icon: "💪",
        color: "#3b82f6",
        sets: 4,
        reps: 20,
        exercises: [
          "Light Dumbbell Curls",
          "Push-ups (knee)",
          "Tricep Dips",
          "Shoulder Rolls",
        ],
      },
    ],
  },
  {
    id: "50-60",
    label: "50–60 Yrs",
    emoji: "🌿",
    title: "Senior Adults",
    titleHi: "वरिष्ठ वयस्क",
    duration: "30–40 min",
    walkDuration: "30 min",
    colorClass: "age-green",
    bgHex: "oklch(0.93 0.05 145)",
    accentHex: "oklch(0.40 0.13 148)",
    ringHex: "oklch(0.40 0.13 148 / 0.25)",
    exercise: "Gentle walk, stretching, yoga",
    exerciseHi: "हल्की सैर, स्ट्रेचिंग, योगा",
    walkDesc: "30 mins slow to moderate walk, avoid overexertion",
    healthTips: [
      "Focus on bone health with calcium supplements",
      "Stay well hydrated throughout the day",
      "Avoid overexertion — listen to your body",
      "Practice deep breathing and pranayama",
    ],
    benefits: [
      "Maintains mobility and body flexibility",
      "Supports heart health and lung capacity",
      "Improves mental wellness and reduces depression",
      "Controls cholesterol and blood pressure",
    ],
    icon: Leaf,
    workoutPlan: [
      {
        part: "Legs",
        icon: "🦵",
        color: "#f97316",
        sets: 3,
        reps: 15,
        exercises: ["Chair Squats", "Step-ups", "Calf Raises", "Gentle Lunges"],
      },
      {
        part: "Core",
        icon: "🔥",
        color: "#22c55e",
        sets: 3,
        reps: 15,
        exercises: [
          "Seated Crunches",
          "Standing Side Bends",
          "Gentle Plank",
          "Pelvic Tilts",
        ],
      },
      {
        part: "Arms",
        icon: "💪",
        color: "#3b82f6",
        sets: 3,
        reps: 15,
        exercises: [
          "Light Curls",
          "Wall Push-ups",
          "Arm Circles",
          "Resistance Band Pulls",
        ],
      },
    ],
  },
  {
    id: "60-plus",
    label: "60+ Yrs",
    emoji: "🌟",
    title: "Senior Citizens",
    titleHi: "वरिष्ठ नागरिक",
    duration: "20–30 min",
    walkDuration: "20–30 min",
    colorClass: "age-gold",
    bgHex: "oklch(0.96 0.08 80)",
    accentHex: "oklch(0.72 0.15 78)",
    ringHex: "oklch(0.72 0.15 78 / 0.3)",
    exercise: "Light walk, chair yoga, breathing exercises",
    exerciseHi: "हल्की सैर, चेयर योगा, प्राणायाम",
    walkDesc: "20–30 mins gentle walk with rest breaks as needed",
    healthTips: [
      "Use walking support if needed — safety first",
      "Consult doctor before starting new exercise",
      "Stay socially active — walk with friends or family",
      "Morning sun exposure for Vitamin D",
    ],
    benefits: [
      "Increased longevity and quality of life",
      "Improved joint flexibility and mobility",
      "Mood upliftment and reduced loneliness",
      "Better memory and cognitive function",
    ],
    icon: Star,
    workoutPlan: [
      {
        part: "Legs",
        icon: "🦵",
        color: "#f97316",
        sets: 2,
        reps: 10,
        exercises: [
          "Chair Sit-to-Stand",
          "Heel Raises",
          "Gentle Knee Lifts",
          "Ankle Rotations",
        ],
      },
      {
        part: "Core",
        icon: "🔥",
        color: "#22c55e",
        sets: 2,
        reps: 10,
        exercises: [
          "Seated Twists",
          "Gentle Tummy Pulls",
          "Breathing Exercises",
          "Seated Leg Lifts",
        ],
      },
      {
        part: "Arms",
        icon: "💪",
        color: "#3b82f6",
        sets: 2,
        reps: 10,
        exercises: [
          "Arm Circles",
          "Light Wrist Curls",
          "Gentle Shoulder Rolls",
          "Wall Push-ups",
        ],
      },
    ],
  },
];

function AgeGuideSection() {
  const [activeId, setActiveId] = useState("10-20");
  const active = ageGroups.find((g) => g.id === activeId) ?? ageGroups[0];
  const ActiveIcon = active.icon;

  return (
    <section id="age-guide" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-saffron-100 text-saffron-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase border border-saffron-500/20">
            🎂 Age-Wise Health Guide
          </span>
          <h2
            className="font-display font-bold text-foreground mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Your Health Plan by <span className="text-primary">Age Group</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every age has different health needs. Find your age group and
            discover the perfect exercise and wellness plan designed for you.
          </p>
          <p className="text-muted-foreground/70 text-sm mt-1">
            हर उम्र की अलग-अलग स्वास्थ्य जरूरतें होती हैं
          </p>
        </motion.div>

        {/* Age group tab pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
          data-ocid="age-guide.tab"
        >
          {ageGroups.map((group) => (
            <button
              type="button"
              key={group.id}
              onClick={() => setActiveId(group.id)}
              data-ocid={"age-guide.tab"}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border-2"
              style={{
                backgroundColor:
                  activeId === group.id ? group.accentHex : "transparent",
                borderColor:
                  activeId === group.id
                    ? group.accentHex
                    : "oklch(0.88 0.03 70)",
                color:
                  activeId === group.id
                    ? "oklch(0.99 0.005 70)"
                    : "oklch(0.42 0.04 45)",
                boxShadow:
                  activeId === group.id
                    ? `0 4px 14px ${group.ringHex}`
                    : "none",
                transform: activeId === group.id ? "scale(1.05)" : "scale(1)",
              }}
            >
              <span>{group.emoji}</span>
              <span>{group.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Detail card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border-2 overflow-hidden"
            style={{
              backgroundColor: active.bgHex,
              borderColor: active.ringHex,
            }}
          >
            {/* Card header */}
            <div
              className="px-8 py-7 flex flex-col sm:flex-row sm:items-center gap-5"
              style={{ borderBottom: `2px solid ${active.ringHex}` }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg flex-shrink-0"
                style={{ backgroundColor: active.accentHex }}
              >
                <span>{active.emoji}</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3
                    className="font-display font-bold text-2xl"
                    style={{ color: "oklch(0.2 0.04 45)" }}
                  >
                    Age {active.id === "60-plus" ? "60+" : active.id} —{" "}
                    {active.title}
                  </h3>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: active.accentHex,
                      color: "oklch(0.99 0.005 70)",
                    }}
                  >
                    {active.titleHi}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  🚶 Walk: {active.walkDuration} &nbsp;|&nbsp; 🏋️ Exercise:
                  {active.duration}
                </p>
              </div>
              {/* Duration badge */}
              <div
                className="flex flex-col items-center justify-center px-6 py-4 rounded-2xl text-center flex-shrink-0"
                style={{ backgroundColor: active.accentHex }}
              >
                <ActiveIcon className="w-6 h-6 text-white mb-1" />
                <div className="text-white font-bold text-xl leading-none">
                  {active.duration}
                </div>
                <div className="text-white/80 text-xs mt-0.5">
                  Daily Exercise
                </div>
              </div>
            </div>

            {/* Card body */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Exercise */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-white/80">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: active.accentHex }}
                >
                  <Dumbbell className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-bold text-foreground text-sm mb-1">
                  🏃 Exercise
                </h4>
                <p
                  className="font-semibold text-base mb-1"
                  style={{ color: active.accentHex }}
                >
                  {active.duration} / day
                </p>
                <p className="text-muted-foreground text-sm">
                  {active.exercise}
                </p>
                <p className="text-muted-foreground/60 text-xs mt-1">
                  {active.exerciseHi}
                </p>
              </div>

              {/* Morning Walk */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-white/80">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: active.accentHex }}
                >
                  <PersonStanding className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-bold text-foreground text-sm mb-1">
                  🌅 Morning Walk
                </h4>
                <p
                  className="font-semibold text-base mb-1"
                  style={{ color: active.accentHex }}
                >
                  {active.walkDuration}
                </p>
                <p className="text-muted-foreground text-sm">
                  {active.walkDesc}
                </p>
              </div>

              {/* Health Tips */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-white/80">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: active.accentHex }}
                >
                  <Apple className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-bold text-foreground text-sm mb-3">
                  💡 Health Tips
                </h4>
                <ul className="space-y-1.5">
                  {active.healthTips.map((tip) => (
                    <li
                      key={tip}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                        style={{ backgroundColor: active.accentHex }}
                      />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-white/80">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: active.accentHex }}
                >
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-bold text-foreground text-sm mb-3">
                  ✨ Benefits
                </h4>
                <ul className="space-y-1.5">
                  {active.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                        style={{ backgroundColor: active.accentHex }}
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Workout Plan Section */}
            <div className="px-8 pb-8">
              <div
                className="rounded-2xl overflow-hidden border"
                style={{ borderColor: active.ringHex }}
              >
                <div
                  className="px-6 py-4 flex items-center gap-3"
                  style={{ backgroundColor: active.accentHex }}
                >
                  <span className="text-2xl">🏋️</span>
                  <div>
                    <h4 className="font-bold text-white text-lg leading-none">
                      Workout Plan
                    </h4>
                    <p className="text-white/75 text-xs mt-0.5">
                      Age-appropriate exercises • Sets & Reps
                    </p>
                  </div>
                </div>
                <div
                  className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5"
                  style={{ backgroundColor: "rgba(255,255,255,0.55)" }}
                >
                  {active.workoutPlan.map((plan) => (
                    <div
                      key={plan.part}
                      className="rounded-2xl overflow-hidden shadow-sm border border-white/80"
                      style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
                      data-ocid="age-guide.panel"
                    >
                      {/* Card header bar */}
                      <div
                        className="px-5 py-3 flex items-center gap-3"
                        style={{ backgroundColor: plan.color }}
                      >
                        <span className="text-2xl">{plan.icon}</span>
                        <div className="flex-1">
                          <div className="font-bold text-white text-base leading-none">
                            {plan.part}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="bg-white/25 rounded-xl px-3 py-1.5">
                            <div className="font-black text-white text-sm leading-none">
                              {plan.sets} Sets × {plan.reps} Reps
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Exercise list */}
                      <div className="px-5 py-4">
                        <ul className="space-y-2">
                          {plan.exercises.map((ex, idx) => (
                            <li
                              key={ex}
                              className="flex items-center gap-3 text-sm font-medium text-gray-700"
                            >
                              <span
                                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                                style={{ backgroundColor: plan.color }}
                              >
                                {idx + 1}
                              </span>
                              {ex}
                            </li>
                          ))}
                        </ul>
                        <div
                          className="mt-4 pt-3 border-t text-center"
                          style={{ borderColor: `${plan.color}30` }}
                        >
                          <span
                            className="text-xs font-bold px-3 py-1 rounded-full"
                            style={{
                              backgroundColor: `${plan.color}15`,
                              color: plan.color,
                            }}
                          >
                            {plan.sets} × {plan.reps} = {plan.sets * plan.reps}{" "}
                            Total Reps
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All age group overview cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          data-ocid="age-guide.list"
        >
          {ageGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.button
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                onClick={() => setActiveId(group.id)}
                data-ocid={`age-guide.item.${i + 1}`}
                className="rounded-2xl p-4 text-center card-hover border-2 transition-all duration-300"
                style={{
                  backgroundColor:
                    activeId === group.id
                      ? group.bgHex
                      : "oklch(0.99 0.008 70)",
                  borderColor:
                    activeId === group.id
                      ? group.accentHex
                      : "oklch(0.88 0.03 70)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: group.accentHex }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl mb-1">{group.emoji}</div>
                <div
                  className="font-bold text-xs"
                  style={{ color: group.accentHex }}
                >
                  {group.id === "60-plus" ? "60+" : group.id} Yrs
                </div>
                <div className="text-muted-foreground text-xs mt-0.5">
                  {group.title}
                </div>
                <div
                  className="mt-2 text-xs font-semibold px-2 py-0.5 rounded-full mx-auto inline-block"
                  style={{
                    backgroundColor: group.bgHex,
                    color: group.accentHex,
                  }}
                >
                  {group.duration}
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background font-body">
      {/* ── NAVBAR ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-full saffron-gradient flex items-center justify-center shadow-glow-sm">
              <Sun className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-foreground leading-none block">
                Good Morning India
              </span>
              <span className="text-[11px] text-muted-foreground font-body">
                गुड मॉर्निंग इंडिया
              </span>
            </div>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden sm:flex items-center gap-6"
          >
            {["Morning Walk", "Age Guide", "Benefits", "Wellness Tips"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  data-ocid="nav.link"
                >
                  {item}
                </a>
              ),
            )}
            <a
              href="#morning-walk"
              className="saffron-gradient text-white text-sm font-semibold px-5 py-2 rounded-full shadow-warm hover:opacity-90 transition-opacity"
              data-ocid="nav.primary_button"
            >
              Start Today
            </a>
          </motion.nav>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════
          ── HERO SECTION — MORNING WALK BANNER
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Full-bleed hero image */}
        <div className="absolute inset-0">
          <img
            src="/assets/generated/morning-walk-banner.dim_1200x600.jpg"
            alt="Indians doing morning walk at sunrise"
            className="w-full h-full object-cover object-center"
          />
          <div className="hero-gradient absolute inset-0" />
        </div>

        {/* Decorative floating rings */}
        <div className="absolute top-24 right-12 w-48 h-48 rounded-full border-4 border-gold-400/20 animate-float hidden lg:block" />
        <div
          className="absolute top-32 right-20 w-32 h-32 rounded-full border-2 border-saffron-500/20 animate-float hidden lg:block"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-24 left-12 w-36 h-36 rounded-full border-4 border-forest-500/20 animate-float hidden lg:block"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block bg-gold-400/20 border border-gold-400/40 text-yellow-100 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm tracking-widest uppercase">
              🌅 Swasth Bharat — Healthy India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="font-display font-bold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)" }}
          >
            RISE. <span className="gold-shimmer">WALK.</span> CONQUER. 🇮🇳
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-white/90 text-lg sm:text-xl font-body max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Your Morning Walk Changes Everything
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-white/75 text-base sm:text-lg font-body max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Join millions of Indians who start their day with a morning walk
            <br />
            <span className="text-gold-400 text-sm">हर सुबह एक नई शुरुआत है</span>
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 text-center"
              >
                <div className="text-2xl font-bold text-gold-400 font-display">
                  {stat.value}
                </div>
                <div className="text-white/80 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#morning-walk"
              className="saffron-gradient text-white font-bold px-10 py-4 rounded-full shadow-warm text-base hover:opacity-90 transition-all hover:scale-105 inline-block"
              data-ocid="hero.primary_button"
            >
              🚶 Start Your Morning Today
            </a>
            <a
              href="#age-guide"
              className="bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-white/25 transition-all inline-block"
              data-ocid="hero.secondary_button"
            >
              🎂 Find Your Age Plan
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-white/50 to-transparent animate-bounce" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════
          ── WHY MORNING WALK? — EXERCISE COLLAGE
      ══════════════════════════════════════════════════ */}
      <section id="morning-walk" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-warm ring-4 ring-saffron-500/20">
                <img
                  src="/assets/generated/exercise-collage.dim_800x500.jpg"
                  alt="Morning exercise and wellness activities"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-5 -right-4 bg-card rounded-2xl shadow-warm px-5 py-3 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full saffron-gradient flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">
                      50 Lakh+
                    </div>
                    <div className="text-muted-foreground text-xs">
                      Daily Walkers
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-5 -left-4 bg-card rounded-2xl shadow-warm px-5 py-3 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full green-gradient flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">
                      100% Free
                    </div>
                    <div className="text-muted-foreground text-xs">
                      No Equipment
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <span className="inline-block bg-saffron-100 text-saffron-600 text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase border border-saffron-500/20">
                🚶 Why Morning Exercise?
              </span>
              <h2
                className="font-display font-bold text-foreground mb-4 leading-tight"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
              >
                6 Life-Changing Reasons to{" "}
                <span className="text-primary">Walk Every Morning</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                A 30-minute morning walk is the single most powerful, free, and
                accessible habit you can build. Here's what science and
                tradition both agree on:
              </p>

              <div className="space-y-4" data-ocid="walk-benefits.list">
                {walkBenefits.map((benefit, i) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="flex gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/30 card-hover"
                      data-ocid={`walk-benefits.item.${i + 1}`}
                    >
                      <div className="w-10 h-10 rounded-xl saffron-gradient flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {benefit.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ── AGE-WISE HEALTH GUIDE SECTION
      ══════════════════════════════════════════════════ */}
      <AgeGuideSection />

      {/* ── AGE GUIDE BANNER IMAGE ── */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-warm"
          >
            <img
              src="/assets/generated/age-guide-banner.dim_1200x500.jpg"
              alt="People of all ages exercising and walking outdoors in India"
              className="w-full h-64 sm:h-80 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ── HEALTH BENEFITS SECTION ── */}
      <section id="benefits" className="py-24 pattern-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-saffron-100 text-saffron-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase border border-saffron-500/20">
              🌺 6 Pillars of Wellness
            </span>
            <h2
              className="font-display font-bold text-foreground mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Health Benefits for a{" "}
              <span className="text-primary">Better Life</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ancient Indian wisdom meets modern wellness science. These six
              pillars will transform your health from the very first morning.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="benefits.list"
          >
            {healthBenefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="card-hover rangoli-border rounded-3xl bg-card p-7 shadow-xs"
                  data-ocid={`benefits.item.${i + 1}`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-5 shadow-sm`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-xl mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-primary/80 text-sm font-medium mb-3">
                    {benefit.titleHi}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── QUOTE SECTION ── */}
      <section className="py-24 bg-gradient-to-br from-saffron-500 to-saffron-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-forest-500/20 rounded-full translate-x-40 translate-y-40" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
          data-ocid="quote.section"
        >
          <div className="text-7xl leading-none mb-6 opacity-30">❝</div>
          <blockquote
            className="font-display font-bold text-white leading-snug mb-8"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
          >
            Every morning is a new opportunity to be healthy, happy, and strong.
          </blockquote>
          <p className="text-white/70 text-lg font-body mb-8">
            हर सुबह स्वस्थ, खुश और मजबूत होने का एक नया अवसर है
          </p>
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star key={n} className="w-5 h-5 text-gold-400 fill-current" />
            ))}
          </div>
          <p className="text-white/60 text-sm mt-3">
            — Good Morning India Community
          </p>
        </motion.div>
      </section>

      {/* ── WELLNESS TIPS SECTION ── */}
      <section id="wellness-tips" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-forest-50 text-forest-500 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase border border-forest-500/20">
              🕉️ Daily Rituals
            </span>
            <h2
              className="font-display font-bold text-foreground mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Your Perfect Morning{" "}
              <span className="text-secondary">Routine</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-4">
                {[
                  {
                    time: "5:30 AM",
                    title: "Wake Up & Stretch",
                    desc: "Rise with the sun and do gentle stretches to awaken your body.",
                    emoji: "🌅",
                  },
                  {
                    time: "5:45 AM",
                    title: "Warm Water & Lemon",
                    desc: "Detox your system with warm water and a squeeze of fresh lemon.",
                    emoji: "🍋",
                  },
                  {
                    time: "6:00 AM",
                    title: "Morning Walk / Yoga",
                    desc: "30 minutes of brisk walking or yoga — the cornerstone of your health.",
                    emoji: "🚶",
                  },
                  {
                    time: "6:30 AM",
                    title: "Meditation",
                    desc: "10 minutes of silent meditation to set intention for the day.",
                    emoji: "☮️",
                  },
                  {
                    time: "7:00 AM",
                    title: "Nutritious Breakfast",
                    desc: "Fuel your body with fresh fruits, nuts, and traditional Indian foods.",
                    emoji: "🥣",
                  },
                ].map((step, i) => (
                  <motion.div
                    key={step.time}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
                    data-ocid={`routine.item.${i + 1}`}
                  >
                    <div className="text-2xl flex-shrink-0">{step.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold text-primary bg-saffron-50 px-2.5 py-0.5 rounded-full border border-saffron-500/20">
                          {step.time}
                        </span>
                        <h4 className="font-semibold text-foreground text-sm">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-warm">
                <img
                  src="/assets/generated/morning-walk-banner.dim_1200x600.jpg"
                  alt="Morning wellness routine"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 bg-card rounded-2xl shadow-warm p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full saffron-gradient flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">
                      1 Lakh+
                    </div>
                    <div className="text-muted-foreground text-xs">
                      Happy Users
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-warm p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full green-gradient flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">
                      100% Natural
                    </div>
                    <div className="text-muted-foreground text-xs">
                      Wellness Tips
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-gradient-to-r from-forest-500 to-forest-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6"
        >
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-4">
            Start Your Healthy Journey Today! 🌿
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join thousands of Indians who have transformed their lives with
            simple morning habits.
          </p>
          <a
            href="#morning-walk"
            className="inline-block bg-white text-forest-500 font-bold px-10 py-4 rounded-full text-base hover:bg-saffron-50 transition-all hover:scale-105 shadow-warm"
            data-ocid="cta.primary_button"
          >
            🌅 Begin Today — It's Free!
          </a>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full saffron-gradient flex items-center justify-center">
                <Sun className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-background text-sm">
                  Good Morning India
                </div>
                <div className="text-background/50 text-xs">
                  गुड मॉर्निंग इंडिया
                </div>
              </div>
            </div>

            <p className="text-background/60 text-sm text-center">
              Spreading health and happiness across India, one morning at a
              time. 🇮🇳
            </p>

            <p className="text-background/40 text-xs text-center">
              © {year}.{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background/70 transition-colors underline underline-offset-2"
                data-ocid="footer.link"
              >
                Built with ♥ using caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
