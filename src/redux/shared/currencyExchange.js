import { currencyExchange } from "../slice/currencySlice";

export const handleCurrencyChange = (dispatch, amount, selectedFromCountry, selectedToCountry) => {
    dispatch(currencyExchange({
        amount: amount,
        from: selectedFromCountry,
        to: selectedToCountry
    })).then((response) => {
        console.log("Exchange result:", response);
    });
};
