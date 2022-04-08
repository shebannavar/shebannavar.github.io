import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  public name: string;
  public careerObj: string;

  constructor(
  ) {
    this.name = `Santosh Shebannavar`;
    this.careerObj = `I am a driven individual with the ability to adapt to any situation and proven potantial to grow self and others.`
  }

  ngOnInit(): void {
  }

}
