export type StaffOffice = "Islamabad" | "Karachi";

// Only these 6 teams are covered by the staff verification system.
// Directors / CEO are intentionally excluded — this system is for
// office-card verification of regular staff only.
export type StaffDepartment =
  | "IT Team"
  | "Customer Support Team"
  | "Media Team"
  | "Finance & Accounts Team"
  | "Technical Analysts Team"
  | "Graphic Design Team";

export type StaffMember = {
  /**
   * Unique, non-sequential ID printed on the staff card / encoded in
   * the QR code. Intentionally random (not 001, 002, 003…) so nobody
   * can guess a colleague's URL by changing a number — only scanning
   * the actual printed QR code reveals a valid ID.
   */
  id: string;
  name: string;
  designation: string;
  department: StaffDepartment;
  office: StaffOffice;
  email: string;
  phone: string;
  /** Path under /public, or a full URL (e.g. a placeholder avatar) */
  photo?: string;
  status: "Active" | "Inactive";
  joinDate?: string;
};

// ── ⚠ MOSTLY PLACEHOLDER DATA ───────────────────────────────────
// Entry #1 (Abdullah) is REAL. Everyone else is still random/fake —
// generated only so the QR verification pages can be tested end to
// end. Replace each remaining entry with real staff details (photo
// under /images/staff/) as they're provided.
//
// The `id` field is what gets encoded into the QR code printed on
// each staff member's physical office card, e.g.:
//   https://www.stockifyy.com/staff/STK-7F5C45
// ─────────────────────────────────────────────────────────────────

export const staffMembers: StaffMember[] = [
  // ── Islamabad Office (15) ──
  { id: "STK-7F5C45", name: "Abdullah Awais", designation: "Web Developer", department: "IT Team", office: "Islamabad", email: "abdullahkinglk@gmail.com", phone: "+92 317 0502504", photo: "/images/staff/abdullah-khan.jpg", status: "Active" },
  { id: "STK-0D7C47", name: "Bilal Hussain", designation: "Customer Support Executive", department: "Customer Support Team", office: "Islamabad", email: "bilal.hussain@stockifyy.com", phone: "+92 301 1234502", photo: "https://i.pravatar.cc/300?img=2", status: "Active" },
  { id: "STK-BCF84A", name: "Sara Khan", designation: "Media Executive", department: "Media Team", office: "Islamabad", email: "sara.khan@stockifyy.com", phone: "+92 302 1234503", photo: "https://i.pravatar.cc/300?img=3", status: "Active" },
  { id: "STK-4D4025", name: "Usman Tariq", designation: "Finance Executive", department: "Finance & Accounts Team", office: "Islamabad", email: "usman.tariq@stockifyy.com", phone: "+92 303 1234504", photo: "https://i.pravatar.cc/300?img=4", status: "Active" },
  { id: "STK-8DD181", name: "Ayesha Malik", designation: "Technical Analyst", department: "Technical Analysts Team", office: "Islamabad", email: "ayesha.malik@stockifyy.com", phone: "+92 304 1234505", photo: "https://i.pravatar.cc/300?img=5", status: "Active" },
  { id: "STK-722112", name: "Fahad Siddiqui", designation: "Graphic Designer", department: "Graphic Design Team", office: "Islamabad", email: "fahad.siddiqui@stockifyy.com", phone: "+92 305 1234506", photo: "https://i.pravatar.cc/300?img=6", status: "Active" },
  { id: "STK-F144A3", name: "Zainab Farooq", designation: "IT Support Officer", department: "IT Team", office: "Islamabad", email: "zainab.farooq@stockifyy.com", phone: "+92 306 1234507", photo: "https://i.pravatar.cc/300?img=7", status: "Active" },
  { id: "STK-D6B368", name: "Hamza Sheikh", designation: "Customer Support Officer", department: "Customer Support Team", office: "Islamabad", email: "hamza.sheikh@stockifyy.com", phone: "+92 307 1234508", photo: "https://i.pravatar.cc/300?img=8", status: "Active" },
  { id: "STK-3FEAB4", name: "Nida Aslam", designation: "Content Creator", department: "Media Team", office: "Islamabad", email: "nida.aslam@stockifyy.com", phone: "+92 308 1234509", photo: "https://i.pravatar.cc/300?img=9", status: "Active" },
  { id: "STK-390E6E", name: "Waqas Ahmed", designation: "Accounts Officer", department: "Finance & Accounts Team", office: "Islamabad", email: "waqas.ahmed@stockifyy.com", phone: "+92 309 1234510", photo: "https://i.pravatar.cc/300?img=10", status: "Active" },
  { id: "STK-551E6A", name: "Mehwish Iqbal", designation: "Senior Technical Analyst", department: "Technical Analysts Team", office: "Islamabad", email: "mehwish.iqbal@stockifyy.com", phone: "+92 310 1234511", photo: "https://i.pravatar.cc/300?img=11", status: "Active" },
  { id: "STK-0C2C8C", name: "Tariq Mahmood", designation: "Senior Graphic Designer", department: "Graphic Design Team", office: "Islamabad", email: "tariq.mahmood@stockifyy.com", phone: "+92 311 1234512", photo: "https://i.pravatar.cc/300?img=12", status: "Active" },
  { id: "STK-344996", name: "Sana Yousaf", designation: "IT Executive", department: "IT Team", office: "Islamabad", email: "sana.yousaf@stockifyy.com", phone: "+92 312 1234513", photo: "https://i.pravatar.cc/300?img=13", status: "Active" },
  { id: "STK-12A6D6", name: "Adeel Chaudhry", designation: "Customer Support Executive", department: "Customer Support Team", office: "Islamabad", email: "adeel.chaudhry@stockifyy.com", phone: "+92 313 1234514", photo: "https://i.pravatar.cc/300?img=14", status: "Active" },
  { id: "STK-8ED3A8", name: "Rabia Naveed", designation: "Media Executive", department: "Media Team", office: "Islamabad", email: "rabia.naveed@stockifyy.com", phone: "+92 314 1234515", photo: "https://i.pravatar.cc/300?img=15", status: "Active" },

  // ── Karachi Office (18) ──
  { id: "STK-6A0EF8", name: "Hassan Ali", designation: "Finance Executive", department: "Finance & Accounts Team", office: "Karachi", email: "hassan.ali@stockifyy.com", phone: "+92 315 7654301", photo: "https://i.pravatar.cc/300?img=16", status: "Active" },
  { id: "STK-7C625D", name: "Kiran Baig", designation: "Technical Analyst", department: "Technical Analysts Team", office: "Karachi", email: "kiran.baig@stockifyy.com", phone: "+92 316 7654302", photo: "https://i.pravatar.cc/300?img=17", status: "Active" },
  { id: "STK-7B1094", name: "Salman Qureshi", designation: "Graphic Designer", department: "Graphic Design Team", office: "Karachi", email: "salman.qureshi@stockifyy.com", phone: "+92 317 7654303", photo: "https://i.pravatar.cc/300?img=18", status: "Active" },
  { id: "STK-67370C", name: "Ayesha Siddiqa", designation: "IT Support Officer", department: "IT Team", office: "Karachi", email: "ayesha.siddiqa@stockifyy.com", phone: "+92 318 7654304", photo: "https://i.pravatar.cc/300?img=19", status: "Active" },
  { id: "STK-4E1683", name: "Junaid Akhtar", designation: "Customer Support Executive", department: "Customer Support Team", office: "Karachi", email: "junaid.akhtar@stockifyy.com", phone: "+92 319 7654305", photo: "https://i.pravatar.cc/300?img=20", status: "Active" },
  { id: "STK-B4764D", name: "Farah Deeba", designation: "Media Executive", department: "Media Team", office: "Karachi", email: "farah.deeba@stockifyy.com", phone: "+92 320 7654306", photo: "https://i.pravatar.cc/300?img=21", status: "Active" },
  { id: "STK-F67505", name: "Imran Shahid", designation: "Accounts Officer", department: "Finance & Accounts Team", office: "Karachi", email: "imran.shahid@stockifyy.com", phone: "+92 321 7654307", photo: "https://i.pravatar.cc/300?img=22", status: "Active" },
  { id: "STK-5B90AB", name: "Nabeela Sattar", designation: "Technical Analyst", department: "Technical Analysts Team", office: "Karachi", email: "nabeela.sattar@stockifyy.com", phone: "+92 322 7654308", photo: "https://i.pravatar.cc/300?img=23", status: "Active" },
  { id: "STK-C468CD", name: "Faisal Rasheed", designation: "Graphic Designer", department: "Graphic Design Team", office: "Karachi", email: "faisal.rasheed@stockifyy.com", phone: "+92 323 7654309", photo: "https://i.pravatar.cc/300?img=24", status: "Active" },
  { id: "STK-8FCC57", name: "Amna Bashir", designation: "IT Executive", department: "IT Team", office: "Karachi", email: "amna.bashir@stockifyy.com", phone: "+92 324 7654310", photo: "https://i.pravatar.cc/300?img=25", status: "Active" },
  { id: "STK-7D9786", name: "Danish Zafar", designation: "Customer Support Officer", department: "Customer Support Team", office: "Karachi", email: "danish.zafar@stockifyy.com", phone: "+92 325 7654311", photo: "https://i.pravatar.cc/300?img=26", status: "Active" },
  { id: "STK-F34FF4", name: "Sidra Kamal", designation: "Content Creator", department: "Media Team", office: "Karachi", email: "sidra.kamal@stockifyy.com", phone: "+92 326 7654312", photo: "https://i.pravatar.cc/300?img=27", status: "Active" },
  { id: "STK-498566", name: "Owais Ansari", designation: "Finance Executive", department: "Finance & Accounts Team", office: "Karachi", email: "owais.ansari@stockifyy.com", phone: "+92 327 7654313", photo: "https://i.pravatar.cc/300?img=28", status: "Active" },
  { id: "STK-A9BBDF", name: "Maryam Sultan", designation: "Senior Technical Analyst", department: "Technical Analysts Team", office: "Karachi", email: "maryam.sultan@stockifyy.com", phone: "+92 328 7654314", photo: "https://i.pravatar.cc/300?img=29", status: "Active" },
  { id: "STK-B08B22", name: "Talha Nadeem", designation: "Graphic Designer", department: "Graphic Design Team", office: "Karachi", email: "talha.nadeem@stockifyy.com", phone: "+92 329 7654315", photo: "https://i.pravatar.cc/300?img=30", status: "Active" },
  { id: "STK-32EF73", name: "Zara Hashmi", designation: "IT Executive", department: "IT Team", office: "Karachi", email: "zara.hashmi@stockifyy.com", phone: "+92 330 7654316", photo: "https://i.pravatar.cc/300?img=31", status: "Active" },
  { id: "STK-67F620", name: "Kashif Nawaz", designation: "Customer Support Executive", department: "Customer Support Team", office: "Karachi", email: "kashif.nawaz@stockifyy.com", phone: "+92 331 7654317", photo: "https://i.pravatar.cc/300?img=32", status: "Active" },
  { id: "STK-09C345", name: "Iqra Perveen", designation: "Media Executive", department: "Media Team", office: "Karachi", email: "iqra.perveen@stockifyy.com", phone: "+92 332 7654318", photo: "https://i.pravatar.cc/300?img=33", status: "Active" },
];

/** Only returns a match for staff whose card is currently Active. */
export function getStaffById(id: string): StaffMember | undefined {
  return staffMembers.find(
    (s) => s.id.toLowerCase() === id.toLowerCase() && s.status === "Active"
  );
}
