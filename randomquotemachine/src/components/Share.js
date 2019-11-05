import React from 'react';
import './app.css'

class Share extends React.Component {

    render() {
        return (
            <div id="tweet-quote">
                <a href='https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='
                   className="twitter-share-button"
                   data-show-count="false">twitter</a>
            {/*<p>{this.props.thequote}</p>*/}

            </div>
        )
    }
}


export default Share;


