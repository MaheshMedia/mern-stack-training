
import './App.css';
import {Routes,Route,Link,Outlet} from 'react-router-dom';
import React from 'react';
class App extends React.Component{
  render() {
  return (
    <div className="App"> 
          <Routes>
          <Route path='/' element = {<Default />}>
            <Route path='/home' element={<Home />} />
            <Route path='/stuff' element={<Stuff />}/>
            <Route path='/contact' element={<Contact />}/>
          </Route>
        </Routes>
        
    </div>
  )
}
}

const Default = () => {
  return(
    <div className='divved'>
      <table border='4' className='center'>
          <tbody>
        <theader>
        <div className='firstline'><h4>Page Not Found - 404 Error</h4></div>
        </theader>
        <p> A lot of things are changing at kirupa.com, and that means files have been renamed, sections added, and content modified. Don't leave just yet! Search
           for the topic below - we are 
           sure you will find what you were looking for</p>
           <input type="text"></input>
           <button>search</button>

           <p>Don't hesitate to contact me with the URL you were trying to access. I'll try to fix the broken link if possible </p>
           </tbody>
           
      <tfooter>
          <tr className='links'>
           <td><Link to='/home'>Home</Link></td>
           <td><Link to='/stuff'>Stuff</Link></td>
           <td><Link to = '/contact'>Contact</Link></td> 
           </tr>
      </tfooter>
      </table>
      {/* <Outlet/> */}
    
    </div>
  )
}

const Home = () => {
  return(
    <div>
      <h3>Hello</h3>
      <p>Cras facilisis urna ornare ex volutpat, et convallis erat elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
    </div>
  )
}

const Stuff = () => {
  return(
    <div>
      <h1>Stuff</h1>
      <p>Mauris sem velit, vehicula eget sodales vitae, rhoncus eget sapien:
        <ol>
        <li>Nulla pulvinar diam</li>
        <li>Facilisis bibendum</li>
        <li>Vestibulum vulputate</li>
        <li>Eget erat</li>
        <li>Id porttitor</li>
        </ol>
      </p>
    </div>
  )
}

const Contact = () => {
  return(
    <div>
      <h1>GOT QUESTIONS?</h1>

      <p>The easiest thing to do is post on our forums.</p>
    </div>
  )
}


export default App;
