import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../actions/countActions'
import {Link} from 'react-router-dom'

const CatCardItem = (props) => {
    const {id,name,count,image}=props  

    const dispatch=useDispatch()

    const handleIncrement=(id)=>{
        dispatch(increment(id))
    }
    return (
        <div>
                <div onClick={()=>handleIncrement(id)}>
                    <Link to={`/view/${id}`} style={{textDecoration:'none',color:'black'}}>
                    <div className="card-header">
                        <p style={{fontSize:'20px',color:'grey'}}>Name:{name}</p>
                        <p style={{fontSize:'18px'}}>No.of times clicked:{count}</p>            
                    </div>
                    <div className="card-body">
                        {image  &&  <img 
                                src={URL.createObjectURL(image)} 
                                alt={image.name}
                                style={{height:'200px',width:'200px'}}    
                            />  }
                    </div>   
                 </Link>
               </div>

               <Link to="#">Card Link</Link>
        <hr/>
        </div>
    )
}

export default CatCardItem
