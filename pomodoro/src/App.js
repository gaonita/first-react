import React from 'react'
import accurateInterval from 'accurate-interval';
import LengthControl from './LengthControl';

class App extends React.Component {
    state = {
        break: 2,
        session: 3,
        timer: 1500
    };

    onClick = () => {
        const counting = accurateInterval(() => {
            this.setState({
                session: this.state.session - 1
            });
        }, 1000);
        setTimeout(() => {
            (counting.clear())
        }, this.state.session * 1000)
    };

    incrementBtn = () => {
        this.setState({
            session: this.state.session + 1
        })
    };
    decrementBtn = () => {
        this.setState({
            session: this.state.session - 1
        })
    };
    clockify() {
        let minutes = Math.floor(this.state.timer / 60);
        let seconds = this.state.timer - minutes * 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return minutes + ':' + seconds;
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui placeholder segment">
                    <div className="ui two column center aligned grid">
                        <div className="ui vertical divider"></div>
                        <div className="column">

                        <LengthControl
                                titleId="break-label"
                                title="Break length"
                                lengthId="break-length"
                                length={this.state.break}
                                minusId="break-decrement"
                                plusId="break-increment"
                            />
                        </div>
                        <div className="column">

                        <LengthControl
                            titleId="session-label"
                            title="Session length"
                            lengthId="session-length"
                            length={this.state.session}
                            minusId="session-decrement"
                            plusId="session-increment"
                            incrementBtn={this.incrementBtn}
                            decrementBtn={this.decrementBtn}
                        />
                        </div>
                    </div>
                </div>

                <button className="ui button primary" onClick={this.onClick}>Start</button>

                <div>{this.clockify()}</div>

            </div>


        )
    }
};

export default App;
