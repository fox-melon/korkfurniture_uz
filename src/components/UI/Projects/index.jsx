import { Container, Skeleton } from "@mui/material";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { Modal } from "../Modal";
import useTranslation from "next-translate/useTranslation";
import axios from "axios";
import Image from "next/image";

export default function Projects({ projects }) {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);

  const handleItem = (value) => {
    setSelectedValue(value);
    setOpen(true);
  };
  return (
    <Container>
      <h1 className={styles.heading}>{t("projects")}</h1>
      <div className={styles.gridOne}>
        {projects ? (
          projects.map((value, index) => {
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
