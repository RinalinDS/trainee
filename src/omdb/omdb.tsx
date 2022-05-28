import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../store/store';
import {movieType, requestMovieByTitleAC} from '../store/appReducer';
import styles from './Omdb.module.css'

export const Omdb = () => {
    const [title, setTitle] = useState<string>('')

    const dispatch = useDispatch()
    const movie = useSelector<AppRootStateType, movieType>(state => state.app.movies)


    const getMovie = () => {
        dispatch(requestMovieByTitleAC(title))
    }


    return (
        <div className={styles.photos}>
            <button onClick={getMovie}>Get {title} movie</button>
            <input type={'text'} value={title} onChange={e => {
                setTitle(e.currentTarget.value)
            }}/>
            {movie.Error && <div>{movie.Error}</div>}
            {!(Object.keys(movie).length === 0)  && !movie.Error && <div>
                <h2>{movie.Title}</h2>
                <p><img src={movie.Poster} alt={'movie poster'}/></p>
                <p>Plot:<q>{movie.Plot} </q></p>
                <p>Movie year: {movie.Year}</p>
            </div>}

        </div>
    );
}