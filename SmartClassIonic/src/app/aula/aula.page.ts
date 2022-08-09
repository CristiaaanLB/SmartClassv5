import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LecturasService } from "../tools/lecturas.service";

@Component({
  selector: 'app-aula',
  templateUrl: './aula.page.html',
  styleUrls: ['./aula.page.scss'],
})
export class AulaPage implements OnInit {

  edificio;
  id;
  lecturas: any = [
  ];

  constructor(private routerOutlet: IonRouterOutlet, private route: ActivatedRoute, private router: Router, private lecturasService: LecturasService) { }

  goToHistory(){
    console.log("Loading history...");
    this.router.navigate(['historial/'+this.edificio+"/"+this.id]);
  }

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

    this.lecturasService.getLastByClassroom(this.id, this.edificio).subscribe(
      res => {
        console.log(res);
        this.lecturas = res;
      }, 
      err => console.log(err)
    );
  }
}
