export type ServiceFeature = {
  title: string;
  description: string;
};

export type ServicePlan = {
  name: string;
  tagline: string;
  description: string;
  features: string[];
};

export type InvestmentHorizon = {
  label: string;
  duration: string;
  description: string;
};

export type Service = {
  slug: string;
  navLabel: string;
  title: string;
  tagline: string;
  icon: import("lucide-react").LucideIcon;
  summary: string;
  intro: string[];
  features: ServiceFeature[];
  image1: string | import("next/image").StaticImageData;
  image2: string | import("next/image").StaticImageData;
  metaDescription: string;
  plans?: ServicePlan[];
  horizons?: InvestmentHorizon[];
  whoIsItFor?: string[];
  disclaimer?: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: import("next/image").StaticImageData;
  objectPosition?: string;
};
