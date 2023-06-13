import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RightMenu from "../RightMenu/RightMenu";
import { Container } from "@mui/material";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);

  const langs = [
    {
      key: "uz",
      label: "uz",
    },
  ];

  return (
    <header className={styles.navbar}>
      <Container>
        <div className={styles.box}>
          <Link href="/" className={styles.logo}>
            <Image
              src={"/images/logo.svg"}
              priority={true}
              alt="konk"
              width={120}
              height={50}
              layout="fixed"
            />
          </Link>
          <nav className={styles.desctop}>
            <ul>
              <li>
                <Link href="/">
                  <a>{t("about")}</a>
                </Link>
              </li>
              <li>
                <Link href="/client">
                  <a>{t("client")}</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>{t("contact")}</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.right}>
            <div className={styles.langs}>
              <ul>
                {langs.map((item) => (
                  <li key={item.key}>
                    <Link href={router.asPath} locale={item.key}>
                      <a>{item.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <a href="tel:+998901234567" className={styles.phone}>
              <Image
                className={styles.logo}
                src={"/images/phone.svg"}
                objectFit="cover"
                priority={true}
                alt="konk"
                width={20}
                height={20}
              />
              <p>{"+998 (90) 123-45-67"}</p>
            </a>
          </div>
        </div>
        <div className={styles.mobile}>
          <div className={styles.brand}>
            <Image
              className={styles.menu}
              src={"/images/menu.svg"}
              priority={true}
              alt="konk"
              width={24}
              height={24}
              onClick={() => setIsOpen(true)}

            />
            <Link href={"/"}>
              <a>
                <Image
                  className={styles.logo}
                  src={"/images/logo.svg"}
                  priority={true}
                  alt="konk"
                  width={80}
                  height={32}
                />
              </a>
            </Link>
          </div>
          <div className={styles.langs}>
            <ul>
              {langs.map((item) => (
                <li key={item.key}>
                  <Link href={router.asPath} locale={item.key}>
                    <a>{item.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <RightMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
