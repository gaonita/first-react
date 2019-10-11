import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";


//Create a "reusable" and "configurable" components

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <div> <h4>wow</h4>Hi hello</div>
            </ApprovalCard>


            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" text="Nice" avatar={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2:00AM" text="well done" avatar={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 10:00PM" text="no good"
                               avatar={faker.image.avatar()}/>
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
