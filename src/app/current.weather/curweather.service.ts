import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable() 

export class curWeatherService {

        constructor(private http:Http){}
        getData():Observable<any[]>{
                return this.http.get("/api/location/search/?query=san")
                    .map(res=>res.json())
                    .catch(error=>error.json());
         }            
 }
