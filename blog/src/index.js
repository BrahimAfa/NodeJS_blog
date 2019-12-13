import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'

const App = () => {

    return (
        <BrowserRouter>
            <div className="container">
                <NavBar />
            </div>
            <Routes />

        </BrowserRouter>


    )
}
ReactDOM.render(<App />, document.querySelector('#root'));


