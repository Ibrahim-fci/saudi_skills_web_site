import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../Services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
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
