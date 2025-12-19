import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stack.html',
  styleUrls: ['./stack.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Stack { }
