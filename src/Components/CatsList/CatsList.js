import React from 'react'
import { useSelector } from 'react-redux'
import CatsItem from './CatsItem'

const CatsList = (props) => {
    const { handleToggle}=props
    const count=useSelector((state)=>{
        return state.count
    })
   
    return (
        <ol className="list-group list-group-numbered">
            {count.length ===0 && <h3 style={{color:'red'}}>
                List is empty
                </h3>}
            {count.map((ele)=>{
                return <CatsItem key={ele.id} {...ele} handleToggle={handleToggle}/> 
            })}      
        </ol>
    )
}

export default CatsList
