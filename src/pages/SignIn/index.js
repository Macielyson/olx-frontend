import React, { useState } from "react";
import { PageArea } from './styled';
import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';
import useApi from '../../helpers/OlxAPI';
import { doLogin } from '../../helpers/AuthHandlers';

const Page = () => {

    const api = useApi(); // essecuta a funçao passando o objeto

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault(); //previnir o comportamento padrao nao enviar.
        setDisabled(true); // desabilita para fazer o procedimento de web-servese

        const json = await api.login(email, password);

        if (json.error) {
            setError(json.error);
        } else {
            //salvar o cookie
            doLogin(json.token, rememberPassword);
            //atualizada na pagina.
            window.location.href = '/';
        }
    }

    return (
        <PageContainer>{/*precisamos colocar o conteudo centralizado e outras coisas como a estrutura padao das paginas*/}
            <PageTitle>Login</PageTitle>
            <PageArea>

                {error &&
                    <ErrorMessage>
                        {error}
                    </ErrorMessage>
                }

                {/*lembra a senha usando o cookie*/}
                {/*fazer o processo desabilitar o campor em quanto ocorre a requisiçao*/}
                <form onSubmit={handleSubmit}>
                    {/*faz com q o fomulario nao seja enviado de fato os dados*/}
                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input
                                type="email"
                                disabled={disabled}
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                required />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input
                                type="password"
                                disabled={disabled}
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                required />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">lembrar Senha</div>
                        <div className="area--input">
                            <input
                                type="checkbox"
                                disabled={disabled}
                                checked={rememberPassword}
                                onChange={() => setRememberPassword(!rememberPassword)} />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Fazer Login</button>
                        </div>
                    </label>

                </form>
            </PageArea>
        </PageContainer>

    );
}

export default Page;