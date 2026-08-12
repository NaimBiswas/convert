import type { Metadata } from "next";
import NotFoundPage from "@/components/ui/page-not-found";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function RootNotFound() {
  return <NotFoundPage />;
}