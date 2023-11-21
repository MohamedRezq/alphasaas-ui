import "./globals.css";
import { Quicksand } from "next/font/google";
// import { ThemeProvider } from "next-themes";

const font = Quicksand({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} w-full h-full`}>{children}</body>
    </html>
  );
}
