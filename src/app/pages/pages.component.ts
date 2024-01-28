import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

// declare function customInitFuction():any; 
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: ``
})

export class PagesComponent implements OnInit{
  

  constructor(settingsService: SettingsService){

  }

  ngOnInit(): void {

    // customInitFuction();
    
  }

  year = new Date().getFullYear();

}
