import React from 'react';
import './App.css';


const q =
    {
        code: 'KeyQ',
        letter: 'Q',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    };
const w =
    {
        code: 'KeyW',
        letter: 'W',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    };
const e =
    {
        code: 'KeyE',
        letter: 'E',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    };
const a =
    {
        code: 'KeyA',
        letter: 'A',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    };
const s =
    {
        code: 'KeyS',
        letter: 'S',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    };
const d =
    {
        code: 'KeyD',
        letter: 'D',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    };
const z =
    {
        code: 'KeyZ',
        letter: 'Z',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    };
const x =
    {
        code: 'KeyX',
        letter: 'X',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    };
const c =
    {
        code: 'KeyC',
        letter: 'C',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    };

const objectArr = [q, w, e, a, s, d, z, x, c];


//
// const Objectmaker = () => {
//     const result = {};
//     for (let i = 0; i < keyNum.length; i++) {
//         for (let j in keyNum[i]) {
//             result[j] = keyNum[i][j];
//         }
//     }
//     console.log(result)
//     return result;
// };

//use keyCode extract letter

class App extends React.Component {

    //runtime reference (idiomatic)
    audioRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            display: '',
            sound: ''
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
        document.addEventListener('click', this.handleClick)

    }

    handleKeyPress = (e) => {
        const theKey = objectArr.find(obj => obj.code === e.code);
        if (theKey) {
            this.setState({
                display: theKey.letter,
                sound: theKey.url
            });
            this.playSound()
        }
    };


    handleClick = (event) => {
        const clickedKey = event.target.id;
        const theKey = objectArr.find(obj => obj.letter === clickedKey);
        if(theKey){
            this.setState({
                display: clickedKey,
                sound: theKey.url
            });
            console.log(this.state.sound)
            this.playSound()
        }

    };

    //<audio src = this.state.sound>
    playSound = () => {
        this.audioRef.current.play()
    };

    render() {
        return (
            <div id="drum-machine">
                <p id="display">{this.state.display}</p>
                <div>
                    <audio ref={this.audioRef} id="myAudio" src={this.state.sound}/>
                    <button  className="drum-pad" id="Q" onClick={this.handleClick}>Q</button>
                    <button  className="drum-pad" id="W" onClick={this.handleClick}>W</button>
                    <button  className="drum-pad" id="E" onClick={this.handleClick}>E</button>
                    <button  className="drum-pad" id="A" onClick={this.handleClick}>A</button>
                    <button  className="drum-pad" id="S" onClick={this.handleClick}>S</button>
                    <button  className="drum-pad" id="D" onClick={this.handleClick}>D</button>
                    <button  className="drum-pad" id="Z" onClick={this.handleClick}>Z</button>
                    <button  className="drum-pad" id="X" onClick={this.handleClick}>X</button>
                    <button  className="drum-pad" id="C" onClick={this.handleClick}>C</button>
                </div>
            </div>
        )
    }

}


export default App;


//
// check = (event) => {
//     this.setState({
//         keycode: event.keyCode,
//         letter: Objectmaker(keyNum)[event.keyCode]
//     });
// };
