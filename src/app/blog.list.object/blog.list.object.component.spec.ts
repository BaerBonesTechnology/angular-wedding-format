import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListObjectComponent } from './blog.list.object.component';

describe('BlogListObjectComponent', () => {
  let component: BlogListObjectComponent;
  let fixture: ComponentFixture<BlogListObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogListObjectComponent]
    });
    fixture = TestBed.createComponent(BlogListObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
