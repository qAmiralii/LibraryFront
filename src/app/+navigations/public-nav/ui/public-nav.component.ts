import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TestComponent } from "../../../components/test/test.component";

@Component({
  selector: 'app-public-nav',
  imports: [RouterOutlet, RouterLink, TestComponent,],
  templateUrl: './public-nav.component.html',
  styleUrl: './public-nav.component.scss'
})
export class PublicNavComponent {

}
