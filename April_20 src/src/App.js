
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import {gatherlist} from './ap.js';
import ProfilePic from './components/profilepic.js';
import User from './user';
import MainComponent from './components/maincomponent';



class App extends React.Component {
constructor(props){
  super(props)
  this.state = {
    data:[]
  }
}

componentDidMount (){
  gatherlist().then(data => this.setState({
    data,
  }))
}

  render() {
    console.log(this.state.data)
    return (
    <div className="App">
     <h1>Hi</h1>
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/users' element={<Users data={this.state.data} />} />
       <Route path='/About' element={<About />} />
       <Route path='/Contact' element={<Contact />} />
      <Route path='/profilepic/:id' element = {<ProfilePic/>}/>
       </Routes>
    </div>
  );
}
}


const Home = () => {
  return (
      <div>
          <h3>This is Home Component</h3>
          <Link to='/users' >users Link</Link> <br/>
          <Link to='/About' >About Us</Link> <br/>
          <Link to='/Contact' >Contact Us</Link> <br/>
          {/* <Link to='/categories' >Categories Link</Link> */}
      </div>
  )
}

const Users = (props) => {
  return (
    <div>
    {
      props.data.map(user =>(
        <User user={user} />
      ))
    }
    {/* This is User Component */}
</div>

  )
}

const About = () => {
  return (
      <div>
          <h3>This is About Component</h3>
      
      </div>
  )
}
const Contact = () => {
  return (
      <div>
          <h3>This is  Component</h3>
      
      </div>
  )
}

export default App;