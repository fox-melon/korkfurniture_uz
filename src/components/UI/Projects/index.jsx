import { Container } from "@mui/material";
import styles from "./style.module.scss";
import { useState } from "react";
import { Modal } from "../Modal";

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({});

  const dataImg = [
    { id: 1, src: "/images/room1.svg", text: "Na’jot Ta’lim markazi" },
    { id: 2, src: "/images/room2.svg", text: "Na’jot Ta’lim markazi" },
    { id: 3, src: "/images/room3.svg", text: "Na’jot Ta’lim markazi" },
    { id: 4, src: "/images/room4.svg", text: "Na’jot Ta’lim markazi" },
    { id: 5, src: "/images/room5.svg", text: "Na’jot Ta’lim markazi" },
    { id: 21, src: "/images/room21.svg", text: "Na’jot Ta’lim markazi" },
    { id: 22, src: "/images/room22.svg", text: "Na’jot Ta’lim markazi" },
    { id: 23, src: "/images/room23.svg", text: "Na’jot Ta’lim markazi" },
  ];

  const handleItem = (value) => {
    setSelectedValue(value);
    setOpen(true);
  };

  return (
    <Container>
      <h1 className={styles.heading}>Bizning loyihalar</h1>
      <div className={styles.gridOne}>
        {dataImg?.map((value) => {
          return (
            <div className={styles[`card${value?.id}`]} key={value?.id}>
              <img
                src={`/images/room${value?.id}.svg`}
                alt="room"
                className={styles[`room${value?.id}`]}
                onClick={() => handleItem({ ...value })}
              />
              <p className={styles.title}>
                <i className={styles.line}></i> {value?.text}
              </p>
            </div>
          );
        })}
      </div>
      <Modal selectedValue={selectedValue} open={open} setOpen={setOpen} />
    </Container>
  );
}
