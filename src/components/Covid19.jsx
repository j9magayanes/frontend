import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import CovidMap from "./CovidMap";
import Legend from "./Legend";
import LoadCountriesTask from "../tasks/LoadCountriesTask";

const Covid19 = () => {
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
          <div>
            <CovidMap />
            <Legend />
          </div>
        </div>
      )}
    </div>
  );
};

export default Covid19;
