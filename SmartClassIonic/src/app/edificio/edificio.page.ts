import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';
import {divSize} from "../tools/blueprints.service";
import { DrawService } from "../tools/draw.service";
import { botonesDocencia1PB, botonesDocencia1PA, botonesDocencia2PB, botonesDocencia2PA, botonesDocencia3PB } from '../tools/buttons.service';

@Component({
  selector: 'app-edificio',
  templateUrl: './edificio.page.html',
  styleUrls: ['./edificio.page.scss'],
})
export class EdificioPage implements OnInit {

  botonesizq;
  botonesder;
  botones;
  id;
  level;
  titulo;

  constructor(private router: Router, private route: ActivatedRoute, private platform: Platform, private routerOutlet: IonRouterOutlet) { }

  goBack() {
    this.routerOutlet.pop();
  }

  goToBuilding(building, level){
    console.log("Loading "+building+"...");
    this.router.navigate(['edificio/'+building, level]);
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.level = params.get('level');
    });

    console.log(this.id);
    console.log(this.level);

    if (this.level == "PB"){
      this.titulo = this.id+" Planta Baja";
      console.log("this.titulo changed to Planta Baja");
    }
    else
    if (this.level == "PA"){
      this.titulo = this.id+" Planta Alta";
      console.log("this.titulo changed to Planta Alta");
    }

    console.log(this.titulo);

    const width = this.platform.width()-42;
    console.log(width);

    divSize("svg", width);

    switch (this.id+this.level) {
      case 'Docencia 1PB':
        DrawService.Docencia1PB(width);
        this.botones = botonesDocencia1PB;
        break;
      case 'Docencia 2PB':
        DrawService.Docencia2PB(width);
        this.botones = botonesDocencia2PB;
        break;
      case 'Docencia 3PB':
        DrawService.Docencia3PB(width);
        this.botones = botonesDocencia3PB;
        break;
      case 'Docencia 4PB':
        console.log('Cargando SVG de Docencia 4 PB');
        break;
      case "Docencia 5PB":
        console.log("Cargando SVG de Docencia 5 PB");
        break;
      case 'Docencia 1PA':
        DrawService.Docencia1PA(width);
        this.botones = botonesDocencia1PA;
        break;
      case 'Docencia 2PA':
        DrawService.Docencia2PA(width);
        this.botones = botonesDocencia2PA;
        break;
      case 'Docencia 3PA':
        console.log('Cargando SVG de Docencia 3 PA');
        break;
      case 'Docencia 4PA':
        console.log('Cargando SVG de Docencia 4 PA');
        break;
      case "Docencia 5PA":
        console.log("Cargando SVG de Docencia 5 PA");
    }
  }

}
