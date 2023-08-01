import _ from 'lodash'
import './style.css';
import { addForecast } from './modules/dom-manipulation';
import { cityName, toggleMSystem, getCityNameFromInput } from './modules/data'; 


init()

const searchButton = document.getElementById('search')
searchButton.addEventListener('click', (e) => {
    e.preventDefault()
    getCityNameFromInput()
    addForecast()
})

const toggleButton = document.getElementById('switch')
toggleButton.addEventListener('click', () => {
    toggleMSystem()
    addForecast()
})

function init() {
    cityName.value = `kremenchuk`
    addForecast()
}
