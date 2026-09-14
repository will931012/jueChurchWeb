import { Outlet, useLocation, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Seo from "../components/Seo";
import { routeKeyByLocaleSlug, siteContent } from "../content/siteContent";

function LocaleLayout({ locale }) {
  const location = useLocation();
  const content = siteContent[locale];

  if (!content) {
    return <Navigate to="/es" replace />;
  }

  const cleanPath = location.pathname.replace(/\/+$/, "") || `/${locale}`;
  const prefix = `/${locale}`;
  const slug = cleanPath.startsWith(prefix) ? cleanPath.slice(prefix.length).replace(/^\//, "") : "";
  const currentPageKey = routeKeyByLocaleSlug[locale][slug];

  if (typeof currentPageKey === "undefined") {
    return <Navigate to={`/${locale}`} replace />;
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Seo locale={locale} currentPageKey={currentPageKey} content={content} />
      <Header locale={locale} currentPageKey={currentPageKey} content={content} />
      <Outlet context={{ locale, content, currentPageKey }} />
    </div>
  );
}

export default LocaleLayout;
