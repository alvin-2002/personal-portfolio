import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
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
export class NavbarComponent implements OnInit {
  isScrolled: boolean = false;
  displayNav: boolean = false;

  url:string = '';

  currentPosition = window.scrollY;

  constructor(private router: Router) { 
    // detect changes in url
    router.events.subscribe((val) => {
      this.url = window.location.hash;
    })
  }

  setValue(value: string) {
    console.log(value)
    this.url = value;
  }

  @HostListener("window:scroll", ['$event'])
  scrollEvent() {
    // console.log(window.scrollY)
    // if (window.scrollY > this.currentPosition) {
    //   this.displayNav = true;
    // } else if (window.scrollY < this.currentPosition) {
    //   this.displayNav = false;
    // }
    // if (window.scrollY == 0){
    //   this.displayNav = false;
    // } 
    if (window.scrollY >= 80) {
      this.isScrolled = true;
    } 
    else {
      this.isScrolled = false;
    }
    this.currentPosition = window.scrollY;
  }


  ngOnInit(): void {

  }



}
