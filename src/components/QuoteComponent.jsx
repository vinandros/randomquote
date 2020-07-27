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
        setTimeout(()=>{
            fetch( "http://quotes.stormconsultancy.co.uk/random.json")
            .then(response => response.json())
            .then(data => this.props.storeNewQuote({quote:data.quote,author:data.author,loading:false}));
        },0)
         
    }

    handleOnClick(){
        this.requestQuote();
    }
    componentDidMount() {
        this.requestQuote();
      }
    render() {
        return (
            <div id="quote">
                {
                    this.props.loading ? <div id="loading"> <div id="loader"></div> </div> : 
                    <div id="container">
                        <div><p>"{this.props.quote}"</p></div>
                        <div><p>by {this.props.author}</p></div>
                        <div id="btn-g"><button className="btn" onClick={this.handleOnClick}><p>New Quote</p></button></div>
                    </div>
                }
                
               
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
