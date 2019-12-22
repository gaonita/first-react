import React from 'react';
import {connect} from 'react-redux';
import {fetchTodos} from "../actions";


class TodoList extends React.Component{
    // componentDidMount() {
    //     this.props.fetchTodos()
    // }
    checkProp = () => {
        console.log(this.props.todosProp)
    }

    render(){
        return(
            <div>
                List here
                <button onClick={this.checkProp}>console log</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todosProp:state
})


export default connect(mapStateToProps,{fetchTodos})(TodoList)
