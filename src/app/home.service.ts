import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IHome } from './home'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  homeUrl = './api/houses.json'

  constructor(private http: HttpClient) { }

  getHome(): Observable<IHome[]>{
    return this.http.get<IHome[]>(this.homeUrl).pipe(
      tap(data=>console.log(JSON.stringify(data)))
    )
  }
}
