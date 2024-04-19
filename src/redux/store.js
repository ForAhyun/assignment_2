import {configureStore} from '@reduxjs/toolkit'
import { currencySlice } from './slice/currencySlice';

export const store = configureStore({
    reducer: {
        currency: currencySlice.reducer 
    }
});

