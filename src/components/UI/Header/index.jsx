/* eslint-disable react/jsx-key */
import styles from "./style.module.scss";
import Slider from "react-slick";
import useTranslation from "next-translate/useTranslation";

export default function Header() {
  const { t, lang } = useTranslation("common");
  return (
    <div className={styles.header} id="header">
      <div className={styles.flex}>
        <div className={styles.textWrap}>
          {lang === "en" || lang === "ru" ? (
            ""
          ) : (
            <h1 className={styles.heading}>{t("individual_design")}</h1>
          )}

          <Slider
            lazyLoad={true}
            infinite={true}
            autoplay={true}
            arrows={false}
            adaptiveHeight={true}
            autoplaySpeed={1500}
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
          {lang === "en" || lang === "ru" ? (
            <h1 className={styles.heading}>{t("individual_design")}</h1>
          ) : (
            ""
          )}
          <a href="#contact">
            <button className={styles.btn}>{t("order")}</button>
          </a>
        </div>
        <div className={styles.imgWrap}>
          <img src={"/images/headerImg.svg"} alt="header bg img " />
        </div>
      </div>
    </div>
  );
}
