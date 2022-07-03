
$.ajax({
    type: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19",
    success: (response) => {
        $('.js--city').html(JSON.stringify(response.name).replace(/\"/g, ""))
        $('.js--temp').html(JSON.stringify(Math.round(response.main.temp)) + '&degC')
        $('.js--pressure').html(JSON.stringify(response.main.pressure) + ' hPa')
        $('.js--description').html(JSON.stringify(response.weather[0].description).replace(/\"/g, ""))
        $('.js--humidity').html(JSON.stringify(response.main.humidity) + '%')
        $('.js--speed').html(JSON.stringify(Math.round(response.wind.speed * 3.6)) + ' km/h')
        $('.js--deg').html((function () {
            if (JSON.stringify(Number(response.wind.deg)) === 0) {
                return 'North'
            }
            if (JSON.stringify(Number(response.wind.deg)) === 90) {
                return 'East'
            }
            if (JSON.stringify(Number(response.wind.deg)) === 180) {
                return 'South'
            }
            if (JSON.stringify(Number(response.wind.deg)) === 270) {
                return 'West'
            }
            if (JSON.stringify(Number(response.wind.deg)) > 90 && JSON.stringify(Number(response.wind.deg)) < 180) {
                return 'East/south'
            }
            if (JSON.stringify(Number(response.wind.deg)) > 180 && JSON.stringify(Number(response.wind.deg)) < 270) {
                return 'South/west'
            }
            if (JSON.stringify(Number(response.wind.deg)) > 0 && JSON.stringify(Number(response.wind.deg)) < 90) {
                return 'North/east'
            }
            if (JSON.stringify(Number(response.wind.deg)) > 270 && JSON.stringify(Number(response.wind.deg)) < 360) {
                return 'North/west'
            }

        }))
        $('.js--icon').html('<img src="http://openweathermap.org/img/w/'+JSON.stringify(response.weather[0].icon).replace(/\"/g, "")+'.png">');
    }
})