import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent {

  producto:any = undefined;
  cod:string = undefined;

  constructor( private route:ActivatedRoute,
               private _ps: ProductosService) { 

    route.params.subscribe( parametros=>{

// console.log( parametros );
// console.log( parametros['id']  );

_ps.cargar_producto( parametros['id'] )
.subscribe( res => {

  this.cod = parametros['id'];
this.producto = res.json();
// console.log( this.producto );

});

    })
  }

}
