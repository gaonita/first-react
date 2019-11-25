import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts, fetchPostsAndUsers} from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {

    componentDidMount() {
        // this.props.fetchPosts1();
        this.props.fetchPostsAndUsers();
    }

    renderList(){
        return this.props.postsProperty.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                        <h2> {post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="ui relaxed divided list">{this.renderList()}
            </div>

        )
    }
}
//I care about the changes! re-render when it gets updated
//Property name : state.ReducerName
const mapStateToProps = (state) => ({
    postsProperty: state.posts
});
const mapDispatchToProps = (dispatch) => ({
    fetchPosts1: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList);
