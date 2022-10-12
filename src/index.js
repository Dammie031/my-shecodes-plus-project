function weatherDate() {
    let now = new Date();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
  
    let year = now.getFullYear();
    let day = days[now.getDay()];
    let month = months[now.getMonth()];
    let date = now.getDate();
    let hour = now.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minute = now.getMinutes();
    if (minute < 10) {
      minute = `0${minute}`;
    }
  
    let currentDate = document.querySelector("#current-date");
    currentDate.innerHTML = `${day}, ${month} ${date}, ${year} </br> ${hour}:${minute}`;
  }
  weatherDate();
  
  function showTemperature(response) {
    let cityName = document.querySelector("#city-name");
    cityName.innerHTML = response.data.name;
    let cityTemp = document.querySelector("#temp");
    cityTemp.innerHTML = Math.round(response.data.main.temp);
    let cityHumidity = document.querySelector("#humidity");
    cityHumidity.innerHTML = response.data.main.humidity;
    let cityWind = document.querySelector("#wind");
    cityWind.innerHTML = Math.round(response.data.wind.speed);
    let cityDescription = document.querySelector("#description");
    cityDescription.innerHTML = response.data.weather[0].main;
  }
  function search(city) {
    let apiKey = "cd173a006b0e51dac58c6d8064c94178";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }
  
  function searching(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
  
    search(city);
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", searching);
  
  function temperatureLink(event) {
    event.preventDefault();
    let tempLink = document.querySelector("#temp");
    tempLink.innerHTML = 27;
  }
  
  let celsiusLink = document.querySelector("#celsius-link");
  celsiusLink.addEventListener("click", temperatureLink);
  
  function temperatureClick(event) {
    event.preventDefault();
    let tempLink = document.querySelector("#temp");
    tempLink.innerHTML = 81;
  }
  
  let fahrenheitLink = document.querySelector("#fahrenheit-link");
  fahrenheitLink.addEventListener("click", temperatureClick);
  
  search("Lagos");
  