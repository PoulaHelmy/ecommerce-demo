import {Pipe, PipeTransform} from '@angular/core';
import {SimpleTicketChatData} from '@core/@data/General/Chat';

@Pipe({
  name: 'appFilter'
})
export class FilterPipe implements PipeTransform {

  transform(items: SimpleTicketChatData[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    return items.filter((it) => {
      return it.teacher.name.toLowerCase().includes(searchText.toLowerCase());
    });

  }
}
