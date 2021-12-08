import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('navAnimate', [
      transition('* => *', [
        query('.nav-item', style({opacity: 0, transform: 'translateY(-50px)'})),
        query('.nav-item', stagger('200ms', [
          animate('700ms 0.7s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
        ])),
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {
  faGit = faGithub;
  faLinkedin = faLinkedin;
  faEmail = faEnvelope;
  expression = false;
  constructor() { }

  @ViewChild('testDiv') testDiv: ElementRef<HTMLDivElement> = {} as ElementRef;
  isTestDivScrolledIntoView: boolean = false;
  count: number = 0;

  @HostListener('window:scroll')
  isScrolledIntoView(){
    if (this.testDiv && this.count === 0){
      const rect = this.testDiv.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.isTestDivScrolledIntoView = topShown && bottomShown;
      this.count++;
      console.log(  this.isTestDivScrolledIntoView )
    }
  }

  ngOnInit(): void {
  }

}
