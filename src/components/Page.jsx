import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Map from "./Map";
import Legend from "./Legend";
import Header from "./Header";
import LoadCountriesTask from "../tasks/LoadCountriesTask";

const Page = () => {
  const [countries, setCountries] = useState([]);
  const load = () => {
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load(setCountries);
  };

  useEffect(load, []);
  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>     
           <Header />
          <div>
            <Map />
            <Legend />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
