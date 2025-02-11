import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { InputComponent } from '../../shared/input/input.component';
import { AlertComponent } from '../../shared/alert/alert.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    AlertComponent,
    AlertComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  auth = inject(AuthService);

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        ),
      ],
    ],
    confirmPassword: ['', [Validators.required]],
    phoneNumber: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(13)],
    ],
  });

  showAlert = signal(false);
  alertMsg = signal('Please Wait your account is being created');
  alertColor = signal('blue');
  inSubmission = signal(false);

  async register() {
    this.showAlert.set(true);
    this.alertMsg.set('Please Wait your account is being created');
    this.alertColor.set('blue');
    this.inSubmission.set(true);

    try {
      await this.auth.createUser(this.form.getRawValue());
    } catch (e) {
      console.error(e);
      this.alertMsg.set(
        'An unexpected error accoured! please try again lataer'
      );
      this.alertColor.set('red');
      this.inSubmission.set(false);
      return;
    }
    this.alertMsg.set('Succes! your account has been created');
    this.alertColor.set('green');
  }
}
