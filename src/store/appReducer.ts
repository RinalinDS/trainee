import {call, put, takeEvery} from 'redux-saga/effects';
import {AxiosResponse} from 'axios';
import {omdbAPI, placeholderAPI, weatherAPI} from '../api/API';
import {ThunkType} from './store';

// initial state

const initialState: AppReducerStateType = {
  photos: [],
  movies: {} as movieType,
  cityWeather: {} as WeatherResponseType,
  forecastWeather: {}

}

// reducer

export const appReducer = (state: AppReducerStateType = initialState, action: AppReducerActionType): AppReducerStateType => {
  switch (action.type) {
    case 'SET_PHOTOS':
      return {...state, photos: [...action.payload.photos]}
    case 'SET_MOVIE':
      // @ts-ignore
      return {...state, movies: {...action.payload.movie}}
    case 'SET_CURRENT_WEATHER':
      return {...state, cityWeather: {...action.payload.cityWeather}}
    case 'SET_FORECAST':
      return {...state, forecastWeather: {...action.payload.data}}
    default:
      return state
  }
}

// Action Creators

// export const setPhotosAC = (photos: photosType[]) => ({ type: 'SET_PHOTOS', payload: {photos}})
export const setPhotosAC = (photos: photosType[]) => ({type: 'SET_PHOTOS', payload: {photos}} as const)
export const requestPhotosAC = (amount: number) => ({type: 'REQUEST_PHOTOS', payload: {amount}} as const)

export const setMovieAC = (movie: Object) => ({type: 'SET_MOVIE', payload: {movie}} as const)
export const requestMovieByTitleAC = (title: string) => ({type: 'REQUEST_MOVIE', payload: {title}} as const)
export const setCurrentCityWeatherAC = (cityWeather: WeatherResponseType) => ({
  type: 'SET_CURRENT_WEATHER',
  payload: {cityWeather}
} as const)

export const setForecastWeatherForCurrentCity = (data: any) => {
  return {
    type: 'SET_FORECAST',
    payload: {data}
  } as const
}
export type SetForecastType = ReturnType<typeof setForecastWeatherForCurrentCity>

// Thunks

export const setCurrentWeatherInCity = (city: string): ThunkType => async dispatch => {
  try {
    const response = await weatherAPI.getCurrentWeatherInCity(city)
    dispatch(setCurrentCityWeatherAC(response.data))
  } catch (e) {
    console.warn(e)
  }
}

export const getForecast = (city: string, days: number): ThunkType => async dispatch => {
  try {
    const response = await weatherAPI.getForecast(city, days)
    console.log(response)
    dispatch(setForecastWeatherForCurrentCity(response.data))
  } catch (e) {
    console.warn(e)
  }
}

// Sagas


export function* setPhotosWorker(action: requestPhotosType) {
  try {
    const res: AxiosResponse<photosType[]> = yield call(placeholderAPI.getPhotos, action.payload.amount)
    yield put(setPhotosAC(res.data))
  } catch (e) {
    console.warn(e)
  }
}

export function* setMovieWorker(action: requestMovieByTitleACType) {
  try {
    const res: AxiosResponse = yield call(omdbAPI.getMovie, action.payload.title)
    yield put(setMovieAC(res.data))
  } catch (e) {
    console.warn(e)
  }
}

export function* AppWatcher() {
  yield takeEvery('REQUEST_PHOTOS', setPhotosWorker)
  yield takeEvery('REQUEST_MOVIE', setMovieWorker)
}

// Types
type requestPhotosType = ReturnType<typeof requestPhotosAC>
type requestMovieByTitleACType = ReturnType<typeof requestMovieByTitleAC>

export type AppReducerActionType =
  ReturnType<typeof setPhotosAC> |
  ReturnType<typeof requestPhotosAC> |
  ReturnType<typeof requestMovieByTitleAC> |
  ReturnType<typeof setMovieAC> |
  ReturnType<typeof setCurrentCityWeatherAC> |
  SetForecastType


export type photosType = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}
export type AppReducerStateType = {
  photos: Array<photosType>
  movies: movieType
  cityWeather: WeatherResponseType
  forecastWeather: any
}

export type movieType = {
  Title: string
  Year: string
  Poster: string
  Plot: string
  Error: string
}

export type WeatherResponseType = {
  location: {
    name: string
    country: string
  }
  current: {
    temp_c: number
    wind_kph: number
    cloud: number
    feelslike_c: number
  }
}