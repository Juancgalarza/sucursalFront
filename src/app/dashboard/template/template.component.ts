import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  public opened = false;

  public menus:any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.loadMenus();
  }

  loadMenus(){
    this.menus = [
      {
        name: 'Home',
        icon: 'home',
        path: 'home'
      },
      {
        name: 'Users',
        icon: 'person',
        path: 'users'
      },
    ];
  }
}
