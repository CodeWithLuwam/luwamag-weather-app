//  ******** API CALLS ********
// const base_url = process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:5000"
const base_url = "https://weather-report-server-j4vl.onrender.com"
const getLatLon = () => {
  axios
    .get(`${base_url}/location`, {
      params: {
        q: cityNameInput.value,
      },
    })
    .then((response) => {
      // console.log(response.data)
      // console.log(response.data[0].lat);
      let latitude = response.data[0].lat;
      // console.log(response.data[0].lon);
      let longtitude = response.data[0].lon;
      getWeather(longtitude, latitude);
    })
    .catch((error) => {
      console.log(error);
    });
};

const convertKelToFahren = (kelvin) => {
  // console.log(temperature)
  temperature = Math.floor(((kelvin - 273.15) * 9) / 5 + 32);
  // console.log(temperature)
  updateTemperature();
  updateLandscape();
  // validateSky();
};

const getWeather = (long, lati) => {
  axios
    // .get("http://127.0.0.1:5000/weather", {
      .get(`${base_url}/weather`, {
      params: {
        lon: long,
        lat: lati,
      },
    })
    .then((response) => {
      // console.log(response);
      const kelvin = response.data.main.temp;
      convertKelToFahren(kelvin);
      // console.log(response.data.weather[0].main);
    })
    .then(() => {
    })
    .catch((error) => {
      console.log(error);
    });
};

