import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../Services/language.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  lang: string = '';
  currentLang = this.langauageService.langData$;


  constructor(private langauageService: LanguageService) {


  }

  ngOnInit(): void {
    this.currentLang.subscribe((data: any) => {
      this.lang = data;
    })
  }

}
