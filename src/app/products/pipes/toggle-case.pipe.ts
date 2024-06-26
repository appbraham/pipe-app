import { Pipe, PipeTransform } from "@angular/core";

// abraham | toggleCase = 'ABRAHAM'
// ABRAHAM | toggleCase = 'abraham'

@Pipe({
  name:'toggleCase'
})
export class ToggleCasePipe implements PipeTransform{

  transform(value: string, toUpper: boolean = false): string {
    return toUpper ? value.toUpperCase() : value.toLowerCase()
  }

}
