import "./App.css";
import { ThemeProvider } from "./contexts/themeContext";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

import "./contexts/i18n";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const googleTagId = import.meta.env.VITE_GOOGLE_TAG_ID;
    const scriptId = "recaptcha-v3-script";
    const script3Id = "usercentrics-cmp";

    if (document.getElementById(scriptId)) return;
    if (document.getElementById("google-tag-script")) return;

    const script1 = document.createElement("script");
    script1.id = scriptId;
    script1.src = `https://www.google.com/recaptcha/api.js?render=${
      import.meta.env.VITE_RECAPTCHA_SITE_KEY
    }`;
    script1.async = true;
    document.body.appendChild(script1);

    const gtagScript = document.createElement("script");
    gtagScript.id = "google-tag-script";
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${googleTagId}`;
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${googleTagId}');
    `;
    document.head.appendChild(inlineScript);

    const script3 = document.createElement("script");
    script3.id = script3Id;
    script3.src = "https://app.usercentrics.eu/browser-ui/latest/loader.js";
    script3.setAttribute(
      "data-settings-id",
      import.meta.env.VITE_USER_CENTRICS_ID
    );
    script3.async = true;
    document.head.appendChild(script3);

    return () => {
      const existingScript1 = document.getElementById(scriptId);
      if (existingScript1) {
        existingScript1.remove();
      }
      const existingScript2 = document.getElementById(script3Id);
      if (existingScript2) {
        existingScript2.remove();
      }
      const existingGtagScript = document.getElementById("google-tag-script");
      if (existingGtagScript) {
        existingGtagScript.remove();
      }
      const inlineScript = document.querySelector(
        "script#google-tag-script + script"
      );
      if (inlineScript) {
        inlineScript.remove();
      }
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="App overflow-x-hidden w-full max-w-full">
        <Nav />
        <main className="flex flex-col gap-20 bg-zinc-100 p-4 dark:bg-zinc-900">
          <Home />
          <About />
          <Portfolio />
          <Technologies />
          <Contact />
          <ToastContainer />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
export default App;
