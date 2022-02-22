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
        transform: 'translateX(15px)'
      })),

        transition('hidden => appear', [
          animate(300, keyframes([
            style({
              transform: 'translateY(30px)',
              opacity: 0,
            }),
            style({
              transform: 'translateY(20px)',
              opacity: 0.3,
            }),
            style({
              transform: 'translateY(10px)',
              opacity: 0.5,
            }),
            style({
              transform: 'translateY(5px)',
              opacity: 0.7,
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
