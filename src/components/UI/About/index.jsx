import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import styles from "./style.module.scss";
import Image from "next/image";

export default function About() {
  const { t } = useTranslation("about");
  return (
    <Container id="about">
      <div className={styles.about}>
        <h1 className={styles.heading}>Biz haqimizda</h1>
        <div className={styles.block}>
          <div className={styles.textWrap}>
            <h2 className={styles.title}>
              Avtomatizatsiya “БАЗИС МЕБЕЛЬЩИК” <br /> Biz bilan!
            </h2>
            <p className={styles.text}>
              Mebel ishlab chiqarishdagi eng muhim jarayon, mebel kontruksiyasi
              qilishdir. Ushbu jarayon, aynan mebel konstrusiyalarini amalga
              oshirishga mo’ljallangan Bazis dasturi yordamida qilinadi. Bu esa
              mahsulotlarimiz sifatiga katta ta’sir o’tkazadi
            </p>
          </div>
          <div className={styles.imgWrap}>
            <Image
              src={"/images/aboutImg.svg"}
              priority={true}
              alt="БАЗИС МЕБЕЛЬЩИК"
              width={636}
              height={356}
              layout="fixed"
            />
          </div>
        </div>
        <h1 className={styles.heading}>Kompaniya maqsadi</h1>
        <h2 className={styles.desc}>
          Mebel ishlab chiqarish orqali insonlarga yaxshilik qilish va <br />{" "}
          ularga halovat ulashish!
        </h2>
      </div>
      <div className={styles.mobile}>
        <h1 className={styles.heading}>Biz haqimizda</h1>
        <div className={styles.block}>
          <Image
            src={"/images/aboutMediaImg.svg"}
            priority={true}
            alt="БАЗИС МЕБЕЛЬЩИК"
            width={343}
            height={198}
            layout="responsive"
          />
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            sodales, massa sit amet luctus porta, mi tellus dictum odio, luctus
            tincidunt arcu turpis a ligula. Suspendisse sed turpis lectus.
            Aenean hendrerit nisl vitae lobortis gravida. Maecenas tellus mi,
            ornare sit amet auctor mattis, tincidunt vel diam. In pharetra arcu
            metus, at posuere arcu ullamcorper blandit. Integer id lectus
            condimentum, sodales dui nec, mollis risus. In iaculis rutrum
            pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Vestibulum sodales, massa sit amet luctus porta, mi tellus
            dictum odio, luctus tincidunt arcu turpis a ligula.
          </p>
        </div>
        <div className={styles.block}>
          <Image
            src={"/images/aboutMediaImg.svg"}
            priority={true}
            alt="БАЗИС МЕБЕЛЬЩИК"
            width={343}
            height={198}
            layout="responsive"
          />
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            sodales, massa sit amet luctus porta, mi tellus dictum odio, luctus
            tincidunt arcu turpis a ligula. Suspendisse sed turpis lectus.
            Aenean hendrerit nisl vitae lobortis gravida. Maecenas tellus mi,
            ornare sit amet auctor mattis, tincidunt vel diam. In pharetra arcu
            metus, at posuere arcu ullamcorper blandit. Integer id lectus
            condimentum, sodales dui nec, mollis risus. In iaculis rutrum
            pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Vestibulum sodales, massa sit amet luctus porta, mi tellus
            dictum odio, luctus tincidunt arcu turpis a ligula.
          </p>
        </div>
      </div>
    </Container>
  );
}
