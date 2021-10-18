import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'getLength',
})
export class GetLengthPipe implements PipeTransform {
  transform(value: any): any {
    return value ? value?.length : 0;
  }
}
