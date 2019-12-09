import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    //static,contextType: hook up a context object to a class component
    // static contextType = LanguageContext;

    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderbutton(color){
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({language}) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        // const text = this.context === 'english'? 'Submit' : 'Voorleggen';

        return (
            <ColorContext.Consumer>
                {(color)=>this.renderbutton(color)}
            </ColorContext.Consumer>
        )
    }
}

export default Button;
