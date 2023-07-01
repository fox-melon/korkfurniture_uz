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
              <span className={styles.line}></span> Bu barcha loyihalarimiz emas
            </p>

            <h1 className={styles.title}>G'oyalardan ilhom oling</h1>
            <p className={styles.desc}>
              Formani to'ldiring va biz sizga katalog yuboramiz
            </p>
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
            <button
              onClick={() => console.log(phone)}
              disabled={phone.length <= 0}
            >
              {t("get_catalog")}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
