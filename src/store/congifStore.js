import  {createStore,combineReducers} from 'redux'
import  countReducer from '../reducers/countReducer'

const congifStore = () => {
        const store=createStore(combineReducers({
            count:countReducer
        })) 
        return store
}

export default congifStore


 // git intitialse  //staggin area (index)    //  online
   
    //git init      //git add .  
