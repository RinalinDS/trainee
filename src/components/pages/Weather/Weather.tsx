import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../store/store';
import {setCurrentWeatherInCity, WeatherResponseType} from '../../../store/appReducer';
import styles from './Weather.module.css';
import {useDebounce} from '../../../hooks'

export const Weather = () => {
  const dispatch = useDispatch()
  const weather = useSelector<AppRootStateType, WeatherResponseType>(state => state.app.cityWeather)

  const [value, setValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(value, 1000)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    dispatch(setCurrentWeatherInCity(debouncedValue))
  }, [debouncedValue, dispatch])


  return (
    <div className={styles.weather}>
      <input type={'text'} placeholder={'Type a city name'} onChange={handleChange}/>
      {(Object.keys(weather).length !== 0) && <div>
        <h2>City: {weather.location.name} , {weather.location.country}</h2>
        <p>Current temp: {weather.current.temp_c} c</p>
        <p>Feels like {weather.current.feelslike_c} c</p>
        <p>Clouds: {weather.current.cloud}</p>
        <p>Wind: {weather.current.wind_kph} kph</p>
      </div>}
    </div>
  )
}

