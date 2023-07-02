/* eslint-disable @next/next/link-passhref */
import styles from "./style.module.scss";
import { Container } from "@mui/material";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <>
      <footer className={styles.footer} id="footer">
        <Container>
          <div className={styles.box}>
            <a href={"/"}>
              <Image
                src={"/images/logo.svg"}
                priority={true}
                alt="konk"
                width={120}
                height={50}
                layout="fixed"
              />
            </a>
            <nav>
              <ul>
                <li>
                  <a href="#about">{t("about")}</a>
                </li>
                <li>
                  <a href="#client">{t("client")}</a>
                </li>
                <li>
                  <a href="#contact">{t("contact")}</a>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </footer>
      <div className={styles.footerBottom}>
        <Container>
          <div className={styles.bottom}>
            <p>© 2023 Korkmebel</p>
            <p>All rights reserved</p>
          </div>
        </Container>
      </div>
    </>
  );
}
