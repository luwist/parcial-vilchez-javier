import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDeleteComponent } from './container-delete.component';

describe('ContainerDeleteComponent', () => {
  let component: ContainerDeleteComponent;
  let fixture: ComponentFixture<ContainerDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
