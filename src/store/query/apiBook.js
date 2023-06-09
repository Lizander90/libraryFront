
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
const API_URL = import.meta.env.VITE_BOOKS_API || 'https://anapioficeandfire.com/api/';

// Define a service using a base URL and expected endpoints
export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => `books/`,
            providesTags: ['booksList']
        }),
        getBookId: builder.query({
            query: (idBook) => `books/${idBook}`,
        }),
        createBook: builder.mutation({
            query: (payload) => ({
                url: 'books/',
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ['bookList']
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBookIdQuery, useCreateBookMutation, useGetBooksQuery, useLazyGetBooksQuery, useLazyGetBookIdQuery } = booksApi