import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTableComponent } from './simple-table.component';
import { PeriodicElement } from 'src/app/app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SimpleTableComponent', () => {
  let component: SimpleTableComponent;
  let fixture: ComponentFixture<SimpleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive data', () => {
    const ELEMENT_DATA: PeriodicElement[] = [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    ];
    component.dataSource = ELEMENT_DATA;
    expect(component.dataSource.length).toBe(1);
  });

  it('should render the correct number of rows', () => {
    const ELEMENT_DATA: PeriodicElement[] = [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 3, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    ];

    component.dataSource = ELEMENT_DATA;

    fixture.detectChanges();

    const customElementDebug: DebugElement = fixture.debugElement;
    const trs = customElementDebug.queryAll(By.css('tr'));
    expect(trs.length).toBe(4);
  });

  it('should not render any rows', () => {
    const customElementDebug: DebugElement = fixture.debugElement;
    const trs = customElementDebug.queryAll(By.css('tr'));
    expect(trs.length).toBe(1);
  });
});
