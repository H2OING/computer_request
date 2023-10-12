import { Component, OnInit } from '@angular/core';
import { Equipment } from '../model/equipment';
import { EquipmentService } from '../service/equipment.service';
import {MatDialog} from "@angular/material/dialog";
import {EditEquipmentComponent} from "../edit-equipment/edit-equipment.component";
import {EquipmentType} from "../model/equipmentType";

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {

   equipments: Equipment[] = [];

  constructor(private equipmentService: EquipmentService, public dialog: MatDialog) {
  }
  ngOnInit() {
    this.equipmentService.findAll().subscribe(data => {
      this.equipments = data;
    });
  }

  loadEquipmentList() {
    this.equipmentService.getEquipments().subscribe((data) => {
      this.equipments = data;
    });
  }

  deleteEquipment(idEq: number | undefined) {
    this.equipmentService.deleteEquipment(idEq).subscribe(() => {
      this.loadEquipmentList();
    });
  }

  openEditEquipmentDialog(idEq: number| undefined) {
    const equipment = this.equipments.find((e) => e.idEq === idEq);

    const dialogRef = this.dialog.open(EditEquipmentComponent, {
      width: '400px',
      data: { equipment: { ...equipment } }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog closed with data:', result);
      }
    });
  }


}
