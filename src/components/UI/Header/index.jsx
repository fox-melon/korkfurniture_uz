/* eslint-disable react/jsx-key */
import { Container } from "@mui/material";
import styles from "./style.module.scss";
import Slider from "react-slick";
import useTranslation from "next-translate/useTranslation";

export default function Header() {
  const { t } = useTranslation("common");
  return (
    <div className={styles.header} id="header">
      <Container>
        <div className={styles.textWrap}>
          <h1 className={styles.heading}>{t("individual_design")}</h1>
          <Slider
            lazyLoad={true}
            infinite={true}
            autoplay={true}
            arrows={false}
            adaptiveHeight={true}
            autoplaySpeed={3000}
          >
            {[
              t("design"),
              t("produce"),
              t("deliver"),
              t("install"),
              t("for_your_comfort"),
            ].map((el, index) => (
              <div className={styles.sliderWrap}>
                <span key={index} className={styles.item}>
                  {el}
                </span>
              </div>
            ))}
          </Slider>
          <button className={styles.btn}>{t("order")}</button>
        </div>
      </Container>
    </div>
  );
}
