import React from "react";
import styles from "./styles.module.scss";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import { Rating } from "@material-ui/lab";
import useStyles from "./styles";
interface PD {
  place: {
    name: string;
    photo: any;
    price_level: any;
    awards: any;
    ranking: any;
    cuisine: any;
    address: any;
    phone: any;
    web_url: any;
    website: any;
    rating: any;
    num_reviews: any;
  };
  selected:boolean;
  refProp:any
}
const PlaceDetails = ({ place,selected, refProp }: PD) => {
  const classes = useStyles();
  console.log("SELECTEEED",selected, place )
if(selected)refProp?.current?.scrollIntoView({behavior:"smooth",block:"start"})
  return (
    <Card elevation={6} ref={refProp}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <Rating size="small" value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            out of {place.num_reviews}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award: any) => (
          <Box
            my={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }: any) => (
          <Chip
            key={name}
            size="small"
            label={name}
            className={classes.chip}
          ></Chip>
        ))}
        {place?.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon /> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
export default PlaceDetails;
