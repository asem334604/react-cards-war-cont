import React, {Component} from 'react';
import './style.css';
import {StartContext} from "./context/StartContext";
import Game from "./Game";

class Start extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            inputVal: '',
            fullName: ''
        }
    }

    setValue = (e) => {
        this.setState({inputVal: e.target.value});
    }

    setUser = () => {
        if (this.state.inputVal) {
            this.setState({fullName: this.state.inputVal})
        }
    }

    render() {
        return (
            <>
                <StartContext.Provider value={
                    {
                        fullName: this.state.fullName,
                    }
                }>
                    {this.state.fullName ?
                        <Game/> :
                        <div className={'container'}>
                            <h2 className={'start_header'}>Ready for WAR</h2>
                            <input className={'start_input'} placeholder={'Enter your name'}
                                   type="text" onChange={this.setValue}/>
                            <button className={'btn'} onClick={this.setUser}>start</button>
                        </div>

                    }
                </StartContext.Provider>
            </>
        );
    }
}

export default Start;