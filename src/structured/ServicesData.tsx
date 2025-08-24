export function ServicesStructuredData() {
  const servicesData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Веб-разработка",
    provider: {
      "@type": "Person",
      name: "Emka",
    },
    description: "Создание сайтов и веб-приложений на современных технологиях",
    offers: {
      "@type": "Offer",
      description: "Разработка под ключ",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesData) }}
    />
  );
}
