import { Container } from "@mui/material";
import styles from "./style.module.scss";
import Slider from "react-slick";

export default function Header() {
  return (
    <div className={styles.header} id="header">
      <Container>
        <div className={styles.textWrap}>
          <h1 className={styles.heading}>
          
            Individual dizayn bo’yicha mebellar
            
          </h1>
          <Slider
              lazyLoad={true}
              infinite={true}
              autoplay={true}
              arrows={false}
              adaptiveHeight={true}
              autoplaySpeed={3000}
            >
              {[
                "Loyihalaymiz",
                "Ishlab chiqaramiz",
                "Yetkazib beramiz",
                "O'rnatamiz",
                "Halovatingiz uchun!",
              ].map((el, index) => (
                <span key={index} className={styles.item}>{el}</span>
              ))}
            </Slider>
          <button className={styles.btn}>Buyurtma berish</button>
        </div>
      </Container>
    </div>
  );
}
