import React, { useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import "../contexts/i18n";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!window.grecaptcha) {
      toast.error(t("errCaptcha"));
      return;
    }

    try {
      await new Promise((resolve) => {
        window.grecaptcha.ready(() => {
          resolve();
        });
      });

      const token = await window.grecaptcha.execute(
        import.meta.env.VITE_RECAPTCHA_SITE_KEY,
        {
          action: "submit",
        }
      );

      const form = new FormData(e.target);
      form.append("g-recaptcha-response", token);

      const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });

      if (response.ok) {
        toast.success(t("toastSucM"));
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(t("toastErrorM"));
      }
    } catch (err) {
      toast.error(t("errM"));
    }
  };

  return (
    <section className="section-custom flex" id="contact">
      <h2 className="font-cal text-4xl dark:text-white">{t("contactTitle")}</h2>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="flex w-full max-w-[600px] flex-col"
      >
        <div className="flex flex-col sm:flex-row gap-2 font-roboto font-medium justify-between mt-5">
          <div className="flex flex-col w-full">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Wolfgang Mozart"
              className="bg-white text-gray-600 px-1"
            ></input>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="mozart_wolfgang@gmail.com"
              className="bg-white text-gray-600 px-1"
            ></input>
          </div>
        </div>
        <div className="flex justify-center flex-col font-roboto font-medium mt-4">
          <label htmlFor="message">{t("messageTitle")}</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder={t("messagePH")}
            className="bg-white h-36 text-gray-600 w-full px-1"
          ></textarea>

          <input
            type="submit"
            value={t("sendTitle")}
            className="bg-[#0a9753] mt-4 rounded-[3px] text-white h-9 cursor-pointer"
          ></input>
        </div>
      </form>
    </section>
  );
};

export default Contact;
