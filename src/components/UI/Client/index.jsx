import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import styles from "./style.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";

export default function Client() {
  const [data, setData] = useState();
  const { t } = useTranslation("common");

  useEffect(() => {
    axios
      .get(`https://api.quickweb.uz/adfbddee-4ecb-4767-973c-fd3f16bd6ebd`)
      .then((res) => setData(res?.data));
  }, []);

  return (
    <Container id="client">
      <h1 className={styles.heading}>{t("our_clients")}</h1>
      <div className={styles.logoWrap}>
        {data ? (
          data?.data.map((item, index) => (
            <div className={styles.imgWrap} key={index}>
              <img
                src={item.logo}
                alt="brand"
              />
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
