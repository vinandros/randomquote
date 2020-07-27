import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import { Provider } from "react-redux";
import store from "./Redux/store";
import './css/styles.scss';

class Wrapper extends Component {
    render() {
        return(
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

ReactDOM.render(<Wrapper />, document.getElementById("root"));


