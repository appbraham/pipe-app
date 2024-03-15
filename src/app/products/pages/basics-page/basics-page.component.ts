import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: ``
})
export class BasicsPageComponent {

  public nameLower: string = 'abraham';
  public nameUpper: string = 'ABRAHAM';
  public fullName: string = 'aBrAhAm GuTiErReZ';

  public customDate: Date = new Date();

}
