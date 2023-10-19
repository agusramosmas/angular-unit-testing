import { NgFor } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainService } from 'src/app/services/main.service';

import { DropdownComponent } from './dropdown.component';

describe('SearchInputComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  const mockedServiceData = {
    getData: () => [3, 5],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DropdownComponent,
        MatFormFieldModule,
        MatSelectModule,
        NgFor,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: MainService,
          useValue: mockedServiceData,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have defaults set', () => {
    expect(component.foods).toBeTruthy();
    expect(component.foods.length).toBe(3);
  });

  it('should change selected value', () => {
    const select: HTMLSelectElement = fixture.debugElement.query(
      By.css('mat-select')
    ).nativeElement;

    select.value = component.foods[2].value;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(select.value).toBe('tacos-2');
  });

  it('should load service data', () => {
    component.ngOnInit();
    fixture.detectChanges;
    expect(component.serviceData.length).toBe(2);
  });
});
