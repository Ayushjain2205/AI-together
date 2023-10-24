import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThirdwebWrapper from "@/components/wrappers/ThirdwebWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Good.ai",
  description: "Spreading the goodness of AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThirdwebWrapper>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThirdwebWrapper>
  );
}
