import {call, put, takeEvery} from 'redux-saga/effects';
import {AxiosResponse} from 'axios';
import {omdbAPI, placeholderAPI} from '../api/API';

// initial state

const initialState: AppReducerStateType = {
    photos: [],

    movies: {} as movieType
}

// reducer

export const appReducer = (state: AppReducerStateType = initialState, action: AppReducerActionType): AppReducerStateType => {
    switch (action.type) {
        case 'SET_PHOTOS':
            return {...state, photos: [...action.payload.photos]}
        case 'SET_MOVIE':
            // @ts-ignore
            return {...state, movies: {...action.payload.movie}}


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


// Thunks
//
// export const setPhotosTC = (amount: number): ThunkType => dispatch => {
//     traineeAPI.getPhotos(amount)
//         .then(res => dispatch(setPhotosAC(res.data)))
//         .catch(e => {
//             console.warn()
//         })
//
// }


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
    ReturnType<typeof setMovieAC>


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
}

export type movieType = {
    Title: string
    Year: string
    Poster: string
    Plot: string
    Error: string
}
