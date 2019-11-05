import React from 'react';
import axios from 'axios';
import './app.css';
import Share from "./Share";

const URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quoteArr: [],
            quote: '',
            author: ''
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axios.get(URL).then((response) => {
            this.setState({
                quoteArr:response.data.quotes ,
                quote: response.data.quotes[Math.floor(Math.random() * this.state.quoteArr.length)].quote,
                author: response.data.quotes[Math.floor(Math.random() * this.state.quoteArr.length)].author
            });
        })
    };

    getRandomData = () => {
        const quoteObj = this.state.quoteArr[Math.floor(Math.random() * this.state.quoteArr.length)];
        this.setState({
            quote: quoteObj.quote,
            author: quoteObj.author
        })
    };

    render() {

        return (
            <div id="wrapper">
                <div id="quote-box">
                    <div id="text">{this.state.quote}</div>
                    <div id="author">- {this.state.author} </div>
                    <button id="new-quote" onClick={this.getRandomData}>New quote</button>
                    <Share thequote={this.state.quote}/>
                </div>
            </div>
        )
    }
}

export default Quote;
