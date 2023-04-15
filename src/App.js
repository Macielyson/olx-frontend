import React from "react";
import { connect } from "react-redux";

const Page = (props) => {
  return (
    <div>Ola mundo... {props.user}</div>
  )
}

const mapStateToProps = (state) => { // apenas para pegar o state
  return {
    user: state.user // user vai ser vir como uma props que recebe user do reducer
  };
};

const mapDispatchToProps = (dispatch) => { // aqui ficam as action para enviar para os reducers
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);