import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Newslist.css';
import News from "./News"
import { connect, useDispatch, useSelector, useStore } from "react-redux";

function Newslist() {
  const dispatch = useDispatch();
  const state = useState();
  const store = useStore();
  const category = useSelector(() => store.getState().country);
  const [ country, setCountry] = useState('')



  return  <>
      <div className="scroll">
      <Search/>
      <News/>
      </div>
      </>
}


export default Newslist;
