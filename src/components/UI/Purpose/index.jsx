import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import styles from "./style.module.scss";

export default function Purpose() {
  const { t } = useTranslation("common");
  return (
    <div className={styles.purpose}>
      <Container>
        <h1 className={styles.heading}>{t("goal")}</h1>
        <h2 className={styles.desc}>
          Mebel ishlab chiqarish orqali insonlarga yaxshilik qilish va <br />{" "}
          ularga halovat ulashish!
        </h2>
      </Container>
    </div>
  );
}
