import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "UIUX Mockup generator app",
  description: "Generated High Quality Free UIUX Mobile And Web Mockup",
};
const DM_Sans_Font = DM_Sans({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        DM_Sans_Font.className,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
