import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdificioPage } from './edificio.page';

const routes: Routes = [
  {
    path: '',
    component: EdificioPage
  },
  {
    path: ":id/:level",
    component: EdificioPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdificioPageRoutingModule {}
