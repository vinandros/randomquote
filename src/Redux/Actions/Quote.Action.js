export const FETCH_QUOTE_PENDING = 'FETCH_QUOTE_PENDING';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
export const FETCH_QUOTE_ERROR = 'FETCH_QUOTE_ERROR';

export function fetchQuotePending() {
    return {
        type: FETCH_QUOTE_PENDING
    }
}

export function fetchQuoteSuccess(quote) {
    return {
        type: FETCH_QUOTE_SUCCESS,
        payload: quote
    }
}

export function fetchQuoteError(error) {
    return {
        type: FETCH_QUOTE_ERROR,
        payload: error
    }
}