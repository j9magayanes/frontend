import { useState, useEffect } from 'react';


export const useEarthquakeData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://immense-inlet-95240.herokuapp.com/api/data/money")
                  .then((res) => res.json())
                  .then((json) => {
                      setData({
                          items: json,
                      });
                  })
  }, []);
  return data;
};

export const useEarthquakeAverage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://immense-inlet-95240.herokuapp.com/api/data/money/average")
                  .then((res) => res.json())
                  .then((json) => {
                      setData({
                          items: json,
                      });
                  })
  }, []);
  return data;
};


