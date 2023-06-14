import React, { useEffect } from "react";
import { Drawer } from "@mui/material";
import styles from "./RightMenu.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useStyles } from "./muStyles";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function RightMenu({ isOpen, setIsOpen = () => {} }) {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation("common");

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  const toggleDrawer = () => (event) => {
    if (
      event?.type === "keydown" &&
      (event?.key === "Tab" || event?.key === "Shift")
    ) {
      return;
    }
    setIsOpen(false);
  };

  return (
    <Drawer
      className={classes.root}
      anchor="left"
      open={isOpen}
      onClose={toggleDrawer()}
    >
      <div className={classes.list} role="presentation">
        <div className={styles.menu}>
          <div className={styles.close}>
            <Image
              src={"/images/close.svg"}
              priority={true}
              alt="konk"
              width={24}
              height={24}
              onClick={toggleDrawer()}
            />
          </div>
          <div className={styles.items}>
              <a href="#about" className={styles.listItem}>{t("about")}</a>
              <a href="#client" className={styles.listItem}>{t("client")}</a>
              <a href="#contact" className={styles.listItem}>{t("contact")}</a>
          </div>
          <a href="tel:+998901234567" className={styles.phone}>
              <Image
                className={styles.logo}
                src={"/images/phone.svg"}
                objectFit="cover"
                priority={true}
                alt="konk"
                width={16}
                height={16}
              />
              <p>{"+998 (90) 123-45-67"}</p>
            </a>
        </div>
      </div>
    </Drawer>
  );
}
