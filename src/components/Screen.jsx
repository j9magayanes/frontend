import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Grid } from "@mui/material";
import "./Header.css";
import { useNewsData } from "../useNewsData";
import { useDispatch, useSelector, useStore } from "react-redux";

function Screen() {
  const dispatch = useDispatch();
  const store = useStore();
  const state = useState();
  const newsData = useNewsData();

  const category = useSelector(() => store.getState().categoryReducer.category);
  const country = useSelector(() => store.getState().countryReducer.country);

    console.log(category)

  var categories= []

  return (
    <Carousel className="carousel" autoPlay={false} >
      {categories.map((item) => (
          <a href={item.link} target="_blank" >
          <Grid container>
          <Grid item  lg={4}  md ={12} sm={12} xs={12} >
              <img className="carouselImage" src={item.image}></img>
          </Grid>
          <Grid item lg={8} md ={12}   sm={12} xs={12}  className="carouselContents">
              <p className="carouselHeadline">{item.headline}</p>
              <p className="carouselContent">
                {item.content}
              </p>
          
          </Grid>
        </Grid>
        </a>  
      ))}
    </Carousel>
  );
}

export default Screen;
