export const site = {
  name: "Stockifyy",
  fullName: "Stockifyy Advisory",
  certification: "SECP Certified",
  tagline: "Pakistan ka sabse trusted SECP-certified stock market advisory.",
  email: "info@stockifyy.com",
  phone: "+92 336 2444466",
  address: "Karachi & Islamabad, Pakistan",
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
