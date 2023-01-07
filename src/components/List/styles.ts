import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "120px !important",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  form: { marginLeft: "10px !important" },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "25px",
  },
  marginBottom: {
    marginBottom: "30px",
  },
  list: {
    height: "65vh",
    overflow: "auto",
    marginTop: "20px !important",
  },
}));
