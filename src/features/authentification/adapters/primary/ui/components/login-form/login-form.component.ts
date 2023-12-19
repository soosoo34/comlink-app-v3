import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  @Input({ required: true }) loginForm!: FormGroup;
  @Input() loading = false;
  @Output() tryLogin = new EventEmitter<void>();

  onTryLogin() {
    this.tryLogin.emit();
  }
}
