import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          function: "Fullstack Web Developer",
          intro:
            "I'm a fullstack developer and technology enthusiast, always looking to grow. I'm comfortable working on both the front and back-end, and what truly drives me is learning from challenges, developing new skills, and becoming better with each project.",
          contactTitle: "Contact",
          resume: "Resume",
          logos: "Custom logos and icons",
          interfaces: "User-friendly interfaces",
          responsive: "Responsive design principles",
          front: "Front-end Development",
          darkm: "Dark mode",
          api: "API interfaces",
          authen: "Authentication and Authorization",
          cs: "CSS animations (loader, bouncer, rotate...)",
          errors: "Errors management",
          comp: "Components",
          rout: "Routing",
          seo: "SEO",
          notf: "Notifications (toast, notistak, hottoast...)",
          versioning: "Versioning",
          vecto: "Vectorization",
          translat: "Translations",
          apiTitle: "API Development",
          postman: "Postman collections",
          back: "Back-end Development",
          thAPI: "Third-party API integration",
          notfiq: "Push notifications",
          admin: "Administrator interface",
          adaptTitle: "Adaptability",
          adaptSub:
            "Ability to quickly adjust to new technologies, workflows, and environments while maintaining productivity in constantly evolving web development scenarios.",
          learningTitle: "Fast Learning",
          learningSub:
            "Strong capacity to absorb new concepts, languages, and frameworks rapidly, allowing continuous growth and alignment with industry trends.",
          attentionTitle: "Attention to Details",
          attentionSub:
            "Focused on precision and quality, ensuring clean, efficient code and minimizing bugs that could affect user experience or application performance.",
          problTitle: "Problem Solving",
          problSub:
            "Skilled at identifying issues, analyzing complex situations, and delivering practical and effective solutions during the development process.",
          teamTitle: "Teamwork and Collaboration",
          teamSub:
            "Team-oriented mindset with a collaborative approach to working with cross-functional teams toward shared goals in a respectful and productive environment.",
          commTitle: "Comunication Skills",
          commSub:
            "Clear and effective communicator, capable of bridging technical and non-technical perspectives to align expectations and drive project success.",
          aboutTitle: "About",
          hard: "Hard Skills",
          soft: "Soft Skills",
          jungen:
            "Jungen is an application developed as a final project for the React module. It is an e-commerce application focusing on category browsing, product details, shopping cart management and payment method.",
          technolo: "Technologies",
          seeLive: "See live",
          documentation: "Documentation",
          javabank:
            "Javabank is a front-end project that simulates basic features of a banking system. It aims to practice fundamental concepts of web development such as DOM manipulation, interactivity, and navigation between pages.",
          messageTitle: "Message",
          sendTitle: "Send",
          toastErrorM:
            "Your message was not successfully sent due to an error. You can try again later.",
          toastSucM: "Thanks for your message! You will be replyed soon.",
          errM: "Unexpected error.",
          languages: "Languages",
          tools: "Tools",
          frameworks: "Frameworks",
          messagePH:
            "Hi, your profile is pretty interesting, would you be avaiable for...",
          rights: "All rights reserved.",
          errCaptcha: "reCAPTCHA not loaded. Try again later.",
          consentText: "This website uses Google reCAPTCHA v3 cookies to protect the contact form from bots and abuse. By continuing, you agree to the use of these cookies. Check the ",
          consentData: "Privacy Policy",
          consentTerms: "Terms of Service",
          consentCompl: "and the ",
          consentCompl2: " of Google.",
          accept: "Accept",
          decline: "Decline",
        },
      },
      de: {
        translation: {
          function: "Fullstack Web Entwickler",
          intro:
            "Ich bin Fullstack-Entwickler und Technikbegeisterter, der stets danach strebt, zu wachsen. Ich fühle mich sowohl im Frontend als auch im Backend wohl, und was mich wirklich antreibt, ist das Lernen durch Herausforderungen, das Entwickeln neuer Fähigkeiten und das ständige Besserwerden mit jedem Projekt.",
          contactTitle: "Kontakt",
          resume: "Lebenslauf",
          logos: "Benutzerdefinierte Logos und Icons",
          interfaces: "Benutzerfreundliche Oberflächen",
          responsive: "Prinzipien des responsiven Designs",
          front: "Front-end Entwicklung",
          darkm: "Dunkelmodus",
          api: "API-Schnittstellen",
          authen: "Authentifizierung und Autorisierung",
          cs: "CSS-Animationen (Lader, Springen, Drehen...)",
          errors: "Fehlerverwaltung",
          comp: "Komponenten",
          rout: "Routing",
          seo: "SEO",
          notf: "Benachrichtigungen (toast, notistak, hottoast...)",
          versioning: "Versionierung",
          vecto: "Vektorisierung",
          translat: "Übersetzungen",
          apiTitle: "API Entwicklung",
          postman: "Postman-Sammlungen",
          back: "Back-end Entwicklung",
          thAPI: "Integration von Drittanbieter-APIs",
          notfiq: "Push-Benachrichtigungen",
          admin: "Administratoroberfläche",
          adaptTitle: "Anpassungsfähigkeit",
          adaptSub:
            "Fähigkeit, sich schnell an neue Technologien, Arbeitsabläufe und Umgebungen anzupassen und dabei auch in einem sich ständig wandelnden Webentwicklungsumfeld produktiv zu bleiben.",
          learningTitle: "Schnelle Auffassungsgabe",
          learningSub:
            "Ausgeprägte Fähigkeit, neue Konzepte, Programmiersprachen und Frameworks rasch zu erlernen und sich kontinuierlich an Branchentrends anzupassen.",
          attentionTitle: "Liebe zum Detail",
          attentionSub:
            "Hohe Genauigkeit und Qualitätsanspruch, um sauberen, effizienten Code zu schreiben und Fehler zu vermeiden, die die Nutzererfahrung oder Performance beeinträchtigen könnten.",
          problTitle: "Problemlösungsfähigkeit",
          problSub:
            "Stark in der Analyse komplexer Situationen sowie in der Entwicklung praktischer und wirkungsvoller Lösungen für technische Herausforderungen.",
          teamTitle: "Teamarbeit und Zusammenarbeit",
          teamSub:
            "Teamorientiertes Denken und kooperative Zusammenarbeit mit interdisziplinären Teams zur Erreichung gemeinsamer Ziele in einem respektvollen Arbeitsumfeld.",
          commTitle: "Komunikationsfähigkeit",
          commSub:
            "Klare und effektive Kommunikation, sowohl im technischen als auch im nicht-technischen Kontext, zur Förderung des Projektfortschritts und zur Abstimmung von Erwartungen.",
          aboutTitle: "Impressum",
          hard: "Hard Skills",
          soft: "Soft Skills",
          jungen:
            "Jungen ist eine Anwendung, die als Abschlussprojekt für das React-Modul entwickelt wurde. Es handelt sich um eine E-Commerce-Anwendung, die sich auf das Durchsuchen von Kategorien, Produktdetails, die Verwaltung des Warenkorbs und die Zahlungsmethode konzentriert.",
          technolo: "Technologien",
          seeLive: "Live sehen",
          documentation: "Dokumentation",
          javabank:
            "Javabank ist ein Front-End-Projekt, das die grundlegenden Funktionen eines Bankensystems simuliert. Es zielt darauf ab, grundlegende Konzepte der Webentwicklung wie DOM-Manipulation, Interaktivität und Navigation zwischen Seiten zu üben.",
          messageTitle: "Nachricht",
          sendTitle: "Senden",
          toastErrorM:
            "Ihre Nachricht wurde aufgrund eines Fehlers nicht erfolgreich gesendet. Sie können es später noch einmal versuchen.",
          toastSucM:
            "Vielen Dank für Ihre Nachricht! Sie erhalten bald eine Antwort.",
          errM: "Unerwarteter Fehler.",
          languages: "Sprachen",
          tools: "Werkzeuge",
          frameworks: "Rahmenwerke",
          messagePH:
            "Hi, dein Profil ist sehr interessant, wärst du verfügbar für...",
          rights: "Alle Rechte vorbehalten.",
          errCaptcha: "reCAPTCHA nicht geladen. Versuchen Sie es später noch einmal.",
          consentText: "Diese Website verwendet Google reCAPTCHA v3 Cookies, um das Kontaktformular vor Bots und Missbrauch zu schützen. Wenn Sie fortfahren, erklären Sie sich mit der Verwendung dieser Cookies einverstanden. Siehe die ",
          consentData: "Datenschutzbestimmungen",
          consentTerms: "Nutzungsbedingungen",
          consentCompl: "und ",
          consentCompl2: " von Google.",
          accept: "Akzeptieren",
          decline: "Ablehnen",
        },
      },
    },
  });

export default i18n;
