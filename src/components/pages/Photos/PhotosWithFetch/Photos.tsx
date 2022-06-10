import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {photosType, setPhotosAC} from '../../../../store/appReducer';
import {AppRootStateType} from '../../../../store/store';
import Flex from '../../../common/Flex/Flex';
import styles from './Photos.module.css'
import {Button} from '../../../common/Button/Button';


export const PhotosWithFetch = () => {
  const [amount, setAmount] = useState<number>(0)

  const dispatch = useDispatch()
  const photos = useSelector<AppRootStateType, photosType[]>(state => state.app.photos)

  const mappedPhotos = photos.map(m => <div key={m.id}><h2>{m.title}</h2>
      <Flex justify={'center'}> <img src={m.thumbnailUrl} alt={'movie poster'}/> </Flex>
    </div>
  )


  const getPhotos = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_limit=${amount}`)
    if (response.ok) {
      console.log(response)
      let data = await response.json()
      console.log(data)
      dispatch(setPhotosAC(data))
    } else {
      console.warn('something wrong with request')
    }
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