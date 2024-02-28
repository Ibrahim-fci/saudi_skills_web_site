import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../Services/language.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  lang2: string = '';
  currentLang = this.langauageService.langData$;
  lang = this.langauageService.langData$;



  ngOnInit(): void {
    this.currentLang.subscribe((data: any) => {
      this.lang2 = data;
    })
  }


  constructor(private translateService: TranslateService, private langauageService: LanguageService) {
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }

  changeLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.translateService.use(lang);
    this.langauageService.setLangData(lang);



  }

}
