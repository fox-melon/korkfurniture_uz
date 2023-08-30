import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import styles from "./style.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { SuccessModal } from "../Success";

export default function Contact() {
  const [isSucces, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      let res = await axios.get(
        `https://korkfurniture.uz/api/bot?full_name=${data.name}&phone_number=${data.phone_number}&description=${data.description}`
      );
    } catch (error) {
      console.error(error);
    }
    setIsSuccess(true);
  };

  const { t } = useTranslation("common");
  const data = [
    {
      id: 1,
      src: "/images/phoneWhite.svg",
      text: "+998 (95) 164-64-64",
      href: "tel:+998951646464",
    },
    {
      id: 2,
      src: "/images/sms.svg",
      text: "korkmebel@gmail.com",
      href: "mailto:korkmebel@gmail.com",
    },
    {
      id: 3,
      src: "/images/location.svg",
      text: t("address"),
    },
    { id: 4, src: "/images/clock.svg", text: "09:00 - 18:00" },
  ];

  return (
    <div className={styles.contact} id="contact">
      <h1 className={styles.title}>{t("contact_us")}</h1>
      <div className={styles.bg}>
        <Container>
          <div className={styles.flex}>
            <ul className={styles.list}>
              {data?.map(({ id, src, text, href }) => {
                return (
                  <li key={id}>
                    <img src={src} alt="" />
                    <a href={href}>{text}</a>
                  </li>
                );
              })}
            </ul>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <input
                type="text"
                placeholder={t("name")}
                {...register("name")}
              />
              <input
                type="tel"
                placeholder={t("phone_number")}
                {...register("phone_number", {
                  required: true,
                  pattern: /[0-9]/,
                })}
              />
              {errors.phone_number && (
                <span style={{ color: "red" }}>{t("error_phone")}</span>
              )}
              <textarea
                rows="5"
                placeholder={t("description")}
                {...register("description")}
              ></textarea>
              <button onSubmit={handleSubmit(onSubmit)}>{t("submit")}</button>
              {isSucces && (
                <SuccessModal open={isSucces} setOpen={setIsSuccess} />
              )}
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
}
