import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import styles from "./style.module.scss";

export default function About() {
  const { t } = useTranslation("common");

  const data = [
    {
      id: 1,
      src: "/images/horeca.svg",
      title: "HoReCa",
      text: "Mehmonxona, restoran, kafelar",
    },
    {
      id: 2,
      src: "/images/education.svg",
      title: "Ta’lim muassasalari",
      text: "O’quv markazlari, maktab va bog’chalar",
    },
    {
      id: 3,
      src: "/images/ofis.svg",
      title: "Boshqaruv ofislari",
      text: "Kichik va katta turdagi kompaniyalar va biznes markazlar",
    },
  ];
  return (
    <Container id="about">
      <div className={styles.about}>
        <h1 className={styles.heading}>{t("about")}</h1>
        <h2 className={styles.question}>
          KORK MEBEL FABRIKASI NIMA ISHLAB CHIQARADI?
        </h2>
        <p className={styles.questionBottomText}>
          Fabrikamiz asosan quyidagi faoliyat turlari uchun mebel ishlab
          chiqarishdan iborat
        </p>
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
            <h2 className={styles.title}>
              Avtomatizatsiya “БАЗИС МЕБЕЛЬЩИК”
              <br /> Biz bilan!
            </h2>
            <p className={styles.text}>
              Mebel ishlab chiqarishdagi eng muhim jarayon, mebel kontruksiyasi
              qilishdir. Ushbu jarayon, aynan mebel konstrusiyalarini amalga
              oshirishga mo’ljallangan Bazis dasturi yordamida qilinadi. Bu esa
              mahsulotlarimiz sifatiga katta ta’sir o’tkazadi
            </p>
          </div>
          <div className={styles.imgWrap}>
            <img src={"/images/aboutImg.svg"} alt="БАЗИС МЕБЕЛЬЩИК" />
          </div>
        </div>
      </div>
    </Container>
  );
}
