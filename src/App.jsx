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
import CookieConsent from "./components/CookieConsent";

function App() {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent) {
      setConsentGiven(true);
    }
  }, []);

  useEffect(() => {
    if (!consentGiven) return;

    const scriptId = "recaptcha-v3-script";

    if (document.getElementById(scriptId)) return;

    const script1 = document.createElement("script");
    script1.id = scriptId;
    script1.src = `https://www.google.com/recaptcha/api.js?render=${
      import.meta.env.VITE_RECAPTCHA_SITE_KEY
    }`;
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${import.meta.env.VITE_GOOGLE_TAG_ID}')
      `;
    document.body.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    }
  }, [consentGiven]);

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
        {!consentGiven && <CookieConsent onAccept={() => setConsentGiven(true)} />}
      </div>
    </ThemeProvider>
  );
}
export default App;
