import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  preload: false,
});

export const metadata = {
  title: "esstec: a creative DESIGN STUDIO supporting BRANDS to stand out in the global market",
  description: "humanity, components and status",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ibmPlexMono.className}>
        {children}
      </body>
    </html>
  );
}
