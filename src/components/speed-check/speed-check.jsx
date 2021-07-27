import React, {Component} from 'react'
import Info from "../speed-check/Info"
import Inputs from './Inputs';
import Score from './Score';

const initState = {
    result : null
}

class SpeedCheck extends Component {
    challenge = "Denizhan YİĞİT";
    state = initState;

    setResult= (result)=>{
        this.setState({
            result
        })
    }

    render () {
        console.log(this.state);
        const {result} = this.state;
        return (
            <React.Fragment>
            <Info challenge={this.challenge} />
            <hr/>
            <Inputs challenge={this.challenge} setResult={this.setResult}/>
            <hr/>
            {
                result !== null ? <Score values={this.state.result}/> : ""
            }
            
            </React.Fragment>
        );
    }
}

export default SpeedCheck;