import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";

export default function Client() {
  const [data, setData] = useState();
  const { t } = useTranslation("common");

  useEffect(() => {
    axios
      .get(`https://api.quickweb.uz/9d8c8300-f5eb-488b-8b12-a9a56bc17d57`)
      .then((res) => setData(res?.data));
  }, []);

  return (
    <Container id="client">
      <h1 className={styles.heading}>{t("our_clients")}</h1>
      <div className={styles.logoWrap}>
        {data ? (
          data?.data.map((item, index) => (
            <div className={styles.imgWrap} key={index}>
              <img src={item.logo || "/images/noImg2.jpg"} alt="brand" />
            </div>
          ))
        ) : (
          <>
            <Skeleton variant="rounded" width={"100%"} height={152} />
            <Skeleton variant="rounded" width={"100%"} height={152} />
            <Skeleton variant="rounded" width={"100%"} height={152} />
            <Skeleton variant="rounded" width={"100%"} height={152} />
          </>
        )}
      </div>
    </Container>
  );
}

//  || or no img
