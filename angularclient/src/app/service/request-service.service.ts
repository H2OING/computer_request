import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Request} from "../model/request";

@Injectable()
export class RequestServiceService {

  private requestUrl: string;

  constructor(private http: HttpClient) {
    this.requestUrl = 'http://localhost:8080/requests';
  }

  public getRequest(): Observable<Request[]> {
    return this.http.get<Request[]>(this.requestUrl);
  }

  public save(request: Request) {
    return this.http.post<Request>(this.requestUrl, request);
  }

  public deleteRequest(id: number | undefined): Observable<void> {
    const deleteUrl = `${this.requestUrl}/${id}`;
    return this.http.delete<void>(deleteUrl);
  }

  public updateRequestStatus(requestId: number | undefined, newStatus: string): Observable<void>{
    return this.http.put<any>(`${this.requestUrl}/${requestId}/status`, { status: newStatus });
  }
}

