import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public alerta:String = "";
  public entrar() {
    this.alerta = "Login realizado com sucesso!";

  }
     
}
