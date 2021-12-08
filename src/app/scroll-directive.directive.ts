import { Directive, Output, EventEmitter, ElementRef, AfterViewInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Subscription } from 'rxjs';
// import { startWith } from 'rxjs/operators';

@Directive({
  selector: '[appScrollDirective]'
})
export class ScrollDirectiveDirective {

  @Output() appear: EventEmitter<boolean> = new EventEmitter();

  constructor(private element: ElementRef<HTMLDivElement>) { }

  isTestDivScrolledIntoView: boolean = false;

  @HostListener('window:scroll')
  isScrolledIntoView(){
    
    if ((this.element)){
      const rect = this.element.nativeElement.getBoundingClientRect();
      
      const topShown = rect.top >= 0;
      const bottomShown = (rect.bottom - (rect.height / 2)) <= window.innerHeight;
      this.isTestDivScrolledIntoView = topShown && bottomShown;
      if (this.isTestDivScrolledIntoView ){
        // console.log('elements', this.element)
        // console.log('height', window.innerHeight)
        this.appear.emit(true);
      } 
      // else this.appear.emit('normal');

    }
  }

}

