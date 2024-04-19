import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import requestCalc from '../../network/axios';

const initialState = {
    amount: 0, 
    selectedFromCountry: 'USD',
    selectedToCountry: 'CAD',
    exchangeResult: null,
  };

export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
      setAmount: (state, action) => {
        state.amount = action.payload;
      },
      setSelectedFromCountry: (state, action) => {
        state.selectedFromCountry = action.payload;
      },
      setSelectedToCountry: (state, action) => {
        state.selectedToCountry = action.payload;
      },
    },
    extraReducers: (builder) => {
        builder.addCase(currencyExchange.fulfilled, (state, action) => {
          state.exchangeResult = action.payload;
        });
    },
});

export const currencyExchange = createAsyncThunk(
    'currency/exchange',
    async ({ amount, from, to }) => {
      try {
        const response = await requestCalc(`convert?to=${to}&from=${from}&amount=${amount}`);
        console.log("currency exchange>>>>>",response.data);
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  );


export const {setAmount, setSelectedFromCountry, setSelectedToCountry} = currencySlice.actions;
export default currencySlice.reducer;