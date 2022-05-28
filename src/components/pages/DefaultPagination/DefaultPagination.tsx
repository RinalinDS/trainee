import React, {FC, useEffect} from 'react';
import {PaginatorMUI} from '../../common/Pagination MUI/PaginatorMUI';
import {useAppSelector} from '../../../store/store';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {photosType, setPhotosAC} from '../../../store/appReducer';
import s from '../Photos/Photos.module.css';
import {setTotalItemsCount} from '../../../store/cardsReducer';

const DefaultPagination: FC = () => {
  // TODO убрать MaterialUI
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
            <PaginatorMUI currentPage={currentPage} amountOfElementsToShow={amountOfElementsToShow} totalItemsCount={totalItemsCount} itemName={'packs'}/>
        </div>
    );
};

export default DefaultPagination;