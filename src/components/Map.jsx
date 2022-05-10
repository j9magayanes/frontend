import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "./Map.css";
import Screen from "./Screen";
import { connect, useDispatch, useSelector, useStore } from "react-redux";
import { ADD_COUNTRY, LOAD_DATA, fetchData } from "../actionCreators";
import { Button } from "@mui/material";
import { categoryReducer, dataReducer } from "../rootReducer";
import { useCarbonData } from "../useCarbonData";
import { useWildfireData } from "../useWildfireData";
import { useEarthquakeData, useEarthquakeAverage } from "../useEarthquakeData"; 
import { useNewsData } from "../useNewsData";

function Map() {
  const dispatch = useDispatch();
  const store = useStore();
  const category = useSelector(() => store.getState().categoryReducer.category);
  const carbonData = useCarbonData();
  const newsData = useNewsData();
  const wildfireData = useWildfireData();
  const earthquakeData = useEarthquakeData();
  const carbonAverage  = 229.92;
  const wildfireAverage = 325.73;
  const moneyAverage = 124.45;
  const datas = [];
  const [country, setCountry] = useState("");

  var categories = [];

  let average;
  if (category) {
    switch (category) {
      case "carbon":
        average = carbonAverage;
        break;
      case "wildfire":
        average = wildfireAverage;
        break;
      case "earthquake":
        average = moneyAverage;
        break;
      default:
        console.log("no category");
    }
  }

  if (newsData && category) {
    newsData.items.map((data) => {
      if (data.category === category) {
        return categories.push(data);
      }
    });
  }

  if (carbonData && category === "carbon") {
    carbonData.items.map((data) => {
      return datas.push(data);
    });
  }

  if (wildfireData && category === "wildfire") {
    wildfireData.items.map((data) => {
      return datas.push(data);
    });
  }

  if (earthquakeData && category === "earthquake") {
    earthquakeData.items.map((data) => {
      return datas.push(data);
    });
  }

  function handleOnClick(country) {
    dispatch({
      type: ADD_COUNTRY,
      country: country,
    });
  }

  useEffect(() => {}, [store.getState().categoryReducer.category]);

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={4}
      maxZoom={10}
      maxBounds={[
        [-90, -180],
        [90, 180],
      ]}
      bounceAtZoomLimits={false}
    >

      {datas.map((news) => (
        <Circle
          center={[news.lat, news.long]}
          color={
            news.value1 <= average / 2
              ? "green"
              : 3 * (average / 2) > news.value1
              ? "red"
              : "yellow"
          }
          radius={category === "earthquake" ? 20000 : 200000}
        ></Circle>
      ))}
      {categories.map(
        (news) => (
          <Marker
            key={news._id}
            position={[news.lat, news.long]}
            eventHandlers={{
              click: () => {
                dispatch({
                  type: ADD_COUNTRY,
                  country: news.country,
                });
              },
            }}
          >
            <Popup keepInView={true} className="popUp">
              <Screen />
            </Popup>
          </Marker>
        )
      )}
    </MapContainer>
  );
}

function mapStateToProps(state) {
  const { country } = state;
  return { country: state.country };
}

export default connect(mapStateToProps)(Map);
function news(
  news ){
  throw new Error("Function not implemented.");
}

function dispatch(arg0) {
  throw new Error("Function not implemented.");
}
