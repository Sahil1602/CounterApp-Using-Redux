const initialState = {likes: 0, deslikes:0};
const Redux = require('redux');

const mainReducer = (prevState = initialState, action) =>{
    if(action.type === 'DESLIKE'){
        const totalDesikes = prevState.deslikes + 1;
        return({...prevState, deslikes: totalDesikes});
    }
    else if(action.type === 'LIKE'){
        const totalLikes = prevState.likes + 1;
        return({...prevState, likes: totalLikes})
    }
    return {...prevState}
}

const globalStore = Redux.createStore(mainReducer)

globalStore.subscribe(()=>{
    console.log(globalStore.getState())
})

globalStore.dispatch({type: 'DESLIKE'})
globalStore.dispatch({type: 'LIKE'})
globalStore.dispatch({type: 'DESLIKE'})
globalStore.dispatch({type: 'LIKE'})
globalStore.dispatch({type: 'LIKE'})
globalStore.dispatch({type: 'DESLIKE'})