import React from 'react';
// import jsonData from '../data/quotes';
import axios from 'axios';

const URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: ''
        }
    }

    // getData = () => {
    //     console.log(jsonData.quotes[0])
    // };


    getData = () => {
        axios.get(URL).then((response) => {
            console.log(response.data);
        })
            .catch((e) => {
                console.error('error', e);
            })
            .finally(()=>{
                console.log('finally!');
            })

    };

    render() {
        return (
            <div>App
                <button onClick={this.getData}>Button</button>
            </div>
        )
    }
}

export default App;
