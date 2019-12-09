import React from 'react';

class LengthControl extends React.Component {

    render() {
        return (
            <div className="ui segment">
                <div className="ui header" id={this.props.titleId}>
                    {this.props.title}
                </div>
                <div className="ui segment" id={this.props.lengthId}>
                    {this.props.length}
                </div>

                <div className="ui ">
                    <button className="ui icon button" id={this.props.plusId}
                            onClick={this.props.incrementBtn}>
                        <i className="plus icon"></i>
                    </button>
                    <button className="ui icon button" id={this.props.minusId}
                            onClick={this.props.decrementBtn}>
                        <i className="minus icon"></i>
                    </button>

                </div>

            </div>
        )
    }
}

export default LengthControl;
