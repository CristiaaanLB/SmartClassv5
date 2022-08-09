import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LecturasService } from "../tools/lecturas.service";

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  edificio;
  id;
  titulo;
  lecturas: any = [
  ];

  constructor(private routerOutlet: IonRouterOutlet, private route: ActivatedRoute, private lecturasService: LecturasService) { }

  goBack() {
    this.routerOutlet.pop();
  }

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.route.paramMap.subscribe(params => {
      this.edificio = params.get('edificio');
      this.id = params.get('id');
    });

    console.log(this.edificio);
    console.log(this.id);

    this.lecturasService.getHistoryByClassroom(this.id, this.edificio).subscribe(
      res => {
        console.log(res);
        this.lecturas = res;
      }, 
      err => console.log(err)
    );

    this.titulo = "Historial de "+this.id;

    console.log(this.titulo);
  }

}
