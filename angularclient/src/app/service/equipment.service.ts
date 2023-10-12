import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipment } from '../model/equipment';
import { Observable } from 'rxjs';
import {EquipmentType} from "../model/equipmentType";

@Injectable()
export class EquipmentService {

  private equipmentUrl: string;

  constructor(private http: HttpClient) {
    this.equipmentUrl = 'http://localhost:8080/equipments';
  }

  public findAll(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(this.equipmentUrl);
  }

  public save(equipment: Equipment) {
    return this.http.post<Equipment>(this.equipmentUrl, equipment);
  }

  public deleteEquipment(id: number | undefined): Observable<void> {
    const deleteUrl = `${this.equipmentUrl}/${id}`;
    return this.http.delete<void>(deleteUrl);
  }

  public getEquipments(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(this.equipmentUrl);
  }

  public updateEquipment(equipment: Equipment): Observable<any> {
    return this.http.put<any>(`${this.equipmentUrl}/${equipment.idEq}`, equipment);
  }

    getEquipmentByType(type: string | undefined): Observable<Equipment[]> {
        const url = `${this.equipmentUrl}/by-type/${type}`;
        return this.http.get<Equipment[]>(url);
    }
}
