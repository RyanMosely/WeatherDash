console.log("somethin");

window.onload = function(){
  buttonAreaEl.children().last().trigger("click");
}

var buttonAreaEl = $(".button-area");
var cityStatsEl = $(".city-stats");
var weatherCards = $(".weather-cards");
var statsCard = $(".statsCard");
var fiveDayTitle = $(".fiveDF");

console.log(buttonAreaEl.children().first());


weatherCards.hide();
statsCard.hide();




var momentDate = moment().format("MM/DD/YYYY");

var momentDateDayOne = moment().add(1, 'day').format("MM/DD/YYYY");
var momentDateDayTwo = moment().add(2, 'day').format("MM/DD/YYYY");
var momentDateDayThree = moment().add(3, 'day').format("MM/DD/YYYY");
var momentDateDayFour = moment().add(4, 'day').format("MM/DD/YYYY");
var momentDateDayFive = moment().add(5, 'day').format("MM/DD/YYYY");


cityStorage();



//city input area & search button
var cityInput = $(".city-input");
var searchButton = $(".search-button");

//city card buttons
var cityCardBtn = $(".city-card-btn");

$(document).on("click", ".city-card-btn", weather);

$(searchButton).on("click", makeCityBtn);

$(document).on("click")

/*
var cityButtons = $("<button>");
cityButtons.attr("type", "button");
cityButtons.attr("class", "city-card-btn btn btn-outline-secondary");
cityButtons.text("Secondary");
buttonAreaEl.append(cityButtons);
*/

function cityStorage(){

    
    for(var i = 0; i<localStorage.length; i++){
            
        var cityLoc = localStorage.getItem(localStorage.key(i));

        var cityButtons = $("<button>");
        cityButtons.attr("type", "button");
        cityButtons.attr("class", "city-card-btn btn btn-outline-secondary");
        cityButtons.text(cityLoc);
        console.log(cityButtons);
        buttonAreaEl.append(cityButtons);
    }
}

var storeArr =[];

function makeCityBtn() {


    //STORE THIS IN LOCAL STORAGE

    var cityButtons = $("<button>");
    cityButtons.attr("type", "button");
    cityButtons.attr("class", "city-card-btn btn btn-outline-secondary");
    cityButtons.text(cityInput.val());
    buttonAreaEl.append(cityButtons);
    
   
        localStorage.setItem(cityInput.val(), cityInput.val());

        console.log(localStorage.key(1));

       
    
    
    
    console.log(cityInput.val());
}



function weather() {

weatherCards.show();
statsCard.show();
fiveDayTitle.text("5-Day Forcast:")

//~~current day forcast~~//

    cityStatsEl.text(" ");
    

    var cityName = $(this).text()
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName+ "&units=imperial&APPID=19cbd846d1fb7013c59a434d03a94e92"

    var cityDivNameDateIcon = $("<h4>");
    var cityDivTemp = $("<div>");
    var cityDivHumid = $("<div>");
    var cityDivWind = $("<div>");

    var cityDivUv = $("<span>");
    var cityDivUvText = $("<div>");

    var weatherIcon = $("<img>");

    
   
    
    console.log(cityName);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        console.log(response.weather[0].icon+".png");

        ////////////////// Name/Date/WeatherIcon //////////////////

        weatherIcon.attr("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon+".png");
        console.log(weatherIcon);

        cityDivNameDateIcon.text(response.name + " " + '(' + momentDate + ')');
        cityDivNameDateIcon.append(weatherIcon);

        cityStatsEl.append(cityDivNameDateIcon);

        //current temp

        cityDivTemp.text("Temperature: " + response.main.temp + " °F");
        cityStatsEl.append(cityDivTemp, $("<br>"));

        //current hum

        cityDivHumid.text("Humidity: " + response.main.humidity + "%");
        cityStatsEl.append(cityDivHumid, $("<br>"));

        //current wind speed

        cityDivWind.text("Wind Speed: " +response.wind.speed + " MPH");
        cityStatsEl.append(cityDivWind, $("<br>"));

        //current UV index

        var cityCorLonArr=[];
        var cityCorLatArr=[];

        cityCorLonArr.push(response.coord.lon);
        cityCorLatArr.push(response.coord.lat);

        var cityLon = cityCorLonArr.toString();
        var cityLat = cityCorLatArr.toString();

        var queryURLTwo = "https://api.openweathermap.org/data/2.5/uvi?APPID=19cbd846d1fb7013c59a434d03a94e92&lat="+cityLat+"&lon="+cityLon;



    $.ajax({
        url: queryURLTwo,
        method: "GET"
    }).then(function(response){
        console.log(response);
        console.log(response.value);

        

        cityDivUv.text(response.value);
        cityDivUv.attr("class", "uV");
        console.log(cityDivUv);

        cityDivUvText.text("UV Index: ");
        //cityDivUvText.append(cityDivUv);
        cityStatsEl.append(cityDivUvText);
        cityDivUvText.append(cityDivUv);


        


    })

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//~~5 day forcast~~//

//date elements
var weatherDateOneEl = $(".weatherOneDate");

var weatherDateTwoEl = $(".weatherTwoDate");

var weatherDateThreeEl = $(".weatherThreeDate");

var weatherDateFourEl = $(".weatherFourDate");

var weatherDateFiveEl = $(".weatherFiveDate");

//icon elements
var weatherIconOne = $("<img>");
var weatherIconOneEl = $(".weatherOneIcon");
weatherIconOneEl.text(" ");

var weatherIconTwo = $("<img>");
var weatherIconTwoEl = $(".weatherTwoIcon");
weatherIconTwoEl.text(" ");

var weatherIconThree = $("<img>");
var weatherIconThreeEl = $(".weatherThreeIcon");
weatherIconThreeEl.text(" ");

var weatherIconFour = $("<img>");
var weatherIconFourEl = $(".weatherFourIcon");
weatherIconFourEl.text(" ");

var weatherIconFive = $("<img>");
var weatherIconFiveEl = $(".weatherFiveIcon");
weatherIconFiveEl.text(" ");

//temp elements
var weatherTempOneEl = $(".weatherOneTemp");

var weatherTempTwoEl = $(".weatherTwoTemp");

var weatherTempThreeEl = $(".weatherThreeTemp");

var weatherTempFourEl = $(".weatherFourTemp");

var weatherTempFiveEl = $(".weatherFiveTemp");

//humidity elements
var weatherHumOneEl = $(".weatherOneHum");

var weatherHumTwoEl = $(".weatherTwoHum");

var weatherHumThreeEl = $(".weatherThreeHum");

var weatherHumFourEl = $(".weatherFourHum");

var weatherHumFiveEl = $(".weatherFiveHum");





var queryURLThree = "https://api.openweathermap.org/data/2.5/forecast?APPID=19cbd846d1fb7013c59a434d03a94e92&units=imperial&lat="+cityLat+"&lon="+cityLon;




$.ajax({
    url: queryURLThree,
    method: "GET"
}).then(function(response){
    console.log(response);
    console.log(response.value);


//DAY ONE/////////////////////////////////////////

    //Day One date
    weatherDateOneEl.text(momentDateDayOne);

    //Day One icon
    weatherIconOne.attr("src", "https://openweathermap.org/img/wn/" +response.list[3].weather[0].icon+".png");
    console.log(weatherIconOne);
    weatherIconOneEl.append(weatherIconOne);

    //Day One temp
    weatherTempOneEl.text("Temp: " + response.list[3].main.temp + " °F")
    console.log(response.list[3].main.temp);

    //Day One humidity
    weatherHumOneEl.text("Humidity: " + response.list[3].main.humidity + "%")
    console.log(response.list[3].main.humidity);

    //cityDivUv.text(response.value)
    //cityStatsEl.append(cityDivUv);
    
//DAY TWO/////////////////////////////////////////

    //Day Two date
    weatherDateTwoEl.text(momentDateDayTwo);

    //Day Two icon
    weatherIconTwo.attr("src", "https://openweathermap.org/img/wn/" +response.list[11].weather[0].icon+".png");
    console.log(weatherIconTwo);
    weatherIconTwoEl.append(weatherIconTwo);

    //Day Two temp
    weatherTempTwoEl.text("Temp: " + response.list[11].main.temp + " °F")
    console.log(response.list[11].main.temp);

    //Day Two humidity
    weatherHumTwoEl.text("Humidity: " + response.list[11].main.humidity + "%")
    console.log(response.list[3].main.humidity);

//DAY THREE///////////////////////////////////////

    //Day Three date
    weatherDateThreeEl.text(momentDateDayThree);

    //Day Three icon
    weatherIconThree.attr("src", "https://openweathermap.org/img/wn/" +response.list[19].weather[0].icon+".png");
    console.log(weatherIconThree);
    weatherIconThreeEl.append(weatherIconThree);

    //Day Three temp
    weatherTempThreeEl.text("Temp: " + response.list[19].main.temp + " °F")
    console.log(response.list[19].main.temp);

    //Day Three humidity
    weatherHumThreeEl.text("Humidity: " + response.list[19].main.humidity + "%")
    console.log(response.list[3].main.humidity);

//DAY FOUR///////////////////////////////////////

    //Day Four date
    weatherDateFourEl.text(momentDateDayFour);
    console.log(response.list[27].dt_txt.slice(0, 10)); 

    //Day Four icon
    weatherIconFour.attr("src", "https://openweathermap.org/img/wn/" +response.list[27].weather[0].icon+".png");
    console.log(weatherIconFour);
    weatherIconFourEl.append(weatherIconFour);

    //Day Four temp
    weatherTempFourEl.text("Temp: " + response.list[27].main.temp + " °F")
    console.log(response.list[27].main.temp);

    //Day Four humidity
    weatherHumFourEl.text("Humidity: " + response.list[27].main.humidity + "%")
    console.log(response.list[3].main.humidity);

//DAY FIVE///////////////////////////////////////

    //Day Five date
    weatherDateFiveEl.text(momentDateDayFive);
    console.log(response.list[35].dt_txt.slice(0, 10));

    //Day Five icon
    weatherIconFive.attr("src", "https://openweathermap.org/img/wn/" +response.list[35].weather[0].icon+".png");
    console.log(weatherIconFive);
    weatherIconFiveEl.append(weatherIconFive);

    //Day Five temp
    weatherTempFiveEl.text("Temp: " + response.list[35].main.temp + " °F")
    console.log(response.list[35].main.temp);

    //Day Five humidity
    weatherHumFiveEl.text("Humidity: " + response.list[35].main.humidity + "%")
    console.log(response.list[3].main.humidity);

})


///////////////////////////
        console.log(cityCorLonArr);
        console.log(cityCorLatArr);

        console.log(cityLon);
        console.log(cityLat);


    })
}


function fiveDay(){



}


