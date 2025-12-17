import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'navbar',
  imports: [],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './navbar.scss'
})
export class Navbar {
menuOpen = false;

}
