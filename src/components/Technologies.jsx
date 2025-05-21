import React from "react";
import { Divider } from "antd";
import FlipIcons from "./FlipIcons";
import { useTheme } from "../contexts/themeContext";
import javascript from "../assets/icons/javascript.svg";
import typescript from "../assets/icons/typescript.svg";
import html5 from "../assets/icons/html5.svg";
import css3 from "../assets/icons/css3.svg";
import bash from "../assets/icons/bash.svg";
import react from "../assets/icons/react.svg";
import node from "../assets/icons/node.svg";
import tailwind from "../assets/icons/tailwind.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import antdesign from "../assets/icons/antdesign.svg";
import figma from "../assets/icons/figma.svg";
import canva from "../assets/icons/canva.svg";
import vitejs from "../assets/icons/vitejs.svg";
import github from "../assets/icons/github.svg";
import githubwhite from "../assets/icons/githubwhite.svg";
import eslint from "../assets/icons/eslint.svg";
import mongodb from "../assets/icons/mongodb.svg";
import postman from "../assets/icons/postman.svg";
import firebase from "../assets/icons/firebase.svg";
import "../contexts/i18n"
import { useTranslation } from "react-i18next";

const Technologies = () => {
  const { darkMode } = useTheme();
  const { t } = useTranslation()

  return (
    <section className="section-custom scroll-mt-32" id="technologies">
      <h2 className="font-cal text-4xl">{t("technolo")}</h2>
      <div className="flex w-full max-w-[600px] flex-col">
        <Divider
          style={{ borderColor: "#026b06" }}
          className="custom-divider"
          orientation="left"
          orientationMargin="0"
        >
          <p className=" p-custom">{t("languages")}</p>
        </Divider>
        <div>
          <div>
            <div className="flex justify-center gap-5">
              <FlipIcons src={javascript} name="Javascript" />
              <FlipIcons src={typescript} name="Typescript" />
              <FlipIcons src={html5} name="HTML5" />
              <FlipIcons src={css3} name="CSS3" />
              <FlipIcons src={bash} name="Bash" />
            </div>
          </div>
        </div>
        <Divider
          style={{ borderColor: "#026b06" }}
          className="custom-divider"
          orientation="left"
          orientationMargin="0"
        >
          <p className=" p-custom">{t("frameworks")}</p>
        </Divider>
        <div>
          <div>
            <div className="flex justify-center gap-5">
              <FlipIcons src={react} name="React" />
              <FlipIcons src={node} name="Node" />
            </div>
          </div>
        </div>
        <Divider
          style={{ borderColor: "#026b06" }}
          className="custom-divider"
          orientation="left"
          orientationMargin="0"
        >
          <p className=" p-custom">{t("tools")}</p>
        </Divider>
        <div>
          <div>
            <div className="grid grid-cols-6 px-4 justify-items-center">
              <FlipIcons src={tailwind} name="Tailwind" />
              <FlipIcons src={bootstrap} name="Bootstrap" />
              <FlipIcons src={antdesign} name="Ant Design" />
              <FlipIcons src={figma} name="Figma" />
              <FlipIcons src={canva} name="Canva" />
              <FlipIcons src={vitejs} name="Vite" />
              <FlipIcons
                src={darkMode === true ? githubwhite : github}
                name="Github"
              />
              <FlipIcons src={eslint} name="esLint" />
              <FlipIcons src={firebase} name="Firebase" />
              <FlipIcons src={mongodb} name="MongoDB" />
              <FlipIcons src={postman} name="Postman" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
