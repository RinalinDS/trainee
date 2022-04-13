import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {appReducer, AppReducerActionType} from './appReducer';
import thunk, {ThunkAction} from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {rootWatcher} from './rootWatcher';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {cardsReducer} from './cardsReducer';


const saga = createSagaMiddleware()

const rootReducer = combineReducers({
    app: appReducer,
    cards: cardsReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, saga)))

export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionTypes>

export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

type AppActionTypes = AppReducerActionType

saga.run(rootWatcher)

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}