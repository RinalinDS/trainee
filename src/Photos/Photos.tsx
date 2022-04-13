import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../redux/store';
import {photosType, requestPhotosAC} from '../redux/appReducer';
import styles from './Photos.module.css'


export const Photos = () => {
    const [amount, setAmount] = useState<number>(0)

    const dispatch = useDispatch()
    const photos = useSelector<AppRootStateType, photosType[]>(state => state.app.photos)

    const mappedPhotos = photos.map(m => <p><h2>{m.title}</h2>
            <img src={m.thumbnailUrl} alt={'movie poster'}/>
        </p>
    )


    const getPhotos = () => {
        dispatch(requestPhotosAC(amount))
    }


    return (
        <div className={styles.photos}>
            <button onClick={getPhotos}>Get {amount} photos</button>
            <input type={'number'} value={amount} onChange={e => {
                setAmount(+e.currentTarget.value)
            }}/>
            <div>
                {mappedPhotos}
            </div>


        </div>
    );
}