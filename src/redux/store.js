import {combineReducers} from'redux';
import {configureStore} from '@reduxjs/toolkit'
import { currencySlice } from './slice/currencySlice';
import requestCalc from '../network/axios';

// const rootReducer = combineReducers({
//     currency: currencySlice
// });

// export const store = configureStore({
//     reducer: rootReducer
// });
export const store = configureStore({
    reducer: {
        currency: currencySlice.reducer 
    }
});

