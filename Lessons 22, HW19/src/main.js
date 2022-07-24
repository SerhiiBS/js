

$.ajax({
    type: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19",
    success: (response) => {
        $('.src--city').html(response.name)
        $('.src--temp').html(Math.round(response.main.temp) + '&degC')
        $('.src--pressure').html(response.main.pressure + ' hPa')
        $('.src--description').html(response.weather[0].description)
        $('.src--humidity').html(response.main.humidity + '%')
        $('.src--speed').html(Math.round(response.wind.speed * 3.6) + ' km/h')
        $('.src--deg').html((function () {
            if (response.wind.deg === 0) {
                return 'North'
            }
            if (response.wind.deg === 90) {
                return 'East'
            }
            if (response.wind.deg === 180) {
                return 'South'
            }
            if (response.wind.deg === 270) {
                return 'West'
            }
            if (response.wind.deg > 90 && response.wind.deg < 180) {
                return 'East/south'
            }
            if (response.wind.deg > 180 && response.wind.deg < 270) {
                return 'South/west'
            }
            if (response.wind.deg > 0 && response.wind.deg < 90) {
                return 'North/east'
            }
            if (response.wind.deg > 270 && response.wind.deg < 360) {
                return 'North/west'
            }

        }))
        $('.src--icon').html('<img src="http://openweathermap.org/img/w/' + response.weather[0].icon + '.png">');

    }
})