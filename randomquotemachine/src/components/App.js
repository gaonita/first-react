import React from 'react';
import Quote from './Quote';
import Share from './Share';
import './app.css';

const App = () => {
//     getData = () => {
//         let promise = axios.get(URL).then((response) => {
//             this.setState({
//                 quote: response.data.quotes[0].quote
//             })
//                 .catch((e) => {
//                     console.error('error', e);
//                 });
//             // .finally(()=>{
//             //     console.log('finally!');
//             // })
// }
    return (
        <div className="body">
            <Quote/>
            <Share thequote={'tweet'}/>
            <div className="footer">Random Quote machine by
                <a href="https://gaonita.github.io/"> Gaon Yang</a>
            </div>
        </div>
    )
};

export default App
