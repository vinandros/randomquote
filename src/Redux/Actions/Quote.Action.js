const NEW_QUOTE = "NEW_QUOTE";
const STORE_NEW_QUOTE = "STORE_NEW_QUOTE";

const requestNewQuote =() =>{
    return {
        type:NEW_QUOTE
    }
}

const storeNewQuote = ( quoteData ) =>{
    return {
        type:STORE_NEW_QUOTE,
        data:quoteData
    }
}

export {
    requestNewQuote,
    storeNewQuote,
    NEW_QUOTE,
    STORE_NEW_QUOTE
}
