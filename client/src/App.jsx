// import React from 'react';
import React, { Component } from 'react';
import Box from './box.jsx'
import Images from './images.jsx'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component{

    
    render(){

        // let array = [<Box/>,<Box/>,<Box/>]
        return (
            <div>
                <h1 style={{fontFamily: 'HelveticaNeue-Light', textAlign: 'center', }}>Inspirational Images</h1>
               <Images/>
            </div>
        )
    }
}

export default App;