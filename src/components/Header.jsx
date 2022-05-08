import React from "react";
import "./Header.css";
import { Grid } from "@material-ui/core";
import SearchBar from "./SearchBar";
import Logo from "../assets/images/logo.png";

function Header() {
  return (
    <Grid container className="background">
      <Grid item xs={6}  md={9}>
      <img className="logo" src={Logo}></img>
      </Grid>
      <Grid item xs={3} md={2} className="searchBar">
        <SearchBar />
      </Grid>
    </Grid>
  );
}

export default Header