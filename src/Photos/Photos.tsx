import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../store/store';
import {photosType, requestPhotosAC} from '../store/appReducer';
import styles from './Photos.module.css'
import Flex from '../Flex';


export const Photos = () => {
    const [amount, setAmount] = useState<number>(0)

    const dispatch = useDispatch()
    const photos = useSelector<AppRootStateType, photosType[]>(state => state.app.photos)

    const mappedPhotos = photos.map(m => <div><h2>{m.title}</h2>
           <Flex justify={'center'}> <img src={m.thumbnailUrl} alt={'movie poster'}/> </Flex>
        </div>
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