import { Injectable } from '@angular/core';
import { Door, Walls } from "../tools/blueprints.service";

@Injectable({
  providedIn: 'root'
})
export class DrawService {

  constructor() { }

  static Docencia1PB(width){
    //Draw walls
    Walls.draw("svg", {
      id: "Edificio",
      position: {
          x: 0,
          y: 0
      },
      size: {
          width: 27,
          length: 50
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "ParedRecepcion",
      position: {
          x: 0,
          y: 34
      },
      size: {
          width: 17,
          length: 0.2
      },
      style: {
          color: "black",
          backgroundColor: "black"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "ParedBaños",
      position: {
          x: 17,
          y: 34
      },
      size: {
          width: 0.2,
          length: 4
      },
      style: {
          color: "black",
          backgroundColor: "black"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "ParedBaños2",
      position: {
          x: 17,
          y: 42
      },
      size: {
          width: 6,
          length: 0.2
      },
      style: {
          color: "black",
          backgroundColor: "black"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaCubiculos",
      position: {
          x: 10,
          y: 39.5
      },
      length: 2.75,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "west",
          swing: "clockwise"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaRecepcion",
      position: {
          x: 13.5,
          y: 34
      },
      length: 2,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "south",
          swing: "clockwise"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaRecepcion",
      position: {
          x: 15.5,
          y: 34
      },
      length: 2,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "south",
          swing: "counterclockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "Salon5",
      position: {
          x: 0,
          y: 0
      },
      size: {
          width: 10,
          length: 4.5
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaSalon5",
      position: {
          x: 10,
          y: 2.25
      },
      length: 2,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "west",
          swing: "clockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "Salon6",
      position: {
          x: 17,
          y: 0
      },
      size: {
          width: 10,
          length: 4.5
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaSalon6",
      position: {
          x: 17,
          y: 2.25
      },
      length: 2,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "east",
          swing: "clockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "Salon4",
      position: {
          x: 0,
          y: 4.5
      },
      size: {
          width: 10,
          length: 4.5
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaSalon4",
      position: {
          x: 10,
          y: 6.5
      },
      length: 2,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "west",
          swing: "clockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "Salon7",
      position: {
          x: 17,
          y: 4.5
      },
      size: {
          width: 10,
          length: 4.5
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaSalon7",
      position: {
          x: 17,
          y: 6.75
      },
      length: 2,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "east",
          swing: "clockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "Salon3",
      position: {
          x: 0,
          y: 9
      },
      size: {
          width: 10,
          length: 4.5
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaSalon3",
      position: {
          x: 10,
          y: 11
      },
      length: 2,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "west",
          swing: "clockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "Salon8",
      position: {
          x: 17,
          y: 9
      },
      size: {
          width: 10,
          length: 4.5
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaSalon8",
      position: {
          x: 17,
          y: 11.5
      },
      length: 2,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "east",
          swing: "clockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "Salon9",
      position: {
          x: 17,
          y: 13.5
      },
      size: {
          width: 10,
          length: 4.5
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaSalon8",
      position: {
          x: 17,
          y: 16
      },
      length: 2,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "east",
          swing: "clockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "Soporte",
      position: {
          x: 17,
          y: 18
      },
      size: {
          width: 10,
          length: 4.5
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaSoporte",
      position: {
          x: 17,
          y: 18
      },
      length: 2,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "east",
          swing: "counterclockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "LabRedes",
      position: {
          x: 17,
          y: 22.5
      },
      size: {
          width: 10,
          length: 4.5
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaLabRedes",
      position: {
          x: 17.5,
          y: 27
      },
      length: 2,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "north",
          swing: "counterclockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "Laboratorio1",
      position: {
          x: 0,
          y: 13.5
      },
      size: {
          width: 10,
          length: 6.5
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaLaboratorio1",
      position: {
          x: 10,
          y: 20
      },
      length: 2,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "west",
          swing: "counterclockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "Audiovisual",
      position: {
          x: 0,
          y: 20
      },
      size: {
          width: 10,
          length: 6.75
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaAudiovisual",
      position: {
          x: 0.5,
          y: 26.8
      },
      length: 2,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "north",
          swing: "counterclockwise"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaAudiovisual",
      position: {
          x: 7.5,
          y: 26.8
      },
      length: 2,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "north",
          swing: "clockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "Cubiculo1",
      position: {
          x: 0,
          y: 34
      },
      size: {
          width: 4.5,
          length: 2.7
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaCubiculo1",
      position: {
          x: 4.5,
          y: 36.5
      },
      length: 1.5,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "west",
          swing: "counterclockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "Cubiculo2",
      position: {
          x: 0,
          y: 36.7
      },
      size: {
          width: 4.5,
          length: 2.7
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaCubiculo2",
      position: {
          x: 4.5,
          y: 39.5
      },
      length: 1.5,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "west",
          swing: "counterclockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "Cubiculo3",
      position: {
          x: 0,
          y: 39.4
      },
      size: {
          width: 4.5,
          length: 2.7
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaCubiculo3",
      position: {
          x: 4.5,
          y: 42
      },
      length: 1.5,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "west",
          swing: "counterclockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "Cubiculo4",
      position: {
          x: 0,
          y: 42.1
      },
      size: {
          width: 4.5,
          length: 2.7
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaCubiculo4",
      position: {
          x: 4.5,
          y: 45
      },
      length: 1.5,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "west",
          swing: "counterclockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "Cubiculo5",
      position: {
          x: 0,
          y: 44.8
      },
      size: {
          width: 10,
          length: 5.2
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaCubiculo5",
      position: {
          x: 5.5,
          y: 44.75
      },
      length: 1.5,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "south",
          swing: "counterclockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "Cubiculo6",
      position: {
          x: 5.5,
          y: 42.1
      },
      size: {
          width: 4.5,
          length: 2.7
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaCubiculo6",
      position: {
          x: 5.5,
          y: 42
      },
      length: 1.5,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "east",
          swing: "counterclockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "Cubiculo7",
      position: {
          x: 5.5,
          y: 39.4
      },
      size: {
          width: 4.5,
          length: 2.7
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaCubiculo7",
      position: {
          x: 5.5,
          y: 39.5
      },
      length: 1.5,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "east",
          swing: "counterclockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "Cubiculo8",
      position: {
          x: 5.5,
          y: 34
      },
      size: {
          width: 4.5,
          length: 2.7
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaCubiculo8",
      position: {
          x: 5.5,
          y: 34.25
      },
      length: 1.5,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "east",
          swing: "counterclockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "DesarrolloDeSoftware",
      position: {
          x: 10,
          y: 44.8
      },
      size: {
          width: 7,
          length: 5.2
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaDesarrolloDeSoftware",
      position: {
          x: 16.5,
          y: 44.75
      },
      length: 1.5,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "south",
          swing: "clockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "BañoMujeres",
      position: {
          x: 20,
          y: 34
      },
      size: {
          width: 7,
          length: 4
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaBañoMujeres",
      position: {
          x: 20,
          y: 36
      },
      length: 2,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "east",
          swing: "clockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "BañoHombres",
      position: {
          x: 17,
          y: 38
      },
      size: {
          width: 10,
          length: 4
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaBañoHombres",
      position: {
          x: 19.5,
          y: 38
      },
      length: 2,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "south",
          swing: "clockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "Cuartito",
      position: {
          x: 22,
          y: 42
      },
      size: {
          width: 5,
          length: 4
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaCuartito",
      position: {
          x: 22,
          y: 44
      },
      length: 2,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "east",
          swing: "counterclockwise"
      },
      platform: {
        width: width
      }
  });

  Walls.draw("svg", {
      id: "SalaDeJuntas",
      position: {
          x: 17,
          y: 46
      },
      size: {
          width: 10,
          length: 4
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  Door.draw("svg", {
      id: "PuertaSalaDeJuntas",
      position: {
          x: 22,
          y: 46
      },
      length: 2,
      style: {
          color: "black",
          backgroundColor: "white"
      },
      orientation: {
          facing: "south",
          swing: "counterclockwise"
      },
      platform: {
        width: width
      }
  });
  }

  static Docencia1PA(width){
    //Draw walls
    Walls.draw("svg", {
        id: "Edificio",
        position: {
            x: 0,
            y: 0
        },
        size: {
            width: 27,
            length: 51
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon361",
        position: {
            x: 0,
            y: 0
        },
        size: {
            width: 10,
            length: 4.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon361",
        position: {
            x: 10,
            y: 2.3
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon362",
        position: {
            x: 17,
            y: 0
        },
        size: {
            width: 10,
            length: 4.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon362",
        position: {
            x: 17,
            y: 2.5
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon360",
        position: {
            x: 0,
            y: 4.5
        },
        size: {
            width: 10,
            length: 4.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon360",
        position: {
            x: 10,
            y: 6.7
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon363",
        position: {
            x: 17,
            y: 4.5
        },
        size: {
            width: 10,
            length: 4.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon363",
        position: {
            x: 17,
            y: 7.2
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon359",
        position: {
            x: 0,
            y: 9
        },
        size: {
            width: 10,
            length: 4.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon359",
        position: {
            x: 10,
            y: 11.2
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon364",
        position: {
            x: 17,
            y: 9
        },
        size: {
            width: 10,
            length: 4.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon364",
        position: {
            x: 17,
            y: 11.4
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon365",
        position: {
            x: 17,
            y: 13.5
        },
        size: {
            width: 10,
            length: 5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon365",
        position: {
            x: 17,
            y: 16.2
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon358",
        position: {
            x: 0,
            y: 13.5
        },
        size: {
            width: 10,
            length: 5.2
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon358",
        position: {
            x: 10,
            y: 18.6
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon357",
        position: {
            x: 0,
            y: 18.6
        },
        size: {
            width: 10,
            length: 5.2
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon356",
        position: {
            x: 0,
            y: 23.5
        },
        size: {
            width: 10,
            length: 5.2
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon357",
        position: {
            x: 7.4,
            y: 23.9
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "north",
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon356",
        position: {
            x: 10,
            y: 25.8
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon366",
        position: {
            x: 17,
            y: 18.5
        },
        size: {
            width: 10,
            length: 5.2
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon366",
        position: {
            x: 19.3,
            y: 18.5
        },
        length: 1.9,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "nose",
        position: {
            x: 0,
            y: 28.4
        },
        size: {
            width: 10,
            length: 22.6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo1",
        position: {
            x: 0,
            y: 28.4
        },
        size: {
            width: 4.1,
            length: 3.9
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo2",
        position: {
            x: 0,
            y: 32
        },
        size: {
            width: 4.1,
            length: 3.9
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo3",
        position: {
            x: 0,
            y: 35.6
        },
        size: {
            width: 4.1,
            length: 3.9
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo4",
        position: {
            x: 0,
            y: 39.3
        },
        size: {
            width: 4.1,
            length: 3.9
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo5",
        position: {
            x: 0,
            y: 43.1
        },
        size: {
            width: 4.1,
            length: 4
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "Cubículo6",
        position: {
            x: 0,
            y: 46.9
        },
        size: {
            width: 4.1,
            length: 4
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "Cubículo7",
        position: {
            x: 0,
            y: 46.9
        },
        size: {
            width: 4.1,
            length: 4
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "Cubículo8",
        position: {
            x: 6,
            y: 39.4
        },
        size: {
            width: 4,
            length: 11.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "EspacioGrande",
        position: {
            x: 9.8,
            y: 28.4
        },
        size: {
            width: 17.2,
            length: 22.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo9",
        position: {
            x: 9.8,
            y: 39.4
        },
        size: {
            width: 6,
            length: 11.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo10",
        position: {
            x: 15.6,
            y: 44.9
        },
        size: {
            width: 11.4,
            length: 6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "CubículoPequeño",
        position: {
            x: 15.6,
            y: 47.7
        },
        size: {
            width: 3.2,
            length: 3.2
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "SalaChica1",
        position: {
            x: 9.8,
            y: 34
        },
        size: {
            width: 3.1,
            length: 5.6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "SalaChica2",
        position: {
            x: 12.7,
            y: 34
        },
        size: {
            width: 3.1,
            length: 5.6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    
    Walls.draw("svg", {
        id: "Sala1",
        position: {
            x: 22,
            y: 39.5
        },
        size: {
            width: 5,
            length: 5.6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Sala2",
        position: {
            x: 22,
            y: 34.1
        },
        size: {
            width: 5,
            length: 5.6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "Sala3",
        position: {
            x: 22,
            y: 28.4
        },
        size: {
            width: 5,
            length: 5.9
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta7",
        position: {
            x: 4.2,
            y: 32
        },
        length: 1.9,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta8",
        position: {
            x: 4.2,
            y: 35.6
        },
        length: 1.9,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta9",
        position: {
            x: 4.2,
            y: 39.3
        },
        length: 1.9,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta10",
        position: {
            x: 4.2,
            y: 43
        },
        length: 1.9,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta11",
        position: {
            x: 4.2,
            y: 46.9
        },
        length: 1.9,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta12",
        position: {
            x: 4.2,
            y: 50.7
        },
        length: 1.9,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta13",
        position: {
            x: 10,
            y: 34
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta14",
        position: {
            x: 4.2,
            y: 46.9
        },
        length: 1.9,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta15",
        position: {
            x: 9.5,
            y: 39.5
        },
        length: 1.9,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }

    });

    Door.draw("svg", {
        id: "puerta21",
        position: {
            x: 14.1,
            y: 28.3
        },
        length: 2.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta22",
        position: {
            x: 16.2,
            y: 28.3
        },
        length: 2.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta23",
        position: {
            x: 12.6,
            y: 33.9
        },
        length: 1.7,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta24",
        position: {
            x: 15.9,
            y: 39.4
        },
        length: 1.7,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta25",
        position: {
            x: 15.9,
            y: 41.5
        },
        length: 1.7,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta26",
        position: {
            x: 18.5,
            y: 47.7
        },
        length: 1.5,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta27",
        position: {
            x: 22,
            y: 45
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta28",
        position: {
            x: 21.9,
            y: 43
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta29",
        position: {
            x: 21.9,
            y: 34.4
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta30",
        position: {
            x: 21.9,
            y: 32.1
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });
  }

  static Docencia2PB(width){
    //Draw walls
    Walls.draw("svg", {
        id: "Edificio",
        position: {
            x: 0,
            y: 0
        },
        size: {
            width: 27,
            length: 51
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "Salón362",
        position: {
            x: 17,
            y: 0
        },
        size: {
            width: 10,
            length: 5.4
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salón360",
        position: {
            x: 0,
            y: 0
        },
        size: {
            width: 10,
            length: 12
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salón363",
        position: {
            x: 17,
            y: 4.5
        },
        size: {
            width: 10,
            length: 5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salón364",
        position: {
            x: 17,
            y: 9.4
        },
        size: {
            width: 10,
            length: 5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "Salón358",
        position: {
            x: 17,
            y: 12.8
        },
        size: {
            width: 10,
            length: 5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "358",
        position: {
            x: 0,
            y: 11
        },
        size: {
            width: 10,
            length: 5.2
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "357",
        position: {
            x: 0,
            y: 15.9
        },
        size: {
            width: 10,
            length: 7
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "366",
        position: {
            x: 17,
            y: 17.6
        },
        size: {
            width: 10,
            length: 5.2
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "nose",
        position: {
            x: 0,
            y: 28.4
        },
        size: {
            width: 10,
            length: 22.6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo4",
        position: {
            x: 0,
            y: 28.5
        },
        size: {
            width: 9.9,
            length: 7.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo5",
        position: {
            x: 0,
            y: 35.9
        },
        size: {
            width: 9.9,
            length: 7.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "Cubículo6",
        position: {
            x: 0,
            y: 43.3
        },
        size: {
            width: 9.9,
            length: 7.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "EspacioGrande",
        position: {
            x: 9.8,
            y: 28.4
        },
        size: {
            width: 17.2,
            length: 22.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo9",
        position: {
            x: 9.8,
            y: 39.4
        },
        size: {
            width: 6,
            length: 11.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo10",
        position: {
            x: 15.6,
            y: 44.9
        },
        size: {
            width: 11.4,
            length: 6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "CubículoPequeño",
        position: {
            x: 15.6,
            y: 47.7
        },
        size: {
            width: 3.2,
            length: 3.2
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "SalaChica1",
        position: {
            x: 9.8,
            y: 34
        },
        size: {
            width: 3.1,
            length: 5.6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "SalaChica2",
        position: {
            x: 12.7,
            y: 34
        },
        size: {
            width: 3.1,
            length: 5.6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    
    Walls.draw("svg", {
        id: "Sala1",
        position: {
            x: 22,
            y: 39.5
        },
        size: {
            width: 5,
            length: 5.6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Sala2",
        position: {
            x: 22,
            y: 34.1
        },
        size: {
            width: 5,
            length: 5.6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "Sala3",
        position: {
            x: 22,
            y: 28.4
        },
        size: {
            width: 5,
            length: 5.9
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    //Draw door
    Door.draw("svg", {
        id: "puerta1",
        position: {
            x: 2.3,
            y: 4.2
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta2",
        position: {
            x: 2.3,
            y: 2.3
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta3",
        position: {
            x: 4.9,
            y: 16
        },
        length: 2.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta4",
        position: {
            x: 7.2,
            y: 16
        },
        length: 2.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta6",
        position: {
            x: 7.2,
            y: 22.5
        },
        length: 2.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta7",
        position: {
            x: 4.9,
            y: 22.5
        },
        length: 2.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta8",
        position: {
            x: 2.3,
            y: 15.6
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta9",
        position: {
            x: 2.3,
            y: 13.7
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta10",
        position: {
            x: 0,
            y: 23.3
        },
        length: 1.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta11",
        position: {
            x: 0,
            y: 24.4
        },
        length: 1.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta12",
        position: {
            x: 0,
            y: 25.8
        },
        length: 1.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta13",
        position: {
            x: 0,
            y: 26.9
        },
        length: 1.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta14",
        position: {
            x: 10,
            y: 34
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta15",
        position: {
            x: 10,
            y: 42.5
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta16",
        position: {
            x: 10,
            y: 42.5
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta17",
        position: {
            x: 10,
            y: 48
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });


    Door.draw("svg", {
        id: "puerta18",
        position: {
            x: 17,
            y: 2.3
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta19",
        position: {
            x: 17,
            y: 7.2
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta20",
        position: {
            x: 17,
            y: 10.9
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta21",
        position: {
            x: 17,
            y: 15.6
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta22",
        position: {
            x: 17.1,
            y: 17.9
        },
        length: 1.9,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta23",
        position: {
            x: 14.1,
            y: 28.3
        },
        length: 2.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta24",
        position: {
            x: 16.2,
            y: 28.3
        },
        length: 2.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta25",
        position: {
            x: 12.6,
            y: 33.9
        },
        length: 1.7,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta26",
        position: {
            x: 15.9,
            y: 39.4
        },
        length: 1.7,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta27",
        position: {
            x: 15.9,
            y: 41.5
        },
        length: 1.7,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta28",
        position: {
            x: 18.5,
            y: 47.7
        },
        length: 1.5,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta29",
        position: {
            x: 22,
            y: 45
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta30",
        position: {
            x: 21.9,
            y: 43
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta31",
        position: {
            x: 21.9,
            y: 34.4
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta32",
        position: {
            x: 21.9,
            y: 32.1
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });
  }

  static Docencia2PA(width){
    //Draw walls
    Walls.draw("svg", {
        id: "Edificio",
        position: {
            x: 0,
            y: 0
        },
        size: {
            width: 27,
            length: 51
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon361",
        position: {
            x: 0,
            y: 0
        },
        size: {
            width: 10,
            length: 4.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon361",
        position: {
            x: 10,
            y: 2.3
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon362",
        position: {
            x: 17,
            y: 0
        },
        size: {
            width: 10,
            length: 4.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon362",
        position: {
            x: 17,
            y: 2.5
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon360",
        position: {
            x: 0,
            y: 4.5
        },
        size: {
            width: 10,
            length: 4.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon360",
        position: {
            x: 10,
            y: 6.7
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon363",
        position: {
            x: 17,
            y: 4.5
        },
        size: {
            width: 10,
            length: 4.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon363",
        position: {
            x: 17,
            y: 7.2
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon359",
        position: {
            x: 0,
            y: 9
        },
        size: {
            width: 10,
            length: 4.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon359",
        position: {
            x: 10,
            y: 11.2
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon364",
        position: {
            x: 17,
            y: 9
        },
        size: {
            width: 10,
            length: 4.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon364",
        position: {
            x: 17,
            y: 11.4
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon365",
        position: {
            x: 17,
            y: 13.5
        },
        size: {
            width: 10,
            length: 5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon365",
        position: {
            x: 17,
            y: 16.2
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon358",
        position: {
            x: 0,
            y: 13.5
        },
        size: {
            width: 10,
            length: 5.2
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon358",
        position: {
            x: 10,
            y: 18.6
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon357",
        position: {
            x: 0,
            y: 18.6
        },
        size: {
            width: 10,
            length: 5.2
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon356",
        position: {
            x: 0,
            y: 23.5
        },
        size: {
            width: 10,
            length: 5.2
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon357",
        position: {
            x: 7.4,
            y: 23.9
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "north",
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon356",
        position: {
            x: 10,
            y: 25.8
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salon366",
        position: {
            x: 17,
            y: 18.5
        },
        size: {
            width: 10,
            length: 5.2
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "PuertaSalon366",
        position: {
            x: 19.3,
            y: 18.5
        },
        length: 1.9,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "nose",
        position: {
            x: 0,
            y: 28.4
        },
        size: {
            width: 10,
            length: 22.6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo1",
        position: {
            x: 0,
            y: 28.4
        },
        size: {
            width: 4.1,
            length: 3.9
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo2",
        position: {
            x: 0,
            y: 32
        },
        size: {
            width: 4.1,
            length: 3.9
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo3",
        position: {
            x: 0,
            y: 35.6
        },
        size: {
            width: 4.1,
            length: 3.9
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo4",
        position: {
            x: 0,
            y: 39.3
        },
        size: {
            width: 4.1,
            length: 3.9
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo5",
        position: {
            x: 0,
            y: 43.1
        },
        size: {
            width: 4.1,
            length: 4
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "Cubículo6",
        position: {
            x: 0,
            y: 46.9
        },
        size: {
            width: 4.1,
            length: 4
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "Cubículo7",
        position: {
            x: 0,
            y: 46.9
        },
        size: {
            width: 4.1,
            length: 4
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "Cubículo8",
        position: {
            x: 6,
            y: 39.4
        },
        size: {
            width: 4,
            length: 11.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "EspacioGrande",
        position: {
            x: 9.8,
            y: 28.4
        },
        size: {
            width: 17.2,
            length: 22.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo9",
        position: {
            x: 9.8,
            y: 39.4
        },
        size: {
            width: 6,
            length: 11.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo10",
        position: {
            x: 15.6,
            y: 44.9
        },
        size: {
            width: 11.4,
            length: 6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "CubículoPequeño",
        position: {
            x: 15.6,
            y: 47.7
        },
        size: {
            width: 3.2,
            length: 3.2
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "SalaChica1",
        position: {
            x: 9.8,
            y: 34
        },
        size: {
            width: 3.1,
            length: 5.6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "SalaChica2",
        position: {
            x: 12.7,
            y: 34
        },
        size: {
            width: 3.1,
            length: 5.6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    
    Walls.draw("svg", {
        id: "Sala1",
        position: {
            x: 22,
            y: 39.5
        },
        size: {
            width: 5,
            length: 5.6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Sala2",
        position: {
            x: 22,
            y: 34.1
        },
        size: {
            width: 5,
            length: 5.6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "Sala3",
        position: {
            x: 22,
            y: 28.4
        },
        size: {
            width: 5,
            length: 5.9
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta7",
        position: {
            x: 4.2,
            y: 32
        },
        length: 1.9,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta8",
        position: {
            x: 4.2,
            y: 35.6
        },
        length: 1.9,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta9",
        position: {
            x: 4.2,
            y: 39.3
        },
        length: 1.9,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta10",
        position: {
            x: 4.2,
            y: 43
        },
        length: 1.9,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta11",
        position: {
            x: 4.2,
            y: 46.9
        },
        length: 1.9,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta12",
        position: {
            x: 4.2,
            y: 50.7
        },
        length: 1.9,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta13",
        position: {
            x: 10,
            y: 34
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta14",
        position: {
            x: 4.2,
            y: 46.9
        },
        length: 1.9,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta15",
        position: {
            x: 9.5,
            y: 39.5
        },
        length: 1.9,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }

    });

    Door.draw("svg", {
        id: "puerta21",
        position: {
            x: 14.1,
            y: 28.3
        },
        length: 2.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta22",
        position: {
            x: 16.2,
            y: 28.3
        },
        length: 2.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta23",
        position: {
            x: 12.6,
            y: 33.9
        },
        length: 1.7,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta24",
        position: {
            x: 15.9,
            y: 39.4
        },
        length: 1.7,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta25",
        position: {
            x: 15.9,
            y: 41.5
        },
        length: 1.7,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta26",
        position: {
            x: 18.5,
            y: 47.7
        },
        length: 1.5,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta27",
        position: {
            x: 22,
            y: 45
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta28",
        position: {
            x: 21.9,
            y: 43
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta29",
        position: {
            x: 21.9,
            y: 34.4
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta30",
        position: {
            x: 21.9,
            y: 32.1
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });
  }

  static Docencia3PB(width){
    //Draw walls
    Walls.draw("svg", {
        id: "Edificio",
        position: {
            x: 0,
            y: 0
        },
        size: {
            width: 27,
            length: 51
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "Salón362",
        position: {
            x: 17,
            y: 0
        },
        size: {
            width: 10,
            length: 5.4
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salón360",
        position: {
            x: 0,
            y: 0
        },
        size: {
            width: 10,
            length: 12
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salón363",
        position: {
            x: 17,
            y: 4.5
        },
        size: {
            width: 10,
            length: 5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Salón364",
        position: {
            x: 17,
            y: 9.4
        },
        size: {
            width: 10,
            length: 5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "Salón358",
        position: {
            x: 17,
            y: 12.8
        },
        size: {
            width: 10,
            length: 5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "358",
        position: {
            x: 0,
            y: 11
        },
        size: {
            width: 10,
            length: 5.2
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "357",
        position: {
            x: 0,
            y: 15.9
        },
        size: {
            width: 10,
            length: 7
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "366",
        position: {
            x: 17,
            y: 17.6
        },
        size: {
            width: 10,
            length: 5.2
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "nose",
        position: {
            x: 0,
            y: 28.4
        },
        size: {
            width: 10,
            length: 22.6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo4",
        position: {
            x: 0,
            y: 28.5
        },
        size: {
            width: 9.9,
            length: 7.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo5",
        position: {
            x: 0,
            y: 35.9
        },
        size: {
            width: 9.9,
            length: 7.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "Cubículo6",
        position: {
            x: 0,
            y: 43.3
        },
        size: {
            width: 9.9,
            length: 7.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "EspacioGrande",
        position: {
            x: 9.8,
            y: 28.4
        },
        size: {
            width: 17.2,
            length: 22.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo9",
        position: {
            x: 9.8,
            y: 39.4
        },
        size: {
            width: 6,
            length: 11.5
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Cubículo10",
        position: {
            x: 15.6,
            y: 44.9
        },
        size: {
            width: 11.4,
            length: 6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "CubículoPequeño",
        position: {
            x: 15.6,
            y: 47.7
        },
        size: {
            width: 3.2,
            length: 3.2
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "SalaChica1",
        position: {
            x: 9.8,
            y: 34
        },
        size: {
            width: 3.1,
            length: 5.6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "SalaChica2",
        position: {
            x: 12.7,
            y: 34
        },
        size: {
            width: 3.1,
            length: 5.6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    
    Walls.draw("svg", {
        id: "Sala1",
        position: {
            x: 22,
            y: 39.5
        },
        size: {
            width: 5,
            length: 5.6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    Walls.draw("svg", {
        id: "Sala2",
        position: {
            x: 22,
            y: 34.1
        },
        size: {
            width: 5,
            length: 5.6
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });
    Walls.draw("svg", {
        id: "Sala3",
        position: {
            x: 22,
            y: 28.4
        },
        size: {
            width: 5,
            length: 5.9
        },
        style: {
            color: "black",
            backgroundColor: "white"
        },
      platform: {
        width: width
      }
    });

    //Draw door
    Door.draw("svg", {
        id: "puerta1",
        position: {
            x: 2.3,
            y: 4.2
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta2",
        position: {
            x: 2.3,
            y: 2.3
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta3",
        position: {
            x: 4.9,
            y: 16
        },
        length: 2.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta4",
        position: {
            x: 7.2,
            y: 16
        },
        length: 2.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta6",
        position: {
            x: 7.2,
            y: 22.5
        },
        length: 2.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta7",
        position: {
            x: 4.9,
            y: 22.5
        },
        length: 2.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta8",
        position: {
            x: 2.3,
            y: 15.6
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta9",
        position: {
            x: 2.3,
            y: 13.7
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta10",
        position: {
            x: 0,
            y: 23.3
        },
        length: 1.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta11",
        position: {
            x: 0,
            y: 24.4
        },
        length: 1.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta12",
        position: {
            x: 0,
            y: 25.8
        },
        length: 1.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta13",
        position: {
            x: 0,
            y: 26.9
        },
        length: 1.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta14",
        position: {
            x: 10,
            y: 34
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta15",
        position: {
            x: 10,
            y: 42.5
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta16",
        position: {
            x: 10,
            y: 42.5
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta17",
        position: {
            x: 10,
            y: 48
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });


    Door.draw("svg", {
        id: "puerta18",
        position: {
            x: 17,
            y: 2.3
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta19",
        position: {
            x: 17,
            y: 7.2
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta20",
        position: {
            x: 17,
            y: 10.9
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta21",
        position: {
            x: 17,
            y: 15.6
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta22",
        position: {
            x: 17.1,
            y: 17.9
        },
        length: 1.9,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta23",
        position: {
            x: 14.1,
            y: 28.3
        },
        length: 2.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta24",
        position: {
            x: 16.2,
            y: 28.3
        },
        length: 2.3,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });
    Door.draw("svg", {
        id: "puerta25",
        position: {
            x: 12.6,
            y: 33.9
        },
        length: 1.7,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta26",
        position: {
            x: 15.9,
            y: 39.4
        },
        length: 1.7,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta27",
        position: {
            x: 15.9,
            y: 41.5
        },
        length: 1.7,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "west",
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta28",
        position: {
            x: 18.5,
            y: 47.7
        },
        length: 1.5,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta29",
        position: {
            x: 22,
            y: 45
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "south",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta30",
        position: {
            x: 21.9,
            y: 43
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta31",
        position: {
            x: 21.9,
            y: 34.4
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
            swing: "counterclockwise"
        },
      platform: {
        width: width
      }
    });

    Door.draw("svg", {
        id: "puerta32",
        position: {
            x: 21.9,
            y: 32.1
        },
        length: 2,
        style: {
            color: "black",
            backgroundColor: "white"
        },
        orientation: {
            facing: "east",
        },
      platform: {
        width: width
      }
    });
  }
}