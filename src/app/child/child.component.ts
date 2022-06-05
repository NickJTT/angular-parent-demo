import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>Child Component</h2>
    <button (click)='callParentGreet()'>Greet</button>
  `
})
export class ChildComponent {
  @Output('greetEvent') public greetEvent = new EventEmitter();
  public message: string = 'Hello, World!';

  public callParentGreet() {
    this.greetEvent.emit(this.message);
  }
}
