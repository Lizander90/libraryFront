import { createSlice } from "@reduxjs/toolkit"

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: [{}],
    },
    reducers: {
        createBook(state, action) {
            state.books = action.payload;
        },
        updateBook(state, action) { },
        deleteBook(state, action) { },
    },
})

// Extract the action creators object and the reducer
// const { actions, reducer } = booksSlice
// Extract and export each action creator by name
export const { createPost, updatePost, deletePost } = booksSlice.actions
// Export the reducer, either as a default or named export
export default booksSlice