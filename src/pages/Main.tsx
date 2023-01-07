import React, { useEffect, useState } from "react";
import { getPlacesData } from "../api";
import Header from "../components/Header/Header";
import List from "../components/List/List";
import Map from "../components/Map/Map";
import { CssBaseline, Grid } from "@material-ui/core";
import styles from "./styles.module.scss";

const Main = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState<any>(null);
  const [childClicked, setChildClicked] = useState(null);
  const [idLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  useEffect(() => {
    const filteredPlaces = places.filter((place: any) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);
  useEffect(() => {
    // @ts-ignore
    if (bounds) {
      setIsLoading(true);
      // getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
      // setPlaces(data?.filter((place:any) => place.name && place.num_reviews > 0));
      //   setFilteredPlaces([]);
      //   console.log("data", data);
      //   setIsLoading(false);
      // });
    }
  }, [bounds, type]);
  return (
    <div className={styles.containerMain}>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={Number(childClicked)}
            isLoading={idLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
