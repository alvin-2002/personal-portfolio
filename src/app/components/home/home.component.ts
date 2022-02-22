import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, OnInit} from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('heroAnimate', [
      transition(':enter', [
        query('.hero-item', style({opacity: 0, transform: 'translateY(-50px)'})),
        query('.hero-item', stagger('200ms', [
          animate('400ms 0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
        ])),
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {
  faGit = faGithub;
  faLinkedin = faLinkedin;
  faEmail = faEnvelope;
  experssions:boolean = true
  isLoadingDone:boolean = false;

  animationState: string = 'hidden';

  constructor() { 
   
  }

  refresh() {
    window.location.reload()
  }

  animationStart(event): void {
    const options = {
      strings: ['Software Engineer', 'Software Developer', 'Front-End Developer', 'Web Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      lifelike: true,
      loop: true
    };
    const typed = new Typed('.typed-element', options);
  }


  ngOnInit(): void {
  }

}
