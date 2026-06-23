export const betaRoom = {
  project: {
    name: "RoastMyApp Beta",
    status: "Active beta",
    responses: 24,
    weeklyDelta: 9,
    repeatedPains: 8,
    activationBlockers: 3,
    highPriorityTasks: 5,
    returnScore: 7.4,
  },

  summary:
    "RoastMyApp has a strong core value: users enjoy receiving direct, actionable feedback on their product. The main weakness is activation clarity. Several testers felt unsure after upload, wanted a visible example before signup, and asked for more concrete next steps after the roast. Prioritize onboarding, result explainability, and export/share flow before adding more features.",

  painPoints: [
    { label: "Unclear upload → result flow", mentions: 7, severity: "High" },
    { label: "No example before signup", mentions: 5, severity: "Medium" },
    { label: "Result feels too generic sometimes", mentions: 4, severity: "Medium" },
    { label: "Pricing value is not obvious", mentions: 3, severity: "Medium" },
    { label: "Need shareable output", mentions: 3, severity: "Low" },
  ],

  feedback: [
    {
      id: "F-024",
      role: "Founder",
      sentiment: "Positive",
      returnScore: 9,
      category: "Value",
      quote:
        "The roast was brutally useful. It found issues I knew existed but couldn't explain clearly.",
      pattern: "Direct critique creates strong perceived value.",
    },
    {
      id: "F-023",
      role: "Designer",
      sentiment: "Confused",
      returnScore: 6,
      category: "Onboarding",
      quote:
        "After uploading the screenshot I wasn't sure if the analysis was loading or if I missed a step.",
      pattern: "Upload → result transition needs progress and state clarity.",
    },
    {
      id: "F-022",
      role: "Student founder",
      sentiment: "Neutral",
      returnScore: 7,
      category: "Trust",
      quote:
        "I wanted to see one example roast before giving my email. The product sounds cool, but I need proof.",
      pattern: "Example output should appear before signup.",
    },
    {
      id: "F-021",
      role: "Developer",
      sentiment: "Positive",
      returnScore: 8,
      category: "Sharing",
      quote:
        "I would share the result in Telegram if it generated a cleaner card with the key fixes.",
      pattern: "Shareable output can increase organic distribution.",
    },
    {
      id: "F-020",
      role: "Founder",
      sentiment: "Concern",
      returnScore: 5,
      category: "Pricing",
      quote:
        "I liked the product but didn't understand what I get for the paid key compared with a free AI chat.",
      pattern: "Pricing page must explain product-specific value.",
    },
    {
      id: "F-019",
      role: "Marketer",
      sentiment: "Positive",
      returnScore: 8,
      category: "Value",
      quote:
        "The best part is that it doesn't just say the landing is bad — it tells me what to fix first.",
      pattern: "Prioritized fixes matter more than generic feedback.",
    },
  ],

  backlog: [
    {
      title: "Clarify onboarding after first upload",
      priority: "High",
      category: "UX issue",
      sources: 7,
      effort: "M",
      reasoning:
        "Users do not understand whether the analysis is loading, failed, or needs another input. Add progress states and a next-step hint.",
    },
    {
      title: "Add example analysis before signup",
      priority: "High",
      category: "Activation",
      sources: 5,
      effort: "S",
      reasoning:
        "Users want proof of value before sharing email. Add a demo analysis card directly on the landing page.",
    },
    {
      title: "Make pricing value more obvious",
      priority: "Medium",
      category: "Monetization",
      sources: 3,
      effort: "M",
      reasoning:
        "Paid intent exists, but users need a clearer explanation of what a key unlocks compared with a generic AI prompt.",
    },
    {
      title: "Generate share card for Threads / Telegram",
      priority: "Medium",
      category: "Growth",
      sources: 3,
      effort: "M",
      reasoning:
        "Several testers wanted a clean card with the strongest findings. This can improve organic distribution and user motivation.",
    },
    {
      title: "Add export to PDF / Markdown",
      priority: "Low",
      category: "Retention",
      sources: 2,
      effort: "L",
      reasoning:
        "Useful for founders who want to keep or forward the result, but less urgent than activation blockers.",
    },
  ],
};

export const productDecisions = [
  {
    title: "Structured feedback instead of free-text chaos",
    body:
      "The beta form asks for likes, confusion, annoyances, missing features, and return intent. This keeps feedback comparable and easier to convert into backlog items.",
  },
  {
    title: "Repeated pain points drive priority",
    body:
      "The dashboard highlights source count and severity. A feature request from one user is a signal; the same blocker repeated by seven users becomes roadmap evidence.",
  },
  {
    title: "Return score adds product signal",
    body:
      "A 1–10 return score gives a lightweight read on whether users would come back after the first experience.",
  },
  {
    title: "AI is designed as an assistant, not a black box",
    body:
      "The demo shows AI summaries and backlog reasoning, but still keeps original feedback visible so the product builder can verify the recommendation.",
  },
];

export const routes = [
  { href: "#/", label: "Landing" },
  { href: "#/dashboard", label: "Dashboard" },
  { href: "#/feedback", label: "Feedback" },
  { href: "#/backlog", label: "Backlog" },
  { href: "#/room", label: "Beta form" },
];
