import React, {ChangeEvent} from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import s from './Page.module.css'
import {useDispatch} from 'react-redux';
import {setAmountOfElementsToShow, setCurrentPage} from '../../redux/cardsReducer';

type propsType = {
  currentPage: number
  totalItemsCount: number
  amountOfElementsToShow: number
  itemName: string
}

const options = [2, 3, 4, 5, 10]

export const Paginator = ({currentPage, totalItemsCount, amountOfElementsToShow, itemName}: propsType) => {

  const pages = Math.ceil(totalItemsCount / amountOfElementsToShow)

  const dispatch = useDispatch()

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    dispatch(setCurrentPage(value))
  }
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setAmountOfElementsToShow(+event.target.value))
  }

  return (
    <Stack>
      <Stack spacing={1} className={s.pages} direction="row">
        <Pagination
          count={pages}
          color="primary"
          shape="rounded"
          sx={{marginY: 3}}
          page={currentPage}
          onChange={handlePageChange}
          siblingCount={1}
        />
        <Stack spacing={1} className={s.pages} direction="row">
          <span> Show:</span>
          <select
            value={amountOfElementsToShow}
            onChange={handleSelectChange}
            className={s.select}
          >
            {options.map(m => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <span> {itemName} per page</span>
        </Stack>
      </Stack>
    </Stack>
  )
}
