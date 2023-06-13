import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import styles from "./style.module.scss";

export default function Header() {
  const { t } = useTranslation("header");
  const data = [
    {
      id: 1,
      title: "HoReCa",
      text: "Mehmonxona, restoran, kafelar",
    },
    {
      id: 2,
      title: "Ta’lim muassasalari",
      text: "O’quv markazlari, maktab va bog’chalar",
    },
    {
      id: 3,
      title: "Boshqaruv ofislari",
    },
  ];

  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.textWrap}>
          <h1 className={styles.heading}>
            <p>Loyihalaymiz</p>
            Individual dizayn bo’yicha mebellar
          </h1>
          <button>Buyurtma berish</button>
        </div>
        <div className={styles.col}>
          {data?.map((value) => {
            return (
              <div className={styles.box} key={value?.id}>
                <span className={styles.line}></span>
                <div className={styles.item}>
                  <div className={styles.title}>{value?.title}</div>
                  <div className={styles.text}>{value?.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
