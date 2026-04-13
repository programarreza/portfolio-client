import { Fira_Code as FontMono, Space_Grotesk as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
