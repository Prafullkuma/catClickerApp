import React, { useState } from 'react'
import CatGallary from './CatGallary/CatGallary'
import CatsList from './CatsList/CatsList'
import AddForm from './Form/AddForm'
import { Route } from 'react-router-dom'
import Middle from './Middle'
import logo from '../3973481.jpg'

const Cat = (props) => {
    const [banner,setBanner]=useState(false)
    const handleToggle=()=>{
      setBanner(true)  
    }
    return (
        <div style={{marginTop: '1.5rem'}} className="container">
             <div className="card">
                    <div className="card-header">
                        <h1 className="p-3 mb-2  text-dark">Cat Clicker App</h1>
                    </div>
            </div>
             <div className="container" style={{marginTop: '1.5rem'}} >
                <div className="row">

                    <div className="col">
                         <CatsList handleToggle={handleToggle}/>
                    </div>

                    { banner ?
                        <div className="col-6"> 
                            <Route path="/view/:id" component={Middle} exact/>
                        </div>
                        :
                        <div className="col-6"> 
                             <h3 style={{color:'red'}}>Your are not selected the cat from cat list</h3>
                             <img src={logo} style={{height:'400px',width:'500px'}} alt="image not found"/>
                        </div>
                        
                    }
                    <div className="col">
                        <AddForm/>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <CatGallary/>
                    </div>
                </div> 
            </div>       
        </div>
    )

}

export default Cat

    