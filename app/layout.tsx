import "./globals.css";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopcart",
  description: "Ecommer Template 2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
