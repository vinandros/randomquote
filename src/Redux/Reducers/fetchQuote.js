import {fetchQuotePending, fetchQuoteSuccess, fetchQuoteError} from '../Actions/Quote.Action';

function fetchQuote() {
    return dispatch => {
        setTimeout(()=>{
            dispatch(fetchQuotePending());
            fetch('http://quotes.stormconsultancy.co.uk/random.json')
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(fetchQuoteSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchQuoteError(error));
            })
        },0)
        
    }
}

export default fetchQuote;