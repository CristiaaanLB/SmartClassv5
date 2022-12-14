import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class LecturasService {

  constructor(private http: HttpClient) { }

  getHistoryByClassroom(salon, edificio){
    salon = salon.replace(/\s/g, '');
    edificio = edificio.replace(/\s/g, '-');
    console.log("http://localhost:1337/"+edificio+"-s?_sort=timestamp:DESC&classroom="+salon+"&_limit=50");
    return this.http.get("http://localhost:1337/docencia-1-s?_sort=timestamp:DESC&classroom="+salon+"&_limit=50");
  }
  
  getLastByClassroom(salon, edificio){
    salon = salon.replace(/\s/g, '');
    edificio = edificio.replace(/\s/g, '-');
    console.log("http://localhost:1337/"+edificio+"-s?_sort=timestamp:DESC&classroom="+salon+"&_limit=1");
    return this.http.get("http://localhost:1337/docencia-1-s?_sort=timestamp:DESC&classroom="+salon+"&_limit=1");
  }
  
}
