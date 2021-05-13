import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {
 
  language: String;

  languages = [
                {name: 'English', shortname: "en", flag: "us"}, 
                {name: 'Hebrew',  shortname: "he", flag: "he"}, 
                {name: 'Russian', shortname: "ru", flag: "ru"}, 
                {name: 'Arabic',  shortname: "ar", flag: "ar"}, 
                {name: 'French',  shortname: "fr", flag: "fr"}, 
                {name: 'Spanish', shortname: "es", flag: "es"}, 
              ];

  constructor(
            public   _translate: TranslateService
  ) { 

    console.log('TranslateConfigService');
    this.language = this.getDefaultLanguage();
    console.log('TranslateConfigService this.language: ' + this.language);
  }

  getDefaultLanguage(){ 
    let language = this._translate.getBrowserLang(); 

    console.log('TranslateConfigService getDefaultLanguage: ' + language)
    this._translate.setDefaultLang(language); 

    return language; 
  } 
  
  setLanguage(setLang) { 
    this._translate.use(setLang); 
    this.language = setLang;
    console.log('TranslateConfigService setLanguage: ' + this.language)
  }

}
