function updateTime() {
    let cityElement = document.querySelector("#auckland");
    if (cityElement) {
        let cityOneDate = cityElement.querySelector(".date") // code says find the date element in tanzania
        let cityOneTime = cityElement.querySelector(".time"); // find time element
        let cityMwanza = moment().tz("Pacific/Auckland");

        cityOneDate.innerHTML = cityMwanza.format("MMMM Do YYYY");

        cityOneTime.innerHTML = cityMwanza.format("h:mm:ss[ <small>]A[</small>]");

    }

    let cityTwoElement = document.querySelector("#ladysmith");
    if (cityTwoElement) {
        let cityTwoDate = cityTwoElement.querySelector(".date") // code says find the date element in tanzania
        let cityTwoTime = cityTwoElement.querySelector(".time"); // find time element
        let cityLagos = moment().tz("South Africa/Ladysmith");

        cityTwoDate.innerHTML = cityLagos.format("MMMM Do YYYY");
        cityTwoTime.innerHTML = cityLagos.format("h:mm:ss [<small>]A[</small>]");
    }

};

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = cityTimeZone;

    citiesElement.innerHTML = `
     <div class="city">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
                </div>
                <div class="time">${cityTime.format("h:mm:ss")}<small> ${cityTime.format("A")}</small></div>
                </div>` ;
}

updateTime();
setInterval(updateTime, 1000);


let citiSelect = document.querySelector("#citi");

citiSelect.addEventListener("change", updateCity);