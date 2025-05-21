import { useTranslation } from "react-i18next";
import "../contexts/i18n";

const Nav = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center pb-5">
      <h2>{t("rights")}</h2>
    </div>
  );
};

export default Nav;
