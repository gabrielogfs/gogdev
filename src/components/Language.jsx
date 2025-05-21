import React from "react";
import { Switch } from "antd";
import { useTranslation } from "react-i18next";

const Language = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = (checked) => {
    const newLang = checked ? "de" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <Switch
      onChange={toggleLanguage}
      unCheckedChildren="EN"
      checkedChildren="DE"
      className="ml-4"
      checked={i18n.language === "de"}
    />
  );
};

export default Language;
