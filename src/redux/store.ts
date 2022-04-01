import {applyMiddleware, combineReducers, createStore} from 'redux';
import {appReducer, AppReducerActionType} from './appReducer';
import thunk, {ThunkAction} from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {rootWatcher} from './rootWatcher';


const saga = createSagaMiddleware()

const rootReducer = combineReducers({
    app: appReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk, saga))

export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionTypes>

export type AppRootStateType = ReturnType<typeof rootReducer>

type AppActionTypes = AppReducerActionType

saga.run(rootWatcher)