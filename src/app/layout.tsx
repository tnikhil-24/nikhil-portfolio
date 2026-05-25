import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nikhil T — AI Systems Engineer",
  description:
    "Full-Stack & AI Engineer. I design AI systems from the ground up — multi-agent pipelines, RAG architectures, real-time infra — and ship them faster because AI is my build partner, not just my toolbox.",
  keywords: [
    "AI Engineer",
    "Full-Stack Developer",
    "Multi-Agent Pipelines",
    "RAG",
    "Next.js",
    "LangGraph",
  ],
  authors: [{ name: "Nikhil T" }],
  openGraph: {
    title: "Nikhil T — AI Systems Engineer",
    description:
      "Full-Stack & AI Engineer specializing in multi-agent pipelines and RAG architectures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={instrumentSans.variable}>
      <body>
        <MotionProvider>
          <Nav />
          <main>{children}</main>
        </MotionProvider>
      </body>
    </html>
  );
}
