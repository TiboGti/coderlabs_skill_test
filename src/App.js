import React from 'react'
import Home from './pages/home'
import Page from './pages/pagenew'
import './App.css'
import Pagecard from './pages/pagecard'

import { BrowserRouter,Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'

 const App= () =>  {
  return (
    <div className="App-contenedor">

      {

        
        <BrowserRouter>
      
        <Layout>

        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/pages/cards" component={Pagecard}/>
          <Route exact path="/pages/page" component={Page}/>
          <Route component={NotFound}/>

        </Switch>

        </Layout>
      
      </BrowserRouter>


 }
    </div>
  )
}


export default App