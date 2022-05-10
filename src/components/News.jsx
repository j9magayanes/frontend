import React, { useState } from "react";
import "./Header.css";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector, useStore } from "react-redux";

function News() {
  const dispatch = useDispatch();
  const store = useStore();
  const state = useState();



  var categories = [];


  return (
    <div className="news" >
      {categories.map((news) => (
                <a href={news.link} target="_blank" >
        <Grid container className="newsList">
          <Grid item  lg={3} xs={2} >
              <img className="newsListImage"></img>
          </Grid>
          <Grid item lg={9} xs={10}  className="newsListContents">
              <p className="newsListHeadline">Test</p>
              <p className="newsListContent">
              </p>
              <p className="newsListContent">Read more →</p>
          </Grid>
        </Grid>
        </a>
      ))}
    </div>
  );
}

export default News;