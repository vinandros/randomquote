import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { storeNewQuote } from "../Redux/Actions/Quote.Action";
import logo from "../img/logo.png";
import { getQuote, getAuthor, getQuotePending, getQuoteError } from "../Redux/Reducers/Quote.reducer";
import fetchQuoteAction from "../Redux/Reducers/fetchQuote";

class QuoteComponent extends Component {
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.requestQuote = this.requestQuote.bind(this);
        this.shouldComponentRender = this.shouldComponentRender.bind(this);

    }

    shouldComponentRender() {
        const { pending } = this.props;
        if(this.pending === false) {
            const element = document.querySelectorAll(".fade");
            element.forEach( elem => elem.classList.remove("fade"));
            element.forEach( elem => void elem.offsetWidth);
            element.forEach( elem => elem.classList.add("fade"));
            return false;
        }
        return true;
    }

    requestQuote(){
        const { fetchQuote } = this.props;
        fetchQuote();
        
    }

    handleOnClick(){
        this.requestQuote();
       
    }
    componentDidMount() {
        this.requestQuote();
      }
    render() {
        const { quote, author, error, pending} = this.props;
        return (
            <div id="quote">
                <div id="footer-flex">
                    <a id="tweet-quote" href={"http://twitter.com/intent/tweet?hashtags=quotes&text="+encodeURIComponent('"' + this.props.quote + '" ' + this.props.author)}><img id="tweet-quote-img" src={logo} alt="Twiter"/></a>
                    <button id="new-quote" className="btn" onClick={this.handleOnClick}><p>New Quote</p></button>
                </div>
                {
                    !pending ?  <Fragment> 
                                    <div id="text" className="fade"><p>{'"'+quote+'"'}</p></div>
                                    <div id="author" className="fade"><p>{"-- "+author}</p></div>
                                </Fragment>  :<div> 
                                                <p>loading...
                                                </p>
                                              </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ 
    quote: getQuote(state),
    author: getAuthor(state),
    pending: getQuotePending(state),
    error: getQuoteError(state)
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchQuote:fetchQuoteAction
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(QuoteComponent)
