import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-detail.component.html',
  styles: `
    :host {
      width: 100%;
    }
  `,
})
export class CountryDetailComponent {
  @Input() country$!: Observable<any>;
}
