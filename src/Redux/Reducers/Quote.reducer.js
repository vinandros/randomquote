import { NEW_QUOTE, STORE_NEW_QUOTE } from "./../Actions/Quote.Action";
const defaultState = {
    quote:"",
    author:"",
    loading:false
}

export default function QuoteReducer(state = defaultState, action){
    switch (action.type) {
        case NEW_QUOTE:
            return {
                ...state,
                loading: true
            }
        case STORE_NEW_QUOTE:
            return {
                quote: action.data.quote,
                author: action.data.author,
                loading: action.data.loading
            }
        default:
            return state;
    }
}