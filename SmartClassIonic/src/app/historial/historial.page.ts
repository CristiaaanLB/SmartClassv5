import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  id;
  titulo;

  constructor(private routerOutlet: IonRouterOutlet, private route: ActivatedRoute) { }

  goBack() {
    this.routerOutlet.pop();
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    console.log(this.id);

    this.titulo = "Historial de "+this.id;

    console.log(this.titulo);
  }

}
