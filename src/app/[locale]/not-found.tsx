import type { Metadata } from "next";
import LocaleNotFoundClient from "@/components/LocaleNotFoundClient";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function LocaleNotFound() {
  return <LocaleNotFoundClient />;
}