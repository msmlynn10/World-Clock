function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    if (losAngelesDateElement && losAngelesTimeElement) {
      losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
      losAngelesTimeElement.innerHTML = losAngelesTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  }

  // Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    if (parisDateElement && parisTimeElement) {
      parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
      parisTimeElement.innerHTML = parisTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.includes("/")
    ? cityTimeZone.split("/")[1].replace("_", " ")
    : cityTimeZone.replace("_", " ");
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  if (citiesElement) {
    citiesElement.innerHTML = `
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
      </div>
      <a href="/">All cities</a>
      `;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  let citiesSelectElement = document.querySelector("#city");
  if (citiesSelectElement) {
    citiesSelectElement.addEventListener("change", updateCity);
  }
  updateTime();
  setInterval(updateTime, 1000);
});
