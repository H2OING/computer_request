import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Equipment} from "../model/equipment";
import {EquipmentService} from "../service/equipment.service";
import {EquipmentType} from "../model/equipmentType";

@Component({
  selector: 'app-edit-equipment',
  templateUrl: './edit-equipment.component.html',
  styleUrls: ['./edit-equipment.component.css']
})
export class EditEquipmentComponent {
  editedEquipment: Equipment;
  newEquipmentTypes: string[] = Object.values(EquipmentType);
  constructor(
    public dialogRef: MatDialogRef<EditEquipmentComponent>,
    private equipmentService: EquipmentService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editedEquipment = { ...data.equipment , equipmentType: data.equipment.equipmentType || '' };
  }
  onSaveClick(): void {
    this.data.equipment.name = this.editedEquipment.name;
    this.data.equipment.description = this.editedEquipment.description;
    this.data.equipment.quantity = this.editedEquipment.quantity;
    this.data.equipment.equipmentType = this.editedEquipment.equipmentType;
    this.equipmentService.updateEquipment(this.data.equipment).subscribe(() => {
      this.dialogRef.close(this.data);
      window.location.reload();
    });
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
