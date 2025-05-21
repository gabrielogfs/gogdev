import {
  ContactsOutlined,
  LinkedinFilled,
  GithubFilled,
  DownloadOutlined,
  CodeOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import "../contexts/i18n";

import gog_photo from "../assets/gog_photo.jpeg";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home">
      <header className="flex min-h-screen items-center justify-evenly dark:bg-[rgb(24,24,27)] gap-5 flex-col-reverse lg:flex-row">
        <div className="flex dark:bg-[rgb(24,24,27)] flex-col">
          <h1 className="transition-discrete text-5xl mb-1 dark:text-zinc-100 text-black text-center font-cal">
            Gabriel Oliveira Gomes
          </h1>
          <p className="text-center text-2xl font-light dark:text-zinc-100 text-black mb-8">
            {t("function")}
          </p>
          <div className="relative flex transition-discrete items-center gap-2">
            <div className="absolute h-2 w-2 animate-ping rounded-full bg-green-500"></div>
            <div className="h-2 w-2 rounded-full bg-[#0a9753]"></div>
            <p className="font-text font-semibold text-green-500">Avaiable</p>
          </div>
          <div className="max-w-[450px] dark:text-zinc-100 text-black transition-discrete text-justify font-roboto ">
            {t("intro")}
          </div>
          <div className="my-3 flex flex-wrap mt-5 justify-center gap-10">
            <a
              href="/gogdev.vcf"
              download="Gabriel-Gomes.vcf"
              className="flex dark:text-white font-light text-black items-center pl-0.5 gap-1 cursor-pointer hover:bg-[#0a9753] hover:text-white rounded-l-2xl w-[80px]"
            >
              <p className="px-1 font-roboto">{t("contactTitle")}</p>
              <div className="bg-[#0a9753] px-1 text-zinc-100">
                <ContactsOutlined></ContactsOutlined>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/gomesdev-/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex dark:text-zinc-100 font-light text-black items-center pl-0.5 gap-1 cursor-pointer hover:bg-blue-500 hover:text-white rounded-l-2xl w-[80px]"
            >
              <p className="px-1 font-roboto">LinkedIn</p>
              <div className="bg-blue-500 px-1 text-zinc-100">
                <LinkedinFilled />
              </div>
            </a>
            <a
              href="https://github.com/gabrielogfs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex dark:text-zinc-100 font-light text-black items-center pl-0.5 gap-1 cursor-pointer hover:bg-black hover:text-white rounded-l-2xl w-[80px]"
            >
              <p className="px-1 font-roboto">GitHub</p>
              <div className="bg-black px-1 text-zinc-100">
                <GithubFilled />
              </div>
            </a>
          </div>
          <div className="my-3 flex flex-wrap mt-5 justify-center gap-5">
            <a
              href="#portfolio"
              className="flex items-center justify-center gap-2 text-white font-medium cursor-pointer bg-[#0a9753] hover:bg-green-900 hover:text-gray-300 rounded-md px-6 py-2"
            >
              <CodeOutlined className="text-xl" />
              <span>Portfolio</span>
            </a>
            <a
              download="GabrieloGomes_Lebenslauf.pdf"
              href="/Gomes_Gabriel_Lebenslauf.pdf"
              className="flex dark:text-zinc-300 dark:bg-[rgb(24,24,27)] items-center ease-in-out justify-center gap-2 text-[#0a9753] font-medium cursor-pointer bg-white border border-[#0a9753] hover:bg-green-900 hover:text-white rounded-md px-6 py-2"
            >
              <DownloadOutlined className="text-xl" />
              <span>{t("resume")}</span>
            </a>
          </div>
        </div>
        <div className="mt-20">
        <img
          src={gog_photo}
          alt="Gabriel Oliveira Gomes"
          className="h-[400px] w-[400px] transition-discrete rounded-full object-cover shadow-lg"
        ></img>
        </div>
      </header>
    </section>
  );
};

export default Home;
