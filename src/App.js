import React from "react";
import { connect } from "react-redux";
// configurando a rota: npm install react-router-dom --save
import { BrowserRouter } from "react-router-dom"; // caixa mae de rotas
import Routes from './Routes';
import { Template } from "./components/MainComponents";
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';


const Page = (props) => {
  return (
    <BrowserRouter>
      <Template> {/*onde vai ficar minha estrutura padrao, do sistema como um todo*/}
        <Header /> {/* heade e footer. fazem parte da pagina, ou seja componentes parciais termo tecnico*/}

        <Routes /> {/*aqui fica as rotas*/}

       <Footer/>
      </Template>
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
