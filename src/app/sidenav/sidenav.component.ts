import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private translateService: TranslateService, @Inject(DOCUMENT) private document: Document) {
  }
  changeLanguage(event: any) {
    event.preventDefault();
    let usedLang = localStorage.getItem('language') ?? this.translateService.defaultLang;
    let root = this.document.documentElement; // Html tag
    if (usedLang == 'ar-EG') {
      this.translateService.use("en-US");
      localStorage.setItem('language', 'en-US') //store currentLang in localStorage
      root.lang = 'en';
      root.dir = 'ltr';
    } else {
      this.translateService.use("ar-EG");
      localStorage.setItem('language', 'ar-EG') //store currentLang in localStorage
      root.lang = 'ar';
      root.dir = 'rtl';

    }
  }
  /* 
    ===================================
        Side Menu Open & Close
    ====================================== 
  */
  toggleSidebar() {
    let sideBar = document.getElementById('sidebar');
    sideBar.classList.toggle("active");
  }

  ngOnInit(): void {
    let usedLang = localStorage.getItem('language') ?? this.translateService.defaultLang;
    let root = this.document.documentElement; // Html tag
   if(usedLang !== this.translateService.defaultLang)
   {
    this.translateService.use(usedLang);
    root.lang = 'ar';
    root.dir = 'rtl';
   }


  }

}
