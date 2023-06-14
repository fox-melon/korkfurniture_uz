import styles from "./style.module.scss";
import Link from "next/link";
import { Container } from "@mui/material";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer className={styles.footer} id="footer">
        <Container>
          <div className={styles.box}>
            <Link href="/">
              <Image
                src={"/images/logo.svg"}
                priority={true}
                alt="konk"
                width={120}
                height={50}
                layout="fixed"
              />
            </Link>
            <nav>
              <ul>
                <li>
                  <a href="#about">Biz haqimizda</a>
                </li>
                <li>
                  <a href="#client">Mijozlar </a>
                </li>
                <li>
                  <a href="#contact">Kontaktlar</a>
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
