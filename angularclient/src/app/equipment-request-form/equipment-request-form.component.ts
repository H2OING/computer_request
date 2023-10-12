import {Component, OnInit} from "@angular/core";
import {Equipment} from "../model/equipment";
import {EquipmentService} from "../service/equipment.service";
import {EquipmentType} from "../model/equipmentType";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Request} from "../model/request";
import {RequestServiceService} from "../service/request-service.service";

@Component({
  selector: 'app-request-form',
  templateUrl: './equipment-request-form.component.html',
  styleUrls: ['./equipment-request-form.component.css']
})
export class EquipmentRequestFormComponent implements OnInit {

  equipmentForm: FormGroup;
  equipmentTypes: string[] = Object.values(EquipmentType);
  equipmentList: Equipment[] = [];
  request: Request;
  selectedEquipment: Equipment | null | undefined;
  requests: Request[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private equipmentService: EquipmentService,
    private requestService: RequestServiceService
  ) {
    this.equipmentForm = this.formBuilder.group({
      equipmentType: new FormControl(''),
      selectedEquipment: new FormControl(''),
      reason: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required)
    });
    this.request = new Request();
  }

  ngOnInit() {
    this.onEquipmentTypeChange();
    this.requestService.getRequest().subscribe(data => {
      console.log(data);
      this.requests = data;
    });
  }

  onEquipmentTypeChange() {
    const selectedType = this.equipmentForm.get('equipmentType')?.value;
    console.log('Selected Equipment Type:', selectedType);
    if (selectedType) {
      this.equipmentService.getEquipmentByType(selectedType).subscribe((equipment: Equipment[]) => {
        this.equipmentList = equipment;
      });
    } else {
      this.equipmentList = [];
    }
  }

  onSubmit() {
    if (this.equipmentForm.valid) {
      const selectedEquipment = this.equipmentForm.get('selectedEquipment')?.value;
      const reason = this.equipmentForm.get('reason')?.value;
      const amount = this.equipmentForm.get('amount')?.value;

      if (selectedEquipment) {
        this.request.equipment = selectedEquipment;
        this.request.reason = reason;
        this.request.amount = amount;

        this.requestService.save(this.request).subscribe(result => {
          console.log('Request submitted successfully', result);
          this.equipmentForm.reset();
          window.location.reload()
        });
      } else {
        console.error('No equipment selected');
      }
    }
  }
}
