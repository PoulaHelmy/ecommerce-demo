import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'imgDefault',
})
export class ImgDefaultPipe implements PipeTransform {
  transform(imgUrl: string | null | undefined, placeholder: string): any {
    return imgUrl ? imgUrl : placeholder;
  }
}
