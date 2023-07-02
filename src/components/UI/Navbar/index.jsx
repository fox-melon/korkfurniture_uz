/* eslint-disable @next/next/link-passhref */
import { useState } from "react";
import Image from "next/image";
import RightMenu from "../RightMenu/RightMenu";
import { Container } from "@mui/material";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import PhoneIcon from "./PhoneIcon";
import Link from "next/link";
export default function Navbar() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);

  const langs = [
    {
      key: "uz",
      label: "uz",
    },
    {
      key: "en",
      label: "en",
    },
    {
      key: "ru",
      label: "ру",
    },
  ];

  function handleLanguageChange(selectedLanguage) {
    router.push(router.pathname, router.pathname, { locale: selectedLanguage });
  }

  return (
    <header className={styles.navbar} id="navbar">
      <Container>
        <div className={styles.box}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logoPng.png"
              priority={true}
              alt="kork"
              width={120}
              height={50}
              layout="fixed"
            />
          </Link>
          <nav className={styles.desktop}>
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
          <div className={styles.right}>
            <div className={styles.langs}>
              <select onChange={(e) => handleLanguageChange(e.target.value)}>
                {langs.map((item) => (
                  <option key={item.key} value={item.key}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <a href="tel:+998983100054" className={styles.phone}>
              <PhoneIcon />
              <p>{"+998 (98) 310-00-64"}</p>
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
            <Link href="/" className={styles.logo}>
               <Image
                src="/images/logoPng.png"
                priority={true}
                alt="konk"
                width={80}
                height={32}
                layout="fixed"
              />
            </Link>
          </div>
          <div className={styles.langs}>
            <select onChange={(e) => handleLanguageChange(e.target.value)}>
              {langs.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Container>
      <RightMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
