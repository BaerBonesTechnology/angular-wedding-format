import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-siteheader',
  templateUrl: './siteheader.component.html',
  styleUrls: ['./siteheader.component.css']
})
export class SiteHeaderComponent {
  coupleName: string = 'John & Jane';
}
