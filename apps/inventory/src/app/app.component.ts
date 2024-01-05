import { ProductListComponent } from '@angular-monorepo/products';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [ProductListComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'inventory';
}
