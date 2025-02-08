import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };

  login() {
    console.log(this.credentials);

    // this.credentials.set(true);
    // this.alertMsg.set('Please Wait your account is being created');
    // this.alertColor.set('blue');
  }
}
