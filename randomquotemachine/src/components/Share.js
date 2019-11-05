import React from 'react';
import './app.css'


class Share extends React.Component {

    render() {
        const link = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='
            + encodeURIComponent('"' + this.props.thequote);

        return (
            <div id="tweet-quote">
                <a href= {link}
                   className="twitter-share-button"
                   data-show-count="false">twitter</a>

            </div>
        )
    }
}


export default Share;


