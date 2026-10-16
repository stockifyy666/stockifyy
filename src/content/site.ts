export const site = {
  name: "Stockifyy",
  fullName: "Stockifyy Advisory",
  certification: "SECP Certified",
  tagline: "Independent counsel for decisions that redefine a company.",
  email: "info@stockifyy.com",
  phone: "+1 (555) 019-2200",
  address: "One Ledger Square, Suite 1400",
  dataPortalHref: "https://stockifyy-data-portal.vercel.app/dashboard",
  // Order matters: Header renders Overview, Our Story, then the Offerings
  // dropdown, then the rest of this list, in this exact order.
  nav: [
    { href: "/", label: "Home" },
    { href: "/#our-story", label: "About Us" },
    { href: "/team", label: "Our Team" },
    // { href: "/blog", label: "Blogs" },
    { href: "/#lets-talk", label: "Contact Us" },
  ],
};
