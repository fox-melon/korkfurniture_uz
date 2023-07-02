import Dialog from "@mui/material/Dialog";
import styles from "./style.module.scss";

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

        <div
          className={styles.flex}
          style={checkStyle(selectedValue?.images?.length)}
        >
          {selectedValue?.images?.map((item, index) => (
            <img src={item} alt="banner" key={index} />
          ))}
        </div>
      </div>
    </Dialog>
  );
};

const checkStyle = (length) => {
  switch (length) {
    case 1:
      return {
        gridTemplateColumns: "auto",
      };
    case 2:
      return {
        gridTemplateColumns: "40% 15% 40%",
      };
    default:
      return {
        gridTemplateColumns: "40% 15% 40%",
        gridTemplateRows: "repeat(3, 25vw)",
      };
  }
};
