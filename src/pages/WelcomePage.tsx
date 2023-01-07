import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import google from "../img/google.png";
import useStyles from "./styles";
import { AppBar, Toolbar, InputBase, Box } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import { Autocomplete } from "@react-google-maps/api";
import { Link } from "react-router-dom";

const Welcome = () => {
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState<any>(null);
  const onLoad = (autoC: any) => setAutocomplete(autoC);
  const onPlacedChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    // setCoordinates({ lat, lng });
  };
  return (
    <div className={styles.container}>
      <Typography className={classes.title} variant="h4">
        Travel Advisor
      </Typography>
      <div className={styles.autoContainer}>
        <Link to="/travel-advisor" className={styles.button}>
          <Button className={classes.button}>Get started</Button>
        </Link>
      </div>
    </div>
  );
};
export default Welcome;
