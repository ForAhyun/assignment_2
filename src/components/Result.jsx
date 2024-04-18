import { currencyExchange, setSelectedToCountry } from "../redux/slice/currencySlice";
import { convertDate } from "../utils/date";
import { COUNTRY_LIST } from "../utils/list";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import styled from 'styled-components';
import { handleCurrencyChange } from "../redux/shared/currencyExchange";

const Result = () => {

    const [clickedCountry, setClickedCountry] = useState(COUNTRY_LIST[1]);
    const { selectedFromCountry, amount, exchangeResult } = useSelector(state => state.currency);

    const dispatch = useDispatch();
    const otherCountries = COUNTRY_LIST.filter(country => country !== selectedFromCountry);

    const handleClickCountry = (e) => {
        setClickedCountry(e.target.textContent);
        dispatch(setSelectedToCountry(e.target.textContent));
        handleCurrencyChange(dispatch, amount, selectedFromCountry, e.target.textContent);
        // dispatch(currencyExchange({ 
        //                 amount: amount, 
        //                 from: selectedFromCountry, 
        //                 to: e.target.textContent 
        //                 })).then((response) => {
        //                 console.log("Exchange result:", response);
        //             });
        
        
    }

    return (
        <>
        <ResultContainer>
            {otherCountries.map((country, index) => (
                <CountryBtn 
                    key={index} 
                    onClick={handleClickCountry}
                    clicked={clickedCountry === country}
                    className={index === otherCountries.length - 1 ? "lastButton" : ""}
                    >
                        {country}
                </CountryBtn>
            ))}
            
        </ResultContainer>
        <CurrencyResultContainer>
        {exchangeResult && (
            <CurrencyResult>
                <ExchangeResult>{exchangeResult.query.to} {exchangeResult.result}</ExchangeResult>
                <BaseDate>기준일 : {convertDate(exchangeResult.date)}</BaseDate>
            </CurrencyResult>
        )}
        </CurrencyResultContainer>
        </>
    )
};

export default Result;

const ResultContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const CountryBtn = styled.button`
    width: 100px;
    height: 40px;
    border: 1px solid black;
    background-color: white;
    border-right: none;
    border-bottom: ${props => props.clicked ? 'none' : '1px solid black'};
    &.lastButton {
        border-right: 1px solid black;
    }
`;

const CurrencyResultContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-top: none;
    height: 70%;
`;

const CurrencyResult = styled.div`
    display: flex;
    flex-direction: column;
`;

const ExchangeResult = styled.span`
    font-size: 25px;
    font: bold;
    margin-bottom: 20px;
`;

const BaseDate = styled.div`
   font-size: 15px;
`;