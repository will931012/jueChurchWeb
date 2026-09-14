import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getLocalizedPath } from "../content/siteContent";

function Header({ locale, currentPageKey, content }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const location = useLocation();
  const altLocale = locale === "es" ? "en" : "es";
  const closeLabel = locale === "es" ? "Cerrar menú" : "Close menu";
  const menuItems = [...content.navItems, ...content.utilityLinks,
    { key: "information", label: content.ctas.information },
    { key: "login", label: content.ctas.login }];

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  const navLink = (item, compact = false) => (
    <Link key={item.key} to={getLocalizedPath(locale, item.key)}
      onClick={() => setMenuOpen(false)}
      aria-current={currentPageKey === item.key ? "page" : undefined}
      className={`${compact ? "px-3 py-2 text-sm" : "rounded-xl px-4 py-3 text-sm"} font-semibold transition-colors ${currentPageKey === item.key ? "bg-black/[0.06] text-black" : "text-black/65 hover:bg-black/[0.04] hover:text-black"}`}>
      {item.label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-white/95 backdrop-blur-xl">
      <div className="bg-[#181818] text-white">
        <div className="mx-auto flex min-h-10 max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6">
          <p className="text-[10px] font-medium tracking-wide sm:text-xs">{content.topBar.leftText}</p>
          <Link to={getLocalizedPath(altLocale, currentPageKey)} lang={altLocale}
            aria-label={locale === "es" ? "Read this page in English" : "Leer esta página en español"}
            className="inline-flex min-h-10 shrink-0 items-center gap-2 text-xs font-semibold text-white/90 transition hover:text-white">
            {content.ctas.switchLocale}<span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="mx-auto flex min-h-[88px] max-w-[1280px] items-center justify-between gap-3 px-4 sm:px-6 lg:min-h-[100px]">
        <Link to={getLocalizedPath(locale, "home")} onClick={() => setMenuOpen(false)}
          className="flex min-w-0 items-center gap-3 py-3">
          <img src="/church-logo.jpg" alt="" width="56" height="56"
            className="h-11 w-11 shrink-0 rounded-full border border-black/10 object-cover sm:h-14 sm:w-14" />
          <span className="max-w-[210px] text-sm font-extrabold uppercase leading-snug tracking-[0.04em] sm:text-base">{content.siteName}</span>
        </Link>
        <nav aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}
          className="hidden items-center gap-1 xl:flex">
          {content.navItems.map((item) => navLink(item))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link to={getLocalizedPath(locale, "visit")}
            className="hidden rounded-full bg-black px-5 py-3 text-sm font-bold text-white transition hover:bg-black/80 md:inline-flex">
            {content.home.primaryAction}
          </Link>
          <button ref={menuButton} type="button" aria-expanded={menuOpen} aria-controls="site-menu"
            aria-label={menuOpen ? closeLabel : content.ctas.menu}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-black/15 px-3 transition hover:bg-black/5 sm:px-4">
            <span className="hidden text-xs font-bold sm:inline">{menuOpen ? closeLabel : content.ctas.menu}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d={menuOpen ? "M6 6l12 12M6 18L18 6" : "M4 8h16M4 16h16"} />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="site-menu" aria-label={locale === "es" ? "Todas las páginas" : "All pages"}
          className="max-h-[calc(100dvh-140px)] overflow-y-auto border-t border-black/10 bg-white">
          <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-2 px-4 py-5 sm:grid-cols-3 sm:px-6 lg:grid-cols-4">
            {menuItems.map((item) => navLink(item))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
