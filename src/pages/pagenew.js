import React from 'react'
import './styles/pagenew.css'
import Badge from '../components/badge' 
import  Hero from '../assets/hero.jpg'
import Form from '../components/form'
import api from '../services/api'



class pagenew extends React.Component {
  
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
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

  handelSubmit = async e => {
    e.preventDefault();

    try {
      await api.badges.create(this.state.form)
      this.setState({loading:false}) 
    }catch(error){
      this.setState({loading: false, error: error})
    }
  }

  render() {
    return (
        <div className="pages_container">
            
              <div className="BadgeNew__hero">
                <img className=" img-hero" src={Hero} alt="Logo" />
              </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                twitter={this.state.form.twitter || 'TWITTER'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                email={this.state.form.email || 'EMAIL'}
                
              />
            </div>

            <div className="col-md-6">

              <Form  
              onChange={this.handleChange} 
              onSubmit={this.handelSubmit}
              formValues={this.state.form}/>
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