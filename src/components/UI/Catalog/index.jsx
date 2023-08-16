/* eslint-disable react/no-unescaped-entities */
import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import styles from "./style.module.scss";
import { useState } from "react";

export default function Catalog() {
  const { t } = useTranslation("common");
  const [phone, setPhone] = useState("");

  return (
    <div className={styles.catalog} id="catalog">
      <Container>
        <div className={styles.grid}>
          <div className={styles.textWrap}>
            <p className={styles.topText}>
              <span className={styles.line}></span> {t("not_all")}
            </p>

            <h1 className={styles.title}>{t("by_idea")}</h1>
            <p className={styles.desc}>{t("send_catalog")}</p>
          </div>
          <div className={styles.imgWrap}>
            <img src={"/images/book.svg"} alt="book" />
          </div>
          <div className={styles.form}>
            <input
              type="tel"
              placeholder={t("phone_number")}
              onChange={(e) => setPhone(e.target.value)}
            />
            <a
              href="https://cdn.quickweb.uz/file/d240ffd9-85a6-424f-8bf3-9c5e462844cc.pdf"
              download="Kork Catalog"
              target="_blank"
              rel="noreferrer"
            >
              <button disabled={phone.length <= 0}>{t("get_catalog")}</button>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
