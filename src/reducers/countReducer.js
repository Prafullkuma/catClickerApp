const initailStateCount=[]

const countReducer = (state=initailStateCount,action) => {
    
    switch (action.type) {
        case 'INCREMENT':{
            return state.map((ele)=>{
                if(ele.id===action.payload){
                    return {...ele,...{count:Number(ele.count)+1}}
                }else{
                    return {...ele}
                }
            })
        }
        case 'ADD_CAT':{
            return [action.payload,...state]
        }

        case 'EDIT_CAT':{
            return state.map((ele)=>{
                return {...ele,...action.payload}
            })
        }

        default:{
           return state
        } 
    }
}

export default countReducer
