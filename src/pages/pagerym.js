import React from 'react'
import './styles/rym.css'
import Logo from '../assets/rym.png'




 const fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
      );
      const data = await response.json();

      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        },
        nextPage: this.state.nextPage + 1
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };


const pagerym = () => {
    
    return (
        <div className="rym__cont">
            <div className="container cont">
                <img className="Logo" src={Logo} alt="Rick y Morty" />
                    <div className="row">
                        <div className="col-md-3 col-6" key="">
                        
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default pagerym
