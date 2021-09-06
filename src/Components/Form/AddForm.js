import React, { useState }  from 'react'
import CatFrom from './CatFrom'
import {AddCat } from '../../actions/countActions'
import { useDispatch } from 'react-redux'

const AddForm = (props) => {
    const dispatch=useDispatch()
    const [isSaved,setIsSaved]=useState(false)

    const formSubmission=(formData)=>{
        setIsSaved(true)
        dispatch( AddCat(formData))
    } 
    const isSavedStatus=()=>{
        setIsSaved(!isSaved)
    }
    
    return (
        <div>
             <CatFrom formSubmission={formSubmission} isSavedStatus={isSavedStatus} isSaved={isSaved}/>
        </div>
    )
}

export default AddForm
