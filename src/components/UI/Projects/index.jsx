import { Container, Skeleton } from "@mui/material";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { Modal } from "../Modal";
import useTranslation from "next-translate/useTranslation";
import axios from "axios";
import Image from "next/image";

export default function Projects() {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`https://api.quickweb.uz/dd51e486-bb03-430b-95f2-75429accacff`)
      .then((res) => setData(res?.data));
  }, []);

  const handleItem = (value) => {
    setSelectedValue(value);
    setOpen(true);
  };
  return (
    <Container>
      <h1 className={styles.heading}>{t("projects")}</h1>
      <div className={styles.gridOne}>
        {data ? (
          data?.data?.map((value, index) => {
            return (
              <div className={styles[`card${index}`]} key={index}>
                <div className={styles.imgWrap}>
                  <Image
                    src={value.images[0]}
                    alt="room"
                    onClick={() => handleItem(value)}
                    layout="fill"
                  />
                </div>
                <p className={styles.title}>
                  <i className={styles.line}></i> {value?.name}
                </p>
              </div>
            );
          })
        ) : (
          <Skeleton variant="rounded" width="100%" height="300px" />
        )}
      </div>
      <Modal selectedValue={selectedValue} open={open} setOpen={setOpen} />
    </Container>
  );
}
