import { Routes } from '@angular/router';
import { Curiosidades } from './pages/curiosidades/curiosidades';
import { Home } from './pages/home/home';
import { Situacao } from './pages/situacao/situacao';
import { SolucaoComponent } from './pages/solucao/solucao';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'curiosidade',component:Curiosidades},
    {path:'situacao',component:Situacao},
    {path:'solucao',component:SolucaoComponent},
];