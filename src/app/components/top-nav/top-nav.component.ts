import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../Services/language.service';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [
    TranslateModule,

  ],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent {
  lang = this.langauageService.langData$;

  constructor(private translateService: TranslateService, private langauageService: LanguageService) {
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }

  changeLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.translateService.use(lang);
    this.langauageService.setLangData(lang);



  }

}
