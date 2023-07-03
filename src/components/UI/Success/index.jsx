import Dialog from "@mui/material/Dialog";
import styles from "./style.module.scss";

export const SuccessModal = ({ setOpen = () => {}, open }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog onClose={handleClose} open={open} id="successModal">
      <div className={styles.dialog}>
        <img
          onClick={handleClose} 
          src="/images/closeGreen.svg"
          className={styles.closeIcon}
          alt="close"
        />
        <img src="/images/success.svg" alt="close" />

        <p className={styles.text}>
          Murojaatingiz uchun rahmat <br />
          siz bilan tez orada bog{`'`}lanamiz!
        </p>
      </div>
    </Dialog>
  );
};
