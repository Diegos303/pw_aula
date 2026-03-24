import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
    public alerta:String = "";
    public obj : Cliente = new Cliente();

    public cadastrar(){
      let json = JSON.stringify(this.obj)
      localStorage.setItem("meuCadastro",json)
      this.alerta = "Seu cadastro foi feito com sucesso !";
    }

}
