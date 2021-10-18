import {Injectable} from '@angular/core';
import {HotToastService} from '@ngneat/hot-toast';


@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  constructor(private toast: HotToastService) {
  }

  showSuccess(msg: string, time = 3000): void {
    this.toast.success(msg, {
      duration: time,
    });
  }

  showFail(msg: string, duration = 3000): void {
    this.toast.error(msg, {
      duration: duration,
    });
  }

  showLoading(message: string): void {
    this.toast.loading(message, {
      position: 'top-center',
      id: 'loading'
    });
  }

  hideLoading(): void {
    this.toast.close('loading');
  }
}
