import React from "react";
import { Collapse, Divider } from "antd";
import { useTranslation } from "react-i18next";
import "../contexts/i18n"

const About = () => {
  const { t } = useTranslation();

  const hardCollapsedItems = [
    {
      key: "1",
      label: <h3 className="font-medium dark:text-white">Design UI/UX</h3>,
      children: (
        <ul className="about-custom">
          <li>{t("logos")}</li>
          <li>{t("interfaces")}</li>
          <li>{t("responsive")}</li>
        </ul>
      ),
    },
    {
      key: "2",
      label: (
        <h3 className="font-medium dark:text-white">{t("front")}</h3>
      ),
      children: (
        <ul className="about-custom">
          <li>{t("darkm")}</li>
          <li>{t("api")}</li>
          <li>{t("authen")}</li>
          <li>{t("cs")}</li>
          <li>{t("errors")}</li>
          <li>{t("comp")}</li>
          <li>{t("rout")}</li>
          <li>{t("seo")}</li>
          <li>{t("notf")}</li>
          <li>{t("versioning")}</li>
          <li>{t("vecto")}</li>
          <li>{t("translat")}</li>
        </ul>
      ),
    },
    {
      key: "3",
      label: <h3 className="font-medium dark:text-white">{t("apiTitle")}</h3>,
      children: (
        <ul className="about-custom">
          <li>REST</li>
          <li>{t("postman")}</li>
          <li>Flowcharts</li>
        </ul>
      ),
    },
    {
      key: "4",
      label: (
        <h3 className="font-medium dark:text-white">{t("back")}</h3>
      ),
      children: (
        <ul className="about-custom">
          <li>{t("authen")}</li>
          <li>{t("errors")}</li>
          <li>{t("thAPI")}</li>
          <li>{t("notifiq")}</li>
          <li>{t("admin")}</li>
        </ul>
      ),
    },
  ];

  const softCollapsedItems = [
    {
      key: "1",
      label: <h3 className="font-medium dark:text-white">{t("adaptTitle")}</h3>,
      children: (
        <p className="about-custom">
          {t("adaptSub")}
        </p>
      ),
    },
    {
      key: "2",
      label: <h3 className="font-medium dark:text-white">{t("learningTitle")}</h3>,
      children: (
        <p className="about-custom">
          {t("learningSub")}
        </p>
      ),
    },
    {
      key: "3",
      label: (
        <h3 className="font-medium dark:text-white">{t("attentionTitle")}</h3>
      ),
      children: (
        <p className="about-custom">
          {t("attentionSub")}
        </p>
      ),
    },
    {
      key: "4",
      label: <h3 className="font-medium dark:text-white">{t("problTitle")}</h3>,
      children: (
        <p className="about-custom">
          {t("problSub")}
        </p>
      ),
    },
    {
      key: "5",
      label: (
        <h3 className="font-medium dark:text-white">
          {t("teamTitle")}
        </h3>
      ),
      children: (
        <p className="about-custom">
          {t("teamSub")}
        </p>
      ),
    },
    {
      key: "6",
      label: (
        <h3 className="font-medium dark:text-white">{t("commTitle")}</h3>
      ),
      children: (
        <p className="about-custom">
          {t("commSub")}
        </p>
      ),
    },
  ];

  return (
    <section className="section-custom scroll-mt-24" id="about">
      <h2 className="font-cal text-4xl">{t("aboutTitle")}</h2>
      <div className="flex w-full max-w-[600px] flex-col">
        <Divider style={{ borderColor: "#026b06" }} orientation="left">
          <p className=" flex text-[20px] w-full items-center gap-2 dark:text-white font-roboto">
            {t("hard")}
          </p>
        </Divider>
        <Collapse
          className="custom-collapse"
          ghost
          items={hardCollapsedItems}
        ></Collapse>
        <Divider style={{ borderColor: "#026b06" }} orientation="left">
          <p className=" flex text-[20px] w-full items-center gap-2 dark:text-white font-roboto">
            {t("soft")}
          </p>
        </Divider>
        <Collapse
          className="custom-collapse"
          ghost
          items={softCollapsedItems}
        ></Collapse>
      </div>
    </section>
  );
};

export default About;
