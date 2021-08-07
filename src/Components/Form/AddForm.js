import React  from 'react'
import CatFrom from './CatFrom'
import {AddCat } from '../../actions/countActions'
import { useDispatch } from 'react-redux'

const AddForm = (props) => {
    const dispatch=useDispatch()
    const formSubmission=(formData)=>{
        dispatch( AddCat(formData))
    }
    return (
        <div>
             <CatFrom formSubmission={formSubmission}/>
        </div>
    )
}

export default AddForm
