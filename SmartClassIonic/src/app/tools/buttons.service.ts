import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {

  constructor() { }
}

export const botonesDocencia1PBI: any = [
  {name: "Salon 5"},
  {name: "Salon 4"},
  {name: "Salon 3"},
  {name: "Laboratorio 1"},
  {name: "Audiovisual"}
]

export const botonesDocencia1PBD: any = [
  {name: "Salon 6"},
  {name: "Salon 7"},
  {name: "Salon 8"},
  {name: "Salon 9"},
  {name: "Laboratorio Redes"}
]

export const botonesDocencia1PB: any = [
  {salonizq: "Salon 5", salonder: "Salon 6"},
  {salonizq: "Salon 4", salonder: "Salon 7"},
  {salonizq: "Salon 3", salonder: "Salon 8"},
  {salonizq: "Laboratorio 1", salonder: "Salon 9"},
  {salonizq: "Audiovisual", salonder: "Laboratorio Redes"}
]