import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact { }
