import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import styles from "./style.module.scss";
import { useState } from "react";

export default function Contact() {
  const { t } = useTranslation("common");
  const data = [
    {
      id: 1,
      src: "/images/phoneWhite.svg",
      text: "+998 (90) 123-45-67",
      href: "tel:+998901234567",
    },
    {
      id: 2,
      src: "/images/sms.svg",
      text: "korkmebel@gmail.com",
      href: "mailto:korkmebel@gmail.com",
    },
    {
      id: 3,
      src: "/images/location.svg",
      text: "Yunusobod tumani, mahallasi, 7 uy",
    },
    { id: 4, src: "/images/clock.svg", text: "09:00 - 18:00" },
  ];

  return (
    <div className={styles.contact} id="contact">
      <h1 className={styles.title}>{t("contact")}</h1>
      <div className={styles.bg}>
        <Container>
          <div className={styles.flex}>
            <ul className={styles.list}>
              {data?.map(({ id, src, text, href }) => {
                return (
                  <li key={id}>
                    <img src={src} alt="" />
                    <a href={href}>{text}</a>
                  </li>
                );
              })}
            </ul>
            <div className={styles.form}>
              <input type="text" placeholder={t("name")} />
              <input type="tel" placeholder={t("phone_number")} />
              <textarea rows="5" placeholder={t("description")}></textarea>
              <button>{t("submit")}</button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
