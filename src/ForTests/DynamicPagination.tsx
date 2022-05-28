import React, {useEffect, useState} from 'react';
import axios, {AxiosResponse} from 'axios';
import {photosType} from '../store/appReducer';
import s from './../Photos/Photos.module.css'


const DynamicPagination = () => {
    const [photos, setPhotos] = useState<photosType[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [isFetching, setIsFetching] = useState<boolean>( true)

    useEffect(() => {
        if (isFetching) {
            console.log('fetching')
            axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=10`)
                .then((res: AxiosResponse<photosType[]>) => {
                    setPhotos([...photos, ...res.data])
                    setCurrentPage(prevState => prevState + 1)
                })
                .finally(() => setIsFetching(false))
        }
    }, [isFetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])
    const scrollHandler = (event: any) => {
        if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setIsFetching(true)
        }

    }
    return (
        <div>
            {photos.map(m => <div key={m.id} className={s.photos}>
                <div>{m.id}. {m.title}</div>
                <img src={m.thumbnailUrl} alt={'thumbnail'}/>
            </div>)}
        </div>
    );
};

export default DynamicPagination;