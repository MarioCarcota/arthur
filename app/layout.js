import "/styles/global.css";

export const metadata = {
  title: "Arthur | Transform space into an engaging adventure. ",
  description:
    "Arthur is your personal virtual buddy, crafted to make every moment of your mission more engaging, productive, and connected to Earth.",
  openGraph: {
    title: "Arthur | Transform space into an engaging adventure.",
    description:
      "Arthur is your personal virtual buddy, crafted to make every moment of your mission more engaging, productive, and connected to Earth.",
    url: "https://app.usearthur.co/",
    siteName: "usearthur",
    images: [
      {
        url: "https://app.usearthur.co/images/ArthurNasa.png",
        width: 1200,
        height: 630,
        alt: "Arthur | Transform space into an engaging adventure.",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur | Transform space into an engaging adventure.",
    description:
      "Arthur is your personal virtual buddy, crafted to make every moment of your mission more engaging, productive, and connected to Earth.",
    images: ["https://app.usearthur.co/images/ArthurNasa.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
