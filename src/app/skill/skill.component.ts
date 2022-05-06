import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  value: number = 0;
  public skill: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.skill= [
      { lan: "angular", value: '85%' },
      { lan: "bootstrap, primeng, ...", value: '85%' },
      { lan: "html, css, js", value: '70%' },
      { lan: "sql, mysql", value: '60%' },
      { lan: "Java", value: '60%' },
      { lan: "spring", value: '65%' },
      { lan: "c", value: '85%' },
      { lan: "c++", value: '95%' },
      { lan: "scripting", value: '90%' },
      { lan: "hardware", value: '80%' },
    ];
  }

}
