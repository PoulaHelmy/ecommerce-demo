import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'getSliceText'
})
export class SliceTextPipe implements PipeTransform {

  transform(value: string = '', delimiter: string, index: number): string {
    return value.split(delimiter)[index];
  }
}
