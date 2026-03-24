import { Routes } from '@angular/router';
import { Contato } from './contato/contato';
import { Vitrine } from './vitrine/vitrine';
import { Cadastro } from './cadastro/cadastro';
import { Login } from './login/login';
import { CadastroCliente } from './cadastro-cliente/cadastro-cliente';

export const routes: Routes = [
    {path:"cadastro", component:CadastroCliente},
    {path:"fale", component:Contato},
    {path:"vitrine", component:Vitrine},
    {path:"", component:Vitrine},
    {path:"login",component:Login}
];
