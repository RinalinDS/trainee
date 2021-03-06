import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../store/store';
import {photosType, requestPhotosAC} from '../../../store/appReducer';
import styles from './Photos.module.css'
import Flex from '../../common/Flex/Flex';
import {Button} from '../../common/Button/Button';


export const Photos = () => {
  const [amount, setAmount] = useState<number>(0)

  const dispatch = useDispatch()
  const photos = useSelector<AppRootStateType, photosType[]>(state => state.app.photos)

  const mappedPhotos = photos.map(m => <div key={m.id}><h2>{m.title}</h2>
      <Flex justify={'center'}> <img src={m.thumbnailUrl} alt={'movie poster'}/> </Flex>
    </div>
  )


  const getPhotos = () => {
    dispatch(requestPhotosAC(amount))
  }


  return (
    <div className={styles.photos}>
      <Button onClick={getPhotos}>Get {amount} photos</Button>
      <input type={'number'} value={amount} onChange={e => {
        setAmount(+e.currentTarget.value)
      }}/>
      <div>
        {mappedPhotos}
      </div>


    </div>
  );
}