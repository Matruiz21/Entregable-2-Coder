import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  notaParaAprobar = 7;
  hoy = Date.now();

  alumnos = [
    {
      nombre: 'Mateo',
      apellido: 'Ruiz',
      fechaNacimiento: '21/11/1999',
      nota: 9,
    },
    {
      nombre: 'Mateo2',
      apellido: 'Ruiz',
      fechaNacimiento: '23/11/1999',
      nota: 4,
    },
    {
      nombre: 'Valen',
      apellido: 'Ruiz',
      fechaNacimiento: '21/11/2004',
      nota: 9,
    },
    {
      nombre: 'Marcelo',
      apellido: 'Ruiz',
      fechaNacimiento: '21/11/1999',
      nota: 2,
    },
    {
      nombre: 'Karina',
      apellido: 'Basilio',
      fechaNacimiento: '08/07/1973',
      nota: 10,
    },
    {
      nombre: 'Mateo3',
      apellido: 'Ruiz',
      fechaNacimiento: '21/11/1999',
      nota: 1,
    },

  ]


  constructor() { }

  ngOnInit(): void {
  }

  cambiarNotaParaAprobar() {
    this.notaParaAprobar = Math.round(Math.random() * 10)
  }

}
