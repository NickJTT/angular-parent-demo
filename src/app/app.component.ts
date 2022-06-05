import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Parent Component</h1>
    <app-child (greetEvent)='greet($event)'></app-child>
  `
})
export class AppComponent {
  public greet(message: string) {
    alert(message);
  }
}
