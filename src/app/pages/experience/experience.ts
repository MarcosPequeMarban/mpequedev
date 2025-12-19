import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
   selector: 'experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience { }
