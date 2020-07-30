import { FETCH_QUOTE_PENDING, FETCH_QUOTE_SUCCESS, FETCH_QUOTE_ERROR } from "./../Actions/Quote.Action";
const defaultState = {
    quote:"",
    author:"",
    pending: true,
    error: null
}

export default function QuoteReducer(state = defaultState, action){
    switch (action.type) {
        case FETCH_QUOTE_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_QUOTE_SUCCESS:
            return {
                ...state,
                pending: false,
                quote: action.payload.quote,
                author: action.payload.author,
            }
        case FETCH_QUOTE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const getQuote = state => state.Quote.quote;
export const getAuthor = state => state.Quote.author;
export const getQuotePending = state => state.Quote.pending;
export const getQuoteError = state => state.Quote.error;