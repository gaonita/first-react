import React from 'react';
import Quote from './Quote';
import './app.css';

class App extends React.Component{
   render(){
       return (
           <div className="body">
               <Quote/>
               <div className="footer">Random Quote machine by
                   <a href="https://gaonita.github.io/"> Gaon Yang</a>
               </div>
           </div>
       )
   }

};

export default App


// axios
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
