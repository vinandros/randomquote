import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeNewQuote } from "../Redux/Actions/Quote.Action";
import logo from "../img/logo.png";

class QuoteComponent extends Component {
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.requestQuote = this.requestQuote.bind(this);

    }
    requestQuote(){
        this.props.storeNewQuote({quote:this.props.quote,author:this.props.author,loading:true});
        setTimeout(()=>{
            try {
                fetch("http://quotes.stormconsultancy.co.uk/random.json")
                .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
                })
                .then(data => {
                   
                    this.props.storeNewQuote({quote:data.quote,author:data.author,loading:false})
                
                })
                .catch(error => console.error(error));
            } catch (error) {
                console.log("asdfasdfsd")
            }
            
        },120)
         
    }

    handleOnClick(){
        // const element = document.querySelectorAll(".fade");
        // element.forEach( elem => elem.classList.remove("fade"));
        // element.forEach( elem => void elem.offsetWidth);
        // element.forEach( elem => elem.classList.add("fade"));
        this.requestQuote();
        const element = document.querySelectorAll(".fade");
        element.forEach( elem => elem.classList.remove("fade"));
        element.forEach( elem => void elem.offsetWidth);
        element.forEach( elem => elem.classList.add("fade"));
    }
    componentDidMount() {
        this.requestQuote();
      }
    render() {
        return (
            <div id="quote">
                <div id="text" className="fade"><p>{'"'+this.props.quote+'"'}</p></div>
                <div id="author" className="fade"><p>-- {this.props.author}</p></div>
                
               
                <div id="footer-flex">
                    <a id="tweet-quote" href={"http://twitter.com/intent/tweet?hashtags=quotes&text="+encodeURIComponent('"' + this.props.quote + '" ' + this.props.author)}><img id="tweet-quote-img" src={logo} alt="Twiter"/></a>
                    <button id="new-quote" className="btn" onClick={this.handleOnClick}><p>New Quote</p></button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        quote: state.Quote.quote,
        author: state.Quote.author,
        loading: state.Quote.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        storeNewQuote: (quoteData) => {
        dispatch(storeNewQuote(quoteData))
      }
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(QuoteComponent)
