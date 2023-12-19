import { Component, Input } from '@angular/core';

export type size = 'small' | 'medium' | 'large';
export type color = 'primary' | 'secondary' | 'ternary' | 'alerte' | 'validate';
export type textColor = 'none' | 'white';

export enum PredefinedIcons {
  Save = 'fa fa-save',
  Trash = 'fa fa-trash',
  Edit = 'fa fa-edit',
  Backward = 'fa fa-backward',
  Archivate = 'fa fa-archive',
}

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent {
  /*@Input() predefinedIcon: keyof typeof PredefinedIcons;*/
  @Input() isLoading = false;
  @Input() size: size = 'medium';
  @Input() icon = '';
  @Input() text = '';
  @Input() disabled = false;
  @Input() textColor: textColor = 'none';
  @Input() color: color = 'primary';

  get buttonClasses(): string {
    return `${this.size} ${this.color} ${this.textColor}`;
  }

  /*  getIconClass(): string {
      return PredefinedIcons[this.predefinedIcon];
    }*/
}
