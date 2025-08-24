"use client";

export function PersonStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Emka",
    jobTitle: "Fullstack разработчик",
    description:
      "Fullstack разработчик с 2020 года. Специализация: Next.js, Nest.js, React, TypeScript. Создаю современные сайты и веб-приложения.",
    url: "https://emka-portfolio.ru",
    image: "https://emka-portfolio.ru/og-image.jpg",
    knowsAbout: [
      "Next.js",
      "Nest.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "HTML",
      "CSS",
      "MongoDB",
      "PostgreSQL",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Фриланс",
    },
    sameAs: [
      "https:/t.me/EmkaDark",
      "https://github.com/твой_github",
      "https://linkedin.com/in/твой_linkedin",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
