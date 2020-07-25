import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeNewQuote } from "../Redux/Actions/Quote.Action";

class QuoteComponent extends Component {
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.requestQuote = this.requestQuote.bind(this);

    }
    requestQuote(){
        this.props.storeNewQuote({quote:this.props.quote,author:this.props.author,loading:true});
        fetch( "http://quotes.stormconsultancy.co.uk/random.json")
        .then(response => response.json())
        .then(data => this.props.storeNewQuote({quote:data.quote,author:data.author,loading:false})); 
    }

    handleOnClick(){
        this.requestQuote();
    }
    componentDidMount() {
        this.requestQuote();
      }
    render() {
        return (
            <div>
                {
                    this.props.loading ? <span>Loading....</span> : 
                    <div>
                        <span>Quote:<p>{this.props.quote}</p></span>
                        <span>author</span>
                        <p>{this.props.author}</p>
                    </div>
                }
                <button onClick={this.handleOnClick}>New Quote</button>
               
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
