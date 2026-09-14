import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LocaleLayout from "./layouts/LocaleLayout";
import HomePage from "./pages/HomePage";
import VisitPage from "./pages/VisitPage";
import SermonsPage from "./pages/SermonsPage";
import GroupsPage from "./pages/GroupsPage";
import VisionPage from "./pages/VisionPage";
import GivePage from "./pages/GivePage";
import InformationPage from "./pages/InformationPage";
import LoginPage from "./pages/LoginPage";
import FriendsFamilyPage from "./pages/FriendsFamilyPage";
import EventsPage from "./pages/EventsPage";
import MinistryPage from "./pages/MinistryPage";
import ResourcesPage from "./pages/ResourcesPage";
import WorshipPage from "./pages/WorshipPage";

function LocaleRoutes({ locale }) {
  return (
    <Route path={locale} element={<LocaleLayout locale={locale} />}>
      <Route index element={<HomePage />} />
      <Route path={locale === "es" ? "visita" : "visit"} element={<VisitPage />} />
      <Route path={locale === "es" ? "sermones" : "sermons"} element={<SermonsPage />} />
      <Route path={locale === "es" ? "grupos" : "groups"} element={<GroupsPage />} />
      <Route path="vision" element={<VisionPage />} />
      <Route path={locale === "es" ? "ofrendar" : "give"} element={<GivePage />} />
      <Route
        path={locale === "es" ? "informacion" : "information"}
        element={<InformationPage />}
      />
      <Route path="login" element={<LoginPage />} />
      <Route path="friends-family" element={<FriendsFamilyPage />} />
      <Route
        path={locale === "es" ? "eventos" : "events"}
        element={<EventsPage />}
      />
      <Route path={locale === "es" ? "ministerio" : "ministry"} element={<MinistryPage />} />
      <Route path={locale === "es" ? "recursos" : "resources"} element={<ResourcesPage />} />
      <Route path={locale === "es" ? "adoracion" : "worship"} element={<WorshipPage />} />
      <Route path="*" element={<Navigate to={`/${locale}`} replace />} />
    </Route>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/es" replace />} />
        {LocaleRoutes({ locale: "es" })}
        {LocaleRoutes({ locale: "en" })}
        <Route path="*" element={<Navigate to="/es" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
