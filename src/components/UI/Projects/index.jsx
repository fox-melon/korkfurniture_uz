import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import styles from "./style.module.scss";
import Image from "next/image";

export default function Projects() {
  const { t } = useTranslation("about");

  const items1 = [
    { id: 1, src: "/images/room1.svg", text: "Na’jot Ta’lim markazi" },
    { id: 2, src: "/images/room1.svg", text: "Na’jot Ta’lim markazi" },
    { id: 3, src: "/images/room1.svg", text: "Na’jot Ta’lim markazi" },
    { id: 4, src: "/images/room1.svg", text: "Na’jot Ta’lim markazi" },
    { id: 5, src: "/images/room1.svg", text: "Na’jot Ta’lim markazi" },
    { id: 21, src: "/images/room1.svg", text: "Na’jot Ta’lim markazi" },
    { id: 22, src: "/images/room1.svg", text: "Na’jot Ta’lim markazi" },
    { id: 23, src: "/images/room1.svg", text: "Na’jot Ta’lim markazi" },
  ];
  const items2 = [
    { id: 1, src: "/images/room1.svg", text: "Na’jot Ta’lim markazi" },
    { id: 2, src: "/images/room1.svg", text: "Na’jot Ta’lim markazi" },
    { id: 3, src: "/images/room1.svg", text: "Na’jot Ta’lim markazi" },
  ];
  return (
    <Container>
      <h1 className={styles.heading}>Biz haqimizda</h1>
      <div className={styles.gridOne}>
        {items1?.map((value) => {
          return (
            <div className={styles[`card${value?.id}`]} key={value?.id}>
              <Image
                className={styles[`room${value?.id}`]}
                src={`/images/room${value?.id}.svg`}
                priority={true}
                alt="room"
                width={372}
                height={440}
                layout="fixed"
                onClick={(e) => console.log(e)}
              />
              <p className={styles.title}>
                <i className={styles.line}></i> {value?.text}
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}