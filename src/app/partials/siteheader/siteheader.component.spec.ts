import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHeaderComponent } from './siteheader.component';

describe('SiteheaderComponent', () => {
  let component: SiteheaderComponent;
  let fixture: ComponentFixture<SiteheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteheaderComponent]
    });
    fixture = TestBed.createComponent(SiteheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
