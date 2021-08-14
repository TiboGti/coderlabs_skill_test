import React from 'react'
import './styles/pagenew.css'
import Navbar from '../components/navbar' 
import Badge from '../components/badge' 
import  Hero from '../assets/hero.jpg'
import Form from '../components/form'



class pagenew extends React.Component {
  
  state = {
    form: {
      firstName: ' ',
      lastName: ' ',
      email: ' ',
      jobTitle: ' ',
      twitter: ' ',

  },
};




  handleChange = e =>{
    this.setState({

      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  };

  render() {
    return (
        <div className="pages_container">
            <Navbar/>
              <div className="BadgeNew__hero">
               <img className=" img-hero" src={Hero} alt="Logo" />
              </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                
              />
            </div>

            <div className="col-md-6">

              <Form  onChange={this.handleChange}  formValues={this.state.form}/>

            </div>

          </div>
        </div>
        <footer>
          
        </footer>

      </  div>
    )
  }
}

export default pagenew;