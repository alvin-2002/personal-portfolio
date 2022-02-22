
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'personal-portfolio';
  showLoading: boolean = true;

  @Output() loading: EventEmitter<boolean> = new EventEmitter(false);

  constructor() { 
  }

//   onOutletLoaded(component: HomeComponent) {
//     component.isLoadingDone = true;
// } 

  ngOnInit(): void {

  }

}
