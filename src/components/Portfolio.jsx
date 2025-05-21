import React from "react";
import { Collapse } from "antd";
import { DesktopOutlined, ReadOutlined } from "@ant-design/icons";
import "../contexts/i18n"
import { useTranslation } from "react-i18next";

const Portfolio = () => {

  const { t } = useTranslation();

  const portfolioP = [
    {
      key: "1",
      label: (
        <h3 className="dark:text-white font-medium text-[24px] font-roboto">Jungen</h3>
      ),
      children: (
        <div className="flex gap-3 flex-wrap pl-5 border-l-[3px] ml-[8px] border-red-500 dark:text-white">
          <p>
            {t("jungen")}
          </p>
          <div className="flex flex-wrap my-4  gap-5 justify-center w-full">
            <div className="flex flex-col w-full gap-4 justify-center">
              <h2 className="font-medium justify-center flex ">{t("technolo")}</h2>
              <ul className=" flex flex-wrap justify-center gap-3">
                <li className="py-[1.5px] rounded-md px-2 border-1 border-red-600">
                  Javascript
                </li>
                <li className="py-[1.5px] rounded-md px-2 border-1 border-red-600">
                  React
                </li>
                <li className="py-[1.5px] rounded-md px-2 border-1 border-red-600">
                  Vite
                </li>
                <li className="py-[1.5px] rounded-md px-2 border-1 border-red-600">
                  Tailwind CSS
                </li>
                <li className="py-[1.5px] rounded-md px-2 border-1 border-red-600">
                  ESLint
                </li>
                <li className="py-[1.5px] rounded-md px-2 border-1 border-red-600">
                  Pnpm
                </li>
                <li className="py-[1.5px] rounded-md px-2 border-1 border-red-600">
                  Firebase
                </li>
                <li className="py-[1.5px] rounded-md px-2 border-1 border-red-600">
                  React Toastfy
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex justify-center gap-5 ">
            <div className="rounded-md flex justify-center border-2 border-red-500 font-medium text-black dark:  dark:bg-[rgb(24,24,27)] px-2 py-1">
              <a
                href="https://jungen.vercel.app/"
                className="animate-pulse duration-100"
              >
                <div className="text-red-500 dark:text-zinc-300 flex gap-2">
                  <span>
                    <DesktopOutlined />
                  </span>
                  <span>{t("seeLive")}</span>
                </div>
              </a>
            </div>
            <div className="rounded-md flex justify-center gap-2 font-medium text-black border-2 border-red-500 dark:text-zinc-300 dark:bg-[rgb(24,24,27)] px-3 w-[150px] py-1">
              <div className="text-black flex gap-2">
                <a href="https://github.com/gabrielogfs/Jungen/blob/master/README.md">
                  <div className=" text-red-500 dark:text-zinc-300 flex gap-2">
                    <span>
                      <ReadOutlined />
                    </span>
                    <span>{t("documentation")}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: <h3 className="dark:text-white font-medium text-[24px] font-roboto">Javabank</h3>,
      children: (
        <div className="flex gap-3 flex-wrap pl-5 border-l-[3px] ml-[8px] border-[#ffc107] dark:text-white">
          <p>
            {t("javabank")}
          </p>
          <div className="flex flex-wrap my-4 gap-5 justify-center w-full">
            <div className="flex flex-col w-full gap-4 justify-center">
              <h2 className="font-medium flex justify-center ">{t("technolo")}</h2>
              <ul className=" flex flex-wrap justify-center gap-3">
                <li className="py-[1.5px] rounded-md px-2 border-1 border-[#ffc107]">
                  HTML5
                </li>
                <li className="py-[1.5px] rounded-md px-2 border-1 border-[#ffc107]">
                  CSS3
                </li>
                <li className="py-[1.5px] rounded-md px-2 border-1 border-[#ffc107]">
                  Vite
                </li>
                <li className="py-[1.5px] rounded-md px-2 border-1 border-[#ffc107]">
                  Vanilla JS
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex justify-center gap-5 ">
            <div className="rounded-md flex justify-center bg-[#ffc107] font-medium text-black dark:border-2 dark:border-[#ffc107] dark:text-zinc-300 dark:bg-[rgb(24,24,27)] px-2 py-1">
              <a
                href="https://gabrielogfs.github.io/Javabank/"
                className="text-black dark:bg-[rgb(24,24,27)] no-underline hover:no-underline  animate-pulse duration-200"
              >
                <div className="text-black dark:text-zinc-300 flex gap-2">
                  <span>
                    <DesktopOutlined />
                  </span>
                  <span>{t("seeLive")}</span>
                </div>
              </a>
            </div>
            <div className="rounded-md flex justify-center gap-2 bg-[#ffc107] font-medium text-black dark:border-2 dark:border-[#ffc107] dark:text-zinc-300 dark:bg-[rgb(24,24,27)] px-3 w-[150px] py-1">
              <div className="text-black flex gap-2">
                <a href="https://github.com/gabrielogfs/Javabank/blob/main/README.md">
                  <div className="text-black dark:text-zinc-300 flex gap-2">
                    <span>
                      <ReadOutlined />
                    </span>
                    <span>{t("documentation")}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      className="section-custom scroll-mt-32"
      id="portfolio"
    >
      <h2 className="font-cal text-4xl">Portfolio</h2>
      <div className="flex w-full max-w-[600px] flex-col">
        <Collapse
          className="custom-collapse-black"
          accordion
          ghost
          items={portfolioP}
        ></Collapse>
      </div>
    </section>
  );
};

export default Portfolio;
