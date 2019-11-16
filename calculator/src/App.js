import React from 'react'
import './App.css'

const isOperator = /[x/+-]/;
const endsWithOperator = /[x+-/]$/;
const endsWithNegativeSign = /[x+-/]-$/;


class App extends React.Component {
    state = {
        currentVal: '0',
        preVal: '0',
        formula: '',
        currentSign: 'pos',
        lastClicked: '',
        evaluated: false
    };

    maxDigit = () => {
        this.setState({
            currentVal: 'Digit Limit',
            preVal: this.state.currentVal
        });
        setTimeout(() => this.setState({
            currentVal: this.state.preVal
        }), 1000)
    };

    handleDecimal = () => {

    };

    handleNumbers = (e) => {
        //const { currentVal, formula, evaluated } = this.state;
        if (!this.state.currentVal.includes('Limit')) {
            const currentVal = this.state.currentVal;
            const formula = this.state.formula;
            const evaluated = this.state.evaluated;
            const value = e.target.value;
            this.setState({
                evaluated: false
            });
            if (currentVal.length > 21) {
                this.maxDigit();
            } else if (evaluated) {
                this.setState({
                    currentVal: value,
                    formula: value !== '0' ? value : ''
                });
            } else {
                this.setState({
                    currentVal: currentVal === '0' || isOperator.test(currentVal) ? value : currentVal + value,
                    formula: currentVal === '0' && value === '0'
                        ? formula
                        : (/([^.0-9]0)$/).test(formula)
                            ? formula.slice(0, -1) + value
                            : formula + value
                });
            }
        }


    };

    handleOperators = (e) => {
        if (!this.state.currentVal.includes('Limit')) {
            const value = e.target.value;
            const formula = this.state.formula;
            const preVal = this.state.preVal;
            const evaluated = this.state.evaluated;
            this.setState({
                currentVal: value,
                evaluated: false
            });
            if (evaluated) {
                this.setState({
                    formula: preVal + value
                });
            } else if (!endsWithOperator.test(formula)) {
                this.setState({
                    preVal: formula,
                    formula: formula + value
                });
            } else if (!endsWithNegativeSign.test(formula)) {
                this.setState({
                    formula: (endsWithNegativeSign.test(formula + value) ? formula : preVal) + value
                })
            } else if (value !== '-') {
                this.setState({
                    formula: preVal + value
                });
            }
        }
    };

    handleEvaluate = () => {
        if (!this.state.currentVal.includes('Limit')) {
            let expression = this.state.formula;

            while (endsWithOperator.test(expression)) {
                expression = expression.slice(0, -1);
            }
            expression = expression.replace(/x/g, '*').replace(/-/g, '-');

            let answer = Math.round(100000 * eval(expression)) / 100000;
            this.setState({
                currentVal: answer.toString(),
                formula: expression.replace(/\*/g, '*').replace(/-/g, '-') + '=' + answer,
                preVal: answer,
                evaluated: true
            })
        }
    };

    initialize = () => {
        this.setState({
            currentVal: '0',
            preVal: '0',
            formula: '',
            currentSign: 'pos',
            lastClicked: '',
            evaluated: false
        })
    };

    render() {
        return (
            <div>
                <Formula formula={this.state.formula}/>
                <Result currentValue={this.state.currentVal}/>
                <Keypad
                    initialize={this.initialize}
                    decimal={this.handleDecimal}
                    numbers={this.handleNumbers}
                    operators={this.handleOperators}
                    evaluate={this.handleEvaluate}
                />
            </div>
        )
    }
}


class Keypad extends React.Component {
    render() {
        return (
            <div>

                <div className="operator-section">
                    <button id="clear" onClick={this.props.initialize} value='AC'>AC</button>
                    <button className="operators" id="decimal" onClick={this.props.decimal} value='.'>.</button>
                    <button className="operators" id="add" onClick={this.props.operators} value='+'>+</button>
                    <button className="operators" id="subtract" onClick={this.props.operators} value='-'>-</button>
                    <button className="operators" id="multiply" onClick={this.props.operators} value='x'>x</button>
                    <button className="operators" id="divide" onClick={this.props.operators} value='/'>/</button>
                    <button id="equals" onClick={this.props.evaluate} value='='> =</button>

                </div>

                <div className="number-section">
                    <button className="number" id="zero" onClick={this.props.numbers} value='0'> 0</button>
                    <button className="number" id="one" onClick={this.props.numbers} value='1'> 1</button>
                    <button className="number" id="two" onClick={this.props.numbers} value='2'> 2</button>
                    <button className="number" id="three" onClick={this.props.numbers} value='3'> 3</button>
                    <button className="number" id="four" onClick={this.props.numbers} value='4'> 4</button>
                    <button className="number" id="five" onClick={this.props.numbers} value='5'> 5</button>
                    <button className="number" id="six" onClick={this.props.numbers} value='6'> 6</button>
                    <button className="number" id="seven" onClick={this.props.numbers} value='7'> 7</button>
                    <button className="number" id="eight" onClick={this.props.numbers} value='8'> 8</button>
                    <button className="number" id="nine" onClick={this.props.numbers} value='9'> 9</button>
                </div>


            </div>
        )
    }
}

class Formula extends React.Component {
    render() {
        return <div className="formula">{this.props.formula}</div>
    }
}

class Result extends React.Component {
    render() {
        return (
            <div className="display">
                {this.props.currentValue}
            </div>
        );
    }
}

export default App
