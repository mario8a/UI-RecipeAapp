import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-categorias-info',
  templateUrl: './categorias-info.page.html',
  styleUrls: ['./categorias-info.page.scss'],
})
export class CategoriasInfoPage implements OnInit {

  personaje:any = [];

  constructor(
    private apiServ: ApiService,
    private routeActive: ActivatedRoute
  ) { }

  ngOnInit() {
    this.obtenerUnPersonaje();
  }

  cerrar() {

  }

  obtenerUnPersonaje() {
    const id = this.routeActive.snapshot.paramMap.get('id');
    this.apiServ.obtenerUnPersonaje(id).subscribe((resp: any) => {
      this.personaje = resp;
    })
  }

}
