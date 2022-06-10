import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../store/store';
import {
  getForecast,
  setCurrentWeatherInCity,
  setForecastWeatherForCurrentCity,
  WeatherResponseType
} from '../../../store/appReducer';
import styles from './Weather.module.css';
import {useDebounce} from '../../../hooks'

export const Weather = () => {
  const dispatch = useDispatch()
  const weather = useSelector<AppRootStateType, WeatherResponseType>(state => state.app.cityWeather)
  const forecastWeather = useSelector<AppRootStateType, any>(state => state.app.forecastWeather)

  const [value, setValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(value, 1000)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    dispatch(setCurrentWeatherInCity(debouncedValue))
    dispatch(setForecastWeatherForCurrentCity({}))
  }, [debouncedValue, dispatch])

  const OnGetForecastClickHandler = () => {
    dispatch(getForecast(weather.location.name, 3))
  }
  console.log(forecastWeather)
  return (
    <div className={styles.weather}>
      <input type={'text'} placeholder={'Type a city name'} onChange={handleChange}/>
      {(Object.keys(weather).length !== 0) && <div>
        <h2>City: {weather.location.name} , {weather.location.country}</h2>
        <p>Current temp: {weather.current.temp_c} c</p>
        <p>Feels like {weather.current.feelslike_c} c</p>
        <p>Clouds: {weather.current.cloud}</p>
        <p>Wind: {weather.current.wind_kph} kph</p>
        <p> Would you like to get forecast in {weather.location.name} for let's say 3 days? </p>
        <button onClick={OnGetForecastClickHandler}>DEW IT</button>
        {(Object.keys(forecastWeather).length !== 0) && <div>
          <div>Here's what we got for you</div>
          {forecastWeather.forecast.forecastday.map((m: any) => {
            return (
              <>
                <div> date : {m.date} </div>
                <div> sunrise: {m.astro.sunrise}, sunset: {m.astro.sunset}  </div>
                <div> Max temp: {m.day.maxtemp_c}, Min Temp: {m.day.mintemp_c}  </div>
              </>
            )
          })}
        </div>}
      </div>}

    </div>
  )
}

