import React, { useState } from 'react'

const CatFrom = (props) => {
    const {id:Eid,name:Ename,count:Ecount,nickName:EnickName,image:Eimage }= props
    
    const {formSubmission,hanldeToggle}=props


    const [id,setId]=useState(Eid ? Eid :Number(new Date()))
    const [name,setName]=useState(Ename?Ename :'')
    const [count,setCount]=useState(Ecount?Ecount:0)
    const [image,setImage]=useState(Eimage ?Eimage :'')
    const [nickName,setNickName]=useState(EnickName? EnickName:'')
    const [formError,setFormError]=useState({})

    let error={}

    const handleChange=(e)=>{
        const attr=e.target.name

        if(attr==="name"){
            setName(e.target.value)
        }else if(attr==="count"){
            setCount(e.target.value)
        }else if(attr==="nickName"){
            setNickName(e.target.value)
        }
    }
    const handleImage=(e)=>{
        const img=e.target.files[0]
        
        setImage(img)
    }
    const runValidation=()=>{
        if(name.trim().length===0){
            error.name="Name can't be blank"
        }
        if(nickName.trim().length===0){
            error.nickName="NickName can't be blank"
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        runValidation()
        const formData={
            id:id,
            name:name,
            nickName:nickName,
            image:image,
            count:count
        }
        if(Object.keys(error).length===0){
            setFormError({})
            formSubmission(formData)
            setName('')
            setCount(0)
            setImage('')
            setNickName('')
            setId(Number(new Date()))
        } else{
            setFormError(error)
        }
        if(hanldeToggle){
            hanldeToggle()
        }       
    }

    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
               {Eid ? <span>Edit cat Here </span>:<span>Add Cat here</span>} 
            </button>

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Cat form</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <input type="text" value={name}  name="name" onChange={handleChange} placeholder="Enter Cat name"/>
                            {formError.name && <span>{formError.name}</span>}
                            <br/><br/>     
                            <input type="text" placeholder="Enter cat Count"  name="count" value={count} onChange={handleChange} /><br/><br/>
                            <input type="file" onChange={handleImage}/><br/><br/>
                            {image &&
                                <img 
                                    src={URL.createObjectURL(image)} 
                                    alt={image.name} 
                                    style={{ height:'200px', width:'200px'}}
                                /> 
                            }
                            <br/><br/>
                            <input type="text" placeholder="Enter Nick names"  name="nickName" value={nickName} onChange={handleChange}/>
                            {formError.nickName && <span>{formError.nickName}</span>}
                            <br/><br/>

                            <input type="submit" className="btn btn-primary" value="Add Cat"/>
                        </form>  
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>

        </div>
    )
}

export default CatFrom
