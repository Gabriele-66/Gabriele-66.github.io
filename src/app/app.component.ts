import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  manutenzione = true;
  constructor(private primengConfig: PrimeNGConfig, private translate: TranslateService) {
    translate.setDefaultLang('it');
    translate.use('it');
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
