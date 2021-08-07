import React from 'react'
import {Link} from 'react-router-dom'
const CatsItem = (props) => {
    const {id,name,count ,handleToggle}=props 
    return (
            <li className="list-group-item d-flex justify-content-between align-items-start">
               
               <div className="ms-2 me-auto">
                            <Link to={`/view/${id}`} 
                                   style={{textDecoration:'none'}}
                                   onClick={handleToggle}
                                   >
                                   <div className="fw-bold ">
                                        <span className="badge bg-primary rounded-pill p-2 mt-2"> {name}{count}</span>
                                    </div>
                            </Link>
                </div>
                    
            </li>  
        
    )
}

export default CatsItem
