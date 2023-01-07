import React, { useEffect, useState, createRef } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import useStyles from "./styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
interface list {
  places: any;
  childClicked: number;
  isLoading: boolean;
  type: any;
  setType: any;
  rating: any;
  setRating: any;
}
const List = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}: list) => {
  const classes: any = useStyles();
  const [elRefs, setElRefs] = useState<any>([]);

  useEffect(() => {
    setElRefs((refs: any) =>
      Array(places.length)
        //@ts-ignore
        .fill()
        .map((_, i) => (elRefs[i] ? elRefs[i] : createRef()))
    );
  }, [places]);
  console.log(elRefs, "elRefs");
  return (
    <div className={classes.container}>
      <Typography variant="h5" className={styles.title}>
        Restaurants, Hotels & Attractions around you:
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e: any) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={cn(classes.formControl,classes.form)}>
            <InputLabel>Rating</InputLabel>
            <Select
              value={rating}
              onChange={(e: any) => setRating(e.target.value)}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place: any, i: number) => {
              console.log(
                "i",
                i,
                "childClicked",
                childClicked,
                "Number",
                Number(childClicked) === i
              );
              return (
                <Grid item key={i} xs={12}>
                  <PlaceDetails
                    place={place}
                    //@ts-ignore
                    selected={Number(childClicked) === i}
                    refProp={elRefs[i]}
                  ></PlaceDetails>
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
