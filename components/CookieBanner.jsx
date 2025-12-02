"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

export default function CookieBanner() {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("essential_cookies");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("essential_cookies", "true", { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      width: "100%",
      background: "rgba(0, 0, 0, 0.64)",
      color: "white",
      padding: "1rem",
      textAlign: "center",
      zIndex: 1000,
    }}>
      <span>{t("cookies.message")}</span>
      <button
        onClick={acceptCookies}
        style={{
          marginLeft: "1rem",
          padding: "0.5rem 1rem",
          background: "#4e503b",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {t("cookies.accept")}
      </button>
    </div>
  );
}
