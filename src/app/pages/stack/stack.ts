import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-stack',
  imports: [],
  template: `<p>stack works!</p>`,
  styleUrl: './stack.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Stack { }
