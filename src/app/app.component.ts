import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  includeLetters = true;
  includeNumbers = true;
  includeSymbols = true;
  length = 12;
  password = '';

  constructor() {
    // gives user a password upon page load
    this.generatePassword();
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
    this.generatePassword();
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
    this.generatePassword();
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
    this.generatePassword();
  }

  onChangeLength(eventTarget: EventTarget) {
    const value = (<HTMLInputElement>eventTarget).value;
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) this.length = parsedValue;
    this.generatePassword();
  }

  generatePassword() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOQRSTUVWXYZ';
    const symbols = '!@#$%^&*()_';

    let validChars = '';
    if (this.includeLetters) validChars += letters;
    if (this.includeNumbers) validChars += numbers;
    if (this.includeSymbols) validChars += symbols;

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword.includes('undefined')
      ? ''
      : generatedPassword;
  }
}
