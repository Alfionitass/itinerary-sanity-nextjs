import "@/app/globals.css";
import { SanityLive } from "@/sanity/live";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <SanityLive />
    </html>
  );
}