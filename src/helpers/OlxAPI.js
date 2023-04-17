// criando um objeto para fazer as requisiçoes. 
// criar um hook e usar essse hook em qualqeur lugar da aplicaçao.

// crien aqui o meu hook por assim dizer

const OlxAPI = {
    login: async (email, password) => {
        // fazer consulta no WB

        return { error: 'Pagina em processo' } // retornar um json 
    }
};

export default () => OlxAPI; // criei uma funçaõ q vai me retornar um objeto

