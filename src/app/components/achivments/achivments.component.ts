import { Component } from '@angular/core';
import { LanguageService } from '../../Services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-achivments',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './achivments.component.html',
  styleUrl: './achivments.component.css'
})
export class AchivmentsComponent {
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
