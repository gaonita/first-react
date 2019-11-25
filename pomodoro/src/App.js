import React from 'react'


class App extends React.Component {
    state = {
        count: 0
    };

    StartCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    ShowCount = () => {
        setTimeout(this.StartCount, 3*1000)
    };



    render() {
            return (
                <div>
                    <button onClick={this.ShowCount}>Start</button>
                    <div>{this.state.count}</div>
                </div>

            )
        }
};

export default App;
