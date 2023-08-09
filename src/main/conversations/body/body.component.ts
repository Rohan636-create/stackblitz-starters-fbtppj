import { Component, OnInit } from '@angular/core';
import { MessgaeComponent } from './messgae/messgae.component';

@Component({ 
  standalone:true,
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  imports:[MessgaeComponent],
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}