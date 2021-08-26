/* import React from 'react'
import './styles/rym.css'
import Logo from '../assets/rym.png'





class pagerym extends React.Component  {

  state ={
    loading :true,
    error: null,
    data: undefined,

 };

 componentDidMount(){

this.fetchData()

 }

 fetchData = async () => {
   this.setState({loading:true, error:null})

   try{
      const data =[]
      this.setState({ loading: false, data: data})
   } catch (error){
    this.setState({ loading: false, error: error})

   }


 };


  render(){
    
  

    if(this.state.loading === true){
      return 'LOADING...';
    }
    
    return (
      

        <div className="rym__cont">
            <div className="container cont">
                <img className="Logo" src={Logo} alt="Rick y Morty" />
                    <div className="row">
                      {

                         this.state.results.map(character =>(
                          <div className="col-md-3 col-6" key={this.state.results.id}>
                            
                          </div>

                        ))}

                          {this.state.loading && <p className="text-center">Loading...</p>}

                          {!this.state.loading && this.state.data.info.next && (
                            <button onClick={() => this.fetchCharacters()}>Load More</button>
                          )}

                    </div>
            </div>
        </div>
    )
  }
}

export default pagerym;
 */