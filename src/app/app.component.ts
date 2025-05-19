import { Component } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { PageComponent } from "./page/page.component";

@Component({
  selector: 'app-root',
  imports: [NavComponent, PageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-cdk-layout-observer';
}
