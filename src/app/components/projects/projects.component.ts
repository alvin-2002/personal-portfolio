import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('aboutAnimate', [
      state('hidden', style({
        opacity: 0, 
        transform: 'translateY(15px)'
      })),

        transition('hidden => appear', [
          animate(800, keyframes([
            style({
              transform: 'translateX(-20px)',
              opacity: 0,
     
            }),
            style({
              transform: 'translateX(-10px)',
              opacity: 0.5,
            }),
            style({
              transform: 'translateX(-0px)',
              opacity: 1,
            }),
          ]))
        ])
      ]),
  ]
})
export class ProjectsComponent implements OnInit {

  gitHub = faGithub;
  link = faExternalLinkAlt

  display: string[] = [
    'hidden', 
    'hidden', 
    'hidden',
  ];

  onAppear(id: number) {
    if (this.display[id] == 'hidden') {
      this.display[id] = 'appear'
    } 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
