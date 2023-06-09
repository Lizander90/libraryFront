import { booksApi } from './query/apiBook'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        [booksApi.reducerPath]: booksApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware),
})

export default store