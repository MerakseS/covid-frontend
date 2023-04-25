import {RouterModule, Routes} from "@angular/router";
import {CovidCasesComponent} from "./components/covid-cases/covid-cases.component";

const routes: Routes =[
  {path: 'covid', component: CovidCasesComponent},
  {path: '**', redirectTo: 'covid'}
]

export const appRoutingModule = RouterModule.forRoot(routes);
