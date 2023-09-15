import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice.js'
// import userSlice from '../features/userSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})