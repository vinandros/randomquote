const STORE_NEW_QUOTE = "STORE_NEW_QUOTE";

const storeNewQuote = ( quoteData ) =>{
    return {
        type:STORE_NEW_QUOTE,
        data:quoteData
    }
}

export {
    storeNewQuote,
    STORE_NEW_QUOTE
}
