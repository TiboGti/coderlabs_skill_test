import React from 'react'
import Home from './pages/home'
import './App.css'
import Pagecard from './pages/pagecard'
import Badges from './pages/Badges'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import Pagerym from './pages/pagerym'
import Pagenew from './pages/pagenew'
import Pageedit from './pages/pagenewedit'


 const App= () =>  {
  return (
    <div className="App-contenedor">

      

        
        <BrowserRouter>
      
        <Layout>

        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/pages/cards" component={Badges}/>
          <Route exact path="/pages/badges" component={Badges}/>
          <Route exact path="/pages/new" component={Pagenew}/>
          <Route exact path="/pages/:bagedId/edit" component={Pageedit}/>
          <Route exact path="/pages/page" component={Pagerym}/>
          <Route exact path="/pages/ca" component={Pagecard}/>
          
          <Route component={NotFound}/>

        </Switch>

        </Layout>
      
      </BrowserRouter>


 
    </div>
  )
}


export default App