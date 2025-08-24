import type { Metadata } from "next";
import "./globals.scss";
import Prarticles from "@/components/Particles";
import { URL } from "@/URL/url";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Emka Dark | Создание сайтов",
  description:
    "Fullstack разработчик с 2020 года. Создаю современные сайты, веб-приложения и интернет-магазины на Next.js и Nest.js. Готов к фриланс-проектам и сотрудничеству.",
  icons: {
    icon: "/favi.ico",
  },
  keywords:
    "fullstack разработчик, создание сайтов, веб-приложения, next.js, nest.js, react, typescript, фриланс, программист, заказать сайт, верстка, программирование, ",
  authors: [{ name: "Emka" }],
  creator: "Emka",
  publisher: "Emka",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: URL,
    siteName: "Emka - Fullstack разработчик",
    title: "Emka - Fullstack разработчик | Создание сайтов и веб-приложений",
    description:
      "Fullstack разработчик. Создаю современные сайты и веб-приложения на Next.js и Nest.js.",
    images: [
      {
        url: "/ED.jpg",
        width: 66,
        height: 66,
        alt: "Emka - Fullstack разработчик",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

declare global {
  interface Window {
    ym?: (counterId: number, event: string, ...args: any[]) => void;
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const yandexId = 12345678; // Замени на свой ID

  return (
    <html lang="ru">
      <head>
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              
              ym(${yandexId}, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true,
                defer: true
              });
            `,
          }}
        />
      </head>
      <body>
        {children}
        <noscript>
          <div>
            <img
              src={`https://mc.yandex.ru/watch/${yandexId}`}
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
