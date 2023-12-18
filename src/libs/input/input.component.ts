import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type InputType =
  | 'date'
  | 'email'
  | 'number'
  | 'password'
  | 'range'
  | 'search'
  | 'tel'
  | 'time'
  | 'checkbox'
  | 'file'
  | 'text'
  | 'currency'
  | 'datetime-local';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => EbbInputComponent),
    },
  ],
})
export class EbbInputComponent implements ControlValueAccessor {
  public innerValue!: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public onTouched: any;
  public isDisabled = false;
  @Input() type: InputType = 'text';
  @Input() width: 'small' | 'medium' | 'large' | 'extra-large' = 'medium';
  @Input() rounded: 'true' | 'false' = 'true';
  @Input() placeholder = '';
  @Input() invalid: true | false = false;
  @Input() textColor: 'text-primary' | 'text-black' | 'text-white' =
    'text-black';
  @Input() readOnly = false;
  @Input() textAlign:
    | 'text-left'
    | 'text-center'
    | 'text-right'
    | 'text-custom'
    | 'text-search' = 'text-left';
  @Output() update = new EventEmitter<void>();
  @Output() clickOutside = new EventEmitter<void>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private onChange: any;

  public get classes(): string[] {
    const classes = [this.width, this.textColor, this.textAlign];
    return classes;
  }

  public writeValue(value: string) {
    this.innerValue = value;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.isDisabled = disabled;
  }

  public updateValue(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    const parsedValue = parseFloat(inputValue);
    if (this.type === 'number' && !isNaN(parsedValue)) {
      this.innerValue = parsedValue;
    } else if (this.type === 'number') {
      this.innerValue = inputValue;
    }
    this.onChange(this.innerValue);
  }
}
