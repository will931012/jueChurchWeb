import { Helmet } from "react-helmet-async";
import { getLocalizedPath } from "../content/siteContent";

const siteUrl = import.meta.env.VITE_SITE_URL || "https://jesuschristonlyhope.org";

function trimDescription(text = "") {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= 160) {
    return normalized;
  }

  return `${normalized.slice(0, 157).trim()}...`;
}

function buildSeoData(locale, currentPageKey, content) {
  const isHome = currentPageKey === "home";
  const baseTitle = content.siteName;
  const pageSource = isHome ? content.home : content.pages[currentPageKey];
  const title = isHome ? baseTitle : `${pageSource.title} | ${baseTitle}`;
  const description = trimDescription(
    isHome ? content.home.heroText : pageSource.body
  );

  return {
    title,
    description
  };
}

function Seo({ locale, currentPageKey, content }) {
  const seo = buildSeoData(locale, currentPageKey, content);
  const canonical = `${siteUrl}${getLocalizedPath(locale, currentPageKey)}`;
  const alternateEs = `${siteUrl}${getLocalizedPath("es", currentPageKey)}`;
  const alternateEn = `${siteUrl}${getLocalizedPath("en", currentPageKey)}`;
  const ogLocale = locale === "es" ? "es_US" : "en_US";
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: content.siteName,
    alternateName: locale === "es" ? "Jesus Christ Only Hope" : "Jesucristo Unica Esperanza",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "12415 SW 136 Ave",
      addressLocality: "Miami",
      addressRegion: "FL",
      addressCountry: "US"
    }
  };

  return (
    <Helmet>
      <html lang={locale} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content="index,follow,max-image-preview:large" />
      <meta name="theme-color" content="#000000" />

      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="es" href={alternateEs} />
      <link rel="alternate" hrefLang="en" href={alternateEn} />
      <link rel="alternate" hrefLang="x-default" href={alternateEs} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={content.siteName} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={ogLocale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
}

export default Seo;
