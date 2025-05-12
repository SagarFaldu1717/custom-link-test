// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  redirect(): void {
    window.location.href = 'https://tel-qa-api.telescopehealth.com/app-facade/redirect-url/m5v2?domain=pp3';
  }
}
