import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ProList } from './Model/Prolist.model';

@Injectable({
  providedIn: 'root'
})
export class prolistService {

  url: string = "http://localhost:3000/products/";

  constructor(private http: HttpClient) { }

  getvlist() {
    return this.http.get<ProList>(this.url).pipe(map((res: any) => {
      return res;
    }))
  }

  addvlist(data: ProList) {
    return this.http.post<ProList>(this.url, data).pipe(map((res: any) => {
      return res;
    }))
  }

  updatevlist(id: number,data:ProList ) {
    return this.http.put<ProList>(this.url + id, data).pipe(map((res: any) => {
      return res;
    }))
  }

  deletevlist(id: number) {
    return this.http.delete<ProList>(this.url + id).pipe(map((res: any) => {
      return res;
    }))
  }
}
