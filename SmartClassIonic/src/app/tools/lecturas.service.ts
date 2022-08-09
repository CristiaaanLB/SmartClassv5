import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class LecturasService {

  constructor(private http: HttpClient) { }

  getLecturasByClassroom(salon){
    salon = salon.replace(/\s/g, '');
    console.log("http://localhost:1337/docencia-1-s?_sort=timestamp:DESC&classroom="+salon+"&_limit=50");
    return this.http.get("http://localhost:1337/docencia-1-s?_sort=timestamp:DESC&classroom="+salon+"&_limit=50");
  }
  
}
