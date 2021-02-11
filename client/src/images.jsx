// import React from 'react';
import React, { Component } from 'react';
import {axios} from '../axios'
import './index.css'

class Images extends Component{
    constructor(props){
        super(props);
        this.state = {
            imageUrl:'',
            urlArray:[
            // 'https://static.boredpanda.com/blog/wp-content/uploads/2019/11/1-5dd7c6a7a59ac__700.jpg',
            // 'https://illumeably-bfemqo5fqfr.netdna-ssl.com/wp-content/uploads/2020/03/3-5c56ba92facd06fc41ad956288d3f5cb.jpg',
            // 'https://static.boredpanda.com/blog/wp-content/uploads/2019/11/1195604005914894336-1-png__700.jpg',
            ],
            email:'',
            showModal: false,
            popImageUrl:''
        };
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.imageSubmitter = this.imageSubmitter.bind(this);
        this.imageRemover = this.imageRemover.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.request = this.request.bind(this);

    }
    // imageSubmitter = (e)=>{
    //     e.preventDefault();
    imageSubmitter(e){
        e.preventDefault();
        let imageUrlsArray = this.state.urlArray
        imageUrlsArray.push(this.state.imageUrl);
        this.setState({
            urlArray:imageUrlsArray
        })
       
 
    }
    handleUrlChange (e){
        e.preventDefault();
        this.setState({
        imageUrl: e.target.value,
        })
        console.log(this.state.imageUrl)
    }
    
    imageRemover(e){
      e.preventDefault();
      let oneLess = this.state.urlArray
      oneLess.pop()
      this.setState({
          urlArray: oneLess,
      })
    }
    handleEmail(e){
      e.preventDefault();
      this.setState({
      email: e.target.value,
      })
      console.log(this.state.email)
    }   
    request(e){
      e.preventDefault();
      const email = this.state.email
      console.log(email)
    }


    
    
    render(){

        let imgArr = this.state.urlArray
        const images = imgArr.map((url,index)=>{
            return(
                <img className='singleImage' style = {{height:'300px', width:'300px'}} src={url} key ={index}/>
            )
        })
        // const req = (e)=>{
        //     e.preventDefault();
        //     Axios.get('https://official-joke-api.appspot.com/random_joke')
        //     .then((res)=>console.log(res.data.setup, res.data.punchline))
        // }
        const loadUser = (e)=>{
            e.preventDefault();
            axios.get(`/users/${this.state.email}`)
            .then((res)=>{
            console.log(res.data);
            this.setState({
                urlArray: res.data.images,
            })
            })
        }
        
        return (
            <div className='App'>
               {/* <h3>hi world</h3> */}
               <form onSubmit= {this.imageSubmitter}>
                <input type = 'text' onChange ={this.handleUrlChange} placeholder = 'Add image url here' />
                <button className = 'subButton' >ADD IMAGE</button>
               </form>
               <form onSubmit={loadUser}>
                <input type = 'text' onChange = {this.handleEmail} placeholder = 'email address' />
                <button className = 'subButton' >LOAD</button>
               </form>
               <form onSubmit={loadUser} ><button className = 'subButton' >SAVE</button></form>
               
              {images}
               <form className='App' onSubmit = {this.imageRemover}>
               <button className = 'subButton' >REMOVE IMAGE</button>
               </form>
                
            </div>
        )
    }
}



export default Images;

//https://www.cuttingedgedjs.com/wp-content/uploads/2011/03/happy-songs.jpg


// make button or two ;)
    //    on click run function
    // that function will be the get or post req
    // * using axios for the request rather than normal fetch
// got email from user
// inside the 'load' function



  