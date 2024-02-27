import { LocalizedString } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  langData: BehaviorSubject<any> = new BehaviorSubject<any>({});
  langData$ = this.langData.asObservable();

  constructor() {

    this.langData.next(localStorage.getItem('lang') || 'en');
  }

  setLangData(data: any) {
    this.langData.next(data);
  }

  getLangData() {
    return this.langData$;
  }
}
