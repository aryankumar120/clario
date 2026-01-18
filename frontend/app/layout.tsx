import "./globals.css";
import type { Metadata } from "next";
import { Shell } from "@/components/layout/shell";

export const metadata: Metadata = {
  title: "Clario",
  description: "Real-time operational insights with explainable AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
