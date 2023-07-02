import Dialog from "@mui/material/Dialog";
import styles from "./style.module.scss";
import Image from "next/image";

export const Modal = ({ setOpen = () => {}, selectedValue, open }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className={styles.dialog}>
        <h3>{selectedValue.name}</h3>
        <img
          onClick={handleClose}
          src="/images/closeGreen.svg"
          className={styles.closeIcon}
          alt="close"
        />

        <div className={styles.flex}>
          {selectedValue?.images?.map((item, index) => (
            <div className={styles.imgWrap} key={index}>
              <Image
                key={index}
                src={item}
                placeholder="blur"
                blurDataURL="/images/room1.svg"
                alt="banner"
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </Dialog>
  );
};
