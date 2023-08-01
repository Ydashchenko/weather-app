let cityName = { value: '' }
let mSystem = 'C'

export function toggleMSystem() {
    mSystem === 'C' ? mSystem = 'F' : mSystem = 'C'
}

export function getCityNameFromInput() {
    if (!document.getElementById('enter-city').value) {
        alert('Enter city name, please.')
    } else {
        cityName.value = document.getElementById('enter-city').value
    }
}

export async function getData(cityName) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=4ea5ff7237674b3481e110340233007&q=${cityName}`
    const response = await fetch(apiUrl, {mode: 'cors'})
    const cityData = await response.json()
    if (cityData.error) {
        alert(cityData.error.message)
        throw new Error(cityData.error.message)
    }
    return cityData
}

export { cityName, mSystem }