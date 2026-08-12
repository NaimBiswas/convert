import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LinkInterceptor from "@/components/LinkInterceptor";
import ScriptLoader from "@/components/ScriptLoader";

export const metadata: Metadata = {
  metadataBase: new URL("https://metadataconverter.com"),
  icons: {
    icon: "/images/icons/favicon.png",
    shortcut: "/images/icons/favicon.png",
    apple: "/images/icons/favicon.png",
  },
  manifest: "/manifest.json",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1E1C18",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();",
          }}
        />
        <meta
          name="7312be417be827254e839cdf846a35e91dff6528"
          content="7312be417be827254e839cdf846a35e91dff6528"
        />
        {/* google adsense */}
        <meta
          name="google-adsense-account"
          content="ca-pub-5712552452630675"
        />

        {/* fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;450;500;550;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <amp-auto-ads
          type="adsense"
          data-ad-client="ca-pub-5712552452630675"
        ></amp-auto-ads>
        <ScriptLoader />
        <LinkInterceptor />
        {children}
      </body>
    </html>
  );
}
