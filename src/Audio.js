import React, { Component } from 'react'


export default class Audio extends Component {

    componentDidMount() {
        const player = document.getElementById(`player`)
        player.currentTime = 0;
        player.volume = .1;
        player.play();
    }

    state = {
        sound: this.props.currentSoundPath
    }

    render() {
    
        return (
            <div>
                <div >
                    <audio id="player" controls autoPlay hidden loop  >
                        <source src="./assets/sounds/pokemon.mp3" type="audio/mpeg"/>
                                    unsupported !! 
                    </audio>
                </div>
            </div>
        )
    }
}
