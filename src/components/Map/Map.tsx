import React from "react";
import styles from "./styles.module.scss";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";
import useStyles from "./styles";
interface map {
  coordinates: any;
  setCoordinates: any;
  setBounds: any;
  places: any;
  setChildClicked: any;
}
const Map = ({
  coordinates,
  setCoordinates,
  setBounds,
  places,
  setChildClicked,
}: map) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
        }}
        defaultCenter={{ lat: 0, lng: 0 }}
        center={coordinates}
        // margin={["50px", "50px", "50px", "50px"]}
        defaultZoom={14}
        options={{}}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        {places?.map((place: any, i: number) => (
          <div
            className={classes.markerContainer}
            // @ts-ignore
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  className={classes.pointer}
                  variant="subtitle2"
                  gutterBottom
                >
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place.name}
                />
                <Rating
                  size="small"
                  value={Number(place.rating)}
                  readOnly
                ></Rating>
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};
export default Map;
