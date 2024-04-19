import { COUNTRY_LIST } from "../utils/list";
import {useState, useEffect} from "react";
import { useDispatch , useSelector} from 'react-redux';
import { setAmount, setSelectedFromCountry } from "../redux/slice/currencySlice";
import styled from 'styled-components';
import { handleCurrencyChange } from "../redux/shared/currencyExchange";


const CurrencyInput = () => {

    const [value, setValue] = useState("");
    const [country, setCoutry] = useState("USD");
    const [formattedValue, setFormattedValue] = useState('');
    const { selectedToCountry, amount, selectedFromCountry } = useSelector(state => state.currency);

    const dispatch = useDispatch();

    useEffect(() => {
        const formatNumber = (value) => {
          const numberValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
          if (isNaN(numberValue)) {
            return '';
          }
          if (numberValue >= 1000) {
            return numberValue.toLocaleString();
          }
          return value;
        };
        setFormattedValue(formatNumber(value));
      }, [value]);

    const handleChangeCountry = (e) => {
        setCoutry(e.target.value);
        dispatch(setSelectedFromCountry(e.target.value));
        handleCurrencyChange(dispatch, amount, e.target.value, selectedToCountry);
    };

    const handleInputChange = (e) => {
        setValue(e.target.value);
        dispatch(setAmount(e.target.value));
        handleCurrencyChange(dispatch, e.target.value, selectedFromCountry, selectedToCountry);
    }

    return (
        <InputContainer>
            <TextInput type="text" value={formattedValue} onChange={handleInputChange}  />
            <SelectInput name="country" value={country} onChange={handleChangeCountry}>
                {COUNTRY_LIST.map((item, index) => {
                    return (
                        <OptionInput key={index}>{item}</OptionInput>
                    )
                })}
            </SelectInput>
        </InputContainer>
    )
};

export default CurrencyInput;

const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const TextInput = styled.input`
    width: 60%;
    height: 40px;
    margin: 10px;
`;

const SelectInput = styled.select`
    width: 30%;
    height: 40px;
    margin: 10px;
`;

const OptionInput = styled.option`
    width: 100%;
    height: 40px;
    margin: 10px;
`;