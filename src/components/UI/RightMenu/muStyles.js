import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    "& .MuiPaper-root": {
      borderRadius: 0,
      backgroundColor: "var(--primary-color)"
    },
  },
  list: {
    width: "50vw",
    "@media (max-width: 600px)": {
      width: "80vw",
    },
  },
  fullList: {
    width: "auto",
  },
});