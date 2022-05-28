// initial state

const initialState: initialStateTypeForPaginationReducer = {
    currentPage: 1,
    totalItemsCount: 100,
    amountOfElementsToShow: 3
}

// reducer

export const cardsReducer = (state: initialStateTypeForPaginationReducer = initialState, action: cardsReducerActionType): initialStateTypeForPaginationReducer => {
    switch (action.type) {
        case 'SET_AMOUNT':
            return {...state, amountOfElementsToShow: action.amount}
        case 'SET_PAGE':
            return {...state, currentPage: action.pageNumber}
        case 'SET_COUNT':
            return {...state, totalItemsCount: action.count}
        default:
            return state
    }
}

// Action Creators

export const setCurrentPage = (pageNumber: number) => ({type: 'SET_PAGE', pageNumber} as const)
export const setAmountOfElementsToShow = (amount: number) => ({type: 'SET_AMOUNT', amount} as const)
export const setTotalItemsCount = (count: number) => ({type: 'SET_COUNT', count} as const)


// Thunks


// Sagas


// Types

type initialStateTypeForPaginationReducer = {
    currentPage: number
    totalItemsCount: number
    amountOfElementsToShow: number
}

export type cardsReducerActionType = ReturnType<typeof setCurrentPage> | ReturnType<typeof setAmountOfElementsToShow> | ReturnType<typeof setTotalItemsCount>


