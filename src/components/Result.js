import React, {Component} from 'react';
import Game from "./Game";
import './style.css';
import {GameContext} from "./context/GameContext";

class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isGameRestarted: false
        }
    }

    startNewGame = () => {
        this.setState({isGameRestarted: true})
    }

    render() {
        return (
            <GameContext.Consumer>
                {value =>
                    this.state.isGameRestarted ? (
                        <Game />
                    ) : (
                        <div className={'container'}>
                            <h3>Games: {value.games}</h3>
                            <h3>LOSE/WIN</h3>
                            <h3>
                                {value.looses} - {value.wins}
                            </h3>
                            <button onClick={this.startNewGame} className={'btn'}>
                                Again?
                            </button>
                        </div>
                    )
                }
            </GameContext.Consumer>
        );
    }
}

export default Result;