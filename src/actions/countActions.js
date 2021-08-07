export const increment = (id) => {

    return{
        type:'INCREMENT',
        payload:Number(id) 
    }
}

export const AddCat=(formData)=>{
    return{
        type:'ADD_CAT',
        payload:formData
    }
}
export const EditCat=(formData)=>{
    return{
        type:'EDIT_CAT',
        payload:formData
    }
}