import { Component, OnInit, Injectable } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { AutorizacaoService } from '../../_service/autorizacao.service';
import { GlobalService } from '../../_service/global.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

@Injectable({  providedIn: 'root' })

export class LoginComponent implements OnInit{

  constructor(private autorizacaoService:AutorizacaoService,
              private globalService: GlobalService, // Injetando o GlobalService
              private materialModule: MaterialModule // Injetando o MaterialModule
            ) {  }

  public descricaoLogin !: string

  ngOnInit(): void {
      if (this.autorizacaoService.statusLogin()) {
        // O usuário está autenticado, faça algo
        this.descricaoLogin = "Estou Autorizado" ;
      } else {
        // O usuário não está autenticado, talvez redirecione para a página de login
        this.descricaoLogin = "Não Autorizado";
      }

      console.log(this.descricaoLogin);
  }

  
  clickLogin(){
    //if (this.autorizacaoService.statusLogin()) {
    if (this.autorizacaoService.statusLogin()) {
      this.autorizacaoService.deslogar();
      this.descricaoLogin = "Não Autorizado";
      this.globalService.setLoginRead(false); // Atualizando o valor de loginread
    }else{
      this.autorizacaoService.autorizar();
      this.descricaoLogin = "Autorizado";
      this.globalService.setLoginRead(true); // Atualizando o valor de loginread
    }
  };
}


