import React, { Component } from 'react';
import Quote from "./QuoteComponent.jsx";

class App extends Component{
    render(){
        return(
            <div>
                <h1>Hi React. Im fine and you?</h1>
                <Quote />
            </div>
        )
    }
}

export default App;