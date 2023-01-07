import { makeStyles, alpha } from "@material-ui/core";

export default makeStyles((theme) => ({
  button:{
    width:'300px',
    height:"50px",
    backgroundColor: "rgb(211 166 250/78%)",
    '&:hover': { backgroundColor: "rgb(211 166 250/90%)" },
    color:"white",
    borderRadius:"50px",
    fontWeight:"bold",
    fontSize:"18px",
  },
  title:{
    textAlign:"center",
    margin:"auto",
    marginTop:"50px",
    marginBottom:"50px",
    color:theme.palette.common.white,
    fontFamily:"Brush Script MT",
    fontSize:"50px",
    textDecoration:"none"
  }
}));
