import React from 'react';

class LengthControl extends React.Component {

    render() {
        return (
           <div>
               <div>
                   <h4>{this.props.name}: {this.props.sessionLength}</h4>
               </div>
               <div>
                   <button id={this.props.plus} onClick={this.props.increment}> + </button>
                   <button id={this.props.minus} onClick={this.props.decrement}> - </button>
               </div>
               <div></div>
           </div>
        )
    }
}

export default LengthControl;
