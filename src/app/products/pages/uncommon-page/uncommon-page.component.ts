import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: ``
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Abraham';
  public gender: 'male'|'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  public changeClient(): void {
    this.name = 'Cristina';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Maria','Pedro','Fernando','Hernando','Eduardo','Melissa','Natalia']
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(){
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Abraham',
    age: '37',
    address: 'Arequipa - Perú'
  }

  // Async Pipe

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject ) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos la data de la promesa');

    }, 3500);
  });

}
