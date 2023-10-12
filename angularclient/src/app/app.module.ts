import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { EquipmentFormComponent } from './equipment-form/equipment-form.component';
import {EquipmentService} from "./service/equipment.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditEquipmentComponent } from './edit-equipment/edit-equipment.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import { EquipmentRequestFormComponent } from './equipment-request-form/equipment-request-form.component';
import { RequestListComponent } from './request-list/request-list.component';
import {RequestServiceService} from "./service/request-service.service";

@NgModule({
  declarations: [
    AppComponent,
    EquipmentListComponent,
    EquipmentFormComponent,
    EditEquipmentComponent,
    EquipmentRequestFormComponent,
    RequestListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [EquipmentService, RequestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
