import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../redux/store';
import {setCurrentWeatherInCity, WeatherResponseType} from '../redux/appReducer';
import styles from '../Weather/Weather.module.css';

export const Weather = () => {
    const dispatch = useDispatch()
    const weather = useSelector<AppRootStateType, WeatherResponseType>(state => state.app.cityWeather)
    const [title, setTitle] = useState<string>('')

    const getWeather = () => {
        dispatch(setCurrentWeatherInCity(title))
    }

    return (
        <div className={styles.weather}>
            <button onClick={getWeather}>Get weather in {title} </button>
            <input type={'text'} value={title} onChange={e => {
                setTitle(e.currentTarget.value)
            }}/>
            {!(Object.keys(weather).length === 0) && <div>
                <h2>City: {weather.location.name} , {weather.location.country}</h2>
                <p>Current temp: {weather.current.temp_c}</p>
                <p>Feels like {weather.current.feelslike_c}</p>
                <p>Clouds: {weather.current.cloud}</p>
                <p>Wind kph: {weather.current.wind_kph}</p>
            </div>}
        </div>
    )
        ;
};

