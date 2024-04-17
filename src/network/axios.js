import axios from "axios";

 async function requestCalc(url="/")  {
    
    let response = null;

    const instance = axios.create({
        baseURL: 'https://api.apilayer.com/exchangerates_data/',
        headers: {
             'apikey': process.env.REACT_APP_API_KEY,
        }
    });

    //if(url === "/") return;

    response = await instance.get(url);
    //console.log('g>>>', response.data);
    return response;
    
}

export default requestCalc;
  