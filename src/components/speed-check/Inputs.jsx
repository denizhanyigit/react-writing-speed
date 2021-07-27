import React, { Component } from 'react'

const initialState = {
    entry :'',
    isDisabled : false,
    start : null,
    end : null
}

class Inputs extends Component {

    challenge = this.props.challenge;
    state =initialState;
    keyMap = [];

    changeHandler = (e) =>{
        let {start} = this.state;
        if(start===null){
            start = new Date().getTime();
        }

        if(e.target.value===''){
            this.resetState();
        }
        else if(this.challenge.length+1<=e.target.value.length){
            this.stopAndCheck();
        }
        else{
            this.setState({
                ...this.state,
                [e.target.name] : e.target.value,
                start : start
            })
        }
    }

    stopAndCheck =()=>{
        let end = new Date().getTime();
        const {entry,start} = this.state;
        const result = this.checkEntry(entry,end,start);
        this.props.setResult(result);
        this.setState({
            ...this.state,
            isDisabled : true,
            end 
        })
    }

    async resetState() {
      //  this.setState(initialState);
        try {
            let result = await fetch("https://denizhanyigit.com/kisisel-alet-cantam/kisi-ekle.php",{
                method : 'post',
                mode : 'no-cors',
                headers :{  
                    'Accept' : 'application/json',
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify({
                    name : 'DenemeReact',
                    phone : '5333333333'
                })
            });

            console.log(result);
        }
        catch(e) {
            console.log(e)
        }   
    }

    componentDidMount(){
        document.addEventListener("keydown",this.keyDownHandler);
        document.addEventListener("keyup",this.keyUpHandler);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown",this.keyDownHandler);
        document.removeEventListener("keyup",this.keyUpHandler);
    }

    keyDownHandler = (e) =>{
        this.keyMap[e.keyCode] = e.type==="keydown";
        if(this.keyMap[17] && this.keyMap[13]){
            this.stopAndCheck();
        }
    }
    
    keyUpHandler = (e) =>{
        this.keyMap=[];
    }

    checkEntry = (entry,end,start) =>{
        let sum =0;
        const arr_challenge = this.props.challenge.split(' ');
        const arr_entry = this.state.entry.split(' ');
        arr_challenge.forEach((c,i) =>{
            for(let j=0; j<c.length; j++){
                if(arr_entry[i] && c[j]===arr_entry[i][j]){
                    sum ++;
                }
            }
        });
        sum = sum+arr_entry.length-1;
        let accuracy =(sum*100/this.challenge.length);
        let duration = (end-start)/1000;
        let wordsPerMinute = (entry.length*60)/(6*duration);

        return {
            duration,
            accuracy,
            wordsPerMinute 
        }
    }

    render() {
        const {entry,isDisabled} = this.state;
        return (
            <React.Fragment>
            <div>
                <div className="input-group mb-3">
                <textarea name="entry" autoComplete="off" value={entry} disabled={isDisabled} onChange={this.changeHandler} className="form-control"></textarea>
                <div className="input-group-append">
                    <button className="btn btn-success" id="reset" onClick={()=>this.resetState()}>Sıfırla</button>
                </div>
                <br/>
            </div>
            </div>
            <small className="muted">{this.challenge.length - entry.length} / {this.challenge.length}</small>
            </React.Fragment>
        )
    }
}

export default Inputs;
