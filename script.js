let main_temp = document.getElementById("main-temp");
let min_temp = document.getElementById("min-temp");
let max_temp = document.getElementById("max-temp");
let city = document.getElementById("city");
let daysCard = document.getElementById("days");

function showTemp(data, days) {
  innerHTML = "";
  for (let index = 1; index != days + 1; index++) {
    const element = data[`day${index}`];
    daysCard.innerHTML += `<div class=" col-4 secondary-temp">
                      <div class="d-flex flex-column">
                      <div><img class="" src="https://v5i.tutiempo.net/wi/01/90/${element.icon}.png"></div>
                          <div class="">${element.text}</div>
                          <div class="temp fw-bold">
                             ${element.temperature_max}
                          </div>
                          <div class="temp fw-bold">
                             ${element.temperature_min}
                          </div>
                      </div>
                  </div>`;
  }
}

fetch("https://api.tutiempo.net/json/?lan=de&apid=zwDX4azaz4X4Xqs&lid=3768")
  .then((response) => response.json())
  .then((data) => {
    const today = new Date();
    showTemp(data, 3);
    main_temp.innerText = data.hour_hour[`hour${today.getHours()}`].temperature;
    city.innerText = data.locality.name;
    min_temp.innerText = data.day1.temperature_min;
    max_temp.innerText = data.day1.temperature_max;
  });
