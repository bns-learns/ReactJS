import { useState, useEffect } from "react";

function useCurrencyInfo(currency) { // the value to be converted is currency
    //variable data is for the output currency value
    const [data, setData] = useState({}); //setting an empty value, so that it doesn't when no value is feeded.

    //useEffect hook will invoke the functionality wherever required, so no extra function call required.
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json()) //converting the string value to json
        //also 'then' method needs a callback function
        .then((res) => setData(res[currency])); //accessing the currency from json
        console.log(data);
    }, [currency])
    return data;
}

export default useCurrencyInfo;