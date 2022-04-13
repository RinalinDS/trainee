import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../redux/store';
import {setCurrentWeatherInCity, WeatherResponseType} from '../redux/appReducer';
import styles from '../Weather/Weather.module.css';

export const Weather = () => {
    const dispatch = useDispatch()
    const weather = useSelector<AppRootStateType, WeatherResponseType>(state => state.app.cityWeather)
    // const [title, setTitle] = useState<string>('')

    const getWeatherDebounced = (city: string) => {
        dispatch(setCurrentWeatherInCity(city))
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // setTitle(event.target.value)
        getWeatherDebounced(event.target.value)
    }
    const debouncedHandler = debounce(onChangeHandler, 1500)

    function debounce(cb: any, delay: number = 1500) {
        let timeout: NodeJS.Timeout;
        return (...args: any) => {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                cb(...args)
            }, delay)
        }
    }

    return (
        <div className={styles.weather}>
            <input type={'text'} placeholder={'Type a city name'} onChange={debouncedHandler}/>
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

