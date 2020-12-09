import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPanelComponent} from "./components/main-panel/main-panel.component";

const routes: Routes = [
  {path: '', redirectTo: 'uid', pathMatch: 'full'},
  {path: 'uid', component: MainPanelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
