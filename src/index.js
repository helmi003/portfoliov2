import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Loading from "./components/Loading/Loading";
import App from "./App";
import "./styles/index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const root = ReactDOM.createRoot(document.getElementById("root"));

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "fr"],
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

const loadingMarkup = <Loading />;

root.render(
  <Suspense fallback={loadingMarkup}>
    <Router>
      <App />
    </Router>
  </Suspense>
);
