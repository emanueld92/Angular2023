import { Component, OnInit } from '@angular/core';

interface Card{
  title:string;
  subtitle:string;
  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mi primer App en Angular';
  public listCard:Card[]=[];
  ngOnInit(): void {
    this.listCard=[
      {title:'Video 1', subtitle:'sub titulo 1'},
      {title:'Video 2', subtitle:'sub titulo 2'},
      {title:'Video 3', subtitle:'sub titulo 3'}
    ]
  }
}
