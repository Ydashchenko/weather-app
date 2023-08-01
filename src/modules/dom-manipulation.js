import { getData, cityName, mSystem } from "./data"

export async function addForecast() {
    try {
        const cityData = await getData(cityName.value)

        const forecast = document.getElementById('forecast')
        const genCityCountry = document.getElementById('general-city-country')
        const temperature = document.getElementById('temperature')
        const feelsLike = document.getElementById('feels-like')
        const humidity = document.getElementById('humidity')
        const wind = document.getElementById('wind')
        const switchButton = document.getElementById('switch')
    
        //setBackground(cityData.current.condition.text)
    
        genCityCountry.innerHTML = `It's ${cityData.current.condition.text} in ${cityData.location.name}, ${cityData.location.country}`
        humidity.innerHTML = `Humidity: ${cityData.current.humidity} %`
        if (mSystem === 'C') {
            temperature.innerHTML = `Temperature: ${cityData.current.temp_c} °C`
            feelsLike.innerHTML = `Feels like ${cityData.current.feelslike_c} °C`
            wind.innerHTML = `Wind: ${cityData.current.wind_kph} km/h`
            switchButton.innerHTML = `Switch to °F and mph`
        }
    
        if (mSystem === 'F') {
            temperature.innerHTML = `Temperature: ${cityData.current.temp_f} °F`
            feelsLike.innerHTML = `Feels like ${cityData.current.feelslike_f} °F`
            wind.innerHTML = `Wind: ${cityData.current.wind_mph} mph`
            switchButton.innerHTML = `Switch to °C and km/h`
        }
    
        forecast.style.display = 'block'
    } catch (error) {
        console.error('An error occurred in getData func', error)
    }
}

/*function setBackground(weather) {
    const main = document.querySelector('main')
    main.style.backgroundImage = 'url('')'

}
*/