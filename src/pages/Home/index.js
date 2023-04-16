import React from "react";
import { Link } from "react-router-dom";

const Page = () => {
    return (
        <div>
            <h1>Pagina Inicial</h1>
            {/*<a href="/about">Sobre</a>*/}
            <Link to={'/about'}>Sobre</Link> {/*ele nao recarrega a tela interira, apenas vai de uma tela para outra*/}
        </div>
    )
}

export default Page;