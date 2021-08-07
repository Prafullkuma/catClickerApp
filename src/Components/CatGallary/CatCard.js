import React from 'react'
import { useSelector } from 'react-redux'
import CatCardItem from './CatCardItem'

const CatCard = () => {
    const count=useSelector((state)=>{
        return state.count
    })
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
                {count.map((ele)=>{
                        return <CatCardItem key={ele.id} {...ele}/> 
                })}
           </div>
        
    )
}

export default CatCard
