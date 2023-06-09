import { configureStore } from '@reduxjs/toolkit'
import booksSlice from './slices/bookslice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { booksApi } from './query/apiBook'

const store = configureStore({
    reducer: {
        [booksApi.reducerPath]: booksApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware),
})

export default store