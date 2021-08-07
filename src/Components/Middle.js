import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment } from '../actions/countActions'
import EditForm from './EditFrom/EditForm'

const Middle = (props) => {

    const {id}=props.match.params
    const [toggle,setToggle]=useState(false)

    const dispatch = useDispatch()
    
    const count=useSelector((state)=>{
        return state.count
    })

    const {name,nickName,image,count:countClick,id:eid}=count.find((ele)=>{
        return ele.id===Number(id)
    })
    const catAge=(countClick)=>{
                if(countClick<=5){
                   return "infrant" 
                }
                else if(countClick>=6 && countClick<=12){
                    return "child"
                }
                else if(countClick >=13 && countClick<=25){
                    return "Young"
                }
                else if(countClick >=26 && countClick <=40){
                    return "Middle Age"
                }
                else if(countClick >=41 && countClick <=60){
                    return "Old"
                }
                else if(countClick >61){
                    return "very Old "
                }
    }
    const handleIncrement=(id)=>{

        dispatch(increment(id))
    }
    const hanldeToggle=()=>{
        setToggle(!toggle)
    }
    return (
        <div >
            {toggle ?
                <div>
                       <EditForm 
                                name={name} 
                                id={eid} 
                                nickName={nickName} 
                                count={countClick} 
                                image={image} 
                                hanldeToggle={hanldeToggle} />
                        <button onClick={hanldeToggle}>Cancel</button>
                </div>
                :
                    <button onClick={hanldeToggle}>Edit</button>
               }
            {count && 
                <div className="card text-center" onClick={()=>handleIncrement(id)}>
                     <div className="card-header">
                            <h3>Name:{name}</h3>
                            <p>No. of  Times Clicked:{countClick}</p>
                    </div>
                    <div className="card-body">
                        <img 
                            src={URL.createObjectURL(image)}  
                            alt={image.name}
                            style={{height:'200px',width:'200px'}} 
                        />
                    </div>
                    <div className="card-footer text-muted">
                        <p> Nick name:{nickName}</p>
                        <p>Your cat is-{catAge(countClick)}</p>
                    </div>    
                </div>
             }
               
        </div>
    )
}

export default Middle
