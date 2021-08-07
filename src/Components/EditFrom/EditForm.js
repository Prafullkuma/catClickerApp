import React from 'react'
import CatFrom from '../Form/CatFrom'
import {EditCat} from '../../actions/countActions'
import {useDispatch } from 'react-redux'
const EditForm = (props) => {
    const {id,name,count,nickName,image,hanldeToggle}=props
    const dispatch = useDispatch()
    
    const formSubmission=(formData)=>{
        dispatch(EditCat(formData))
    }

    return (
        <div>
            <CatFrom formSubmission={formSubmission} 
                id={id} 
                name={name} 
                count={count} 
                nickName={nickName}
                image={image}
                hanldeToggle={hanldeToggle}
            />
        </div>
    )
}

export default EditForm
