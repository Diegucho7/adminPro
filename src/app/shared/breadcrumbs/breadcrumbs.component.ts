import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { every } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: ``
})  
export class BreadcrumbsComponent  {

  constructor(private router: Router){

    this.router.events.subscribe( event =>{
      console.log(event);
    })


  }


}
