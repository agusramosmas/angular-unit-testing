import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call save method', () => {
    spyOn(component, 'callSave');
    const customElement: HTMLElement = fixture.nativeElement;
    const buttonSave = customElement.querySelector('button');
    expect(buttonSave).withContext('Valid button').toBeTruthy();

    buttonSave?.dispatchEvent(
      new Event('click', { bubbles: true, cancelable: false })
    );
    expect(component.callSave)
      .withContext('saved method called')
      .toHaveBeenCalled();
  });

  it('should mutate saved property', () => {
    const customElement: HTMLElement = fixture.nativeElement;
    const buttonSave = customElement.querySelector('button');
    expect(buttonSave).withContext('Valid button').toBeTruthy();

    buttonSave?.dispatchEvent(
      new Event('click', { bubbles: true, cancelable: false })
    );
    expect(component.saved).withContext('prop mut properly').toBeTrue();
  });
});
