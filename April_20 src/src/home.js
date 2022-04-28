import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';


 export default class homeComponent extends React.Component 
{
    render() {
        return (
            <div>
                <h1>Hi!</h1>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/items' element = {<Items/>} />
                    <Route path='/categories' element = {<Categories/>} />
                    <Route path='*' element = {
                        <div>
                            403: Page not found
                        </div>
                    } />
                </Routes>
            </div>
        )
    }

     
}


const Home = () => {
    return (
        <div>
            <h3>This is Home Component</h3>
            <Link to='/items' >Items Link</Link> <br/>
            <Link to='/categories' >Categories Link</Link>
            
        </div>
    )
}

const Items = () => {
    return (
        <div>
            <h3>This is Items Component</h3>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </div>
    )
}

const Categories = () => {
    return (
        <div>
            <h3>This is Categories Component</h3>
            <li>Categories 1</li>
            <li>Categories 2</li>
            <li>Categories 3</li>
            <li>Categories 4</li>
            <li>Categories 5</li>
        </div>
    )
}