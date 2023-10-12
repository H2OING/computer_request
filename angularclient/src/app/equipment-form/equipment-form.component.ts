import { Component } from '@angular/core';
import {Equipment} from "../model/equipment";
import {EquipmentService} from "../service/equipment.service";
import {EquipmentType} from "../model/equipmentType";

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.css']
})
export class EquipmentFormComponent {

  equipment: Equipment;
  equipmentTypes: string[] = Object.values(EquipmentType);
  constructor(
      private equipmentService: EquipmentService) {
    this.equipment = new Equipment();
  }

  onSubmit() {
    console.log(this.equipment);
    this.equipmentService.save(this.equipment).subscribe(result => window.location.reload());
  }

}
