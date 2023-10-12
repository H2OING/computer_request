import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentListComponent } from "./equipment-list/equipment-list.component";
import { EquipmentFormComponent } from "./equipment-form/equipment-form.component";
import {EquipmentRequestFormComponent} from "./equipment-request-form/equipment-request-form.component";

const routes: Routes = [
  { path: 'equipments', component: EquipmentListComponent },
  { path: 'addequipment', component: EquipmentFormComponent },
  { path: 'addrequest', component: EquipmentRequestFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
