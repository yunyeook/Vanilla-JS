const APIKey = 'b1f9e763beb74e3ed6a6a444a12aa41d';

function success(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  //units = metric : 섭씨로 온도 확인

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKey}&units=metric`;

  //개발자 도구에서 Network 들어가서 Fetch에서 볼수 있음.
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
    });
  console.log(url);
}
function error() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(success, error);
