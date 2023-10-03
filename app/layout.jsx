import "./globals.css";

export const metadata = {
  title: "JSM Resources",
  description:
    "A landing page for JS Mastery that include resources and links to guides.",
  other: "theme-color=#0d1117",
  "color-scheme": "dark only",
  "twitter:image": "https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg",
  "twitter:card": "summary_large_image",
  "og:url": "jsmresources24.vercel.app",
  "og:image": "https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg",
  "og:type": "website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
