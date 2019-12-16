import React from 'react'
import LengthControl from './LengthControl';

class App extends React.Component {
    state = {
        timer: 1500,
        count: 'start',
        workLength: 1500,
        breakLength: 300,
        sessionId: 'work'
    };

    handle;


    decrementTime = () => {
        if (this.state.timer > 0) {
            this.setState({
                timer: this.state.timer - 1
            });
            if (this.state.timer === 0) {
                this.state.sessionId === 'work' ?
                    this.setState({
                        sessionId: 'break',
                        timer: this.state.breakLength
                    }) :
                    this.setState({
                        sessionId: 'work',
                        timer: this.state.workLength
                    })
            }
        }
    };

    countDown = () => {
        if (this.state.count === 'start') {
            this.handle = setInterval(this.decrementTime, 1000);
            this.setState({count: 'stop'});
        } else {
            clearInterval(this.handle);
            this.setState({count: 'start'})
        }
    };

    increment = () => {
        this.setState({
            timer: this.state.timer + 60,
            workLength: this.state.workLength + 60
        })
    };
    decrement = () => {
        this.setState({
            timer: this.state.timer - 60,
            workLength: this.state.workLength - 60
        })
    };

    brkIncrement = () => {
        this.setState({
            breakLength: this.state.breakLength + 60
        })
    };
    brkDecrement = () => {
        this.setState({
            breakLength: this.state.breakLength - 60
        })
    };

    reset = () => {
        this.setState({
            timer: 1500,
            count: 'start',
            workLength: 1500,
            breakLength: 300,
            sessionId: 'work'
        });
        clearInterval(this.handle);
    };

    clockView = (timer) => {
        let minute = Math.floor(timer / 60);
        let second = Math.floor(timer - minute * 60);
            return (minute < 10? '0'+minute:minute)
                +':'+ (second < 10 ? '0'+second : second)
    };

    render() {
        return (
            <div className="ui container items-center">
                <h1>Pomodoro Clock</h1>
                <LengthControl
                               name={'Working Session Length'}
                               sessionLength={this.state.workLength/60}
                               increment={this.state.timer < 1500 ? this.increment : null}
                               decrement={this.state.timer > 0 ? this.decrement : null}

                />

                <LengthControl
                               name={'Break Session Length'}
                               sessionLength={this.state.breakLength/60}
                               increment={this.state.timer < 300 ? this.brkIncrement : null}
                               decrement={this.state.timer > 0 ? this.brkDecrement : null}

                />


                <div className="ui segment">
                    <h1>{this.clockView(this.state.timer)}</h1>
                    <button className="ui button small primary"
                            onClick={this.countDown}>{this.state.count}</button>
                </div>
                <button className="ui button  secondary"
                        onClick={this.reset}>Reset
                </button>
            </div>
        )
    }
}
;

export default App;
