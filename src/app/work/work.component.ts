import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  public detail: any[] = [];

  constructor() {


  }

  ngOnInit(): void {
  //   this.detail = [
  //           {date: '15/10/2020', color: '#9C27B0', status: 'Ordered', icon: PrimeIcons.SHOPPING_CART, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!'},
  //           {date: '15/10/2020', color: '#673AB7', status: 'Processing', icon: PrimeIcons.COG, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!'},
  //           {date: '15/10/2020', color: '#FF9800', status: 'Shipped', icon: PrimeIcons.ENVELOPE, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!'},
  //           {date: '16/10/2020', color: '#607D8B', status: 'Delivered', icon: PrimeIcons.CHECK, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!'},
  //   ];

  //   const square = document.querySelector('.square');
  //   // Remove the transition class
  //   square?.classList.remove('square-transition');
  //   // Create the observer, same as before:
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         square?.classList.add('square-transition');
  //         return;
  //       }
  //       square?.classList.remove('square-transition');
  //     });
  //   });
  //   const aa = document.querySelector('.square-wrapper');
  //   if (!aa) {
  //     throw new Error("The element #portal wasn't found");
  //   }
  //   observer.observe(aa);

  //   window.addEventListener('scroll', function() {
  //     console.log("Scrollin'");
  //   });

  }
}
