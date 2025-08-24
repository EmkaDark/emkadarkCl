export function AboutStructuredData() {
  const portfolioData = {
    "@context": "https://schema.org",
    "@type": "person",
    name: " Обо мне",
    description: "Full Stack Web Developer",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioData) }}
    />
  );
}
