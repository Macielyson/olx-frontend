import React from "react";
import { PageArea } from './styled';
import { PageContainer, PageTitle } from '../../components/MainComponents';

const Page = () => {
    return (
        <PageContainer>{/*precisamos colocar o conteudo centralizado e outras coisas como a estrutura padao das paginas*/}
            <PageTitle>Login</PageTitle>
            <PageArea>
                {/*lembra a senha usando o cookie*/}
                <form>
                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input type="email" />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input type="password" />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">lembrar Senha</div>
                        <div className="area--input">
                            <input type="checkbox" />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button>Fazer Login</button>
                        </div>
                    </label>

                </form>
            </PageArea>
        </PageContainer>

    );
}

export default Page;