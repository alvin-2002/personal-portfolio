import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';



@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  // animations: [
  //   trigger('circleState', [
  //     state('in', style({
  //       opacity: 1,
  //       // transform: 'translateX(0)'
  //     })), 
  //     transition('void => *', [
  //       // this is the initial style
  //       style({
  //         opacity: 0,
  //         // transform: 'translateX(-100px)'
  //       }),
  //       animate(2000)
  //     ]),
  //   ])
  // ]
})
export class LoadingComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter(true);
  // timer = new Subject<Boolean>();
  constructor() { }
  ngAfterViewInit(): void {
    anime({
      targets: ['#loading-logo circle'],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutQuart',
      duration: 1900,
      delay: 300,
      direction: 'alternate',
      loop: false,
    });

    anime({
      targets: ['#loading-logo path'],
      fill: '#ffd89b',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutQuart',
      duration: 1500,
      delay: 2000,
      direction: 'alternate',
      loop: false,
      baseFrequency: 0,
    });

    anime({
      targets: ['#loading-logo'],
      // baseFrequency: 0,
      scale: 0,
      loop: false,
      duration: 400,
      // direction: 'alternate',
      delay: 3300,
      easing: 'easeInOutQuad'
    }).finished.then(() => {
      this.loading.emit(false);
    });
  }

  ngOnInit(): void {

  }

}
