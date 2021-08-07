
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import congifStore from './store/congifStore'
import {BrowserRouter} from 'react-router-dom'


import {Provider} from 'react-redux'

const store=congifStore()
console.log(store.getState())

store.subscribe(()=>{
        console.log("Update value",store.getState())
})

ReactDOM.render(
        <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
                 
        </Provider>
       
,document.getElementById('root'))
