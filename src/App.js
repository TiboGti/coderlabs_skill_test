import React from 'react'
import Home from './pages/home'
import Page from './pages/pagenew'
import './App.css'
import Pagecard from './pages/pagecard'
import Page1 from './pages/page1'
import { BrowserRouter,Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'

 const App= () =>  {
  return (
    <div className="App-contenedor">

      {
      <BrowserRouter>
      <Navbar/>

        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/pages/cards" component={Pagecard}/>
          <Route exact path="/pages/page" component={Page}/>
          <Route exact path="/pages/page1" component={Page1}/>

        </Switch>

      
      </BrowserRouter>
 }
    </div>
  )
}


export default App