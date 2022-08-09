import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LecturasService } from "../tools/lecturas.service";
import { Chart } from "chart.js";

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
    this.route.paramMap.subscribe(params => {
      this.edificio = params.get('edificio');
      this.id = params.get('id');
    });

    this.drawTemperatureChart();

    this.drawHumidityChart();

    //setInterval("location.reload()",5000)
  }

  drawTemperatureChart(){
    var xmlhttp = new XMLHttpRequest();

    this.id = this.id.replace(/\s/g, '');
    this.edificio = this.edificio.replace(/\s/g, '-');
    var url = "http://localhost:1337/"+this.edificio+"-s?_sort=timestamp:ASC&classroom="+this.id+"&_limit=5";
    console.log(url);

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);

        //temperature
        var temperature = data.map(function(elem){
          return elem.temperature});
          //timestamp
        var timestamp = data.map(function(elem){
          return String(new Date(elem.timestamp)).substring(15, 24)});
          
      }//if

    var canvas2 = document.getElementById('temperatureChart');
    var ctx = (canvas2 as HTMLCanvasElement).getContext('2d');
    var chartExist = Chart.getChart("temperatureChart");

    if (chartExist != undefined)  
      chartExist.destroy();

    const temperatureChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: timestamp,
          datasets: [{
              label: 'Temperatura',
              data: temperature,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
          }
        }
      });
    }//xmlhttp
  }

  drawHumidityChart(){
    var xmlhttp = new XMLHttpRequest();

    this.id = this.id.replace(/\s/g, '');
    this.edificio = this.edificio.replace(/\s/g, '-');
    var url = "http://localhost:1337/"+this.edificio+"-s?_sort=timestamp:ASC&classroom="+this.id+"&_limit=5";
    console.log(url);

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);

        //humidity
        var RH = data.map(function(elem){
          return elem.RH});
          //timestamp
        var timestamp = data.map(function(elem){
          return String(new Date(elem.timestamp)).substring(15, 24)});
          
      }//if

    var canvas2 = document.getElementById('humidityChart');
    var ctx = (canvas2 as HTMLCanvasElement).getContext('2d');
    var chartExist = Chart.getChart("humidityChart");

    if (chartExist != undefined)  
      chartExist.destroy();

    const humidityChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: timestamp,
          datasets: [{
              label: 'Humedad relativa',
              data: RH,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
          }
        }
      });
    }//xmlhttp
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
