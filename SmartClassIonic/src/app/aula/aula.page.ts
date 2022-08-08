import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.page.html',
  styleUrls: ['./aula.page.scss'],
})
export class AulaPage implements OnInit {

  id;

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
  }
}
