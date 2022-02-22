import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('navAnimate', [
      transition('* => *', [
        query('.nav-item', style({opacity: 0, transform: 'translateY(-50px)'})),
        query('.nav-item', stagger('200ms', [
          animate('500ms 0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
        ])),
      ]),
    ]),
  ]
})
export class NavbarComponent implements OnInit {
  isScrolled: boolean = false;
  displayNav: boolean = false;

  @Output() navAnimationDone: EventEmitter<string> = new EventEmitter();

  url:string = '';

  currentPosition = window.scrollY;

  constructor(private router: Router, private scroller: ViewportScroller) { 
    this.url = window.location.hash;

    console.log(this.url)
    // detect changes in url
    this.router.events.subscribe((val) => {
      this.url = window.location.hash;
      console.log(this.url)
    })
  }

  animationDone($event: any) {

    this.navAnimationDone.emit('done');
  }

  @HostListener("window:scroll", ['$event'])
  scrollEvent() {
    if (window.scrollY >= 80) {
      this.isScrolled = true;
    } 
    else {
      this.isScrolled = false;
    }
    this.currentPosition = window.scrollY;
  }

  ngAfterViewInit() {

  }


  ngOnInit(): void {
    //The fix was to add a delay. I think maybe some DOM structure changes were happening before/after the scroll to cause an offset
    if (this.url !== ''){
      console.log('hee')
      setTimeout(() => {
        this.scroller.scrollToAnchor(this.url.substring(1))
      }, 100)
    }

  }



}
