/* eslint-disable react/jsx-key */
import styles from "./style.module.scss";
import Slider from "react-slick";
import useTranslation from "next-translate/useTranslation";

export default function Header() {
  const { t } = useTranslation("common");
  return (
    <div className={styles.header} id="header">
      <div className={styles.flex}>
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
              <div className={styles.sliderWrap} key={index}>
                <span key={index} className={styles.item}>
                  {el}
                </span>
              </div>
            ))}
          </Slider>
          <a href="#contact">
            <button className={styles.btn}>{t("order")}</button>
          </a>
        </div>
        <div className={styles.imgWrap}>
          <img src={"/images/headerImg.svg"} />
        </div>
      </div>
      <div className={styles.btnMobile}>
        <a href="#contact">
          <button className={styles.btn}>{t("order")}</button>
        </a>
      </div>
    </div>
  );
}
