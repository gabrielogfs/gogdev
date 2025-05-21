import React, { useState } from "react";
import Language from "./Language";
import DarkToggle from "./DarkToggle";
import gog_logo_light from "../assets/gog_logo_light.png";
import gog_logo_dark from "../assets/gog_logo_dark.png";
import { useTheme } from "../contexts/themeContext";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import "../contexts/i18n";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { darkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 bg-zinc-100 dark:bg-[rgb(24,24,27)] text-white shadow-md">
      <div className="flex justify-between w-full">
        <ul className="flex items-center justify-center space-x-4">
          <li>
            <a href="#home">
              <img
                src={darkMode === true ? gog_logo_dark : gog_logo_light}
                alt="Logo"
                className="h-15"
              />
            </a>
          </li>
          <li className="flex items-center space-x-4">
            <Language />
          </li>
          <li className="flex items-center space-x-4">
            <DarkToggle />
          </li>
        </ul>

        <button
          className="lg:hidden text-black dark:text-zinc-300 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      <ul
        className={`${
          isOpen
            ? "absolute top-[64px] right-0 w-full flex flex-col items-end bg-zinc-100 dark:bg-[rgb(24,24,27)] p-4 space-y-2"
            : "hidden"
        } font-cal text-black dark:text-zinc-300 lg:static lg:flex lg:flex-row lg:items-center lg:space-x-5 lg:space-y-0 lg:mt-0 lg:mr-8`}
      >
        <li>
          <a href="#about">{t("aboutTitle")}</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#technologies">{t("technolo")}</a>
        </li>
        <li>
          <a href="#contact">{t("contactTitle")}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
