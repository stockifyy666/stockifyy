import {
  Building2,
  CreditCard,
  LayoutDashboard,
  PieChart,
  Receipt,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Users,
  Video,
} from "lucide-react";
import type { Service } from "@/types";
import oneOnOneAdvisory from "../../public/images/one-on-one.jpg";

export const services: Service[] = [
  {
    slug: "one-on-one-advisory",
    navLabel: "One on One Advisory",
    title: "One on One Advisory",
    tagline: "Your portfolio. Your advisor. Your pace.",
    icon: UserCheck,
    summary:
      "Direct, personalised guidance from a dedicated Stockifyy analyst — built around your financial goals, risk appetite and investment timeline.",
    intro: [
      "At Stockifyy Advisory, we believe no two investors are the same. Our One on One Advisory service pairs you directly with a senior market analyst who takes the time to understand your financial history, your goals and the specific outcomes you want from the Pakistan Stock Exchange. This is not a generic signal group — it is a dedicated advisory relationship.",
      "From your very first session, your advisor crafts a personalised investment strategy grounded in fundamental research, technical analysis and Shariah-compliant screening. Every recommendation comes with a clear rationale, so you grow your knowledge alongside your wealth. Whether you are building your first portfolio or refining an existing one, you get a partner who is as invested in your success as you are.",
    ],
    features: [
      {
        title: "Dedicated Senior Analyst",
        description:
          "You work with one consistent advisor who knows your portfolio intimately and provides continuity across every market cycle.",
      },
      {
        title: "Personalised Investment Strategy",
        description:
          "A custom plan built around your income, goals, risk tolerance and investment horizon — never a one-size-fits-all template.",
      },
      {
        title: "Research-Backed Trade Guidance",
        description:
          "Every stock recommendation is supported by in-depth fundamental and technical analysis, giving you the confidence to act decisively.",
      },
      {
        title: "Shariah-Compliant Stock Selection",
        description:
          "All recommendations are rigorously screened to ensure your investment activity remains fully aligned with Islamic financial principles.",
      },
      {
        title: "Ongoing Progress Reviews",
        description:
          "Regular portfolio check-ins ensure your strategy stays aligned with changing market conditions and evolving personal goals.",
      },
    ],
    image1: oneOnOneAdvisory,
    image2: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80",
    metaDescription:
      "Stockifyy One on One Advisory: personalised, Shariah-compliant PSX investment guidance from a dedicated senior analyst — tailored to your financial goals.",
  },
  {
    slug: "corporate-advisory",
    navLabel: "Corporate Advisory",
    title: "Corporate Advisory",
    tagline: "Strategic financial intelligence for forward-thinking businesses.",
    icon: Building2,
    summary:
      "Institutional-grade, Shariah-compliant financial consulting for businesses that demand more than standard market advice.",
    intro: [
      "Corporate treasury decisions carry consequences that ripple across entire organisations. Stockifyy's Corporate Advisory service provides businesses, institutions and family offices with the same depth of research, regulatory insight and strategic discipline used by leading investment firms — structured around the unique requirements of Pakistan's corporate landscape.",
      "We work directly alongside your executive and finance teams to evaluate investment opportunities, optimise idle capital, manage financial risk and ensure every corporate market activity is fully Shariah-compliant and SECP-aligned. From capital deployment on the PSX to structuring dividend reinvestment strategies, we deliver clear, data-driven recommendations that protect your organisation's financial health and support long-term growth.",
    ],
    features: [
      {
        title: "Institutional Research & Market Intelligence",
        description:
          "High-conviction sector reports and macroeconomic briefings that give your board the intelligence needed for sound capital decisions.",
      },
      {
        title: "Treasury & Idle Capital Optimisation",
        description:
          "We identify the most effective Shariah-compliant vehicles for deploying surplus corporate funds to generate returns without excess risk.",
      },
      {
        title: "Bespoke Corporate Investment Strategy",
        description:
          "Every corporate engagement begins with a thorough financial diagnostic, resulting in a strategy aligned with your industry, scale and liquidity needs.",
      },
      {
        title: "Regulatory & Shariah Compliance",
        description:
          "All recommendations adhere to SECP guidelines and Islamic finance principles — protecting your corporate reputation and stakeholder trust.",
      },
      {
        title: "Ongoing Strategic Risk Assessment",
        description:
          "We proactively monitor market and regulatory developments that could affect your corporate investment positions, keeping you a step ahead.",
      },
    ],
    image1: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
    metaDescription:
      "Stockifyy Corporate Advisory: Shariah-compliant treasury management, capital strategy and institutional market intelligence for Pakistani businesses and institutions.",
  },
  {
    slug: "assets-under-advisement-model",
    navLabel: "Assets Under Advisement Model",
    title: "Assets Under Advisement Model",
    tagline: "Professional oversight. Complete ownership. Zero conflict of interest.",
    icon: ShieldCheck,
    summary:
      "Expert strategic advisory over your entire asset base — while you retain full custody, control and decision-making authority.",
    intro: [
      "The Assets Under Advisement (AUA) Model is designed for investors and institutions who already hold a substantial portfolio but want professional oversight to identify inefficiencies, reduce unnecessary risk and unlock better risk-adjusted returns. Unlike traditional fund management, you never hand over control of your assets — Stockifyy acts purely as your strategic advisor.",
      "We conduct a holistic review of your total investment picture — equities, cash positions, sectoral exposure and more — and provide ongoing rebalancing recommendations backed by rigorous research. This model is especially suited to high-net-worth individuals, family offices and corporate treasuries that require expert-level guidance without surrendering custody of their holdings.",
    ],
    features: [
      {
        title: "Holistic Portfolio Audit",
        description:
          "A comprehensive review of your existing holdings across all asset classes, identifying overlaps, overexposures and untapped opportunities.",
      },
      {
        title: "Strategic Rebalancing Recommendations",
        description:
          "Regular, research-driven suggestions on when and how to shift capital between sectors or instruments to optimise performance.",
      },
      {
        title: "Full Asset Custody Retained by You",
        description:
          "Your assets remain entirely in your own brokerage accounts — we advise, you decide. No discretionary management, no hidden conflicts.",
      },
      {
        title: "Institutional-Grade Reporting",
        description:
          "Detailed quarterly performance analytics and risk attribution reports that benchmark your portfolio against relevant PSX indices.",
      },
      {
        title: "Scalable as Your Wealth Grows",
        description:
          "The AUA model expands with your portfolio — whether you add new asset classes, markets or investment vehicles, our coverage scales with you.",
      },
    ],
    image1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
    metaDescription:
      "Stockifyy Assets Under Advisement (AUA) Model: expert portfolio oversight and strategic rebalancing advice while you retain full control of your assets.",
  },
  {
    slug: "wealth-planning",
    navLabel: "Wealth Planning",
    title: "Wealth Planning",
    tagline: "A long-term financial roadmap built around your life.",
    icon: TrendingUp,
    summary:
      "Comprehensive wealth planning that maps your financial future — integrating investments, income, savings and goals into one coherent long-term strategy.",
    intro: [
      "True wealth is not built through a single great trade — it is built through deliberate, disciplined planning over time. Stockifyy's Wealth Planning service takes a holistic view of your financial life, bringing together your investment portfolio, income streams, savings targets and long-term aspirations into a single, coherent strategy that compounds year after year.",
      "We work with you to define what financial freedom looks like on your terms — whether that is early retirement, funding your children's education, building generational wealth or achieving a specific net-worth milestone. From there, we reverse-engineer a practical roadmap with milestone checkpoints, investment targets and regular reviews to keep you on track regardless of market conditions.",
    ],
    features: [
      {
        title: "Goal-Based Financial Mapping",
        description:
          "We translate your life ambitions into quantifiable financial targets, then build a step-by-step plan to reach each one.",
      },
      {
        title: "Integrated Investment & Savings Strategy",
        description:
          "Your market investments, savings and income are coordinated into one unified framework for maximum compounding efficiency.",
      },
      {
        title: "Long-Term Horizon Planning",
        description:
          "Whether your goals are five years away or twenty-five, we structure a strategy that builds wealth sustainably across every phase.",
      },
      {
        title: "Shariah-Compliant Wealth Growth",
        description:
          "Every element of your wealth plan adheres to Islamic financial principles, so growth is achieved without compromising your values.",
      },
      {
        title: "Regular Plan Reviews & Adjustments",
        description:
          "Life changes, and so should your plan. Scheduled reviews ensure your wealth strategy adapts as your circumstances evolve.",
      },
    ],
    image1: "https://images.unsplash.com/photo-1554260570-e9689a3418b8?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80",
    metaDescription:
      "Stockifyy Wealth Planning: comprehensive, Shariah-compliant long-term financial planning that integrates investments, savings and life goals into a single strategy.",
  },
  {
    slug: "traning-webinars",
    navLabel: "Training & Webinars",
    title: "Training and Webinars",
    tagline: "Live market intelligence, direct from expert analysts.",
    icon: Video,
    summary:
      "Interactive live sessions where Stockifyy's senior analysts break down market developments, sector outlooks and investment strategy in real time.",
    intro: [
      "Staying ahead in Pakistan's fast-moving equity market demands more than reading headlines. Stockifyy's Webinar series connects you directly with our senior analysts for structured, live deep-dives into the forces shaping the PSX — from macroeconomic policy shifts and corporate earnings to global capital flows and emerging sectoral opportunities.",
      "Each session is designed to be immediately actionable. We go beyond surface-level commentary to explain the underlying data, the historical context and the specific implications for your portfolio. And because every webinar includes a live Q&A segment, you can bring your own questions and get expert answers in real time — not days later.",
    ],
    features: [
      {
        title: "Live Analyst-Led Sessions",
        description:
          "Senior Stockifyy analysts present structured market reviews covering macroeconomic developments, sector rotation and stock-level insights.",
      },
      {
        title: "Real-Time Q&A Access",
        description:
          "Ask your specific investment questions directly during the session and receive expert, research-backed answers on the spot.",
      },
      {
        title: "In-Depth Sector Outlooks",
        description:
          "Each webinar identifies which PSX sectors are positioned for growth and which carry elevated near-term risk based on current data.",
      },
      {
        title: "Macro-to-Micro Analysis",
        description:
          "We connect global economic trends to local market dynamics, showing you exactly how international factors affect Pakistani equities.",
      },
      {
        title: "On-Demand Access for Members",
        description:
          "Registered members receive access to session recordings, so you never miss a critical market update even when you cannot attend live.",
      },
    ],
    image1: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=1200&q=80",
    metaDescription:
      "Stockifyy Webinars: live, interactive sessions with senior analysts covering PSX market developments, sector outlooks and investment strategy in real time.",
  },
  {
    slug: "stockifyy-membership",
    navLabel: "Stockifyy Membership",
    title: "Stockifyy Membership",
    tagline: "Join Pakistan's most trusted investing community.",
    icon: Users,
    summary:
      "Become part of the Stockifyy investor community — access curated research, live trade discussions and expert market insights through our exclusive advisory channel.",
    intro: [
      "Investing alone is harder than it needs to be. The Stockifyy community brings together thousands of Pakistani investors who share one goal: building wealth the right way. Through our exclusive advisory channel, members receive curated market research, live trade discussions, sectoral briefings and real-time analyst commentary — making professional-grade insight accessible to every member, regardless of portfolio size.",
      "This is not a generic stock tips group. Every update shared through the Invest with Stockifyy channel is backed by the same research process that drives our premium advisory services — fundamental analysis, technical screening and Shariah compliance review. You get the confidence of knowing that what you read has been through a disciplined evaluation process before it reaches you.",
    ],
    features: [
      {
        title: "Curated Research Shared Daily",
        description:
          "Analyst-reviewed market insights, sector updates and economic commentary delivered directly to your device every trading day.",
      },
      {
        title: "Live Trade Call Discussions",
        description:
          "Active conversations around current market opportunities, with analysts providing context and answering member questions in real time.",
      },
      {
        title: "Shariah-Compliant Picks Only",
        description:
          "Every stock or opportunity discussed in the community has been pre-screened for Shariah compliance — so you never have to second-guess your choices.",
      },
      {
        title: "Community of Serious Investors",
        description:
          "Connect with thousands of like-minded Pakistani investors who are actively building their financial futures through disciplined, research-driven investing.",
      },
      {
        title: "Direct Access to the Stockifyy Team",
        description:
          "Ask questions, share observations and get direct responses from the analysts and advisors behind Stockifyy's research engine.",
      },
    ],
    image1: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80",
    metaDescription:
      "Invest with Stockifyy: join Pakistan's most trusted investor community for daily curated research, live trade discussions and Shariah-compliant stock market insights.",
  },
  
  {
    slug: "account-opening-in-psx",
    navLabel: "Account Opening in PSX",
    title: "Account Opening in PSX",
    tagline: "Your gateway to the Pakistan Stock Exchange — we handle the paperwork.",
    icon: CreditCard,
    summary:
      "End-to-end account opening support for new investors — from selecting the right broker to completing CDC and brokerage registration with full compliance guidance.",
    intro: [
      "Taking your first step into the Pakistan Stock Exchange is often the hardest — not because investing is difficult, but because the account opening process involves multiple institutions, documentation requirements and regulatory steps that can feel overwhelming without a guide. Stockifyy eliminates that friction entirely.",
      "Our team walks you through every stage of the process: selecting a SECP-regulated broker that suits your trading style, completing your CDC (Central Depository Company) Investor Account registration, submitting the correct documentation and ensuring your account is properly configured for Shariah-compliant equity investing. By the time you make your first trade, you will understand exactly how your account works, what protections you have and how your investments are held.",
    ],
    features: [
      {
        title: "Broker Selection Guidance",
        description:
          "We help you identify the right SECP-regulated brokerage based on your trading frequency, tech preferences and service requirements.",
      },
      {
        title: "CDC Investor Account Registration",
        description:
          "Step-by-step support for opening your Central Depository Company account — the foundation of all PSX equity investing.",
      },
      {
        title: "Documentation & Compliance Checklist",
        description:
          "A clear list of required documents and how to prepare them correctly, eliminating delays and rejected applications.",
      },
      {
        title: "Shariah-Compliant Account Configuration",
        description:
          "Guidance on ensuring your account settings and initial investment selections align with Islamic finance requirements from day one.",
      },
      {
        title: "Post-Opening Orientation",
        description:
          "Once your account is active, we walk you through the trading platform, order types and portfolio monitoring tools so you can invest with confidence.",
      },
    ],
    image1: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1554260570-e9689a3418b8?w=1200&q=80",
    metaDescription:
      "Stockifyy Account Opening in PSX: expert guidance on CDC registration, broker selection and full compliance support for new Pakistan Stock Exchange investors.",
  },
  {
    slug: "taxation-services",
    navLabel: "Taxation Services",
    title: "Taxation Services",
    tagline: "Stay compliant. Keep more of what you earn.",
    icon: Receipt,
    summary:
      "Practical, investor-focused tax guidance covering capital gains, withholding tax, FBR filing and filer status — tailored to PSX investors and traders.",
    intro: [
      "Pakistan's tax framework for capital market income is one of the most frequently misunderstood areas of personal finance. Capital gains tax rates, holding period rules, withholding tax at the broker level and FBR disclosure requirements all interact in ways that can quietly erode your returns if not properly managed. Stockifyy's Taxation Services bridge the gap between your investment activity and your tax obligations — so you pay exactly what you owe, and not a rupee more.",
      "We work with individual investors, active traders and corporate clients to structure investment activity in a tax-aware manner from the outset. Tax planning is not an afterthought at Stockifyy — it is embedded into the advisory process so that every portfolio decision accounts for its tax implication alongside its investment merit.",
    ],
    features: [
      {
        title: "Capital Gains Tax Structuring",
        description:
          "We help you understand CGT implications based on your holding period, trading frequency and filer status, with strategies to optimise your net returns.",
      },
      {
        title: "Withholding Tax Review",
        description:
          "A thorough review of broker-deducted taxes and dividend withholding to ensure you are not overpaying at source.",
      },
      {
        title: "ATL Filer Status Guidance",
        description:
          "Practical advice on maintaining Active Taxpayer List status and the material difference it makes to your trading cost structure.",
      },
      {
        title: "FBR Wealth & Income Filing Support",
        description:
          "Organised assistance in preparing your capital market income disclosures for annual wealth statements and income tax returns.",
      },
      {
        title: "Corporate Investment Tax Coordination",
        description:
          "For institutional clients, we coordinate directly with your finance function on the tax treatment of corporate market investment activities.",
      },
    ],
    image1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    metaDescription:
      "Stockifyy Taxation Services: expert capital gains tax, withholding tax and FBR filing guidance for Pakistan Stock Exchange investors, traders and corporate clients.",
  }
  
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
