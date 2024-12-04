setInterval(function () {
    let cityOne = document.querySelector("#mwanza");
    let cityOneDate = cityOne.querySelector(".date") // code says find the date element in tanzania
    let cityOneTime = cityOne.querySelector(".time"); // find time element
    let cityMwanza = moment().tz("Tanzania Mwanza");

    cityOneDate.innerHTML = cityMwanza.format("MMMM Do YYYY");

    cityOneTime.innerHTML = cityMwanza.format("h:mm:ss[ <small>]A[</small>]");


    let cityTwo = document.querySelector("#lagos");
    let cityTwoDate = cityTwo.querySelector(".date") // code says find the date element in tanzania
    let cityTwoTime = cityTwo.querySelector(".time"); // find time element
    let cityLagos = moment().tz("Nigeria Lagos");

    cityTwoDate.innerHTML = cityLagos.format("MMMM Do YYYY");
    cityTwoTime.innerHTML = cityLagos.format("h:mm:ss [<small>]A[</small>]");
}, 1000);


