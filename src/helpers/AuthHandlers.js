import Cookies from "js-cookie";

// verifica se esta logaodo
export const isLogged = () => {
    let token = Cookies.get('token');
    return (token) ? true : false;
}

// fazer o processo de cooks
export const doLogin = (token, rememberPassword = false) => {
    if (rememberPassword) {
        Cookies.set('token', token, { expires: 999 }); // expirar em 999 dias
    } else {
        Cookies.set('token', token); // ate ele fechar o navegador
    }
}
