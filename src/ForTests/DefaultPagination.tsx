import React, {useEffect} from 'react';
import {Paginator} from '../components/Pagination/Pagination';
import {useAppSelector} from '../redux/store';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {photosType, setPhotosAC} from '../redux/appReducer';
import s from '../Photos/Photos.module.css';
import {setTotalItemsCount} from '../redux/cardsReducer';

const DefaultPagination = () => {
    const currentPage = useAppSelector<number>(state => state.cards.currentPage)
    const totalItemsCount = useAppSelector<number>(state => state.cards.totalItemsCount)
    const photos = useAppSelector<photosType[]>(state => state.app.photos)
    const amountOfElementsToShow = useAppSelector<number>(
        state => state.cards.amountOfElementsToShow,
    )
    const dispatch = useDispatch()
    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${amountOfElementsToShow}`)
            .then((res)=> {
                dispatch(setPhotosAC(res.data))
                    dispatch(setTotalItemsCount(+res.headers['x-total-count']))

            })

    }, [currentPage, amountOfElementsToShow, dispatch])
    return (
        <div>
            <div>
                {photos.map(m => <div key={m.id} className={s.photos}>
                    <div>{m.id}. {m.title}</div>
                    <img src={m.thumbnailUrl} alt={'photos'}/>
                </div>)}
            </div>
            <Paginator currentPage={currentPage} amountOfElementsToShow={amountOfElementsToShow} totalItemsCount={totalItemsCount} itemName={'packs'}/>
        </div>
    );
};

export default DefaultPagination;