import axios from 'axios';
import {WeatherResponseType} from '../store/appReducer';

const placeholderInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})
const omdbInstance = axios.create({
    baseURL: 'https://www.omdbapi.com/',

})
const weatherInstance = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/',
})


const OMDB_APIkey = 'c128d6a5'
const APIkeyWeather = '23de8120205d45f589a195634221104'


export const placeholderAPI = {
    getPhotos(amount: number) {
        return placeholderInstance.get(`photos?_start=0&_limit=${amount}`)
    }
}


export const omdbAPI = {
    getMovie(title: string) {
        return omdbInstance.get(`?apikey=${OMDB_APIkey}&t=${title}`)
    }
}

export const weatherAPI = {
    getCurrentWeatherInCity(city: string) {
        return weatherInstance.get<WeatherResponseType>(`current.json?key=${APIkeyWeather}&q=${city}`)
    },
    getForecast(city:string, days: number) {
        return weatherInstance.get<WeatherResponseType>(`forecast.json?key=${APIkeyWeather}&q=${city}&days=${days}`)
    }
}