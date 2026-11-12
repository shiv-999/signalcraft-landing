export const features = [
  {
    title: "Market radar",
    body: "Tracks competitors, industry news and customer conversations, then summarises what changed this week and why it matters.",
    icon: "radar",
  },
  {
    title: "On-brand drafts",
    body: "Learns your tone from past posts and guidelines, and drafts LinkedIn posts, newsletters and blog outlines that sound like you.",
    icon: "pen",
  },
  {
    title: "Smart scheduling",
    body: "Plans a weekly calendar across channels and suggests the best time to publish based on your own engagement history.",
    icon: "calendar",
  },
  {
    title: "Human approval",
    body: "Nothing goes out without a person signing off. Every draft shows its sources so reviewers can check the facts quickly.",
    icon: "check",
  },
] as const;

export const steps = [
  { title: "Connect", body: "Link your website, social accounts and brand guide in a few minutes." },
  { title: "Review", body: "Get a weekly brief and a queue of drafts tailored to your goals." },
  { title: "Publish", body: "Approve, tweak or reject. Signalcraft schedules what you approve." },
] as const;

export const plans = [
  {
    name: "Starter",
    monthly: 49,
    tagline: "For solo marketers",
    perks: ["1 brand", "Weekly market brief", "30 drafts / month", "2 channels"],
  },
  {
    name: "Growth",
    monthly: 149,
    tagline: "For small teams",
    perks: ["3 brands", "Daily market radar", "Unlimited drafts", "All channels", "Approval workflow"],
    featured: true,
  },
  {
    name: "Scale",
    monthly: 399,
    tagline: "For agencies",
    perks: ["10 brands", "Custom data sources", "API access", "Priority support"],
  },
] as const;

export const faqs = [
  {
    q: "What does Signalcraft actually do?",
    a: "It monitors your market, drafts marketing content in your brand voice and schedules what you approve. Think of it as a research assistant and first-draft writer for a small marketing team.",
  },
  {
    q: "Will the content sound like AI?",
    a: "Drafts are tuned on your own past writing and guidelines, and every piece is reviewed by a person before it is published.",
  },
  {
    q: "Which channels are supported?",
    a: "LinkedIn, X, email newsletters and blogs at launch, with more on the roadmap.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Plans are month to month, and yearly plans are billed upfront at a discount.",
  },
] as const;
