import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

// No staff ID was provided in the URL — bounce to the homepage
// instead of exposing any directory listing.
export default function StaffRootPage() {
  redirect("/");
}
