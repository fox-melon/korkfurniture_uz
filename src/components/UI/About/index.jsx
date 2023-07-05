import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import styles from "./style.module.scss";

export default function About() {
  const { t } = useTranslation("common");

  const data = [
    {
      id: 1,
      src: "/images/horeca.svg",
      title: t("produceOneTitle"),
      text:  t("produceOneText"),
    },
    {
      id: 2,
      src: "/images/education.svg",
      title: t("produceTwoTitle"),
      text:  t("produceTwoText"),
    },
    {
      id: 3,
      src: "/images/ofis.svg",
      title: t("produceThreeTitle"),
      text:  t("produceThreeText"),
    },
  ];
  return (
    <Container id="about">
      <div className={styles.about}>
        <h1 className={styles.heading}>{t("about")}</h1>
        <h2 className={styles.question}>{t("what_produce")}</h2>
        <p className={styles.questionBottomText}>{t("produce_is")}</p>
        <div className={styles.types}>
          {data?.map((value) => {
            return (
              <div className={styles.typeItem} key={value.id}>
                <img src={value.src} alt="" />
                <div className={styles.texts}>
                  <div className={styles.title}>{value.title}</div>
                  <p className={styles.text}>{value.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.block}>
          <div className={styles.textWrap}>
            <h2 className={styles.title}>{t("automationTitle")}</h2>
            <p className={styles.text}>{t("automationText")}</p>
          </div>
          <div className={styles.imgWrap}>
            <img src={"/images/aboutImg.svg"} alt="БАЗИС МЕБЕЛЬЩИК" />
          </div>
        </div>
      </div>
    </Container>
  );
}
