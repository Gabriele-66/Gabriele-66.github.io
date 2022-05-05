import { Component, OnInit} from '@angular/core';
import { MenuItem,PrimeIcons } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public labelsHeaderComponent: any;

  items!: MenuItem[];

  public lang: any[] = [];
  public selectedLang: string = "";

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {

    this.lang = [
    { lan: 'Italiano', code: 'it' },
    { lan: 'English', code: 'en' }
    ];

    this.translate.get("HeaderComponent").subscribe((res: string) => {
      if (res) {
        this.labelsHeaderComponent = res;
      }
      this.items = [
        {
          label: this.labelsHeaderComponent.ABOUT,
          icon: PrimeIcons.PLUS,
        },
        {
          label: this.labelsHeaderComponent.SKILLS,
          icon: PrimeIcons.PALETTE,
        },
        {
          label: this.labelsHeaderComponent.EXPERIENCE,
          icon: PrimeIcons.CODE,
        },
        {
          label: this.labelsHeaderComponent.EDUCATION,
          icon: PrimeIcons.PENCIL,
        },
        {
          label: this.labelsHeaderComponent.CONTACT,
          icon: PrimeIcons.ENVELOPE,
        },
        {
          label: this.labelsHeaderComponent.QUIT,
          icon: PrimeIcons.POWER_OFF,
        }
      ];
    });
  }

  language() {
    this.translate.use(this.selectedLang);
    this.ngOnInit()
  }
}
