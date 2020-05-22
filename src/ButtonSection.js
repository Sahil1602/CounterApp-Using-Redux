import React, { Component } from 'react';
import classes from './Buttons.module.css';
import { connect } from 'react-redux';

class Buttons extends Component {
    render(){
        return(
            <div className={classes.buttonWrap}>
                <div className={classes.buttons}>
                    <button onClick={this.props.onIncrementByOne}>+1</button>
                    <button onClick={this.props.onDecrementByOne}>-1</button>
                </div>
                <br/>
                <div className={classes.buttons}>
                    <button onClick={this.props.onIncrementByFifty}>+50</button>
                    <button onClick={this.props.onDecrementByFifty}>-50</button>
                </div>
            </div>
            
        )
    }
    
}

const dispatchAvailableForReducer = (dispatch) => {
    return({
        onDecrementByOne: ()=> dispatch({type: 'DECREASE_BY_ONE'}),
        onIncrementByOne: ()=> dispatch({type: 'INCREASE_BY_ONE'}),
        onDecrementByFifty: ()=> dispatch({type: 'DECREASE_BY_FIFTY'}),
        onIncrementByFifty: ()=> dispatch({type: 'INCREASE_BY_FIFTY'})
    })
    
    
}

export default connect(null, dispatchAvailableForReducer)(Buttons);