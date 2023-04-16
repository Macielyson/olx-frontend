import React from "react";
import { connect } from "react-redux";
// configurando a rota: npm install react-router-dom --save
import { BrowserRouter } from "react-router-dom"; // caixa mae de rotas
import Routes from './Routes';


const Page = (props) => {
  return (
    <BrowserRouter>
  
      <Routes /> {/*aqui fica as rotas*/}
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => { // apenas para pegar o state
  return {
    user: state.user // user vai ser vir como uma props que recebe user do reducer
  }
}


const mapDispatchToProps = (dispatch) => { // aqui ficam as action para enviar para os reducer
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
