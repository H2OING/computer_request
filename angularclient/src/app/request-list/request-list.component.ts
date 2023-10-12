import {Component, OnInit} from '@angular/core';
import {RequestServiceService} from "../service/request-service.service";
import {MatDialog} from "@angular/material/dialog";
import {Request} from "../model/request";

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit{
  requests: Request[] = [];

  constructor(private requestService: RequestServiceService, public dialog: MatDialog) {
  }
  ngOnInit() {
    this.requestService.getRequest().subscribe(data => {
      console.log(data);
      this.requests = data;
    });
  }

  loadRequestList() {
    this.requestService.getRequest().subscribe((data) => {
      this.requests = data;
    });
  }

  deleteRequest(idReq: number | undefined) {
    this.requestService.deleteRequest(idReq).subscribe(() => {
      this.loadRequestList();
    });
  }

  acceptRequest(idReq: number | undefined) {
    this.requestService.updateRequestStatus(idReq, 'ACCEPTED').subscribe(() => {
      this.loadRequestList();
    });
  }

  declineRequest(idReq: number | undefined) {
    this.requestService.updateRequestStatus(idReq, 'DECLINED').subscribe(() => {
      this.loadRequestList();
    });
  }
}
