import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tiendita',
  templateUrl: './tiendita.page.html',
  styleUrls: ['./tiendita.page.scss'],
})
export class TienditaPage implements OnInit {

  personajes:[] = [];

  slideCateOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 3.5
  };

  categorias = [
    {
      id: 1,
      foto: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      nombreCate: 'Pizzas',
      productos: {
        id: 1,
        nombre: 'Pizza Mexicana',
        descuento: 2
      }
    },
    {
      id: 2,
      foto: 'https://images.unsplash.com/photo-1562281556-0f8c259a9f3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGFzdGFzfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      nombreCate: 'Pastas',
      productos: {
        id: 1,
        nombre: 'Pasta itualzian',
        descuento: 5
      }
    },
    {
      id: 3,
      foto: 'https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      nombreCate: 'Salad',
      productos: {
        id: 1,
        nombre: 'Ensalada rusa',
        descuento: 5
      }
    },
    {
      id: 4,
      foto: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFjb3N8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      nombreCate: 'Tacos',
      productos: {
        id: 1,
        nombre: 'Tacos al pastor',
        descuento: 3
      }
    },
    {
      id: 5,
      foto: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      nombreCate: 'Burgers',
      productos: {
        id: 1,
        nombre: 'Hamburgesa doble',
        descuento: 0
      }
    }
  ]

  constructor(
    private apiServ: ApiService
  ) { }

  ngOnInit() {
    this.obtenerInfo();
  }

  obtenerInfo() {
    this.apiServ.obtenerPersonaje().subscribe((resp: any) => {
      console.log(resp.results)
      this.personajes = resp.results;
    })
  }


}
