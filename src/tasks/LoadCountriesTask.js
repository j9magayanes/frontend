import countries from "../data/countries.json";

class LoadCountriesTask{
    load = (setState) => {
        setState(countries.features);
    }
}

export default LoadCountriesTask;