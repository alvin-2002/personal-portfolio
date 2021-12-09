import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-portfolio';
  showLoading: boolean = true;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.showLoading = false;
    }, 3500)
  }
}
