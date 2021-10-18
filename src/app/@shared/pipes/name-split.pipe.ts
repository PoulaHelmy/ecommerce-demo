import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'nameSplit'
})
export class NameSplitPipe implements PipeTransform {

  transform(value: string, delimiter: string | undefined, wordsCount: number | undefined): string {
    if (value === null) {
      return '';
    }
    // @ts-ignore
    const words: string[] = value.split(delimiter);
    return words.splice(0, wordsCount).join(delimiter);
  }


}
