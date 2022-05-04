import { Component, OnInit } from '@angular/core';
import { MenuItem,PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'About',
        icon: PrimeIcons.PLUS,
      },
      {
        label: 'Skills',
        icon: PrimeIcons.PALETTE,
      },
      {
        label: 'Experience',
        icon: PrimeIcons.CODE,
      },
      {
        label: 'Education',
        icon: PrimeIcons.PENCIL,
      },
      {
        label: 'Contact',
        icon: PrimeIcons.ENVELOPE,
      },
      {
        label:'Quit',
        icon: PrimeIcons.POWER_OFF,
      }
    ];
  }
}
