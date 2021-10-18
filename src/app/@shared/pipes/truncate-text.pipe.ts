import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(value: string, length: number): string {
    // https://en.wikipedia.org/wiki/Longest_word_in_English
    const biggestWord = 50;
    const ellipses = '...';
    if (!value) {
      return '';
    }

    if (typeof value === 'undefined') {
      return value;
    }

    if (value.length <= length) {
      return value;
    }

    // .. truncate to about correct length
    let truncatedText = value.slice(0, length + biggestWord);

    // .. now nibble ends till correct length
    while (truncatedText.length > length - ellipses.length) {
      const lastSpace = truncatedText.lastIndexOf(' ');

      if (lastSpace === -1) {
        break;
      }

      truncatedText = truncatedText.slice(0, lastSpace).replace(/[!,.?]$/, '');

    }


    return truncatedText + ellipses;
  }

}
