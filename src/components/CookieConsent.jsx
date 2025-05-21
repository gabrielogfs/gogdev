import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../contexts/i18n";

const CookieConsent = ({ onAccept }) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
    onAccept();
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex flex-col md:flex-row md:gap-[150px] gap-2  items-center z-50">
      <p className="text-sm max-w-xl">
        {t("consentText")}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {t("consentData")}
        </a>
        {t("consentCompl")}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {t("consentTerms")}
        </a>
        {t("consentCompl2")}
      </p>
      <div className="flex gap-2 md:gap-5 mr-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={acceptCookies}
        >
          {t("accept")}
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
