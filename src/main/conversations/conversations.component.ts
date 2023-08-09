import { Component, OnInit } from '@angular/core';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  standalone:true,
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css'],
  imports:[ConheaderComponent,BodyComponent,FooterComponent],
})
export class ConversationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}