import { Component, Input } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FocusMonitor } from '@angular/cdk/a11y';
import { AsyncPipe, JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ElementRef,
  OnDestroy,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  model,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MAT_FORM_FIELD,
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Subject } from 'rxjs';
import { from } from 'rxjs';
@Component({
  selector: 'app-test',
  imports: [
    MatSlideToggle,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    AsyncPipe,
    JsonPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div role="group" [formGroup]="parts">
    <input class="area" formControlName="area" maxlength="3">
    <span>&ndash;</span>
    <input class="exchange" formControlName="exchange" maxlength="3">
    <span>&ndash;</span>
    <input class="subscriber" formControlName="subscriber" maxlength="4">
  </div>
  `,
  styleUrl: './test.component.scss'
})
export class TestComponent {
  parts: FormGroup;

  @Input()
  public get value(): MyTel | null {
    let n = this.parts.value;
    if (n.area.lenth == 3) {
      return new MyTel(n.area, n.exchange, n.subscribe)
    }
    return null;
  }
  set value(tel: MyTel | null) {
    tel = tel || new MyTel('', '', '');
    this.parts.setValue({area: tel.area, exchange: tel.exchange, subscriber: tel.subscriber});
  }

  constructor(fb: FormBuilder) {
    this.parts = fb.group({ 'area': '', 'exchange': '', 'subscribe': '' });
  }

}
class MyTel {
  constructor(public area: string, public exchange: string, public subscriber: string) { }
}
