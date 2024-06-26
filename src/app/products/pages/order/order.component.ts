import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {

  public isUppercase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman', canFly: true, color: Color.blue
    },
    {
      name: 'Batman', canFly: false, color: Color.black
    },
    {
      name: 'Daredevil', canFly: false, color: Color.red
    },
    {
      name: 'Robin', canFly: false, color: Color.green
    },
    {
      name: 'Linterna Verde', canFly: true, color: Color.green
    },
  ];

  toggleUpperCase(): void{
    this.isUppercase = !this.isUppercase;
  }

  changeOrder( value: keyof Hero ){
    this.orderBy = value;
  }

}
