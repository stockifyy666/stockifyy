export const site = {
  name: "Stockifyy",
  fullName: "Stockifyy Advisory",
  certification: "SECP Certified",
  tagline: "Independent counsel for decisions that redefine a company.",
  email: "partners@stockifyy.com",
  phone: "+1 (555) 019-2200",
  address: "One Ledger Square, Suite 1400",
  dataPortalHref: "/data-portal",
  // Order matters: Header renders Home, About Us, then the Services
  // dropdown, then the rest of this list, in this exact order.
  nav: [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About Us" },
    { href: "/team", label: "Our Team" },
    // { href: "/blog", label: "Blogs" },
    { href: "/#contact", label: "Contact Us" },
  ],
};