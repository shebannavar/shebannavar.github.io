import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  technical_skills = [
    {
      category: 'Programming Languages',
      image: '../../../assets/images/1.jpg',
      values: [
        "JavaScript", "TypeScript", "Python", "Java"
      ],
      side: 'left',
    },
    {
      category: 'Web Development - Frameworks, Technology & Tools',
      image: '../../../assets/images/2.png',
      values: [
        "Angular 13", "React", "Express.js", "Node.js", "NextJS", "REST API", "Android"
      ],
      side: 'right',
    },
    {
      category: 'DevOps',
      image: '../../../assets/images/3.png',
      values: [
        "Azure", "GitHub", "Bitbucket"
      ],
      side: 'left',
    },
    {
      category: 'Databases',
      image: '../../../assets/images/4.png',
      values: [
        "MongoDB", "MySQL", "Firebase", "SQL"
      ],
      side: 'right',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
