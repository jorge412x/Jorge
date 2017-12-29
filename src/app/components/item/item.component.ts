import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent {

  constructor( private route:ActivatedRoute) { 

    route.params.subscribe( parametros=>{
      
console.log( parametros );
console.log( parametros['id']  );

    })
  }

}
