import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Map from "./Map";
import Newslist from "./Newslist";
import Header from "./Header";
import Screen from "./Screen";
import "./Page.css";
import { Grid } from "@material-ui/core";
import { useSelector, useStore } from "react-redux";
import { useCarbonData } from "../useCarbonData";
import { ClassNames } from "@emotion/react";

function Page() {
  const store = useStore();
  const country = useSelector(() => store.getState().countryReducer.country);

  return (
    <div>
      <Header />
      <Grid container>
       {country ?<Grid item  xs={12} sm={12} md={9} lg={3}  xl={3}  >
          <Newslist country={country} />   
        </Grid> :null
        } 
        <Grid item  xs={12} sm={12} md={3} lg={9} xl={9} >
          <Map />
        </Grid>
      </Grid>
  
    </div>
  )
}

export default Page;
