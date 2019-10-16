import './ImageList.css';
import React from 'react';

const ImageList = (props) => {
    const images = props.images.map(({description, id, urls}) => {
        return <img alt={description} key={id} src={urls.regular}/>
    });

    return <div className="image-list">{images}</div>;
};

export default ImageList;


// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }
//
// let x;
// const promise = resolveAfter2Seconds()
//     .then(() => {
//       x = 1;
//     });
//
// console.log(x);
//
//
// async function asyncCall() {
//     var result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: 'resolved'
// }
