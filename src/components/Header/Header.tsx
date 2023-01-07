import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import useStyles from "./styles";
import styles from "./styles.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";
interface header {
  setCoordinates: any;
}
const Header = ({ setCoordinates }: header) => {
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState<any>(null);
  const onLoad = (autoC: any) => setAutocomplete(autoC);
  const onPlacedChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Link to="/" className={styles.link}>
          <Typography variant="h5" className={cn(classes.title, styles.logo)}>
            Travel advisor
          </Typography>
        </Link>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" className={cn(classes.title, styles.title)}>
            Expolore New Places{" "}
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlacedChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Search ..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
