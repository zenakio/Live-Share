import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-solucao',
  templateUrl: './solucao.html',
  styleUrls: ['./solucao.css']
})
export class SolucaoComponent {

  desafio: string = `Tecnotrópolis enfrenta ameaças constantes de ataques cibernéticos, colocando em risco dados sensíveis,
  sistemas essenciais e a confiança dos usuários. A falta de proteção adequada pode resultar em vazamentos
  de informações, prejuízos financeiros e interrupções nos serviços.`;

  solucao: string = `Para fortalecer sua segurança, Tecnotrópolis pode investir em atualização constante de sistemas,
  uso de criptografia, autenticação em múltiplos fatores (MFA), treinamento de usuários e monitoramento
  contínuo de ameaças. Políticas de segurança bem definidas e testes frequentes ajudam a prevenir
  e responder rapidamente a incidentes.`;

}