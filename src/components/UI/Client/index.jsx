import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import styles from "./style.module.scss";
import Image from "next/image";

export default function Client() {
  const { t } = useTranslation("about");
  const data = [
    { id: 1, img: "/images/natGraphLogo.svg" },
    { id: 2, img: "/images/discLogo.svg" },
    { id: 3, img: "/images/ikealogo.svg" },
    { id: 4, img: "/images/herMilLogo.svg" },
    { id: 5, img: "/images/woodyLogo.svg" },
    { id: 6, img: "/images/woodyWorkLogo.svg" },
    { id: 7, img: "/images/okoLogo.svg" },
    { id: 8, img: "/images/SteelLogo.svg" },
  ];
  return (
    <Container>
      <h1 className={styles.heading}>Mijozlarimiz</h1>
      <div className={styles.logoWrap}>
        {data.map((item) => {
          return (
            <Image
              key={item.id}
              src={item.img}
              alt="brand"
              width={372}
              height={152}
              layout="responsive"
            />
          );
        })}
      </div>
    </Container>
  );
}
