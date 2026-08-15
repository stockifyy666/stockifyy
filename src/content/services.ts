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
    image2: "https://images.unsplash.com/photo-1551836022-aadb801c60ae?w=1200&q=80",
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
    image1: "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1626105985445-6430a31f6f96?w=1200&q=80",
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
    image1: "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
    metaDescription:
      "Stockifyy Assets Under Advisement (AUA) Model: expert portfolio oversight and strategic rebalancing advice while you retain full control of your assets.",
  },
  {
    slug: "wealth-planning",
    navLabel: "Wealth Planning",
    title: "Wealth Planning",
    tagline: "Personalized Shariah-Compliant Portfolios. Designed Around You.",
    icon: TrendingUp,
    summary:
      "Your financial goals, capital, investment horizon, and risk profile are unique. Your portfolio should be too.",
    intro: [
      "Stockifyy's Wealth Planning service creates personalized portfolios focused exclusively on Shariah-compliant stocks listed on the Pakistan Stock Exchange (PSX), tailored to your individual objectives.",
      "Our approach is built around your capital, your goals, and your investment horizon — not a generic template. We focus on fundamentally sound, established, and growth-oriented companies across carefully selected sectors to help manage concentration and deliver both dividend income and capital appreciation.",
      "Your investment journey doesn't end with your initial portfolio. Stockifyy helps you develop an ongoing approach to additional investments, reinvestment, and long-term compounding — so your wealth continues to grow with purpose.",
    ],
    features: [
      {
        title: "Personalized Portfolio Design",
        description:
          "Built around your capital, goals, investment horizon, and risk profile — never a one-size-fits-all template.",
      },
      {
        title: "Shariah-Compliant Focus",
        description:
          "Investments focused exclusively on Shariah-compliant PSX-listed securities, so your wealth grows without compromising your values.",
      },
      {
        title: "Sector Diversification",
        description:
          "Exposure across carefully selected sectors to help manage concentration risk and improve portfolio resilience.",
      },
      {
        title: "Quality & Growth Orientation",
        description:
          "Focus on fundamentally sound, established, and growth-oriented companies with strong long-term prospects.",
      },
      {
        title: "Dividend + Capital Growth",
        description:
          "A balanced approach combining potential dividend income and capital appreciation to build wealth over time.",
      },
      {
        title: "Flexible Investment Horizons",
        description:
          "Strategies designed for short (3M–1Y), medium (1–3Y), or long-term (3–5Y) objectives based on your personal goals.",
      },
    ],
    horizons: [
      {
        label: "Short Term",
        duration: "3 Months – 1 Year",
        description: "For investors with near-term objectives seeking focused, time-bound opportunities.",
      },
      {
        label: "Medium Term",
        duration: "1 – 3 Years",
        description: "For investors seeking growth over a medium-term horizon with a balanced risk approach.",
      },
      {
        label: "Long Term",
        duration: "3 – 5 Years",
        description: "For investors focused on long-term wealth creation and compounding returns.",
      },
    ],
    whoIsItFor: [
      "Professionals & entrepreneurs",
      "Business owners",
      "High-net-worth individuals",
      "Investors seeking a professionally designed, Shariah-compliant portfolio",
    ],
    image1: "https://images.unsplash.com/photo-1554260570-e9689a3418b8?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?w=1200&q=80",
    metaDescription:
      "Stockifyy Wealth Planning: personalized, Shariah-compliant PSX portfolios designed around your capital, goals, and investment horizon — short, medium, or long term.",
  },
  {
    slug: "traning-webinars",
    navLabel: "Training & Webinars",
    title: "Training and Webinars",
    tagline: "Learn. Understand. Invest with Confidence.",
    icon: Video,
    summary:
      "The stock market becomes easier to navigate when you understand how it works. Stockifyy's webinars and training programs provide practical insights into the PSX, market fundamentals, and Shariah-compliant investing.",
    intro: [
      "Whether you're a beginner or an experienced investor looking to strengthen your knowledge, our sessions are designed to make investing simpler, practical, and easier to understand.",
      "Our training programs cover the Pakistan Stock Exchange from the ground up — how markets work, how to read fundamentals, how to evaluate stocks through a Shariah-compliant lens, and how to develop a disciplined investment mindset. We don't just share information — we help you build the knowledge to make your own informed decisions.",
      "Educational content is provided for informational purposes and is designed to help you build market understanding. Learn before you invest — build your market knowledge, understand opportunities, and develop a more disciplined approach to investing.",
    ],
    features: [
      {
        title: "Beginner-Friendly Market Education",
        description:
          "Structured sessions that take you from the basics of PSX investing to a confident understanding of how markets move and why.",
      },
      {
        title: "Practical PSX Insights",
        description:
          "Real-world examples and current market data used throughout every session to make concepts immediately relevant.",
      },
      {
        title: "Shariah-Compliant Investing Focus",
        description:
          "Learn how to screen stocks for Shariah compliance and build a portfolio that aligns with both your financial and ethical values.",
      },
      {
        title: "Expert-Led Sessions",
        description:
          "Sessions conducted by Stockifyy's experienced analysts and advisors with deep knowledge of Pakistan's capital markets.",
      },
      {
        title: "Accessible to All Experience Levels",
        description:
          "Designed for beginners, first-time investors, students, salaried individuals, and experienced investors looking to sharpen their knowledge.",
      },
    ],
    whoIsItFor: [
      "Beginners & first-time investors",
      "Students & young professionals",
      "Salaried individuals",
      "Existing investors looking to strengthen knowledge",
      "Anyone interested in PSX & Shariah-compliant investing",
    ],
    disclaimer:
      "Educational content is provided for informational purposes only and does not guarantee investment performance or constitute individualized financial advice. Investments in the Pakistan Stock Exchange are subject to market risk.",
    image1: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
    metaDescription:
      "Stockifyy Training & Webinars: practical, expert-led education on PSX investing, market fundamentals, and Shariah-compliant investing for all experience levels.",
  },
  {
    slug: "stockifyy-membership",
    navLabel: "Stockifyy Membership",
    title: "Stockifyy Membership",
    tagline: "Three Membership Tiers. One Goal: Your Financial Growth.",
    icon: Users,
    summary:
      "Choose the membership that fits your trading style — from fast T+1 trade calls to swing strategies and an exclusive investor community powered by expert market insights.",
    intro: [
      "Stockifyy Membership gives you access to professionally developed market strategies, expert analysis, and a community of serious investors — all through three focused membership tiers designed for different trading styles and investment goals.",
      "Whether you trade daily, look for short-to-medium term opportunities, or want to build deep market understanding, there is a Stockifyy membership built for you. Every tier is grounded in Shariah-compliant research and delivered by our experienced team.",
    ],
    features: [
      {
        title: "T+1 Trading Calls (Trade Tier)",
        description:
          "Fast, focused trade ideas built around a Buy Today, Sell Tomorrow strategy for traders seeking short-term PSX opportunities.",
      },
      {
        title: "Swing Trade Calls (Swing Tier)",
        description:
          "Short- to mid-term swing opportunities with daily market audio analysis and 26 live Zoom sessions per year.",
      },
      {
        title: "Market Insights & Key Levels (Invest Tier)",
        description:
          "Key stock and market levels, members-only discussions, and insights into market psychology — monthly live Zoom included.",
      },
      {
        title: "Shariah-Compliant Strategies",
        description:
          "All trading calls and investment strategies across every tier are screened for Shariah compliance before being shared.",
      },
      {
        title: "Expert-Led Community",
        description:
          "Access to analysts, market commentary, and a members-only discussion community of serious Pakistani investors.",
      },
    ],
    plans: [
      {
        name: "Trade With Stockifyy",
        tagline: "Buy Today. Sell Tomorrow.",
        description:
          "A focused trading membership built around a T+1 strategy, designed for traders looking for short-term opportunities in the Pakistan Stock Exchange.",
        features: [
          "T+1 trading calls",
          "Shariah-compliant trading opportunities",
          "Fast, focused trade ideas",
          "A simple, execution-oriented approach",
        ],
      },
      {
        name: "Swing With Stockifyy",
        tagline: "For Traders & Investors Looking Beyond the Next Day.",
        description:
          "Get access to premium market insights and carefully developed strategies designed for serious traders and investors seeking short- to medium-term opportunities.",
        features: [
          "Swing trade calls for short- to mid-term opportunities",
          "Shariah-compliant investment strategies",
          "Daily market audio analysis by experts",
          "26 live Zoom sessions per year",
        ],
      },
      {
        name: "Invest With Stockifyy",
        tagline: "Build Your Market Understanding. Invest With Confidence.",
        description:
          "Join an exclusive community of traders and investors gaining market insights, strategies, and knowledge inspired by the experience and teachings of Dr. Masood.",
        features: [
          "Market insights and analysis",
          "Key stock levels and market levels",
          "Members-only discussion community",
          "Insights into market psychology",
          "Monthly live Zoom session",
        ],
      },
    ],
    image1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=80",
    metaDescription:
      "Stockifyy Membership: choose from Trade, Swing, or Invest tiers — expert Shariah-compliant trading calls, swing strategies, and market insights for PSX investors.",
  },
  
  {
    slug: "account-opening-in-psx",
    navLabel: "Account Opening in PSX",
    title: "Account Opening in PSX",
    tagline: "Your Gateway to the Pakistan Stock Exchange — We Handle the Paperwork.",
    icon: CreditCard,
    summary:
      "End-to-end assistance for opening a Pakistan Stock Exchange account, covering documentation, application processing and account activation.",
    intro: [
      "Opening a PSX account is the first step towards investing in Pakistan's capital market. However, different account types, documentation requirements and verification procedures can make the process confusing — particularly for first-time investors.",
      "Stockifyy simplifies the entire account-opening process. We help you understand which account type suits your needs, prepare the required documents, complete the application and follow the process through to activation.",
      "Once your account is active, our team helps you understand its basic operation so you can begin your investment journey with greater clarity and confidence.",
    ],
    features: [
      {
        title: "Regular Account Opening",
        description:
          "A complete PSX trading account for investors who meet the standard documentation and verification requirements.",
      },
      {
        title: "Sahulat Account Opening",
        description:
          "A simplified account-opening option for individual investors who want to begin investing with easier documentation and defined investment limits.",
      },
      {
        title: "Minor Account Opening",
        description:
          "Account-opening assistance for investments made on behalf of a minor under the supervision of a parent or legal guardian.",
      },
      {
        title: "Roshan Digital Account",
        description:
          "Support for overseas Pakistanis seeking to invest in the Pakistan Stock Exchange through their Roshan Digital Account.",
      },
      {
        title: "Corporate Account Opening",
        description:
          "Structured account-opening assistance for companies and other eligible corporate entities seeking exposure to the Pakistan Stock Exchange.",
      },
      {
        title: "Documentation & Application Assistance",
        description:
          "A clear checklist of required documents, along with support in completing and submitting the account-opening application correctly.",
      },
      {
        title: "Account Activation Support",
        description:
          "Follow-up and assistance throughout the verification and activation process to help minimise unnecessary delays.",
      },
      {
        title: "Post-Opening Guidance",
        description:
          "Basic guidance on account access, the trading platform, fund transfers and other essential features after activation.",
      },
    ],
    image1: "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    metaDescription:
      "Stockifyy Account Opening in PSX: end-to-end assistance for Regular, Sahulat, Minor, Roshan Digital and Corporate PSX accounts — documentation to activation.",
  },
  {
    slug: "taxation-services",
    navLabel: "Taxation Services",
    title: "Taxation Services",
    tagline: "Stay Compliant. Invest with Confidence.",
    icon: Receipt,
    summary:
      "Complete tax support for PSX investors, covering filer status, capital gains, dividend reporting, investment records and annual income tax return filing.",
    intro: [
      "Your responsibility as a PSX investor does not end with selecting the right stocks. Understanding and correctly managing the taxes connected to your investments is equally important.",
      "Investing in the stock market comes with tax responsibilities that are often difficult to understand. Capital gains, dividends, broker deductions, filer status and annual FBR declarations must all be reported correctly.",
      "Stockifyy's Taxation Services help you organise your investment records, prepare your income tax return and complete the filing process accurately. Whether you are a long-term investor or an active trader, our goal is to make tax compliance simpler, clearer and less stressful.",
    ],
    features: [
      {
        title: "Filer Status Assistance",
        description:
          "Guidance on becoming a filer and maintaining your status on the Active Taxpayers List — essential for reduced withholding tax rates on trades and dividends.",
      },
      {
        title: "Income Tax Return Preparation & Filing",
        description:
          "Preparation and filing of your annual income tax return, with your PSX investment income and activity properly accounted for.",
      },
      {
        title: "Capital Gains & Dividend Reporting",
        description:
          "Correct reporting of capital gains, dividend income and other relevant earnings arising from your stock market investments.",
      },
      {
        title: "Broker Tax Statement Review",
        description:
          "Review of broker-provided tax certificates and statements to identify taxes already deducted and ensure they are properly reflected in your return.",
      },
      {
        title: "Wealth Statement Preparation",
        description:
          "Assistance in declaring your investment portfolio, cash balances and other relevant assets in your annual wealth statement.",
      },
      {
        title: "PSX Investment Record Organisation",
        description:
          "Support in compiling the documents and investment records required for an accurate and properly supported tax filing.",
      },
    ],
    image1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    metaDescription:
      "Stockifyy Taxation Services: complete PSX investor tax support — filer status, capital gains reporting, income tax return filing and wealth statement preparation.",
  }
  
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
