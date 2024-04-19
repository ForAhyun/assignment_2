import axios from "axios";

 async function requestCalc(url="/")  {
    
    let response = null;

    const instance = axios.create({
        baseURL: 'https://api.apilayer.com/exchangerates_data/',
        headers: {
             'apikey': process.env.REACT_APP_API_KEY,
        }
    });

    response = await instance.get(url);
    
    return response;
    
}

export default requestCalc;
  