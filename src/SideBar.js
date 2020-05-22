import React from 'react';
import classes from './SideBar.module.css'
import { connect } from 'react-redux'

const NumberState =(props)=>{
    return(
        <div className={classes.numberWrapper}>
            <h1 className={classes.numberState}>Total Count<br/><span>{props.totalCount}</span></h1>
        </div>
    )
}

const getValueFromGlobalStore =(globalStore)=>{
    return {totalCount: globalStore.count};
}

export default connect(getValueFromGlobalStore, null)(NumberState);