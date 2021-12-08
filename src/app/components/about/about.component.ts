import { animate, group, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('aboutAnimate', [
      state('hidden', style({
        opacity: 0, 
        transform: 'translateY(15px)'
      })),
      // state('appear', style({ 
      //   opacity: 1, 
      //   transform: 'translateY(0)' 
      // })),
        transition('hidden => appear', [
          animate(800, keyframes([
            style({
              transform: 'translateY(20px)',
              opacity: 0,
     
            }),
            style({
              transform: 'translateY(10px)',
              opacity: 0.5,
            }),
            style({
              transform: 'translateY(0px)',
              opacity: 1,
            }),
          ]))
        ])
      ]),
  ]
})
export class AboutComponent implements OnInit {
  state:string = 'hidden';
  display:boolean = false;


  onAppear(value: boolean) {
    if (value) {
      this.state = 'appear';
      this.display = value;
    } 
  }

  // @HostListener('window:scroll')
  // isScrolledIntoView(){
  //   // console.log(this.testDiv.nativeElement)
  //   if ((this.testDiv)){
  //     const rect = this.testDiv.nativeElement.getBoundingClientRect();
  //     const topShown = rect.top >= 0;
  //     const bottomShown = rect.bottom <= window.innerHeight;
  //     this.isTestDivScrolledIntoView = topShown && bottomShown;
  //     if (this.isTestDivScrolledIntoView ) this.state = 'appear';
  //     this.count++;
      
  //     console.log(  this.isTestDivScrolledIntoView )
  //   }
  // }
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

}
