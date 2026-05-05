import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Contributor Payroll Calculator",
  description: "Calculate fair compensation for open source contributors. Analyze GitHub contributions and suggest payment amounts based on impact, complexity, and market rates."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f6b224f9-5c72-4f0b-84e1-121d1ba48b2b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
